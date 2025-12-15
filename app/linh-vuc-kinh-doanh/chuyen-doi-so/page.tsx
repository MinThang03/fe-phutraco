import Header from "@/components/header"
import Footer from "@/components/footer"
import { Shield, CheckCircle, ArrowRight, Phone, Lock, Server, Cloud } from "lucide-react"
import Link from "next/link"

export default function ChuyenDoiSoPage() {
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
                  <span className="text-accent font-medium tracking-widest">LĨNH VỰC KINH DOANH</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Chuyển đổi số - An ninh mạng
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Triển khai giải pháp chuyển đổi số, nền tảng số hoá doanh nghiệp và dịch vụ bảo mật an toàn
                </p>
                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors"
                >
                  Liên hệ tư vấn
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
                <p className="text-accent font-medium tracking-widest mb-4">GIỚI THIỆU</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Đối tác chuyển đổi số tin cậy
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Trong kỷ nguyên 4.0, Phutraco Holding cam kết đồng hành cùng doanh nghiệp trên hành trình chuyển đổi số, 
                  xây dựng nền tảng công nghệ vững mạnh và bảo vệ an toàn thông tin trong môi trường mạng.
                </p>
                <p className="text-muted-foreground text-lg mb-8">
                  Chúng tôi cung cấp giải pháp toàn diện từ tư vấn chiến lược đến triển khai công nghệ, đào tạo nhân sự 
                  và vận hành hệ thống, giúp doanh nghiệp nâng cao năng lực cạnh tranh và phát triển bền vững.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100+</div>
                    <div className="text-sm text-muted-foreground">Dự án thành công</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Đối tác doanh nghiệp</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Hỗ trợ kỹ thuật</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                    alt="Chuyển đổi số"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-2xl shadow-xl">
                  <p className="text-primary font-bold text-lg">ISO 27001</p>
                  <p className="text-primary/80 text-sm">An toàn thông tin</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-widest mb-4">DỊCH VỤ</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Giải pháp toàn diện
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  title: "Tư vấn chuyển đổi số",
                  description: "Tư vấn chiến lược, lộ trình chuyển đổi số phù hợp với từng doanh nghiệp",
                  icon: <Cloud className="w-10 h-10 text-primary" />,
                },
                {
                  title: "Phát triển nền tảng số",
                  description: "Xây dựng hệ thống quản lý, ERP, CRM, ứng dụng di động theo yêu cầu",
                  icon: <Server className="w-10 h-10 text-primary" />,
                },
                {
                  title: "Giải pháp an ninh mạng",
                  description: "Bảo mật hệ thống, phòng chống tấn công mạng, quản lý rủi ro an toàn thông tin",
                  icon: <Shield className="w-10 h-10 text-primary" />,
                },
                {
                  title: "Đào tạo & hỗ trợ",
                  description: "Đào tạo nhân sự, chuyển giao công nghệ, hỗ trợ vận hành 24/7",
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
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Giải pháp chuyển đổi số</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Hệ thống quản lý ERP",
                    description: "Giải pháp quản lý tổng thể doanh nghiệp: tài chính, nhân sự, sản xuất, kho vận",
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                    features: ["Quản lý tài chính", "Quản lý nhân sự", "Quản lý sản xuất", "Báo cáo phân tích"],
                  },
                  {
                    title: "Nền tảng thương mại điện tử",
                    description: "Xây dựng website, app bán hàng online, tích hợp thanh toán và vận chuyển",
                    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                    features: ["Website bán hàng", "App mobile", "Thanh toán online", "Quản lý đơn hàng"],
                  },
                  {
                    title: "Hệ thống CRM",
                    description: "Quản lý quan hệ khách hàng, tự động hoá marketing và chăm sóc khách hàng",
                    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                    features: ["Quản lý khách hàng", "Marketing automation", "Chăm sóc khách hàng", "Phân tích dữ liệu"],
                  },
                  {
                    title: "Giải pháp Cloud",
                    description: "Triển khai hạ tầng điện toán đám mây, di chuyển dữ liệu lên cloud an toàn",
                    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                    features: ["Cloud migration", "Cloud storage", "Cloud backup", "Cloud security"],
                  },
                  {
                    title: "Ứng dụng di động",
                    description: "Phát triển app iOS/Android cho doanh nghiệp, tối ưu trải nghiệm người dùng",
                    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                    features: ["iOS & Android", "UI/UX design", "Push notification", "Offline mode"],
                  },
                  {
                    title: "Big Data & AI",
                    description: "Phân tích dữ liệu lớn, ứng dụng AI/ML cho dự báo và ra quyết định",
                    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                    features: ["Data analytics", "Machine learning", "Dự báo xu hướng", "Business intelligence"],
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
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Giải pháp an ninh mạng</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Bảo mật hệ thống",
                    description: "Triển khai firewall, IDS/IPS, VPN, bảo mật endpoint và mạng nội bộ",
                    features: ["Firewall & IPS", "Endpoint security", "VPN", "Network security"],
                  },
                  {
                    title: "Đánh giá rủi ro",
                    description: "Kiểm tra an ninh, đánh giá lỗ hổng, test xâm nhập và tư vấn khắc phục",
                    features: ["Vulnerability scan", "Penetration test", "Risk assessment", "Security audit"],
                  },
                  {
                    title: "SOC & Giám sát",
                    description: "Trung tâm điều hành an ninh mạng 24/7, phát hiện và ứng cứu sự cố",
                    features: ["24/7 monitoring", "Incident response", "Threat hunting", "SIEM"],
                  },
                  {
                    title: "Mã hóa dữ liệu",
                    description: "Giải pháp mã hoá, chứng thực và bảo vệ dữ liệu nhạy cảm",
                    features: ["Data encryption", "PKI", "Digital signature", "DLP"],
                  },
                  {
                    title: "Đào tạo nhận thức",
                    description: "Đào tạo nhân viên về an toàn thông tin, phòng chống tấn công mạng xã hội",
                    features: ["Security awareness", "Phishing simulation", "Training programs", "Policy development"],
                  },
                  {
                    title: "Tuân thủ & Chứng nhận",
                    description: "Tư vấn tuân thủ ISO 27001, GDPR, PCI-DSS và các tiêu chuẩn an ninh",
                    features: ["ISO 27001", "GDPR compliance", "PCI-DSS", "Security standards"],
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
              <p className="text-accent font-medium tracking-widest mb-4">QUY TRÌNH</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Triển khai dự án chuyên nghiệp
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Tư vấn & Phân tích", description: "Khảo sát nhu cầu, phân tích hiện trạng, tư vấn giải pháp" },
                { step: "02", title: "Thiết kế & Lập kế hoạch", description: "Thiết kế chi tiết, lập kế hoạch triển khai và phân bổ nguồn lực" },
                { step: "03", title: "Triển khai & Tích hợp", description: "Cài đặt hệ thống, tích hợp với hệ thống hiện có, test đảm bảo chất lượng" },
                { step: "04", title: "Vận hành & Hỗ trợ", description: "Đào tạo người dùng, bàn giao hệ thống, hỗ trợ vận hành liên tục" },
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
                Sẵn sàng chuyển đổi số?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Tư vấn miễn phí
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
