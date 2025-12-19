"use client"

import Link from "next/link"
import { ArrowRight, Award, Users, Building2, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export default function AboutPreview() {
  const { t } = useLanguage()

  const stats = [
    { icon: Calendar, value: "2005", label: t("about.yearFounded") },
    { icon: Building2, value: "20+", label: t("about.projects") },
    { icon: Users, value: "500+", label: t("about.employees") },
    { icon: Award, value: "50+", label: t("about.awards") },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/modern-corporate-headquarters-building-glass-facad.jpg"
                alt="Trụ sở Phutraco Holding"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-accent text-primary p-8 rounded-2xl shadow-xl hidden lg:block">
              <p className="text-5xl font-bold">19+</p>
              <p className="text-sm font-medium">{t("about.yearsExp")}</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-accent font-medium tracking-widest mb-4">{t("about.label")}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">{t("about.title")}</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{t("about.desc1")}</p>
            <p className="text-muted-foreground mb-8 leading-relaxed">{t("about.desc2")}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/gioi-thieu">
                {t("about.viewMore")}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
