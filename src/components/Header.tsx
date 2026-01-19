import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import wieldLogo from "@/assets/wield-logo.jpeg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Our Work", href: "/#focus-areas" },
  { label: "Impact", href: "/#impact" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      if (location.pathname === "/") {
        // Already on home, just scroll
        const element = document.querySelector(href.substring(1));
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  const renderNavLink = (link: { label: string; href: string }) => {
    if (link.href === "/" || link.href === "/contact") {
      return (
        <Link
          key={link.label}
          to={link.href}
          className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          {link.label}
        </Link>
      );
    }
    return (
      <Link
        key={link.label}
        to={link.href}
        className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
        onClick={() => handleNavClick(link.href)}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-narrow mx-auto">
        <div className="flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={wieldLogo} 
              alt="WIELD-I Logo" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <span className="font-heading font-semibold text-foreground text-lg">WIELD-I</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => renderNavLink(link))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="gold" size="lg">
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => {
                const isPageLink = link.href === "/" || link.href === "/contact";
                return (
                  <Link
                    key={link.label}
                    to={isPageLink ? link.href : link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (!isPageLink && location.pathname === "/") {
                        const element = document.querySelector(link.href.substring(1));
                        element?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button variant="gold" size="lg" className="mt-2">
                Donate Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
