import Header from "@/components/header"
import Footer from "@/components/footer"
import { TreePine, CheckCircle, ArrowRight, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function LuongSonPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <TreePine className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">HỆ SINH THÁI</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  CTCP Đầu tư Khu du lịch Quốc tế Lương Sơn
                </h1>
                <div className="flex items-center gap-2 text-white/90 mb-8">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xl">Hòa Bình</span>
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
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <p className="text-accent font-medium tracking-widest mb-4">GIỚI THIỆU DỰ ÁN</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Khu du lịch nghỉ dưỡng đẳng cấp quốc tế
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Khu du lịch quốc tế Lương Sơn là dự án trọng điểm của Phutraco Holding với tổng diện tích 
                  227 ha tại vị trí đắc địa Hòa Bình. Dự án kết hợp nghỉ dưỡng cao cấp, sân golf 18 lỗ 
                  tiêu chuẩn quốc tế và các tiện ích giải trí đa dạng.
                </p>
                <p className="text-muted-foreground text-lg mb-8">
                  Với thiết kế hài hòa giữa thiên nhiên và kiến trúc hiện đại, Lương Sơn hứa hẹn trở thành 
                  điểm đến lý tưởng cho du khách trong và ngoài nước.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">227ha</div>
                    <div className="text-sm text-muted-foreground">Tổng diện tích</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">18</div>
                    <div className="text-sm text-muted-foreground">Lỗ golf</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Biệt thự & villa</div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1596178060810-7d537cc1aed8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" alt="Lương Sơn Resort" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">TIỆN ÍCH</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Hệ sinh thái tiện ích đẳng cấp</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Sân golf 18 lỗ", desc: "Sân golf tiêu chuẩn quốc tế với cảnh quan thiên nhiên hùng vĩ", img: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" },
                { title: "Biệt thự nghỉ dưỡng", desc: "Biệt thự và villa cao cấp với view hồ và núi tuyệt đẹp", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" },
                { title: "Spa & Wellness", desc: "Trung tâm chăm sóc sức khỏe với liệu pháp trị liệu cao cấp", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" },
                { title: "Nhà hàng & Bar", desc: "Hệ thống nhà hàng đa dạng ẩm thực Á-Âu và bar view hồ", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" },
                { title: "Hồ bơi & Bãi biển nhân tạo", desc: "Hồ bơi vô cực và bãi biển nhân tạo với cát trắng mịn", img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" },
                { title: "Khu vui chơi trẻ em", desc: "Khu vui chơi an toàn và sáng tạo cho trẻ em", img: "https://images.unsplash.com/photo-1560365129-5f78c93b3e21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" },
              ].map((facility) => (
                <div key={facility.title} className="bg-muted rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img src={facility.img} alt={facility.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{facility.title}</h3>
                    <p className="text-muted-foreground text-sm">{facility.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Khám phá Lương Sơn Resort</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Liên hệ để được tư vấn về dự án và cơ hội đầu tư
            </p>
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
