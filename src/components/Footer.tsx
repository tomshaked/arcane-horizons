
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary/20 py-12 md:py-16 px-6 md:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-display font-bold mb-4">ARCA LABORATORY</h2>
            <p className="text-foreground/70 max-w-sm">
              Advancing Robotics for Construction and Architecture.
            </p>
            
            <div className="mt-6 flex space-x-4">
              <a href="https://www.linkedin.com/company/101662726" className="text-foreground/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://www.instagram.com/arcalaboratory/" className="text-foreground/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://github.com/ARCA-Laboratory" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.77 5.07 5.07 0 0 0-.09-3.77s-1.18-.37-3.91 1.48a13.38 13.38 0 0 0-7.16 0C6.18.73 5 1.1 5 1.1a5.07 5.07 0 0 0-.09 3.77A5.44 5.44 0 0 0 3.41 8c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.6V22"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#research" className="text-foreground/70 hover:text-primary transition-colors">Research</a></li>
              <li><a href="#team" className="text-foreground/70 hover:text-primary transition-colors">Team</a></li>
              <li><a href="#publications" className="text-foreground/70 hover:text-primary transition-colors">Publications</a></li>
              <li><a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2 text-foreground/70">
              <li>Building 55, School of Architecture</li>
              <li>Ariel University</li>
              <li>65 Ramat HaGolan St, Ariel, Israel</li>
              <li>Email: <a href="mailto:tomsha@ariel.ac.il">tomsha@ariel.ac.il</a></li>
              <li>Phone: <a href="tel:+97239066242">+972 (3) 906-6242</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} ARCA Laboratory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
