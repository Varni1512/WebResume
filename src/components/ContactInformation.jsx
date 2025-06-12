import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInformation = () => {
  return (
    <div className="p-8 border-b border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Mail className="text-blue-600" size={24} />
        Contact Information
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 group">
          <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
            <Mail className="text-blue-600" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">Email</p>
            <a href="mailto:varnikumarp@gmail.com" className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
              varnikumarp@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors duration-300 group">
          <div className="p-3 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors duration-300">
            <Phone className="text-green-600" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">Phone</p>
            <a href="tel:+919510728395" className="text-gray-800 hover:text-green-600 transition-colors duration-300">
              +91 9510728395
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors duration-300 group">
          <div className="p-3 bg-red-100 rounded-full group-hover:bg-red-200 transition-colors duration-300">
            <MapPin className="text-red-600" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">Address</p>
            <p className="text-gray-800">17,Gayatrinagar<br />Ankleshwar, Gujarat 393001</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;