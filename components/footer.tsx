"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Globe, Facebook, Youtube, Linkedin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/gioi-thieu" },
    { name: t("nav.business"), href: "/linh-vuc-kinh-doanh" },
    { name: t("nav.ecosystem"), href: "/he-sinh-thai" },
    { name: t("nav.projects"), href: "/du-an" },
    { name: t("nav.news"), href: "/tin-tuc" },
    { name: t("nav.contact"), href: "/lien-he" },
  ]

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info - Updated logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo_phutraco.png"
                alt="Phutraco Holding Logo"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
              <div>
                <p className="font-bold text-xl tracking-wide">PHUTRACO</p>
                <p className="text-white/70 text-sm tracking-widest">HOLDING</p>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-4 text-accent">{t("footer.company")}</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent shrink-0" />
                <span>378 Nguyễn Thiện Thuật – Phường Mỹ Hào – Tỉnh Hưng Yên</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>079 467 8568</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>phutraco@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-accent shrink-0" />
                <span>phutraco.vn</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-accent">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/80 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Branches */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-accent">{t("footer.branches")}</h3>
            <div className="space-y-4 text-white/80 mb-8">
              <div>
                <p className="font-medium text-white">{t("footer.haiphong")}</p>
                <p className="text-sm">Thành phố Hải Phòng</p>
              </div>
              <div>
                <p className="font-medium text-white">{t("footer.danang")}</p>
                <p className="text-sm">Thành phố Đà Nẵng</p>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-4 text-accent">{t("footer.connect")}</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 text-center text-white/60">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
