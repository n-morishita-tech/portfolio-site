import ProjectCard from '@/features/project/components/project-card';
import ComingSoonCard from '@/features/project/components/coming-soon-card';
import HeaderSection from '@/features/project/components/header-section';
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
