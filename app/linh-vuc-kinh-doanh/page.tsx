"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
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

const getBusinessAreas = (language: string) => [
  {
    icon: Building,
    title: language === "vi" ? "Xây dựng công trình" : "Construction",
    slug: "xay-dung-cong-trinh",
    description:
      language === "vi"
        ? "Thi công xây dựng các công trình dân dụng, công nghiệp, giao thông, thủy lợi và hạ tầng kỹ thuật với quy mô lớn, chất lượng cao."
        : "Implementing construction projects including civil, industrial, transportation, irrigation and technical infrastructure of large scale and high quality.",
    services:
      language === "vi"
        ? [
            "Xây dựng dân dụng",
            "Xây dựng công nghiệp",
            "Công trình giao thông",
            "Công trình thủy lợi",
            "Hạ tầng kỹ thuật",
          ]
        : ["Civil Construction", "Industrial Construction", "Transportation Projects", "Irrigation Projects", "Technical Infrastructure"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: Factory,
    title: language === "vi" ? "Máy móc thiết bị" : "Machinery & Equipment",
    slug: "may-moc-thiet-bi",
    description:
      language === "vi"
        ? "Cung cấp, mua bán và cho thuê các loại máy móc, thiết bị xây dựng hiện đại phục vụ thi công công trình."
        : "Supply, sale and rental of modern machinery and construction equipment for project implementation.",
    services:
      language === "vi"
        ? ["Mua bán máy móc xây dựng", "Cho thuê thiết bị thi công", "Bảo trì, sửa chữa", "Nhập khẩu thiết bị"]
        : ["Buy & Sell Construction Machinery", "Equipment Rental", "Maintenance & Repair", "Equipment Import"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: Hotel,
    title: language === "vi" ? "Khách sạn - Nhà hàng - Giải trí" : "Hotel - Restaurant - Entertainment",
    slug: "khach-san-nha-hang",
    description:
      language === "vi"
        ? "Đầu tư và vận hành các dự án khách sạn, nhà hàng và khu giải trí cao cấp, mang đến trải nghiệm đẳng cấp cho khách hàng."
        : "Investment and operation of premium hotel, restaurant and entertainment projects offering premium experience to customers.",
    services:
      language === "vi"
        ? ["Khách sạn cao cấp", "Nhà hàng ẩm thực", "Khu vui chơi giải trí", "Dịch vụ sự kiện"]
        : ["Premium Hotels", "Culinary Restaurants", "Entertainment Centers", "Event Services"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: Factory,
    title: language === "vi" ? "Chuyển đổi số - An ninh mạng" : "Digital Transformation & Cybersecurity",
    slug: "chuyen-doi-so",
    description:
      language === "vi"
        ? "Triển khai giải pháp chuyển đổi số, nền tảng số hoá doanh nghiệp và dịch vụ bảo mật, an ninh mạng đảm bảo vận hành an toàn cho hệ thống thông tin."
        : "Implementation of digital transformation solutions, enterprise digitization platforms and security services ensuring safe operation of information systems.",
    services:
      language === "vi"
        ? [
            "Tư vấn chuyển đổi số",
            "Phát triển nền tảng số",
            "Giải pháp an ninh mạng",
            "Đào tạo & hỗ trợ vận hành",
          ]
        : ["Digital Transformation Consulting", "Digital Platform Development", "Cybersecurity Solutions", "Training & Operational Support"],
    image: "/images/cds-anm.jpeg",
  },
  {
    icon: BrickWall,
    title: language === "vi" ? "Vật liệu xây dựng" : "Building Materials",
    slug: "vat-lieu-xay-dung",
    description:
      language === "vi"
        ? "Sản xuất và kinh doanh các loại vật liệu xây dựng chất lượng cao đáp ứng tiêu chuẩn quốc tế."
        : "Manufacturing and trading high-quality building materials meeting international standards.",
    services:
      language === "vi"
        ? ["Sản xuất VLXD", "Phân phối vật liệu", "Cung cấp bê tông", "Vật liệu hoàn thiện"]
        : ["Building Materials Manufacturing", "Material Distribution", "Concrete Supply", "Finishing Materials"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: Droplets,
    title: language === "vi" ? "Hóa chất & Sơn" : "Chemicals & Paint",
    slug: "hoa-chat-son",
    description:
      language === "vi"
        ? "Cung cấp các loại hóa chất công nghiệp và sơn chất lượng cao cho ngành xây dựng và sản xuất."
        : "Supply of high-quality industrial chemicals and paint for construction and manufacturing sectors.",
    services:
      language === "vi"
        ? ["Hóa chất công nghiệp", "Sơn xây dựng", "Chất phụ gia", "Hóa chất bảo vệ"]
        : ["Industrial Chemicals", "Construction Paint", "Additives", "Protective Chemicals"],
    image: "hcvs2.jpg",
  },
  {
    icon: ShoppingBag,
    title: language === "vi" ? "Đại lý mua bán ký gửi" : "Agency & Consignment",
    slug: "dai-ly-mua-ban",
    description:
      language === "vi"
        ? "Dịch vụ đại lý mua bán và ký gửi các loại hàng hóa, vật tư phục vụ nhu cầu đa dạng của khách hàng."
        : "Agency and consignment services for various goods and materials serving diverse customer needs.",
    services:
      language === "vi"
        ? ["Mua bán ký gửi", "Đại lý phân phối", "Môi giới thương mại", "Dịch vụ kho bãi"]
        : ["Consignment Trading", "Distribution Agency", "Commercial Brokerage", "Warehouse Services"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: Truck,
    title: language === "vi" ? "Vận tải - Logistics" : "Transport & Logistics",
    slug: "van-tai-logistics",
    description:
      language === "vi"
        ? "Cung cấp dịch vụ vận tải và logistics chuyên nghiệp, đảm bảo hàng hóa được vận chuyển an toàn, đúng tiến độ."
        : "Professional transportation and logistics services ensuring goods are transported safely and on schedule.",
    services:
      language === "vi"
        ? ["Vận tải đường bộ", "Dịch vụ logistics", "Vận chuyển container", "Giao hàng nhanh"]
        : ["Road Transportation", "Logistics Services", "Container Shipping", "Express Delivery"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: Ship,
    title: language === "vi" ? "Xuất nhập khẩu" : "Import & Export",
    slug: "xuat-nhap-khau",
    description:
      language === "vi"
        ? "Hoạt động thương mại quốc tế, xuất nhập khẩu các mặt hàng đa dạng phục vụ thị trường trong và ngoài nước."
        : "International trade activities, import and export of diverse goods serving domestic and foreign markets.",
    services:
      language === "vi"
        ? ["Xuất khẩu hàng hóa", "Nhập khẩu thiết bị", "Thông quan hải quan", "Tư vấn XNK"]
        : ["Export Goods", "Equipment Import", "Customs Clearance", "Trade Consulting"],
    image: "xnk.jpg",
  },
  {
    icon: Warehouse,
    title: language === "vi" ? "Cho thuê kho bãi - Nhà xưởng" : "Warehouse & Factory Rental",
    slug: "cho-thue-kho-bai",
    description:
      language === "vi"
        ? "Hệ thống kho bãi và nhà xưởng hiện đại cho thuê, đáp ứng nhu cầu lưu trữ và sản xuất của doanh nghiệp."
        : "Modern warehouse and factory systems for rent, meeting storage and production needs of enterprises.",
    services:
      language === "vi"
        ? ["Kho bãi tiêu chuẩn", "Nhà xưởng công nghiệp", "Kho lạnh", "Bãi container"]
        : ["Standard Warehouses", "Industrial Factories", "Cold Storage", "Container Yards"],
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: TreePine,
    title: language === "vi" ? "Đầu tư khu đô thị - Du lịch - Công nghiệp" : "Urban - Tourism - Industrial Investment",
    slug: "dau-tu-bat-dong-san",
    description:
      language === "vi"
        ? "Đầu tư phát triển các dự án bất động sản quy mô lớn bao gồm khu đô thị, khu du lịch nghỉ dưỡng và khu công nghiệp."
        : "Investment and development of large-scale real estate projects including urban areas, tourism resorts and industrial zones.",
    services:
      language === "vi"
        ? ["Khu đô thị mới", "Resort nghỉ dưỡng", "Khu công nghiệp", "Hạ tầng kỹ thuật"]
        : ["New Urban Areas", "Resort Development", "Industrial Zones", "Technical Infrastructure"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
]

export default function BusinessAreasPage() {
  const { language } = useLanguage()
  const businessAreas = getBusinessAreas(language)

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
                {language === "vi" ? "Lĩnh vực kinh doanh" : "Business Areas"}
              </h1>
            </div>
          </div>
        </section>

        {/* Business Areas */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-widest mb-4">
                {language === "vi" ? "ĐA NGÀNH - CHUYÊN MÔN HÓA" : "MULTI-SECTOR - SPECIALIZATION"}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                {language === "vi" ? "Hệ sinh thái kinh doanh toàn diện" : "Comprehensive Business Ecosystem"}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === "vi"
                  ? "Với chiến lược đa ngành, Phutraco Holding cung cấp giải pháp toàn diện từ xây dựng, vật liệu đến dịch vụ logistics và bất động sản"
                  : "With a multi-sector strategy, Phutraco Holding provides comprehensive solutions from construction, materials to logistics and real estate services"}
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
                      {language === "vi" ? "Xem chi tiết" : "View Details"}
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
