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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="about"><AboutSection /></div>
      <WatchSection />
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
