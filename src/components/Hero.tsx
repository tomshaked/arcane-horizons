
import React from 'react';
import Button from './Button';

const Hero = () => {
  return <div className="relative h-screen w-full overflow-hidden">
      {/* Full-page Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="object-cover w-full h-full">
          <source src="/arcane-horizons/assets/videos/arca-hero.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight md:leading-tight tracking-tight mb-6 text-white font-machina">Architectural Robotics &amp; Construction Automation</h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Link buttons wrapped in <a> tags */}
            <a href="#research" className="no-underline">
              <Button size="lg">Explore Research</Button>
            </a>
            <a href="#contact" className="no-underline">
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">Join Our Team</Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70 text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>;
};

export default Hero;
