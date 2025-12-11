import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import AboutPreview from "@/components/about-preview"
import BusinessAreas from "@/components/business-areas"
import EcosystemPreview from "@/components/ecosystem-preview"
import FeaturedProjectsMap from "@/components/featured-projects-map"
import Commitments from "@/components/commitments"
import NewsPreview from "@/components/news-preview"
import ActivityGallery from "@/components/activity-gallery"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutPreview />
        <BusinessAreas />
        <FeaturedProjectsMap />
        <EcosystemPreview />
        <Commitments />
        <ActivityGallery />
        <NewsPreview />
      </main>
      <Footer />
    </>
  )
}
