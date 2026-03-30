import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { Vote, Briefcase, Users, GraduationCap, Megaphone, Network, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import programPoliticalImg from "@/assets/program-political.jpg";
import programEconomicImg from "@/assets/program-economic.jpg";
import programLeadershipImg from "@/assets/program-leadership.jpg";

const programImages = [programPoliticalImg, programEconomicImg, programLeadershipImg];
const programImageAlts = [
  "Women at a voter education and civic engagement event in Nigeria",
  "Women in a business skills and entrepreneurship training workshop",
  "Woman speaking at a leadership conference podium",
];

const programAreas = [
  {
    icon: Vote,
    title: "Political Participation",
    description: "Strengthening women's voices in governance through advocacy, voter education, and support for female candidates at all levels of government.",
    activities: [
      "Electoral education and voter sensitization campaigns",
      "Training and mentorship for women political aspirants",
      "Advocacy for gender-responsive electoral reforms",
      "Support for women candidates during election cycles",
      "Post-election leadership transition support",
    ],
  },
  {
    icon: Briefcase,
    title: "Economic Empowerment",
    description: "Building financial independence through skills training, entrepreneurship support, and access to markets and capital for women-led enterprises.",
    activities: [
      "Vocational and skills development training",
      "Business development and entrepreneurship support",
      "Financial literacy and access to capital programs",
      "Market linkages for women-owned businesses",
      "Cooperative formation and strengthening",
    ],
  },
  {
    icon: Users,
    title: "Leadership Development",
    description: "Cultivating the next generation of women leaders through mentorship, capacity building, and creating networks of support and opportunity.",
    activities: [
      "Leadership training and executive education",
      "Mentorship programs connecting emerging and established leaders",
      "Peer learning networks and communities of practice",
      "Public speaking and advocacy skills development",
      "Leadership placement and advancement support",
    ],
  },
];

const crossCuttingPrograms = [
  {
    icon: Megaphone,
    title: "Policy Advocacy",
    description: "Engaging with policymakers and institutions to advance gender-responsive legislation and governance frameworks at state and national levels.",
  },
  {
    icon: GraduationCap,
    title: "Capacity Building",
    description: "Strengthening the skills and knowledge of women, organizations, and institutions to effectively advance women's inclusion and empowerment objectives.",
  },
  {
    icon: Network,
    title: "Coalition Building",
    description: "Creating and strengthening networks of women's organizations, civil society groups, and allies working toward shared goals.",
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Women Leadership Programs & Advocacy | WIELD-I Nigeria"
        description="Explore WIELD-I's programs in political participation, economic empowerment, and leadership capacity building for Nigerian women."
        path="/programs"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-narrow mx-auto text-center">
            <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Programs
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Three Pillars of Transformation
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Our integrated approach addresses the systemic barriers that limit women's 
              full participation in Nigeria's social, economic, and political spheres.
            </p>
          </div>
        </section>

        {/* Core Program Areas */}
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
                Core Focus Areas
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                What We Do
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                WIELD-I's programs are designed to create lasting change across three 
                interconnected areas that are fundamental to women's empowerment.
              </p>
            </div>

            <div className="space-y-12">
              {programAreas.map((program, index) => (
                <div
                  key={index}
                  className="bg-cream rounded-2xl p-8 md:p-10 border border-border"
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                        <program.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <h3 className="font-heading text-2xl text-foreground mb-4">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">
                        Key Activities
                      </h4>
                      <ul className="space-y-3">
                        {program.activities.map((activity, actIndex) => (
                          <li
                            key={actIndex}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 bg-gold-soft rounded-full mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Cutting Programs */}
        <section className="section-padding bg-cream">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
                Cross-Cutting Themes
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                Integrated Approaches
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                These cross-cutting themes are woven throughout all our programs, 
                ensuring comprehensive and sustainable impact.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {crossCuttingPrograms.map((program, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-8 border border-border text-center"
                >
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <program.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-4">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {program.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
                  Our Methodology
                </span>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                  Evidence-Informed, Community-Centered
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    All WIELD-I programs are designed based on rigorous research and the 
                    lived experiences of women in our target communities. We believe that 
                    sustainable change must be rooted in local contexts and driven by 
                    community ownership.
                  </p>
                  <p>
                    We work closely with local partners, government institutions, and 
                    international development organizations to ensure our programs are 
                    aligned with national priorities and global best practices.
                  </p>
                  <p>
                    Our commitment to transparency and accountability means that we 
                    continuously monitor and evaluate our programs, learning and adapting 
                    to maximize our impact.
                  </p>
                </div>
              </div>
              <div className="bg-cream rounded-2xl p-10 border border-border">
                <h3 className="font-heading text-xl text-foreground mb-6">
                  Program Principles
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gold-soft rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">
                      Community-centered design and implementation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gold-soft rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">
                      Evidence-informed decision making
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gold-soft rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">
                      Partnerships for sustainability and scale
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gold-soft rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">
                      Transparency and accountability in all operations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gold-soft rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">
                      Adaptive learning and continuous improvement
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-narrow mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-6">
              Support Our Programs
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Partner with us to extend the reach and impact of our programs. Together, 
              we can create pathways for women's leadership across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" asChild>
                <Link to="/partner" className="inline-flex items-center gap-2">
                  Become a Partner
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
