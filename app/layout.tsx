import type React from "react"
import type { Metadata } from "next"
import { Be_Vietnam_Pro, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
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
        url: "/images/logo_phutraco.png",
        type: "image/png",
      },
    ],
    apple: "/images/logo_phutraco.png",
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

        {/* GIM Chatbot */}
        <Script
          id="gim-chatbot"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.__gim = window.__gim || {};
              window.__gim.licenseId = "598674586510341838";
              (function(c,o){const e=[],n={_handler:null,_version:"1.0",_queue:e,on:function(){return e.push(["on",arguments]),n},call:function(){return e.push(["call",arguments]),n},loadScript:function(){const t=o.createElement("script");t.async=!0,t.type="text/javascript",t.src="https://botsdk.stg.gim.beango.com/index.umd.js",o.head.appendChild(t)}};n.loadScript(),window.GIMBotTool=n})(window,document);
            `,
          }}
        />
      </body>
    </html>
  )
}
