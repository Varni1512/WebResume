import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import ContactInformation from './components/ContactInformation';
import ProfessionalLinks from './components/ProfessionalLinks';
import Documents from './components/Documents';
import Footer from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className={`max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <Header />
        <Education />
        <TechnicalSkills isVisible={isVisible} />
        <ContactInformation />
        <ProfessionalLinks />
        <Documents />
        <Footer />
      </div>
    </div>
  );
}

export default App;