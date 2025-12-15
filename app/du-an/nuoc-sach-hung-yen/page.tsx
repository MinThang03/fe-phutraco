import Header from "@/components/header"
import Footer from "@/components/footer"
import { Droplets, ArrowRight, Phone, MapPin, Calendar, Users } from "lucide-react"
import Link from "next/link"

export default function NuocSachHungYenPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1583255552373-e47b315d8a05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Droplets className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">DỰ ÁN TIÊU BIỂU</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Hệ thống cấp nước sạch Hưng Yên
                </h1>
                <div className="flex items-center gap-2 text-white/90 mb-8">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xl">Hưng Yên</span>
                </div>
                <Link href="/lien-he" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors">
                  Tìm hiểu thêm
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
                <p className="text-accent font-medium tracking-widest mb-4">TỔNG QUAN DỰ ÁN</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Nước sạch cho mọi nhà
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Dự án cấp nước sạch Hưng Yên cung cấp nước sạch cho hơn 500.000 người dân, 
                  đáp ứng tiêu chuẩn nước sạch sinh hoạt của Bộ Y tế và WHO.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50K</div>
                    <div className="text-sm text-muted-foreground">m³/ngày</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">120km</div>
                    <div className="text-sm text-muted-foreground">Đường ống</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500K+</div>
                    <div className="text-sm text-muted-foreground">Người thụ hưởng</div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" alt="Nhà máy nước" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-accent font-medium tracking-widest mb-4 text-center">QUY MÔ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              Thông số dự án
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-background rounded-xl p-8 shadow-sm">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Tiến độ</h3>
                <p className="text-muted-foreground">Hoàn thành 2024</p>
                <p className="text-sm text-muted-foreground mt-2">Đưa vào vận hành Q3/2024</p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Công nghệ</h3>
                <p className="text-muted-foreground">Hiện đại</p>
                <p className="text-sm text-muted-foreground mt-2">Đạt tiêu chuẩn WHO</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Tư vấn dự án cấp thoát nước</h2>
            <Link href="/lien-he" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors">
              <Phone className="w-5 h-5" />
              Liên hệ ngay
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
