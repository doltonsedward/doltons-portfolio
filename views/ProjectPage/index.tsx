'use client';

import { ProjectDataType } from '@/app/project/types';
import HeaderSection from './HeaderSection';
import ProjectCard from '@/app/components/ProjectCard';

type ProjectPagePropsType = {
  projects: ProjectDataType[];
};

const ProjectsPage = ({ projects }: ProjectPagePropsType) => (
  <div className="min-h-screen bg-gray-50">
    <div className="constrain px-6 py-16 lg:px-12">
      <HeaderSection />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  </div>
);

export default ProjectsPage;
