import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone, Search, Menu, X } from "lucide-react";
import logo from "@/assets/Chitwan eye hospital logo 1.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  const isActive = (path: string) => currentPage === path;

  const navLinkClass = (path: string) =>
    `text-base font-medium transition-all duration-200 hover:text-accent ${
      isActive(path)
        ? "text-accent font-semibold border-b-2 border-accent pb-1"
        : "text-primary-foreground"
    }`;

  const mobileNavLinkClass = (path: string) =>
    `text-base font-medium transition-colors ${
      isActive(path) ? "font-bold text-accent" : ""
    }`;

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* --- Top Info Bar --- */}
      <div className="bg-white text-primary py-2.5 border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center justify-center sm:justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-primary flex-shrink-0" />
            <span className="font-semibold">Emergency:</span>
            <a
              href="tel:+97756493780"
              className="text-blue-600 hover:underline font-medium"
            >
              +977 56 493780
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-primary flex-shrink-0" />
            <span className="font-semibold">Work Hour:</span>
            <span className="font-medium">09:00 - 20:00 Everyday</span>
          </div>

          <div className="hidden md:flex  items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span className="font-semibold ">Location:</span>
            <span className="font-medium">Bharatpur-10, Chitwan</span>
          </div>
        </div>
      </div>

      {/* --- Main Nav Bar --- */}
      <div className="bg-primary text-primary-foreground py-3 relative">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="CEH logo"
              className="h-16 md:h-24 hover:opacity-90"
            />
          </a>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:hidden">
            {/* <Button variant="ghost" size="icon" className="hover:bg-primary/80">
              <Search className="h-5 w-5" />
            </Button> */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-primary-foreground hover:bg-primary/80"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className={navLinkClass("/")}>
              Home
            </a>
            <a href="/about" className={navLinkClass("/about")}>
              About us
            </a>
            <a href="/services" className={navLinkClass("/services")}>
              Services
            </a>
            <a href="/doctors" className={navLinkClass("/doctors")}>
              Our Teams
            </a>
            <a href="/contact" className={navLinkClass("/contact")}>
              Contact
            </a>
          </nav>

          {/* Desktop Appointment */}
          <div className="hidden md:flex items-center gap-3">
            {/* <Button variant="ghost" size="icon" className="hover:bg-primary/80">
              <Search className="h-5 w-5" />
            </Button> */}
            <a href="/appointment">
              <Button
                size="lg"
                className="flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-6 py-2.5 font-semibold text-sm hover:bg-accent/90 transition-all shadow-md hover:shadow-lg"
              >
                Book Appointment
              </Button>
            </a>
          </div>
        </div>

        {/* --- Mobile Dropdown Menu --- */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full bg-white text-primary shadow-lg flex flex-col items-center py-6 space-y-4 animate-fadeIn">
            <nav className="flex flex-col items-center gap-4 text-base font-medium">
              <a
                href="/"
                className={mobileNavLinkClass("/")}
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="/about"
                className={mobileNavLinkClass("/about")}
                onClick={toggleMenu}
              >
                About us
              </a>
              <a
                href="/services"
                className={mobileNavLinkClass("/services")}
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="/doctors"
                className={mobileNavLinkClass("/doctors")}
                onClick={toggleMenu}
              >
                Our Teams
              </a>
              <a
                href="/contact"
                className={mobileNavLinkClass("/contact")}
                onClick={toggleMenu}
              >
                Contact
              </a>
            </nav>
            <a href="/appointment" onClick={toggleMenu}>
              <Button className="mt-2 bg-primary text-primary-foreground rounded-full px-8 py-2.5 hover:bg-primary/90 font-semibold shadow-md">
                Book Appointment
              </Button>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
