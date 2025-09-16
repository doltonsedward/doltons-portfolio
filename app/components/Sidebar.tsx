'use client';

import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

export default function Sidebar({ activeSection, onNavClick }: SidebarProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'talks', label: 'Talks & Teaching' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
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
                  onClick={() => onNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-gray-900 text-white shadow-md'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
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
  );
}
