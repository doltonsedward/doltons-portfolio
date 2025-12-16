import EXPERIENCES from '@/data/experiences';
import React from 'react';

const CVExperience = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        PROFESSIONAL EXPERIENCE
      </h2>
      <div className="space-y-6">
        {EXPERIENCES.map((exp, index) => (
          <div key={index}>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.title}
                </h3>
                <p className="text-gray-600">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <ul className="text-gray-700 space-y-1 list-disc ml-4">
              {exp.responsibilities.map((resp, respIndex) => (
                <li key={respIndex}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CVExperience;
