import { Users, Vote, Briefcase } from "lucide-react";

const focusAreas = [
  {
    icon: Vote,
    title: "Political Participation",
    description:
      "Strengthening women's voices in governance through advocacy, voter education, and support for female candidates at all levels of government.",
  },
  {
    icon: Briefcase,
    title: "Economic Empowerment",
    description:
      "Building financial independence through skills training, entrepreneurship support, and access to markets and capital for women-led enterprises.",
  },
  {
    icon: Users,
    title: "Leadership Development",
    description:
      "Cultivating the next generation of women leaders through mentorship, capacity building, and creating networks of support and opportunity.",
  },
];

const FocusAreasSection = () => {
  return (
    <section id="focus-areas" className="section-padding bg-cream">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Focus
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            Three Pillars of Transformation
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our integrated approach addresses the systemic barriers that limit women's 
            full participation in Nigeria's social, economic, and political spheres.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-8 shadow-soft hover:shadow-card transition-shadow duration-300 border border-border"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <area.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl text-foreground mb-4">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {area.description}
              </p>

              {/* Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-gold-soft font-medium text-sm mt-6 hover:gap-3 transition-all"
              >
                Learn more
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
