"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "vi" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  vi: {
    // Header
    "nav.home": "Trang chủ",
    "nav.about": "Giới thiệu",
    "nav.business": "Lĩnh vực kinh doanh",
    "nav.ecosystem": "Hệ sinh thái",
    "nav.projects": "Dự án tiêu biểu",
    "nav.certificates": "Chứng chỉ",
    "nav.news": "Tin tức",
    "nav.contact": "Liên hệ",
    "nav.login": "Đăng nhập",
    "nav.admin": "Quản trị",
    "nav.logout": "Đăng xuất",

    // Hero
    "hero.subtitle1": "Kiến tạo tương lai - Xây dựng niềm tin",
    "hero.title1": "PHUTRACO HOLDING",
    "hero.desc1": "Tập đoàn hàng đầu trong lĩnh vực xây dựng và đầu tư phát triển hạ tầng tại Việt Nam",
    "hero.subtitle2": "Cam kết vững bền với từng công trình",
    "hero.title2": "AN TOÀN - CHẤT LƯỢNG",
    "hero.desc2": "Với hơn 19 năm kinh nghiệm, chúng tôi luôn đặt chất lượng và an toàn lên hàng đầu",
    "hero.subtitle3": "Từ xây dựng đến du lịch nghỉ dưỡng",
    "hero.title3": "HỆ SINH THÁI ĐA DẠNG",
    "hero.desc3": "Phát triển đa ngành với các công ty thành viên chuyên biệt",
    "hero.learnMore": "Tìm hiểu thêm",
    "hero.contactNow": "Liên hệ ngay",
    "hero.scroll": "CUỘN",

    // About
    "about.label": "VỀ CHÚNG TÔI",
    "about.title": "Công ty Cổ phần Thương mại và Xây dựng Phương Đông",
    "about.desc1":
      "Thành lập từ năm 2005, Phutraco Holding đã khẳng định vị thế là một trong những tập đoàn hàng đầu trong lĩnh vực xây dựng và đầu tư phát triển hạ tầng tại Việt Nam.",
    "about.desc2":
      'Với phương châm "An toàn - Chất lượng - Môi trường - Tiến độ", chúng tôi cam kết mang đến những công trình chất lượng cao, đóng góp vào sự phát triển bền vững của đất nước.',
    "about.viewMore": "Xem chi tiết",
    "about.yearFounded": "Năm thành lập",
    "about.projects": "Dự án hoàn thành",
    "about.employees": "Nhân sự",
    "about.awards": "Giải thưởng",
    "about.yearsExp": "Năm kinh nghiệm",

    // Business Areas
    "business.label": "LĨNH VỰC KINH DOANH",
    "business.title": "Đa dạng ngành nghề, chuyên môn hóa cao",
    "business.desc":
      "Với hệ sinh thái đa ngành, Phutraco Holding cung cấp giải pháp toàn diện cho mọi nhu cầu của khách hàng",

    // Footer
    "footer.company": "CÔNG TY CỔ PHẦN THƯƠNG MẠI VÀ XÂY DỰNG PHƯƠNG ĐÔNG",
    "footer.quickLinks": "Liên kết nhanh",
    "footer.branches": "Chi nhánh",
    "footer.haiphong": "Chi nhánh Hải Phòng",
    "footer.danang": "Chi nhánh Đà Nẵng",
    "footer.connect": "Kết nối với chúng tôi",
    "footer.copyright": "© 2025 Phutraco Holding. Bảo lưu mọi quyền.",

    // Auth
    "auth.login": "Đăng nhập",
    "auth.register": "Đăng ký tài khoản",
    "auth.welcome": "Chào mừng bạn quay trở lại",
    "auth.createAccount": "Tạo tài khoản mới để kết nối",
    "auth.fullName": "Họ và tên",
    "auth.email": "Email",
    "auth.password": "Mật khẩu",
    "auth.confirmPassword": "Xác nhận mật khẩu",
    "auth.enterName": "Nhập họ và tên",
    "auth.enterEmail": "Nhập email của bạn",
    "auth.enterPassword": "Nhập mật khẩu",
    "auth.reenterPassword": "Nhập lại mật khẩu",
    "auth.forgotPassword": "Quên mật khẩu?",
    "auth.noAccount": "Chưa có tài khoản?",
    "auth.registerNow": "Đăng ký ngay",
    "auth.hasAccount": "Đã có tài khoản?",

    // News
    "news.label": "TIN TỨC & HOẠT ĐỘNG",
    "news.title": "Tin tức & Hoạt động",
    "news.featured": "TIN NỔI BẬT",
    "news.latest": "TIN TỨC MỚI NHẤT",
    "news.readMore": "Đọc tiếp",
    "news.manage": "Quản lý tin tức",
    "news.addNew": "Thêm bài viết mới",
    "news.edit": "Sửa",
    "news.delete": "Xóa",
    "news.articleTitle": "Tiêu đề bài viết",
    "news.category": "Danh mục",
    "news.excerpt": "Mô tả ngắn",
    "news.content": "Nội dung",
    "news.imageUrl": "URL hình ảnh",
    "news.save": "Lưu bài viết",
    "news.cancel": "Hủy",

    // Contact
    "contact.title": "Liên hệ với chúng tôi",
    "contact.fullName": "Họ tên",
    "contact.phone": "Điện thoại",
    "contact.message": "Nội dung liên hệ",
    "contact.send": "Gửi tin nhắn",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.business": "Business Areas",
    "nav.ecosystem": "Ecosystem",
    "nav.projects": "Projects",
    "nav.certificates": "Certificates",
    "nav.news": "News",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.admin": "Admin",
    "nav.logout": "Logout",

    // Hero
    "hero.subtitle1": "Building the Future - Creating Trust",
    "hero.title1": "PHUTRACO HOLDING",
    "hero.desc1": "Leading corporation in construction and infrastructure development investment in Vietnam",
    "hero.subtitle2": "Committed to excellence in every project",
    "hero.title2": "SAFETY - QUALITY",
    "hero.desc2": "With over 19 years of experience, we always prioritize quality and safety",
    "hero.subtitle3": "From construction to resort tourism",
    "hero.title3": "DIVERSE ECOSYSTEM",
    "hero.desc3": "Multi-sector development with specialized subsidiaries",
    "hero.learnMore": "Learn More",
    "hero.contactNow": "Contact Now",
    "hero.scroll": "SCROLL",

    // About
    "about.label": "ABOUT US",
    "about.title": "Phuong Dong Trade and Construction Joint Stock Company",
    "about.desc1":
      "Established in 2005, Phutraco Holding has affirmed its position as one of the leading corporations in construction and infrastructure development investment in Vietnam.",
    "about.desc2":
      'With the motto "Safety - Quality - Environment - Progress", we are committed to delivering high-quality projects, contributing to the sustainable development of the country.',
    "about.viewMore": "View Details",
    "about.yearFounded": "Year Founded",
    "about.projects": "Completed Projects",
    "about.employees": "Employees",
    "about.awards": "Awards",
    "about.yearsExp": "Years Experience",

    // Business Areas
    "business.label": "BUSINESS AREAS",
    "business.title": "Diverse Industries, High Specialization",
    "business.desc":
      "With a multi-sector ecosystem, Phutraco Holding provides comprehensive solutions for all customer needs",

    // Footer
    "footer.company": "PHUONG DONG TRADE AND CONSTRUCTION JOINT STOCK COMPANY",
    "footer.quickLinks": "Quick Links",
    "footer.branches": "Branches",
    "footer.haiphong": "Hai Phong Branch",
    "footer.danang": "Da Nang Branch",
    "footer.connect": "Connect with us",
    "footer.copyright": "© 2025 Phutraco Holding. All rights reserved.",

    // Auth
    "auth.login": "Login",
    "auth.register": "Register Account",
    "auth.welcome": "Welcome back",
    "auth.createAccount": "Create a new account to connect",
    "auth.fullName": "Full Name",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.confirmPassword": "Confirm Password",
    "auth.enterName": "Enter your full name",
    "auth.enterEmail": "Enter your email",
    "auth.enterPassword": "Enter your password",
    "auth.reenterPassword": "Re-enter your password",
    "auth.forgotPassword": "Forgot password?",
    "auth.noAccount": "Don't have an account?",
    "auth.registerNow": "Register now",
    "auth.hasAccount": "Already have an account?",

    // News
    "news.label": "NEWS & ACTIVITIES",
    "news.title": "News & Activities",
    "news.featured": "FEATURED NEWS",
    "news.latest": "LATEST NEWS",
    "news.readMore": "Read more",
    "news.manage": "Manage News",
    "news.addNew": "Add New Article",
    "news.edit": "Edit",
    "news.delete": "Delete",
    "news.articleTitle": "Article Title",
    "news.category": "Category",
    "news.excerpt": "Short Description",
    "news.content": "Content",
    "news.imageUrl": "Image URL",
    "news.save": "Save Article",
    "news.cancel": "Cancel",

    // Contact
    "contact.title": "Contact Us",
    "contact.fullName": "Full Name",
    "contact.phone": "Phone",
    "contact.message": "Message",
    "contact.send": "Send Message",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "vi" || saved === "en")) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.vi] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
