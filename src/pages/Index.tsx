import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SupportSection from "@/components/SupportSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CommunitySection from "@/components/CommunitySection";
import ValuesSection from "@/components/ValuesSection";
import ContactSection from "@/components/ContactSection";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <SupportSection />
      <HowItWorksSection />
      <CommunitySection />
      <ValuesSection />
      <ContactSection />
      <ClosingSection />
      <Footer />
    </main>
  );
};

export default Index;
