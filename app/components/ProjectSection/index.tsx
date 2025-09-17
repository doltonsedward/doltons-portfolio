'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ProjectCarousel from './ProjectCarousel';

const ProjectsSection = () => (
  <section id="projects" className="px-6 py-16 lg:px-12 bg-gray-50">
    <div className="constrain">
      <div className="flex justify-between items-center w-full mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
        <Link
          href="/project"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
        >
          <span className="text-sm font-medium">View All</span>
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
      <ProjectCarousel />
    </div>
  </section>
);

export default ProjectsSection;
