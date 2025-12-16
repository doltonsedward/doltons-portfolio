import { Github, Globe, Linkedin, Mail, MapPin } from 'lucide-react';
import React from 'react';

const CVHeader = () => {
  return (
    <div className="text-center mb-8 pb-6 border-b">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        DOLTONS EDWARD NICHOLAS
      </h1>
      <p className="text-xl text-gray-600 mb-4">Senior Software Engineer</p>
      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Mail className="h-4 w-4" />
          me.doltonsedward@gmail.com
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          Surabaya, Indonesia
        </div>
        <div className="flex items-center gap-1">
          <Linkedin className="h-4 w-4" />
          linkedin.com/in/doltons-edward-nicholas-p
        </div>
        <div className="flex items-center gap-1">
          <Github className="h-4 w-4" />
          github.com/doltonsedward
        </div>
        <div className="flex items-center gap-1">
          <Globe className="h-4 w-4" />
          s.id/about-doltons
        </div>
      </div>
    </div>
  );
};

export default CVHeader;
