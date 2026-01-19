const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                (WIELD-I) is a women-led, non-profit organization dedicated to advancing 
                gender equality, women's political participation, and economic empowerment 
                across Nigeria.
              </p>
              <p>
                Founded on the principles of inclusion and equity, we work at the 
                intersection of policy advocacy, capacity building, and grassroots 
                mobilization to create lasting systemic change for women and girls.
              </p>
              <p>
                Our evidence-based approach and partnerships with government, civil 
                society, and development partners position us as a credible voice in 
                Nigeria's gender development ecosystem.
              </p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-cream rounded-lg p-8 text-center">
              <span className="font-heading text-4xl md:text-5xl text-primary font-bold block mb-2">
                10K+
              </span>
              <span className="text-muted-foreground text-sm">
                Women Empowered
              </span>
            </div>
            <div className="bg-cream rounded-lg p-8 text-center">
              <span className="font-heading text-4xl md:text-5xl text-primary font-bold block mb-2">
                15
              </span>
              <span className="text-muted-foreground text-sm">
                States Reached
              </span>
            </div>
            <div className="bg-cream rounded-lg p-8 text-center">
              <span className="font-heading text-4xl md:text-5xl text-primary font-bold block mb-2">
                50+
              </span>
              <span className="text-muted-foreground text-sm">
                Policy Engagements
              </span>
            </div>
            <div className="bg-primary rounded-lg p-8 text-center">
              <span className="font-heading text-4xl md:text-5xl text-gold-soft font-bold block mb-2">
                8
              </span>
              <span className="text-primary-foreground/80 text-sm">
                Years of Impact
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
