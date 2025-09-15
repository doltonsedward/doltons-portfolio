"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useGetData } from "@/hooks/http/useGetData";
import { ProjectDataType } from "@/app/project/types";

export default function ProjectsSection() {
  const { data, error, isLoading } = useGetData<ProjectDataType[]>({
    api: "/api/projects",
  });

  if (!data?.length) return null;

  return (
    <section id="projects" className="px-6 py-16 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center w-full mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <Link
            href="/project"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
          >
            <span className="text-sm font-medium">View All</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {data.map((project) => (
                <ProjectCard key={project.id} {...project} />
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
