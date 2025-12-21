"use client"

import { useLanguage } from "@/lib/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Truck, CheckCircle, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function VanTaiLogisticsPage() {
  const { language } = useLanguage()
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Truck className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">{language === "vi" ? "LĨNH VỰC KINH DOANH" : "BUSINESS AREAS"}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">{language === "vi" ? "Vận tải - Logistics" : "Transportation - Logistics"}</h1>
                <p className="text-xl text-white/90 mb-8">
                  {language === "vi" ? "Dịch vụ vận tải và logistics chuyên nghiệp, đảm bảo hàng hóa an toàn đúng tiến độ" : "Professional transportation and logistics services ensuring goods safety and on-time delivery"}
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
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{language === "vi" ? "Giải pháp vận tải toàn diện" : "Comprehensive Transportation Solutions"}</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {language === "vi" ? "Với hệ thống xe chuyên dụng và mạng lưới kho bãi trên toàn quốc, Phutraco Holding cung cấp dịch vụ vận tải và logistics chuyên nghiệp, đáp ứng mọi nhu cầu từ nhỏ lẻ đến quy mô lớn." : "With specialized vehicle fleet and nationwide warehouse network, Phutraco Holding provides professional transportation and logistics services meeting all needs from small to large scale."}
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Xe vận tải" : "Transport Vehicles"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">63</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Tỉnh/Thành phố" : "Provinces/Cities"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Hoạt động" : "Operations"}</div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" alt="Vận tải logistics" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">{language === "vi" ? "DỊCH VỤ" : "SERVICES"}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{language === "vi" ? "Dịch vụ vận chuyển chuyên nghiệp" : "Professional Transportation Services"}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: language === "vi" ? "Vận tải đường bộ" : "Road Transportation",
                  desc: language === "vi" ? "Vận chuyển hàng hóa đường bộ toàn quốc, xe chuyên dụng đa dạng" : "Nationwide road freight with diverse specialized vehicles",
                  img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: language === "vi"
                    ? ["Xe tải nhỏ 1-5 tấn", "Xe tải lớn 10-20 tấn", "Xe đầu kéo", "Xe chuyên dụng"]
                    : ["Small trucks 1-5 tons", "Large trucks 10-20 tons", "Tractor-trailers", "Specialized vehicles"]
                },
                {
                  title: language === "vi" ? "Dịch vụ logistics" : "Logistics Services",
                  desc: language === "vi" ? "Quản lý chuỗi cung ứng, tối ưu vận chuyển và kho bãi" : "Supply chain management, transportation and warehousing optimization",
                  img: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: language === "vi"
                    ? ["Quản lý kho", "Đóng gói hàng", "Phân phối", "Track & trace"]
                    : ["Warehouse management", "Packaging", "Distribution", "Track & trace"]
                },
                {
                  title: language === "vi" ? "Vận chuyển container" : "Container Shipping",
                  desc: language === "vi" ? "Vận chuyển container từ cảng về kho, nhà máy" : "Container transportation from port to warehouse and factories",
                  img: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: language === "vi"
                    ? ["Container 20ft", "Container 40ft", "Container lạnh", "Dịch vụ cảng"]
                    : ["20ft containers", "40ft containers", "Refrigerated containers", "Port services"]
                },
                {
                  title: language === "vi" ? "Giao hàng nhanh" : "Express Delivery",
                  desc: language === "vi" ? "Giao hàng nội thành và liên tỉnh trong ngày" : "Same-day and express interregional delivery",
                  img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: language === "vi"
                    ? ["Giao nội thành 2-4h", "Giao liên tỉnh 24-48h", "COD", "Bảo hiểm hàng hóa"]
                    : ["City delivery 2-4h", "Interregional 24-48h", "COD", "Cargo insurance"]
                },
              ].map((s) => (
                <div key={s.title} className="bg-muted rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{s.title}</h3>
                    <p className="text-muted-foreground mb-4">{s.desc}</p>
                    <ul className="space-y-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{f}</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{language === "vi" ? "Cần vận chuyển hàng hóa?" : "Need Goods Transportation?"}</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">{language === "vi" ? "Liên hệ với chúng tôi để được tư vấn và báo giá" : "Contact us for consultation and quotes"}</p>
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
