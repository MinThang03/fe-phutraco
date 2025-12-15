import Header from "@/components/header"
import Footer from "@/components/footer"
import { Building, CheckCircle, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function XayDungCongTrinhPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Building className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">LĨNH VỰC KINH DOANH</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Xây dựng công trình
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Thi công xây dựng các công trình dân dụng, công nghiệp, giao thông, thủy lợi và hạ tầng kỹ thuật với quy mô lớn, chất lượng cao
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
                  Đối tác tin cậy cho mọi công trình
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Với hơn 15 năm kinh nghiệm trong lĩnh vực xây dựng, Phutraco Holding tự hào là nhà thầu uy tín, 
                  cung cấp giải pháp thi công toàn diện cho các dự án quy mô lớn trên khắp cả nước.
                </p>
                <p className="text-muted-foreground text-lg mb-8">
                  Chúng tôi cam kết mang đến chất lượng vượt trội, tiến độ đúng hạn và chi phí tối ưu cho mọi 
                  công trình, từ dân dụng đến công nghiệp, từ giao thông đến hạ tầng kỹ thuật.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Công trình hoàn thành</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Năm kinh nghiệm</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Khách hàng hài lòng</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                    alt="Xây dựng công trình"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-2xl shadow-xl">
                  <p className="text-primary font-bold text-lg">ISO 9001:2015</p>
                  <p className="text-primary/80 text-sm">Chứng nhận chất lượng</p>
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
                Lĩnh vực thi công chuyên sâu
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Đội ngũ kỹ sư và công nhân lành nghề, trang thiết bị hiện đại sẵn sàng đáp ứng mọi yêu cầu
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Xây dựng dân dụng",
                  description: "Thi công các công trình nhà ở, chung cư, biệt thự, trường học, bệnh viện với tiêu chuẩn cao",
                  image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: "Xây dựng công nghiệp",
                  description: "Xây dựng nhà máy, nhà xưởng, kho bãi công nghiệp đảm bảo tiêu chuẩn kỹ thuật nghiêm ngặt",
                  image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: "Công trình giao thông",
                  description: "Thi công đường bộ, cầu cống, hầm chui, nút giao thông với công nghệ tiên tiến",
                  image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: "Công trình thủy lợi",
                  description: "Xây dựng hệ thống cấp thoát nước, đập, hồ chứa, kênh mương phục vụ nông nghiệp và đô thị",
                  image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: "Hạ tầng kỹ thuật",
                  description: "Thi công hạ tầng khu đô thị, khu công nghiệp: san nền, thoát nước, điện, viễn thông",
                  image: "https://images.unsplash.com/photo-1590496793929-7651aaf9c6b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: "Cải tạo và sửa chữa",
                  description: "Dịch vụ cải tạo, sửa chữa, nâng cấp các công trình hiện hữu với chi phí hợp lý",
                  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
              ].map((service) => (
                <div key={service.title} className="bg-background rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-widest mb-4">ƯU ĐIỂM</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Tại sao chọn Phutraco?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Đội ngũ chuyên nghiệp",
                  description: "Kỹ sư và công nhân có chứng chỉ hành nghề, nhiều năm kinh nghiệm",
                },
                {
                  title: "Công nghệ hiện đại",
                  description: "Trang thiết bị và phương pháp thi công tiên tiến, đảm bảo chất lượng",
                },
                {
                  title: "Quản lý chặt chẽ",
                  description: "Hệ thống quản lý dự án chuyên nghiệp, minh bạch từng giai đoạn",
                },
                {
                  title: "Chi phí tối ưu",
                  description: "Báo giá hợp lý, không phát sinh, cam kết đúng tiến độ",
                },
              ].map((advantage) => (
                <div key={advantage.title} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
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
                Bạn cần tư vấn về dự án xây dựng?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của bạn
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Liên hệ ngay
                </Link>
                <Link
                  href="/du-an"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-medium transition-colors backdrop-blur-sm"
                >
                  Xem dự án tiêu biểu
                  <ArrowRight className="w-5 h-5" />
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
