"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Award, Target, Eye, Heart, Users, MapPin, FileText } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function AboutPage() {
  const { t, language } = useLanguage()

  const timeline = [
    { year: "2005", event: t("timeline.2005") },
    { year: "2008", event: t("timeline.2008") },
    { year: "2012", event: t("timeline.2012") },
    { year: "2015", event: t("timeline.2015") },
    { year: "2018", event: t("timeline.2018") },
    { year: "2020", event: t("timeline.2020") },
    { year: "2023", event: t("timeline.2023") },
  ]

  const values = [
    {
      icon: Heart,
      title: t("about.dedication"),
      description: t("about.dedicationDesc"),
    },
    {
      icon: Award,
      title: t("about.quality"),
      description: t("about.qualityDesc"),
    },
    {
      icon: Users,
      title: t("about.unity"),
      description: t("about.unityDesc"),
    },
    {
      icon: Target,
      title: t("about.innovation"),
      description: t("about.innovationDesc"),
    },
  ]

  const legalInfo = [
    { label: t("about.taxCode"), value: "0900xxxxxx" },
    { label: t("about.issueDate"), value: "01/01/2005" },
    { label: t("about.issuedBy"), value: language === "vi" ? "Sở KH&ĐT Hưng Yên" : "Hung Yen DPI" },
    { label: t("about.charteredCapital"), value: language === "vi" ? "500 tỷ đồng" : "500 billion VND" },
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
              backgroundImage: `url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80)`,
            }}
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative h-full flex items-center justify-center text-center">
            <div>
              <p className="text-accent font-medium tracking-widest mb-4">{t("about.label")}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">
                {t("about.heroTitle")}
              </h1>
            </div>
          </div>
        </section>

        {/* Thư ngỏ */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">{t("about.letterTitle")}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t("about.letterSubtitle")}</h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-6">{t("about.letterP1")}</p>
              <p className="leading-relaxed mb-6">
                {t("about.letterP2")}
              </p>
              <p className="leading-relaxed mb-6">
                {t("about.letterP3")}
              </p>
              <p className="leading-relaxed mb-6">
                {t("about.letterP4")}
              </p>
              <p className="text-right font-semibold text-foreground">
                {t("about.letterSign")}
                <br />
                <span className="text-accent">PHUTRACO HOLDING</span>
              </p>
            </div>
          </div>
        </section>

        {/* Lịch sử */}
        <section className="py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-widest mb-4">{t("about.historyLabel")}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">{t("about.historyTitle")}</h2>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-background p-6 rounded-xl shadow-sm">
                        <p className="text-muted-foreground">{item.event}</p>
                      </div>
                    </div>
                    <div className="relative z-10 w-20 h-20 bg-primary rounded-full flex items-center justify-center shrink-0 shadow-lg">
                      <span className="text-white font-bold">{item.year}</span>
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tầm nhìn & Sứ mệnh */}
        <section className="py-24 bg-primary text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t("about.vision")}</h3>
                <p className="text-white/80 leading-relaxed">
                  {t("about.visionDesc")}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t("about.mission")}</h3>
                <p className="text-white/80 leading-relaxed">
                  {t("about.missionDesc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Giá trị cốt lõi */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-widest mb-4">{t("about.coreValuesLabel")}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t("about.coreValuesTitle")}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="text-center p-8 rounded-2xl border border-border hover:border-accent hover:shadow-lg transition-all group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors">
                    <value.icon className="w-8 h-8 text-primary group-hover:text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Thông tin pháp lý & Chi nhánh */}
        <section className="py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Thông tin pháp lý */}
              <div className="bg-background rounded-2xl p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{t("about.legalInfoTitle")}</h3>
                </div>
                <div className="space-y-4">
                  {legalInfo.map((info) => (
                    <div key={info.label} className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">{info.label}</span>
                      <span className="font-semibold text-foreground">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chi nhánh */}
              <div className="bg-background rounded-2xl p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{language === "vi" ? "Hệ thống chi nhánh" : "Branch Network"}</h3>
                </div>
                <div className="space-y-6">
                  <div className="p-4 bg-muted rounded-xl">
                    <h4 className="font-semibold text-foreground mb-2">{language === "vi" ? "Trụ sở chính" : "Head Office"}</h4>
                    <p className="text-muted-foreground text-sm">
                      378 Nguyễn Thiện Thuật, Phường Mỹ Hào, Tỉnh Hưng Yên
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-xl">
                    <h4 className="font-semibold text-foreground mb-2">{t("footer.haiphong")}</h4>
                    <p className="text-muted-foreground text-sm">{language === "vi" ? "Thành phố Hải Phòng" : "Hai Phong City"}</p>
                  </div>
                  <div className="p-4 bg-muted rounded-xl">
                    <h4 className="font-semibold text-foreground mb-2">{t("footer.danang")}</h4>
                    <p className="text-muted-foreground text-sm">{language === "vi" ? "Thành phố Đà Nẵng" : "Da Nang City"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
