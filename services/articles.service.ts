export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  thumbnail_url: string
  author_id: number
  status: string
  created_at: string
  updated_at: string
}

export interface ArticlesResponse {
  data: Article[]
  total: number
  page: number
  limit: number
}

export interface CreateArticleDto {
  title: string
  excerpt?: string
  content: string
  thumbnail_url?: string
  author_id: number
  status?: string
}

export interface UpdateArticleDto {
  title?: string
  excerpt?: string
  content?: string
  thumbnail_url?: string
  status?: string
}

import { authService } from './auth.service'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3007'

class ArticlesService {
  private async fetchApi(endpoint: string, options: RequestInit = {}) {
    const url = `${API_BASE_URL}/articles${endpoint}`
    
    // Get access token from auth service
    const accessToken = authService.getAccessToken()
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    }

    // Add Authorization header if token exists
    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`
    }

    let response = await fetch(url, {
      headers,
      credentials: 'include', // Important for cookies
      ...options,
    })

    // Handle 401 - try to refresh token
    if (response.status === 401 && accessToken) {
      try {
        // Try to refresh the token
        await authService.refresh()
        
        // Retry the request with new token
        const newAccessToken = authService.getAccessToken()
        if (newAccessToken) {
          headers['Authorization'] = `Bearer ${newAccessToken}`
          response = await fetch(url, {
            headers,
            credentials: 'include',
            ...options,
          })
        }
      } catch (refreshError) {
        // Refresh failed, clear token and redirect to login
        authService.clearAccessToken()
        if (typeof window !== 'undefined') {
          window.location.href = '/admin/login'
        }
        throw new Error('Session expired. Please login again.')
      }
    }

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }

  async getAllArticles(page: number = 1, limit: number = 10, status?: string): Promise<ArticlesResponse> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    })

    if (status) {
      params.append('status', status)
    }

    return this.fetchApi(`?${params.toString()}`)
  }

  async getArticleById(id: string): Promise<Article> {
    return this.fetchApi(`/${id}`)
  }

  async getArticleBySlug(slug: string): Promise<Article> {
    return this.fetchApi(`/slug/${slug}`)
  }

  async createArticle(data: CreateArticleDto): Promise<Article> {
    return this.fetchApi('', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async updateArticle(id: string, data: UpdateArticleDto): Promise<Article> {
    return this.fetchApi(`/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  async deleteArticle(id: string): Promise<{ message: string }> {
    return this.fetchApi(`/${id}`, {
      method: 'DELETE',
    })
  }
}

export const articlesService = new ArticlesService()
export type { Article, ArticlesResponse, CreateArticleDto, UpdateArticleDto }
