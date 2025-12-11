"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export default function FeaturedProjects() {
  const { language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState(language === "vi" ? "Tất cả" : "All")

  const categories =
    language === "vi"
      ? ["Tất cả", "Cầu đường", "Cấp thoát nước", "Khách sạn", "Hạ tầng"]
      : ["All", "Roads & Bridges", "Water Systems", "Hotels", "Infrastructure"]

  const projects = [
    {
      title: "Cao tốc Sóc Trăng - Cần Thơ",
      titleEn: "Soc Trang - Can Tho Highway",
      category: "Cầu đường",
      categoryEn: "Roads & Bridges",
      location: "Sóc Trăng - Cần Thơ",
      image: "/highway-expressway-construction-vietnam-aerial.jpg",
    },
    {
      title: "Hệ thống cấp nước sạch Hưng Yên",
      titleEn: "Hung Yen Clean Water System",
      category: "Cấp thoát nước",
      categoryEn: "Water Systems",
      location: "Hưng Yên",
      image: "/water-treatment-plant-facility.jpg",
    },
    {
      title: "Khách sạn Phương Đông",
      titleEn: "Phuong Dong Hotel",
      category: "Khách sạn",
      categoryEn: "Hotels",
      location: "Hải Phòng",
      image: "/luxury-hotel-exterior-vietnam.jpg",
    },
    {
      title: "Khu đô thị Lương Sơn",
      titleEn: "Luong Son Urban Area",
      category: "Hạ tầng",
      categoryEn: "Infrastructure",
      location: "Hòa Bình",
      image: "/urban-development-master-plan-vietnam.jpg",
    },
    {
      title: "Cầu vượt nút giao thông",
      titleEn: "Traffic Interchange Overpass",
      category: "Cầu đường",
      categoryEn: "Roads & Bridges",
      location: "Hà Nội",
      image: "/overpass-bridge-interchange-construction.jpg",
    },
    {
      title: "Nhà máy xử lý nước thải",
      titleEn: "Wastewater Treatment Plant",
      category: "Cấp thoát nước",
      categoryEn: "Water Systems",
      location: "Đà Nẵng",
      image: "/wastewater-treatment-plant-vietnam.jpg",
    },
  ]

  const categoryKey = language === "vi" ? "category" : "categoryEn"
  const allLabel = language === "vi" ? "Tất cả" : "All"

  const filteredProjects =
    activeCategory === allLabel ? projects : projects.filter((p) => p[categoryKey] === activeCategory)

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-medium tracking-widest mb-4">
            {language === "vi" ? "DỰ ÁN TIÊU BIỂU" : "FEATURED PROJECTS"}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            {language === "vi" ? "Những công trình tự hào" : "Projects We're Proud Of"}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link key={project.title} href="/du-an" className="group block">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={language === "vi" ? project.title : project.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-1 text-white text-sm">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </span>
                </div>
              </div>
              <span className="text-sm text-accent font-medium">
                {language === "vi" ? project.category : project.categoryEn}
              </span>
              <h3 className="text-lg font-semibold text-foreground mt-1 group-hover:text-accent transition-colors">
                {language === "vi" ? project.title : project.titleEn}
              </h3>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/du-an">
              {language === "vi" ? "Xem tất cả dự án" : "View All Projects"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
