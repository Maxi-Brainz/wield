import { Mail, Phone, MapPin, Twitter, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import wieldLogo from "@/assets/wield-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-primary-foreground overflow-hidden">
      <div className="container-narrow mx-auto section-padding">
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12" staggerDelay={0.12}>
          {/* Brand Column */}
          <StaggerItem className="lg:col-span-2">
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
              <a href="mailto:info@wieldinitiative.org" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold-soft transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@wieldinitiative.org</span>
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
              <a href="https://twitter.com/wield_i" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold-soft/20 transition-colors" aria-label="Follow us on Twitter">
                <Twitter className="w-5 h-5 text-primary-foreground/70 hover:text-gold-soft" />
              </a>
              <a href="https://facebook.com/wieldi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold-soft/20 transition-colors" aria-label="Follow us on Facebook">
                <Facebook className="w-5 h-5 text-primary-foreground/70 hover:text-gold-soft" />
              </a>
              <a href="https://instagram.com/wield_i" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold-soft/20 transition-colors" aria-label="Follow us on Instagram">
                <Instagram className="w-5 h-5 text-primary-foreground/70 hover:text-gold-soft" />
              </a>
            </div>
          </StaggerItem>

          {/* Quick Links */}
          <StaggerItem>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/programs", label: "Programs" },
                { to: "/impact", label: "Impact" },
                { to: "/team", label: "Our Team" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-primary-foreground/70 hover:text-gold-soft transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* Get Involved */}
          <StaggerItem>
            <h4 className="font-semibold mb-6">Get Involved</h4>
            <ul className="space-y-3">
              <li><Link to="/partner" className="text-primary-foreground/70 hover:text-gold-soft transition-colors text-sm">Partner With Us</Link></li>
              <li><Link to="/donate" className="text-primary-foreground/70 hover:text-gold-soft transition-colors text-sm">Donate</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/70 hover:text-gold-soft transition-colors text-sm">Volunteer</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/70 hover:text-gold-soft transition-colors text-sm">Contact</Link></li>
            </ul>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Bar */}
        <ScrollReveal direction="up">
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col items-center gap-4">
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
              <p className="text-primary-foreground/60 text-sm">
                © 2026 WIELD-I. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-primary-foreground/60 hover:text-gold-soft transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-primary-foreground/60 hover:text-gold-soft transition-colors text-sm">Terms of Use</a>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm">
              Made with ❤️ by <a href="https://inspireddevs.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gold-soft hover:underline transition-colors">Inspired Devs</a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
