import React from 'react';
import technicalSkills from '@/data/technicalSkills';

const CVTechnicalSkills = () => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">TECHNICAL SKILLS</h2>
    <div className="space-y-3">
      {technicalSkills.map((skill, index) => (
        <div key={index}>
          <span className="font-semibold text-gray-900">{skill.category}:</span>
          <span className="text-gray-700 ml-2">{skill.skills}</span>
        </div>
      ))}
    </div>
  </div>
);

export default CVTechnicalSkills;
