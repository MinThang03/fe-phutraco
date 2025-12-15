import Header from "@/components/header"
import Footer from "@/components/footer"
import { Building, CheckCircle, ArrowRight, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function BachDangLandPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Building className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">HỆ SINH THÁI</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  CTCP Bạch Đằng Land
                </h1>
                <div className="flex items-center gap-2 text-white/90 mb-8">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xl">Hải Phòng</span>
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
                <p className="text-accent font-medium tracking-widest mb-4">GIỚI THIỆU</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Đơn vị phát triển BĐS hàng đầu
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Bạch Đằng Land là công ty bất động sản uy tín tại Hải Phòng, chuyên phát triển các dự án 
                  nhà ở, khu đô thị và bất động sản thương mại. Với đội ngũ chuyên nghiệp và tầm nhìn phát triển 
                  bền vững, chúng tôi cam kết mang đến không gian sống chất lượng cao.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">30+</div>
                    <div className="text-sm text-muted-foreground">Dự án</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                    <div className="text-sm text-muted-foreground">Khách hàng</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">200ha</div>
                    <div className="text-sm text-muted-foreground">Đất phát triển</div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" alt="Bạch Đằng Land" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Khu đô thị", desc: "Phát triển khu đô thị hiện đại với đầy đủ tiện ích", icon: "🏘️" },
                { title: "Nhà ở cao cấp", desc: "Chung cư, biệt thự cao cấp tại vị trí đắc địa", icon: "🏢" },
                { title: "BĐS thương mại", desc: "Shophouse, văn phòng cho thuê sinh lời cao", icon: "🏪" },
              ].map((service) => (
                <div key={service.title} className="bg-muted p-6 rounded-2xl text-center hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Tìm hiểu các dự án của chúng tôi</h2>
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
