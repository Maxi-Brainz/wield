import { Mail, Phone, MapPin, Twitter, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import wieldLogo from "@/assets/wield-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="container-narrow mx-auto section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={wieldLogo} 
                alt="WIELD-I Logo" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-heading font-semibold text-lg">WIELD-I</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed max-w-md mb-6">
              Women's Inclusion, Empowerment & Leadership Development Initiative. 
              Building pathways for women's leadership and participation across Nigeria.
            </p>
            <div className="space-y-3">
              <a href="mailto:wieldinitiative22@gmail.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold-soft transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">wieldinitiative22@gmail.com</span>
              </a>
              <a href="tel:+2348161206990" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold-soft transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+234 816 120 6990</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Wuye, Abuja, Nigeria</span>
              </div>
            </div>
            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="https://twitter.com/wield_i" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold-soft/20 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5 text-primary-foreground/70 hover:text-gold-soft" />
              </a>
              <a 
                href="https://facebook.com/wieldi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold-soft/20 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-primary-foreground/70 hover:text-gold-soft" />
              </a>
              <a 
                href="https://instagram.com/wield_i" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold-soft/20 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-primary-foreground/70 hover:text-gold-soft" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-gold-soft transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-primary-foreground/70 hover:text-gold-soft transition-colors text-sm">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-primary-foreground/70 hover:text-gold-soft transition-colors text-sm">
                  Impact
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-primary-foreground/70 hover:text-gold-soft transition-colors text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-gold-soft transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold mb-6">Get Involved</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/partner" className="text-primary-foreground/70 hover:text-gold-soft transition-colors text-sm">
                  Partner With Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-gold-soft transition-colors text-sm">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-gold-soft transition-colors text-sm">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-gold-soft transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-gold-soft transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 WIELD-I. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary-foreground/60 hover:text-gold-soft transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-gold-soft transition-colors text-sm">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
