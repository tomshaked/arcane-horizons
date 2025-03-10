
import { useState, useEffect } from "react";
import Container from "./ui/container";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Research", href: "#research" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "navbar-blur py-3" : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-medium transition-opacity hover:opacity-80"
        >
          ARCA Laboratory
        </a>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          <button
            className="p-2 text-foreground/80 hover:text-foreground transition-colors"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
