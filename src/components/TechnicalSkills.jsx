import React from 'react';
import { Code, Database, Globe, Cpu, Layers } from 'lucide-react';

const TechnicalSkills = ({ isVisible }) => {
  const technicalSkills = {
    "Programming Languages": ["Java", "Python", "C++", "JavaScript"],
    "Web Technologies": ["React", "Node.js", "HTML", "CSS", "Tailwind CSS", "Express.js", "Bootstrap"],
    "Databases": ["MySQL", "MongoDB"],
    "Tools & Frameworks": ["Git", "Docker", "VS Code", "Postman", "Firebase"],
    "Other Skills": ["Data Structures", "Algorithms", "OOP", "System Design", "REST APIs"]
  };

  const skillIcons = {
    "Programming Languages": Code,
    "Web Technologies": Globe,
    "Databases": Database,
    "Tools & Frameworks": Layers,
    "Other Skills": Cpu
  };

  return (
    <div className="p-8 border-b border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Code className="text-blue-600" size={24} />
        Technical Skills
      </h2>
      <div className="grid gap-6">
        {Object.entries(technicalSkills).map(([category, skills], index) => {
          const IconComponent = skillIcons[category];
          return (
            <div 
              key={category} 
              className={`transform transition-all duration-500 delay-${index * 100} ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
            >
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <IconComponent className="text-blue-600" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <span 
                      key={skill}
                      className={`px-3 py-1 bg-white border border-gray-200 cursor-pointer rounded-full text-sm text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 delay-${skillIndex * 50}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnicalSkills;