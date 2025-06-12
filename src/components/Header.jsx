import React from 'react';
import { User, GraduationCap, Calendar, Award } from 'lucide-react';

const Header = () => {
    return (
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                {/* Profile Photo */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full flex items-center justify-center border-4 border-white shadow-xl overflow-hidden">
                        <img
                            src="/main.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </div>


                {/* Name and Title */}
                <div className="text-center md:text-left flex-1">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">Varnikumar Patel</h1>
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        <GraduationCap size={24} className="text-blue-200" />
                        <p className="text-xl text-blue-100">Computer Science & Engineering (AI & ML) Student</p>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-blue-200">
                        <Calendar size={16} />
                        <p className="text-sm">Expected Graduation: May 2027</p>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-blue-200">
                        <Award size={16} />
                        <p className="text-sm">Current CGPA: 8.2/10.0</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;