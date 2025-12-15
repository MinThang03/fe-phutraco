import Header from "@/components/header"
import Footer from "@/components/footer"
import { BrickWall, CheckCircle, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function VatLieuXayDungPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] min-h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <BrickWall className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">LĨNH VỰC KINH DOANH</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Vật liệu xây dựng
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Sản xuất và kinh doanh các loại vật liệu xây dựng chất lượng cao đáp ứng tiêu chuẩn quốc tế
                </p>
                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors"
                >
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
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Nguồn vật liệu chất lượng cao
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Phutraco Holding là đơn vị hàng đầu trong lĩnh vực sản xuất và kinh doanh vật liệu xây dựng. 
                  Với nhà máy sản xuất hiện đại và mạng lưới phân phối rộng khắp, chúng tôi cung cấp đầy đủ các 
                  loại vật liệu từ thô đến hoàn thiện cho mọi công trình.
                </p>
                <p className="text-muted-foreground text-lg mb-8">
                  Sản phẩm của chúng tôi đáp ứng tiêu chuẩn TCVN, ASTM, đảm bảo chất lượng ổn định và giá cả cạnh tranh.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">3</div>
                    <div className="text-sm text-muted-foreground">Nhà máy sản xuất</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Đại lý toàn quốc</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Tiêu chuẩn chất lượng</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1615859305219-99e498db0a4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                    alt="Vật liệu xây dựng"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">SẢN PHẨM</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Danh mục sản phẩm đa dạng
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Xi măng & Bê tông",
                  items: ["Xi măng PCB30, PCB40", "Bê tông thương phẩm", "Bê tông tươi", "Cốt liệu xây dựng"],
                  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: "Gạch & Ngói",
                  items: ["Gạch ống, gạch đặc", "Gạch men, gạch lát nền", "Ngói lợp", "Gạch trang trí"],
                  image: "https://images.unsplash.com/photo-1615857224439-ecaf0c731471?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: "Sắt thép",
                  items: ["Thép xây dựng", "Thép hình", "Lưới thép hàn", "Tôn lợp"],
                  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: "Cát đá",
                  items: ["Cát xây dựng", "Đá 1x2, 2x4", "Đá mi", "Sỏi lọc"],
                  image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: "Vật liệu hoàn thiện",
                  items: ["Sơn nước, sơn dầu", "Keo dán gạch", "Vữa trát tường", "Chống thấm"],
                  image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: "Vật liệu khác",
                  items: ["Ống nước", "Dây điện", "Kính xây dựng", "Cửa nhôm kính"],
                  image: "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
              ].map((category) => (
                <div key={category.title} className="bg-muted rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
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

        <section className="py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">ƯU ĐIỂM</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Tại sao chọn Phutraco?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Chất lượng đảm bảo", description: "Sản phẩm đạt tiêu chuẩn TCVN, có giấy chứng nhận" },
                { title: "Giá cả cạnh tranh", description: "Giá xuất xưởng, hỗ trợ chiết khấu số lượng lớn" },
                { title: "Giao hàng nhanh", description: "Mạng lưới kho bãi rộng, giao hàng tận nơi" },
                { title: "Tư vấn chuyên nghiệp", description: "Đội ngũ kỹ thuật hỗ trợ tư vấn 24/7" },
              ].map((advantage) => (
                <div key={advantage.title} className="bg-background p-6 rounded-2xl text-center hover:shadow-xl transition-shadow">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Cần tư vấn vật liệu xây dựng?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Liên hệ với chúng tôi để được tư vấn và báo giá tốt nhất
              </p>
              <Link
                href="/lien-he"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors"
              >
                <Phone className="w-5 h-5" />
                Liên hệ ngay
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
