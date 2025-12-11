"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export default function EcosystemPreview() {
  const { language } = useLanguage()

  const subsidiaries = [
    {
      name: "CTCP Đầu tư Thương mại CMC",
      nameEn: "CMC Trade Investment JSC",
      field: "Đầu tư & Thương mại",
      fieldEn: "Investment & Trade",
      image: "/modern-corporate-office-building-vietnam.jpg",
    },
    {
      name: "CTCP Đầu tư Khu du lịch Quốc tế Lương Sơn",
      nameEn: "Luong Son International Resort Investment JSC",
      field: "Du lịch nghỉ dưỡng (227 ha - Hòa Bình)",
      fieldEn: "Resort Tourism (227 ha - Hoa Binh)",
      image: "/luxury-mountain-resort-vietnam.jpg",
    },
    {
      name: "CTCP Bạch Đằng Land",
      nameEn: "Bach Dang Land JSC",
      field: "Bất động sản",
      fieldEn: "Real Estate",
      image: "/real-estate-development-project-vietnam.jpg",
    },
    {
      name: "CTCP IHU Group",
      nameEn: "IHU Group JSC",
      field: "Đầu tư đa ngành",
      fieldEn: "Multi-sector Investment",
      image: "/investment-group-headquarters-building.jpg",
    },
    {
      name: "CTCP Tập đoàn VAXUCO",
      nameEn: "VAXUCO Group JSC",
      field: "Xây dựng & Thương mại",
      fieldEn: "Construction & Trade",
      image: "/construction-company-office-building.jpg",
    },
    {
      name: "CTCP Giải pháp Bền vững Quốc gia",
      nameEn: "National Sustainable Solutions JSC",
      field: "Giải pháp môi trường",
      fieldEn: "Environmental Solutions",
      image: "/sustainable-green-building-vietnam.jpg",
    },
  ]

  return (
    <section className="py-24 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <p className="text-accent font-medium tracking-widest mb-4">
              {language === "vi" ? "HỆ SINH THÁI" : "ECOSYSTEM"}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
              {language === "vi" ? "Các công ty thành viên" : "Subsidiary Companies"}
            </h2>
            <p className="text-white/70 max-w-2xl">
              {language === "vi"
                ? "Hệ sinh thái Phutraco Holding bao gồm nhiều công ty thành viên hoạt động trong các lĩnh vực khác nhau"
                : "Phutraco Holding ecosystem includes multiple subsidiaries operating in various sectors"}
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-6 lg:mt-0 border-white text-white hover:bg-white hover:text-primary bg-transparent"
          >
            <Link href="/he-sinh-thai">
              {language === "vi" ? "Xem tất cả" : "View All"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subsidiaries.map((company) => (
            <div
              key={company.name}
              className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={company.image || "/placeholder.svg"}
                  alt={language === "vi" ? company.name : company.nameEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                  {language === "vi" ? company.name : company.nameEn}
                </h3>
                <p className="text-white/70 text-sm">{language === "vi" ? company.field : company.fieldEn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
