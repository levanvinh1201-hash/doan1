"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { generateClientEmail, generateAdminEmail } from "@/lib/email-templates";
import { getServices } from "@/lib/services-data";
import { getCurrentLanguage, type Language } from "@/lib/i18n";
import { useRouter } from "next/navigation";

const masters = [
  { name: "hương lan", experience: "10 năm kinh nghiệm" },
  { name: "khắc dương", experience: "8 năm kinh nghiệm" },
];

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour <= 20; hour++) {
    slots.push(`${hour.toString().padStart(2, "0")}:00`);
    if (hour < 20) {
      slots.push(`${hour.toString().padStart(2, "0")}:30`);
    }
  }
  return slots;
};

export function BookingForm() {
  const [lang, setLang] = useState<Language>("vi");
  const [services, setServices] = useState(getServices("vi"));
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedService, setSelectedService] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedMaster, setSelectedMaster] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

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

  const currentService = services.find((s) => s.title === selectedService);
  const currentDuration = currentService?.durations.find(
    (d) => d.duration === selectedDuration
  );
  const timeSlots = generateTimeSlots();

  const handleDateSelect = async (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime("");

    if (!date || !selectedMaster) {
      setAvailableSlots([]);
      return;
    }

    setIsLoadingSlots(true);
    try {
      const dateString = format(date, "dd-MM-yyyy");
      const response = await fetch(`/api/bookings?date=${dateString}`);
      const data = await response.json();

      const bookedTimes = data.bookings
        .filter((b: any) => b.master === selectedMaster)
        .map((b: any) => b.time);
      const available = timeSlots.filter((slot) => !bookedTimes.includes(slot));
      setAvailableSlots(available);
    } catch (error) {
      console.error(" Error fetching available slots:", error);
      setAvailableSlots(timeSlots);
    } finally {
      setIsLoadingSlots(false);
    }
  };

  const handleMasterSelect = (master: string) => {
    setSelectedMaster(master);
    if (selectedDate) {
      handleDateSelect(selectedDate);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !selectedDate ||
      !selectedService ||
      !selectedDuration ||
      !selectedTime ||
      !selectedMaster ||
      !name ||
      !email ||
      !phone
    ) {
      toast({
        title: "lỗi",
        description: "vui lòng điền tất cae các trường",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const bookingData = {
        date: format(selectedDate, "dd-MM-yyyy"),
        time: selectedTime,
        service: selectedService,
        userName: name,
        userEmail: email,
        userPhone: phone,
        duration: currentDuration?.durationMinutes || 60,
        price: currentDuration?.price || "",
        master: selectedMaster,
      };

      console.log(" BookingForm: Submitting booking data:", bookingData);

      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      console.log(" BookingForm: Response status:", response.status);
      const data = await response.json();
      console.log(" BookingForm: Response data:", data);

      if (!response.ok) {
        console.error(" BookingForm: Booking failed with error:", data.error);
        throw new Error(data.error || "Failed to create booking");
      }

      console.log(
        " BookingForm: Booking created successfully, sending emails..."
      );

      const currentLanguage =
        typeof window !== "undefined"
          ? localStorage.getItem("language") || "vi"
          : "vi";

      const emailData = {
        clientName: name,
        clientEmail: email,
        clientPhone: phone,
        service: selectedService,
        master: selectedMaster,
        date: format(selectedDate, "d MMMM yyyy", { locale: vi }),
        time: selectedTime,
        duration: selectedDuration,
        price: currentDuration?.price || "",
        language: currentLanguage,
      };

      const clientEmailHtml = generateClientEmail(emailData);
      const adminEmailHtml = generateAdminEmail(emailData);

      const emailResponse = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emails: [
            {
              to: email,
              subject: "Подтверждение записи в Luxury Spa Salon",
              html: clientEmailHtml,
            },
            {
              to:
                process.env.NEXT_PUBLIC_ADMIN_EMAIL || "mia.germ888@gmail.com",
              subject: "Новая запись в Luxury Spa Salon",
              html: adminEmailHtml,
            },
          ],
        }),
      });

      console.log(" BookingForm: Email response status:", emailResponse.status);

      toast({
        title: "Запись успешно создана!",
        description: `Вы записаны на ${selectedService} ${format(
          selectedDate,
          "d MMMM yyyy",
          { locale: vi }
        )} в ${selectedTime}. Подтверждение отправлено на email.`,
      });

      console.log(
        " BookingForm: Resetting form and redirecting to dashboard..."
      );

      setTimeout(() => {
        router.push("/dashboard?success=booking");
      }, 1500);
    } catch (error) {
      console.error(" BookingForm: Error during booking:", error);
      toast({
        title: "Ошибка",
        description:
          error instanceof Error
            ? error.message
            : "Не удалось создать запись. Попробуйте еще раз.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-2xl">FORM ĐẶT LỊCH</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">tên*</Label>
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
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">số điện thoại *</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="84+"
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="master">Chọn chuyên viên *</Label>
              <Select value={selectedMaster} onValueChange={handleMasterSelect}>
                <SelectTrigger id="master">
                  <SelectValue placeholder="chọn chuyên viên" />
                </SelectTrigger>
                <SelectContent>
                  {masters.map((master) => (
                    <SelectItem key={master.name} value={master.name}>
                      {master.name} - {master.experience}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="service">chọn dịch vụ *</Label>
              <Select
                value={selectedService}
                onValueChange={setSelectedService}
              >
                <SelectTrigger id="service">
                  <SelectValue placeholder="chọn dịch vụ" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.title}>
                      {service.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedService && (
              <div>
                <Label htmlFor="duration">thời gian *</Label>
                <Select
                  value={selectedDuration}
                  onValueChange={setSelectedDuration}
                >
                  <SelectTrigger id="duration">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    {currentService?.durations.map((duration) => (
                      <SelectItem
                        key={duration.duration}
                        value={duration.duration}
                      >
                        {duration.duration} - {duration.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          <div>
            <Label>chọn ngày  *</Label>
            <div className="mt-2">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                disabled={(date) => date < new Date() || date.getDay() === 0}
                locale={vi}
                className="rounded-md border"
              />
            </div>
          </div>

          {selectedDate && selectedMaster && (
            <div>
              <Label htmlFor="time">chọn thời gian*</Label>
              <Select
                value={selectedTime}
                onValueChange={setSelectedTime}
                disabled={isLoadingSlots}
              >
                <SelectTrigger id="time">
                  <SelectValue
                    placeholder={
                      isLoadingSlots ? "đang tải ..." : "chọn thời gian"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {availableSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="mt-2 text-xs text-muted-foreground">
              còn trống: {availableSlots.length} из {timeSlots.length}
              </p>
            </div>
          )}

          {selectedService &&
            selectedDuration &&
            selectedDate &&
            selectedTime &&
            selectedMaster && (
              <Card className="bg-muted/50">
                <CardContent className="p-4">
                  <h3 className="mb-2 font-semibold">tổng cộng:</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>
                      <strong>chuyên viên :</strong> {selectedMaster}
                    </p>
                    <p>
                      <strong>dịch vụ:</strong> {selectedService}
                    </p>
                    <p>
                      <strong>thời lượng:</strong> {selectedDuration}
                    </p>
                    <p>
                      <strong>ngày:</strong>{" "}
                      {format(selectedDate, "d MMMM yyyy", { locale: vi })}
                    </p>
                    <p>
                      <strong>thời gian:</strong> {selectedTime}
                    </p>
                    <p className="pt-2 text-lg font-semibold text-foreground">
                      <strong>giá tiền:</strong> {currentDuration?.price}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "đang gửi ..." : "đăng kí"}
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
