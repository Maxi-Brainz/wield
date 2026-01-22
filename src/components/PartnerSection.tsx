import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PartnerSection = () => {
  return (
    <section id="partner" className="section-padding bg-cream">
      <div className="container-narrow mx-auto">
        <div className="bg-primary rounded-2xl p-10 md:p-16 text-center">
          {/* Header */}
          <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
            Join Our Mission
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6 max-w-3xl mx-auto">
            Partner With Us to Advance Women's Inclusion in Nigeria
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you're a development partner, government agency, corporate 
            organization, or individual ally, there's a role for you in our work. 
            Together, we can build a more equitable Nigeria.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group" asChild>
              <Link to="/partner">
                Become a Partner
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-10 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm mb-6">
              Trusted by leading development organizations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
              <span className="text-primary-foreground font-semibold">UN Women</span>
              <span className="text-primary-foreground/40">•</span>
              <span className="text-primary-foreground font-semibold">USAID</span>
              <span className="text-primary-foreground/40">•</span>
              <span className="text-primary-foreground font-semibold">Ford Foundation</span>
              <span className="text-primary-foreground/40">•</span>
              <span className="text-primary-foreground font-semibold">EU Delegation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
