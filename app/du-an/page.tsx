"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { MapPin, Calendar, ArrowRight } from "lucide-react"

const categories = ["Tất cả", "Cầu đường", "Cấp thoát nước", "Khách sạn", "Hạ tầng", "Khu đô thị"]

const projects = [
  {
    title: "Cao tốc Sóc Trăng - Cần Thơ",
    slug: "cao-toc-soc-trang-can-tho",
    category: "Cầu đường",
    location: "Sóc Trăng - Cần Thơ",
    year: "2023-2025",
    description:
      "Dự án cao tốc trọng điểm quốc gia với tổng chiều dài 50km, góp phần kết nối vùng Đồng bằng sông Cửu Long.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
  },
  {
    title: "Hệ thống cấp nước sạch Hưng Yên",
    slug: "nuoc-sach-hung-yen",
    category: "Cấp thoát nước",
    location: "Hưng Yên",
    year: "2022-2024",
    description: "Dự án cấp nước sạch phục vụ hơn 500.000 dân cư với công suất 100.000 m³/ngày đêm.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
  },
  {
    title: "Khách sạn Phương Đông",
    slug: "khach-san-phuong-dong",
    category: "Khách sạn",
    location: "Hải Phòng",
    year: "2021-2023",
    description: "Khách sạn 5 sao với 200 phòng nghỉ cao cấp, trung tâm hội nghị và các tiện ích đẳng cấp quốc tế.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
  },
  {
    title: "Khu đô thị Lương Sơn",
    slug: "khu-do-thi-luong-son",
    category: "Khu đô thị",
    location: "Hòa Bình",
    year: "2020-2025",
    description: "Khu đô thị sinh thái 227 ha với đầy đủ tiện ích: biệt thự, sân golf, resort nghỉ dưỡng cao cấp.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
  },
  {
    title: "Cầu vượt nút giao thông Mỹ Đình",
    slug: "cau-vuot-my-dinh",
    category: "Cầu đường",
    location: "Hà Nội",
    year: "2022-2023",
    description: "Cầu vượt quy mô lớn giúp giảm ùn tắc giao thông tại nút giao thông quan trọng của thủ đô.",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
  },
  {
    title: "Nhà máy xử lý nước thải Đà Nẵng",
    slug: "nha-may-xu-ly-nuoc-thai",
    category: "Cấp thoát nước",
    location: "Đà Nẵng",
    year: "2021-2023",
    description: "Nhà máy xử lý nước thải công nghệ châu Âu với công suất xử lý 50.000 m³/ngày đêm.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
  },
  {
    title: "Khu công nghiệp Phú Thọ",
    slug: "khu-cong-nghiep-phu-tho",
    category: "Hạ tầng",
    location: "Phú Thọ",
    year: "2019-2022",
    description: "Khu công nghiệp sạch với hạ tầng hoàn chỉnh, thu hút nhiều nhà đầu tư trong và ngoài nước.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
  },
  {
    title: "Đường ven biển Hải Phòng",
    slug: "duong-ven-bien-hai-phong",
    category: "Cầu đường",
    location: "Hải Phòng",
    year: "2020-2022",
    description: "Tuyến đường ven biển dài 15km kết nối các khu du lịch và cảng biển quan trọng.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("Tất cả")

  const filteredProjects =
    activeCategory === "Tất cả" ? projects : projects.filter((p) => p.category === activeCategory)

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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">Dự án tiêu biểu</h1>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">DANH MỤC DỰ ÁN</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                Những công trình tự hào
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Mỗi dự án là một minh chứng cho cam kết chất lượng và sự chuyên nghiệp của Phutraco Holding
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
                      Xem chi tiết
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
              <p className="text-accent font-medium tracking-widest mb-4">THƯ VIỆN HÌNH ẢNH</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">Hình ảnh thi công</h2>
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
                    <span className="text-white font-medium">Xem ảnh</span>
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
