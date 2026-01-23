import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HomeSummarySectionProps {
  id?: string;
  label: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  variant?: "light" | "cream";
}

const HomeSummarySection = ({
  id,
  label,
  title,
  description,
  ctaText,
  ctaLink,
  variant = "light",
}: HomeSummarySectionProps) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-20 ${variant === "cream" ? "bg-cream" : "bg-background"}`}
    >
      <div className="container-narrow mx-auto px-6 text-center">
        <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-3 block">
          {label}
        </span>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4 max-w-2xl mx-auto">
          {title}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
          {description}
        </p>
        <Button variant="outline" size="lg" asChild>
          <Link to={ctaLink} className="inline-flex items-center gap-2">
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HomeSummarySection;
