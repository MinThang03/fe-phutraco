"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Building2, ArrowRight, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function KhuDoThiLuongSonPage() {
  const { language } = useLanguage()

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">
                    {language === "vi" ? "DỰ ÁN TIÊU BIỂU" : "FEATURED PROJECT"}
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {language === "vi" ? "Khu đô thị Lương Sơn" : "Luong Son Urban Area"}
                </h1>
                <div className="flex items-center gap-2 text-white/90 mb-8">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xl">{language === "vi" ? "Hòa Bình" : "Hoa Binh"}</span>
                </div>
                <Link href="/lien-he" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors">
                  {language === "vi" ? "Tìm hiểu thêm" : "Learn More"}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-accent font-medium tracking-widest mb-4">
                  {language === "vi" ? "TỔNG QUAN DỰ ÁN" : "PROJECT OVERVIEW"}
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  {language === "vi" ? "Đô thị sinh thái hiện đại" : "Modern Eco-Urban Area"}
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {language === "vi"
                    ? "Khu đô thị Lương Sơn là dự án đô thị sinh thái quy mô lớn với đầy đủ tiện ích hiện đại, không gian xanh mát và cơ sở hạ tầng đồng bộ."
                    : "Luong Son Urban Area is a large-scale eco-urban project with complete modern facilities, green spaces and integrated infrastructure."}
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">150ha</div>
                    <div className="text-sm text-muted-foreground">
                      {language === "vi" ? "Diện tích" : "Area"}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">3000</div>
                    <div className="text-sm text-muted-foreground">
                      {language === "vi" ? "Căn hộ" : "Units"}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">15K+</div>
                    <div className="text-sm text-muted-foreground">
                      {language === "vi" ? "Dân số" : "Population"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" alt={language === "vi" ? "Khu đô thị" : "Urban Area"} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {language === "vi" ? "Tư vấn phát triển đô thị" : "Urban Development Consulting"}
            </h2>
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
