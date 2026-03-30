import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HomeSummarySection from "@/components/HomeSummarySection";
import QuoteSection from "@/components/QuoteSection";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import homeAboutImg from "@/assets/home-about.jpg";
import homeProgramsImg from "@/assets/home-programs.jpg";
import homeImpactImg from "@/assets/home-impact.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="WIELD Initiative – Empowering Women to Participate, Lead, Transform and Thrive"
        description="Advancing women's political participation, leadership development and economic empowerment across Nigeria."
        path="/"
        image="https://wieldinitiative.org/og-image.jpg"
      />
      <Header />
      <main>
        <HeroSection />
        
        {/* About Summary */}
        <HomeSummarySection
          id="about"
          label="Who We Are"
          title="A Trusted Voice for Women's Rights and Leadership in Nigeria"
          description="WIELD-I is a women-led, non-profit organization dedicated to advancing inclusivity, empowerment, orientation, and leadership development across Nigeria."
          ctaText="Learn About Us"
          ctaLink="/about"
          variant="light"
          image={homeAboutImg}
          imageAlt="African women leaders in a professional strategy meeting"
          imagePosition="right"
        />

        {/* Programs Summary */}
        <HomeSummarySection
          id="programs"
          label="Our Work"
          title="Three Pillars of Transformation"
          description="Our integrated approach addresses systemic barriers through political participation, economic empowerment, and leadership development programs."
          ctaText="View Our Programs"
          ctaLink="/programs"
          variant="cream"
          image={homeProgramsImg}
          imageAlt="Women participating in a capacity building workshop in Nigeria"
          imagePosition="left"
        />

        {/* Impact Summary */}
        <HomeSummarySection
          id="impact"
          label="Our Impact"
          title="Driving Systemic Change Through Advocacy & Action"
          description="WIELD-I advances women's inclusion through sustained advocacy, leadership development, and community-based engagement across Nigeria."
          ctaText="See Our Impact"
          ctaLink="/impact"
          variant="light"
          image={homeImpactImg}
          imageAlt="Women at a community gathering for civic engagement in Nigeria"
          imagePosition="right"
        />

        <QuoteSection />
        <PartnerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
