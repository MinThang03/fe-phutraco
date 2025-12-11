import Header from "@/components/header"
import Footer from "@/components/footer"
import { Award, Target, Eye, Heart, Users, MapPin, FileText } from "lucide-react"

const timeline = [
  { year: "2005", event: "Thành lập Công ty CP TM & XD Phương Đông" },
  { year: "2008", event: "Mở rộng hoạt động sang lĩnh vực hạ tầng" },
  { year: "2012", event: "Thành lập chi nhánh Hải Phòng" },
  { year: "2015", event: "Đầu tư vào lĩnh vực du lịch nghỉ dưỡng" },
  { year: "2018", event: "Thành lập chi nhánh Đà Nẵng" },
  { year: "2020", event: "Chuyển đổi mô hình Tập đoàn Holding" },
  { year: "2023", event: "Mở rộng hệ sinh thái công nghệ số" },
]

const values = [
  {
    icon: Heart,
    title: "Tận tâm",
    description: "Luôn đặt lợi ích khách hàng lên hàng đầu",
  },
  {
    icon: Award,
    title: "Chất lượng",
    description: "Cam kết chất lượng trong từng sản phẩm",
  },
  {
    icon: Users,
    title: "Đoàn kết",
    description: "Xây dựng đội ngũ gắn kết, vững mạnh",
  },
  {
    icon: Target,
    title: "Sáng tạo",
    description: "Không ngừng đổi mới và cải tiến",
  },
]

const legalInfo = [
  { label: "Mã số thuế", value: "0900xxxxxx" },
  { label: "Ngày cấp", value: "01/01/2005" },
  { label: "Nơi cấp", value: "Sở KH&ĐT Hưng Yên" },
  { label: "Vốn điều lệ", value: "500 tỷ đồng" },
]

export default function AboutPage() {
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
              <p className="text-accent font-medium tracking-widest mb-4">VỀ CHÚNG TÔI</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">
                Giới thiệu Phutraco Holding
              </h1>
            </div>
          </div>
        </section>

        {/* Thư ngỏ */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest mb-4">THƯ NGỎ</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Lời chào từ Ban lãnh đạo</h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-6">Kính gửi Quý Khách hàng, Quý Đối tác và Cổ đông,</p>
              <p className="leading-relaxed mb-6">
                Với hơn 19 năm hình thành và phát triển, Công ty Cổ phần Thương mại và Xây dựng Phương Đông (Phutraco
                Holding) đã không ngừng lớn mạnh, khẳng định vị thế trong lĩnh vực xây dựng và đầu tư phát triển hạ tầng
                tại Việt Nam.
              </p>
              <p className="leading-relaxed mb-6">
                Chúng tôi luôn tự hào về đội ngũ cán bộ nhân viên tận tâm, năng động và sáng tạo. Với phương châm "An
                toàn - Chất lượng - Môi trường - Tiến độ", Phutraco Holding cam kết mang đến những công trình chất lượng
                cao, góp phần vào sự phát triển bền vững của đất nước.
              </p>
              <p className="leading-relaxed mb-6">
                Thay mặt Ban lãnh đạo Công ty, tôi xin gửi lời cảm ơn chân thành đến Quý Khách hàng, Quý Đối tác đã tin
                tưởng và đồng hành cùng chúng tôi trong suốt thời gian qua.
              </p>
              <p className="text-right font-semibold text-foreground">
                Tổng Giám đốc
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
              <p className="text-accent font-medium tracking-widest mb-4">LỊCH SỬ HÌNH THÀNH</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">Hành trình phát triển</h2>
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
                <h3 className="text-2xl font-bold mb-4">Tầm nhìn</h3>
                <p className="text-white/80 leading-relaxed">
                  Trở thành Tập đoàn đa ngành hàng đầu Việt Nam trong lĩnh vực xây dựng, đầu tư phát triển hạ tầng và
                  bất động sản. Là đối tác tin cậy của các tổ chức trong và ngoài nước.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Sứ mệnh</h3>
                <p className="text-white/80 leading-relaxed">
                  Kiến tạo những công trình chất lượng cao, góp phần phát triển hạ tầng đất nước. Mang đến giá trị bền
                  vững cho khách hàng, đối tác và cộng đồng thông qua các sản phẩm và dịch vụ xuất sắc.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Giá trị cốt lõi */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-widest mb-4">GIÁ TRỊ CỐT LÕI</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Nền tảng phát triển</h2>
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
                  <h3 className="text-2xl font-bold text-foreground">Thông tin pháp lý</h3>
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
                  <h3 className="text-2xl font-bold text-foreground">Hệ thống chi nhánh</h3>
                </div>
                <div className="space-y-6">
                  <div className="p-4 bg-muted rounded-xl">
                    <h4 className="font-semibold text-foreground mb-2">Trụ sở chính</h4>
                    <p className="text-muted-foreground text-sm">
                      378 Nguyễn Thiện Thuật, Phường Mỹ Hào, Tỉnh Hưng Yên
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-xl">
                    <h4 className="font-semibold text-foreground mb-2">Chi nhánh Hải Phòng</h4>
                    <p className="text-muted-foreground text-sm">Thành phố Hải Phòng</p>
                  </div>
                  <div className="p-4 bg-muted rounded-xl">
                    <h4 className="font-semibold text-foreground mb-2">Chi nhánh Đà Nẵng</h4>
                    <p className="text-muted-foreground text-sm">Thành phố Đà Nẵng</p>
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
