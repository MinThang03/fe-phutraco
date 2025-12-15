import Header from "@/components/header"
import Footer from "@/components/footer"
import { Droplets, CheckCircle, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function HoaChatSonPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Droplets className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">LĨNH VỰC KINH DOANH</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Hóa chất & Sơn</h1>
                <p className="text-xl text-white/90 mb-8">
                  Cung cấp hóa chất công nghiệp và sơn chất lượng cao cho ngành xây dựng và sản xuất
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
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Giải pháp hóa chất toàn diện</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Phutraco Holding là nhà phân phối hóa chất công nghiệp và sơn hàng đầu tại Việt Nam. 
                  Chúng tôi cung cấp đa dạng sản phẩm từ các thương hiệu uy tín trong và ngoài nước.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Sản phẩm</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">20+</div>
                    <div className="text-sm text-muted-foreground">Thương hiệu</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Chính hãng</div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1574096079513-d8259312b785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" alt="Hóa chất sơn" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">SẢN PHẨM</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Danh mục sản phẩm</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Hóa chất công nghiệp", items: ["Dung môi công nghiệp", "Hóa chất xử lý nước", "Phụ gia bê tông", "Chất tẩy rửa"], image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" },
                { title: "Sơn xây dựng", items: ["Sơn nước nội thất", "Sơn nước ngoại thất", "Sơn bóng", "Sơn chống thấm"], image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" },
                { title: "Chất phụ gia", items: ["Phụ gia bê tông", "Chất tăng độ bền", "Chất chống thấm", "Chất kết dính"], image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" },
                { title: "Hóa chất bảo vệ", items: ["Chống mối", "Chống rỉ sét", "Chống ẩm mốc", "Chống cháy"], image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" },
              ].map((cat) => (
                <div key={cat.title} className="bg-muted rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{cat.title}</h3>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Cần tư vấn sản phẩm?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Liên hệ với chúng tôi để được tư vấn và báo giá tốt nhất</p>
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
