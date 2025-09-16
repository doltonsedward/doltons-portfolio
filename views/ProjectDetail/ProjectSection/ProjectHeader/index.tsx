import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import { ProjectStatusType } from '@/app/project/types';
import getButtonStatusVariant from '../../utils/getButtonStatusVariant';
import CTASection from './CTASection';

type ProjectHeader = {
  title: string;
  shortDesc: string;
  status: ProjectStatusType;
  year: string;
  duration: string;
  githubLink: string;
  linkToProject: string;
};

const ProjectHeader = ({
  title,
  shortDesc,
  status,
  year,
  duration,
  githubLink,
  linkToProject,
}: ProjectHeader) => (
  <div className="mb-8">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-lg text-gray-600">{shortDesc}</p>
      </div>
      <Badge
        variant={getButtonStatusVariant(status)}
        className="ml-4 flex-shrink-0"
      >
        {status}
      </Badge>
    </div>

    <div className="flex gap-4 text-sm text-gray-500 mb-6">
      <span className="flex items-center gap-1">
        <Calendar className="h-4 w-4" />
        {year}
      </span>
      <span>Duration: {duration}</span>
    </div>

    <CTASection githubLink={githubLink} linkToProject={linkToProject} />
  </div>
);

export default ProjectHeader;
