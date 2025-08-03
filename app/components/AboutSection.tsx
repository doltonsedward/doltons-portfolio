"use client";

import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-16 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for design
              and a love for creating digital experiences that matter. With
              expertise in modern web technologies, I bridge the gap between
              beautiful design and functional code.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React JS</Badge>
              <Badge variant="secondary">React Native</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">PostgreSQL</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">AWS</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
