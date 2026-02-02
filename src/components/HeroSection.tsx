import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage1 from "@/assets/hero-women.jpg";
import heroImage2 from "@/assets/hero-civic-engagement.jpg";
import heroImage3 from "@/assets/hero-leadership.jpg";

const heroImages = [heroImage1, heroImage2, heroImage3];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Images with Fade Transition */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Empowered women leaders in Nigeria - ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/75 to-navy-deep/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-6 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-soft/20 border border-gold-soft/30 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="w-2 h-2 rounded-full bg-gold-soft" />
            <span className="text-gold-soft text-sm font-medium">
              Women-led · Nigeria
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Empowering Women to Participate, 
            <span className="text-gold-soft"> Lead</span>, and Thrive
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Women's Inclusion, Empowerment & Leadership Development Initiative builds 
            pathways for women's political participation, economic independence, and 
            leadership across Nigeria.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/partner">Partner With Us</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/programs">Explore Our Work</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary-foreground/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
