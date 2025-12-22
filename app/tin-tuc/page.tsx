"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { articlesService, type Article, type ArticleEn } from "@/services/articles.service"

type ArticleData = Article | ArticleEn

export default function NewsPage() {
  const { t, language } = useLanguage()
  const [articles, setArticles] = useState<ArticleData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true)
        // Fetch từ API tương ứng dựa trên ngôn ngữ
        let data
        if (language === 'en') {
          data = await articlesService.getAllArticlesEn(1, 20, 'published')
        } else {
          data = await articlesService.getAllArticles(1, 20, 'published')
        }
        setArticles(data.data)
      } catch (error) {
        console.error('Failed to fetch articles:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchArticles()
  }, [language])

  const featuredNews = articles[0]
  const otherNews = articles.slice(1)

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen">
          <div className="flex items-center justify-center py-24">
            <div className="text-muted-foreground">Đang tải tin tức...</div>
          </div>
        </main>
        <Footer />
      </>
    )
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
              backgroundImage: `url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80)`,
            }}
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative h-full flex items-center justify-center text-center">
            <div>
              <p className="text-accent font-medium tracking-widest mb-4">PHUTRACO HOLDING</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">{t("news.title")}</h1>
            </div>
          </div>
        </section>

        {/* Featured News */}
        {featuredNews && (
          <section className="py-24 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-16">
                <p className="text-accent font-medium tracking-widest mb-4">{t("news.featured")}</p>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="aspect-video rounded-2xl overflow-hidden">
                    <img
                      src={featuredNews.thumbnail_url || "/placeholder.svg"}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredNews.created_at).toLocaleDateString(language === 'en' ? "en-US" : "vi-VN")}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                      {featuredNews.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredNews.excerpt || (language === 'en' ? "Read more for details..." : "Đọc thêm để xem chi tiết...")}
                    </p>
                    <Link 
                      href={`/tin-tuc/${featuredNews.slug}`}
                      className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors"
                    >
                      {t("news.readMore")}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* News Grid */}
              {otherNews.length > 0 && (
                <div>
                  <p className="text-accent font-medium tracking-widest mb-8">{t("news.latest")}</p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherNews.map((item) => (
                      <Link
                        key={item.id}
                        href={`/tin-tuc/${item.slug}`}
                        className="group bg-muted rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={item.thumbnail_url || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-medium text-accent">
                              {item.status === 'published' ? (language === 'en' ? 'Published' : 'Đã xuất bản') : (language === 'en' ? 'Draft' : 'Bản nháp')}
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(item.created_at).toLocaleDateString(language === 'en' ? "en-US" : "vi-VN")}
                            </span>
                          </div>
                          <h3 className="font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                            {item.excerpt || (language === 'en' ? "Read more for details..." : "Đọc thêm để xem chi tiết...")}
                          </p>
                          <span className="inline-flex items-center text-sm text-primary font-medium group-hover:text-accent transition-colors">
                            {t("news.readMore")}
                            <ArrowRight className="ml-1 w-4 h-4" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {articles.length === 0 && (
          <section className="py-24 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-muted-foreground">Chưa có tin tức nào được xuất bản.</p>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
