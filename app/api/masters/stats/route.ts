import { type NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(request: NextRequest) {
  try {
    console.log("Masters Stats API: Request received");
    const { searchParams } = new URL(request.url);
    const period = searchParams.get("period") || "all";

    const client = await clientPromise;
    const db = client.db("spa-salon");

    // Calculate date filter based on period
    let dateFilter = {};
    let certificateDateFilter = {};
    const now = new Date();

    if (period === "month") {
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      dateFilter = { 
        date: { $gte: startOfMonth.toISOString().split("T")[0] } 
      };
      certificateDateFilter = { 
        createdAt: { $gte: startOfMonth.toISOString() } 
      };
    } else if (period === "year") {
      const startOfYear = new Date(now.getFullYear(), 0, 1);
      dateFilter = { 
        date: { $gte: startOfYear.toISOString().split("T")[0] } 
      };
      certificateDateFilter = { 
        createdAt: { $gte: startOfYear.toISOString() } 
      };
    } else if (period === "all") {
      // No date filters for "all" period
      dateFilter = {};
      certificateDateFilter = {};
    }

    console.log("Masters Stats API: Date filter:", dateFilter);
    console.log("Masters Stats API: Certificate date filter:", certificateDateFilter);

    // Service prices mapping
    const servicePrices: Record<string, number> = {
      "Massage cổ điển": 800,
      "Massage bạch huyết": 1200,
      "Massage thể thao": 1000,
      "Massage mặt": 600,
    };

    // Lấy tất cả master names từ các nguồn
    const allMasters = new Set<string>();

    // 1. Lấy masters từ users
    console.log("Masters Stats API: Fetching users...");
    const users = await db
      .collection("users")
      .find({ preferredMaster: { $exists: true, $ne: null } })
      .toArray();
    
    users.forEach(user => {
      if (user.preferredMaster) {
        allMasters.add(user.preferredMaster.toLowerCase().trim());
      }
    });

    // 2. Lấy masters từ bookings
    console.log("Masters Stats API: Fetching bookings with filter:", dateFilter);
    const bookings = await db
      .collection("bookings")
      .find({
        status: { $ne: "cancelled" },
        ...dateFilter,
        master: { $exists: true, $ne: null }
      })
      .toArray();
    
    bookings.forEach(booking => {
      if (booking.master) {
        allMasters.add(booking.master.toLowerCase().trim());
      }
    });

    // 3. Lấy masters từ certificates
    console.log("Masters Stats API: Fetching certificates with filter:", certificateDateFilter);
    const certificates = await db
      .collection("certificates")
      .find({
        ...certificateDateFilter,
        masterName: { $exists: true, $ne: null }
      })
      .toArray();
    
    certificates.forEach(cert => {
      if (cert.masterName) {
        allMasters.add(cert.masterName.toLowerCase().trim());
      }
    });

    console.log("Masters Stats API: Found masters:", Array.from(allMasters));

    // Khởi tạo stats object tự động
    const stats: Record<string, any> = {};
    
    Array.from(allMasters).forEach(masterName => {
      stats[masterName] = {
        totalClients: 0,
        totalBookings: 0,
        totalRevenue: 0,
        totalCertificates: 0,
        certificateRevenue: 0,
        clients: [] as string[],
        services: {} as Record<string, { count: number; duration: string; revenue: number }>,
      };
    });

    // Đếm clients từ users
    users.forEach((user) => {
      const master = user.preferredMaster?.toLowerCase().trim();
      if (master && stats[master]) {
        stats[master].totalClients++;
        if (user.email && !stats[master].clients.includes(user.email)) {
          stats[master].clients.push(user.email);
        }
      }
    });

    // Xử lý bookings
    bookings.forEach((booking) => {
      const master = booking.master?.toLowerCase().trim();
      if (master && stats[master]) {
        stats[master].totalBookings++;
        
        const service = booking.service;
        const duration = booking.duration || "N/A";
        const price = servicePrices[service] || 0;
        
        stats[master].totalRevenue += price;
        
        if (!stats[master].services[service]) {
          stats[master].services[service] = {
            count: 0,
            duration,
            revenue: 0
          };
        }
        
        stats[master].services[service].count++;
        stats[master].services[service].revenue += price;
      }
    });

    // Xử lý certificates
    certificates.forEach((cert) => {
      const masterName = cert.masterName?.toLowerCase().trim();
      if (masterName && stats[masterName]) {
        stats[masterName].totalCertificates++;
        
        let totalValue = 0;
        if (cert.total) {
          // Extract numeric value (e.g., "1150 ₴" -> 1150, "1500" -> 1500)
          const numericMatch = cert.total.toString().match(/\d+/);
          if (numericMatch) {
            totalValue = parseInt(numericMatch[0], 10);
          }
        }
        
        stats[masterName].certificateRevenue += totalValue;
        stats[masterName].totalRevenue += totalValue;
      }
    });

    console.log("Masters Stats API: Stats calculated successfully");
    console.log("Masters Stats API: Stats object keys:", Object.keys(stats));
    
    // Format response để dễ đọc hơn
    const formattedStats = Object.entries(stats).map(([masterName, data]) => ({
      masterName,
      ...data,
      clientsCount: data.clients.length
    }));

    return NextResponse.json({ 
      success: true,
      stats: formattedStats,
      period,
      masterCount: Object.keys(stats).length,
      summary: {
        totalMasters: Object.keys(stats).length,
        totalRevenue: Object.values(stats).reduce((sum, master) => sum + master.totalRevenue, 0),
        totalBookings: Object.values(stats).reduce((sum, master) => sum + master.totalBookings, 0),
        totalClients: Object.values(stats).reduce((sum, master) => sum + master.totalClients, 0),
        totalCertificates: Object.values(stats).reduce((sum, master) => sum + master.totalCertificates, 0)
      }
    });
    
  } catch (error) {
    console.error("Masters Stats API: Error occurred:", error);
    return NextResponse.json(
      { 
        success: false,
        error: "Failed to fetch master statistics",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}