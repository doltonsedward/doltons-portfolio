import { CarouselItem } from '@/components/ui/carousel';
import BaseProjectCard from '@/app/components/ProjectCard';
import { ProjectStatusType } from '@/app/project/types';

type ProjectCardPropsType = {
  githubLink: string;
  image: string;
  linkToProject: string;
  shortDesc: string;
  title: string;
  stack: string[];
  status: ProjectStatusType;
};

const ProjectCard = ({
  githubLink,
  image,
  linkToProject,
  shortDesc,
  title,
  stack,
  status,
}: ProjectCardPropsType) => (
  <CarouselItem className="ml-1 md:basis-1/2 lg:basis-1/3">
    <div className="p-1">
      <BaseProjectCard
        githubLink={githubLink}
        image={image}
        linkToProject={linkToProject}
        shortDesc={shortDesc}
        title={title}
        stack={stack}
        status={status}
      />
      {/* <Card className="group hover:shadow-lg transition-shadow">
        <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
          <Image
            src={`/placeholder.svg?height=200&width=300&query=modern web application screenshot ${
              index + 1
            }`}
            alt={`Project ${index + 1}`}
            width={300}
            height={200}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Project {index + 1}
          </h3>
          <p className="text-gray-600 mb-4">
            A modern web application built with cutting-edge technologies and
            best practices.
          </p>
          <div className="flex justify-between items-center">
            <div className="space-x-2 flex-50">
              <Badge variant="outline" className="text-xs">
                React
              </Badge>
              <Badge variant="outline" className="text-xs">
                Node.js
              </Badge>
            </div>
            <div>
              <Button variant="ghost" size="sm">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card> */}
    </div>
  </CarouselItem>
);

export default ProjectCard;
