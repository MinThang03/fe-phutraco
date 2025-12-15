import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Building2, ArrowRight } from "lucide-react"
import Link from "next/link"

const subsidiaries = [
  {
    name: "CTCP Đầu tư Thương mại CMC",
    slug: "cmc-corporation",
    field: "Đầu tư & Thương mại",
    description:
      "Chuyên về đầu tư tài chính và thương mại đa ngành, là cánh tay đầu tư chiến lược của Phutraco Holding.",
    location: "Hưng Yên",
    image: "images/CMC CORPORATION.jpg",
  },
  {
    name: "CTCP Đầu tư Khu du lịch Quốc tế Lương Sơn",
    slug: "luong-son-resort",
    field: "Du lịch nghỉ dưỡng",
    description: "Đầu tư và phát triển Khu du lịch nghỉ dưỡng quốc tế Lương Sơn với diện tích 227 ha tại Hòa Bình.",
    location: "Hòa Bình",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    name: "CTCP Bạch Đằng Land",
    slug: "bach-dang-land",
    field: "Bất động sản",
    description: "Chuyên phát triển các dự án bất động sản nhà ở, khu đô thị và bất động sản thương mại.",
    location: "Hải Phòng",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    name: "CTCP IHU Group",
    slug: "ihu-group",
    field: "Đầu tư đa ngành",
    description: "Tập đoàn đầu tư đa ngành với danh mục đầu tư đa dạng từ hạ tầng đến công nghệ.",
    location: "Hà Nội",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    name: "CTCP Tập đoàn VAXUCO",
    slug: "vaxuco",
    field: "Xây dựng & Thương mại",
    description: "Chuyên thi công các công trình xây dựng quy mô lớn và kinh doanh thương mại vật liệu xây dựng.",
    location: "Hà Nội",
    image: "images/Vaxuco.jpg",
  },
  {
    name: "CTCP Giải pháp Bền vững Quốc gia",
    slug: "giai-phap-ben-vung",
    field: "Giải pháp môi trường",
    description: "Cung cấp các giải pháp bền vững về môi trường, năng lượng sạch và phát triển xanh.",
    location: "Hà Nội",
    image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    name: "CTCP An ninh mạng Quốc tế ICS",
    slug: "ics",
    field: "An ninh mạng",
    description: "Cung cấp giải pháp an ninh mạng, bảo mật thông tin cho doanh nghiệp và tổ chức.",
    location: "Hà Nội",
    image: "images/ICS logo.png",
  },
  {
    name: "CTCP Công nghệ số 3C",
    slug: "3c-technology",
    field: "Công nghệ số",
    description: "Phát triển và cung cấp các giải pháp công nghệ số, chuyển đổi số cho doanh nghiệp.",
    location: "Hà Nội",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    name: "CTCP Khai thác Khoáng sản Phú Thọ",
    slug: "khai-thac-khoang-san",
    field: "Khai thác khoáng sản",
    description: "Khai thác và chế biến khoáng sản phục vụ ngành xây dựng và công nghiệp.",
    location: "Phú Thọ",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
  },
]

export default function EcosystemPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80)`,
            }}
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative h-full flex items-center justify-center text-center">
            <div>
              <p className="text-accent font-medium tracking-widest mb-4">PHUTRACO HOLDING</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">
                Hệ sinh thái công ty thành viên
              </h1>
            </div>
          </div>
        </section>

        {/* Ecosystem Overview */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-widest mb-4">ĐA NGÀNH - CHUYÊN MÔN HÓA</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                Mạng lưới công ty thành viên
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Hệ sinh thái Phutraco Holding bao gồm các công ty thành viên hoạt động trong nhiều lĩnh vực khác nhau,
                tạo nên sức mạnh tổng hợp và khả năng cung cấp giải pháp toàn diện cho khách hàng.
              </p>
            </div>

            {/* Ecosystem Diagram */}
            <div className="mb-20">
              <div className="relative bg-muted rounded-3xl p-12">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-4 bg-primary text-white px-8 py-4 rounded-2xl">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">P</span>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-lg">PHUTRACO HOLDING</p>
                      <p className="text-white/70 text-sm">Công ty mẹ</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {subsidiaries.slice(0, 5).map((company) => (
                    <div
                      key={company.name}
                      className="bg-background p-4 rounded-xl text-center hover:shadow-lg transition-shadow"
                    >
                      <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-xs font-medium text-foreground line-clamp-2">{company.name}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 lg:px-20">
                  {subsidiaries.slice(5).map((company) => (
                    <div
                      key={company.name}
                      className="bg-background p-4 rounded-xl text-center hover:shadow-lg transition-shadow"
                    >
                      <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-xs font-medium text-foreground line-clamp-2">{company.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Subsidiaries Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subsidiaries.map((company) => (
                <Link
                  key={company.name}
                  href={`/he-sinh-thai/${company.slug}`}
                  className="bg-muted rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={company.image || "/placeholder.svg"}
                      alt={company.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full mb-3">
                      {company.field}
                    </span>
                    <h3 className="font-semibold text-lg text-foreground mb-3 group-hover:text-accent transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{company.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {company.location}
                      </div>
                      <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
