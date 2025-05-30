
import { Button } from "@/components/ui/button";
import { safeLog } from "@/utils/logger";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      safeLog.info("Scrolled to contact section");
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      safeLog.info("Scrolled to services section");
    }
  };

  return (
    <section id="hero" className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop')"
    }} />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif font-medium mb-6">
          NATURAL BALANCE
        </h1>
        <p className="text-white text-lg md:text-xl lg:text-2xl font-serif mb-8 tracking-wide uppercase">
          PURE RELAXATION - THERAPY - WELL-BEING
        </p>
        <p className="text-white/90 mb-10 max-w-2xl mx-auto">
          Experience the ultimate in relaxation and healing. I provide personalized treatments to restore your mind, body, and spirit with professional, caring attention tailored just for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-wellness-700 hover:bg-wellness-800 text-white px-8 py-6" onClick={scrollToContact}>
            Book Appointment
          </Button>
          <Button variant="outline" onClick={scrollToServices} className="border-white text-white px-8 py-6 bg-transparent">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
