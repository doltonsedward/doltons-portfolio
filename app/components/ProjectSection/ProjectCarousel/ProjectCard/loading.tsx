import React from 'react';
import BaseProjectCardLoading from '@/app/components/ProjectCard/loading';
import { CarouselItem } from '@/components/ui/carousel';

const ProjectCardLoading = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <CarouselItem key={index} className="ml-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1 h-full">
            <BaseProjectCardLoading />
          </div>
        </CarouselItem>
      ))}
    </>
  );
};

export default ProjectCardLoading;
