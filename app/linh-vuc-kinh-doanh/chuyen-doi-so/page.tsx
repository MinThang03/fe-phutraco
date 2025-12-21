"use client"

import { useLanguage } from "@/lib/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Shield, CheckCircle, ArrowRight, Phone, Lock, Server, Cloud } from "lucide-react"
import Link from "next/link"

export default function ChuyenDoiSoPage() {
  const { language } = useLanguage()
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(/images/cds-anm.jpeg)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/75" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">{language === "vi" ? "LĨNH VỰC KINH DOANH" : "BUSINESS AREAS"}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {language === "vi" ? "Chuyển đổi số - An ninh mạng" : "Digital Transformation - Cybersecurity"}
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  {language === "vi" ? "Triển khai giải pháp chuyển đổi số, nền tảng số hoá doanh nghiệp và dịch vụ bảo mật an toàn" : "Deploy digital transformation solutions, enterprise digitalization platforms and security services"}
                </p>
                <Link href="/lien-he" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors">
                  {language === "vi" ? "Liên hệ tư vấn" : "Contact Consultation"}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-accent font-medium tracking-widest mb-4">{language === "vi" ? "GIỚI THIỆU" : "INTRODUCTION"}</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  {language === "vi" ? "Đối tác chuyển đổi số tin cậy" : "Trusted Digital Transformation Partner"}
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {language === "vi" ? "Trong kỷ nguyên 4.0, Phutraco Holding cam kết đồng hành cùng doanh nghiệp trên hành trình chuyển đổi số, xây dựng nền tảng công nghệ vững mạnh và bảo vệ an toàn thông tin trong môi trường mạng." : "In Industry 4.0, Phutraco Holding commits to accompany enterprises on digital transformation journey, building strong technology platforms and securing information in network environment."}
                </p>
                <p className="text-muted-foreground text-lg mb-8">
                  {language === "vi" ? "Chúng tôi cung cấp giải pháp toàn diện từ tư vấn chiến lược đến triển khai công nghệ, đào tạo nhân sự và vận hành hệ thống, giúp doanh nghiệp nâng cao năng lực cạnh tranh và phát triển bền vững." : "We provide comprehensive solutions from strategic consulting to technology deployment, personnel training and system operations, helping enterprises enhance competitiveness and sustainable development."}
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100+</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Dự án thành công" : "Successful Projects"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Đối tác doanh nghiệp" : "Business Partners"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Hỗ trợ kỹ thuật" : "Technical Support"}</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                    alt={language === "vi" ? "Chuyển đổi số" : "Digital Transformation"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-2xl shadow-xl">
                  <p className="text-primary font-bold text-lg">ISO 27001</p>
                  <p className="text-primary/80 text-sm">{language === "vi" ? "An toàn thông tin" : "Information Security"}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-widest mb-4">{language === "vi" ? "DỊCH VỤ" : "SERVICES"}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {language === "vi" ? "Giải pháp toàn diện" : "Comprehensive Solutions"}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  title: language === "vi" ? "Tư vấn chuyển đổi số" : "Digital Transformation Consulting",
                  description: language === "vi" ? "Tư vấn chiến lược, lộ trình chuyển đổi số phù hợp với từng doanh nghiệp" : "Strategic consulting and customized digital transformation roadmap for enterprises",
                  icon: <Cloud className="w-10 h-10 text-primary" />,
                },
                {
                  title: language === "vi" ? "Phát triển nền tảng số" : "Digital Platform Development",
                  description: language === "vi" ? "Xây dựng hệ thống quản lý, ERP, CRM, ứng dụng di động theo yêu cầu" : "Build management systems, ERP, CRM, mobile applications as per requirements",
                  icon: <Server className="w-10 h-10 text-primary" />,
                },
                {
                  title: language === "vi" ? "Giải pháp an ninh mạng" : "Cybersecurity Solutions",
                  description: language === "vi" ? "Bảo mật hệ thống, phòng chống tấn công mạng, quản lý rủi ro an toàn thông tin" : "System security, cyber attack prevention, information security risk management",
                  icon: <Shield className="w-10 h-10 text-primary" />,
                },
                {
                  title: language === "vi" ? "Đào tạo & hỗ trợ" : "Training & Support",
                  description: language === "vi" ? "Đào tạo nhân sự, chuyển giao công nghệ, hỗ trợ vận hành 24/7" : "Staff training, technology transfer, 24/7 operational support",
                  icon: <Lock className="w-10 h-10 text-primary" />,
                },
              ].map((service) => (
                <div key={service.title} className="bg-background p-6 rounded-2xl hover:shadow-xl transition-shadow text-center">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Digital Transformation Solutions */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                {language === "vi" ? "Giải pháp chuyển đổi số" : "Digital Transformation Solutions"}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: language === "vi" ? "Hệ thống quản lý ERP" : "ERP Management System",
                    description: language === "vi" ? "Giải pháp quản lý tổng thể doanh nghiệp: tài chính, nhân sự, sản xuất, kho vận" : "Comprehensive enterprise management solution: finance, HR, production, logistics",
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                    features: language === "vi" ? ["Quản lý tài chính", "Quản lý nhân sự", "Quản lý sản xuất", "Báo cáo phân tích"] : ["Financial management", "HR management", "Production management", "Analytics reporting"],
                  },
                  {
                    title: language === "vi" ? "Nền tảng thương mại điện tử" : "E-Commerce Platform",
                    description: language === "vi" ? "Xây dựng website, app bán hàng online, tích hợp thanh toán và vận chuyển" : "Build websites, mobile shopping apps, payment and shipping integration",
                    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                    features: language === "vi" ? ["Website bán hàng", "App mobile", "Thanh toán online", "Quản lý đơn hàng"] : ["E-commerce website", "Mobile app", "Online payments", "Order management"],
                  },
                  {
                    title: language === "vi" ? "Hệ thống CRM" : "CRM System",
                    description: language === "vi" ? "Quản lý quan hệ khách hàng, tự động hoá marketing và chăm sóc khách hàng" : "Customer relationship management, marketing automation, customer care",
                    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                    features: language === "vi" ? ["Quản lý khách hàng", "Marketing automation", "Chăm sóc khách hàng", "Phân tích dữ liệu"] : ["Customer management", "Marketing automation", "Customer care", "Data analytics"],
                  },
                  {
                    title: language === "vi" ? "Giải pháp Cloud" : "Cloud Solutions",
                    description: language === "vi" ? "Triển khai hạ tầng điện toán đám mây, di chuyển dữ liệu lên cloud an toàn" : "Deploy cloud infrastructure, securely migrate data to cloud",
                    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                    features: language === "vi" ? ["Cloud migration", "Cloud storage", "Cloud backup", "Cloud security"] : ["Cloud migration", "Cloud storage", "Cloud backup", "Cloud security"],
                  },
                  {
                    title: language === "vi" ? "Ứng dụng di động" : "Mobile Applications",
                    description: language === "vi" ? "Phát triển app iOS/Android cho doanh nghiệp, tối ưu trải nghiệm người dùng" : "Develop iOS/Android apps for enterprises with optimized user experience",
                    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                    features: language === "vi" ? ["iOS & Android", "UI/UX design", "Push notification", "Offline mode"] : ["iOS & Android", "UI/UX design", "Push notification", "Offline mode"],
                  },
                  {
                    title: language === "vi" ? "Big Data & AI" : "Big Data & AI",
                    description: language === "vi" ? "Phân tích dữ liệu lớn, ứng dụng AI/ML cho dự báo và ra quyết định" : "Big data analytics, AI/ML applications for forecasting and decision-making",
                    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                    features: language === "vi" ? ["Data analytics", "Machine learning", "Dự báo xu hướng", "Business intelligence"] : ["Data analytics", "Machine learning", "Trend forecasting", "Business intelligence"],
                  },
                ].map((solution) => (
                  <div key={solution.title} className="bg-background rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">{solution.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4">{solution.description}</p>
                      <div className="space-y-2">
                        {solution.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cybersecurity Solutions */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                {language === "vi" ? "Giải pháp an ninh mạng" : "Cybersecurity Solutions"}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: language === "vi" ? "Bảo mật hệ thống" : "System Security",
                    description: language === "vi" ? "Triển khai firewall, IDS/IPS, VPN, bảo mật endpoint và mạng nội bộ" : "Deploy firewall, IDS/IPS, VPN, endpoint and network security",
                    features: language === "vi" ? ["Firewall & IPS", "Endpoint security", "VPN", "Network security"] : ["Firewall & IPS", "Endpoint security", "VPN", "Network security"],
                  },
                  {
                    title: language === "vi" ? "Đánh giá rủi ro" : "Risk Assessment",
                    description: language === "vi" ? "Kiểm tra an ninh, đánh giá lỗ hổng, test xâm nhập và tư vấn khắc phục" : "Security assessment, vulnerability evaluation, penetration testing and remediation consulting",
                    features: language === "vi" ? ["Vulnerability scan", "Penetration test", "Risk assessment", "Security audit"] : ["Vulnerability scan", "Penetration test", "Risk assessment", "Security audit"],
                  },
                  {
                    title: language === "vi" ? "SOC & Giám sát" : "SOC & Monitoring",
                    description: language === "vi" ? "Trung tâm điều hành an ninh mạng 24/7, phát hiện và ứng cứu sự cố" : "24/7 security operations center, incident detection and response",
                    features: language === "vi" ? ["24/7 monitoring", "Incident response", "Threat hunting", "SIEM"] : ["24/7 monitoring", "Incident response", "Threat hunting", "SIEM"],
                  },
                  {
                    title: language === "vi" ? "Mã hóa dữ liệu" : "Data Encryption",
                    description: language === "vi" ? "Giải pháp mã hoá, chứng thực và bảo vệ dữ liệu nhạy cảm" : "Encryption, authentication and sensitive data protection solutions",
                    features: language === "vi" ? ["Data encryption", "PKI", "Digital signature", "DLP"] : ["Data encryption", "PKI", "Digital signature", "DLP"],
                  },
                  {
                    title: language === "vi" ? "Đào tạo nhận thức" : "Security Awareness Training",
                    description: language === "vi" ? "Đào tạo nhân viên về an toàn thông tin, phòng chống tấn công mạng xã hội" : "Employee training on information security and social engineering prevention",
                    features: language === "vi" ? ["Security awareness", "Phishing simulation", "Training programs", "Policy development"] : ["Security awareness", "Phishing simulation", "Training programs", "Policy development"],
                  },
                  {
                    title: language === "vi" ? "Tuân thủ & Chứng nhận" : "Compliance & Certification",
                    description: language === "vi" ? "Tư vấn tuân thủ ISO 27001, GDPR, PCI-DSS và các tiêu chuẩn an ninh" : "ISO 27001, GDPR, PCI-DSS compliance and security standards consulting",
                    features: language === "vi" ? ["ISO 27001", "GDPR compliance", "PCI-DSS", "Security standards"] : ["ISO 27001", "GDPR compliance", "PCI-DSS", "Security standards"],
                  },
                ].map((solution) => (
                  <div key={solution.title} className="bg-background p-6 rounded-2xl hover:shadow-xl transition-shadow">
                    <h4 className="text-lg font-semibold text-foreground mb-3">{solution.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{solution.description}</p>
                    <div className="space-y-2">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-widest mb-4">{language === "vi" ? "QUY TRÌNH" : "PROCESS"}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {language === "vi" ? "Triển khai dự án chuyên nghiệp" : "Professional Project Implementation"}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: language === "vi" ? "Tư vấn & Phân tích" : "Consulting & Analysis", description: language === "vi" ? "Khảo sát nhu cầu, phân tích hiện trạng, tư vấn giải pháp" : "Survey needs, analyze current state, consult solutions" },
                { step: "02", title: language === "vi" ? "Thiết kế & Lập kế hoạch" : "Design & Planning", description: language === "vi" ? "Thiết kế chi tiết, lập kế hoạch triển khai và phân bổ nguồn lực" : "Detailed design, implementation planning and resource allocation" },
                { step: "03", title: language === "vi" ? "Triển khai & Tích hợp" : "Deployment & Integration", description: language === "vi" ? "Cài đặt hệ thống, tích hợp với hệ thống hiện có, test đảm bảo chất lượng" : "System installation, integration with existing systems, quality testing" },
                { step: "04", title: language === "vi" ? "Vận hành & Hỗ trợ" : "Operation & Support", description: language === "vi" ? "Đào tạo người dùng, bàn giao hệ thống, hỗ trợ vận hành liên tục" : "User training, system handover, continuous operational support" },
              ].map((phase) => (
                <div key={phase.step} className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-white">{phase.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                {language === "vi" ? "Sẵn sàng chuyển đổi số?" : "Ready for Digital Transformation?"}
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                {language === "vi" ? "Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết" : "Contact us for free consultation and detailed quotes"}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {language === "vi" ? "Tư vấn miễn phí" : "Free Consultation"}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
