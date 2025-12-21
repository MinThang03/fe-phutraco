"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
// import { Award, FileCheck, Shield, Medal } from "lucide-react"

/* Phần giải thưởng được comment, có thể thêm lại sau khi có giải thưởng
const awards = [
  {
    icon: Medal,
    title: "Top 500 Doanh nghiệp lớn nhất Việt Nam",
    year: "2023",
  },
  {
    icon: Award,
    title: "Thương hiệu Vàng Việt Nam",
    year: "2022",
  },
  {
    icon: Shield,
    title: "Doanh nghiệp tiêu biểu ngành Xây dựng",
    year: "2023",
  },
  {
    icon: FileCheck,
    title: "Chất lượng công trình xuất sắc",
    year: "2022",
  },
]
*/

export default function CertificatesPage() {
  const { t, language } = useLanguage()
  
  const certificates = [
    {
      title: language === "vi" ? "Chứng chỉ năng lực xây dựng Hạng I" : "Class I Construction Capacity Certificate",
      issuer: language === "vi" ? "Bộ Xây dựng" : "Ministry of Construction",
      year: "2023",
      description: language === "vi"
        ? "Chứng chỉ năng lực hoạt động xây dựng cao nhất, cho phép thi công các công trình quy mô lớn trên toàn quốc."
        : "Highest construction capacity certificate, allowing construction of large-scale projects nationwide.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
    },
    {
      title: "ISO 9001:2015",
      issuer: "Bureau Veritas",
      year: "2022",
      description: language === "vi" 
        ? "Chứng nhận hệ thống quản lý chất lượng theo tiêu chuẩn quốc tế ISO 9001:2015." 
        : "Quality management system certification according to ISO 9001:2015 international standard.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
    },
    {
      title: "ISO 14001:2015",
      issuer: "Bureau Veritas",
      year: "2022",
      description: language === "vi"
        ? "Chứng nhận hệ thống quản lý môi trường theo tiêu chuẩn quốc tế ISO 14001:2015."
        : "Environmental management system certification according to ISO 14001:2015 international standard.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
    },
    {
      title: "ISO 45001:2018",
      issuer: "Bureau Veritas",
      year: "2022",
      description: language === "vi"
        ? "Chứng nhận hệ thống quản lý an toàn sức khỏe nghề nghiệp theo tiêu chuẩn ISO 45001:2018."
        : "Occupational health and safety management system certification according to ISO 45001:2018 standard.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
    },
    {
      title: language === "vi" ? "Chứng chỉ hành nghề giám sát" : "Supervision Practice Certificate",
      issuer: language === "vi" ? "Bộ Xây dựng" : "Ministry of Construction",
      year: "2023",
      description: language === "vi"
        ? "Chứng chỉ hành nghề giám sát thi công xây dựng công trình dân dụng và công nghiệp."
        : "Construction supervision practice certificate for civil and industrial projects.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
    },
    {
      title: language === "vi" ? "Giấy chứng nhận đủ điều kiện hoạt động" : "Operation Eligibility Certificate",
      issuer: language === "vi" ? "Sở Xây dựng Hưng Yên" : "Hung Yen Department of Construction",
      year: "2023",
      description: language === "vi"
        ? "Giấy chứng nhận đủ điều kiện hoạt động trong lĩnh vực xây dựng và tư vấn."
        : "Certificate of eligibility to operate in construction and consulting fields.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80)`,
            }}
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative h-full flex items-center justify-center text-center">
            <div>
              <p className="text-accent font-medium tracking-widest mb-4">PHUTRACO HOLDING</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">
                {t("cert.heroTitle")}
              </h1>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        {/* 
        <section className="py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-widest mb-4">THÀNH TỰU</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                Giải thưởng & Danh hiệu
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {awards.map((award) => (
                <div
                  key={award.title}
                  className="bg-background rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <award.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{award.title}</h3>
                  <span className="text-accent font-medium">{award.year}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* Certificates Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-widest mb-4">{t("cert.certificatesLabel")}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">{t("cert.certificatesTitle")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("cert.certificatesDesc")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert) => (
                <div
                  key={cert.title}
                  className="bg-muted rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-white p-8 flex items-center justify-center">
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-accent font-medium">{cert.issuer}</span>
                      <span className="text-sm text-muted-foreground">{cert.year}</span>
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{cert.description}</p>
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
