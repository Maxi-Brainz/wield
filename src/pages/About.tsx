import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Users, Scale, Handshake, HeartHandshake, Target, Eye, Heart } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Grassroots Mobilization",
    description: "We work directly with women at the community level, building networks of support and creating platforms for collective action. Our grassroots approach ensures that the voices of women from all backgrounds are heard and amplified.",
  },
  {
    icon: Scale,
    title: "Policy Advocacy",
    description: "WIELD-I engages with government institutions, legislators, and policymakers to advocate for gender-responsive legislation and governance reforms. We contribute to policy dialogues that shape the future of women's rights in Nigeria.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description: "We collaborate with civil society organizations, development partners, government agencies, and international bodies to maximize our impact and ensure sustainability of our programs.",
  },
  {
    icon: HeartHandshake,
    title: "Leadership Development",
    description: "Through mentorship, training, and sustained support, we nurture the next generation of women leaders who will drive change in their communities and beyond.",
  },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To advance gender equality and women's empowerment through evidence-informed advocacy, capacity building, and strategic partnerships that create lasting systemic change across Nigeria.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "A Nigeria where every woman has equal opportunity to lead, participate fully in governance, achieve economic independence, and contribute meaningfully to national development.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Inclusion, integrity, accountability, and collaboration guide everything we do. We believe in the power of collective action and the importance of amplifying women's voices at every level.",
  },
];

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="section-padding bg-primary text-primary-foreground">
            <div className="container-narrow mx-auto text-center">
              <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
                About WIELD-I
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                A Trusted Voice for Women's Rights and Leadership in Nigeria
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                The Women's Inclusion, Empowerment & Leadership Development Initiative is a 
                women-led, non-profit, and non-political organization dedicated to advancing 
                gender equality across Nigeria.
              </p>
            </div>
          </section>

          {/* Our Story */}
          <section className="section-padding bg-background">
            <div className="container-narrow mx-auto">
              <div className="max-w-3xl mx-auto">
                <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
                  Our Story
                </span>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8 leading-tight">
                  Founded on Principles of Inclusion and Equity
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    WIELD-I was established to address the persistent barriers that limit women's 
                    full participation in Nigeria's social, economic, and political spheres. We 
                    recognized that meaningful change requires a comprehensive approach—one that 
                    combines grassroots mobilization with policy advocacy and institutional engagement.
                  </p>
                  <p>
                    Our work is grounded in evidence and informed by the lived experiences of women 
                    across Nigeria. We partner with communities, civil society organizations, government 
                    agencies, and international development partners to create sustainable pathways 
                    for women's advancement.
                  </p>
                  <p>
                    Today, WIELD-I operates across multiple states in Nigeria, working with women 
                    aspirants, community leaders, policymakers, and development stakeholders to build 
                    a more equitable society where every woman can lead, thrive, and contribute to 
                    national development.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mission, Vision, Values */}
          <section className="section-padding bg-cream">
            <div className="container-narrow mx-auto">
              <div className="text-center mb-16">
                <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
                  What Drives Us
                </span>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground">
                  Mission, Vision & Values
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {values.map((item, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-xl p-8 border border-border text-center"
                  >
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-xl text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Approach */}
          <section className="section-padding bg-background">
            <div className="container-narrow mx-auto">
              <div className="text-center mb-16">
                <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
                  How We Work
                </span>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                  Our Approach
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  WIELD-I employs an integrated, evidence-informed approach that addresses 
                  systemic barriers through four interconnected pillars of work.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {pillars.map((pillar, index) => (
                  <div
                    key={index}
                    className="bg-cream rounded-xl p-8 border border-border"
                  >
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                      <pillar.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-xl text-foreground mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quote Section */}
          <section className="section-padding bg-primary">
            <div className="container-narrow mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <blockquote className="font-heading text-2xl md:text-3xl text-primary-foreground leading-relaxed mb-10">
                  "When we invest in women's leadership, we invest in the future of our 
                  communities, our nation, and generations to come. WIELD-I exists to 
                  ensure no woman is left behind in Nigeria's journey toward equity."
                </blockquote>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gold-soft/20 border-2 border-gold-soft flex items-center justify-center mb-4">
                    <span className="font-heading text-2xl text-gold-soft font-semibold">O</span>
                  </div>
                  <span className="text-primary-foreground font-semibold text-lg">
                    Okeke Amarachi Evangel
                  </span>
                  <span className="text-primary-foreground/70 text-sm">
                    Founder & Executive Director, WIELD-I
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
