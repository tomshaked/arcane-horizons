
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Initialize isScrolled based on the initial scroll position
    setIsScrolled(window.scrollY > 10);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we should show or hide the header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !isMobileMenuOpen) {
        // Scrolling down & past threshold & menu not open - hide header
        setIsHeaderVisible(false);
      } else {
        // Scrolling up or at top - show header
        setIsHeaderVisible(true);
      }
      
      // Update last scroll position
      setLastScrollY(currentScrollY);
      
      // Update the isScrolled state (for background color)
      setIsScrolled(currentScrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Always show header when mobile menu is open
      setIsHeaderVisible(true);
      // Ensure the background is visible when menu is open
      setIsScrolled(true);
    } else {
      document.body.style.overflow = '';
      // Update the scroll state based on current position when closing menu
      setIsScrolled(window.scrollY > 10);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle scrolling to the specified section when the URL hash changes
  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash && location.pathname === '/') {
      const sectionId = location.hash.substring(1); // Remove the '#' character
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure the page has fully loaded
      }
    }
  }, [location.hash, location.pathname]);

  // Function to handle section navigation
  const navigateToSection = (sectionId: string) => {
    // Ensure the header always has a background when clicked
    setIsScrolled(true);
    
    // If we're already on the home page, just scroll to the section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Otherwise, navigate to the home page with the section hash
      // Using navigate instead of window.location to prevent full page reload
      navigate(`/#${sectionId}`);
    }
    // Close mobile menu if it's open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };
  
  // Function to handle logo click
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Ensure the header always has a background when clicked
    setIsScrolled(true);
    
    // If already on homepage, refresh the view by scrolling to top
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on another page, navigate to homepage
      navigate('/');
    }
    // Close mobile menu if it's open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/90 text-black py-3 shadow-md' : 'py-6 bg-transparent text-white'
      } transform ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8">
        <a href="/" onClick={handleLogoClick} className="flex items-center space-x-2 no-underline">
          <span className="text-xl font-display font-bold tracking-tight">ARCA</span>
          <span className="text-xl font-display font-normal tracking-tight">LABORATORY</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks isScrolled={isScrolled} onNavigate={navigateToSection} />
          <button 
            onClick={() => navigateToSection('contact')}
            className={`inline-flex items-center justify-center rounded-none text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-3 py-2 ${
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
          onClick={() => {
            setIsScrolled(true);
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-0 z-40 bg-white md:hidden">
          <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-6 text-black">
            <a href="/" onClick={handleLogoClick} className="flex items-center space-x-2 no-underline">
              <span className="text-xl font-display font-bold tracking-tight">ARCA</span>
              <span className="text-xl font-display font-normal tracking-tight">LABORATORY</span>
            </a>
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
              className="inline-flex items-center justify-center rounded-none text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
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
    { name: 'Mission', sectionId: 'mission' },
    { name: 'Research', sectionId: 'research' },
    { name: 'Team', sectionId: 'team' },
    { name: 'Publications', sectionId: 'publications' },
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
