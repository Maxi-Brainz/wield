import { Quote } from "lucide-react";

const QuoteSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-narrow mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <Quote className="w-12 h-12 text-gold-soft mx-auto mb-8 opacity-80" />

          {/* Quote Text */}
          <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary-foreground leading-relaxed mb-10">
            "When we invest in women's leadership, we invest in the future of our 
            communities, our nation, and generations to come. WIELD-I exists to 
            ensure no woman is left behind in Nigeria's journey toward equity."
          </blockquote>

          {/* Attribution */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gold-soft/20 border-2 border-gold-soft flex items-center justify-center mb-4">
              <span className="font-heading text-2xl text-gold-soft font-semibold">A</span>
            </div>
            <span className="text-primary-foreground font-semibold text-lg">
              Dr. Amina Okonkwo
            </span>
            <span className="text-primary-foreground/70 text-sm">
              Founder & Executive Director, WIELD-I
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
