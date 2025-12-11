"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Plus, Edit, Trash2, X, Calendar, ImageIcon } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { useNews, type NewsItem } from "@/lib/news-context"
import { useLanguage } from "@/lib/language-context"
import "react-quill-new/dist/quill.snow.css"

// Import React Quill dynamically to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), { 
  ssr: false,
  loading: () => <div className="border rounded-lg p-4 bg-muted animate-pulse h-[300px]" />
})

export default function AdminNewsPage() {
  const router = useRouter()
  const { user, isLoggedIn } = useAuth()
  const { news, addNews, updateNews, deleteNews } = useNews()
  const { t, language } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<NewsItem | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    titleEn: "",
    category: "",
    categoryEn: "",
    excerpt: "",
    excerptEn: "",
    content: "",
    contentEn: "",
    image: "",
    author: "",
    isFeatured: false,
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isLoggedIn || user?.role !== "admin") {
      router.push("/")
    }
  }, [isLoggedIn, user, router])

  if (!isLoggedIn || user?.role !== "admin") {
    return null
  }

  const openAddModal = () => {
    setEditingItem(null)
    setFormData({
      title: "",
      titleEn: "",
      category: "",
      categoryEn: "",
      excerpt: "",
      excerptEn: "",
      content: "",
      contentEn: "",
      image: "/placeholder.svg?height=400&width=600",
      author: user?.name || "",
      isFeatured: false,
    })
    setIsModalOpen(true)
  }

  const openEditModal = (item: NewsItem) => {
    setEditingItem(item)
    setFormData({
      title: item.title,
      titleEn: item.titleEn,
      category: item.category,
      categoryEn: item.categoryEn,
      excerpt: item.excerpt,
      excerptEn: item.excerptEn,
      content: item.content,
      contentEn: item.contentEn,
      image: item.image,
      author: item.author,
      isFeatured: item.isFeatured,
    })
    setIsModalOpen(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newsData = {
      ...formData,
      date: editingItem?.date || new Date().toISOString().split("T")[0],
    }

    if (editingItem) {
      updateNews(editingItem.id, newsData)
    } else {
      addNews(newsData)
    }

    setIsModalOpen(false)
  }

  const handleDelete = (id: string) => {
    if (
      confirm(
        language === "vi" ? "Bạn có chắc chắn muốn xóa bài viết này?" : "Are you sure you want to delete this article?",
      )
    ) {
      deleteNews(id)
    }
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-muted">
        {/* Hero Banner */}
        <section className="relative h-[30vh] min-h-[200px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(/placeholder.svg?height=400&width=1920&query=admin dashboard office workspace)`,
            }}
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative h-full flex items-center justify-center text-center">
            <div>
              <p className="text-accent font-medium tracking-widest mb-4">ADMIN</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">{t("news.manage")}</h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                {language === "vi" ? "Danh sách bài viết" : "Article List"} ({news.length})
              </h2>
              <Button onClick={openAddModal} className="bg-primary hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                {t("news.addNew")}
              </Button>
            </div>

            {/* News List */}
            <div className="bg-background rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                        {language === "vi" ? "Hình ảnh" : "Image"}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                        {t("news.articleTitle")}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                        {t("news.category")}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                        {language === "vi" ? "Ngày đăng" : "Date"}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                        {language === "vi" ? "Nổi bật" : "Featured"}
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">
                        {language === "vi" ? "Thao tác" : "Actions"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {news.map((item) => (
                      <tr key={item.id} className="hover:bg-muted/50">
                        <td className="px-6 py-4">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-20 h-14 object-cover rounded"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-medium text-foreground line-clamp-1">
                            {language === "vi" ? item.title : item.titleEn}
                          </p>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {language === "vi" ? item.excerpt : item.excerptEn}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/20 text-accent">
                            {language === "vi" ? item.category : item.categoryEn}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(item.date).toLocaleDateString("vi-VN")}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <Switch
                            checked={item.isFeatured}
                            onCheckedChange={(checked) => updateNews(item.id, { isFeatured: checked })}
                          />
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline" onClick={() => openEditModal(item)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
                              onClick={() => handleDelete(item.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-primary py-4 px-6 flex items-center justify-between z-10">
                <h2 className="text-xl font-bold text-white">
                  {editingItem ? (language === "vi" ? "Sửa bài viết" : "Edit Article") : t("news.addNew")}
                </h2>
                <button onClick={() => setIsModalOpen(false)} className="text-white/70 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Vietnamese Title */}
                  <div className="space-y-2">
                    <Label>{t("news.articleTitle")} (VI)</Label>
                    <Input
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>
                  {/* English Title */}
                  <div className="space-y-2">
                    <Label>{t("news.articleTitle")} (EN)</Label>
                    <Input
                      value={formData.titleEn}
                      onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Vietnamese Category */}
                  <div className="space-y-2">
                    <Label>{t("news.category")} (VI)</Label>
                    <Input
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      placeholder="Sự kiện, Hợp tác, Công nghệ..."
                      required
                    />
                  </div>
                  {/* English Category */}
                  <div className="space-y-2">
                    <Label>{t("news.category")} (EN)</Label>
                    <Input
                      value={formData.categoryEn}
                      onChange={(e) => setFormData({ ...formData, categoryEn: e.target.value })}
                      placeholder="Event, Partnership, Technology..."
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Vietnamese Excerpt */}
                  <div className="space-y-2">
                    <Label>{t("news.excerpt")} (VI)</Label>
                    <Textarea
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      rows={3}
                      required
                    />
                  </div>
                  {/* English Excerpt */}
                  <div className="space-y-2">
                    <Label>{t("news.excerpt")} (EN)</Label>
                    <Textarea
                      value={formData.excerptEn}
                      onChange={(e) => setFormData({ ...formData, excerptEn: e.target.value })}
                      rows={3}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Vietnamese Content */}
                  <div className="space-y-2">
                    <Label>{t("news.content")} (VI)</Label>
                    {isMounted ? (
  <div className="border rounded-lg overflow-hidden bg-white" suppressHydrationWarning>
    <ReactQuill
      theme="snow"
      value={formData.content}
      onChange={(value) => setFormData({ ...formData, content: value })}
      modules={{
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          ["clean"],
        ],
      }}
      style={{ height: "300px" }}
    />
  </div>
) : (
  <div className="border rounded-lg p-4 bg-muted animate-pulse h-[300px]" />
)}

                    <div className="h-12"></div>
                  </div>
                  {/* English Content */}
                  <div className="space-y-2">
                    <Label>{t("news.content")} (EN)</Label>
                    {isMounted ? (
                      <div className="border rounded-lg overflow-hidden bg-white" suppressHydrationWarning>
                        <ReactQuill
                          theme="snow"
                          value={formData.contentEn}
                          onChange={(value) => setFormData({ ...formData, contentEn: value })}
                          modules={{
                            toolbar: [
                              [{ header: [1, 2, 3, 4, 5, 6, false] }],
                              [{ font: [] }],
                              [{ size: ["small", false, "large", "huge"] }],
                              ["bold", "italic", "underline", "strike"],
                              [{ color: [] }, { background: [] }],
                              [{ script: "sub" }, { script: "super" }],
                              [{ list: "ordered" }, { list: "bullet" }],
                              [{ indent: "-1" }, { indent: "+1" }],
                              [{ align: [] }],
                              ["blockquote", "code-block"],
                              ["link", "image", "video"],
                              ["clean"],
                            ],
                          }}
                          style={{ height: "300px" }}
                        />
                      </div>
                    ) : (
                      <div className="border rounded-lg p-4 bg-muted animate-pulse h-[300px]" />
                    )}
                    <div className="h-12"></div>
                  </div>
                </div>

                {/* Image URL */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4" />
                    {t("news.imageUrl")}
                  </Label>
                  <Input
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="/placeholder.svg?height=400&width=600"
                  />
                  {formData.image && (
                    <img
                      src={formData.image || "/placeholder.svg"}
                      alt="Preview"
                      className="w-full max-w-md h-40 object-cover rounded-lg mt-2"
                    />
                  )}
                </div>

                {/* Featured Toggle */}
                <div className="flex items-center gap-3">
                  <Switch
                    checked={formData.isFeatured}
                    onCheckedChange={(checked) => setFormData({ ...formData, isFeatured: checked })}
                  />
                  <Label>{language === "vi" ? "Đánh dấu là tin nổi bật" : "Mark as featured"}</Label>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t">
                  <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
                    {t("news.cancel")}
                  </Button>
                  <Button type="submit" className="bg-primary hover:bg-primary/90">
                    {t("news.save")}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
