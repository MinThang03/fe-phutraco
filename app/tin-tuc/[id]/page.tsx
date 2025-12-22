"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { articlesService, type Article, type ArticleEn } from "@/services/articles.service"

export default function NewsDetailPage() {
  const params = useParams()
  const { language } = useLanguage()
  const [article, setArticle] = useState<Article | ArticleEn | null>(null)
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true)
        const slug = params.id as string
        
        // Fetch dựa trên ngôn ngữ hiện tại
        let data
        if (language === 'en') {
          data = await articlesService.getArticleEnBySlug(slug)
        } else {
          data = await articlesService.getArticleBySlug(slug)
        }
        setArticle(data)

        // Fetch related articles (Vietnamese by default for related section)
        const allArticles = await articlesService.getAllArticles(1, 4, 'published')
        const relatedVi = allArticles.data.filter(item => item.slug !== slug).slice(0, 3)
        setRelatedArticles(relatedVi)
      } catch (error) {
        console.error('Failed to fetch article:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchArticle()
  }, [params.id, language])

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-muted-foreground">Đang tải...</div>
        </main>
        <Footer />
      </>
    )
  }

  if (!article) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {language === "vi" ? "Không tìm thấy tin tức" : "News not found"}
            </h1>
            <Button asChild>
              <Link href="/tin-tuc">
                <ArrowLeft className="mr-2 w-4 h-4" />
                {language === "vi" ? "Quay lại" : "Go back"}
              </Link>
            </Button>
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
        {/* Hero Image */}
        <section className="relative h-[60vh] min-h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${article.thumbnail_url || '/placeholder.svg'})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="relative h-full flex items-end">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-12 w-full">
              <div className="flex items-center gap-4 text-white/80 text-sm mb-4">
                <span className="inline-block px-3 py-1 bg-accent rounded-full text-white font-medium">
                  {article.status === 'published' ? (language === 'en' ? 'Published' : 'Đã xuất bản') : (language === 'en' ? 'Draft' : 'Bản nháp')}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.created_at).toLocaleDateString(language === 'en' ? "en-US" : "vi-VN")}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {article.title}
              </h1>
              <p className="text-lg text-white/90">
                {article.excerpt || (language === 'en' ? "Read more for details..." : "Đọc thêm để xem chi tiết...")}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: article.content
                }}
                className="text-foreground leading-relaxed"
              />
            </article>

            {/* Share & Back */}
            <div className="mt-12 pt-8 border-t flex items-center justify-between">
              <Button asChild variant="outline">
                <Link href="/tin-tuc">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  {language === "vi" ? "Quay lại danh sách" : "Back to list"}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related News */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-muted">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                {language === "vi" ? "Tin tức liên quan" : "Related News"}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((item) => (
                  <Link
                    key={item.id}
                    href={`/tin-tuc/${item.slug}`}
                    className="group bg-background rounded-xl overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.thumbnail_url || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-accent font-medium mb-2">
                        {item.status === 'published' ? (language === 'en' ? 'Published' : 'Đã xuất bản') : (language === 'en' ? 'Draft' : 'Bản nháp')}
                      </p>
                      <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
