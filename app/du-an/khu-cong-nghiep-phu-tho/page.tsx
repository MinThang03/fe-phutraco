"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Factory, ArrowRight, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function KhuCongNghiepPhuThoPage() {
  const { language } = useLanguage()

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Factory className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">
                    {language === "vi" ? "DỰ ÁN TIÊU BIỂU" : "FEATURED PROJECT"}
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {language === "vi" ? "Khu công nghiệp Phú Thọ" : "Phu Tho Industrial Zone"}
                </h1>
                <div className="flex items-center gap-2 text-white/90 mb-8">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xl">{language === "vi" ? "Phú Thọ" : "Phu Tho"}</span>
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
                  {language === "vi" ? "Khu công nghiệp sinh thái" : "Eco-Industrial Zone"}
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {language === "vi"
                    ? "KCN Phú Thọ là khu công nghiệp sinh thái với hạ tầng đồng bộ, thu hút đầu tư FDI và tạo việc làm cho hàng nghìn lao động địa phương."
                    : "Phu Tho Industrial Zone is an eco-industrial zone with complete infrastructure, attracting FDI and creating jobs for thousands of local workers."}
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">200ha</div>
                    <div className="text-sm text-muted-foreground">
                      {language === "vi" ? "Diện tích" : "Area"}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">
                      {language === "vi" ? "Doanh nghiệp" : "Enterprises"}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                    <div className="text-sm text-muted-foreground">
                      {language === "vi" ? "Việc làm" : "Jobs"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" alt={language === "vi" ? "Khu công nghiệp" : "Industrial Zone"} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {language === "vi" ? "Tư vấn phát triển KCN" : "Industrial Zone Development Consulting"}
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
