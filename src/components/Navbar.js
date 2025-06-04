import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await auth.signOut();
    navigate('/');
  };

  return (
    <nav className="bg-navy text-cream py-4 px-6 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <ScrollLink to="hero" smooth={true} duration={500} className="flex items-center space-x-2 cursor-pointer">
          <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#A5DAF3" strokeWidth="5" />
            <circle cx="50" cy="30" r="10" fill="#CCCCFF" />
            <rect x="40" y="45" width="20" height="30" rx="5" fill="#5D3FD3" />
            <rect x="30" y="75" width="10" height="15" rx="3" fill="#A5DAF3" />
            <rect x="60" y="75" width="10" height="15" rx="3" fill="#A5DAF3" />
          </svg>
          <span className="text-2xl font-bold tracking-tight">
            FIIR<span className="text-skyblue">Bots</span>
          </span>
        </ScrollLink>
        <div className="hidden md:flex space-x-8">
          <ScrollLink to="despre" smooth={true} duration={500} className="nav-link text-cream hover:text-skyblue transition cursor-pointer">Despre</ScrollLink>
          <ScrollLink to="proiecte" smooth={true} duration={500} className="nav-link text-cream hover:text-skyblue transition cursor-pointer">Proiecte</ScrollLink>
          <ScrollLink to="competitii" smooth={true} duration={500} className="nav-link text-cream hover:text-skyblue transition cursor-pointer">Competiții</ScrollLink>
          <ScrollLink to="echipa" smooth={true} duration={500} className="nav-link text-cream hover:text-skyblue transition cursor-pointer">Echipa</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="nav-link text-cream hover:text-skyblue transition cursor-pointer">Contact</ScrollLink>
          {user && (
            <>
              <Link to="/admin" className="nav-link text-cream hover:text-skyblue transition">Admin</Link>
              <button onClick={handleSignOut} className="nav-link text-cream hover:text-skyblue transition">Logout</button>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-cream focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-navy py-4 px-6">
          <div className="flex flex-col space-y-4">
            <ScrollLink to="despre" smooth={true} duration={500} className="text-cream hover:text-skyblue transition cursor-pointer" onClick={() => setIsOpen(false)}>Despre</ScrollLink>
            <ScrollLink to="proiecte" smooth={true} duration={500} className="text-cream hover:text-skyblue transition cursor-pointer" onClick={() => setIsOpen(false)}>Proiecte</ScrollLink>
            <ScrollLink to="competitii" smooth={true} duration={500} className="text-cream hover:text-skyblue transition cursor-pointer" onClick={() => setIsOpen(false)}>Competiții</ScrollLink>
            <ScrollLink to="echipa" smooth={true} duration={500} className="text-cream hover:text-skyblue transition cursor-pointer" onClick={() => setIsOpen(false)}>Echipa</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="text-cream hover:text-skyblue transition cursor-pointer" onClick={() => setIsOpen(false)}>Contact</ScrollLink>
            {user && (
              <>
                <Link to="/admin" className="text-cream hover:text-skyblue transition" onClick={() => setIsOpen(false)}>Admin</Link>
                <button onClick={handleSignOut} className="text-cream hover:text-skyblue transition text-left">Logout</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;