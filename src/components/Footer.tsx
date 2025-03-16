
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const navigateToSection = (sectionId: string) => {
    navigate(`/#${sectionId}`);
  };

  return (
    <footer className="bg-black text-white py-12 md:py-16 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-display font-bold mb-4">ARCA LABORATORY</h2>
            <p className="text-white/70 max-w-sm">
              Advancing Robotics for Construction and Architecture.
            </p>
            
            <div className="mt-6 flex space-x-4">
              <a href="https://www.linkedin.com/company/101662726" className="text-white/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://www.instagram.com/arcalaboratory/" className="text-white/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://github.com/ARCA-Laboratory" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.77 5.07 5.07 0 0 0-.09-3.77s-1.18-.37-3.91 1.48a13.38 13.38 0 0 0-7.16 0C6.18.73 5 1.1 5 1.1a5.07 5.07 0 0 0-.09 3.77A5.44 5.44 0 0 0 3.41 8c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.6V22"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              <li><button onClick={() => navigateToSection('research')} className="text-white/70 hover:text-primary transition-colors bg-transparent border-none cursor-pointer">Research</button></li>
              <li><button onClick={() => navigateToSection('team')} className="text-white/70 hover:text-primary transition-colors bg-transparent border-none cursor-pointer">Team</button></li>
              <li><button onClick={() => navigateToSection('publications')} className="text-white/70 hover:text-primary transition-colors bg-transparent border-none cursor-pointer">Publications</button></li>
              <li><button onClick={() => navigateToSection('projects')} className="text-white/70 hover:text-primary transition-colors bg-transparent border-none cursor-pointer">Projects</button></li>
              <li><button onClick={() => navigateToSection('contact')} className="text-white/70 hover:text-primary transition-colors bg-transparent border-none cursor-pointer">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-white/70">
              <li>Building 55, School of Architecture</li>
              <li>Ariel University</li>
              <li>65 Ramat HaGolan St, Ariel, Israel</li>
              <li>Email: <a href="mailto:tomsha@ariel.ac.il" className="text-white/70 hover:text-primary">tomsha@ariel.ac.il</a></li>
              <li>Phone: <a href="tel:+97239066242" className="text-white/70 hover:text-primary">+972 (3) 906-6242</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} ARCA Laboratory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
