"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { articlesService, type Article } from "@/services/articles.service"

export default function NewsPreview() {
  const { language } = useLanguage()
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true)
        const data = await articlesService.getAllArticles(1, 3, 'published')
        setArticles(data.data)
      } catch (error) {
        console.error('Failed to fetch articles:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchArticles()
  }, [])

  if (isLoading) {
    return (
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="text-muted-foreground">Đang tải tin tức...</div>
          </div>
        </div>
      </section>
    )
  }

  if (articles.length === 0) {
    return null
  }

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <p className="text-accent font-medium tracking-widest mb-4">
              {language === "vi" ? "TIN TỨC & HOẠT ĐỘNG" : "NEWS & ACTIVITIES"}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              {language === "vi" ? "Cập nhật mới nhất" : "Latest Updates"}
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-6 lg:mt-0 border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
          >
            <Link href="/tin-tuc">
              {language === "vi" ? "Tất cả tin tức" : "All News"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/tin-tuc/${article.slug}`}
              className="group block bg-muted rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.thumbnail_url || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.created_at).toLocaleDateString("vi-VN")}
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {article.excerpt || "Đọc thêm để xem chi tiết..."}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
