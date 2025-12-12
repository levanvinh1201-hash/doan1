export type Language = "en" | "vi";

export const languages = {
  en: { name: "", flag: "" }, // Đã xóa nội dung tiếng Anh
  vi: { name: "Tiếng Việt", flag: "🇻🇳" },
};
export const translations = {
  en: {
    nav: {
      home: "",
      about: "",
      services: "",
      booking: "",
      contact: "",
      dashboard: "",
      login: "",
      logout: "",
      stats: "",
      certificates: "",
      events: "",
      admin: "",
      manageEvents: "",
      printCertificates: "",
    },
    home: {
      badge: "",
      hero: "",
      heroDesc: "",
      bookNow: "",
      ourServices: "",
      whyUs: "",
      whyUsDesc: "",
      experiencedMasters: "",
      experiencedMastersDesc: "",
      premiumQuality: "",
      premiumQualityDesc: "",
      individualApproach: "",
      individualApproachDesc: "",
      fastResults: "",
      fastResultsDesc: "",
      servicesTitle: "",
      servicesDesc: "",
      classicMassage: "",
      classicMassageDesc: "",
      lymphaticMassage: "",
      lymphaticMassageDesc: "",
      sportsMassage: "",
      sportsMassageDesc: "",
      facialMassage: "",
      facialMassageDesc: "",
      from: "",
      allServices: "",
      ctaTitle: "",
      ctaDesc: "",
      bookOnline: "",
      buyCertificate: "",
      certificateSamples: "",
      certificateSamplesDesc: "",
      serviceCertificate: "",
      serviceCertificateDesc: "",
      amountCertificate: "",
      amountCertificateDesc: "",
      viewAllCertificates: "",
      additionalInfoTitle: "",
      preparationTitle: "",
      preparationItem1: "",
      preparationItem2: "",
      preparationItem3: "",
      preparationItem4: "",
      contraindicationsTitle: "",
      contraindicationsItem1: "",
      contraindicationsItem2: "",
      contraindicationsItem3: "",
      contraindicationsItem4: "",
    },
    certificates: {
      title: "",
      subtitle: "",
      chooseType: "",
      forService: "",
      forAmount: "",
      selectService: "",
      selectAmount: "",
      customAmount: "",
      recipientInfo: "",
      recipientName: "",
      recipientEmail: "",
      recipientPhone: "",
      yourInfo: "",
      yourName: "",
      yourEmail: "",
      yourPhone: "",
      message: "",
      messagePlaceholder: "",
      orderCertificate: "",
      selectDuration: "",
      total: "",
      certificateNumber: "",
      selectMaster: "",
      howItWorks: "",
      step1: "",
      step1Desc: "",
      step2: "",
      step2Desc: "",
      step3: "",
      step3Desc: "",
      step4: "",
      step4Desc: "",
      successTitle: "",
      successMessage: "",
      backToHome: "",
    },
    dashboard: {
      title: "",
      welcome: "",
      myBookings: "",
      myCertificates: "",
      profile: "",
      wantToBook: "",
      chooseTime: "",
      newBooking: "",
      upcomingBookings: "",
      noUpcomingBookings: "",
      bookNow: "",
      bookingHistory: "",
      minutes: "",
      wantToBuyCertificate: "",
      giftForLovedOnes: "",
      buyCertificate: "",
      orderedCertificates: "",
      noCertificates: "",
      orderCertificate: "",
      recipient: "",
      ordered: "",
      profileInfo: "",
      name: "",
      phone: "",
      statistics: "",
      totalBookings: "",
      upcoming: "",
      certificates: "",
      bookingConfirmed: "",
      bookingConfirmedDesc: "",
    },
    footer: {
      contacts: "",
      phone: "",
      email: "",
      address: "",
      addressValue: "",
      phoneValue: "",
      workingHours: "",
      workingHoursValue: "",
      followUs: "",
      howToFind: "",
      rights: "",
    },
    admin: {
      printCertificates: "",
      selectCertificate: "",
      fromOrders: "",
      manually: "",
      certificateNumber: "",
      certificateType: "",
      forService: "",
      forAmount: "",
      selectService: "",
      amount: "",
      currency: "",
      recipientName: "",
      buyerName: "",
      message: "",
      printCertificate: "",
      preview: "",
      fillDataForPreview: "",
      statusPending: "",
      statusIssued: "",
    },
    events: {
      badge: "",
      title: "",
      subtitle: "",
      noEvents: "",
      register: "",
      unregister: "",
      registered: "",
      full: "",
      past: "",
      participants: "",
      loginRequired: "",
      loginRequiredDesc: "",
      registrationSuccess: "",
      registrationSuccessDesc: "",
      registrationError: "",
      registrationErrorDesc: "",
      unregistrationSuccess: "",
      unregistrationSuccessDesc: "",
      adminTitle: "",
      adminSubtitle: "",
      createEvent: "",
      editEvent: "",
      createEventDesc: "",
      editEventDesc: "",
      eventTitle: "",
      eventDescription: "",
      eventDate: "",
      eventTime: "",
      eventLocation: "",
      eventImage: "",
      maxParticipants: "",
      unlimited: "",
      cancel: "",
      create: "",
      update: "",
      edit: "",
      delete: "",
      createSuccess: "",
      createSuccessDesc: "",
      updateSuccess: "",
      updateSuccessDesc: "",
      deleteSuccess: "",
      deleteSuccessDesc: "",
      saveError: "",
      saveErrorDesc: "",
      deleteError: "",
      deleteErrorDesc: "",
      deleteConfirm: "",
      noEventsAdmin: "",
    },
  },
  vi: {
    nav: {
      home: "Trang Chủ",
      about: "Giới Thiệu",
      services: "Dịch Vụ",
      booking: "Đặt Lịch",
      contact: "Liên Hệ",
      dashboard: "Bảng Điều Khiển",
      login: "Đăng Nhập",
      logout: "Đăng Xuất",
      stats: "Thống Kê",
      certificates: "Phiếu Quà Tặng", // Đã dịch từ en
      events: "Sự Kiện", // Đã dịch từ en
      admin: "Quản Trị",
      manageEvents: "Quản Lý Sự Kiện",
      printCertificates: "In Phiếu Quà Tặng", // Đã dịch từ en
    },
    home: {
      badge: "Royal ",
      hero: "Massage Chuyên Nghiệp Cho Sức Khỏe Của Bạn",
      heroDesc:
        "Đắm chìm trong thế giới thư giãn và chăm sóc bản thân. Các chuyên gia giàu kinh nghiệm của chúng tôi sẽ giúp bạn hồi phục sức lực và tìm thấy sự cân bằng.",
      bookNow: "Đặt Lịch Massage",
      ourServices: "Dịch Vụ Của Chúng Tôi",
      whyUs: "Tại Sao Chọn Chúng Tôi",
      whyUsDesc:
        "Chúng tôi tạo ra không gian độc đáo với sự thoải mái và chuyên nghiệp",
      experiencedMasters: "Chuyên Gia Kinh Nghiệm",
      experiencedMastersDesc: "Chuyên gia được cấp chứng chỉ với nhiều năm kinh nghiệm", // Đã dịch từ en
      premiumQuality: "Tiêu Chuẩn Vượt Trội",
      premiumQualityDesc: "Chúng tôi chỉ sử dụng dầu và mỹ phẩm chuyên nghiệp",
      individualApproach: "Phương Pháp Cá Nhân Hóa",
      individualApproachDesc:
        "Chúng tôi xem xét đặc điểm và mong muốn của từng khách hàng",
      fastResults: "Hiệu Quả Nhanh Chóng",
      fastResultsDesc: "Cảm nhận hiệu quả ngay sau buổi đầu tiên",
      servicesTitle: "Dịch Vụ Của Chúng Tôi",
      servicesDesc: "Lựa chọn đa dạng các loại massage cho sức khỏe và sắc đẹp",
      classicMassage: "Massage Cổ Điển",
      classicMassageDesc: "Kỹ thuật truyền thống cho sức khỏe toàn thân",
      lymphaticMassage: "Massage Dẫn Lưu Bạch Huyết",
      lymphaticMassageDesc:
        "Loại bỏ chất lỏng dư thừa và cải thiện trao đổi chất",
      sportsMassage: "Massage Thể Thao",
      sportsMassageDesc: "Phục hồi cơ bắp sau hoạt động thể chất",
      facialMassage: "Massage Mặt",
      facialMassageDesc: "Trẻ hóa và cải thiện độ đàn hồi da mặt",
      from: "từ",
      allServices: "Tất Cả Dịch Vụ và Giá",
      ctaTitle: "Cơ Hội Thư Giãn dành cho Bạn",
      ctaDesc: "Đặt lịch massage ngay bây giờ hoặc mua phiếu quà tặng cho người thân yêu của bạn", // Đã dịch từ en
      bookOnline: "Đặt Lịch Online",
      buyCertificate: "Mua Phiếu Quà Tặng", // Đã dịch từ en
      certificateSamples: "Mẫu Phiếu Quà Tặng", // Đã dịch từ en
      certificateSamplesDesc: "Chọn một mẫu có sẵn hoặc tự tạo mẫu riêng", // Đã dịch từ en
      serviceCertificate: "Phiếu Quà Tặng Dịch Vụ", // Đã dịch từ en
      serviceCertificateDesc: "Phiếu quà tặng cho dịch vụ massage được chọn với thời lượng cụ thể", // Đã dịch từ en
      amountCertificate: "Phiếu Quà Tặng Giá Trị", // Đã dịch từ en
      amountCertificateDesc: "Phiếu quà tặng phổ thông với mọi mệnh giá để tự do chọn dịch vụ", // Đã dịch từ en
      viewAllCertificates: "Tất Cả Phiếu Quà Tặng", // Đã dịch từ en
      additionalInfoTitle: "Thông Tin Bổ Sung",
      preparationTitle: "Chuẩn Bị Trước Massage",
      preparationItem1: "Đến trước buổi massage 10-15 phút",
      preparationItem2: "Không ăn thức ăn nặng 2 giờ trước khi massage",
      preparationItem3: "Thông báo cho chuyên gia về các vùng cần chú ý",
      preparationItem4: "Thư giãn và tận hưởng liệu trình",
      contraindicationsTitle: " Chỉ Định",
      contraindicationsItem1: "Quá trình viêm cấp tính",
      contraindicationsItem2: "Thân nhiệt cao",
      contraindicationsItem3: "Bệnh da liễu cấp tính",
      contraindicationsItem4: "Bệnh ung thư",
    },
    certificates: {
      title: "Phiếu Quà Tặng", // Đã dịch từ en
      subtitle:
        "Dành tặng người thân một khoảnh khắc thư giãn và chăm sóc sức khỏe",
      chooseType: "Chọn loại phiếu", // Đã dịch từ en
      forService: "Cho dịch vụ cụ thể", // Đã dịch từ en
      forAmount: "Theo số tiền", // Đã dịch từ en
      selectService: "Chọn dịch vụ", // Đã dịch từ en
      selectAmount: "Chọn số tiền", // Đã dịch từ en
      customAmount: "Số tiền tùy chọn", // Đã dịch từ en
      recipientInfo: "Thông tin người nhận", // Đã dịch từ en
      recipientName: "Tên người nhận", // Đã dịch từ en
      recipientEmail: "Email người nhận", // Đã dịch từ en
      recipientPhone: "Số điện thoại người nhận (tùy chọn)", // Đã dịch từ en
      yourInfo: "Thông tin liên hệ của bạn", // Đã dịch từ en
      yourName: "Tên của bạn", // Đã dịch từ en
      yourEmail: "Email của bạn", // Đã dịch từ en
      yourPhone: "Số điện thoại của bạn", // Đã dịch từ en
      message: "Lời nhắn cho người nhận (tùy chọn)", // Đã dịch từ en
      messagePlaceholder: "Viết lời chúc của bạn...", // Đã dịch từ en
      orderCertificate: "Đặt Phiếu Quà Tặng", // Đã dịch từ en
      selectDuration: "Chọn thời lượng", // Đã dịch từ en
      total: "Tổng Cộng", // Đã dịch từ en
      certificateNumber: "Mã Phiếu Quà Tặng", // Đã dịch từ en
      selectMaster: "Chọn chuyên gia", // Đã dịch từ en
      howItWorks: "Cách Thức Hoạt Động", // Đã dịch từ en
      step1: "Chọn loại phiếu", // Đã dịch từ en
      step1Desc: "Cho dịch vụ cụ thể hoặc theo số tiền", // Đã dịch từ en
      step2: "Điền thông tin chi tiết", // Đã dịch từ en
      step2Desc: "Cung cấp thông tin người nhận và liên hệ của bạn", // Đã dịch từ en
      step3: "Đặt hàng", // Đã dịch từ en
      step3Desc: "Chúng tôi sẽ liên hệ để xác nhận và thanh toán", // Đã dịch từ en
      step4: "Nhận phiếu", // Đã dịch từ en
      step4Desc: "Phiếu được thiết kế đẹp mắt sẽ được gửi qua email", // Đã dịch từ en
      successTitle: "Đã nhận đơn đặt hàng!",
      successMessage:
        "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận đơn hàng và thanh toán.",
      backToHome: "Về trang chủ",
    },
    dashboard: {
      title: "Bảng Điều Khiển",
      welcome: "Xin Chào",
      myBookings: "Lịch Đặt Của Tôi",
      myCertificates: "Phiếu Quà Tặng Của Tôi", // Đã dịch từ en
      profile: "Hồ Sơ",
      wantToBook: "Muốn đặt lịch massage?",
      chooseTime: "Chọn thời gian thuận tiện và dịch vụ",
      newBooking: "Đặt Lịch Mới",
      upcomingBookings: "Lịch Đặt Sắp Tới",
      noUpcomingBookings: "Bạn chưa có lịch đặt nào sắp tới",
      bookNow: "Đặt Ngay",
      bookingHistory: "Lịch Sử Đặt Lịch",
      minutes: "phút",
      wantToBuyCertificate: "Muốn tặng phiếu quà tặng?", // Đã dịch từ en
      giftForLovedOnes: "Món quà tuyệt vời cho người thân",
      buyCertificate: "Mua Phiếu Quà Tặng", // Đã dịch từ en
      orderedCertificates: "Phiếu Quà Tặng Đã Đặt", // Đã dịch từ en
      noCertificates: "Bạn chưa đặt mua phiếu quà tặng nào", // Đã dịch từ en
      orderCertificate: "Đặt Phiếu Quà Tặng", // Đã dịch từ en
      recipient: "Người Nhận",
      ordered: "Đã Đặt",
      profileInfo: "Thông Tin",
      name: "Tên",
      phone: "Điện Thoại",
      statistics: "Thống Kê",
      totalBookings: "Tổng Lượt Đặt",
      upcoming: "Sắp Tới",
      certificates: "Phiếu Quà Tặng", // Đã dịch từ en
      bookingConfirmed: "Đã Xác Nhận Đặt Lịch!",
      bookingConfirmedDesc:
        "Lịch đặt của bạn đã được tạo thành công. Chúng tôi đã gửi xác nhận đến email của bạn.",
    },
    footer: {
      contacts: "Liên Hệ",
      phone: "Điện Thoại",
      email: "Email",
      address: "Địa Chỉ",
      addressValue: "11, Bà Triệu, P. Tràng Tiền, Q. Hoàn Kiếm, tp Hà Nội",
      phoneValue: "0225 545 456",
      workingHours: "Giờ Làm Việc",
      workingHoursValue: "Thứ 2-Chủ Nhật: 9:00 Sáng - 9:00 Tối",
      followUs: "Theo Dõi Chúng Tôi",
      howToFind: "Làm Thế Nào Để Tìm Chúng Tôi",
      rights: "Mọi quyền được bảo lưu", // Đã dịch từ en
    },
    admin: {
      printCertificates: "In Phiếu Quà Tặng", // Đã dịch từ en
      selectCertificate: "Chọn Phiếu Quà Tặng", // Đã dịch từ en
      fromOrders: "Từ Đơn Hàng",
      manually: "Thủ Công",
      certificateNumber: "Mã Phiếu Quà Tặng", // Đã dịch từ en
      certificateType: "Loại Phiếu Quà Tặng", // Đã dịch từ en
      forService: "Cho Dịch Vụ",
      forAmount: "Theo Số Tiền",
      selectService: "Chọn Dịch Vụ",
      amount: "Số Tiền",
      currency: "Tiền Tệ",
      recipientName: "Tên Người Nhận",
      buyerName: "Tên Người Mua (từ ai)",
      message: "Lời Nhắn",
      printCertificate: "In Phiếu Quà Tặng", // Đã dịch từ en
      preview: "Xem Trước",
      fillDataForPreview: "Điền dữ liệu để xem trước",
      statusPending: "Đang Chờ",
      statusIssued: "Đã Phát Hành",
    },
    events: {
      badge: "Sự Kiện Của Chúng Tôi", // Đã dịch từ en
      title: "Sự Kiện Của Chúng Tôi", // Đã dịch từ en
      subtitle: "Tham gia sự kiện của chúng tôi: yoga, thiền, dã ngoại và hội thảo", // Đã dịch từ en
      noEvents: "Chưa có sự kiện nào được lên lịch", // Đã dịch từ en
      register: "Đăng Ký", // Đã dịch từ en
      unregister: "Hủy Đăng Ký", // Đã dịch từ en
      registered: "Bạn đã đăng ký", // Đã dịch từ en
      full: "Đã Đầy", // Đã dịch từ en
      past: "Đã Qua", // Đã dịch từ en
      participants: "người tham gia", // Đã dịch từ en
      loginRequired: "Yêu Cầu Đăng Nhập", // Đã dịch từ en
      loginRequiredDesc: "Vui lòng đăng nhập để đăng ký sự kiện", // Đã dịch từ en
      registrationSuccess: "Bạn đã đăng ký thành công!", // Đã dịch từ en
      registrationSuccessDesc: "Chúng tôi đã gửi xác nhận đến email của bạn", // Đã dịch từ en
      registrationError: "Lỗi Đăng Ký", // Đã dịch từ en
      registrationErrorDesc: "Không thể đăng ký sự kiện", // Đã dịch từ en
      unregistrationSuccess: "Đã Hủy Đăng Ký", // Đã dịch từ en
      unregistrationSuccessDesc: "Bạn đã hủy đăng ký thành công", // Đã dịch từ en
      adminTitle: "Quản Lý Sự Kiện", // Đã dịch từ en
      adminSubtitle: "Tạo và chỉnh sửa sự kiện cho khách hàng", // Đã dịch từ en
      createEvent: "Tạo Sự Kiện", // Đã dịch từ en
      editEvent: "Chỉnh Sửa Sự Kiện", // Đã dịch từ en
      createEventDesc: "Điền thông tin về sự kiện mới", // Đã dịch từ en
      editEventDesc: "Cập nhật thông tin sự kiện", // Đã dịch từ en
      eventTitle: "Tiêu Đề", // Đã dịch từ en
      eventDescription: "Mô Tả", // Đã dịch từ en
      eventDate: "Ngày", // Đã dịch từ en
      eventTime: "Thời Gian", // Đã dịch từ en
      eventLocation: "Địa Điểm", // Đã dịch từ en
      eventImage: "Hình Ảnh (URL)", // Đã dịch từ en
      maxParticipants: "Số Người Tham Da Tối Đa", // Đã dịch từ en
      unlimited: "Không Giới Hạn", // Đã dịch từ en
      cancel: "Hủy", // Đã dịch từ en
      create: "Tạo", // Đã dịch từ en
      update: "Cập Nhật", // Đã dịch từ en
      edit: "Chỉnh Sửa", // Đã dịch từ en
      delete: "Xóa", // Đã dịch từ en
      createSuccess: "Đã tạo sự kiện!", // Đã dịch từ en
      createSuccessDesc: "Sự kiện mới đã được thêm thành công", // Đã dịch từ en
      updateSuccess: "Đã cập nhật sự kiện!", // Đã dịch từ en
      updateSuccessDesc: "Thông tin sự kiện đã được cập nhật thành công", // Đã dịch từ en
      deleteSuccess: "Đã xóa sự kiện!", // Đã dịch từ en
      deleteSuccessDesc: "Sự kiện đã được xóa thành công", // Đã dịch từ en
      saveError: "Lỗi Lưu", // Đã dịch từ en
      saveErrorDesc: "Không thể lưu sự kiện", // Đã dịch từ en
      deleteError: "Lỗi Xóa", // Đã dịch từ en
      deleteErrorDesc: "Không thể xóa sự kiện", // Đã dịch từ en
      deleteConfirm: "Bạn có chắc chắn muốn xóa sự kiện này?", // Đã dịch từ en
      noEventsAdmin: "Chưa có sự kiện nào. Hãy tạo sự kiện đầu tiên!", // Đã dịch từ en
    },
  },
};

export function getTranslation(lang: Language) {
  return translations[lang] || translations.vi; // Đã đổi fallback sang 'vi'
}

export function getCurrentLanguage(): Language {
  if (typeof window === "undefined") return "vi"; // Đã đổi mặc định sang 'vi'
  return (localStorage.getItem("language") as Language) || "vi"; // Đã đổi mặc định sang 'vi'
}

export function setCurrentLanguage(lang: Language) {
  if (typeof window !== "undefined") {
    localStorage.setItem("language", lang);
  }
}