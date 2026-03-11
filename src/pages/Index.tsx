import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import CategoriesSection from "@/components/landing/CategoriesSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import CreatorShowcase from "@/components/landing/CreatorShowcase";
import ForBrandsCreators from "@/components/landing/ForBrandsCreators";
import AnalyticsSection from "@/components/landing/AnalyticsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CTASection from "@/components/landing/CTASection";
import PricingSection from "@/components/landing/PricingSection";
import Footer from "@/components/landing/Footer";
import { HeroHighlight } from "@/components/ui/hero-highlight";

const Index = () => {
  return (
    <HeroHighlight containerClassName="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <AnalyticsSection />
      <CreatorShowcase />
      <ForBrandsCreators />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </HeroHighlight>
  );
};

export default Index;
