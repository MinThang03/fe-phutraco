import Header from "@/components/header"
import Footer from "@/components/footer"
import { Building2, ArrowRight, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function CauVuotMyDinhPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">DỰ ÁN TIÊU BIỂU</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Cầu vượt nút giao thông Mỹ Đình
                </h1>
                <div className="flex items-center gap-2 text-white/90 mb-8">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xl">Hà Nội</span>
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
                  Giải pháp giao thông thông minh
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Cầu vượt nút giao thông Mỹ Đình là công trình hạ tầng giao thông hiện đại, 
                  giảm tắc nghẽn và nâng cao năng lực giao thông khu vực Tây Hà Nội.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">1.2km</div>
                    <div className="text-sm text-muted-foreground">Chiều dài</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">6</div>
                    <div className="text-sm text-muted-foreground">Làn xe</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">80km/h</div>
                    <div className="text-sm text-muted-foreground">Vận tốc</div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" alt="Cầu vượt" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Tư vấn công trình giao thông</h2>
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
