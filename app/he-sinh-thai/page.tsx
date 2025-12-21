"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Building2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function EcosystemPage() {
  const { t, language } = useLanguage()

  const subsidiaries = [
    {
      name: "CTCP Đầu tư Thương mại CMC",
      nameEn: "CMC Trade Investment JSC",
      slug: "cmc-corporation",
      field: "Đầu tư & Thương mại",
      fieldEn: "Investment & Trade",
      description: "Chuyên về đầu tư tài chính và thương mại đa ngành, là cánh tay đầu tư chiến lược của Phutraco Holding.",
      descriptionEn: "Specialized in financial investment and multi-sector trade, serving as Phutraco Holding's strategic investment arm.",
      location: "Hưng Yên",
      image: "images/CMC CORPORATION.jpg",
    },
    {
      name: "CTCP Đầu tư Khu du lịch Quốc tế Lương Sơn",
      nameEn: "Luong Son International Resort Investment JSC",
      slug: "luong-son-resort",
      field: "Du lịch nghỉ dưỡng",
      fieldEn: "Resort Tourism",
      description: "Đầu tư và phát triển Khu du lịch nghỉ dưỡng quốc tế Lương Sơn với diện tích 227 ha tại Hòa Bình.",
      descriptionEn: "Investment and development of Luong Son International Resort with 227 hectares in Hoa Binh.",
      location: language === "vi" ? "Hòa Bình" : "Hoa Binh",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
      name: "CTCP Bạch Đằng Land",
      nameEn: "Bach Dang Land JSC",
      slug: "bach-dang-land",
      field: "Bất động sản",
      fieldEn: "Real Estate",
      description: "Chuyên phát triển các dự án bất động sản nhà ở, khu đô thị và bất động sản thương mại.",
      descriptionEn: "Specialized in developing residential, urban area and commercial real estate projects.",
      location: language === "vi" ? "Hải Phòng" : "Hai Phong",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
      name: "CTCP IHU Group",
      nameEn: "IHU Group JSC",
      slug: "ihu-group",
      field: "Đầu tư đa ngành",
      fieldEn: "Multi-sector Investment",
      description: "Tập đoàn đầu tư đa ngành với danh mục đầu tư đa dạng từ hạ tầng đến công nghệ.",
      descriptionEn: "Multi-sector investment group with diverse portfolio from infrastructure to technology.",
      location: language === "vi" ? "Hà Nội" : "Hanoi",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
      name: "CTCP Tập đoàn VAXUCO",
      nameEn: "VAXUCO Group JSC",
      slug: "vaxuco",
      field: "Xây dựng & Thương mại",
      fieldEn: "Construction & Trade",
      description: "Chuyên thi công các công trình xây dựng quy mô lớn và kinh doanh thương mại vật liệu xây dựng.",
      descriptionEn: "Specialized in large-scale construction projects and building materials trade.",
      location: language === "vi" ? "Hà Nội" : "Hanoi",
      image: "images/Vaxuco.jpg",
    },
    {
      name: "CTCP Giải pháp Bền vững Quốc gia",
      nameEn: "National Sustainable Solutions JSC",
      slug: "giai-phap-ben-vung",
      field: "Giải pháp môi trường",
      fieldEn: "Environmental Solutions",
      description: "Cung cấp các giải pháp bền vững về môi trường, năng lượng sạch và phát triển xanh.",
      descriptionEn: "Providing sustainable solutions for environment, clean energy and green development.",
      location: language === "vi" ? "Hà Nội" : "Hanoi",
      image: "gpbv.jpg",
    },
    {
      name: "CTCP An ninh mạng Quốc tế ICS",
      nameEn: "ICS International Cybersecurity JSC",
      slug: "ics",
      field: "An ninh mạng",
      fieldEn: "Cybersecurity",
      description: "Cung cấp giải pháp an ninh mạng, bảo mật thông tin cho doanh nghiệp và tổ chức.",
      descriptionEn: "Providing cybersecurity and information security solutions for enterprises and organizations.",
      location: language === "vi" ? "Hà Nội" : "Hanoi",
      image: "images/ICS logo.png",
    },
    {
      name: "CTCP Công nghệ số 3C",
      nameEn: "3C Digital Technology JSC",
      slug: "3c-technology",
      field: "Công nghệ số",
      fieldEn: "Digital Technology",
      description: "Phát triển và cung cấp các giải pháp công nghệ số, chuyển đổi số cho doanh nghiệp.",
      descriptionEn: "Developing and providing digital technology solutions and digital transformation for enterprises.",
      location: language === "vi" ? "Hà Nội" : "Hanoi",
      image: "tech3c.jpg",
    },
    {
      name: "CTCP Khai thác Khoáng sản Phú Thọ",
      nameEn: "Phu Tho Mining JSC",
      slug: "khai-thac-khoang-san",
      field: "Khai thác khoáng sản",
      fieldEn: "Mining",
      description: "Khai thác và chế biến khoáng sản phục vụ ngành xây dựng và công nghiệp.",
      descriptionEn: "Mining and processing minerals for construction and industrial sectors.",
      location: language === "vi" ? "Phú Thọ" : "Phu Tho",
      image: "kkpt.jpg",
    },
    {
      name: "CTCP Công nghệ Blackhole Game",
      nameEn: "Blackhole Game Technology JSC",
      slug: "blackhole-game",
      field: "Giải trí & Công nghệ",
      fieldEn: "Entertainment & Technology",
      description: "Chuyên phát triển game, ứng dụng giải trí và các giải pháp công nghệ entertainment hiện đại.",
      descriptionEn: "Specialized in developing games, entertainment apps and modern entertainment technology solutions.",
      location: language === "vi" ? "Hà Nội" : "Hanoi",
      image: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
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
              backgroundImage: `url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80)`,
            }}
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative h-full flex items-center justify-center text-center">
            <div>
              <p className="text-accent font-medium tracking-widest mb-4">PHUTRACO HOLDING</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">
                {t("ecosystem.heroTitle")}
              </h1>
            </div>
          </div>
        </section>

        {/* Ecosystem Overview */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-widest mb-4">{t("ecosystem.overviewLabel")}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                {t("ecosystem.overviewTitle")}
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                {t("ecosystem.overviewDesc")}
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
                      <p className="text-white/70 text-sm">{t("ecosystem.parentCompany")}</p>
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
                      <p className="text-xs font-medium text-foreground line-clamp-2">
                        {language === "vi" ? company.name : company.nameEn}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                  {subsidiaries.slice(5, 10).map((company) => (
                    <div
                      key={company.name}
                      className="bg-background p-4 rounded-xl text-center hover:shadow-lg transition-shadow"
                    >
                      <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-xs font-medium text-foreground line-clamp-2">
                        {company.name}
                      </p>
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
                      alt={language === "vi" ? company.name : company.nameEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full mb-3">
                      {language === "vi" ? company.field : company.fieldEn}
                    </span>
                    <h3 className="font-semibold text-lg text-foreground mb-3 group-hover:text-accent transition-colors">
                      {language === "vi" ? company.name : company.nameEn}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {language === "vi" ? company.description : company.descriptionEn}
                    </p>
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
