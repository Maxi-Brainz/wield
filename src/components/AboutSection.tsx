import { Users, Scale, Handshake, HeartHandshake } from "lucide-react";

const impactHighlights = [
  {
    icon: Users,
    title: "Grassroots Mobilization",
    description: "Strengthening women's networks and building capacity at the community level to drive inclusive change.",
  },
  {
    icon: Scale,
    title: "Policy Advocacy",
    description: "Engaging with government and stakeholders to advance gender-responsive legislation and governance reforms.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description: "Collaborating with civil society, development partners, and government institutions for lasting impact.",
  },
  {
    icon: HeartHandshake,
    title: "Leadership Development",
    description: "Nurturing the next generation of women leaders through mentorship, training, and sustained support.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text */}
          <div>
            <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
              Who We Are
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              A Trusted Voice for Women's Rights and Leadership in Nigeria
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Women's Inclusion, Empowerment & Leadership Development Initiative 
                (WIELD-I) is a women-led, non-profit, and non-political organization 
                dedicated to advancing gender equality, women's political participation, 
                and economic empowerment across Nigeria.
              </p>
              <p>
                Founded on the principles of inclusion and equity, we work at the 
                intersection of policy advocacy, capacity building, and grassroots 
                mobilization to create lasting systemic change for women and girls.
              </p>
              <p>
                Our evidence-informed approach and sustained engagement with government, 
                civil society, and development stakeholders position us as a credible 
                voice in Nigeria's gender and governance ecosystem.
              </p>
            </div>
          </div>

          {/* Right Column - Impact Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {impactHighlights.map((highlight, index) => (
              <div 
                key={index} 
                className={`rounded-lg p-6 ${
                  index === 3 ? 'bg-primary' : 'bg-cream'
                }`}
              >
                <highlight.icon 
                  className={`w-8 h-8 mb-4 ${
                    index === 3 ? 'text-gold-soft' : 'text-primary'
                  }`} 
                />
                <h3 
                  className={`font-heading text-lg font-semibold mb-2 ${
                    index === 3 ? 'text-primary-foreground' : 'text-foreground'
                  }`}
                >
                  {highlight.title}
                </h3>
                <p 
                  className={`text-sm leading-relaxed ${
                    index === 3 ? 'text-primary-foreground/80' : 'text-muted-foreground'
                  }`}
                >
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
