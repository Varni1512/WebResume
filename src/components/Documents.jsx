import React from 'react';
import { Download, User, ExternalLink } from 'lucide-react';

const Documents = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Download className="text-blue-600" size={24} />
        Documents & Portfolio
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Resume Download */}
        <a 
          href="/Varnikumar.pdf" 
          download 
          className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 group shadow-lg"
        >
          <div className="p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors duration-300">
            <Download className="text-white group-hover:animate-bounce" size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Download Resume</h3>
            <p className="text-blue-100 text-sm">Get my latest resume in PDF format</p>
          </div>
        </a>
        
        {/* Portfolio */}
        <a 
          href="https://varnikumarportfolio.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 group shadow-lg"
        >
          <div className="p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors duration-300">
            <User className="text-white" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">View Portfolio</h3>
            <p className="text-purple-100 text-sm">Explore my projects and work</p>
          </div>
          <ExternalLink className="text-purple-200 group-hover:text-white transition-colors duration-300" size={20} />
        </a>
      </div>
    </div>
  );
};

export default Documents;