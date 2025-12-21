"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { MapPin, Calendar, ArrowRight } from "lucide-react"

const getCategories = (language: string) => 
  language === "vi" 
    ? ["Tất cả", "Cầu đường", "Cấp thoát nước", "Khách sạn", "Hạ tầng", "Khu đô thị"]
    : ["All", "Roads & Bridges", "Water Supply & Sewage", "Hotels", "Infrastructure", "Urban Areas"]

const getProjects = (language: string) => [
  {
    title: language === "vi" ? "Cao tốc Sóc Trăng - Cần Thơ" : "Soc Trang - Can Tho Highway",
    slug: "cao-toc-soc-trang-can-tho",
    category: language === "vi" ? "Cầu đường" : "Roads & Bridges",
    location: language === "vi" ? "Sóc Trăng - Cần Thơ" : "Soc Trang - Can Tho",
    year: "2023-2025",
    description:
      language === "vi"
        ? "Dự án cao tốc trọng điểm quốc gia với tổng chiều dài 50km, góp phần kết nối vùng Đồng bằng sông Cửu Long."
        : "A national strategic expressway project with a total length of 50km, contributing to connecting the Mekong Delta region.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
  },
  {
    title: language === "vi" ? "Hệ thống cấp nước sạch Hưng Yên" : "Hung Yen Clean Water System",
    slug: "nuoc-sach-hung-yen",
    category: language === "vi" ? "Cấp thoát nước" : "Water Supply & Sewage",
    location: language === "vi" ? "Hưng Yên" : "Hung Yen",
    year: "2022-2024",
    description:
      language === "vi"
        ? "Dự án cấp nước sạch phục vụ hơn 500.000 dân cư với công suất 100.000 m³/ngày đêm."
        : "A clean water supply project serving more than 500,000 residents with a capacity of 100,000 m³/day.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
  },
  {
    title: language === "vi" ? "Khách sạn Phương Đông" : "Phuong Dong Hotel",
    slug: "khach-san-phuong-dong",
    category: language === "vi" ? "Khách sạn" : "Hotels",
    location: language === "vi" ? "Hải Phòng" : "Hai Phong",
    year: "2021-2023",
    description:
      language === "vi"
        ? "Khách sạn 5 sao với 200 phòng nghỉ cao cấp, trung tâm hội nghị và các tiện ích đẳng cấp quốc tế."
        : "A 5-star hotel with 200 premium rooms, conference center and international-class facilities.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
  },
  {
    title: language === "vi" ? "Khu đô thị Lương Sơn" : "Luong Son Urban Area",
    slug: "khu-do-thi-luong-son",
    category: language === "vi" ? "Khu đô thị" : "Urban Areas",
    location: language === "vi" ? "Hòa Bình" : "Hoa Binh",
    year: "2020-2025",
    description:
      language === "vi"
        ? "Khu đô thị sinh thái 227 ha với đầy đủ tiện ích: biệt thự, sân golf, resort nghỉ dưỡng cao cấp."
        : "Eco-urban area of 227 hectares with complete facilities: villas, golf course, premium resort.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
  },
  {
    title: language === "vi" ? "Cầu vượt nút giao thông Mỹ Đình" : "My Dinh Overpass",
    slug: "cau-vuot-my-dinh",
    category: language === "vi" ? "Cầu đường" : "Roads & Bridges",
    location: language === "vi" ? "Hà Nội" : "Hanoi",
    year: "2022-2023",
    description:
      language === "vi"
        ? "Cầu vượt quy mô lớn giúp giảm ùn tắc giao thông tại nút giao thông quan trọng của thủ đô."
        : "A large-scale overpass that helps reduce traffic congestion at a major intersection in the capital.",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
  },
  {
    title: language === "vi" ? "Nhà máy xử lý nước thải Đà Nẵng" : "Da Nang Wastewater Treatment Plant",
    slug: "nha-may-xu-ly-nuoc-thai",
    category: language === "vi" ? "Cấp thoát nước" : "Water Supply & Sewage",
    location: language === "vi" ? "Đà Nẵng" : "Da Nang",
    year: "2021-2023",
    description:
      language === "vi"
        ? "Nhà máy xử lý nước thải công nghệ châu Âu với công suất xử lý 50.000 m³/ngày đêm."
        : "A wastewater treatment plant with European technology with a processing capacity of 50,000 m³/day.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
  },
  {
    title: language === "vi" ? "Khu công nghiệp Phú Thọ" : "Phu Tho Industrial Zone",
    slug: "khu-cong-nghiep-phu-tho",
    category: language === "vi" ? "Hạ tầng" : "Infrastructure",
    location: language === "vi" ? "Phú Thọ" : "Phu Tho",
    year: "2019-2022",
    description:
      language === "vi"
        ? "Khu công nghiệp sạch với hạ tầng hoàn chỉnh, thu hút nhiều nhà đầu tư trong và ngoài nước."
        : "A clean industrial zone with complete infrastructure, attracting many domestic and foreign investors.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
  },
  {
    title: language === "vi" ? "Đường ven biển Hải Phòng" : "Hai Phong Coastal Road",
    slug: "duong-ven-bien-hai-phong",
    category: language === "vi" ? "Cầu đường" : "Roads & Bridges",
    location: language === "vi" ? "Hải Phòng" : "Hai Phong",
    year: "2020-2022",
    description:
      language === "vi"
        ? "Tuyến đường ven biển dài 15km kết nối các khu du lịch và cảng biển quan trọng."
        : "A 15km coastal road connecting important tourism areas and sea ports.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
  },
]

export default function ProjectsPage() {
  const { language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState(language === "vi" ? "Tất cả" : "All")
  const categories = getCategories(language)
  const projects = getProjects(language)

  const filteredProjects =
    activeCategory === (language === "vi" ? "Tất cả" : "All")
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80)`,
            }}
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative h-full flex items-center justify-center text-center">
            <div>
              <p className="text-accent font-medium tracking-widest mb-4">PHUTRACO HOLDING</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">
                {language === "vi" ? "Dự án tiêu biểu" : "Featured Projects"}
              </h1>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">
                {language === "vi" ? "DANH MỤC DỰ ÁN" : "PROJECT PORTFOLIO"}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                {language === "vi" ? "Những công trình tự hào" : "Flagship Projects"}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === "vi"
                  ? "Mỗi dự án là một minh chứng cho cam kết chất lượng và sự chuyên nghiệp của Phutraco Holding"
                  : "Each project is a testament to Phutraco Holding's commitment to quality and professionalism"}
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <Link
                  key={project.title}
                  href={`/du-an/${project.slug}`}
                  className="group bg-muted rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <button className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors">
                      {language === "vi" ? "Xem chi tiết" : "View Details"}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">
                {language === "vi" ? "THƯ VIỆN HÌNH ẢNH" : "IMAGE GALLERY"}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
                {language === "vi" ? "Hình ảnh thi công" : "Construction Images"}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1590496793929-7651aaf9c6b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
                "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
                "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
              ].map((src, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl overflow-hidden group ${
                    index === 0 || index === 7 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="aspect-video">
                    <img
                      src={src}
                      alt={`Hình ảnh thi công ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium">
                      {language === "vi" ? "Xem ảnh" : "View Image"}
                    </span>
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
