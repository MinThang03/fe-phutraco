"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export interface NewsItem {
  id: string
  title: string
  titleEn: string
  date: string
  category: string
  categoryEn: string
  excerpt: string
  excerptEn: string
  content: string
  contentEn: string
  image: string
  author: string
  isFeatured: boolean
}

interface NewsContextType {
  news: NewsItem[]
  addNews: (item: Omit<NewsItem, "id">) => void
  updateNews: (id: string, item: Partial<NewsItem>) => void
  deleteNews: (id: string) => void
}

const defaultNews: NewsItem[] = [
  {
    id: "1",
    title: "Phutraco tham gia thi công cao tốc Sóc Trăng - Cần Thơ",
    titleEn: "Phutraco participates in Soc Trang - Can Tho highway construction",
    date: "2024-11-15",
    category: "Dự án",
    categoryEn: "Project",
    excerpt:
      "Phutraco Holding vinh dự được chọn làm đơn vị thi công một trong những dự án hạ tầng trọng điểm quốc gia.",
    excerptEn:
      "Phutraco Holding is honored to be selected as the contractor for one of the key national infrastructure projects.",
    content:
      "Phutraco Holding vinh dự được chọn làm đơn vị thi công một trong những dự án hạ tầng trọng điểm quốc gia - Cao tốc Sóc Trăng - Cần Thơ với tổng chiều dài 50km. Đây là minh chứng cho năng lực và uy tín của tập đoàn trong lĩnh vực xây dựng hạ tầng giao thông.",
    contentEn:
      "Phutraco Holding is honored to be selected as the contractor for one of the key national infrastructure projects - Soc Trang - Can Tho Highway with a total length of 50km. This is a testament to the corporation's capabilities and reputation in transport infrastructure construction.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
    author: "Ban truyền thông",
    isFeatured: true,
  },
  {
    id: "2",
    title: "Ký kết hợp tác công nghệ với Oracle Cloud và HyperG",
    titleEn: "Technology partnership signing with Oracle Cloud and HyperG",
    date: "2024-11-10",
    category: "Hợp tác",
    categoryEn: "Partnership",
    excerpt:
      "Phutraco Holding chính thức ký kết hợp tác chiến lược với Oracle Cloud và HyperG trong việc chuyển đổi số toàn diện.",
    excerptEn:
      "Phutraco Holding officially signed strategic partnership with Oracle Cloud and HyperG for comprehensive digital transformation.",
    content:
      "Phutraco Holding chính thức ký kết hợp tác chiến lược với Oracle Cloud và HyperG trong việc chuyển đổi số toàn diện cho toàn bộ hệ thống quản lý của tập đoàn.",
    contentEn:
      "Phutraco Holding officially signed a strategic partnership with Oracle Cloud and HyperG for comprehensive digital transformation of the entire group's management system.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
    author: "Ban truyền thông",
    isFeatured: false,
  },
  {
    id: "3",
    title: "Khánh thành Khu du lịch quốc tế Lương Sơn giai đoạn 1",
    titleEn: "Inauguration of Luong Son International Resort Phase 1",
    date: "2024-11-01",
    category: "Sự kiện",
    categoryEn: "Event",
    excerpt: "Khu du lịch nghỉ dưỡng quốc tế Lương Sơn với diện tích 227ha chính thức đi vào hoạt động.",
    excerptEn: "Luong Son International Resort with an area of 227ha officially opens.",
    content:
      "Khu du lịch nghỉ dưỡng quốc tế Lương Sơn với diện tích 227ha chính thức đi vào hoạt động, đánh dấu bước phát triển quan trọng của Phutraco Holding trong lĩnh vực du lịch nghỉ dưỡng.",
    contentEn:
      "Luong Son International Resort with an area of 227ha officially opens, marking an important development milestone of Phutraco Holding in the resort tourism sector.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
    author: "Ban truyền thông",
    isFeatured: false,
  },
  {
    id: "4",
    title: "Hợp tác với Cystack trong lĩnh vực an ninh mạng",
    titleEn: "Cybersecurity partnership with Cystack",
    date: "2024-10-25",
    category: "Công nghệ",
    categoryEn: "Technology",
    excerpt: "Tăng cường bảo mật thông tin với giải pháp an ninh mạng tiên tiến từ đối tác Cystack.",
    excerptEn: "Enhancing information security with advanced cybersecurity solutions from Cystack partner.",
    content:
      "Tăng cường bảo mật thông tin với giải pháp an ninh mạng tiên tiến từ đối tác Cystack, đảm bảo an toàn dữ liệu cho toàn bộ hệ thống của tập đoàn.",
    contentEn:
      "Enhancing information security with advanced cybersecurity solutions from Cystack partner, ensuring data safety for the entire group's system.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
    author: "Ban truyền thông",
    isFeatured: false,
  },
  {
    id: "5",
    title: "Ứng dụng AI trong quản lý xây dựng cùng AIUni",
    titleEn: "AI application in construction management with AIUni",
    date: "2024-10-20",
    category: "Công nghệ",
    categoryEn: "Technology",
    excerpt: "Hợp tác với AIUni đưa trí tuệ nhân tạo vào quản lý và giám sát công trình xây dựng.",
    excerptEn:
      "Partnership with AIUni to bring artificial intelligence into construction project management and supervision.",
    content:
      "Hợp tác với AIUni đưa trí tuệ nhân tạo vào quản lý và giám sát công trình xây dựng, nâng cao hiệu quả và chất lượng công trình.",
    contentEn:
      "Partnership with AIUni to bring artificial intelligence into construction project management and supervision, improving efficiency and project quality.",
    image: "/ai-artificial-intelligence-construction-site.jpg",
    author: "Ban truyền thông",
    isFeatured: false,
  },
  {
    id: "6",
    title: "Triển khai giải pháp IoT từ IRTECH",
    titleEn: "Deploying IoT solutions from IRTECH",
    date: "2024-10-15",
    category: "Công nghệ",
    categoryEn: "Technology",
    excerpt: "Ứng dụng Internet of Things trong giám sát và quản lý thiết bị thi công thông minh.",
    excerptEn: "Applying Internet of Things in smart construction equipment monitoring and management.",
    content:
      "Ứng dụng Internet of Things trong giám sát và quản lý thiết bị thi công thông minh, tối ưu hóa quy trình vận hành.",
    contentEn:
      "Applying Internet of Things in smart construction equipment monitoring and management, optimizing operational processes.",
    image: "/iot-sensors-construction-equipment.jpg",
    author: "Ban truyền thông",
    isFeatured: false,
  },
]

const NewsContext = createContext<NewsContextType | undefined>(undefined)

export function NewsProvider({ children }: { children: ReactNode }) {
  const [news, setNews] = useState<NewsItem[]>(defaultNews)

  useEffect(() => {
    const savedNews = localStorage.getItem("phutraco_news")
    if (savedNews) {
      setNews(JSON.parse(savedNews))
    }
  }, [])

  const saveNews = (newsItems: NewsItem[]) => {
    setNews(newsItems)
    localStorage.setItem("phutraco_news", JSON.stringify(newsItems))
  }

  const addNews = (item: Omit<NewsItem, "id">) => {
    const newItem = { ...item, id: Date.now().toString() }
    saveNews([newItem, ...news])
  }

  const updateNews = (id: string, item: Partial<NewsItem>) => {
    saveNews(news.map((n) => (n.id === id ? { ...n, ...item } : n)))
  }

  const deleteNews = (id: string) => {
    saveNews(news.filter((n) => n.id !== id))
  }

  return <NewsContext.Provider value={{ news, addNews, updateNews, deleteNews }}>{children}</NewsContext.Provider>
}

export function useNews() {
  const context = useContext(NewsContext)
  if (!context) {
    throw new Error("useNews must be used within a NewsProvider")
  }
  return context
}
