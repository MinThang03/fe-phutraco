import Header from "@/components/header"
import Footer from "@/components/footer"
import { Ship, CheckCircle, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function XuatNhapKhauPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Ship className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">LĨNH VỰC KINH DOANH</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Xuất nhập khẩu</h1>
                <p className="text-xl text-white/90 mb-8">
                  Hoạt động thương mại quốc tế, xuất nhập khẩu hàng hóa phục vụ trong và ngoài nước
                </p>
                <Link href="/lien-he" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors">
                  Liên hệ tư vấn
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
                <p className="text-accent font-medium tracking-widest mb-4">GIỚI THIỆU</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Cổng kết nối thương mại quốc tế</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Với kinh nghiệm hơn 10 năm trong lĩnh vực xuất nhập khẩu, Phutraco Holding là đối tác tin cậy 
                  giúp doanh nghiệp mở rộng thị trường quốc tế và nhập khẩu thiết bị, nguyên vật liệu chất lượng cao.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">30+</div>
                    <div className="text-sm text-muted-foreground">Quốc gia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                    <div className="text-sm text-muted-foreground">Lô hàng/năm</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">99%</div>
                    <div className="text-sm text-muted-foreground">Đúng hẹn</div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" alt="Xuất nhập khẩu" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">DỊCH VỤ</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Dịch vụ xuất nhập khẩu</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { title: "Xuất khẩu hàng hóa", desc: "Hỗ trợ xuất khẩu sản phẩm sang các thị trường quốc tế", icon: "📤" },
                { title: "Nhập khẩu thiết bị", desc: "Nhập khẩu máy móc, thiết bị, nguyên vật liệu chất lượng cao", icon: "📥" },
                { title: "Thông quan hải quan", desc: "Hỗ trợ làm thủ tục hải quan nhanh chóng, chính xác", icon: "✅" },
                { title: "Tư vấn XNK", desc: "Tư vấn chính sách, thủ tục, tối ưu chi phí xuất nhập khẩu", icon: "💼" },
              ].map((s) => (
                <div key={s.title} className="bg-muted p-6 rounded-2xl hover:shadow-xl transition-shadow text-center">
                  <div className="text-5xl mb-4">{s.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Hàng hóa xuất khẩu",
                  items: ["Vật liệu xây dựng", "Nông sản", "Hàng thủ công mỹ nghệ", "Thiết bị công nghiệp"],
                  img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: "Hàng hóa nhập khẩu",
                  items: ["Máy móc thiết bị", "Nguyên vật liệu", "Hóa chất công nghiệp", "Phụ tùng ô tô"],
                  img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
              ].map((cat) => (
                <div key={cat.title} className="bg-muted rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">{cat.title}</h3>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{item}</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Cần hỗ trợ xuất nhập khẩu?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Liên hệ với chúng tôi để được tư vấn chi tiết</p>
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
