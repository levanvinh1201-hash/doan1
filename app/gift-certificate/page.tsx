"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Gift, Heart, Sparkles } from "lucide-react"

const certificateOptions = [
  { value: "736000", label: "736.000 ₫ - massage cổ điển 60 phút" },
  { value: "736000", label: "736.000 ₫ - dẫn lưu bạch huyết 60 phút" },
  { value: "960000", label: "960.000 ₫ - massage thể thao 60 phút" },
  { value: "352000", label: "352.000 ₫ - massage mặt 45 phút" },
]

export default function GiftCertificatePage() {
  const [amount, setAmount] = useState("")
  const [recipientName, setRecipientName] = useState("")
  const [recipientEmail, setRecipientEmail] = useState("")
  const [senderName, setSenderName] = useState("")
  const [senderEmail, setSenderEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!amount || !recipientName || !recipientEmail || !senderName || !senderEmail) {
      toast({
        title: "",
        description: "vui lòng điền đầy đủ các trường bắt buộc",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "đã được cập nhật!",
        description: "chúng tôi đã gửi phiếu quà tặng đến địa chỉ email đã được xác định",
      })

      // Reset form
      setAmount("")
      setRecipientName("")
      setRecipientEmail("")
      setSenderName("")
      setSenderEmail("")
      setMessage("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Gift className="mx-auto mb-6 h-16 w-16 text-primary" />
              <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">phiếu quà tặng</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
               hãny dành những khoảnh khắc thư giãn cho những người thân yêu của bạn
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 grid max-w-5xl gap-6 md:grid-cols-3">
              <Card className="text-center">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Gift className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-semibold">món quà hoàn hảo</h3>
                  <p className="text-sm text-muted-foreground">phù hợp cho mọi người</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Sparkles className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-semibold">cập nhật nhanh chóng</h3>
                  <p className="text-sm text-muted-foreground">chứng chỉ sẽ được gửi đến email sau khi thanh toán</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-semibold">có hiệu lực trong vòng 1 năm</h3>
                  <p className="text-sm text-muted-foreground">người nhận có thể chọn thời gian thuận tiện</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl">
              <form onSubmit={handleSubmit}>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">nhận chứng chỉ</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Certificate Amount */}
                    <div>
                      <Label htmlFor="amount">chọn mệnh giá *</Label>
                      <Select value={amount} onValueChange={setAmount}>
                        <SelectTrigger id="amount">
                          <SelectValue placeholder="chọn số tiền" />
                        </SelectTrigger>
                        <SelectContent>
                          {certificateOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Recipient Info */}
                    <div className="space-y-4">
                      <h3 className="font-semibold">người nhận</h3>
                      <div>
                        <Label htmlFor="recipientName">tên người nhận *</Label>
                        <Input
                          id="recipientName"
                          value={recipientName}
                          onChange={(e) => setRecipientName(e.target.value)}
                          placeholder=""
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="recipientEmail">Email người nhận *</Label>
                        <Input
                          id="recipientEmail"
                          type="email"
                          value={recipientEmail}
                          onChange={(e) => setRecipientEmail(e.target.value)}
                          placeholder=""
                          required
                        />
                      </div>
                    </div>

                    {/* Sender Info */}
                    <div className="space-y-4">
                      <h3 className="font-semibold">từ</h3>
                      <div>
                        <Label htmlFor="senderName">tên của bạn *</Label>
                        <Input
                          id="senderName"
                          value={senderName}
                          onChange={(e) => setSenderName(e.target.value)}
                          placeholder=""
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="senderEmail">email của bạn *</Label>
                        <Input
                          id="senderEmail"
                          type="email"
                          value={senderEmail}
                          onChange={(e) => setSenderEmail(e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">lời chúc (tùy chọn)</Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder=""
                        rows={4}
                      />
                    </div>

                    {/* Summary */}
                    {amount && (
                      <Card className="bg-muted/50">
                        <CardContent className="p-4">
                          <h3 className="mb-2 font-semibold">thanh toán:</h3>
                          <p className="text-2xl font-bold text-primary">{amount} ₴</p>
                        </CardContent>
                      </Card>
                    )}

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "" : "gửi và thanh toán"}
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                    sau khi thanh toán giấy chứng nhận sẽ được gửi đến email của người nhận
                    </p>
                  </CardContent>
                </Card>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
