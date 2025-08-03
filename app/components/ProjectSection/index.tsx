"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-16 lg:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Featured Projects
        </h2>
        <div className="w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 9 }).map((_, index) => (
                <ProjectCard key={index} index={index} />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
