"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

interface SidebarProps {
  activeSection: string
  onNavClick: (sectionId: string) => void
}

export default function Sidebar({ activeSection, onNavClick }: SidebarProps) {
  const navItems = [
    { id: "home", label: "About" },
    { id: "about", label: "Resume" },
    { id: "projects", label: "Portfolio" },
    { id: "experience", label: "Blog" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <aside className="fixed left-0 top-0 h-full w-80 bg-[#2a2a2a] p-8 hidden lg:block overflow-y-auto">
      <div className="flex flex-col h-full">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="relative w-48 h-48 mx-auto mb-6">
            <div className="w-full h-full rounded-3xl overflow-hidden bg-[#3a3a3a] p-4">
              <Image
                src="/doltons.jpeg"
                alt="Doltons Edward Nicholas"
                width={192}
                height={192}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-[#ffda6b] rounded-full border-4 border-[#2a2a2a]"></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Doltons Edward Nicholas</h2>
          <p className="text-[#a0a0a0] text-lg">Software Developer</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-[#ffda6b] rounded-lg flex items-center justify-center">
              <Mail className="h-5 w-5 text-[#1a1a1a]" />
            </div>
            <div>
              <p className="text-[#a0a0a0] text-sm uppercase tracking-wide">EMAIL</p>
              <p className="text-white text-sm">doltons.edward@example.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-[#ffda6b] rounded-lg flex items-center justify-center">
              <Phone className="h-5 w-5 text-[#1a1a1a]" />
            </div>
            <div>
              <p className="text-[#a0a0a0] text-sm uppercase tracking-wide">PHONE</p>
              <p className="text-white text-sm">+62 812 3456 7890</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-[#ffda6b] rounded-lg flex items-center justify-center">
              <MapPin className="h-5 w-5 text-[#1a1a1a]" />
            </div>
            <div>
              <p className="text-[#a0a0a0] text-sm uppercase tracking-wide">LOCATION</p>
              <p className="text-white text-sm">Jakarta, Indonesia</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 mb-8">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-[#ffda6b] text-[#1a1a1a] font-medium"
                      : "text-[#a0a0a0] hover:text-white hover:bg-[#3a3a3a]"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          <Button variant="ghost" size="icon" className="text-[#a0a0a0] hover:text-[#ffda6b] hover:bg-[#3a3a3a]">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-[#a0a0a0] hover:text-[#ffda6b] hover:bg-[#3a3a3a]">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-[#a0a0a0] hover:text-[#ffda6b] hover:bg-[#3a3a3a]">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </aside>
  )
}
