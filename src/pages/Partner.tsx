import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { 
  Handshake, 
  Target, 
  Shield, 
  TrendingUp, 
  Users, 
  Building2, 
  Landmark, 
  Briefcase,
  DollarSign,
  Settings,
  Lightbulb,
  ArrowRight,
  Mail,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";

const whyPartnerReasons = [
  {
    icon: Target,
    title: "Strategic Focus",
    description: "Our work is evidence-informed and aligned with national and international frameworks on women's inclusion and empowerment.",
  },
  {
    icon: Shield,
    title: "Institutional Credibility",
    description: "WIELD-I operates with transparency, accountability, and a commitment to measurable outcomes.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "We have demonstrated impact in policy advocacy, leadership development, and grassroots mobilization across Nigeria.",
  },
  {
    icon: Users,
    title: "Grassroots Reach",
    description: "Our network extends to communities across multiple states, ensuring programs reach those who need them most.",
  },
];

const partnershipTypes = [
  {
    icon: Building2,
    title: "Development Partners",
    description: "Collaborate on programs that advance women's political participation, economic empowerment, and leadership development.",
    examples: ["Joint program implementation", "Research partnerships", "Capacity building initiatives"],
  },
  {
    icon: Landmark,
    title: "Government Agencies",
    description: "Partner on policy advocacy, gender mainstreaming, and initiatives that strengthen women's inclusion in governance.",
    examples: ["Policy dialogue facilitation", "Technical advisory support", "Gender-responsive programming"],
  },
  {
    icon: Briefcase,
    title: "Corporate Organizations",
    description: "Engage through CSR initiatives, sponsorships, and strategic partnerships that align with your ESG commitments.",
    examples: ["CSR program partnerships", "Skills development sponsorship", "Event co-hosting"],
  },
  {
    icon: Handshake,
    title: "Civil Society Organizations",
    description: "Join our network of organizations working toward gender equality and women's empowerment across Nigeria.",
    examples: ["Coalition building", "Joint advocacy campaigns", "Knowledge sharing"],
  },
];

const supportOptions = [
  {
    icon: DollarSign,
    title: "Financial Support",
    description: "Provide grants, donations, or sponsorships to support our programs and operations.",
    items: [
      "Program-specific grants",
      "Unrestricted organizational support",
      "Event sponsorships",
      "Scholarship funding for women leaders",
    ],
  },
  {
    icon: Settings,
    title: "Programmatic Support",
    description: "Partner on the design, implementation, or evaluation of programs.",
    items: [
      "Joint program design",
      "Implementation partnerships",
      "Monitoring & evaluation support",
      "Community engagement initiatives",
    ],
  },
  {
    icon: Lightbulb,
    title: "Technical Support",
    description: "Contribute expertise, resources, or platforms to strengthen our work.",
    items: [
      "Pro-bono professional services",
      "Technology and digital tools",
      "Training and capacity building",
      "Research and knowledge products",
    ],
  },
];

const Partner = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Partner With WIELD-I | NGO Collaboration in Nigeria"
        description="Join WIELD-I as a development partner, donor, or collaborator advancing women's leadership and empowerment across Nigeria."
        path="/partner"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-narrow mx-auto text-center">
            <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
              Collaborate With Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Partner With WIELD-I
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
              Join us in advancing women's inclusion, empowerment, and leadership development 
              across Nigeria. Together, we can drive systemic change and build pathways for 
              women's leadership at every level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact" className="inline-flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Partner With Us
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Request Our Strategy Deck
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
                Why WIELD-I
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                Why Partner With Us
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                WIELD-I offers partners a trusted, experienced, and strategically positioned 
                organization with deep roots in Nigeria's gender and governance ecosystem.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyPartnerReasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-cream rounded-xl p-6 border border-border text-center"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Partnerships */}
        <section className="section-padding bg-cream">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
                Collaboration Models
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                Types of Partnerships
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We work with a diverse range of stakeholders, tailoring our partnerships 
                to align with your organizational goals and our shared commitment to 
                women's empowerment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-8 border border-border"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <type.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl text-foreground mb-2">
                        {type.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {type.description}
                      </p>
                    </div>
                  </div>
                  <div className="ml-16">
                    <p className="text-foreground text-sm font-medium mb-2">Examples:</p>
                    <ul className="space-y-1">
                      {type.examples.map((example, exIndex) => (
                        <li
                          key={exIndex}
                          className="text-muted-foreground text-sm flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-gold-soft rounded-full" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
                Ways to Support
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                Support Options
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                There are multiple ways to contribute to WIELD-I's mission. Choose the 
                support model that best aligns with your organization's capacity and goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-cream rounded-xl p-8 border border-border"
                >
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <option.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-3">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {option.description}
                  </p>
                  <ul className="space-y-2">
                    {option.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-foreground text-sm flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-gold-soft rounded-full mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-primary">
          <div className="container-narrow mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-6">
              Ready to Make an Impact Together?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you're a donor, development partner, government agency, or corporate 
              organization, we welcome the opportunity to explore how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Partner With Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Request Our Strategy Deck
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partner;
