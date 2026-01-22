import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-women.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Empowered women leaders in Nigeria"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/75 to-navy-deep/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-6 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-soft/20 border border-gold-soft/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold-soft" />
            <span className="text-gold-soft text-sm font-medium">
              Women-led · Nigeria
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
            Empowering Women to Lead, 
            <span className="text-gold-soft"> Transform</span>, and Thrive
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl">
            Women's Inclusion, Empowerment & Leadership Development Initiative builds 
            pathways for women's political participation, economic independence, and 
            leadership across Nigeria.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/partner">Partner With Us</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/#focus-areas">Explore Our Work</Link>
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
