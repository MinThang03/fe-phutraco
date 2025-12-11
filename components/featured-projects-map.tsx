"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

interface ProjectLocation {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  location: string;
  locationEn: string;
  image: string;
  description: string;
  descriptionEn: string;
  mapX: number; // Position on map (0-100)
  mapY: number; // Position on map (0-100)
}
const center = { mapX: 22, mapY: 10 }; // Hà Nội (ví dụ)
const projects: ProjectLocation[] = [
  {
    id: "1",
    title: "Cao tốc Sóc Trăng - Cần Thơ",
    titleEn: "Soc Trang - Can Tho Highway",
    category: "Cầu đường",
    categoryEn: "Roads & Bridges",
    location: "Sóc Trăng - Cần Thơ",
    locationEn: "Soc Trang - Can Tho",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
    description:
      "Dự án cao tốc trọng điểm quốc gia với tổng chiều dài 50km, góp phần kết nối vùng Đồng bằng sông Cửu Long.",
    descriptionEn:
      "A key national highway project with a total length of 50km, contributing to connecting the Mekong Delta region.",
    mapX: 35,
    mapY: 89,
  },
  {
    id: "2",
    title: "Hệ thống cấp nước sạch Hưng Yên",
    titleEn: "Hung Yen Clean Water System",
    category: "Cấp thoát nước",
    categoryEn: "Water Systems",
    location: "Hưng Yên",
    locationEn: "Hung Yen",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
    description:
      "Dự án cấp nước sạch phục vụ hơn 500.000 dân cư với công suất 100.000 m³/ngày đêm.",
    descriptionEn:
      "Clean water supply project serving over 500,000 residents with capacity of 100,000 m³/day.",
    mapX: 21,
    mapY: 10,
  },
  {
    id: "3",
    title: "Khách sạn Phương Đông",
    titleEn: "Phuong Dong Hotel",
    category: "Khách sạn",
    categoryEn: "Hotels",
    location: "Hải Phòng",
    locationEn: "Hai Phong",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
    description:
      "Khách sạn 5 sao với 200 phòng nghỉ cao cấp, trung tâm hội nghị và các tiện ích đẳng cấp quốc tế.",
    descriptionEn:
      "5-star hotel with 200 luxury rooms, convention center and world-class amenities.",
    mapX: 38,
    mapY: 15,
  },
  {
    id: "4",
    title: "Khu đô thị Lương Sơn",
    titleEn: "Luong Son Urban Area",
    category: "Hạ tầng",
    categoryEn: "Infrastructure",
    location: "Hòa Bình",
    locationEn: "Hoa Binh",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
    description:
      "Khu đô thị sinh thái 227 ha với đầy đủ tiện ích: biệt thự, sân golf, resort nghỉ dưỡng cao cấp.",
    descriptionEn:
      "227-hectare eco-city with complete facilities: villas, golf course, luxury resort.",
    mapX: 25,
    mapY: 19,
  },
  {
    id: "5",
    title: "Cầu vượt nút giao thông Mỹ Đình",
    titleEn: "My Dinh Interchange Overpass",
    category: "Cầu đường",
    categoryEn: "Roads & Bridges",
    location: "Hà Nội",
    locationEn: "Hanoi",
    image:
      "https://media-cdn-v2.laodong.vn/storage/newsportal/2025/2/16/1463923/Nut-Giao-My-Thuy-29.jpg",
    description:
      "Cầu vượt quy mô lớn giúp giảm ùn tắc giao thông tại nút giao thông quan trọng của thủ đô.",
    descriptionEn:
      "Large-scale overpass helping reduce traffic congestion at a key intersection in the capital.",
    mapX: 26,
    mapY: 12,
  },
  {
    id: "6",
    title: "Nhà máy xử lý nước thải Đà Nẵng",
    titleEn: "Da Nang Wastewater Treatment",
    category: "Cấp thoát nước",
    categoryEn: "Water Systems",
    location: "Đà Nẵng",
    locationEn: "Da Nang",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80",
    description:
      "Nhà máy xử lý nước thải công nghệ châu Âu với công suất xử lý 50.000 m³/ngày đêm.",
    descriptionEn:
      "European-technology wastewater treatment plant with capacity of 50,000 m³/day.",
    mapX: 60,
    mapY: 55,
  }
];

