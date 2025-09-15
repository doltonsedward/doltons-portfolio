"use client";

import { useState, useEffect } from "react";
import MobileMenu from "./components/MobileMenu";
import Sidebar from "./components/Sidebar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import TalksSection from "./components/TalksSection";
import ContactSection from "./components/ContactSection";

const sections = [
  "home",
  "about",
  "projects",
  "experience",
  "talks",
  "contact",
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileMenu />
      <Sidebar activeSection={activeSection} onNavClick={handleNavClick} />

      <main className="lg:ml-64 min-h-screen">
        <HeroSection onNavClick={handleNavClick} />
        <AboutSection />
        <ProjectsSection />
        <TalksSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}
