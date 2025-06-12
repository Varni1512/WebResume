import React from 'react';
import { ExternalLink, Github, Linkedin, Code2, BookOpen } from 'lucide-react';

const ProfessionalLinks = () => {
  return (
    <div className="p-8 border-b border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <ExternalLink className="text-blue-600" size={24} />
        Professional Links
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* GitHub */}
        <a 
          href="https://github.com/Varni1512" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-gray-800 hover:bg-gray-50 transition-all duration-300 group transform hover:scale-105"
        >
          <Github className="text-gray-700 group-hover:text-black transition-colors duration-300" size={24} />
          <div>
            <p className="font-semibold text-gray-800">GitHub</p>
            <p className="text-sm text-gray-600">Code Repositories</p>
          </div>
        </a>
        
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/varnikumarpatel" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group transform hover:scale-105"
        >
          <Linkedin className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300" size={24} />
          <div>
            <p className="font-semibold text-gray-800">LinkedIn</p>
            <p className="text-sm text-gray-600">Professional Profile</p>
          </div>
        </a>
        
        {/* LeetCode */}
        <a 
          href="https://leetcode.com/u/varni1505/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-300 group transform hover:scale-105"
        >
          <Code2 className="text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300" size={24} />
          <div>
            <p className="font-semibold text-gray-800">LeetCode</p>
            <p className="text-sm text-gray-600">Coding Practice</p>
          </div>
        </a>
        
        {/* GeeksforGeeks */}
        <a 
          href="https://www.geeksforgeeks.org/user/varni152/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all duration-300 group transform hover:scale-105"
        >
          <BookOpen className="text-green-600 group-hover:text-green-700 transition-colors duration-300" size={24} />
          <div>
            <p className="font-semibold text-gray-800">GeeksforGeeks</p>
            <p className="text-sm text-gray-600">Articles & Practice</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProfessionalLinks;