"use client";

import { useState, useEffect } from "react";
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
import { Github, Linkedin, Mail, ExternalLink, Menu } from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-6 hidden lg:block">
        <div className="flex flex-col h-full">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900">Doltons Edward</h2>
            <p className="text-sm text-gray-600">Portfolio</p>
          </div>

          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-gray-900 text-white shadow-md"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex space-x-4 mt-8">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        {/* Hero Section */}
        <section id="home" className="px-6 py-16 lg:px-12 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-shrink-0">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/placeholder.svg?height=256&width=256"
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
                  "Code is poetry written in logic, where every line tells a
                  story of possibility."
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Full Stack Developer & Creative Problem Solver
                </p>
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800"
                  onClick={() => handleNavClick("projects")}
                >
                  View My Work
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-6 py-16 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  I'm a passionate full-stack developer with a keen eye for
                  design and a love for creating digital experiences that
                  matter. With expertise in modern web technologies, I bridge
                  the gap between beautiful design and functional code.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">AWS</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
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

        {/* Experience Section */}
        <section id="experience" className="px-6 py-16 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Experience
            </h2>
            <div className="space-y-8">
              <div className="border-l-2 border-gray-200 pl-6">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-gray-900 rounded-full -ml-8 mr-6"></div>
                  <span className="text-sm text-gray-500">
                    Jun 2022 – Present (3 yrs 3 mos)
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Frontend Developer
                </h3>
                <p className="text-gray-600 mb-3">PT. Nirvana Indonesia Yoga</p>
                <ul className="text-gray-700 space-y-1">
                  <li>
                    • Built and maintained responsive web applications tailored
                    to yoga and wellness clients
                  </li>
                  <li>
                    • Collaborated with stakeholders to gather requirements and
                    improve usability
                  </li>
                  <li>
                    • Implemented end-to-end testing for consistent performance
                    and reliability
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-gray-200 pl-6">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-gray-900 rounded-full -ml-8 mr-6"></div>
                  <span className="text-sm text-gray-500">
                    May 2022 – Present (3 yrs 4 mos)
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Full Stack Engineer
                </h3>
                <p className="text-gray-600 mb-3">Kelas Fitness</p>
                <ul className="text-gray-700 space-y-1">
                  <li>
                    • Developed and maintained both frontend and backend of the
                    Kelas Fitness web & mobile app
                  </li>
                  <li>
                    • Conducted regular end-to-end testing to ensure stable
                    releases and a seamless user experience
                  </li>
                  <li>
                    • Contributed to feature planning and technical
                    decision-making in a fast-paced, agile environment
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-gray-200 pl-6">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-gray-900 rounded-full -ml-8 mr-6"></div>
                  <span className="text-sm text-gray-500">
                    Feb 2022 – Present (3 yrs 7 mos)
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Mentor (Part-time)
                </h3>
                <p className="text-gray-600 mb-3">Skilvul</p>
                <ul className="text-gray-700 space-y-1">
                  <li>
                    • Led knowledge-sharing sessions in the Skilvul Discord
                    community
                  </li>
                  <li>
                    • Assisted instructors during live sessions and provided
                    students with real-time coding support
                  </li>
                  <li>
                    • Supported the learning journey of hundreds of tech
                    students
                  </li>
                  <li>
                    • Skills: Teaching, code review, community facilitation
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-gray-200 pl-6">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-gray-900 rounded-full -ml-8 mr-6"></div>
                  <span className="text-sm text-gray-500">
                    Jan 2022 – Present (3 yrs 8 mos)
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Mobile Application Developer
                </h3>
                <p className="text-gray-600 mb-3">PT. Nirvana Indonesia Yoga</p>
                <ul className="text-gray-700 space-y-1">
                  <li>
                    • Developed mobile apps using React Native with smooth UI/UX
                    tailored to user personas
                  </li>
                  <li>
                    • Integrated REST APIs and ensured performance across
                    Android & iOS platforms
                  </li>
                  <li>
                    • Responsible for app testing, monitoring, and iterative
                    improvements
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-gray-200 pl-6">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-gray-400 rounded-full -ml-8 mr-6"></div>
                  <span className="text-sm text-gray-500">
                    Aug 2021 – Feb 2022 (7 mos)
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Learning Support Assistant (Contract)
                </h3>
                <p className="text-gray-600 mb-3">Skilvul</p>
                <ul className="text-gray-700 space-y-1">
                  <li>
                    • Supported the learning team in helping students meet
                    Skilvul's learning outcomes
                  </li>
                  <li>
                    • Actively answered student questions on forums and Discord
                    to ensure continued learning engagement
                  </li>
                  <li>
                    • Provided personalized technical feedback and guidance
                  </li>
                  <li>
                    • Focus areas: HTML, CSS, JavaScript, beginner-level
                    mentorship
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="px-6 py-16 lg:px-12 bg-gray-900 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-xl text-gray-300 mb-8">
              Have a project in mind? I'd love to hear about it.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              Get In Touch
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
