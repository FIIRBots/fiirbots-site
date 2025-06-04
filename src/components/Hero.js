import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-br from-navy to-purple text-cream min-h-[90vh] flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Inovație în <span className="text-skyblue">Robotică</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Echipa de robotică a Facultății de Inginerie Industrială și Robotică din cadrul Universității Politehnica București.
            </p>
            <div className="flex flex-wrap gap-4">
              <ScrollLink to="proiecte" smooth={true} duration={500} className="bg-skyblue text-navy px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition shadow-lg cursor-pointer">
                Proiectele Noastre
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} className="border-2 border-skyblue text-skyblue px-6 py-3 rounded-lg font-medium hover:bg-skyblue hover:bg-opacity-10 transition cursor-pointer">
                Contactează-ne
              </ScrollLink>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="robot-animation">
              <svg className="w-64 h-64 md:w-80 md:h-80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="60" y="30" width="80" height="70" rx="10" fill="#A5DAF3" />
                <circle cx="80" cy="60" r="10" fill="#CCCCFF" />
                <circle cx="120" cy="60" r="10" fill="#CCCCFF" />
                <circle cx="80" cy="60" r="5" fill="#5D3FD3" />
                <circle cx="120" cy="60" r="5" fill="#5D3FD3" />
                <rect x="75" y="80" width="50" height="5" rx="2.5" fill="#15253E" />
                <rect x="70" y="100" width="60" height="70" rx="5" fill="#5D3FD3" />
                <rect x="40" y="110" width="30" height="10" rx="5" fill="#A5DAF3" />
                <rect x="130" y="110" width="30" height="10" rx="5" fill="#A5DAF3" />
                <rect x="80" y="170" width="10" height="20" rx="3" fill="#A5DAF3" />
                <rect x="110" y="170" width="10" height="20" rx="3" fill="#A5DAF3" />
                <rect x="95" y="20" width="10" height="10" rx="5" fill="#CCCCFF" />
                <rect x="97.5" y="10" width="5" height="10" rx="2.5" fill="#CCCCFF" />
                <rect x="80" y="115" width="40" height="20" rx="3" fill="#15253E" />
                <circle cx="90" cy="125" r="3" fill="#A5DAF3" />
                <circle cx="100" cy="125" r="3" fill="#CCCCFF" />
                <circle cx="110" cy="125" r="3" fill="#A5DAF3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;