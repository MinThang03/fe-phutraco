import Header from "@/components/header"
import Footer from "@/components/footer"
import { Shield, ArrowRight, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function ICSPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(/images/ICS%20logo.png)` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">HỆ SINH THÁI</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  CTCP An ninh mạng Quốc tế ICS
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
                <p className="text-accent font-medium tracking-widest mb-4">GIỚI THIỆU</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Chuyên gia an ninh mạng hàng đầu
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  ICS cung cấp giải pháp an ninh mạng toàn diện, bảo mật thông tin cho doanh nghiệp và tổ chức. 
                  Đội ngũ chuyên gia được đào tạo quốc tế, kinh nghiệm thực chiến phong phú.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">200+</div>
                    <div className="text-sm text-muted-foreground">Khách hàng</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">SOC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">ISO 27001</div>
                    <div className="text-sm text-muted-foreground">Chứng nhận</div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" alt="ICS" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Bảo vệ doanh nghiệp của bạn</h2>
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
