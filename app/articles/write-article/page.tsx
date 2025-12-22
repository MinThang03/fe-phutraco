'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { ArrowLeft } from 'lucide-react'
import 'react-quill-new/dist/quill.snow.css'
import '@/styles/quill-custom.css'
import { articlesService, type Article as ServiceArticle, type ArticleEn as ServiceArticleEn, type CreateArticleDto, type UpdateArticleDto } from '@/services/articles.service'
import { withAuth } from '@/lib/auth-context'
import Header from '@/components/header'
import Footer from '@/components/footer'

// Dynamic import React Quill để tránh SSR issues
const ReactQuill = dynamic(() => import('react-quill-new'), { 
  ssr: false,
  loading: () => <div className="border rounded-md p-4 min-h-[200px] bg-gray-50">Đang tải trình soạn thảo...</div>
})

interface Article {
  id?: string
  title: string
  excerpt: string
  content: string
  thumbnail_url: string
  status: string
}

interface BilingualArticle {
  id?: string
  titleVi: string
  titleEn: string
  excerptVi: string
  excerptEn: string
  contentVi: string
  contentEn: string
  thumbnail_url: string
  status: string
}

function WriteArticleContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [useHtml, setUseHtml] = useState(false)
  const articleId = searchParams.get('id')

  const [article, setArticle] = useState<BilingualArticle>({
    titleVi: '',
    titleEn: '',
    excerptVi: '',
    excerptEn: '',
    contentVi: '',
    contentEn: '',
    thumbnail_url: '',
    status: 'draft'
  })
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [originalContentVi, setOriginalContentVi] = useState('')
  const [originalContentEn, setOriginalContentEn] = useState('')

  // Load article for editing if ID is provided
  useEffect(() => {
    if (articleId) {
      setIsEditing(true)
      fetchArticles(articleId)
    }
  }, [articleId])

  const fetchArticles = async (id: string) => {
    try {
      setIsLoading(true)
      // Fetch both Vietnamese and English versions
      const viData = await articlesService.getArticleById(id)
      let enData = null
      try {
        enData = await articlesService.getArticleEnById(id)
      } catch (e) {
        // English version might not exist yet
      }

      setArticle({
        id: viData.id,
        titleVi: viData.title,
        titleEn: enData?.title || '',
        excerptVi: viData.excerpt || '',
        excerptEn: enData?.excerpt || '',
        contentVi: viData.content,
        contentEn: enData?.content || '',
        thumbnail_url: viData.thumbnail_url || '',
        status: viData.status,
      })
      
      setOriginalContentVi(viData.content)
      setOriginalContentEn(enData?.content || '')
      
      // Nếu content có HTML phức tạp, tự động chuyển sang HTML mode
      if (viData.content.includes('<style>') || viData.content.includes('animation:') || viData.content.includes('margin:') || viData.content.includes('padding:')) {
        setUseHtml(true)
      }
    } catch (error) {
      toast({
        title: 'Lỗi',
        description: 'Không thể tải bài viết',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!article.titleVi || !article.titleEn || !article.contentVi || !article.contentEn) {
      toast({
        title: 'Lỗi',
        description: 'Vui lòng nhập đầy đủ tiêu đề và nội dung cho cả tiếng Việt và tiếng Anh',
        variant: 'destructive',
      })
      return
    }

    try {
      setIsLoading(true)

      const viData: CreateArticleDto = {
        title: article.titleVi,
        excerpt: article.excerptVi,
        content: article.contentVi,
        thumbnail_url: article.thumbnail_url,
        author_id: 1,
        status: article.status,
      }

      const enData: CreateArticleDto = {
        title: article.titleEn,
        excerpt: article.excerptEn,
        content: article.contentEn,
        thumbnail_url: article.thumbnail_url,
        author_id: 1,
        status: article.status,
      }

      if (isEditing && articleId) {
        // Update both Vietnamese and English versions
        await articlesService.updateArticle(articleId, viData)
        try {
          await articlesService.updateArticleEn(articleId, enData)
        } catch (e) {
          // If English version doesn't exist, create it
          await articlesService.createArticleEn(enData)
        }
      } else {
        // Create both Vietnamese and English versions with same ID would require backend support
        // For now, create Vietnamese first, then English
        const viArticle = await articlesService.createArticle(viData)
        enData.title = article.titleEn
        await articlesService.createArticleEn(enData)
      }

      toast({
        title: 'Thành công',
        description: isEditing ? 'Cập nhật bài viết thành công' : 'Tạo bài viết thành công',
      })
      router.push('/articles/articles-management')
    } catch (error) {
      console.error('Error:', error)
      toast({
        title: 'Lỗi',
        description: 'Không thể lưu bài viết',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: keyof BilingualArticle, value: string) => {
    setArticle(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // Upload image handler
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    setUploadError(null)
    try {
      const formData = new FormData()
      formData.append('image', file)
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''
      const res = await fetch(apiUrl + '/images/upload', {
        method: 'POST',
        body: formData,
      })
      if (!res.ok) throw new Error('Upload failed')
      const data = await res.json()
      // Đảm bảo link ảnh luôn có prefix api url
      let url = ''
      if (data.url) {
        url = data.url.startsWith('http') ? data.url : apiUrl + data.url
      } else if (data.filename) {
        url = apiUrl + '/images/' + data.filename
      }
      setArticle(prev => ({ ...prev, thumbnail_url: url }))
      toast({ title: 'Upload thành công', description: 'Ảnh đã được tải lên.' })
    } catch (err) {
      setUploadError('Upload thất bại')
      toast({ title: 'Lỗi', description: 'Upload ảnh thất bại', variant: 'destructive' })
    } finally {
      setUploading(false)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Quay lại
        </Button>
        
        <h1 className="text-3xl font-bold">
          {isEditing ? 'Chỉnh sửa bài viết' : 'Viết bài viết mới'}
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {isEditing ? 'Cập nhật bài viết' : 'Tạo bài viết mới'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Vietnamese Section */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4 text-green-700">📌 Tiếng Việt</h3>
              
              <div>
                <Label htmlFor="titleVi">Tiêu đề Tiếng Việt *</Label>
                <Input
                  id="titleVi"
                  type="text"
                  value={article.titleVi}
                  onChange={(e) => handleInputChange('titleVi', e.target.value)}
                  placeholder="Nhập tiêu đề bài viết tiếng Việt..."
                  required
                />
              </div>

              <div className="mt-4">
                <Label htmlFor="excerptVi">Tóm tắt Tiếng Việt</Label>
                <Textarea
                  id="excerptVi"
                  value={article.excerptVi}
                  onChange={(e) => handleInputChange('excerptVi', e.target.value)}
                  placeholder="Nhập tóm tắt bài viết tiếng Việt..."
                  rows={2}
                />
              </div>

              <div className="mt-4">
                <Label htmlFor="contentVi">Nội dung Tiếng Việt *</Label>
                <div className="mt-2">
                  {useHtml ? (
                    <Textarea
                      id="contentVi"
                      value={article.contentVi}
                      onChange={(e) => handleInputChange('contentVi', e.target.value)}
                      placeholder="Nhập mã HTML cho nội dung bài viết tiếng Việt..."
                      rows={10}
                    />
                  ) : (
                    <ReactQuill
                      value={article.contentVi}
                      onChange={(value) => handleInputChange('contentVi', value)}
                      theme="snow"
                      placeholder="Nhập nội dung bài viết tiếng Việt..."
                      modules={{
                        toolbar: [
                          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                          ['bold', 'italic', 'underline', 'strike'],
                          [{ 'color': [] }, { 'background': [] }],
                          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                          [{ 'indent': '-1'}, { 'indent': '+1' }],
                          [{ 'align': [] }],
                          ['blockquote', 'code-block'],
                          ['link', 'image', 'video'],
                          ['clean']
                        ],
                        clipboard: {
                          matchVisual: false,
                          dangerouslyPasteHTML: true
                        }
                      }}
                      formats={[
                        'header', 'bold', 'italic', 'underline', 'strike',
                        'color', 'background', 'list', 'indent',
                        'align', 'blockquote', 'code-block', 'link', 'image', 'video'
                      ]}
                      style={{ minHeight: '200px' }}
                      preserveWhitespace={true}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* English Section */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-700">📌 English (Tiếng Anh)</h3>
              
              <div>
                <Label htmlFor="titleEn">English Title *</Label>
                <Input
                  id="titleEn"
                  type="text"
                  value={article.titleEn}
                  onChange={(e) => handleInputChange('titleEn', e.target.value)}
                  placeholder="Enter English article title..."
                  required
                />
              </div>

              <div className="mt-4">
                <Label htmlFor="excerptEn">English Excerpt</Label>
                <Textarea
                  id="excerptEn"
                  value={article.excerptEn}
                  onChange={(e) => handleInputChange('excerptEn', e.target.value)}
                  placeholder="Enter English article excerpt..."
                  rows={2}
                />
              </div>

              <div className="mt-4">
                <Label htmlFor="contentEn">English Content *</Label>
                <div className="mt-2">
                  {useHtml ? (
                    <Textarea
                      id="contentEn"
                      value={article.contentEn}
                      onChange={(e) => handleInputChange('contentEn', e.target.value)}
                      placeholder="Enter HTML code for English article content..."
                      rows={10}
                    />
                  ) : (
                    <ReactQuill
                      value={article.contentEn}
                      onChange={(value) => handleInputChange('contentEn', value)}
                      theme="snow"
                      placeholder="Enter English article content..."
                      modules={{
                        toolbar: [
                          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                          ['bold', 'italic', 'underline', 'strike'],
                          [{ 'color': [] }, { 'background': [] }],
                          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                          [{ 'indent': '-1'}, { 'indent': '+1' }],
                          [{ 'align': [] }],
                          ['blockquote', 'code-block'],
                          ['link', 'image', 'video'],
                          ['clean']
                        ],
                        clipboard: {
                          matchVisual: false,
                          dangerouslyPasteHTML: true
                        }
                      }}
                      formats={[
                        'header', 'bold', 'italic', 'underline', 'strike',
                        'color', 'background', 'list', 'indent',
                        'align', 'blockquote', 'code-block', 'link', 'image', 'video'
                      ]}
                      style={{ minHeight: '200px' }}
                      preserveWhitespace={true}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Common Fields */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">⚙️ Cài đặt chung</h3>

              <div>
                <Label htmlFor="thumbnail_url">URL ảnh thumbnail</Label>
                <div className="flex items-center gap-2 mt-2">
                  <Input
                    id="thumbnail_url"
                    type="url"
                    value={article.thumbnail_url}
                    onChange={(e) => handleInputChange('thumbnail_url', e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="flex-1"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    id="upload-thumbnail"
                    style={{ display: 'none' }}
                    onChange={handleImageUpload}
                    disabled={uploading}
                  />
                  <Button
                    type="button"
                    onClick={() => document.getElementById('upload-thumbnail')?.click()}
                    disabled={uploading}
                    variant="outline"
                  >
                    {uploading ? 'Đang tải...' : 'Upload ảnh'}
                  </Button>
                </div>
                {uploadError && <div className="text-red-500 text-sm mt-1">{uploadError}</div>}
                {article.thumbnail_url && (
                  <div className="mt-2">
                    <img src={article.thumbnail_url} alt="thumbnail" className="h-16 rounded border" />
                  </div>
                )}
              </div>

              <div className="mt-4">
                <Label htmlFor="status">Trạng thái</Label>
                <Select
                  value={article.status}
                  onValueChange={(value) => handleInputChange('status', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Bản nháp</SelectItem>
                    <SelectItem value="published">Đã xuất bản</SelectItem>
                    <SelectItem value="archived">Lưu trữ</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Toggle button for editor mode */}
              <div className="flex items-center gap-4 mt-4">
                <Button
                  type="button"
                  className={useHtml ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}
                  onClick={() => {
                    const hasComplexHTMLVi = originalContentVi && (originalContentVi.includes('<style>') || originalContentVi.includes('animation:') || originalContentVi.includes('margin:') || originalContentVi.includes('padding:'));
                    const hasComplexHTMLEn = originalContentEn && (originalContentEn.includes('<style>') || originalContentEn.includes('animation:') || originalContentEn.includes('margin:') || originalContentEn.includes('padding:'));
                    
                    if (useHtml && (hasComplexHTMLVi || hasComplexHTMLEn)) {
                      toast({
                        title: 'Không thể chuyển sang React Quill',
                        description: 'Nội dung có HTML/CSS phức tạp. Hãy chỉnh sửa ở chế độ HTML thuần.',
                        variant: 'destructive',
                      });
                      return;
                    }
                    if (isEditing && originalContentVi) {
                      setArticle(prev => ({
                        ...prev,
                        contentVi: originalContentVi,
                        contentEn: originalContentEn
                      }))
                    }
                    setUseHtml((prev) => !prev)
                  }}
                >
                  {useHtml ? 'HTML thuần' : 'React Quill'}
                </Button>
                <span className="text-muted-foreground text-sm">Chọn chế độ nhập nội dung</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                disabled={isLoading}
              >
                {isLoading 
                  ? (isEditing ? 'Đang cập nhật...' : 'Đang tạo...') 
                  : (isEditing ? 'Cập nhật bài viết' : 'Tạo bài viết')
                }
              </Button>
              
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push('/articles/articles-management')}
              >
                Hủy
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
      </main>
      <Footer />
    </>
  )
}

function LoadingFallback() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
    <div className="container mx-auto px-4 py-8">
      <div className="text-center py-12">
        <div className="text-muted-foreground">Đang tải...</div>
      </div>
    </div>
      </main>
      <Footer />
    </>
  )
}

function WriteArticlePage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <WriteArticleContent />
    </Suspense>
  )
}

export default withAuth(WriteArticlePage)
