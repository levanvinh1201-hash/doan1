"use client";

import type React from "react";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast({
        title: "LỖI ",
        description: "LỖI, VUI LÒNG ĐIỀN TẤT CẢ CÁC TRƯỜNG BẮT BUỘC ",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "tin nhắn đã được gửi ",
        description: "Chúng tôi sẽ liên hệ với bạn sớm nhất",
      });

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
                liên hệ
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
            liên hệ với chúng tôi bằng cách nào thuận tiện cho bạn
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">
                      viết cho chúng tôi
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">tên *</Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="tên của bạn"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Royal@gmail.com"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">số điện thoại</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="0225 545 456"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">thông báo *</Label>
                        <Textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="tin nhắn của bạn..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "đang gửi..." : "chỉnh sửa tin nhắn"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">địa chỉ</h3>
                        <p className="text-sm text-muted-foreground">
                          11, Bà Triệu, P. Tràng Tiền, Q. Hoàn Kiếm,tp Hà Nội
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">liên hệ</h3>
                        <p className="text-sm text-muted-foreground">
                          0225 545 456
                        </p>
                        <p className="text-sm text-muted-foreground">
                          thời gian hoạt động 9:00 đến 20:00
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">Email</h3>
                        <p className="text-sm text-muted-foreground">
                          Royal@spa-salon.com
                        </p>
                        <p className="text-sm text-muted-foreground">
                          chúng tôi sẽ trả lời trong vòng 24h
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">thời gian làm việc</h3>
                        <p className="text-sm text-muted-foreground">
                          T2-T7: 9:00 - 20:00
                        </p>
                        <p className="text-sm text-muted-foreground">
                          CN: ngày nghỉ
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Map Placeholder */}
                <Card>
                  <CardContent className="p-0">
                    <div className="aspect-video w-full bg-muted">
                      <img
                        src="/map-location-pin.png"
                        alt="bản đồ vị trí "
                        className="h-full w-full object-cover"
                      />
                    </div>
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
