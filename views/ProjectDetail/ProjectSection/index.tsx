import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ProjectDataType } from '@/app/project/types';
import ProjectHeader from './ProjectHeader';

type ProjectSectionPropsType = ProjectDataType;

const ProjectSection = ({
  title,
  shortDesc,
  status,
  year,
  duration,
  githubLink,
  linkToProject,
  image,
  stack,
  fullDesc,
  keyFeatures,
  challenges,
}: ProjectSectionPropsType) => {
  return (
    <article>
      <ProjectHeader
        title={title}
        shortDesc={shortDesc}
        status={status}
        year={year}
        duration={duration}
        githubLink={githubLink}
        linkToProject={linkToProject}
      />

      {/* Project Image */}
      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-8">
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tech Stack */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Technology Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Project Description */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Project Overview
        </h3>
        <div className="prose prose-gray max-w-none">
          {fullDesc.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-600 mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Key Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Technical Challenges
        </h3>
        <div className="space-y-4">
          {challenges.map((challenge, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-600">{challenge}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectSection;
