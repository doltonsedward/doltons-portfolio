"use client"

import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onNavClick: (sectionId: string) => void
}

export default function HeroSection({ onNavClick }: HeroSectionProps) {
  return (
    <section id="home" className="px-8 py-16 lg:px-16 lg:py-24 bg-[#1a1a1a] min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-16 h-1 bg-[#ffda6b] mb-8"></div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">About</h1>
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-xl text-[#a0a0a0] leading-relaxed mb-6">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating digital
              experiences that matter. With expertise in modern web technologies, I bridge the gap between beautiful
              design and functional code.
            </p>
            <p className="text-xl text-[#a0a0a0] leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">What I Do</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#ffda6b] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#a0a0a0]">Full-stack web development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#ffda6b] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#a0a0a0]">Mobile app development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#ffda6b] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#a0a0a0]">UI/UX design implementation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#ffda6b] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#a0a0a0]">Technical mentoring</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Technologies</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-[#a0a0a0]">React & Next.js</div>
                <div className="text-[#a0a0a0]">React Native</div>
                <div className="text-[#a0a0a0]">TypeScript</div>
                <div className="text-[#a0a0a0]">Node.js</div>
                <div className="text-[#a0a0a0]">Python</div>
                <div className="text-[#a0a0a0]">PostgreSQL</div>
                <div className="text-[#a0a0a0]">Tailwind CSS</div>
                <div className="text-[#a0a0a0]">AWS</div>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-[#ffda6b] text-[#1a1a1a] hover:bg-[#e6c659] font-medium px-8 py-3"
            onClick={() => onNavClick("projects")}
          >
            View My Work
          </Button>
        </div>
      </div>
    </section>
  )
}
