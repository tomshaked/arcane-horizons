
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
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Set theme based on saved preference or system preference
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    document.documentElement.dataset.theme = initialTheme;
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
