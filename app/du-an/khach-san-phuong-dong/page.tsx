"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Hotel, ArrowRight, Phone, MapPin, Star } from "lucide-react"
import Link from "next/link"

export default function KhachSanPhuongDongPage() {
  const { language } = useLanguage()

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Hotel className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">
                    {language === "vi" ? "DỰ ÁN TIÊU BIỂU" : "FEATURED PROJECT"}
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {language === "vi" ? "Khách sạn Phương Đông" : "Phuong Dong Hotel"}
                </h1>
                <div className="flex items-center gap-4 text-white/90 mb-8">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span className="text-xl">{language === "vi" ? "Hà Nội" : "Hanoi"}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
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
                  {language === "vi" ? "Khách sạn 5 sao đẳng cấp" : "Premium 5-Star Hotel"}
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {language === "vi"
                    ? "Khách sạn Phương Đông là khách sạn 5 sao sang trọng với vị trí đắc địa tại trung tâm Hà Nội, cung cấp dịch vụ lưu trú và ẩm thực đẳng cấp quốc tế."
                    : "Phuong Dong Hotel is a luxurious 5-star hotel with a prime location in central Hanoi, offering world-class accommodation and dining services."}
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">300</div>
                    <div className="text-sm text-muted-foreground">
                      {language === "vi" ? "Phòng" : "Rooms"}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">25</div>
                    <div className="text-sm text-muted-foreground">
                      {language === "vi" ? "Tầng" : "Floors"}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">5⭐</div>
                    <div className="text-sm text-muted-foreground">
                      {language === "vi" ? "Tiêu chuẩn" : "Standard"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" alt={language === "vi" ? "Khách sạn" : "Hotel"} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {language === "vi" ? "Tư vấn dự án khách sạn" : "Hotel Project Consulting"}
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
