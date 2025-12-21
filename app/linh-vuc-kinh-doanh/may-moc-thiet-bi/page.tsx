"use client"

import { useLanguage } from "@/lib/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Factory, CheckCircle, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function MayMocThietBiPage() {
  const { language } = useLanguage()
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Factory className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">{language === "vi" ? "LĨNH VỰC KINH DOANH" : "BUSINESS AREAS"}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {language === "vi" ? "Máy móc thiết bị xây dựng" : "Construction Machinery & Equipment"}
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  {language === "vi" ? "Cung cấp, mua bán và cho thuê các loại máy móc, thiết bị xây dựng hiện đại phục vụ thi công công trình" : "Supply, sell and rent modern construction machinery and equipment for project construction"}
                </p>
                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors"
                >
                  {language === "vi" ? "Liên hệ tư vấn" : "Contact Consultation"}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-accent font-medium tracking-widest mb-4">{language === "vi" ? "GIỚI THIỆU" : "INTRODUCTION"}</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  {language === "vi" ? "Giải pháp thiết bị toàn diện" : "Comprehensive Equipment Solutions"}
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {language === "vi" ? "Phutraco Holding là đơn vị hàng đầu trong lĩnh vực cung cấp máy móc thiết bị xây dựng tại Việt Nam. Chúng tôi nhập khẩu và phân phối các dòng thiết bị chất lượng cao từ các thương hiệu uy tín trên thế giới." : "Phutraco Holding is a leading provider of construction machinery and equipment in Vietnam. We import and distribute high-quality equipment lines from reputable brands worldwide."}
                </p>
                <p className="text-muted-foreground text-lg mb-8">
                  {language === "vi" ? "Với đội ngũ kỹ thuật viên chuyên nghiệp, chúng tôi không chỉ cung cấp thiết bị mà còn đi kèm dịch vụ bảo trì, sửa chữa và đào tạo vận hành, đảm bảo hiệu suất tối ưu cho mọi dự án." : "With a professional team of technicians, we not only supply equipment but also provide maintenance, repair and operational training services, ensuring optimal performance for every project."}
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">200+</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Loại thiết bị" : "Equipment Types"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Hỗ trợ kỹ thuật" : "Technical Support"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">{language === "vi" ? "Chính hãng" : "Authentic"}</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1565114879-5e4e3ca1c5b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                    alt={language === "vi" ? "Máy móc thiết bị" : "Construction Equipment"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-2xl shadow-xl">
                  <p className="text-primary font-bold text-lg">10+ {language === "vi" ? "năm" : "years"}</p>
                  <p className="text-primary/80 text-sm">{language === "vi" ? "Kinh nghiệm ngành" : "Industry Experience"}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-widest mb-4">{language === "vi" ? "DỊCH VỤ" : "SERVICES"}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {language === "vi" ? "Các dịch vụ chúng tôi cung cấp" : "Our Services"}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  title: language === "vi" ? "Mua bán máy móc xây dựng" : "Construction Equipment Trading",
                  description: language === "vi" ? "Cung cấp máy ủi, máy xúc, máy lu, xe tải ben, cần cẩu và các thiết bị chuyên dụng" : "Supply bulldozers, excavators, compactors, dump trucks, cranes and specialized equipment",
                  icon: "🏗️",
                },
                {
                  title: language === "vi" ? "Cho thuê thiết bị thi công" : "Equipment Rental",
                  description: language === "vi" ? "Dịch vụ cho thuê linh hoạt theo ngày, tháng với giá cạnh tranh, đầy đủ giấy tờ" : "Flexible daily/monthly rental with competitive rates and complete documentation",
                  icon: "📋",
                },
                {
                  title: language === "vi" ? "Bảo trì, sửa chữa" : "Maintenance & Repair",
                  description: language === "vi" ? "Đội ngũ kỹ thuật 24/7 sẵn sàng bảo trì định kỳ và sửa chữa mọi sự cố" : "24/7 technical team ready for regular maintenance and emergency repairs",
                  icon: "🔧",
                },
                {
                  title: language === "vi" ? "Nhập khẩu thiết bị" : "Equipment Import",
                  description: language === "vi" ? "Nhập khẩu trực tiếp từ nhà sản xuất, đảm bảo giá tốt và chất lượng chính hãng" : "Direct import from manufacturers ensuring good prices and authentic quality",
                  icon: "🚢",
                },
              ].map((service) => (
                <div key={service.title} className="bg-background p-6 rounded-2xl hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Equipment Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: language === "vi" ? "Máy đào, máy xúc" : "Excavators & Diggers",
                  items: language === "vi" 
                    ? ["Máy xúc bánh xích", "Máy xúc bánh lốp", "Máy đào mini", "Máy đào thủy lực"]
                    : ["Track excavators", "Wheel excavators", "Mini excavators", "Hydraulic diggers"],
                  image: "https://images.unsplash.com/photo-1565114879-5e4e3ca1c5b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: language === "vi" ? "Máy ủi, máy lu" : "Bulldozers & Compactors",
                  items: language === "vi"
                    ? ["Máy ủi D5-D11", "Máy lu bánh lốp", "Máy lu rung", "Máy lu tĩnh"]
                    : ["Bulldozers D5-D11", "Wheel compactors", "Vibratory rollers", "Static rollers"],
                  image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: language === "vi" ? "Cần cẩu, xe nâng" : "Cranes & Forklifts",
                  items: language === "vi"
                    ? ["Cần cẩu tháp", "Cần cẩu ô tô", "Xe nâng điện", "Xe nâng diesel"]
                    : ["Tower cranes", "Mobile cranes", "Electric forklifts", "Diesel forklifts"],
                  image: "https://images.unsplash.com/photo-1590496793929-7651aaf9c6b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: language === "vi" ? "Xe vận tải" : "Transport Vehicles",
                  items: language === "vi"
                    ? ["Xe tải ben", "Xe chở xi măng", "Xe trộn bê tông", "Xe đầu kéo"]
                    : ["Dump trucks", "Cement trucks", "Concrete mixers", "Tractor units"],
                  image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: language === "vi" ? "Máy trộn bê tông" : "Concrete Equipment",
                  items: language === "vi"
                    ? ["Trạm trộn cố định", "Trạm trộn di động", "Máy bơm bê tông", "Xe chở bê tông"]
                    : ["Stationary mixing plants", "Mobile mixing plants", "Concrete pumps", "Concrete trucks"],
                  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
                {
                  title: language === "vi" ? "Thiết bị khác" : "Other Equipment",
                  items: language === "vi"
                    ? ["Máy phát điện", "Máy nén khí", "Máy bơm nước", "Giàn giáo"]
                    : ["Power generators", "Air compressors", "Water pumps", "Scaffolding"],
                  image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                },
              ].map((category) => (
                <div key={category.title} className="bg-background rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">{language === "vi" ? "ĐỐI TÁC" : "PARTNERS"}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {language === "vi" ? "Thương hiệu uy tín" : "Trusted Brands"}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === "vi" ? "Chúng tôi là đại lý ủy quyền của các thương hiệu hàng đầu thế giới" : "We are authorized agents of world-leading brands"}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {["Caterpillar", "Komatsu", "Hitachi", "Volvo", "Doosan", "Hyundai", "XCMG", "Sany"].map((brand) => (
                <div key={brand} className="bg-muted p-8 rounded-xl flex items-center justify-center hover:shadow-lg transition-shadow">
                  <p className="text-xl font-bold text-foreground">{brand}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                {language === "vi" ? "Cần tư vấn thiết bị cho dự án?" : "Need Equipment Consultation for Your Project?"}
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                {language === "vi" ? "Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá tốt nhất" : "Contact us for free consultation and best quotes"}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {language === "vi" ? "Liên hệ ngay" : "Contact Now"}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
