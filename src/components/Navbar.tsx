
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-white bg-opacity-80 shadow-md bg-blur"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/lovable-uploads/68a7f19c-23a8-4976-8d08-acec778551c2.png"
            alt="UniMate Logo"
            className="h-10 w-auto"
          />
          <span className="ml-2 text-xl font-bold text-unimate-700">
            UniMate
          </span>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-unimate-500 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-unimate-500 transition-colors">
            How It Works
          </a>
          <a href="#faq" className="text-gray-700 hover:text-unimate-500 transition-colors">
            FAQ
          </a>
          <Button className="bg-unimate-500 hover:bg-unimate-600 text-white">
            Get Early Access
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute left-0 right-0 top-full p-4 flex flex-col space-y-3 border-t">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-700 hover:text-unimate-500 transition-colors px-2 py-1"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-700 hover:text-unimate-500 transition-colors px-2 py-1"
          >
            How It Works
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-700 hover:text-unimate-500 transition-colors px-2 py-1"
          >
            FAQ
          </a>
          <Button className="bg-unimate-500 hover:bg-unimate-600 text-white w-full">
            Get Early Access
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
