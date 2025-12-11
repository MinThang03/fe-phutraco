"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useLanguage()

  const slides = [
    {
      image: "/modern-construction-site-with-tower-cranes-buildin.jpg",
      subtitle: t("hero.subtitle1"),
      title: t("hero.title1"),
      description: t("hero.desc1"),
    },
    {
      image: "/highway-infrastructure-construction-aerial-view-vi.jpg",
      subtitle: t("hero.subtitle2"),
      title: t("hero.title2"),
      description: t("hero.desc2"),
    },
    {
      image: "/luxury-mountain-resort-hotel-vietnam-hoa-binh-natu.jpg",
      subtitle: t("hero.subtitle3"),
      title: t("hero.title3"),
      description: t("hero.desc3"),
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="overflow-hidden">
              <p className="text-accent font-medium tracking-widest mb-4 animate-fade-in">
                {slides[currentSlide].subtitle}
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl text-pretty">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90 text-base px-8">
                <Link href="/gioi-thieu">{t("hero.learnMore")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary text-base px-8 bg-transparent"
              >
                <Link href="/lien-he">{t("hero.contactNow")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-accent" : "w-2 bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-xs tracking-widest rotate-90 origin-center translate-y-8">{t("hero.scroll")}</span>
          <div className="w-px h-16 bg-white/30 mt-12">
            <div className="w-full h-1/2 bg-accent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
