import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FocusAreasSection from "@/components/FocusAreasSection";
import QuoteSection from "@/components/QuoteSection";
import ImpactSection from "@/components/ImpactSection";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FocusAreasSection />
        <QuoteSection />
        <ImpactSection />
        <PartnerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
