import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal, TextReveal } from "@/components/ScrollAnimations";

interface HomeSummarySectionProps {
  id?: string;
  label: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  variant?: "light" | "cream";
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
}

const HomeSummarySection = ({
  id,
  label,
  title,
  description,
  ctaText,
  ctaLink,
  variant = "light",
  image,
  imageAlt = "",
  imagePosition = "right",
}: HomeSummarySectionProps) => {
  const textContent = (
    <div className="flex flex-col justify-center">
      <ScrollReveal direction="none" delay={0}>
        <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-3 block">
          {label}
        </span>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
          <TextReveal text={title} />
        </h2>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.2}>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.35}>
        <Button variant="outline" size="lg" asChild>
          <Link to={ctaLink} className="inline-flex items-center gap-2">
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </ScrollReveal>
    </div>
  );

  const imageContent = image ? (
    <ScrollReveal direction={imagePosition === "right" ? "right" : "left"} delay={0.2}>
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-64 md:h-80 lg:h-96 object-cover"
          loading="lazy"
          width={1280}
          height={864}
        />
      </div>
    </ScrollReveal>
  ) : null;

  if (!image) {
    return (
      <section
        id={id}
        className={`py-16 md:py-20 ${variant === "cream" ? "bg-cream" : "bg-background"}`}
      >
        <div className="container-narrow mx-auto px-6 text-center">
          {textContent}
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${variant === "cream" ? "bg-cream" : "bg-background"}`}
    >
      <div className="container-narrow mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${imagePosition === "left" ? "" : ""}`}>
          {imagePosition === "left" ? (
            <>
              {imageContent}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {imageContent}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeSummarySection;
