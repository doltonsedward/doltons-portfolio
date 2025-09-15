"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import PROJECTS_DATA from "@/app/data/projects";
import RelatedBlogPosts from "./RelatedBlogPosts";
import CTASection from "./CTASection";
import ProjectSection from "./ProjectSection";

const ProjectDetailPage = () => {
  const params = useParams();
  const project = PROJECTS_DATA.find((p) => String(p.id) === String(params.id));

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:px-12">
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/project"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Projects</span>
          </Link>
        </div>

        <ProjectSection
          id={project.id}
          title={project.title}
          shortDesc={project.shortDesc}
          status={project.status}
          year={project.year}
          duration={project.duration}
          githubLink={project.githubLink}
          linkToProject={project.linkToProject}
          image={project.image}
          stack={project.stack}
          fullDesc={project.fullDesc}
          keyFeatures={project.keyFeatures}
          challenges={project.challenges}
        />

        <RelatedBlogPosts projectId={project.id} />

        <CTASection />
      </div>
    </div>
  );
};

export default ProjectDetailPage;
