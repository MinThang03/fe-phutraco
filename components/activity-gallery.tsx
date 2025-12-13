"use client"

import { useLanguage } from "@/lib/language-context"

export default function ActivityGallery() {
  const { language } = useLanguage()

  const images = [
    {
      src: "/construction-workers-team-safety-gear.jpg",
      alt: language === "vi" ? "Đội ngũ thi công" : "Construction Team",
    },
    {
      src: "/road-bridge-construction-progress.jpg",
      alt: language === "vi" ? "Thi công cầu đường" : "Road & Bridge Construction",
    },
    {
      src: "/project-meeting-engineers-office.jpg",
      alt: language === "vi" ? "Họp triển khai dự án" : "Project Meeting",
    },
    {
      src: "/xdmcongtrinh.jpg",
      alt: language === "vi" ? "Xây dựng móng công trình" : "Foundation Construction",
    },
    {
      src: "/construction-company-building.jpg",
      alt: language === "vi" ? "Tiến độ thi công" : "Construction Progress",
    },
  ]

  return (
    <section className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-medium tracking-widest mb-4">
            {language === "vi" ? "HÌNH ẢNH HOẠT ĐỘNG" : "ACTIVITY GALLERY"}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
            {language === "vi" ? "Khoảnh khắc thi công" : "Construction Moments"}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden group ${
                index === 0 || index === 5 ? "md:row-span-2" : ""
              }`}
            >
              <div className={`${index === 0 || index === 5 ? "aspect-[3/4]" : "aspect-video"}`}>
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
