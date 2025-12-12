"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Clock, CheckCircle2 } from "lucide-react";
import { getServices } from "@/lib/services-data";
import { getCurrentLanguage, getTranslation, type Language } from "@/lib/i18n";
import { useEffect, useState } from "react";

export default function ServicesPage() {
  const [lang, setLang] = useState<Language>("vi");
  const [services, setServices] = useState(getServices("vi"));
  const t = getTranslation(lang);

  useEffect(() => {
    const currentLang = getCurrentLanguage();
    setLang(currentLang);
    setServices(getServices(currentLang));

    const handleLanguageChange = () => {
      const newLang = getCurrentLanguage();
      setLang(newLang);
      setServices(getServices(newLang));
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () =>
      window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
                {t.nav.services}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.home.servicesDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={service.id} className="mx-auto max-w-6xl">
                  <Card className="overflow-hidden border-primary/20">
                    <div
                      className={`grid gap-8 md:grid-cols-2 ${
                        index % 2 === 1 ? "md:grid-flow-dense" : ""
                      }`}
                    >
                     {/* Image Section (Đã thay thế Video Section) */}
<div className={index % 2 === 1 ? "md:col-start-2" : ""}>
  <div
    className={`aspect-video w-full bg-gradient-to-br ${service.color} overflow-hidden rounded-xl`}
  >
    {/* Sử dụng thẻ <img> hoặc Next/Image.
      Nếu bạn đang dùng Next.js, nên dùng component <Image /> để tối ưu hóa, 
      nhưng vì bạn không cung cấp phần import, tôi dùng thẻ <img> đơn giản nhất 
      để đảm bảo tính tương thích và giữ nguyên style.
    */}
    <img
      src={service.imageUrl} // Dùng thuộc tính imageUrl đã cập nhật trong services.ts
      alt={service.title}      // Sử dụng tiêu đề dịch vụ làm alt text
      // Các class giúp ảnh che phủ toàn bộ khung và hiển thị đúng
      className="h-full w-full object-cover" 
    />
  </div>
</div>

                      {/* Content Section */}
                      <div
                        className={`flex flex-col justify-center p-6 md:p-8 ${
                          index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                        }`}
                      >
                        <CardHeader className="p-0">
                          <CardTitle className="mb-4 font-serif text-3xl">
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6 p-0">
                          <p className="text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>

                          {/* Benefits */}
                          <div>
                            <h3 className="mb-3 font-semibold">
                              {lang === "vi" && "Những lợi ích:"}
                              {lang === "en" && "Benefits:"}
                            </h3>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                  <span className="text-sm text-muted-foreground">
                                    {benefit}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Pricing */}
                          <div>
                            <h3 className="mb-3 font-semibold">
                              {lang === "vi" && "Giá:"}
                              {lang === "en" && "Pricing:"}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                              {service.durations.map((duration, i) => (
                                <Badge
                                  key={i}
                                  variant="secondary"
                                  className="flex items-center gap-2 px-4 py-2"
                                >
                                  <Clock className="h-4 w-4" />
                                  <span>
                                    {duration.duration} - {duration.price}
                                  </span>
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <Link href="/booking">
                            <Button size="lg" className="w-full md:w-auto">
                              {lang === "en" && `Book ${service.title}`}
                              {lang === "vi" && `Đặt ${service.title}`}
                            </Button>
                          </Link>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center font-serif text-3xl font-bold">
                {t.home.additionalInfoTitle}
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-3 font-serif text-xl font-semibold">
                      {t.home.preparationTitle}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• {t.home.preparationItem1}</li>
                      <li>• {t.home.preparationItem2}</li>
                      <li>• {t.home.preparationItem3}</li>
                      <li>• {t.home.preparationItem4}</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-3 font-serif text-xl font-semibold">
                      {t.home.contraindicationsTitle}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• {t.home.contraindicationsItem1}</li>
                      <li>• {t.home.contraindicationsItem2}</li>
                      <li>• {t.home.contraindicationsItem3}</li>
                      <li>• {t.home.contraindicationsItem4}</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 text-center md:p-12">
                <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
                  {t.home.ctaTitle}
                </h2>
                <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                  {t.home.ctaDesc}
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto bg-transparent"
                    >
                      {t.nav.contact}
                    </Button>
                  </Link>
                  <Link href="/certificates">
                    <Button size="lg" className="w-full sm:w-auto">
                      {t.home.buyCertificate}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certificate Samples Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
                  {t.home.certificateSamples}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t.home.certificateSamplesDesc}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Service Certificate Sample */}
                <Card className="overflow-hidden border-primary/20 transition-all hover:shadow-lg">
                  <div className="aspect-[4/3] w-full bg-gradient-to-br from-primary/10 to-accent/10">
                    <img
                      src="/gift1.png"
                      alt={t.home.serviceCertificate}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-3 font-serif text-xl font-semibold">
                      {t.home.serviceCertificate}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {t.home.serviceCertificateDesc}
                    </p>
                    <Link href="/certificates">
                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                      >
                        {t.home.viewAllCertificates}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Amount Certificate Sample */}
                <Card className="overflow-hidden border-primary/20 transition-all hover:shadow-lg">
                  <div className="aspect-[4/3] w-full bg-gradient-to-br from-accent/10 to-primary/10">
                    <img
                      src="/gift1.png"
                      alt={t.home.amountCertificate}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-3 font-serif text-xl font-semibold">
                      {t.home.amountCertificate}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {t.home.amountCertificateDesc}
                    </p>
                    <Link href="/certificates">
                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                      >
                        {t.home.viewAllCertificates}
                      </Button>
                    </Link>
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
