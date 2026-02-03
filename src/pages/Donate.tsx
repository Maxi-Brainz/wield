import { Heart, Users, Building2, Wrench, Clock, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";

const whySupportMatters = [
  {
    icon: Users,
    title: "Grassroots Mobilization",
    description: "Your support enables us to reach women in underserved communities, building capacity for civic engagement and leadership."
  },
  {
    icon: Building2,
    title: "Policy Advocacy",
    description: "We work with government institutions to advance gender-responsive policies that create lasting structural transformation."
  },
  {
    icon: Heart,
    title: "Community Impact",
    description: "Every contribution strengthens our ability to mentor emerging women leaders and amplify their voices in decision-making spaces."
  }
];

const supportOptions = [
  {
    icon: Users,
    title: "Program Sponsorship",
    description: "Sponsor specific programs such as leadership training workshops, policy advocacy campaigns, or community mobilization initiatives.",
    items: [
      "Leadership development cohorts",
      "Civic education workshops",
      "Mentorship programs",
      "Community outreach initiatives"
    ]
  },
  {
    icon: Building2,
    title: "Institutional & Development Support",
    description: "Partner with us as a development organization, foundation, or government agency to scale our impact across Nigeria.",
    items: [
      "Multi-year program funding",
      "Capacity building grants",
      "Research and documentation support",
      "Monitoring and evaluation partnerships"
    ]
  },
  {
    icon: Wrench,
    title: "Technical & In-Kind Support",
    description: "Contribute expertise, resources, or services that strengthen our organizational capacity and program delivery.",
    items: [
      "Pro-bono professional services",
      "Training and facilitation support",
      "Technology and communications resources",
      "Event hosting and logistics"
    ]
  }
];

const Donate = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Support Women's Empowerment in Nigeria | Donate to WIELD-I"
        description="Support WIELD-I's mission to advance women's inclusion, leadership, and empowerment across Nigeria through your generous contribution."
        path="/donate"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy-deep via-navy-light to-navy-deep">
        <div className="container-narrow mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-gold-soft/20 rounded-full mb-6">
            <span className="text-gold-soft font-medium text-sm">Support Our Mission</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Donate Now – Support Women's Inclusion & Leadership in Nigeria
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Your generosity fuels meaningful change—advancing women's political participation, 
            economic empowerment, and leadership development across Nigeria.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container-narrow mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
              Empowering Change Through Collaboration
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At WIELD-I, we believe that sustainable change is built through collaborative partnerships. 
              Donor and partner support is essential to our mission of creating an inclusive Nigeria where 
              women participate fully in governance, economic opportunities, and community leadership.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you are an individual committed to gender equity, a foundation advancing development goals, 
              or a corporation seeking meaningful social impact, your contribution helps us reach more women, 
              influence more policies, and transform more communities.
            </p>
          </div>
        </div>
      </section>

      {/* Why Your Support Matters */}
      <section className="py-20 bg-cream-soft">
        <div className="container-narrow mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Your Support Matters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every contribution strengthens our ability to advance equity and opportunity for women across Nigeria.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whySupportMatters.map((item, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl p-8 shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="w-14 h-14 bg-gold-soft/20 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-gold-soft" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="py-20 bg-background">
        <div className="container-narrow mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ways to Support
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              There are multiple meaningful ways to contribute to our mission and create lasting impact.
            </p>
          </div>

          <div className="space-y-8">
            {supportOptions.map((option, index) => (
              <div 
                key={index}
                className="bg-cream-soft rounded-xl p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 bg-navy-deep rounded-xl flex items-center justify-center flex-shrink-0">
                    <option.icon className="w-8 h-8 text-gold-soft" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      {option.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {option.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {option.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-gold-soft flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
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

      {/* Financial Donations Coming Soon */}
      <section className="py-20 bg-navy-deep">
        <div className="container-narrow mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-gold-soft/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Clock className="w-10 h-10 text-gold-soft" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Financial Donations – Coming Soon
            </h2>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              We are currently finalizing secure payment systems to accept online financial contributions. 
              Our commitment to transparency and donor safety means we are taking the necessary steps to 
              ensure all transactions are processed through verified, accountable channels.
            </p>
            <p className="text-lg text-primary-foreground/70 mb-10">
              In the meantime, we welcome collaboration discussions and in-kind contributions. 
              Please reach out to explore how you can support our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="gold" size="xl" className="w-full sm:w-auto">
                  Discuss Support Options
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/partner">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                  Partner With WIELD-I
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Commitment */}
      <section className="py-20 bg-background">
        <div className="container-narrow mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-20 h-20 bg-navy-deep rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-10 h-10 text-gold-soft" />
              </div>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Commitment to Transparency
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At WIELD-I, we understand that trust is the foundation of every meaningful partnership. 
                  We are committed to the highest standards of accountability, ensuring that every contribution 
                  is used responsibly and effectively toward our mission.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-gold-soft flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <strong>Responsible Stewardship:</strong> All funds and resources are managed with integrity, 
                      directed toward programs that create measurable impact.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-gold-soft flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <strong>Regular Reporting:</strong> We provide donors and partners with clear, timely reports 
                      on how contributions are utilized and the outcomes achieved.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-gold-soft flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <strong>Organizational Accountability:</strong> Our governance structures ensure oversight, 
                      compliance, and alignment with our stated mission and values.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-cream-soft">
        <div className="container-narrow mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Connect with our team to discuss partnership opportunities and how you can support our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="navy" size="lg">
                Get in Touch
              </Button>
            </Link>
            <Link to="/partner">
              <Button variant="outline" size="lg">
                Learn About Partnerships
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
