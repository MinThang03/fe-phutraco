"use client"

import { useLanguage } from "@/lib/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { TreePine, CheckCircle, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function DauTuBatDongSanPage() {
  const { language } = useLanguage()
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <TreePine className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">{language === "vi" ? "LĨNH VỰC KINH DOANH" : "BUSINESS AREAS"}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {language === "vi" ? "Đầu tư khu đô thị - Du lịch - Công nghiệp" : "Urban Development - Tourism - Industrial Investment"}
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  {language === "vi" ? "Đầu tư phát triển các dự án bất động sán quy mô lớn, tạo nên giá trị bền vững" : "Invest in large-scale real estate projects creating sustainable value"}
                </p>
                <Link href="/lien-he" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors">
                  {language === "vi" ? "Liên hệ tư vấn" : "Contact Consultation"}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <p className="text-accent font-medium tracking-widest mb-4">{language === "vi" ? "GIỚI THIỆU" : "INTRODUCTION"}</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{language === "vi" ? "Kiến tạo không gian sống và làm việc" : "Creating Living and Working Spaces"}</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {language === "vi" ? "Phutraco Holding là nhà đầu tư bất động sán uy tín với danh mục dự án đa dạng từ khu đô thị, khu du lịch nghỉ dưỡng đến khu công nghiệp. Chúng tôi cam kết tạo nên những không gian sống và làm việc hiện đại, bền vững." : "Phutraco Holding is a trusted real estate investor with diverse projects from urban development, resort zones to industrial zones. We commit to creating modern and sustainable living and working spaces."}
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">20+</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Dự án" : "Projects"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Ha đất phát triển" : "Hectares Developed"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Khách hàng" : "Customers"}</div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" alt="Bất động sản" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">{language === "vi" ? "DỰ ÁN" : "PROJECTS"}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{language === "vi" ? "Danh mục dự án đầu tư" : "Investment Projects Portfolio"}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: language === "vi" ? "Khu đô thị mới" : "New Urban Development",
                  desc: language === "vi" ? "Phát triển khu đô thị hiện đại với đầy đủ tiện ích: trường học, bệnh viện, công viên" : "Develop modern urban areas with full amenities: schools, hospitals, parks",
                  img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: language === "vi" ? ["Quy hoạch bài bản", "Hạ tầng hoàn chỉnh", "Không gian xanh", "Tiện ích đầy đủ"] : ["Planned Zoning", "Complete Infrastructure", "Green Space", "Full Amenities"],
                },
                {
                  title: language === "vi" ? "Resort nghỉ dưỡng" : "Resort Development",
                  desc: language === "vi" ? "Đầu tư khu nghỉ dưỡng cao cấp, kết hợp du lịch sinh thái và giải trí" : "Invest in premium resort areas combining eco-tourism and entertainment",
                  img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: language === "vi" ? ["Biệt thự nghỉ dưỡng", "Sân golf", "Spa & wellness", "Nhà hàng cao cấp"] : ["Resort Villas", "Golf Course", "Spa & Wellness", "Premium Restaurants"],
                },
                {
                  title: language === "vi" ? "Khu công nghiệp" : "Industrial Zone",
                  desc: language === "vi" ? "Phát triển khu công nghiệp sinh thái, thu hút đầu tư sản xuất công nghiệp" : "Develop eco-industrial zones attracting manufacturing investments",
                  img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: language === "vi" ? ["Hạ tầng KCN chuẩn", "Xử lý môi trường", "Điện nước ổn định", "Vị trí thuận lợi"] : ["Standard IZ Infrastructure", "Environmental Treatment", "Stable Power & Water", "Convenient Location"],
                },
                {
                  title: language === "vi" ? "Hạ tầng kỹ thuật" : "Technical Infrastructure",
                  desc: language === "vi" ? "Đầu tư xây dựng hạ tầng: đường xá, cấp thoát nước, điện, viễn thông" : "Build infrastructure: roads, water supply, electricity, telecommunications",
                  img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: language === "vi" ? ["Đường giao thông", "Cấp thoát nước", "Điện & viễn thông", "Chiếu sáng"] : ["Roads", "Water Supply & Drainage", "Power & Telecommunications", "Lighting"],
                },
                {
                  title: language === "vi" ? "Khu thương mại" : "Commercial Zone",
                  desc: language === "vi" ? "Phát triển trung tâm thương mại, văn phòng cho thuê đạt chuẩn quốc tế" : "Develop shopping centers and office rentals meeting international standards",
                  img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: language === "vi" ? ["TTTM hiện đại", "Văn phòng hạng A", "Bãi đỗ xe rộng", "Tiện ích cao cấp"] : ["Modern Shopping Mall", "Grade A Offices", "Wide Parking", "Premium Amenities"],
                },
                {
                  title: language === "vi" ? "Bất động sản nghỉ dưỡng" : "Resort Real Estate",
                  desc: language === "vi" ? "Đầu tư biệt thự biển, căn hộ nghỉ dưỡng tại các vùng du lịch" : "Invest in beachfront villas and resort apartments in tourist areas",
                  img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: language === "vi" ? ["Biệt thự biển", "Condotel", "Sinh lời cao", "Quản lý chuyên nghiệp"] : ["Beachfront Villas", "Condotel", "High Returns", "Professional Management"],
                },
              ].map((project) => (
                <div key={project.title} className="bg-muted rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.desc}</p>
                    <ul className="space-y-2">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{language === "vi" ? "Quan tâm đến dự án của chúng tôi?" : "Interested in Our Projects?"}</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">{language === "vi" ? "Liên hệ với chúng tôi để được tư vấn chi tiết về các dự án đầu tư" : "Contact us for detailed consultation on investment projects"}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/lien-he" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors">
                <Phone className="w-5 h-5" />
                {language === "vi" ? "Liên hệ ngay" : "Contact Now"}
              </Link>
              <Link href="/du-an" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-medium transition-colors backdrop-blur-sm">
                {language === "vi" ? "Xem dự án tiêu biểu" : "View Featured Projects"}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