export default function FeaturedProjectsMap() {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] =
    useState<ProjectLocation | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  return (
    <>
      <style jsx global>{`
        @keyframes dash {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -30;
          }
        }
        .animate-dash {
          stroke-dasharray: 4 6;
          stroke-dashoffset: 0;
          animation: dash 1.2s linear infinite;
        }
      `}</style>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent font-medium tracking-widest mb-4">
              {language === "vi" ? "DỰ ÁN TIÊU BIỂU" : "FEATURED PROJECTS"}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              {language === "vi"
                ? "Những công trình tự hào"
                : "Projects We're Proud Of"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === "vi"
                ? "Mỗi dự án là một minh chứng cho cam kết chất lượng và sự chuyên nghiệp của Phutraco Holding"
                : "Each project is a testament to Phutraco Holding's commitment to quality and professionalism"}
            </p>
          </div>

          {/* Map Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left: Project List */}
            <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
              <h3 className="text-xl font-bold text-foreground mb-6">
                {language === "vi"
                  ? "Trong hành trình kiến tạo hệ sinh thái du lịch, vui chơi giải trí, nghỉ dưỡng khắp ba miền đất nước."
                  : "In the journey of creating a tourism, entertainment, and resort ecosystem across the country."}
              </h3>
              <p className="text-muted-foreground mb-8">
                {language === "vi"
                  ? "Tập đoàn Sun Group đã để lại những dấu ấn đặc sắc trong từng công trình, dự án, sự kiện."
                  : "Sun Group has left distinctive marks in every project and event."}
              </p>

              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    selectedProject?.id === project.id ||
                    hoveredProjectId === project.id
                      ? "bg-accent text-white shadow-xl scale-[1.02]"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <MapPin
                      className={`w-5 h-5 mt-1 shrink-0 ${
                        selectedProject?.id === project.id ||
                        hoveredProjectId === project.id
                          ? "text-white"
                          : "text-accent"
                      }`}
                    />
                    <div>
                      <h3 className="font-bold text-base mb-1">
                        {language === "vi" ? project.title : project.titleEn}
                      </h3>
                      <p
                        className={`text-sm ${
                          selectedProject?.id === project.id ||
                          hoveredProjectId === project.id
                            ? "text-white/80"
                            : "text-muted-foreground"
                        }`}
                      >
                        {language === "vi"
                          ? project.category
                          : project.categoryEn}{" "}
                        •{" "}
                        {language === "vi"
                          ? project.location
                          : project.locationEn}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right: Interactive Vietnam Map */}
            <div className="relative order-1 lg:order-2 flex justify-end -mr-16 lg:-mr-32">
              <div className="relative w-[120%] lg:w-[140%] aspect-[2/3] overflow-visible">
                <img
                  src="/images/vnmap.png"
                  alt="Vietnam map"
                  className="absolute inset-0 w-full h-full object-contain scale-125 pointer-events-none select-none"
                />
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {projects.map((project) => (
                    <line
                      key={`line-${project.id}`}
                      x1={`${center.mapX}%`} // tâm (Hà Nội)
                      y1={`${center.mapY}%`}
                      x2={`${project.mapX}%`}
                      y2={`${project.mapY}%`}
                      stroke="#fbbf24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray="4 6" // bắt buộc
                      strokeDashoffset="0" // bắt buộc
                      className="animate-dash" // animation CSS
                      opacity="0.8"
                    />
                  ))}
                </svg>

                {/* Project Markers */}
                <div className="absolute inset-0 pointer-events-none">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="absolute pointer-events-auto"
                      style={{
                        left: `${project.mapX}%`,
                        top: `${project.mapY}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <button
                        onClick={() => setSelectedProject(project)}
                        onMouseEnter={() => setHoveredProjectId(project.id)}
                        onMouseLeave={() => setHoveredProjectId(null)}
                        className={`relative transition-all duration-300 ${
                          selectedProject?.id === project.id ||
                          hoveredProjectId === project.id
                            ? "scale-150 z-20"
                            : "scale-100 hover:scale-125 z-10"
                        }`}
                      >
                        {/* Pulsing ring for selected/hovered */}
                        {(selectedProject?.id === project.id ||
                          hoveredProjectId === project.id) && (
                          <div className="absolute inset-0 w-10 h-10 -ml-5 -mt-5">
                            <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                            <div className="absolute inset-0 rounded-full border-2 border-accent/50" />
                          </div>
                        )}

                        {/* Main marker - Building or Star icon */}
                        <div
                          className={`relative rounded-full shadow-lg cursor-pointer flex items-center justify-center transition-colors ${
                            project.location === "Hưng Yên"
                              ? "w-11 h-11"
                              : project.location === "Hà Nội"
                              ? "w-11 h-11"
                              : "w-8 h-8"
                          } ${
                            selectedProject?.id === project.id ||
                            hoveredProjectId === project.id
                              ? "bg-accent"
                              : "bg-amber-400"
                          }`}
                        >
                          <div className="flex items-center justify-center">
                            {project.location === "Hưng Yên" ? (
                              // Building icon for Hưng Yên
                              <svg
                                viewBox="0 0 24 24"
                                fill="white"
                                className="w-5 h-5"
                              >
                                <path d="M3 13h2v8H3v-8m4-8h2v16H7V5m4-2h2v18h-2V3m4 4h2v14h-2V7m4-2h2v16h-2V5z" />
                              </svg>
                            ) : project.location === "Hà Nội" ? (
                              // Red star icon for Hà Nội (capital)
                              <svg
                                viewBox="0 0 24 24"
                                fill="#ef4444"
                                className="w-6 h-6"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            ) : (
                              // Default location icon
                              <MapPin className="w-4 h-4 text-white" />
                            )}
                          </div>
                        </div>

                        {/* Location label on hover */}
                        {(selectedProject?.id === project.id ||
                          hoveredProjectId === project.id) && (
                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none">
                            {language === "vi"
                              ? project.location
                              : project.locationEn}
                          </div>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Detail Modal */}
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
              <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
                <div className="sticky top-0 bg-white border-b flex items-center justify-between p-6 z-10">
                  <div>
                    <span className="text-xs font-medium text-accent uppercase tracking-wide">
                      {language === "vi"
                        ? selectedProject.category
                        : selectedProject.categoryEn}
                    </span>
                    <h2 className="text-2xl font-bold text-foreground mt-1">
                      {language === "vi"
                        ? selectedProject.title
                        : selectedProject.titleEn}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  {/* Image */}
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={selectedProject.image}
                      alt={
                        language === "vi"
                          ? selectedProject.title
                          : selectedProject.titleEn
                      }
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4 border border-primary/20">
                      <p className="text-xs font-medium text-primary mb-1 uppercase tracking-wide">
                        {language === "vi" ? "Loại dự án" : "Project Type"}
                      </p>
                      <p className="font-bold text-foreground">
                        {language === "vi"
                          ? selectedProject.category
                          : selectedProject.categoryEn}
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl p-4 border border-accent/20">
                      <p className="text-xs font-medium text-accent mb-1 uppercase tracking-wide flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {language === "vi" ? "Địa điểm" : "Location"}
                      </p>
                      <p className="font-bold text-foreground">
                        {language === "vi"
                          ? selectedProject.location
                          : selectedProject.locationEn}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="bg-muted/50 rounded-xl p-6">
                    <h3 className="font-bold text-foreground mb-3 text-lg">
                      {language === "vi"
                        ? "Mô tả dự án"
                        : "Project Description"}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {language === "vi"
                        ? selectedProject.description
                        : selectedProject.descriptionEn}
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-4 pt-2">
                    <Button
                      asChild
                      className="flex-1 bg-primary hover:bg-primary/90 h-12"
                    >
                      <Link href="/du-an">
                        {language === "vi"
                          ? "Xem chi tiết dự án"
                          : "View Project Details"}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 h-12"
                      onClick={() => setSelectedProject(null)}
                    >
                      {language === "vi" ? "Đóng" : "Close"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 px-8 py-6 text-base"
            >
              <Link href="/du-an">
                {language === "vi" ? "Xem tất cả dự án" : "View All Projects"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
