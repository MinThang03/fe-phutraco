import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import {
  Building,
  Truck,
  Hotel,
  PaintBucket,
  Factory,
  Ship,
  Warehouse,
  TreePine,
  Droplets,
  BrickWall,
  ShoppingBag,
  ArrowRight,
} from "lucide-react"

const businessAreas = [
  {
    icon: Building,
    title: "Xây dựng công trình",
    slug: "xay-dung-cong-trinh",
    description:
      "Thi công xây dựng các công trình dân dụng, công nghiệp, giao thông, thủy lợi và hạ tầng kỹ thuật với quy mô lớn, chất lượng cao.",
    services: [
      "Xây dựng dân dụng",
      "Xây dựng công nghiệp",
      "Công trình giao thông",
      "Công trình thủy lợi",
      "Hạ tầng kỹ thuật",
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: Factory,
    title: "Máy móc thiết bị",
    slug: "may-moc-thiet-bi",
    description:
      "Cung cấp, mua bán và cho thuê các loại máy móc, thiết bị xây dựng hiện đại phục vụ thi công công trình.",
    services: ["Mua bán máy móc xây dựng", "Cho thuê thiết bị thi công", "Bảo trì, sửa chữa", "Nhập khẩu thiết bị"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: Hotel,
    title: "Khách sạn - Nhà hàng - Giải trí",
    slug: "khach-san-nha-hang",
    description:
      "Đầu tư và vận hành các dự án khách sạn, nhà hàng và khu giải trí cao cấp, mang đến trải nghiệm đẳng cấp cho khách hàng.",
    services: ["Khách sạn cao cấp", "Nhà hàng ẩm thực", "Khu vui chơi giải trí", "Dịch vụ sự kiện"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: Factory,
    title: "Chuyển đổi số - An ninh mạng",
    slug: "chuyen-doi-so",
    description:
      "Triển khai giải pháp chuyển đổi số, nền tảng số hoá doanh nghiệp và dịch vụ bảo mật, an ninh mạng đảm bảo vận hành an toàn cho hệ thống thông tin.",
    services: [
      "Tư vấn chuyển đổi số",
      "Phát triển nền tảng số",
      "Giải pháp an ninh mạng",
      "Đào tạo & hỗ trợ vận hành",
    ],
    image: "/images/cds-anm.jpeg",
  },
  {
    icon: BrickWall,
    title: "Vật liệu xây dựng",
    slug: "vat-lieu-xay-dung",
    description: "Sản xuất và kinh doanh các loại vật liệu xây dựng chất lượng cao đáp ứng tiêu chuẩn quốc tế.",
    services: ["Sản xuất VLXD", "Phân phối vật liệu", "Cung cấp bê tông", "Vật liệu hoàn thiện"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: Droplets,
    title: "Hóa chất & Sơn",
    slug: "hoa-chat-son",
    description: "Cung cấp các loại hóa chất công nghiệp và sơn chất lượng cao cho ngành xây dựng và sản xuất.",
    services: ["Hóa chất công nghiệp", "Sơn xây dựng", "Chất phụ gia", "Hóa chất bảo vệ"],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: ShoppingBag,
    title: "Đại lý mua bán ký gửi",
    slug: "dai-ly-mua-ban",
    description: "Dịch vụ đại lý mua bán và ký gửi các loại hàng hóa, vật tư phục vụ nhu cầu đa dạng của khách hàng.",
    services: ["Mua bán ký gửi", "Đại lý phân phối", "Môi giới thương mại", "Dịch vụ kho bãi"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: Truck,
    title: "Vận tải - Logistics",
    slug: "van-tai-logistics",
    description:
      "Cung cấp dịch vụ vận tải và logistics chuyên nghiệp, đảm bảo hàng hóa được vận chuyển an toàn, đúng tiến độ.",
    services: ["Vận tải đường bộ", "Dịch vụ logistics", "Vận chuyển container", "Giao hàng nhanh"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: Ship,
    title: "Xuất nhập khẩu",
    slug: "xuat-nhap-khau",
    description:
      "Hoạt động thương mại quốc tế, xuất nhập khẩu các mặt hàng đa dạng phục vụ thị trường trong và ngoài nước.",
    services: ["Xuất khẩu hàng hóa", "Nhập khẩu thiết bị", "Thông quan hải quan", "Tư vấn XNK"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: Warehouse,
    title: "Cho thuê kho bãi - Nhà xưởng",
    slug: "cho-thue-kho-bai",
    description:
      "Hệ thống kho bãi và nhà xưởng hiện đại cho thuê, đáp ứng nhu cầu lưu trữ và sản xuất của doanh nghiệp.",
    services: ["Kho bãi tiêu chuẩn", "Nhà xưởng công nghiệp", "Kho lạnh", "Bãi container"],
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: TreePine,
    title: "Đầu tư khu đô thị - Du lịch - Công nghiệp",
    slug: "dau-tu-bat-dong-san",
    description:
      "Đầu tư phát triển các dự án bất động sản quy mô lớn bao gồm khu đô thị, khu du lịch nghỉ dưỡng và khu công nghiệp.",
    services: ["Khu đô thị mới", "Resort nghỉ dưỡng", "Khu công nghiệp", "Hạ tầng kỹ thuật"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
]

export default function BusinessAreasPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80)`,
            }}
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative h-full flex items-center justify-center text-center">
            <div>
              <p className="text-accent font-medium tracking-widest mb-4">PHUTRACO HOLDING</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">
                Lĩnh vực kinh doanh
              </h1>
            </div>
          </div>
        </section>

        {/* Business Areas */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-widest mb-4">ĐA NGÀNH - CHUYÊN MÔN HÓA</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                Hệ sinh thái kinh doanh toàn diện
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Với chiến lược đa ngành, Phutraco Holding cung cấp giải pháp toàn diện từ xây dựng, vật liệu đến dịch vụ
                logistics và bất động sản
              </p>
            </div>

            <div className="space-y-16">
              {businessAreas.map((area, index) => (
                <div
                  key={area.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img
                        src={area.image || "/placeholder.svg"}
                        alt={area.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                        <area.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{area.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{area.description}</p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {area.services.map((service) => (
                        <div key={service} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          <span className="text-foreground">{service}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/linh-vuc-kinh-doanh/${area.slug}`}
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Xem chi tiết
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
