import { CarouselItem } from '@/components/ui/carousel';
import BaseProjectCard from '@/app/components/ProjectCard';
import { ProjectDataType } from '@/app/project/types';

type ProjectCardPropsType = ProjectDataType;

const ProjectCard = ({
  id,
  githubLink,
  image,
  linkToProject,
  shortDesc,
  title,
  stack,
  status,
}: ProjectCardPropsType) => (
  <CarouselItem className="ml-1 md:basis-1/2 lg:basis-1/3">
    <div className="p-1 h-full">
      <BaseProjectCard
        id={id}
        githubLink={githubLink}
        image={image}
        linkToProject={linkToProject}
        shortDesc={shortDesc}
        title={title}
        stack={stack}
        status={status}
      />
    </div>
  </CarouselItem>
);

export default ProjectCard;
