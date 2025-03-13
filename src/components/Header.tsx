
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

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
        isScrolled ? 'bg-background/90 backdrop-blur-md py-3 shadow-md' : 'py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-xl font-display font-bold tracking-tight">ARCA</span>
          <span className="text-xl font-display font-normal tracking-tight">LABORATORY</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          {/* Link the contact button to the contact section */}
          <a href="#contact">
            <Button variant="outline" size="sm">
              Contact
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-0 z-40 bg-background dark:bg-background md:hidden shadow-lg">
          <div className="flex justify-between items-center p-6 border-b">
            <a href="#" className="flex items-center space-x-2">
              <span className="text-xl font-display font-bold tracking-tight">ARCA</span>
              <span className="text-xl font-display font-normal tracking-tight">LABORATORY</span>
            </a>
            <button
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-[calc(100%-80px)] space-y-8 p-8 animate-fade-in">
            <NavLinks mobile onClick={() => setIsMobileMenuOpen(false)} />
            {/* Link the contact button to the contact section */}
            <a href="#contact">
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
  onClick?: () => void;
}

const NavLinks = ({ mobile, onClick }: NavLinksProps) => {
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
          className={`text-${mobile ? 'xl' : 'base'} font-medium text-foreground/80 hover:text-primary transition-colors`}
          onClick={onClick}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Header;
