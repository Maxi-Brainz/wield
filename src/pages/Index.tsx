import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HomeSummarySection from "@/components/HomeSummarySection";
import QuoteSection from "@/components/QuoteSection";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Women's Inclusion & Leadership Development in Nigeria | WIELD-I"
        description="WIELD-I advances women's political participation, leadership development, and economic empowerment across Nigeria."
        path="/"
      />
      <Header />
      <main>
        <HeroSection />
        
        {/* About Summary */}
        <HomeSummarySection
          id="about"
          label="Who We Are"
          title="A Trusted Voice for Women's Rights and Leadership in Nigeria"
          description="WIELD-I is a women-led, non-profit organization dedicated to advancing gender equality, women's political participation, and economic empowerment across Nigeria."
          ctaText="Learn About Us"
          ctaLink="/about"
          variant="light"
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
        />

        <QuoteSection />
        <PartnerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
