import HeroSection from './components/HeroSection';
import { SkillSection } from './components/SkillSection';
import CertificationSection from './components/CertificationSection';

export const ProfileView = () => {
  return (
    // 背景のグラデーションをより深く
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-pink-500/30">
      {/* トップページと共通の背景アクセント */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <main className="max-w-6xl mx-auto px-6 py-24 pt-20 relative z-10">
        <HeroSection />
        <SkillSection />
        <div className="mt-24">
          <CertificationSection />
        </div>
      </main>
    </div>
  );
};
