import Header from "@/components/header"
import Footer from "@/components/footer"
import { Building2, CheckCircle, ArrowRight, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function CMCPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(/images/CMC%20CORPORATION.jpg)` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">HỆ SINH THÁI</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  CTCP Đầu tư Thương mại CMC
                </h1>
                <div className="flex items-center gap-2 text-white/90 mb-8">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xl">Hưng Yên</span>
                </div>
                <Link href="/lien-he" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors">
                  Liên hệ hợp tác
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <p className="text-accent font-medium tracking-widest mb-4">GIỚI THIỆU</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Đối tác đầu tư chiến lược
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  CMC Corporation là công ty con trực thuộc Phutraco Holding, chuyên về đầu tư tài chính và 
                  thương mại đa ngành. Với tầm nhìn chiến lược và kinh nghiệm đầu tư sâu rộng, CMC là cánh tay 
                  đắc lực trong việc mở rộng danh mục đầu tư của tập đoàn.
                </p>
                <p className="text-muted-foreground text-lg mb-8">
                  Chúng tôi tập trung vào các lĩnh vực tiềm năng: công nghệ, bất động sản, năng lượng tái tạo, 
                  và thương mại điện tử, tạo ra giá trị bền vững cho các bên liên quan.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Dự án đầu tư</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500B+</div>
                    <div className="text-sm text-muted-foreground">Vốn quản lý (VNĐ)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Năm hoạt động</div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" alt="CMC Corporation" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">LĨNH VỰC HOẠT ĐỘNG</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Đầu tư đa ngành</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Đầu tư tài chính", desc: "Quản lý danh mục đầu tư, tư vấn M&A, cơ cấu vốn doanh nghiệp", features: ["Private equity", "Venture capital", "M&A advisory", "Corporate finance"] },
                { title: "Thương mại đa ngành", desc: "Kinh doanh xuất nhập khẩu, phân phối hàng hóa công nghiệp", features: ["Xuất nhập khẩu", "Phân phối B2B", "Thương mại điện tử", "Logistics"] },
                { title: "Bất động sản", desc: "Đầu tư và phát triển các dự án bất động sản thương mại và dân dụng", features: ["Khu đô thị", "Văn phòng cho thuê", "Trung tâm thương mại", "Nhà ở cao cấp"] },
                { title: "Công nghệ", desc: "Đầu tư vào các startup công nghệ, chuyển đổi số doanh nghiệp", features: ["Tech startup", "Fintech", "E-commerce platform", "SaaS solutions"] },
                { title: "Năng lượng tái tạo", desc: "Đầu tư dự án điện mặt trời, điện gió, năng lượng sạch", features: ["Điện mặt trời", "Điện gió", "Biomass", "Green energy"] },
                { title: "Sản xuất công nghiệp", desc: "Đầu tư vào các dự án sản xuất công nghiệp quy mô lớn", features: ["Nhà máy sản xuất", "Khu công nghiệp", "Chế biến", "OEM/ODM"] },
              ].map((sector) => (
                <div key={sector.title} className="bg-muted p-6 rounded-2xl hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{sector.title}</h3>
                  <p className="text-muted-foreground mb-4">{sector.desc}</p>
                  <ul className="space-y-2">
                    {sector.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-accent font-medium tracking-widest mb-4">ƯU ĐIỂM CẠNH TRANH</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Vì sao chọn CMC?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Kinh nghiệm đầu tư", desc: "Đội ngũ chuyên gia đầu tư giàu kinh nghiệm, hiểu rõ thị trường" },
                { title: "Mạng lưới rộng", desc: "Kết nối với nhiều đối tác trong và ngoài nước" },
                { title: "Tầm nhìn dài hạn", desc: "Đầu tư bền vững, tạo giá trị lâu dài" },
                { title: "Hỗ trợ toàn diện", desc: "Không chỉ vốn mà còn tư vấn quản trị, phát triển" },
              ].map((adv) => (
                <div key={adv.title} className="bg-background p-6 rounded-2xl">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{adv.title}</h3>
                  <p className="text-muted-foreground text-sm">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Quan tâm đến cơ hội đầu tư?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Liên hệ với chúng tôi để thảo luận về cơ hội hợp tác đầu tư
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/lien-he" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors">
                <Phone className="w-5 h-5" />
                Liên hệ ngay
              </Link>
              <Link href="/he-sinh-thai" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-medium transition-colors backdrop-blur-sm">
                Xem hệ sinh thái
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
