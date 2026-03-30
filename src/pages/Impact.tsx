import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { Scale, Users, Megaphone, BookOpen, Handshake, BarChart3 } from "lucide-react";
import impactHeroImg from "@/assets/impact-hero.jpg";
import impactPartnershipsImg from "@/assets/impact-partnerships.jpg";

const impactAreas = [
  {
    icon: Scale,
    title: "Policy & Advocacy",
    points: [
      "Engagements with state and federal stakeholders on gender-responsive governance",
      "Contributions to policy dialogues and reform processes affecting women's political participation",
    ],
  },
  {
    icon: Users,
    title: "Leadership & Political Participation",
    points: [
      "Capacity building for women aspirants and emerging leaders",
      "Electoral education, mentorship, and campaign preparedness support",
    ],
  },
  {
    icon: Megaphone,
    title: "Grassroots Mobilization",
    points: [
      "Establishment of women-led advocacy clusters across multiple states",
      "Community-level organizing to strengthen women's collective voice",
    ],
  },
  {
    icon: BookOpen,
    title: "Knowledge & Thought Leadership",
    points: [
      "Development and dissemination of policy briefs on women's political inclusion and economic rights",
      "Evidence-informed advocacy grounded in research and field experience",
    ],
  },
];

const partnerCategories = [
  "Development partners",
  "Civil society organizations",
  "Government institutions and MDAs",
];

const Impact = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Women's Advocacy Impact & Policy Influence | WIELD-I Nigeria"
        description="See WIELD-I's impact in women's advocacy, policy reform, grassroots mobilization, and leadership outcomes across Nigeria."
        path="/impact"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <img
            src={impactHeroImg}
            alt="Women celebrating at a graduation ceremony in Nigeria"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={864}
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative z-10 container-narrow mx-auto text-center py-20 px-6">
            <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Impact
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-primary-foreground">
              Driving Systemic Change Through Advocacy & Action
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              WIELD-I advances women's inclusion through sustained advocacy, leadership 
              development, and community-based engagement. Our impact reflects both 
              institutional influence and grassroots change across Nigeria.
            </p>
          </div>
        </section>

        {/* Key Impact Areas */}
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
                What We Achieve
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">
                Key Impact Areas
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {impactAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-cream rounded-xl p-8 border border-border"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                    <area.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-4">
                    {area.title}
                  </h3>
                  <ul className="space-y-3">
                    {area.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="text-muted-foreground leading-relaxed flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 bg-gold-soft rounded-full mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Partnerships */}
        <section className="section-padding bg-cream">
          <div className="container-narrow mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <Handshake className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                  Strategic Partnerships
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  WIELD-I's impact is amplified through meaningful collaborations with 
                  organizations that share our commitment to women's inclusion and 
                  empowerment in Nigeria.
                </p>
                <p className="text-foreground font-medium mb-6">
                  WIELD-I has collaborated with:
                </p>
                <ul className="space-y-3">
                  {partnerCategories.map((category, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <span className="w-2 h-2 bg-gold-soft rounded-full" />
                      {category}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mt-6 italic">
                  Specific partner names will be listed once formal approvals or MOUs are confirmed.
                </p>
              </div>
              <div className="bg-background rounded-2xl p-10 border border-border">
                <p className="font-heading text-2xl text-foreground leading-relaxed">
                  "Our partnerships are built on mutual respect, shared values, and a 
                  collective commitment to advancing women's leadership across Nigeria."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Measurement */}
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            <div className="bg-primary rounded-2xl p-10 md:p-16 text-center">
              <div className="w-14 h-14 bg-gold-soft/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-7 h-7 text-gold-soft" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-6">
                Impact Measurement
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                WIELD-I is strengthening its monitoring, evaluation, and learning framework 
                to publish verified impact metrics and annual reports.
              </p>
              <div className="bg-primary-foreground/10 rounded-xl p-6 max-w-md mx-auto">
                <p className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4">
                  Coming Soon
                </p>
                <ul className="space-y-2 text-primary-foreground/90">
                  <li>Verified statistics</li>
                  <li>Annual impact reports (PDF)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Impact;
