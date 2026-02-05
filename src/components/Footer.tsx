import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/Chitwan eye hospital logo 1.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="Chitwan Eye Hospital Logo"
                className="h-24 w-auto transition-opacity hover:opacity-80"
              />
            </a>
            <p className="text-sm text-primary-foreground/80 mb-4 leading-relaxed">
              Leading the way in medical excellence, caring for life.
            </p>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-white/20 h-9 w-9"
              >
                <Linkedin className="h-4 w-4" />
              </Button>

              {/* FAcebook Icon Part */}
              <a
                href="https://www.facebook.com/chitwaneye/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:bg-white/20 hover:text-accent h-10 w-10 transition-all hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
              </a>

              {/* Instagram Icon Part  */}
              <a
                href="https://www.facebook.com/chitwaneye/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:bg-white/20 hover:text-accent h-10 w-10 transition-all hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm">
              Important Links
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a
                  href="appointment"
                  className="hover:text-accent transition-colors"
                >
                  Appointment
                </a>
              </li>
              <li>
                <a
                  href="doctors"
                  className="hover:text-accent transition-colors"
                >
                  Doctors
                </a>
              </li>
              <li>
                <a
                  href="services"
                  className="hover:text-accent transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="about" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Call: (+977) 56490799, (+977) 56493780</li>
              <li>Email: chitwaneyehospital@gmail.com</li>
              <li>Address: Bharatpur-10, Chitwan, Nepal</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm">
              Newsletter
            </h4>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-white/60"
              />
              <Button variant="accent">→</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2025 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
