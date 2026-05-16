import HeroSection from './components/HeroSection';
import HowBuildSection from './components/HowBuildSection';
import TechStackSection from './components/TechStackSection';
import ConceptSection from './components/ConceptSection';
import CTASection from './components/CTASection';

export const HomeView = () => {
  return (
    <>
      <HeroSection />
      <ConceptSection />
      <HowBuildSection />
      <TechStackSection />
      <CTASection />
    </>
  );
};
