import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WatchSection from "@/components/WatchSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import RepertoireSection from "@/components/RepertoireSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WeddingTimeline from "@/components/WeddingTimeline";
import { usePageMeta, breadcrumb } from "@/lib/seo";

const meta = {
  title: "Max Mac | Sydney Wedding Singer, Acoustic Musician, DJ & MC",
  description: "Looking for a Sydney wedding singer, acoustic guitarist, DJ and MC? Max Mac brings live acoustic music and dance-floor DJ entertainment together for your wedding day. View videos, explore packages and enquire for availability.",
  path: "/",
  jsonLd: [breadcrumb([{ name: "Home", path: "/" }])],
};

const Index = () => {
  usePageMeta(meta);
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="about"><AboutSection /></div>
      <WatchSection />
      <WeddingTimeline />
      <div id="services"><ServicesSection /></div>
      <div id="reviews"><ReviewsSection /></div>
      <RepertoireSection />
      <div id="faq"><FAQSection /></div>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
