import Header from "@/components/header"
import Footer from "@/components/footer"
import { Gamepad2, ArrowRight, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function BlackholeGamePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1552820728-8ac41f1ce891?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Gamepad2 className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">HỆ SINH THÁI</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  CTCP Công nghệ Blackhole Game
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
                  Nhà phát triển game và giải pháp entertainment
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Chúng tôi chuyên phát triển game, ứng dụng giải trí và các giải pháp công nghệ entertainment hiện đại. 
                  Cam kết mang đến trải nghiệm thú vị, sáng tạo và đẳng cấp cho người dùng trên toàn thế giới.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Game phát triển</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                    <div className="text-sm text-muted-foreground">Người dùng</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">Năm kinh nghiệm</div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1538481143235-ee2e9a3d3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" alt="Công nghệ Blackhole Game" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-widest mb-4">LĨNH VỰC HOẠT ĐỘNG</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Các lĩnh vực chuyên môn</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Phát triển Game",
                  description: "Phát triển các game di động, PC và console với đồ họa hiện đại và gameplay hấp dẫn"
                },
                {
                  title: "Ứng dụng Giải trí",
                  description: "Xây dựng các ứng dụng giải trí, streaming và nền tảng social gaming"
                },
                {
                  title: "Công nghệ Entertainment",
                  description: "Giải pháp công nghệ AR/VR, metaverse và interactive content"
                },
                {
                  title: "Game Publishing",
                  description: "Hỗ trợ xuất bản và phân phối game trên các nền tảng chính"
                },
                {
                  title: "Dịch vụ Backend",
                  description: "Cung cấp hạ tầng backend, server và hệ thống thanh toán cho game"
                },
                {
                  title: "Hỗ trợ Kỹ thuật",
                  description: "Dịch vụ hỗ trợ kỹ thuật, tối ưu hóa performance và bảo trì game"
                },
              ].map((service) => (
                <div key={service.title} className="bg-background p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-lg text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Muốn phát triển game cùng chúng tôi?</h2>
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
