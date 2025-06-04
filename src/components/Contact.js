import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy mb-16 section-title">Contactează-ne</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6">Informații de Contact</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-navy p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-skyblue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-navy font-semibold text-lg">Adresă</h4>
                  <p className="text-gray-700">
                    Facultatea de Inginerie Industrială și Robotică<br />
                    Universitatea Politehnica București<br />
                    Splaiul Independenței 313, București
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-navy p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-skyblue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-navy font-semibold text-lg">Email</h4>
                  <p className="text-gray-700">contact@fiirbots.ro</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-navy p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-skyblue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-navy font-semibold text-lg">Telefon</h4>
                  <p className="text-gray-700">+40 21 402 9100</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-navy p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-skyblue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-navy font-semibold text-lg">Program</h4>
                  <p className="text-gray-700">Luni - Vineri: 9:00 - 17:00</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-navy font-semibold text-lg mb-4">Urmărește-ne</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com/fiirbots" className="bg-navy text-skyblue p-3 rounded-full hover:bg-purple transition">
                  <i className="fab fa-facebook-f w-6 h-6" />
                </a>
                <a href="https://twitter.com/fiirbots" className="bg-navy text-skyblue p-3 rounded-full hover:bg-purple transition">
                  <i className="fab fa-twitter w-6 h-6" />
                </a>
                <a href="https://linkedin.com/company/fiirbots" className="bg-navy text-skyblue p-3 rounded-full hover:bg-purple transition">
                  <i className="fab fa-linkedin-in w-6 h-6" />
                </a>
                <a href="https://github.com/fiirbots" className="bg-navy text-skyblue p-3 rounded-full hover:bg-purple transition">
                  <i className="fab fa-github w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <svg className="w-64 h-64 text-navy" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </section>
  );
}

export default Contact;