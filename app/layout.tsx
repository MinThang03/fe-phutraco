import type React from "react"
import type { Metadata } from "next"
import { Be_Vietnam_Pro, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import { AuthProvider } from "@/lib/auth-context"
import { NewsProvider } from "@/lib/news-context"
import "./globals.css"

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Phutraco Holding | Công ty CP Thương mại và Xây dựng Phương Đông",
  description:
    "Tập đoàn hàng đầu trong lĩnh vực xây dựng và đầu tư phát triển hạ tầng tại Việt Nam. An toàn - Chất lượng - Môi trường - Tiến độ.",
  generator: "v0.app",
  keywords: ["Phutraco", "xây dựng", "đầu tư", "hạ tầng", "Phương Đông", "Hưng Yên"],
  icons: {
    icon: [
      {
        url: "/images/image.png",
        type: "image/png",
      },
    ],
    apple: "/images/image.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${beVietnamPro.className} font-sans antialiased`}>
        <LanguageProvider>
          <AuthProvider>
            <NewsProvider>{children}</NewsProvider>
          </AuthProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
