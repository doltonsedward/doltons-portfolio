"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-8 py-16 lg:px-16 bg-[#1a1a1a] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="w-16 h-1 bg-[#f59e0b] mb-8"></div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">Portfolio</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <Card
              key={project}
              className="group hover:shadow-xl transition-all duration-300 bg-[#2a2a2a] border-[#3a3a3a] hover:border-[#f59e0b]"
            >
              <div className="aspect-video bg-[#3a3a3a] rounded-t-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=300&query=modern web application screenshot ${project}`}
                  alt={`Project ${project}`}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Project {project}</h3>
                <p className="text-[#a0a0a0] mb-4 leading-relaxed">
                  A modern web application built with cutting-edge technologies and best practices for optimal user
                  experience.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-[#f59e0b] text-[#1a1a1a] text-xs font-medium rounded-full">
                      React
                    </span>
                    <span className="px-3 py-1 bg-[#3a3a3a] text-[#a0a0a0] text-xs font-medium rounded-full">
                      Node.js
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="text-[#a0a0a0] hover:text-[#f59e0b] p-2">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-[#a0a0a0] hover:text-[#f59e0b] p-2">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
