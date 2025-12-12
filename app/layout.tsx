import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Royal Spa & Massage",
  description:
    "Dịch vụ massage chuyên nghiệp: cổ điển, dẫn lưu bạch huyết, thể thao, massage mặt. Đặt lịch online ngay hôm nay.", // Đã xóa: "Có bán phiếu quà tặng."
  keywords: [
    "massage",
    "tiệm spa",
    "massage cổ điển",
    "massage dẫn lưu bạch huyết",
    "massage thể thao",
    "massage mặt",
    "thư giãn",
    "sức khỏe", 
    "phiếu quà tặng", 
    "massage Hannover", 
    "spa salon",
    "wellness",
  ],
  authors: [{ name: "Royal" }],
  creator: "Royal",
  publisher: "Royal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://spa-salon.vercel.app"),
  // Đã xóa thiết lập 'alternates' (ngôn ngữ thay thế) theo yêu cầu.
  
  openGraph: {
    title: "Royal Spa & Massage",
    description:
      "Các gói massage chuyên nghiệp: cổ điển, dẫn lưu bạch huyết, thể thao, massage mặt. Đặt lịch online.", // Đã xóa: "Bán phiếu quà tặng"
    url: "https://spa-salon.vercel.app",
    siteName: "Royal Spa & Massage",
    locale: "vi_VN", // Đã thay đổi ngôn ngữ thành Việt Nam
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Royal Spa & Massage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Spa & Massage",
    description: "Massage chuyên nghiệp cho sức khỏe và sắc đẹp của bạn",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              name: "Royal Spa & Massage",
              description:
                "Massage chuyên nghiệp cho sức khỏe và sắc đẹp của bạn",
              url: "https://spa-salon.vercel.app",
              telephone: "", // Giữ nguyên số điện thoại quốc tế này nếu bạn không có số VN
              address: {
                "@type": "PostalAddress",
                streetAddress: "Đường Mẫu, 123", // Đã dịch
                addressLocality: "Hannover", // Giữ nguyên địa điểm
                addressCountry: "UA", // Giữ nguyên mã quốc gia
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "09:00",
                  closes: "21:00",
                },
              ],
              priceRange: "₴₴", // Giữ nguyên ký hiệu tiền tệ
              image: "https://spa-salon.vercel.app/og-image.jpg",
              sameAs: [
                "https://facebook.com/spa-salon",
                "https://instagram.com/spa-salon",
                "https://twitter.com/spa-salon",
              ],
              // GIỮ LẠI offerCatalog NHƯNG LOẠI BỎ THÔNG TIN VỀ GIÁ VÀ ƯU ĐÃI NẾU CÓ
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Các dịch vụ Massage",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Massage Cổ điển",
                      description:
                        "Kỹ thuật truyền thống giúp phục hồi sức khỏe tổng thể",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Massage Dẫn lưu Bạch huyết",
                      description:
                        "Loại bỏ chất lỏng dư thừa và cải thiện trao đổi chất",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Massage Thể thao",
                      description:
                        "Phục hồi cơ bắp sau khi tập luyện thể chất",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Massage Mặt",
                      description: "Trẻ hóa và cải thiện độ săn chắc của da mặt",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${cormorant.variable}`}>
        <Suspense fallback={<div>Đang tải...</div>}>{children}</Suspense>
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}