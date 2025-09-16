'use client';

import { useRouter } from '@/routes/navigation';
import { ProjectDataType } from '@/app/project/types';
import HeaderSection from './HeaderSection';
import ProjectCard from '@/app/components/ProjectCard';

type ProjectPagePropsType = {
  projects: ProjectDataType[];
};

export default function ProjectsPage({ projects }: ProjectPagePropsType) {
  const router = useRouter();

  const redirectToDetail = (id: number) => {
    router.push(`/project/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:px-12">
        <HeaderSection />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer"
              onClick={() => redirectToDetail(project.id)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  redirectToDetail(project.id);
                }
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
