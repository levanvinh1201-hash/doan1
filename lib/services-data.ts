import type { Language } from "./i18n"

export interface ServiceDuration {
  duration: string
  durationMinutes: number
  price: string
  priceValue: number
}

export interface Service {
  id: string
  title: Record<Language, string>
  description: Record<Language, string>
  benefits: Record<Language, string[]>
  durations: Record<Language, ServiceDuration[]>
  imageUrl: string, // Chỉ còn thuộc tính ảnh
  color: string
}

export const services: Service[] = [
  {
    id: "codien",
    title: {
      vi: "Massage Cổ Điển",
      en: "",
    },
    description: {
      vi: "Kỹ thuật massage truyền thống nhằm cải thiện sức khỏe toàn thân, tăng cường tuần hoàn máu và giảm căng cơ.",
      en: "",
    },
    benefits: {
      vi: [
        "Cải thiện tuần hoàn máu",
        "Giảm căng cơ",
        "Tăng cường sức sống",
        "Tăng cường miễn dịch",
        "Cải thiện giấc ngủ",
      ],
      en: [],
    },
    durations: {
      vi: [
        { duration: "60 phút", durationMinutes: 60, price: "1.150.000 ₫", priceValue: 1150000 },
        { duration: "90 phút", durationMinutes: 90, price: "1.650.000 ₫", priceValue: 1650000 },
        { duration: "120 phút", durationMinutes: 120, price: "2.200.000 ₫", priceValue: 2200000 },
      ],
      en: [],
    },
    imageUrl: "/images/codien.jpg", // Đã thay thế videoQuery
    color: "from-primary/20 to-primary/5",
  },
  {
    id: "lymphatic",
    title: {
      vi: "Massage Dẫn Lưu Bạch Huyết",
      en: "",
    },
    description: {
      vi: "Kỹ thuật đặc biệt kích thích hệ bạch huyết, giúp loại bỏ chất lỏng dư thừa và độc tố khỏi cơ thể.",
      en: "",
    },
    benefits: {
      vi: [
        "Loại bỏ chất lỏng dư thừa",
        "Giảm sưng phù",
        "Cải thiện trao đổi chất",
        "Tăng cường miễn dịch",
        "Cải thiện màu da",
      ],
      en: [],
    },
    durations: {
      vi: [
        { duration: "60 phút", durationMinutes: 60, price: "1.150.000 ₫", priceValue: 1150000 },
        { duration: "90 phút", durationMinutes: 90, price: "1.650.000 ₫", priceValue: 1650000 },
      ],
      en: [],
    },
    imageUrl: "/images/lymphatic.jpg", // Đã thay thế videoQuery
    color: "from-accent/20 to-accent/5",
  },
  {
    id: "sports",
    title: {
      vi: "Massage Thể Thao",
      en: "",
    },
    description: {
      vi: "Kỹ thuật mạnh mẽ dành cho vận động viên và người năng động, giúp phục hồi cơ bắp sau hoạt động thể chất.",
      en: "",
    },
    benefits: {
      vi: [
        "Phục hồi cơ bắp",
        "Giảm đau nhức cơ",
        "Tăng sức bền",
        "Ngăn ngừa chấn thương",
        "Cải thiện độ linh hoạt",
      ],
      en: [],
    },
    durations: {
      vi: [
        { duration: "60 phút", durationMinutes: 60, price: "1.500.000 ₫", priceValue: 1500000 },
        { duration: "90 phút", durationMinutes: 90, price: "1.750.000 ₫", priceValue: 1750000 },
      ],
      en: [],
    },
    imageUrl: "/images/sport.jpg", // Đã thay thế videoQuery
    color: "from-chart-3/20 to-chart-3/5",
  },
  {
    id: "facial",
    title: {
      vi: "Massage Mặt",
      en: "",
    },
    description: {
      vi: "Kỹ thuật nhẹ nhàng giúp trẻ hóa da mặt, cải thiện độ đàn hồi và làm mờ nếp nhăn.",
      en: "",
    },
    benefits: {
      vi: [
        "Làm mờ nếp nhăn",
        "Cải thiện độ đàn hồi da",
        "Nâng cơ mặt",
        "Cải thiện sắc tố da",
        "Giảm sưng phù",
      ],
      en: [],
    },
    durations: {
      vi: [
        { duration: "45 phút", durationMinutes: 45, price: "550.000 ₫", priceValue: 550000 },
        { duration: "60 phút", durationMinutes: 60, price: "750.000 ₫", priceValue: 750000 },
      ],
      en: [],
    },
    imageUrl: "/images/facial.jpg", // Đã thay thế videoQuery
    color: "from-chart-2/20 to-chart-2/5",
  },
]

export function getServices(lang: Language) {
  return services.map((service) => ({
    id: service.id,
    title: service.title[lang],
    description: service.description[lang],
    benefits: service.benefits[lang],
    durations: service.durations[lang],
    imageUrl: service.imageUrl, // Chỉ trả về imageUrl
    color: service.color,
  }))
}