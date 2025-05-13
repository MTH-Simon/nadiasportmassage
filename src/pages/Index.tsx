
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import PricingSection from "@/components/PricingSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TestimonialSection />
      <TreatmentsSection />
      <PricingSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
