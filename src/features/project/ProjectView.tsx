import ProjectCard from '@/features/project/components/ProjectCard';
import ComingSoonCard from '@/features/project/components/ComingSoonCard';
import HeaderSection from '@/features/project/components/HeaderSection';
const ProjectView = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-24 bg-[#0a0a0a]">
        {/* ページヘッダー */}
        <HeaderSection />

        <div className="grid md:grid-cols-2 gap-10">
          <ProjectCard />
          <ComingSoonCard />
        </div>
      </section>
    </>
  );
};

export default ProjectView;
