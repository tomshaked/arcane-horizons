
import { useEffect, useRef } from "react";
import Container from "./ui/container";
import { Search, Users } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.classList.add("animate-fade-in");
    }

    const handleParallax = (e: MouseEvent) => {
      if (!heroElement) return;
      
      const speed = 0.01;
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;
      
      heroElement.style.transform = `translateX(${x}px) translateY(${y}px)`;
    };

    document.addEventListener("mousemove", handleParallax);
    return () => {
      document.removeEventListener("mousemove", handleParallax);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/20 mix-blend-multiply pointer-events-none z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-network-connection-loop-animation-11587-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-gradient z-20"></div>
      </div>
      
      <Container className="relative z-30 py-20 mt-16">
        <div ref={heroRef} className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 opacity-0 animate-fade-in font-title" style={{ animationDelay: "0.3s" }}>
            ARCA Laboratory
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 opacity-0 animate-fade-in font-body" style={{ animationDelay: "0.4s" }}>
            Advancing the frontiers of technology through innovative research and development
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <a
              href="#research"
              className="px-6 py-3 font-medium bg-primary text-primary-foreground rounded-md transition-transform hover:translate-y-[-2px] inline-flex items-center justify-center gap-2 font-title"
            >
              <Search size={18} />
              Explore Research
            </a>
            <a
              href="#team"
              className="px-6 py-3 font-medium border border-border rounded-md transition-transform hover:translate-y-[-2px] bg-background/50 backdrop-blur-sm inline-flex items-center justify-center gap-2 font-title"
            >
              <Users size={18} />
              Join the Team
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
