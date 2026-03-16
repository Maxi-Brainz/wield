import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal, ScaleReveal } from "@/components/ScrollAnimations";

const PartnerSection = () => {
  return (
    <section id="partner" className="section-padding bg-cream overflow-hidden">
      <div className="container-narrow mx-auto">
        <ScaleReveal>
          <div className="bg-primary rounded-2xl p-10 md:p-16 text-center">
            {/* Header */}
            <ScrollReveal direction="none">
              <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
                Join Our Mission
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6 max-w-3xl mx-auto">
                Partner With Us to Advance Women's Inclusion in Nigeria
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto">
                Whether you're a development partner, government agency, corporate
                organization, or individual ally, there's a role for you in our work.
                Together, we can build a more equitable Nigeria.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal direction="up" delay={0.3}>
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
            </ScrollReveal>
          </div>
        </ScaleReveal>
      </div>
    </section>
  );
};

export default PartnerSection;
