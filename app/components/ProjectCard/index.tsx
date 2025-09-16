import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ActionButton from '@/views/ProjectPage/ActionButton';
import React from 'react';

type ProjectCardPropsType = {
  image: string;
  title: string;
  status: string;
  shortDesc: string;
  stack: string[];
  githubLink: string;
  linkToProject: string;
};

const ProjectCard = ({
  image,
  title,
  status,
  shortDesc,
  stack,
  githubLink,
  linkToProject,
}: ProjectCardPropsType) => (
  <Card className="group hover:shadow-lg transition-shadow h-full">
    <div className="relative aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
      {/* Status Badge - floating on image */}
      <Badge
        variant="outline"
        className={`absolute top-3 right-3 z-10 text-xs border-0 px-3 py-1 shadow ${
          status === 'Completed'
            ? 'bg-green-100 text-green-700 hover:bg-green-100'
            : status === 'In Progress'
              ? 'bg-blue-100 text-blue-700 hover:bg-blue-100'
              : 'bg-orange-100 text-orange-700 hover:bg-orange-100'
        }`}
      >
        {status}
      </Badge>
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
      />
    </div>
    <CardContent className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 line-clamp-3">{shortDesc}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {stack.map((tech, index) => (
          <Badge key={index} variant="outline" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>

      <ActionButton githubLink={githubLink} linkToProject={linkToProject} />
    </CardContent>
  </Card>
);

export default React.memo(
  ProjectCard,
  (prev, next) =>
    prev.githubLink === next.githubLink &&
    prev.linkToProject === next.linkToProject &&
    prev.image === next.image &&
    prev.title === next.title &&
    prev.status === next.status &&
    prev.shortDesc === next.shortDesc
);
