import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Function to handle section navigation
  const navigateToSection = (sectionId: string) => {
    // If we're already on the home page, just scroll to the section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Otherwise, navigate to the home page and then to the section
      navigate(`/#${sectionId}`);
    }
    // Close mobile menu if it's open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 text-black py-3 shadow-md' : 'py-6 bg-transparent text-white'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8">
        <Link to="/" className="flex items-center space-x-2 no-underline">
          <span className="text-xl font-display font-bold tracking-tight">ARCA</span>
          <span className="text-xl font-display font-normal tracking-tight">LABORATORY</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks isScrolled={isScrolled} onNavigate={navigateToSection} />
          <button 
            onClick={() => navigateToSection('contact')}
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-3 py-2 ${
              isScrolled 
                ? 'border border-input bg-background hover:bg-accent hover:text-accent-foreground' 
                : 'bg-white text-black hover:bg-white/90'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-0 z-40 bg-white md:hidden">
          <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-6 text-black">
            <Link to="/" className="flex items-center space-x-2 no-underline">
              <span className="text-xl font-display font-bold tracking-tight">ARCA</span>
              <span className="text-xl font-display font-normal tracking-tight">LABORATORY</span>
            </Link>
            <button
              className="text-black"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-screen space-y-8 p-8 text-black">
            <NavLinks mobile onNavigate={navigateToSection} />
            <button 
              onClick={() => navigateToSection('contact')}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  isScrolled?: boolean;
  onNavigate: (sectionId: string) => void;
}

const NavLinks = ({ mobile, isScrolled, onNavigate }: NavLinksProps) => {
  const links = [
    { name: 'Research', sectionId: 'research' },
    { name: 'Team', sectionId: 'team' },
    { name: 'Publications', sectionId: 'publications' },
    { name: 'Projects', sectionId: 'projects' },
  ];

  return (
    <>
      {links.map((link) => (
        <button
          key={link.name}
          onClick={() => onNavigate(link.sectionId)}
          className={`text-${mobile ? 'xl' : 'base'} font-medium no-underline hover:underline ${
            mobile || isScrolled ? 'text-black' : 'text-white'
          } hover:${mobile || isScrolled ? 'text-black/80' : 'text-white/80'} transition-colors bg-transparent border-none p-0`}
        >
          {link.name}
        </button>
      ))}
    </>
  );
};

export default Header;
