import HeroSection from './components/hero-section';
import HowBuildSection from './components/how-build-section';
import TechStackSection from './components/tech-stack-section';
import ConceptSection from './components/concept-section';
import CTASection from './components/CTA-section';

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
