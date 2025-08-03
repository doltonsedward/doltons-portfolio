"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-16 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Featured Projects
        </h2>
        <div className="w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 9 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="group hover:shadow-lg transition-shadow">
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
                          A modern web application built with cutting-edge
                          technologies and best practices.
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2">
                            <Badge variant="outline" className="text-xs">
                              React
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Node.js
                            </Badge>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
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