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
    "contact.label": "THÔNG TIN LIÊN HỆ",
    "contact.subtitle": "Kết nối với Phutraco",
    "contact.desc": "Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ Quý khách hàng. Hãy liên hệ với chúng tôi để được tư vấn về các dịch vụ và giải pháp phù hợp nhất.",
    "contact.address": "Địa chỉ",
    "contact.workingHours": "Giờ làm việc",
    "contact.workingHoursValue": "Thứ 2 - Thứ 6: 8:00 - 17:30",
    "contact.formTitle": "Gửi tin nhắn cho chúng tôi",
    "contact.successMessage": "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.",
    "contact.officeImage": "Trụ sở chính Phutraco Holding tại Hưng Yên",
    "contact.required": "*",
    "contact.enterName": "Nhập họ và tên của bạn",
    "contact.enterEmail": "Nhập email của bạn",
    "contact.enterPhone": "Nhập số điện thoại của bạn",
    "contact.enterMessage": "Nhập nội dung tin nhắn",

    // About Page
    "about.heroTitle": "Giới thiệu Phutraco Holding",
    "about.letterTitle": "THƯ NGỎ",
    "about.letterSubtitle": "Lời chào từ Ban lãnh đạo",
    "about.letterP1": "Kính gửi Quý Khách hàng, Quý Đối tác và Cổ đông,",
    "about.letterP2": "Với hơn 19 năm hình thành và phát triển, Công ty Cổ phần Thương mại và Xây dựng Phương Đông (Phutraco Holding) đã không ngừng lớn mạnh, khẳng định vị thế trong lĩnh vực xây dựng và đầu tư phát triển hạ tầng tại Việt Nam.",
    "about.letterP3": "Chúng tôi luôn tự hào về đội ngũ cán bộ nhân viên tận tâm, năng động và sáng tạo. Với phương châm \"An toàn - Chất lượng - Môi trường - Tiến độ\", Phutraco Holding cam kết mang đến những công trình chất lượng cao, góp phần vào sự phát triển bền vững của đất nước.",
    "about.letterP4": "Thay mặt Ban lãnh đạo Công ty, tôi xin gửi lời cảm ơn chân thành đến Quý Khách hàng, Quý Đối tác đã tin tưởng và đồng hành cùng chúng tôi trong suốt thời gian qua.",
    "about.letterSign": "Tổng Giám đốc",
    "about.historyLabel": "LỊCH SỬ HÌNH THÀNH",
    "about.historyTitle": "Hành trình phát triển",
    "about.visionMissionLabel": "TẦM NHÌN & SỨ MỆNH",
    "about.vision": "Tầm nhìn",
    "about.visionDesc": "Trở thành Tập đoàn đa ngành hàng đầu Việt Nam trong lĩnh vực xây dựng, đầu tư phát triển hạ tầng và bất động sản. Là đối tác tin cậy của các tổ chức trong và ngoài nước.",
    "about.mission": "Sứ mệnh",
    "about.missionDesc": "Cung cấp giải pháp xây dựng và đầu tư toàn diện, chất lượng cao. Tạo ra giá trị bền vững cho khách hàng, đối tác, nhân viên và cộng đồng. Đóng góp vào sự phát triển của đất nước với trách nhiệm và chuyên nghiệp.",
    "about.coreValuesLabel": "GIÁ TRỊ CỐT LÕI",
    "about.coreValuesTitle": "Điều chúng tôi trân trọng",
    "about.dedication": "Tận tâm",
    "about.dedicationDesc": "Luôn đặt lợi ích khách hàng lên hàng đầu",
    "about.quality": "Chất lượng",
    "about.qualityDesc": "Cam kết chất lượng trong từng sản phẩm",
    "about.unity": "Đoàn kết",
    "about.unityDesc": "Xây dựng đội ngũ gắn kết, vững mạnh",
    "about.innovation": "Sáng tạo",
    "about.innovationDesc": "Không ngừng đổi mới và cải tiến",
    "about.legalInfoLabel": "THÔNG TIN PHÁP LÝ",
    "about.legalInfoTitle": "Thông tin doanh nghiệp",
    "about.taxCode": "Mã số thuế",
    "about.issueDate": "Ngày cấp",
    "about.issuedBy": "Nơi cấp",
    "about.charteredCapital": "Vốn điều lệ",

    // Certificates Page
    "cert.heroTitle": "Chứng chỉ & Giải thưởng",
    "cert.awardsLabel": "THÀNH TỰU",
    "cert.awardsTitle": "Giải thưởng & Danh hiệu",
    "cert.certificatesLabel": "NĂNG LỰC",
    "cert.certificatesTitle": "Chứng chỉ năng lực",
    "cert.certificatesDesc": "Các chứng chỉ năng lực khẳng định uy tín và chất lượng dịch vụ của Phutraco Holding",

    // Ecosystem Page
    "ecosystem.heroTitle": "Hệ sinh thái công ty thành viên",
    "ecosystem.overviewLabel": "ĐA NGÀNH - CHUYÊN MÔN HÓA",
    "ecosystem.overviewTitle": "Mạng lưới công ty thành viên",
    "ecosystem.overviewDesc": "Hệ sinh thái Phutraco Holding bao gồm các công ty thành viên hoạt động trong nhiều lĩnh vực khác nhau, tạo nên sức mạnh tổng hợp và khả năng cung cấp giải pháp toàn diện cho khách hàng.",
    "ecosystem.parentCompany": "Công ty mẹ",
    "ecosystem.viewDetails": "Xem chi tiết",

    // Projects Page
    "projects.heroTitle": "Dự án tiêu biểu",
    "projects.overviewLabel": "THÀNH TỰU XÂY DỰNG",
    "projects.overviewTitle": "Các dự án tiêu biểu",
    "projects.overviewDesc": "Phutraco Holding đã hoàn thành nhiều dự án hạ tầng quan trọng trên toàn quốc, từ cao tốc đến hệ thống cấp thoát nước.",
    "projects.category": "Danh mục",
    "projects.location": "Địa điểm",
    "projects.investor": "Chủ đầu tư",
    "projects.value": "Giá trị",
    "projects.duration": "Thời gian",
    "projects.scope": "Phạm vi công việc",
    "projects.highlights": "Điểm nổi bật",
    "projects.ctaTitle": "Có dự án cần tư vấn?",
    "projects.ctaButton": "Liên hệ ngay",

    // Business Areas Page
    "businessAreas.heroTitle": "Lĩnh vực kinh doanh",
    "businessAreas.overviewLabel": "KINH DOANH ĐA DẠNG",
    "businessAreas.overviewTitle": "Hệ sinh thái kinh doanh đa ngành",
    "businessAreas.overviewDesc": "Phutraco Holding hoạt động trong nhiều lĩnh vực, cung cấp giải pháp toàn diện từ xây dựng đến chuyển đổi số.",
    "businessAreas.services": "Dịch vụ",
    "businessAreas.experience": "Kinh nghiệm",
    "businessAreas.ctaTitle": "Cần tư vấn xây dựng và đầu tư?",

    // News Page
    "newsPage.heroTitle": "Tin tức & Sự kiện",
    "newsPage.allCategories": "Tất cả danh mục",
    "newsPage.searchPlaceholder": "Tìm kiếm bài viết...",
    "newsPage.noResults": "Không tìm thấy bài viết nào",
    "newsPage.categories": "Danh mục",

    // Timeline events
    "timeline.2005": "Thành lập Công ty CP TM & XD Phương Đông",
    "timeline.2008": "Mở rộng hoạt động sang lĩnh vực hạ tầng",
    "timeline.2012": "Thành lập chi nhánh Hải Phòng",
    "timeline.2015": "Đầu tư vào lĩnh vực du lịch nghỉ dưỡng",
    "timeline.2018": "Thành lập chi nhánh Đà Nẵng",
    "timeline.2020": "Chuyển đổi mô hình Tập đoàn Holding",
    "timeline.2023": "Mở rộng hệ sinh thái công nghệ số",
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
    "contact.label": "CONTACT INFORMATION",
    "contact.subtitle": "Connect with Phutraco",
    "contact.desc": "We are always ready to listen and support our customers. Contact us for consultation on the most suitable services and solutions.",
    "contact.address": "Address",
    "contact.workingHours": "Working Hours",
    "contact.workingHoursValue": "Monday - Friday: 8:00 - 17:30",
    "contact.formTitle": "Send us a message",
    "contact.successMessage": "Thank you for contacting us! We will respond as soon as possible.",
    "contact.officeImage": "Phutraco Holding headquarters in Hung Yen",
    "contact.required": "*",
    "contact.enterName": "Enter your full name",
    "contact.enterEmail": "Enter your email",
    "contact.enterPhone": "Enter your phone number",
    "contact.enterMessage": "Enter your message",

    // About Page
    "about.heroTitle": "About Phutraco Holding",
    "about.letterTitle": "MESSAGE FROM LEADERSHIP",
    "about.letterSubtitle": "Greetings from Management",
    "about.letterP1": "Dear valued Customers, Partners and Shareholders,",
    "about.letterP2": "With over 19 years of establishment and development, Phuong Dong Trade and Construction Joint Stock Company (Phutraco Holding) has continuously grown, establishing its position in the construction and infrastructure development investment sector in Vietnam.",
    "about.letterP3": "We take pride in our dedicated, dynamic, and creative team. With the motto \"Safety - Quality - Environment - Progress\", Phutraco Holding is committed to delivering high-quality projects, contributing to the sustainable development of the nation.",
    "about.letterP4": "On behalf of the Company's Management Board, I would like to extend sincere thanks to our Customers and Partners who have trusted and accompanied us throughout this journey.",
    "about.letterSign": "General Director",
    "about.historyLabel": "COMPANY HISTORY",
    "about.historyTitle": "Development Journey",
    "about.visionMissionLabel": "VISION & MISSION",
    "about.vision": "Vision",
    "about.visionDesc": "To become Vietnam's leading multi-sector corporation in construction, infrastructure development investment and real estate. To be a trusted partner of domestic and international organizations.",
    "about.mission": "Mission",
    "about.missionDesc": "Providing comprehensive, high-quality construction and investment solutions. Creating sustainable value for customers, partners, employees, and the community. Contributing to national development with responsibility and professionalism.",
    "about.coreValuesLabel": "CORE VALUES",
    "about.coreValuesTitle": "What We Value",
    "about.dedication": "Dedication",
    "about.dedicationDesc": "Always putting customer interests first",
    "about.quality": "Quality",
    "about.qualityDesc": "Committed to quality in every product",
    "about.unity": "Unity",
    "about.unityDesc": "Building a cohesive, strong team",
    "about.innovation": "Innovation",
    "about.innovationDesc": "Continuously innovating and improving",
    "about.legalInfoLabel": "LEGAL INFORMATION",
    "about.legalInfoTitle": "Company Information",
    "about.taxCode": "Tax Code",
    "about.issueDate": "Issue Date",
    "about.issuedBy": "Issued By",
    "about.charteredCapital": "Chartered Capital",

    // Certificates Page
    "cert.heroTitle": "Certificates & Awards",
    "cert.awardsLabel": "ACHIEVEMENTS",
    "cert.awardsTitle": "Awards & Titles",
    "cert.certificatesLabel": "CAPABILITIES",
    "cert.certificatesTitle": "Professional Certificates",
    "cert.certificatesDesc": "Certificates affirming the reputation and service quality of Phutraco Holding",

    // Ecosystem Page
    "ecosystem.heroTitle": "Subsidiary Companies Ecosystem",
    "ecosystem.overviewLabel": "MULTI-SECTOR - SPECIALIZED",
    "ecosystem.overviewTitle": "Subsidiary Network",
    "ecosystem.overviewDesc": "Phutraco Holding ecosystem includes subsidiaries operating in various sectors, creating synergy and the ability to provide comprehensive solutions for customers.",
    "ecosystem.parentCompany": "Parent Company",
    "ecosystem.viewDetails": "View Details",

    // Projects Page
    "projects.heroTitle": "Outstanding Projects",
    "projects.overviewLabel": "CONSTRUCTION ACHIEVEMENTS",
    "projects.overviewTitle": "Typical Projects",
    "projects.overviewDesc": "Phutraco Holding has completed many important infrastructure projects nationwide, from highways to water systems.",
    "projects.category": "Category",
    "projects.location": "Location",
    "projects.investor": "Investor",
    "projects.value": "Value",
    "projects.duration": "Duration",
    "projects.scope": "Scope of Work",
    "projects.highlights": "Highlights",
    "projects.ctaTitle": "Have a project to discuss?",
    "projects.ctaButton": "Contact Now",

    // Business Areas Page
    "businessAreas.heroTitle": "Business Areas",
    "businessAreas.overviewLabel": "COMPREHENSIVE BUSINESS",
    "businessAreas.overviewTitle": "Multi-sector Business Ecosystem",
    "businessAreas.overviewDesc": "Phutraco Holding operates in multiple sectors, providing comprehensive solutions from construction to digital transformation.",
    "businessAreas.services": "Services",
    "businessAreas.experience": "Experience",
    "businessAreas.ctaTitle": "Need construction and investment consultation?",

    // News Page
    "newsPage.heroTitle": "News & Events",
    "newsPage.allCategories": "All Categories",
    "newsPage.searchPlaceholder": "Search articles...",
    "newsPage.noResults": "No articles found",
    "newsPage.categories": "Categories",

    // Timeline events
    "timeline.2005": "Established Phuong Dong Trade & Construction JSC",
    "timeline.2008": "Expanded operations into infrastructure sector",
    "timeline.2012": "Opened Hai Phong branch",
    "timeline.2015": "Invested in resort tourism sector",
    "timeline.2018": "Opened Da Nang branch",
    "timeline.2020": "Transformed into Holding Corporation model",
    "timeline.2023": "Expanded digital technology ecosystem",
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
