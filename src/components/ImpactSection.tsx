import { CheckCircle } from "lucide-react";

const achievements = [
  "Advocated for the passage of gender-responsive legislation at state and federal levels",
  "Trained over 500 women aspirants on electoral processes and campaign management",
  "Established 25 women's advocacy clusters across 15 Nigerian states",
  "Published 12 policy briefs on women's political inclusion and economic rights",
  "Partnered with UN Women, USAID, and government ministries on gender initiatives",
];

const ImpactSection = () => {
  return (
    <section id="impact" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Impact
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Driving Systemic Change Through Advocacy & Action
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              WIELD-I has built a track record of meaningful impact through strategic 
              partnerships, evidence-based advocacy, and community-centered programming. 
              Our work has influenced policy, built capacity, and created lasting change.
            </p>

            {/* Achievement List */}
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-soft flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm leading-relaxed">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-cream rounded-2xl p-10">
              {/* Featured Stat */}
              <div className="text-center mb-8">
                <span className="font-heading text-6xl md:text-7xl text-primary font-bold block">
                  35%
                </span>
                <span className="text-muted-foreground text-lg">
                  Increase in women candidates supported by WIELD-I in 2023 elections
                </span>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-border mb-8" />

              {/* Sub Stats */}
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <span className="font-heading text-3xl text-primary font-bold block mb-1">
                    ₦2.5B
                  </span>
                  <span className="text-muted-foreground text-sm">
                    Value of economic opportunities created
                  </span>
                </div>
                <div>
                  <span className="font-heading text-3xl text-primary font-bold block mb-1">
                    120+
                  </span>
                  <span className="text-muted-foreground text-sm">
                    Women in leadership positions
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-soft/20 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
