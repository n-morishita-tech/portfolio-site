import HeroSection from './components/hero-section';
import HowBuildSection from './components/what-i-bring';
import ConceptSection from './components/concept-section';
import CTASection from './components/CTA-section';

export const HomeView = () => {
  return (
    <>
      <HeroSection />
      <ConceptSection />
      <HowBuildSection />
      <CTASection />
    </>
  );
};
