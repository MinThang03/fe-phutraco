import Header from "@/components/header"
import Footer from "@/components/footer"
import { Hotel, CheckCircle, ArrowRight, Phone, Star, Utensils, PartyPopper } from "lucide-react"
import Link from "next/link"

export default function KhachSanNhaHangPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Hotel className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">LĨNH VỰC KINH DOANH</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Khách sạn - Nhà hàng - Giải trí
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Đầu tư và vận hành các dự án khách sạn, nhà hàng và khu giải trí cao cấp, mang đến trải nghiệm đẳng cấp
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
                  Trải nghiệm đẳng cấp 5 sao
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Phutraco Holding tự hào là nhà đầu tư và vận hành các dự án khách sạn, nhà hàng và khu giải trí 
                  hàng đầu tại Việt Nam. Chúng tôi cam kết mang đến những trải nghiệm độc đáo, sang trọng và đẳng cấp 
                  quốc tế cho khách hàng.
                </p>
                <p className="text-muted-foreground text-lg mb-8">
                  Với đội ngũ chuyên gia giàu kinh nghiệm trong ngành hospitality, chúng tôi không ngừng đổi mới và 
                  nâng cao chất lượng dịch vụ, tạo nên những điểm đến được yêu thích nhất.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">Cơ sở kinh doanh</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                    <div className="text-sm text-muted-foreground">Khách hàng/năm</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-2xl font-bold text-primary mb-2">
                      <Star className="w-6 h-6 fill-primary" />
                      4.8
                    </div>
                    <div className="text-sm text-muted-foreground">Đánh giá trung bình</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                    alt="Khách sạn cao cấp"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-2xl shadow-xl">
                  <p className="text-primary font-bold text-lg">5 ⭐ Hotels</p>
                  <p className="text-primary/80 text-sm">Tiêu chuẩn quốc tế</p>
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
                Hệ sinh thái dịch vụ toàn diện
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  title: "Khách sạn cao cấp",
                  description: "Khách sạn 4-5 sao với tiêu chuẩn quốc tế, phòng nghỉ sang trọng và tiện nghi hiện đại",
                  icon: <Hotel className="w-10 h-10 text-primary" />,
                },
                {
                  title: "Nhà hàng ẩm thực",
                  description: "Nhà hàng đa dạng ẩm thực Á - Âu, buffet quốc tế do đầu bếp chuyên nghiệp phụ trách",
                  icon: <Utensils className="w-10 h-10 text-primary" />,
                },
                {
                  title: "Khu vui chơi giải trí",
                  description: "Khu giải trí tổng hợp: karaoke, spa, massage, hồ bơi, phòng gym đẳng cấp",
                  icon: <PartyPopper className="w-10 h-10 text-primary" />,
                },
                {
                  title: "Dịch vụ sự kiện",
                  description: "Tổ chức sự kiện, hội nghị, tiệc cưới với hệ thống hội trường và dịch vụ chuyên nghiệp",
                  icon: <Star className="w-10 h-10 text-primary" />,
                },
              ].map((service) => (
                <div key={service.title} className="bg-background p-6 rounded-2xl hover:shadow-xl transition-shadow text-center">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Featured Properties */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Khách sạn Phương Đông",
                  location: "Hải Phòng",
                  description: "Khách sạn 5 sao với 200 phòng cao cấp, nhà hàng buffet quốc tế và hồ bơi vô cực trên tầng thượng",
                  features: ["200+ phòng", "3 nhà hàng", "Spa & Gym", "Hồ bơi vô cực"],
                  image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  name: "Resort Lương Sơn",
                  location: "Hòa Bình",
                  description: "Khu nghỉ dưỡng sinh thái với biệt thự riêng, sân golf 18 lỗ và spa trị liệu cao cấp",
                  features: ["50+ biệt thự", "Sân golf 18 lỗ", "Spa cao cấp", "Nhà hàng view hồ"],
                  image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  name: "Nhà hàng Panorama",
                  location: "Hà Nội",
                  description: "Nhà hàng cao cấp view toàn cảnh thành phố, chuyên ẩm thực Âu và món ăn fusion sáng tạo",
                  features: ["300 chỗ ngồi", "View toàn cảnh", "Ẩm thực Âu", "Bar cocktail"],
                  image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  name: "Khu giải trí Paradise",
                  location: "Hải Phòng",
                  description: "Khu vui chơi giải trí tổng hợp: karaoke, bar, vũ trường với hệ thống âm thanh ánh sáng hiện đại",
                  features: ["20 phòng karaoke", "Vũ trường 500 người", "Sky bar", "Game zone"],
                  image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  name: "Trung tâm Hội nghị",
                  location: "Hà Nội",
                  description: "Trung tâm hội nghị và tiệc cưới với hội trường lớn, trang thiết bị hiện đại, phục vụ chuyên nghiệp",
                  features: ["Hội trường 1000 người", "Phòng VIP", "Catering", "Dịch vụ toàn diện"],
                  image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  name: "Spa & Wellness Center",
                  location: "Hải Phòng",
                  description: "Trung tâm chăm sóc sức khỏe và làm đẹp với liệu trình spa, massage, yoga và phòng gym hiện đại",
                  features: ["20+ phòng trị liệu", "Yoga studio", "Phòng gym", "Sauna & Jacuzzi"],
                  image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
              ].map((property) => (
                <div key={property.name} className="bg-background rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground">{property.name}</h3>
                      <span className="text-sm text-muted-foreground">{property.location}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{property.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {property.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
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
                Vì sao chọn chúng tôi?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Vị trí đắc địa", description: "Các cơ sở nằm tại vị trí trung tâm, giao thông thuận tiện" },
                { title: "Dịch vụ 5 sao", description: "Đội ngũ phục vụ chuyên nghiệp, tận tâm 24/7" },
                { title: "Tiện nghi hiện đại", description: "Trang thiết bị, nội thất cao cấp, công nghệ tiên tiến" },
                { title: "Giá cạnh tranh", description: "Chất lượng tốt nhất với mức giá hợp lý, nhiều ưu đãi" },
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
                Đặt phòng hoặc tổ chức sự kiện?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Liên hệ với chúng tôi để được tư vấn và nhận ưu đãi đặc biệt
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
