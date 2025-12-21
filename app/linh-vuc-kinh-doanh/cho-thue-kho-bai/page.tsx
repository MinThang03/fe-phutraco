"use client"

import { useLanguage } from "@/lib/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Warehouse, CheckCircle, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function ChoThueKhoBaiPage() {
  const { language } = useLanguage()
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Warehouse className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">{language === "vi" ? "LĨNH VỰC KINH DOANH" : "BUSINESS AREAS"}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">{language === "vi" ? "Cho thuê kho bãi - Nhà xưởng" : "Warehouse & Factory Rental"}</h1>
                <p className="text-xl text-white/90 mb-8">
                  {language === "vi" ? "Hệ thống kho bãi và nhà xưởng hiện đại đáp ứng nhu cầu lưu trữ và sản xuất" : "Modern warehouse and factory system meeting storage and production needs"}
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
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{language === "vi" ? "Giải pháp kho bãi chuyên nghiệp" : "Professional Warehouse Solutions"}</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {language === "vi" ? "Phutraco Holding sở hữu hệ thống kho bãi và nhà xưởng rộng khắp các khu vực trọng điểm, đáp ứng nhu cầu đa dạng từ lưu trữ hàng hóa đến sản xuất công nghiệp." : "Phutraco Holding owns a warehouse and factory system across key regions, meeting diverse needs from goods storage to industrial production."}
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "m² diện tích" : "m² area"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">20+</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Kho bãi" : "Warehouses"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Bảo vệ" : "Security"}</div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" alt="Kho bãi" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">{language === "vi" ? "DỊCH VỤ" : "SERVICES"}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{language === "vi" ? "Các loại kho bãi cho thuê" : "Warehouse Types for Rent"}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: language === "vi" ? "Kho bãi tiêu chuẩn" : "Standard Warehouse",
                  desc: language === "vi" ? "Kho bãi mặt bằng rộng, mái che, hệ thống điện nước đầy đủ" : "Large warehouse with roofing and complete utilities",
                  img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: language === "vi" ? ["Diện tích 500-5000m²", "Mái che kiên cố", "Điện 3 pha", "Camera an ninh"] : ["Area 500-5000m²", "Solid roofing", "3-phase power", "Security cameras"],
                },
                {
                  title: language === "vi" ? "Nhà xưởng công nghiệp" : "Industrial Factory",
                  desc: language === "vi" ? "Nhà xưởng cho thuê phục vụ sản xuất, gia công, lắp ráp" : "Factory for rent serving production, processing, and assembly",
                  img: "https://images.unsplash.com/photo-1565114879-5e4e3ca1c5b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: language === "vi" ? ["Diện tích 1000-10000m²", "Trần cao 8-12m", "Cầu trục", "Hệ thống PCCC"] : ["Area 1000-10000m²", "Height 8-12m", "Overhead crane", "Fire system"],
                },
                {
                  title: language === "vi" ? "Kho lạnh" : "Cold Storage",
                  desc: language === "vi" ? "Kho lạnh bảo quản thực phẩm, dược phẩm với nhiệt độ kiểm soát" : "Cold storage for food and pharmaceutical preservation with temperature control",
                  img: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: language === "vi" ? ["Nhiệt độ -25°C đến +25°C", "Hệ thống làm lạnh hiện đại", "Theo dõi tự động", "Chứng nhận HACCP"] : ["Temperature -25°C to +25°C", "Modern cooling system", "Automatic monitoring", "HACCP certified"],
                },
                {
                  title: language === "vi" ? "Bãi container" : "Container Yard",
                  desc: language === "vi" ? "Bãi đỗ container rộng rãi, mặt bằng bê tông kiên cố" : "Spacious container yard with solid concrete ground",
                  img: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: language === "vi" ? ["Diện tích 5000m²+", "Mặt bằng bê tông", "Cân xe tải", "Bảo vệ 24/7"] : ["Area 5000m²+", "Concrete ground", "Truck scale", "24/7 security"],
                },
              ].map((service) => (
                <div key={service.title} className="bg-muted rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.desc}</p>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
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

        <section className="py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">{language === "vi" ? "ƯU ĐIỂM" : "ADVANTAGES"}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{language === "vi" ? "Tại sao chọn kho bãi của chúng tôi?" : "Why Choose Our Warehouse?"}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: language === "vi" ? "Vị trí thuận lợi" : "Convenient Location", desc: language === "vi" ? "Gần khu công nghiệp, cảng biển, giao thông thuận tiện" : "Near industrial zones, ports, convenient transportation" },
                { title: language === "vi" ? "An ninh đảm bảo" : "Guaranteed Security", desc: language === "vi" ? "Bảo vệ 24/7, camera giám sát toàn khu vực" : "24/7 security, surveillance cameras throughout" },
                { title: language === "vi" ? "Giá cả hợp lý" : "Reasonable Pricing", desc: language === "vi" ? "Mức giá cạnh tranh, hợp đồng linh hoạt theo nhu cầu" : "Competitive rates, flexible contracts" },
                { title: language === "vi" ? "Hỗ trợ tận tình" : "Dedicated Support", desc: language === "vi" ? "Đội ngũ quản lý chuyên nghiệp, hỗ trợ mọi lúc" : "Professional management team, anytime support" },
              ].map((adv) => (
                <div key={adv.title} className="bg-background p-6 rounded-2xl text-center hover:shadow-xl transition-shadow">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{language === "vi" ? "Cần thuê kho bãi?" : "Need Warehouse Rental?"}</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">{language === "vi" ? "Liên hệ với chúng tôi để xem kho và nhận báo giá" : "Contact us to view warehouses and get quotes"}</p>
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
