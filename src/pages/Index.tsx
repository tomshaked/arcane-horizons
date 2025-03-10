
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Check if prefers-color-scheme is dark
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Apply automatic theme based on user preference
    document.documentElement.dataset.theme = prefersDark ? "dark" : "light";
    
    // Listen for changes in color scheme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      document.documentElement.dataset.theme = e.matches ? "dark" : "light";
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Research />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
