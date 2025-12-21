"use client"

import { useLanguage } from "@/lib/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Droplets, CheckCircle, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function HoaChatSonPage() {
  const { language } = useLanguage()
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
                  <span className="text-accent font-medium tracking-widest">{language === "vi" ? "LĨNH VỰC KINH DOANH" : "BUSINESS AREAS"}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">{language === "vi" ? "Hóa chất & Sơn" : "Chemicals & Paint"}</h1>
                <p className="text-xl text-white/90 mb-8">
                  {language === "vi" ? "Cung cấp hóa chất công nghiệp và sơn chất lượng cao cho ngành xây dựng và sản xuất" : "Supply industrial chemicals and high-quality paint for construction and manufacturing"}
                </p>
                <Link href="/lien-he" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors">
                  {language === "vi" ? "Liên hệ tư vẕn" : "Contact Consultation"}
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
                <p className="text-accent font-medium tracking-widest mb-4">{language === "vi" ? "GIỚI THIỆU" : "INTRODUCTION"}</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{language === "vi" ? "Giải pháp hóa chất toàn diện" : "Comprehensive Chemical Solutions"}</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {language === "vi" ? "Phutraco Holding là nhà phân phối hóa chất công nghiệp và sơn hàng đầu tại Việt Nam. Chúng tôi cung cấp đa dạng sản phẩm từ các thương hiệu uy tín trong và ngoài nước." : "Phutraco Holding is a leading distributor of industrial chemicals and paint in Vietnam. We supply diverse products from reputable domestic and international brands."}
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Sản phẩm" : "Products"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">20+</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Thương hiệu" : "Brands"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Chính hãng" : "Authentic"}</div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1574096079513-d8259312b785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" alt="Hóa chất sơn" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">{language === "vi" ? "SẢN PHẨM" : "PRODUCTS"}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{language === "vi" ? "Danh mục sản phẩm" : "Product Categories"}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: language === "vi" ? "Hóa chất công nghiệp" : "Industrial Chemicals",
                  items: language === "vi"
                    ? ["Dung môi công nghiệp", "Hóa chất xử lý nước", "Phụ gia bê tông", "Chất tẩy rửa"]
                    : ["Industrial Solvents", "Water Treatment Chemicals", "Concrete Additives", "Cleaning Agents"],
                  image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                },
                {
                  title: language === "vi" ? "Sơn xây dựng" : "Construction Paint",
                  items: language === "vi"
                    ? ["Sơn nước nội thất", "Sơn nước ngoại thất", "Sơn bóng", "Sơn chống thấm"]
                    : ["Interior Water Paint", "Exterior Water Paint", "Glossy Paint", "Waterproof Paint"],
                  image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                },
                {
                  title: language === "vi" ? "Chất phụ gia" : "Additives",
                  items: language === "vi"
                    ? ["Phụ gia bê tông", "Chất tăng độ bền", "Chất chống thấm", "Chất kết dính"]
                    : ["Concrete Additives", "Strength Enhancers", "Waterproof Agents", "Adhesive Substances"],
                  image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                },
                {
                  title: language === "vi" ? "Hóa chất bảo vệ" : "Protective Chemicals",
                  items: language === "vi"
                    ? ["Chống mối", "Chống rỉ sét", "Chống ẩm mốc", "Chống cháy"]
                    : ["Termite Prevention", "Rust Prevention", "Mold Prevention", "Fire Retardant"],
                  image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                },
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{language === "vi" ? "Cần tư vấn sản phẩm?" : "Need Product Consultation?"}</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">{language === "vi" ? "Liên hệ với chúng tôi để được tư vấn và báo giá tốt nhất" : "Contact us for consultation and best prices"}</p>
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
