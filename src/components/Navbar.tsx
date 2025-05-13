
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-wellness-100">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="font-serif text-xl sm:text-2xl font-medium text-wellness-950">
            Serenity Spa
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-wellness-900 hover:text-wellness-700 text-sm font-medium transition-colors">
            Our Services
          </a>
          <a href="#treatments" className="text-wellness-900 hover:text-wellness-700 text-sm font-medium transition-colors">
            Treatments
          </a>
          <a href="#pricing" className="text-wellness-900 hover:text-wellness-700 text-sm font-medium transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-wellness-900 hover:text-wellness-700 text-sm font-medium transition-colors">
            About Us
          </a>
          <a href="#contact" className="text-wellness-900 hover:text-wellness-700 text-sm font-medium transition-colors">
            Contact
          </a>
          <Button variant="default" className="bg-wellness-600 hover:bg-wellness-700">
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
            <a href="#services" className="text-wellness-900 hover:text-wellness-700 py-2 text-center" onClick={toggleMenu}>
              Our Services
            </a>
            <a href="#treatments" className="text-wellness-900 hover:text-wellness-700 py-2 text-center" onClick={toggleMenu}>
              Treatments
            </a>
            <a href="#pricing" className="text-wellness-900 hover:text-wellness-700 py-2 text-center" onClick={toggleMenu}>
              Pricing
            </a>
            <a href="#about" className="text-wellness-900 hover:text-wellness-700 py-2 text-center" onClick={toggleMenu}>
              About Us
            </a>
            <a href="#contact" className="text-wellness-900 hover:text-wellness-700 py-2 text-center" onClick={toggleMenu}>
              Contact
            </a>
            <Button variant="default" className="bg-wellness-600 hover:bg-wellness-700 w-full">
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
