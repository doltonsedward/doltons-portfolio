import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ProjectCard from './ProjectCard';
import ProjectCardLoading from './ProjectCard/loading';
import ProjectsEmptyState from './EmptyState';
import { ProjectDataType } from '@/app/project/types';
import { useGetData } from '@/hooks/http/useGetData';
import { notFound } from 'next/navigation';

const ProjectCarousel = () => {
  const { data, error, isLoading } = useGetData<ProjectDataType[]>({
    api: '/api/projects',
  });

  if (error) return notFound();

  const hasNoData = !data?.length && !isLoading;
  if (hasNoData) return <ProjectsEmptyState />;

  return (
    <div className="w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {isLoading ? (
            <ProjectCardLoading />
          ) : (
            data?.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default React.memo(ProjectCarousel);
