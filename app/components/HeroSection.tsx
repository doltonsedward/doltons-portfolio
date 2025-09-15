"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onNavClick: (sectionId: string) => void;
}

export default function HeroSection({ onNavClick }: HeroSectionProps) {
  return (
    <section id="home" className="px-6 py-16 lg:px-12 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/doltons.jpeg?height=256&width=256"
                alt="Doltons Edward Nicholas"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              Doltons Edward
              <span className="block text-3xl lg:text-5xl text-gray-600 font-light">
                Nicholas
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 italic">
              "If I think I can, I can."
            </p>
            {/* <p className="text-xl text-gray-600 mb-6 italic">
              "Code is poetry written in logic, where every line tells a story
              of possibility." -- quote 2
            </p> */}
            <p className="text-lg text-gray-700 mb-8">
              Full Stack Developer & Creative Problem Solver
            </p>
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800"
              onClick={() => onNavClick("projects")}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
