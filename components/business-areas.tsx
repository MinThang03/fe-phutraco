"use client"

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
} from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function BusinessAreas() {
  const { language, t } = useLanguage()

  const areas = [
    {
      icon: Building,
      title: language === "vi" ? "Xây dựng công trình" : "Construction",
      description:
        language === "vi"
          ? "Dân dụng, công nghiệp, giao thông, thủy lợi, hạ tầng"
          : "Civil, industrial, transport, irrigation, infrastructure",
      image: "/construction-site-building-crane-workers.jpg",
    },
    {
      icon: Factory,
      title: language === "vi" ? "Máy móc thiết bị" : "Machinery Equipment",
      description:
        language === "vi" ? "Mua bán, cho thuê máy móc thiết bị xây dựng" : "Buy, sell, rent construction machinery",
      image: "/heavy-construction-equipment-excavator-bulldozer.jpg",
    },
    {
      icon: Hotel,
      title: language === "vi" ? "Khách sạn - Nhà hàng" : "Hotel - Restaurant",
      description:
        language === "vi"
          ? "Dịch vụ lưu trú, ẩm thực và giải trí cao cấp"
          : "Premium accommodation, cuisine and entertainment",
      image: "/luxury-hotel-lobby-interior-vietnam.jpg",
    },
    {
      icon: PaintBucket,
      title: language === "vi" ? "Trang trí nội thất" : "Interior Design",
      description:
        language === "vi" ? "Thiết kế và thi công nội ngoại thất" : "Interior and exterior design and construction",
      image: "/trangtrinoithat.jpg",
    },
    {
      icon: BrickWall,
      title: language === "vi" ? "Vật liệu xây dựng" : "Building Materials",
      description: language === "vi" ? "Sản xuất và kinh doanh VLXD" : "Manufacturing and trading building materials",
      image: "/vlxd.jpg",
    },
    {
      icon: Droplets,
      title: language === "vi" ? "Hóa chất & Sơn" : "Chemicals & Paint",
      description: language === "vi" ? "Cung cấp hóa chất và sơn công nghiệp" : "Industrial chemicals and paint supply",
      image: "/hcvs.jpg",
    },
    {
      icon: Truck,
      title: language === "vi" ? "Vận tải Logistics" : "Transport Logistics",
      description:
        language === "vi"
          ? "Dịch vụ vận chuyển và logistics trọn gói"
          : "Complete transportation and logistics services",
      image: "/vtlg.jpg",
    },
    {
      icon: Ship,
      title: language === "vi" ? "Xuất nhập khẩu" : "Import Export",
      description: language === "vi" ? "Thương mại quốc tế đa ngành" : "Multi-sector international trade",
      image: "/xnk.jpg",
    },
    {
      icon: Warehouse,
      title: language === "vi" ? "Cho thuê kho bãi" : "Warehouse Rental",
      description: language === "vi" ? "Hệ thống kho bãi, nhà xưởng hiện đại" : "Modern warehouse and factory system",
      image: "/ctkb.jpg",
    },
    {
      icon: TreePine,
      title: language === "vi" ? "Đầu tư BĐS" : "Real Estate Investment",
      description:
        language === "vi" ? "Khu đô thị, du lịch, khu công nghiệp" : "Urban areas, tourism, industrial zones",
      image: "/bds.jpg",
    },
  ]

  return (
    <section className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-widest mb-4">{t("business.label")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">{t("business.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("business.desc")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {areas.map((area) => (
            <Link
              key={area.title}
              href="/linh-vuc-kinh-doanh"
              className="group bg-background rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={area.image || "/placeholder.svg"}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-accent group-hover:text-primary transition-colors">
                  <area.icon className="w-5 h-5 text-primary group-hover:text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm group-hover:text-accent transition-colors">
                  {area.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{area.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
