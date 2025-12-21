"use client"

import { useLanguage } from "@/lib/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ShoppingBag, CheckCircle, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function DaiLyMuaBanPage() {
  const { language } = useLanguage()
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <ShoppingBag className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">{language === "vi" ? "LĨNH VỰC KINH DOANH" : "BUSINESS AREAS"}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">{language === "vi" ? "Đại lý mua bán ký gửi" : "Trading & Consignment Agency"}</h1>
                <p className="text-xl text-white/90 mb-8">
                  {language === "vi" ? "Dịch vụ đại lý mua bán và ký gửi các loại hàng hóa, vật tư phục vụ nhu cầu đa dạng" : "Trading and consignment services for various goods and materials serving diverse needs"}
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
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{language === "vi" ? "Đối tác thương mại tin cậy" : "Trusted Trading Partner"}</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {language === "vi" ? "Với mạng lưới kho bãi và đối tác rộng khắp, Phutraco Holding cung cấp dịch vụ đại lý mua bán, ký gửi hàng hóa chuyên nghiệp, giúp doanh nghiệp tối ưu hóa chi phí và thời gian." : "With a network of warehouses and partners, Phutraco Holding provides professional trading and consignment services, helping enterprises optimize costs and time."}
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Đối tác" : "Partners"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Giao dịch/năm" : "Transactions/Year"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">99%</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Hài lòng" : "Satisfied"}</div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" alt="Đại lý mua bán" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">{language === "vi" ? "DỊCH VỤ" : "SERVICES"}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{language === "vi" ? "Các dịch vụ chúng tôi cung cấp" : "Services We Provide"}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: language === "vi" ? "Mua bán ký gửi" : "Trading & Consignment",
                  desc: language === "vi" ? "Nhận ký gửi, mua bán hàng hóa, vật tư với hoa hồng hợp lý" : "Accept consignment, trading goods and materials with reasonable commission",
                  icon: "📦"
                },
                {
                  title: language === "vi" ? "Đại lý phân phối" : "Distribution Agency",
                  desc: language === "vi" ? "Đại lý phân phối sản phẩm cho nhà sản xuất, mở rộng thị trường" : "Distribution for manufacturers, expanding market reach",
                  icon: "🏪"
                },
                {
                  title: language === "vi" ? "Môi giới thương mại" : "Trade Brokerage",
                  desc: language === "vi" ? "Kết nối người mua và người bán, tư vấn giao dịch an toàn" : "Connect buyers and sellers, safe transaction consulting",
                  icon: "🤝"
                },
                {
                  title: language === "vi" ? "Dịch vụ kho bãi" : "Warehouse Services",
                  desc: language === "vi" ? "Cho thuê kho bãi, quản lý hàng hóa chuyên nghiệp" : "Warehouse rental and professional goods management",
                  icon: "🏗️"
                },
              ].map((s) => (
                <div key={s.title} className="bg-muted p-6 rounded-2xl hover:shadow-xl transition-shadow text-center">
                  <div className="text-5xl mb-4">{s.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{language === "vi" ? "Cần dịch vụ đại lý?" : "Need Trading Services?"}</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">{language === "vi" ? "Liên hệ với chúng tôi để được tư vấn chi tiết" : "Contact us for detailed consultation"}</p>
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
