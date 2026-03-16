import { Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollReveal, TextReveal, ScaleReveal } from "@/components/ScrollAnimations";
import founderImage from "@/assets/founder-amarachi.jpg";

const QuoteSection = () => {
  return (
    <section className="section-padding bg-primary overflow-hidden">
      <div className="container-narrow mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <ScaleReveal>
            <Quote className="w-12 h-12 text-gold-soft mx-auto mb-8 opacity-80" />
          </ScaleReveal>

          {/* Quote Text */}
          <ScrollReveal direction="up" delay={0.15}>
            <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary-foreground leading-relaxed mb-10">
              <TextReveal
                text={`"When we invest in women's leadership, we invest in the future of our communities, our nation, and generations to come. WIELD-I exists to ensure no woman is left behind in Nigeria's journey toward equity."`}
              />
            </blockquote>
          </ScrollReveal>

          {/* Attribution */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="flex flex-col items-center">
              <Avatar className="w-16 h-16 border-2 border-gold-soft mb-4">
                <AvatarImage src={founderImage} alt="Okeke Amarachi Evangel - Founder of WIELD-I" className="object-cover" />
                <AvatarFallback className="bg-gold-soft/20 font-heading text-2xl text-gold-soft font-semibold">O</AvatarFallback>
              </Avatar>
              <span className="text-primary-foreground font-semibold text-lg">
                Okeke Amarachi Evangel
              </span>
              <span className="text-primary-foreground/70 text-sm">
                Founder & Executive Director, WIELD-I
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
