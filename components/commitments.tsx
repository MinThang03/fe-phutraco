"use client"

import { Shield, Award, Leaf, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Commitments() {
  const { language } = useLanguage()

  const commitments = [
    {
      icon: Shield,
      title: language === "vi" ? "An toàn" : "Safety",
      description:
        language === "vi"
          ? "Đảm bảo an toàn tuyệt đối cho người lao động và công trình trong suốt quá trình thi công"
          : "Ensuring absolute safety for workers and projects throughout the construction process",
    },
    {
      icon: Award,
      title: language === "vi" ? "Chất lượng" : "Quality",
      description:
        language === "vi"
          ? "Cam kết chất lượng công trình đạt tiêu chuẩn quốc tế, bền vững theo thời gian"
          : "Committed to international standard project quality, sustainable over time",
    },
    {
      icon: Leaf,
      title: language === "vi" ? "Môi trường" : "Environment",
      description:
        language === "vi"
          ? "Ứng dụng công nghệ xanh, giảm thiểu tác động môi trường trong mọi hoạt động"
          : "Applying green technology, minimizing environmental impact in all activities",
    },
    {
      icon: Clock,
      title: language === "vi" ? "Tiến độ" : "Progress",
      description:
        language === "vi"
          ? "Hoàn thành công trình đúng tiến độ cam kết, tối ưu hóa thời gian và chi phí"
          : "Completing projects on schedule, optimizing time and cost",
    },
  ]

  return (
    <section className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-widest mb-4">
            {language === "vi" ? "CAM KẾT CỦA CHÚNG TÔI" : "OUR COMMITMENTS"}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            {language === "vi"
              ? "An toàn - Chất lượng - Môi trường - Tiến độ"
              : "Safety - Quality - Environment - Progress"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === "vi"
              ? "Bốn trụ cột trong phương châm hoạt động của Phutraco Holding"
              : "Four pillars in Phutraco Holding's operational philosophy"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((item) => (
            <div
              key={item.title}
              className="relative bg-background rounded-2xl p-8 text-center group hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-accent transition-colors">
                  <item.icon className="w-10 h-10 text-white group-hover:text-primary transition-colors" />
                </div>
              </div>
              <div className="pt-12">
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
