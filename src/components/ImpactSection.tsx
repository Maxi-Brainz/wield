import { ArrowRight, Scale, Users, Megaphone, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const impactHighlights = [
  {
    icon: Scale,
    title: "Policy & Advocacy",
    description: "Engaging state and federal stakeholders on gender-responsive governance and reform processes.",
  },
  {
    icon: Users,
    title: "Leadership Development",
    description: "Building capacity for women aspirants through mentorship and campaign preparedness support.",
  },
  {
    icon: Megaphone,
    title: "Grassroots Mobilization",
    description: "Establishing women-led advocacy clusters to strengthen collective voice at community level.",
  },
  {
    icon: BookOpen,
    title: "Thought Leadership",
    description: "Developing policy briefs on women's political inclusion grounded in research and field experience.",
  },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Impact
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 leading-tight">
            Driving Systemic Change Through Advocacy & Action
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            WIELD-I advances women's inclusion through sustained advocacy, leadership 
            development, and community-based engagement. Our work reflects both 
            institutional influence and grassroots change across Nigeria.
          </p>
        </div>

        {/* Impact Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactHighlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-cream rounded-xl p-6 border border-border text-center"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA to Full Impact Page */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/impact" className="inline-flex items-center gap-2">
              View Our Full Impact
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
