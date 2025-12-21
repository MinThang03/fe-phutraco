"use client"

import { useLanguage } from "@/lib/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Ship, CheckCircle, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function XuatNhapKhauPage() {
  const { language } = useLanguage()
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Ship className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">{language === "vi" ? "LĨNH VỰC KINH DOANH" : "BUSINESS AREAS"}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">{language === "vi" ? "Xuất nhập khẩu" : "Import & Export"}</h1>
                <p className="text-xl text-white/90 mb-8">
                  {language === "vi" ? "Hoạt động thương mại quốc tế, xuất nhập khẩu hàng hóa phục vụ trong và ngoài nước" : "International trade operations, importing and exporting goods domestically and internationally"}
                </p>
                <Link href="/lien-he" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors">
                  {language === "vi" ? "Liên hệ tư vấn" : "Contact Consultation"}
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
                <p className="text-accent font-medium tracking-widest mb-4">{language === "vi" ? "GIỚI THIỆU" : "INTRODUCTION"}</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{language === "vi" ? "Cổng kết nối thương mại quốc tế" : "International Trade Gateway"}</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {language === "vi" ? "Với kinh nghiệm hơn 10 năm trong lĩnh vực xuất nhập khẩu, Phutraco Holding là đối tác tin cậy giúp doanh nghiệp mở rộng thị trường quốc tế và nhập khẩu thiết bị, nguyên vật liệu chất lượng cao." : "With over 10 years of import/export experience, Phutraco Holding is a trusted partner helping enterprises expand into international markets and import quality equipment and raw materials."}
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">30+</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Quốc gia" : "Countries"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Lô hàng/năm" : "Shipments/Year"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">99%</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Đúng hẹn" : "On Time"}</div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" alt="Xuất nhập khẩu" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">{language === "vi" ? "DỊCH VỤ" : "SERVICES"}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{language === "vi" ? "Dịch vụ xuất nhập khẩu" : "Import/Export Services"}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { title: language === "vi" ? "Xuất khẩu hàng hóa" : "Export Goods", desc: language === "vi" ? "Hỗ trợ xuất khẩu sản phẩm sang các thị trường quốc tế" : "Support product export to international markets", icon: "📤" },
                { title: language === "vi" ? "Nhập khẩu thiết bị" : "Import Equipment", desc: language === "vi" ? "Nhập khẩu máy móc, thiết bị, nguyên vật liệu chất lượng cao" : "Import machinery, equipment, quality raw materials", icon: "📥" },
                { title: language === "vi" ? "Thông quan hải quan" : "Customs Clearance", desc: language === "vi" ? "Hỗ trợ làm thủ tục hải quan nhanh chóng, chính xác" : "Fast and accurate customs procedures", icon: "✅" },
                { title: language === "vi" ? "Tư vấn XNK" : "Import/Export Consulting", desc: language === "vi" ? "Tư vấn chính sách, thủ tục, tối ưu chi phí xuất nhập khẩu" : "Consult on policies, procedures, cost optimization", icon: "💼" },
              ].map((s) => (
                <div key={s.title} className="bg-muted p-6 rounded-2xl hover:shadow-xl transition-shadow text-center">
                  <div className="text-5xl mb-4">{s.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: language === "vi" ? "Hàng hóa xuất khẩu" : "Export Goods",
                  items: language === "vi" ? ["Vật liệu xây dựng", "Nông sản", "Hàng thủ công mỹ nghệ", "Thiết bị công nghiệp"] : ["Construction Materials", "Agricultural Products", "Handicrafts", "Industrial Equipment"],
                  img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: language === "vi" ? "Hàng hóa nhập khẩu" : "Import Goods",
                  items: language === "vi" ? ["Máy móc thiết bị", "Nguyên vật liệu", "Hóa chất công nghiệp", "Phụ tùng ô tô"] : ["Machinery & Equipment", "Raw Materials", "Industrial Chemicals", "Auto Parts"],
                  img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
              ].map((cat) => (
                <div key={cat.title} className="bg-muted rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">{cat.title}</h3>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{language === "vi" ? "Cần hỗ trợ xuất nhập khẩu?" : "Need Import/Export Support?"}</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">{language === "vi" ? "Liên hệ với chúng tôi để được tư vấn chi tiết" : "Contact us for detailed consultation"}. </p>
            <Link href="/lien-he" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors">
              <Phone className="w-5 h-5" />
              {language === "vi" ? "Liên hệ ngay" : "Contact Now"}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
