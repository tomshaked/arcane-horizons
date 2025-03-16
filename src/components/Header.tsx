
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <NavLinks isScrolled={isScrolled} />
          {/* Link the contact button to the contact section */}
          <a href="#contact" className="no-underline">
            <Button variant={isScrolled ? "outline" : "primary"} size="sm" className={!isScrolled ? "bg-white text-black hover:bg-white/90" : ""}>
              Contact
            </Button>
          </a>
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
            <NavLinks mobile onClick={() => setIsMobileMenuOpen(false)} />
            {/* Link the contact button to the contact section */}
            <a href="#contact" className="no-underline">
              <Button variant="outline" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  isScrolled?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ mobile, isScrolled, onClick }: NavLinksProps) => {
  const links = [
    { name: 'Research', href: '#research' },
    { name: 'Team', href: '#team' },
    { name: 'Publications', href: '#publications' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`text-${mobile ? 'xl' : 'base'} font-medium no-underline hover:underline ${
            mobile || isScrolled ? 'text-black' : 'text-white'
          } hover:${mobile || isScrolled ? 'text-black/80' : 'text-white/80'} transition-colors`}
          onClick={onClick}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Header;
