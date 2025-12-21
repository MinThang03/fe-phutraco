"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Building, CheckCircle, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function XayDungCongTrinhPage() {
  const { language } = useLanguage()

  const services = [
    {
      title: language === "vi" ? "Xây dựng dân dụng" : "Civil Construction",
      description: language === "vi"
        ? "Thi công các công trình nhà ở, chung cư, biệt thự, trường học, bệnh viện với tiêu chuẩn cao"
        : "Construction of residential buildings, apartments, villas, schools, hospitals with high standards",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      title: language === "vi" ? "Xây dựng công nghiệp" : "Industrial Construction",
      description: language === "vi"
        ? "Xây dựng nhà máy, nhà xưởng, kho bãi công nghiệp đảm bảo tiêu chuẩn kỹ thuật nghiêm ngặt"
        : "Construction of factories, workshops, industrial warehouses with strict technical standards",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      title: language === "vi" ? "Công trình giao thông" : "Transportation Projects",
      description: language === "vi"
        ? "Thi công đường bộ, cầu cống, hầm chui, nút giao thông với công nghệ tiên tiến"
        : "Construction of roads, bridges, underpasses, intersections with advanced technology",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      title: language === "vi" ? "Công trình thủy lợi" : "Water Resources Projects",
      description: language === "vi"
        ? "Xây dựng hệ thống cấp thoát nước, đập, hồ chứa, kênh mương phục vụ nông nghiệp và đô thị"
        : "Construction of water supply systems, dams, reservoirs, channels for agriculture and urban areas",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      title: language === "vi" ? "Hạ tầng kỹ thuật" : "Technical Infrastructure",
      description: language === "vi"
        ? "Thi công hạ tầng khu đô thị, khu công nghiệp: san nền, thoát nước, điện, viễn thông"
        : "Construction of urban and industrial infrastructure: ground leveling, drainage, electricity, telecommunications",
      image: "https://images.unsplash.com/photo-1590496793929-7651aaf9c6b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      title: language === "vi" ? "Cải tạo và sửa chữa" : "Renovation & Repair",
      description: language === "vi"
        ? "Dịch vụ cải tạo, sửa chữa, nâng cấp các công trình hiện hữu với chi phí hợp lý"
        : "Renovation, repair and upgrade services for existing structures with reasonable cost",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    },
  ]

  const advantages = [
    {
      title: language === "vi" ? "Đội ngũ chuyên nghiệp" : "Professional Team",
      description: language === "vi"
        ? "Kỹ sư và công nhân có chứng chỉ hành nghề, nhiều năm kinh nghiệm"
        : "Licensed engineers and workers with many years of experience",
    },
    {
      title: language === "vi" ? "Công nghệ hiện đại" : "Modern Technology",
      description: language === "vi"
        ? "Trang thiết bị và phương pháp thi công tiên tiến, đảm bảo chất lượng"
        : "Advanced equipment and construction methods, ensuring quality",
    },
    {
      title: language === "vi" ? "Quản lý chặt chẽ" : "Strict Management",
      description: language === "vi"
        ? "Hệ thống quản lý dự án chuyên nghiệp, minh bạch từng giai đoạn"
        : "Professional project management system, transparent at each stage",
    },
    {
      title: language === "vi" ? "Chi phí tối ưu" : "Optimal Cost",
      description: language === "vi"
        ? "Báo giá hợp lý, không phát sinh, cam kết đúng tiến độ"
        : "Reasonable quotation, no extra costs, guaranteed on schedule",
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Building className="w-12 h-12 text-accent" />
                  <span className="text-accent font-medium tracking-widest">
                    {language === "vi" ? "LĨNH VỰC KINH DOANH" : "BUSINESS AREAS"}
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {language === "vi" ? "Xây dựng công trình" : "Construction"}
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  {language === "vi"
                    ? "Thi công xây dựng các công trình dân dụng, công nghiệp, giao thông, thủy lợi và hạ tầng kỹ thuật với quy mô lớn, chất lượng cao"
                    : "Implementing construction projects including civil, industrial, transportation, irrigation and technical infrastructure of large scale and high quality"}
                </p>
                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors"
                >
                  {language === "vi" ? "Liên hệ tư vấn" : "Contact Consulting"}
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
                <p className="text-accent font-medium tracking-widest mb-4">
                  {language === "vi" ? "GIỚI THIỆU" : "INTRODUCTION"}
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  {language === "vi"
                    ? "Đối tác tin cậy cho mọi công trình"
                    : "Reliable Partner for All Projects"}
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {language === "vi"
                    ? "Với hơn 15 năm kinh nghiệm trong lĩnh vực xây dựng, Phutraco Holding tự hào là nhà thầu uy tín, cung cấp giải pháp thi công toàn diện cho các dự án quy mô lớn trên khắp cả nước."
                    : "With over 15 years of experience in the construction field, Phutraco Holding is proud to be a reputable contractor, providing comprehensive construction solutions for large-scale projects across the country."}
                </p>
                <p className="text-muted-foreground text-lg mb-8">
                  {language === "vi"
                    ? "Chúng tôi cam kết mang đến chất lượng vượt trội, tiến độ đúng hạn và chi phí tối ưu cho mọi công trình, từ dân dụng đến công nghiệp, từ giao thông đến hạ tầng kỹ thuật."
                    : "We commit to delivering superior quality, timely progress and optimal costs for all projects, from civil to industrial, from transportation to technical infrastructure."}
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">
                      {language === "vi" ? "Công trình hoàn thành" : "Completed Projects"}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">
                      {language === "vi" ? "Năm kinh nghiệm" : "Years Experience"}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">
                      {language === "vi" ? "Khách hàng hài lòng" : "Satisfied Customers"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                    alt={language === "vi" ? "Xây dựng công trình" : "Construction"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-2xl shadow-xl">
                  <p className="text-primary font-bold text-lg">ISO 9001:2015</p>
                  <p className="text-primary/80 text-sm">
                    {language === "vi" ? "Chứng nhận chất lượng" : "Quality Certification"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-widest mb-4">
                {language === "vi" ? "DỊCH VỤ" : "SERVICES"}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {language === "vi"
                  ? "Lĩnh vực thi công chuyên sâu"
                  : "Specialized Construction Areas"}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === "vi"
                  ? "Đội ngũ kỹ sư và công nhân lành nghề, trang thiết bị hiện đại sẵn sàng đáp ứng mọi yêu cầu"
                  : "Team of skilled engineers and workers, modern equipment ready to meet all requirements"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.title} className="bg-background rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-widest mb-4">
                {language === "vi" ? "ƯU ĐIỂM" : "ADVANTAGES"}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {language === "vi"
                  ? "Tại sao chọn Phutraco?"
                  : "Why Choose Phutraco?"}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage) => (
                <div key={advantage.title} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
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
                {language === "vi"
                  ? "Bạn cần tư vấn về dự án xây dựng?"
                  : "Need Consulting on Your Construction Project?"}
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                {language === "vi"
                  ? "Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của bạn"
                  : "Contact us for free consulting and detailed quotation for your project"}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {language === "vi" ? "Liên hệ ngay" : "Contact Now"}
                </Link>
                <Link
                  href="/du-an"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-medium transition-colors backdrop-blur-sm"
                >
                  {language === "vi" ? "Xem dự án tiêu biểu" : "View Featured Projects"}
                  <ArrowRight className="w-5 h-5" />
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
