
import React, { useEffect, useRef } from 'react';
import Section from './Section';
import { AspectRatio } from './ui/aspect-ratio';

const ResearchSection = () => {
  const researchAreas = [{
    title: 'Collective Construction Robots',
    description: 'Developing systems for coordinated structure assembly by multiple robotic agents working together effectively.',
    image: '/arcane-horizons/assets/images/research/bb_img11.jpg'
  }, {
    title: 'On-site Adaptive Fabrication',
    description: 'Creating robotic tools that use real-time sensory feedback to adapt to changing conditions during construction.',
    image: '/arcane-horizons/assets/images/research/Img8535.jpg'
  }, {
    title: 'Autonomous Construction Robotics',
    description: 'Building autonomous robotic systems capable of navigating and operating in unstructured construction environments.',
    image: '/arcane-horizons/assets/images/research/5b.jpg'
  }, {
    title: 'Human-Robot Collaboration',
    description: 'Designing interfaces and systems that enable effective teamwork between human workers and robotic assistants.',
    image: '/arcane-horizons/assets/images/research/Yotam-21.jpg'
  }];

  // Create refs for each scrollable element
  const sectionRefs = useRef([]);
  
  useEffect(() => {
    // Initialize IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add animation classes when element is visible
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          (entry.target as HTMLElement).style.opacity = '1';
        }
      });
    }, observerOptions);

    // Get all elements with scroll-reveal class
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => {
      // Set initial opacity
      (el as HTMLElement).style.opacity = '0';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return <>
      <Section id="mission" className="py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-6 lg:col-span-5">
            <h2 className="font-display text-4xl md:text-5xl mb-4 scroll-reveal leading-tight lg:text-4xl font-normal">Our Mission</h2>
            <p className="text-foreground/70 text-xl scroll-reveal font-semibold md:text-6xl">
              Advancing robotics for construction and architecture
            </p>
          </div>
          <div className="md:col-span-6 lg:col-span-6">
            <p className="text-foreground/70 mb-6 text-2xl scroll-reveal">
              We specialize in enhancing productivity, safety, and sustainability in the built environment through innovative robotic solutions.
            </p>
            <p className="text-foreground/70 text-2xl scroll-reveal">
              Our interdisciplinary team comprises experts in robotics, engineering, and architecture, dedicated to translating innovations into practical solutions.
            </p>
          </div>
        </div>
      </Section>

      <Section id="research" className="bg-secondary/30 p-0" fullWidth noPadding>
        <div className="space-y-0 m-0 p-0">
          {researchAreas.map((area, index) => (
            <div 
              key={index} 
              className="relative h-screen w-full overflow-hidden scroll-reveal m-0 p-0" 
            >
              <div className="absolute inset-0 w-full h-full">
                <div 
                  className="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out"
                  style={{ 
                    backgroundImage: `url(${area.image})`,
                    backgroundBlendMode: 'overlay',
                    backgroundColor: 'rgba(0,0,0,0.65)'
                  }} 
                />
              </div>
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-6 md:px-8 max-w-[80rem]">
                  <div className="max-w-xl text-left">
                    <h3 className="font-display text-3xl md:text-5xl font-semibold mb-6 text-white scroll-reveal">{area.title}</h3>
                    <p className="text-white/90 text-xl md:text-2xl scroll-reveal">{area.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="py-16 text-center scroll-reveal">
          <p className="text-foreground/70 max-w-3xl mx-auto">
            To learn more about our latest research and explore collaboration opportunities, please feel free to get in touch. Let's shape the future together.
          </p>
        </div>
      </Section>
    </>;
};

export default ResearchSection;
