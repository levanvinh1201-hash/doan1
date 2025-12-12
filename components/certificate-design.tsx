"use client";

import { Card } from "@/components/ui/card";
import { Gift } from "lucide-react";

interface CertificateDesignProps {
  type: "service" | "amount";
  service?: string;
  duration?: string;
  amount?: string;
  currency: string;
  recipientName: string;
  message?: string;
  certificateNumber?: string;
  buyerName?: string;
  language?: "vi" | "en";
}

interface CertificateDesignProps {
  type: "service" | "amount";
  service?: string;
  duration?: string;
  amount?: string;
  currency: string;
  recipientName: string;
  message?: string;
  certificateNumber?: string;
  buyerName?: string;
  language?: "vi" | "en";
}

export function CertificateDesign({
  type,
  service,
  duration,
  amount,
  currency,
  recipientName,
  message,
  certificateNumber,
  buyerName,
  language = "vi",
}: CertificateDesignProps) {
  const titles = {
    vi: "Chứng Nhận Quà Tặng",
    en: "Gift Certificate",
  };

  const forLabels = {
    vi: "Dành Cho",
    en: "For",
  };

  const fromLabels = {
    vi: "Từ",
    en: "From",
  };

  const validLabels = {
    vi: "Có hiệu lực cho",
    en: "Valid for",
  };

  const numberLabels = {
    vi: "Số",
    en: "Number",
  };

  const printDateLabels = {
    vi: "Ngày in",
    en: "Print date",
  };

  const salonInfo = {
    vi: {
      name: "Royal",
      address: "11, Bà Triệu, P. Tràng Tiền, Q. Hoàn Kiếm,tp Hà Nội",
      phone: "0225 545 456",
    },
    en: {
      name: "Royal",
      address: "11, Ba Trieu, Trang Tien Ward, Hoan Kiem District, Hanoi City",
      phone: "0225 545 456",
    },
  };

  const printDate = new Date().toLocaleString(
    language === "vi"
      ? "vi-vi"
      : "en-US",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  return (
    <Card className="relative overflow-hidden border-2 border-accent/20 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-8 shadow-2xl">
      {/* Decorative corner borders */}
      <div className="absolute left-0 top-0 h-24 w-24 border-l-4 border-t-4 border-accent opacity-50" />
      <div className="absolute bottom-0 right-0 h-24 w-24 border-b-4 border-r-4 border-accent opacity-50" />

      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(184,134,11,0.15),transparent_50%)]" />
      </div>

      {/* Decorative dots in corners */}
      <div className="absolute left-4 top-4 opacity-20">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-accent" />
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 right-4 opacity-20">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-accent" />
          ))}
        </div>
      </div>

      <div className="relative z-10 space-y-6 text-center">
        {/* Certificate Number */}
        {certificateNumber && (
          <div className="text-xs uppercase tracking-widest text-accent/70">
            {numberLabels[language]}: {certificateNumber}
          </div>
        )}

        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 ring-2 ring-accent/30">
          <Gift className="h-10 w-10 text-accent" />
        </div>

        {/* Title */}
        <h2 className="font-serif text-4xl font-bold text-accent">
          {titles[language]}
        </h2>

        {/* Recipient */}
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-wider text-accent/70">
            {forLabels[language]}
          </p>
          <p className="text-2xl font-semibold text-accent">{recipientName}</p>
        </div>

        {/* Divider */}
        <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

        {/* Certificate details */}
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-wider text-accent/70">
            {validLabels[language]}
          </p>
          {type === "service" ? (
            <>
              <p className="text-xl font-semibold text-accent">{service}</p>
              {duration && <p className="text-sm text-accent/80">{duration}</p>}
            </>
          ) : (
            <p className="text-3xl font-bold text-accent">
              {amount} {currency}
            </p>
          )}
        </div>

        {/* Message */}
        {message && (
          <>
            <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <p className="mx-auto max-w-md text-sm italic text-accent/80">
              {message}
            </p>
          </>
        )}

        {/* Buyer Name */}
        {buyerName && (
          <>
            <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wider text-accent/70">
                {fromLabels[language]}
              </p>
              <p className="text-sm font-medium text-accent">{buyerName}</p>
            </div>
          </>
        )}

        {/* Salon Info */}
        <div className="pt-6">
          <p className="text-xs uppercase tracking-widest text-accent/50">
            {salonInfo[language].name}
          </p>
          <p className="mt-1 text-[10px] text-accent/40">
            {salonInfo[language].address}
          </p>
          <p className="text-[10px] text-accent/40">
            {salonInfo[language].phone}
          </p>
        </div>

        {/* Print Date */}
        <div className="pt-2">
          <p className="text-[10px] uppercase tracking-wider text-accent/40">
            {printDateLabels[language]}: {printDate}
          </p>
        </div>
      </div>
    </Card>
  );
}
