import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  return (
    <div className="p-8 border-b border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <GraduationCap className="text-blue-600" size={24} />
        Education
      </h2>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Bachelor of Technology in Computer Science and Engineering (AI & ML)</h3>
            <p className="text-lg text-blue-700 font-semibold mb-1">VIT Bhopal University</p>
            <p className="text-gray-600 mb-2">Location: Kothri-Kalan, Madhya Pradesh</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>2023 - 2027</span>
              </div>
              <div className="flex items-center gap-1">
                <Award size={14} />
                <span className="font-semibold text-green-700">CGPA: 8.2/10.0</span>
              </div>
            </div>
          </div>
          {/* <div className="text-center md:text-right">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
              <Award size={16} />
              Dean's List
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Education;