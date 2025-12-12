import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BookingForm } from "@/components/booking-form";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Phone } from "lucide-react";

export default function BookingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
                ĐẶT LỊCH ONLINE 
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
            Hãy chọn thời gian thuận tiện và đặt lịch massage ngay bây giờ
              </p>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
              {/* Booking Form */}
              <div className="lg:col-span-2">
                <BookingForm />
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-serif text-xl font-semibold">
                      thời gian làm việc
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <Clock className="mt-0.5 h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">T2-T7: 9:00 - 21:00</p>
                          <p className="text-muted-foreground">Вс: </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-serif text-xl font-semibold">
                      liên hệ 
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <Phone className="mt-0.5 h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">0225 545 456</p>
                          <p className="text-muted-foreground">
                            thời gian hoạt động 9:00 đến 20:00
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Hà Nội</p>
                          <p className="text-muted-foreground">
                          11, Bà Triệu, P. Tràng Tiền, Q. Hoàn Kiếm
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="mb-3 font-serif text-xl font-semibold">
                     Lưu ý 
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• đến trước 10 phút trước khi bắt đầu</li>
                      <li>• Hủy đặt lịch trước 24h</li>
                      <li>• thanh toán tại chỗ bằng tiền mặt hoặc thẻ</li>
                      <li>• nếu đến muộn thơi gian buổi hẹn sec bị rút ngắn</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
