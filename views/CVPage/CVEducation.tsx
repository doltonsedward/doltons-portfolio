import React from 'react';
import education from '@/data/education';

const CVEducation = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">EDUCATION</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index}>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {edu.title}
                </h3>
                <p className="text-gray-600">{edu.institution}</p>
              </div>
              <span className="text-sm text-gray-500">{edu.period}</span>
            </div>
            <ul className="text-gray-700 space-y-1 list-disc ml-4">
              {edu.descriptions.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CVEducation;
