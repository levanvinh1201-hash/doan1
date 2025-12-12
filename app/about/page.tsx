import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// Đã xóa các icon không còn được sử dụng

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section: ẢNH NỀN CAUCHUYEN.JPG */}
        <section className="relative py-24 md:py-36 text-white overflow-hidden min-h-[50vh]">
          
          {/* Background Image Container (cauchuyen.jpg) */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url('cauchuyen.jpg')` 
            }}
          >
            {/* Lớp phủ mờ (Overlay) */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>

          {/* Nội dung chữ */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 font-serif text-5xl font-bold md:text-6xl text-white drop-shadow-lg">
         Salon Của Chúng Tôi
              </h1>
              <p className="text-3xl text-gray-300 leading-relaxed drop-shadow-md">
  Chúng tôi tạo ra không gian nơi mỗi người có thể tìm thấy sự cân bằng giữa cơ thể và tâm hồn
              </p>
            </div>
          </div>
        </section>

        {/* Story Section: ẢNH NỀN CAUCHUYEN1.JPG (CHỮ PHỦ LÊN TRÊN) */}
        <section className="relative py-16 md:py-24 text-white overflow-hidden">
          
          {/* Background Image Container (cauchuyen1.jpg) */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url('cauchuyen1.jpg')` 
            }}
          >
            {/* Lớp phủ mờ (Overlay) - Giảm opacity để chữ dễ đọc hơn */}
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>

          {/* Nội dung chữ (RELATIVE và Z-10 để đặt trên ảnh nền) */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl text-white drop-shadow-lg">
       Câu Chuyện Của Chúng Tôi
              </h2>
              <div className="text-left space-y-4">
                <p className="text-2xl text-gray-200 leading-relaxed drop-shadow-md">
            Spa Salon được thành lập vào năm **2015** với sứ mệnh cung cấp các dịch vụ massage chất lượng cao, giúp mọi người phục hồi sức lực và chăm sóc sức khỏe của mình. Chúng tôi tin rằng, sự cân bằng giữa cơ thể và tâm hồn là chìa khóa cho một cuộc sống khỏe mạnh và hạnh phúc.
                </p>
                <p className="text-2xl text-gray-200 leading-relaxed drop-shadow-md">
                  Qua nhiều năm hoạt động, chúng tôi đã giúp hàng ngàn khách hàng tìm lại sự cân bằng về thể chất và tinh thần. Đội ngũ của chúng tôi không ngừng nâng cao kỹ năng và theo dõi những xu hướng mới nhất trong lĩnh vực massage và chăm sóc sức khỏe, cam kết mang lại trải nghiệm thư giãn và phục hồi tốt nhất.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
         Sẵn Sàng Cho Hành Trình Sức Khỏe?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                Đặt lịch phiên đầu tiên và cảm nhận sự khác biệt
              </p>
              <Link href="/booking">
                <Button size="lg">Đặt Lịch Massage</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}