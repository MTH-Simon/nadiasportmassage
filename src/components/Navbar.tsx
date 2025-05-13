
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-wellness-100">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a 
            href="#hero" 
            className="font-serif text-xl sm:text-2xl font-medium text-wellness-950"
            onClick={(e) => handleNavLinkClick(e, "hero")}
          >
            Serenity Spa
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#services" 
            className="text-wellness-900 hover:text-wellness-700 text-sm font-medium transition-colors"
            onClick={(e) => handleNavLinkClick(e, "services")}
          >
            Our Services
          </a>
          <a 
            href="#treatments" 
            className="text-wellness-900 hover:text-wellness-700 text-sm font-medium transition-colors"
            onClick={(e) => handleNavLinkClick(e, "treatments")}
          >
            Treatments
          </a>
          <a 
            href="#pricing" 
            className="text-wellness-900 hover:text-wellness-700 text-sm font-medium transition-colors"
            onClick={(e) => handleNavLinkClick(e, "pricing")}
          >
            Pricing
          </a>
          <a 
            href="#testimonials" 
            className="text-wellness-900 hover:text-wellness-700 text-sm font-medium transition-colors"
            onClick={(e) => handleNavLinkClick(e, "testimonials")}
          >
            About Us
          </a>
          <a 
            href="#contact" 
            className="text-wellness-900 hover:text-wellness-700 text-sm font-medium transition-colors"
            onClick={(e) => handleNavLinkClick(e, "contact")}
          >
            Contact
          </a>
          <Button 
            variant="default" 
            className="bg-wellness-600 hover:bg-wellness-700"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Book Now
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-wellness-900">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg z-50">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <a 
              href="#services" 
              className="text-wellness-900 hover:text-wellness-700 py-2 text-center" 
              onClick={(e) => handleNavLinkClick(e, "services")}
            >
              Our Services
            </a>
            <a 
              href="#treatments" 
              className="text-wellness-900 hover:text-wellness-700 py-2 text-center" 
              onClick={(e) => handleNavLinkClick(e, "treatments")}
            >
              Treatments
            </a>
            <a 
              href="#pricing" 
              className="text-wellness-900 hover:text-wellness-700 py-2 text-center" 
              onClick={(e) => handleNavLinkClick(e, "pricing")}
            >
              Pricing
            </a>
            <a 
              href="#testimonials" 
              className="text-wellness-900 hover:text-wellness-700 py-2 text-center" 
              onClick={(e) => handleNavLinkClick(e, "testimonials")}
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className="text-wellness-900 hover:text-wellness-700 py-2 text-center" 
              onClick={(e) => handleNavLinkClick(e, "contact")}
            >
              Contact
            </a>
            <Button 
              variant="default" 
              className="bg-wellness-600 hover:bg-wellness-700 w-full"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }
              }}
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
