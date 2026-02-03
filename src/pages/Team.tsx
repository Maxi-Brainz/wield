import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import founderImage from "@/assets/founder-amarachi.jpg";
import josephImage from "@/assets/joseph-ogakwu.jpeg";

const teamMembers = [
  {
    name: "Joseph Ogakwu",
    role: "Digital & Technology Lead",
    initial: "J",
    image: josephImage,
    bio: "Oversees WIELD-I's digital presence and communications strategy, supporting donor-facing materials and advising on digital tools to position the organization as credible and donor-ready.",
  },
  {
    name: "Program Director",
    role: "Programs & Strategy",
    initial: "P",
    bio: "Oversees the design and implementation of WIELD-I's core programs across political participation, economic empowerment, and leadership development.",
  },
  {
    name: "Advocacy Lead",
    role: "Policy & Advocacy",
    initial: "A",
    bio: "Leads WIELD-I's policy advocacy efforts, engaging with government institutions and legislators to advance gender-responsive legislation and governance reforms.",
  },
  {
    name: "Communications Manager",
    role: "Communications & Outreach",
    initial: "C",
    bio: "Manages WIELD-I's communications strategy, ensuring the organization's mission and impact reach key stakeholders, partners, and the public.",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-narrow mx-auto text-center">
            <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Team
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Meet the People Behind WIELD-I
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Our dedicated team of professionals works tirelessly to advance women's 
              leadership and empowerment across Nigeria.
            </p>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
                Leadership
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                Our Leadership Team
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                WIELD-I is led by a team of committed professionals with deep expertise 
                in advocacy, policy, and community development.
              </p>
            </div>

            {/* Founder Feature */}
            <div className="max-w-3xl mx-auto mb-16">
              <div className="bg-cream rounded-xl p-8 md:p-12 border border-border text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <Avatar className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto mb-6 border-4 border-gold-soft transition-transform duration-300 hover:scale-105">
                  <AvatarImage src={founderImage} alt="Okeke Amarachi Evangel" className="object-cover" />
                  <AvatarFallback className="bg-primary text-primary-foreground font-heading text-4xl sm:text-5xl md:text-6xl font-semibold">O</AvatarFallback>
                </Avatar>
                <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
                  Okeke Amarachi Evangel
                </h3>
                <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider block mb-6">
                  Founder & Executive Director
                </span>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  A passionate advocate for women's rights and leadership development, Amarachi founded 
                  WIELD-I to address systemic barriers limiting women's participation in Nigeria's social, 
                  economic, and political spheres. Her vision drives the organization's mission to ensure 
                  no woman is left behind in Nigeria's journey toward equity.
                </p>
              </div>
            </div>

            {/* Team Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-6 md:p-8 border border-border text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-gold-soft/50 group"
                >
                  {member.image ? (
                    <Avatar className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-auto mb-6 border-4 border-gold-soft transition-transform duration-300 group-hover:scale-105">
                      <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                      <AvatarFallback className="bg-primary text-primary-foreground font-heading text-3xl sm:text-4xl md:text-5xl font-semibold">
                        {member.initial}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-105">
                      <span className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary-foreground font-semibold">
                        {member.initial}
                      </span>
                    </div>
                  )}
                  <h3 className="font-heading text-lg md:text-xl text-foreground mb-2">
                    {member.name}
                  </h3>
                  <span className="text-gold-soft font-semibold text-xs uppercase tracking-wider block mb-4">
                    {member.role}
                  </span>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="section-padding bg-cream">
          <div className="container-narrow mx-auto text-center">
            <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-7 h-7 text-primary-foreground" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              Join Our Team
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              We're always looking for passionate individuals who share our commitment to 
              women's empowerment and leadership development. If you're interested in 
              contributing to our mission, we'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
