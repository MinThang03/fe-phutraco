import Header from "@/components/header"
import Footer from "@/components/footer"
import { Factory, CheckCircle, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function MayMocThietBiPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Factory className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">LĨNH VỰC KINH DOANH</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Máy móc thiết bị xây dựng
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Cung cấp, mua bán và cho thuê các loại máy móc, thiết bị xây dựng hiện đại phục vụ thi công công trình
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

        {/* Overview Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-accent font-medium tracking-widest mb-4">GIỚI THIỆU</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Giải pháp thiết bị toàn diện
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Phutraco Holding là đơn vị hàng đầu trong lĩnh vực cung cấp máy móc thiết bị xây dựng tại Việt Nam. 
                  Chúng tôi nhập khẩu và phân phối các dòng thiết bị chất lượng cao từ các thương hiệu uy tín trên thế giới.
                </p>
                <p className="text-muted-foreground text-lg mb-8">
                  Với đội ngũ kỹ thuật viên chuyên nghiệp, chúng tôi không chỉ cung cấp thiết bị mà còn đi kèm dịch vụ 
                  bảo trì, sửa chữa và đào tạo vận hành, đảm bảo hiệu suất tối ưu cho mọi dự án.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">200+</div>
                    <div className="text-sm text-muted-foreground">Loại thiết bị</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Hỗ trợ kỹ thuật</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Chính hãng</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1565114879-5e4e3ca1c5b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                    alt="Máy móc thiết bị"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-2xl shadow-xl">
                  <p className="text-primary font-bold text-lg">10+ năm</p>
                  <p className="text-primary/80 text-sm">Kinh nghiệm ngành</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-widest mb-4">DỊCH VỤ</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Các dịch vụ chúng tôi cung cấp
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  title: "Mua bán máy móc xây dựng",
                  description: "Cung cấp máy ủi, máy xúc, máy lu, xe tải ben, cần cẩu và các thiết bị chuyên dụng",
                  icon: "🏗️",
                },
                {
                  title: "Cho thuê thiết bị thi công",
                  description: "Dịch vụ cho thuê linh hoạt theo ngày, tháng với giá cạnh tranh, đầy đủ giấy tờ",
                  icon: "📋",
                },
                {
                  title: "Bảo trì, sửa chữa",
                  description: "Đội ngũ kỹ thuật 24/7 sẵn sàng bảo trì định kỳ và sửa chữa mọi sự cố",
                  icon: "🔧",
                },
                {
                  title: "Nhập khẩu thiết bị",
                  description: "Nhập khẩu trực tiếp từ nhà sản xuất, đảm bảo giá tốt và chất lượng chính hãng",
                  icon: "🚢",
                },
              ].map((service) => (
                <div key={service.title} className="bg-background p-6 rounded-2xl hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Equipment Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Máy đào, máy xúc",
                  items: ["Máy xúc bánh xích", "Máy xúc bánh lốp", "Máy đào mini", "Máy đào thủy lực"],
                  image: "https://images.unsplash.com/photo-1565114879-5e4e3ca1c5b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: "Máy ủi, máy lu",
                  items: ["Máy ủi D5-D11", "Máy lu bánh lốp", "Máy lu rung", "Máy lu tĩnh"],
                  image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: "Cần cẩu, xe nâng",
                  items: ["Cần cẩu tháp", "Cần cẩu ô tô", "Xe nâng điện", "Xe nâng diesel"],
                  image: "https://images.unsplash.com/photo-1590496793929-7651aaf9c6b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: "Xe vận tải",
                  items: ["Xe tải ben", "Xe chở xi măng", "Xe trộn bê tông", "Xe đầu kéo"],
                  image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: "Máy trộn bê tông",
                  items: ["Trạm trộn cố định", "Trạm trộn di động", "Máy bơm bê tông", "Xe chở bê tông"],
                  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: "Thiết bị khác",
                  items: ["Máy phát điện", "Máy nén khí", "Máy bơm nước", "Giàn giáo"],
                  image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
              ].map((category) => (
                <div key={category.title} className="bg-background rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow">
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

        {/* Brands Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">ĐỐI TÁC</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Thương hiệu uy tín
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Chúng tôi là đại lý ủy quyền của các thương hiệu hàng đầu thế giới
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {["Caterpillar", "Komatsu", "Hitachi", "Volvo", "Doosan", "Hyundai", "XCMG", "Sany"].map((brand) => (
                <div key={brand} className="bg-muted p-8 rounded-xl flex items-center justify-center hover:shadow-lg transition-shadow">
                  <p className="text-xl font-bold text-foreground">{brand}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Cần tư vấn thiết bị cho dự án?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá tốt nhất
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Liên hệ ngay
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
