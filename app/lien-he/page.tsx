"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/language-context"

export default function ContactPage() {
  const { t, language } = useLanguage()
  
  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.address"),
      content: "378 Nguyễn Thiện Thuật, Phường Mỹ Hào, Tỉnh Hưng Yên",
    },
    {
      icon: Phone,
      title: t("contact.phone"),
      content: "079 467 8568",
    },
    {
      icon: Mail,
      title: "Email",
      content: "phutraco@gmail.com",
    },
    {
      icon: Clock,
      title: t("contact.workingHours"),
      content: t("contact.workingHoursValue"),
    },
  ]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80)`,
            }}
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative h-full flex items-center justify-center text-center">
            <div>
              <p className="text-accent font-medium tracking-widest mb-4">PHUTRACO HOLDING</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">
                {t("contact.title")}
              </h1>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <p className="text-accent font-medium tracking-widest mb-4">{t("contact.label")}</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{t("contact.subtitle")}</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {t("contact.desc")}
                </p>

                <div className="space-y-6 mb-12">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Office Image */}
                <div className="mb-12">
                  <div className="aspect-video rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80"
                      alt={language === "vi" ? "Văn phòng Phutraco Holding" : "Phutraco Holding Office"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 text-center">{t("contact.officeImage")}</p>
                </div>

                {/* Map */}
                <div className="aspect-video rounded-2xl overflow-hidden bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9!2d106.0!3d20.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU0JzAwLjAiTiAxMDbCsDAzJzAwLjAiRQ!5e0!3m2!1svi!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={language === "vi" ? "Vị trí Phutraco Holding" : "Phutraco Holding Location"}
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-muted rounded-2xl p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">{t("contact.formTitle")}</h3>
                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-xl">
                    {t("contact.successMessage")}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contact.fullName")} {t("contact.required")}</Label>
                    <Input
                      id="name"
                      placeholder={t("contact.enterName")}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email {t("contact.required")}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t("contact.enterEmail")}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("contact.phone")} {t("contact.required")}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={t("contact.enterPhone")}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact.message")} {t("contact.required")}</Label>
                    <Textarea
                      id="message"
                      placeholder={t("contact.enterMessage")}
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-background resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-6" disabled={isSubmitting}>
                    {isSubmitting ? (
                      language === "vi" ? "Đang gửi..." : "Sending..."
                    ) : (
                      <>
                        {t("contact.send")}
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
