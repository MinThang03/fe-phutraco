import Header from "@/components/header"
import Footer from "@/components/footer"
import { Building2, ArrowRight, Phone, MapPin, Calendar, DollarSign, Users } from "lucide-react"
import Link from "next/link"

export default function CaoTocSocTrangCanThoPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1621544402532-64f64e4e8e1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">DỰ ÁN TIÊU BIỂU</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Cao tốc Sóc Trăng - Cần Thơ
                </h1>
                <div className="flex items-center gap-2 text-white/90 mb-8">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xl">Đồng bằng Sông Cửu Long</span>
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
                  Kết nối phát triển ĐBSCL
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Dự án cao tốc Sóc Trăng - Cần Thơ là tuyến giao thông trọng điểm kết nối các tỉnh ĐBSCL, 
                  góp phần quan trọng thúc đẩy phát triển kinh tế - xã hội khu vực.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">58km</div>
                    <div className="text-sm text-muted-foreground">Chiều dài</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">4</div>
                    <div className="text-sm text-muted-foreground">Làn xe</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">120km/h</div>
                    <div className="text-sm text-muted-foreground">Vận tốc thiết kế</div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" alt="Cao tốc" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-accent font-medium tracking-widest mb-4 text-center">THÔNG SỐ KỸ THUẬT</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              Quy mô dự án
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background rounded-xl p-8 shadow-sm">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Thời gian</h3>
                <p className="text-muted-foreground">2022 - 2025</p>
                <p className="text-sm text-muted-foreground mt-2">36 tháng thi công</p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm">
                <DollarSign className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Tổng mức đầu tư</h3>
                <p className="text-muted-foreground">18.000 tỷ đồng</p>
                <p className="text-sm text-muted-foreground mt-2">Vốn Nhà nước & ODA</p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Nhân lực</h3>
                <p className="text-muted-foreground">2.000+ lao động</p>
                <p className="text-sm text-muted-foreground mt-2">Đỉnh điểm thi công</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Cần tư vấn dự án hạ tầng?</h2>
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
