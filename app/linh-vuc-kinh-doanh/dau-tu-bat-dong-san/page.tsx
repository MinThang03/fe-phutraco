import Header from "@/components/header"
import Footer from "@/components/footer"
import { TreePine, CheckCircle, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function DauTuBatDongSanPage() {
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
                  <span className="text-accent font-medium tracking-widest">LĨNH VỰC KINH DOANH</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Đầu tư khu đô thị - Du lịch - Công nghiệp
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Đầu tư phát triển các dự án bất động sản quy mô lớn, tạo nên giá trị bền vững
                </p>
                <Link href="/lien-he" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors">
                  Liên hệ tư vấn
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
                <p className="text-accent font-medium tracking-widest mb-4">GIỚI THIỆU</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Kiến tạo không gian sống và làm việc</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Phutraco Holding là nhà đầu tư bất động sản uy tín với danh mục dự án đa dạng từ khu đô thị, 
                  khu du lịch nghỉ dưỡng đến khu công nghiệp. Chúng tôi cam kết tạo nên những không gian sống 
                  và làm việc hiện đại, bền vững.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">20+</div>
                    <div className="text-sm text-muted-foreground">Dự án</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                    <div className="text-sm text-muted-foreground">Ha đất phát triển</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                    <div className="text-sm text-muted-foreground">Khách hàng</div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" alt="Bất động sản" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">DỰ ÁN</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Danh mục dự án đầu tư</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Khu đô thị mới",
                  desc: "Phát triển khu đô thị hiện đại với đầy đủ tiện ích: trường học, bệnh viện, công viên",
                  img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: ["Quy hoạch bài bản", "Hạ tầng hoàn chỉnh", "Không gian xanh", "Tiện ích đầy đủ"],
                },
                {
                  title: "Resort nghỉ dưỡng",
                  desc: "Đầu tư khu nghỉ dưỡng cao cấp, kết hợp du lịch sinh thái và giải trí",
                  img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: ["Biệt thự nghỉ dưỡng", "Sân golf", "Spa & wellness", "Nhà hàng cao cấp"],
                },
                {
                  title: "Khu công nghiệp",
                  desc: "Phát triển khu công nghiệp sinh thái, thu hút đầu tư sản xuất công nghiệp",
                  img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: ["Hạ tầng KCN chuẩn", "Xử lý môi trường", "Điện nước ổn định", "Vị trí thuận lợi"],
                },
                {
                  title: "Hạ tầng kỹ thuật",
                  desc: "Đầu tư xây dựng hạ tầng: đường xá, cấp thoát nước, điện, viễn thông",
                  img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: ["Đường giao thông", "Cấp thoát nước", "Điện & viễn thông", "Chiếu sáng"],
                },
                {
                  title: "Khu thương mại",
                  desc: "Phát triển trung tâm thương mại, văn phòng cho thuê đạt chuẩn quốc tế",
                  img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: ["TTTM hiện đại", "Văn phòng hạng A", "Bãi đỗ xe rộng", "Tiện ích cao cấp"],
                },
                {
                  title: "Bất động sản nghỉ dưỡng",
                  desc: "Đầu tư biệt thự biển, căn hộ nghỉ dưỡng tại các vùng du lịch",
                  img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                  features: ["Biệt thự biển", "Condotel", "Sinh lời cao", "Quản lý chuyên nghiệp"],
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Quan tâm đến dự án của chúng tôi?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Liên hệ với chúng tôi để được tư vấn chi tiết về các dự án đầu tư</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/lien-he" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-medium transition-colors">
                <Phone className="w-5 h-5" />
                Liên hệ ngay
              </Link>
              <Link href="/du-an" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-medium transition-colors backdrop-blur-sm">
                Xem dự án tiêu biểu
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
