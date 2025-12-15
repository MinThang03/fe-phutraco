import Header from "@/components/header"
import Footer from "@/components/footer"
import { Warehouse, CheckCircle, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function ChoThueKhoBaiPage() {
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
                  <span className="text-accent font-medium tracking-widest">LĨNH VỰC KINH DOANH</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Cho thuê kho bãi - Nhà xưởng</h1>
                <p className="text-xl text-white/90 mb-8">
                  Hệ thống kho bãi và nhà xưởng hiện đại đáp ứng nhu cầu lưu trữ và sản xuất
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
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Giải pháp kho bãi chuyên nghiệp</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Phutraco Holding sở hữu hệ thống kho bãi và nhà xưởng rộng khắp các khu vực trọng điểm, 
                  đáp ứng nhu cầu đa dạng từ lưu trữ hàng hóa đến sản xuất công nghiệp.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                    <div className="text-sm text-muted-foreground">m² diện tích</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">20+</div>
                    <div className="text-sm text-muted-foreground">Kho bãi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Bảo vệ</div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" alt="Kho bãi" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">DỊCH VỤ</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Các loại kho bãi cho thuê</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Kho bãi tiêu chuẩn",
                  desc: "Kho bãi mặt bằng rộng, mái che, hệ thống điện nước đầy đủ",
                  img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: ["Diện tích 500-5000m²", "Mái che kiên cố", "Điện 3 pha", "Camera an ninh"],
                },
                {
                  title: "Nhà xưởng công nghiệp",
                  desc: "Nhà xưởng cho thuê phục vụ sản xuất, gia công, lắp ráp",
                  img: "https://images.unsplash.com/photo-1565114879-5e4e3ca1c5b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: ["Diện tích 1000-10000m²", "Trần cao 8-12m", "Cầu trục", "Hệ thống PCCC"],
                },
                {
                  title: "Kho lạnh",
                  desc: "Kho lạnh bảo quản thực phẩm, dược phẩm với nhiệt độ kiểm soát",
                  img: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: ["Nhiệt độ -25°C đến +25°C", "Hệ thống làm lạnh hiện đại", "Theo dõi tự động", "Chứng nhận HACCP"],
                },
                {
                  title: "Bãi container",
                  desc: "Bãi đỗ container rộng rãi, mặt bằng bê tông kiên cố",
                  img: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: ["Diện tích 5000m²+", "Mặt bằng bê tông", "Cân xe tải", "Bảo vệ 24/7"],
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
              <p className="text-accent font-medium tracking-widest mb-4">ƯU ĐIỂM</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Tại sao chọn kho bãi của chúng tôi?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Vị trí thuận lợi", desc: "Gần khu công nghiệp, cảng biển, giao thông thuận tiện" },
                { title: "An ninh đảm bảo", desc: "Bảo vệ 24/7, camera giám sát toàn khu vực" },
                { title: "Giá cả hợp lý", desc: "Mức giá cạnh tranh, hợp đồng linh hoạt theo nhu cầu" },
                { title: "Hỗ trợ tận tình", desc: "Đội ngũ quản lý chuyên nghiệp, hỗ trợ mọi lúc" },
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Cần thuê kho bãi?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Liên hệ với chúng tôi để xem kho và nhận báo giá</p>
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
