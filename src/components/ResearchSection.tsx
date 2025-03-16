
import React, { useEffect, useRef } from 'react';
import Section from './Section';
import { AspectRatio } from './ui/aspect-ratio';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResearchSection = () => {
  const researchAreas = [{
    title: 'Robotic Stone Carving',
    description: 'Developing robotic workflows for adaptive stone fabrication, integrating computational design, robotic precision, and material constraints.',
    image: '/arcane-horizons/assets/images/research/chisel_stroke_analysis1.jpg',
    link: '/research/robotic-stone-carving'
  }, {
    title: 'Robotic Earthmoving',
    description: 'Investigating autonomous ground shaping for construction and landscape applications, including robotic aggregate manipulation and digital planning for terrain modeling.',
    image: '/arcane-horizons/assets/images/research/img18.jpg',
    link: '/research/robotic-earthmoving'
  }, {
    title: 'Human-Robot Fabrication',
    description: 'Exploring collaborative robotic workflows that embed human expertise in material-aware fabrication for adaptive, context-responsive construction.',
    image: '/arcane-horizons/assets/images/research/5b.jpg',
    link: '/research/human-robot-fabrication'
  }, {
    title: 'UAV-UGV Construction',
    description: 'Developing autonomous multi-robot systems for construction site preparation, combining aerial (UAV) and ground (UGV) robots with vision-based coordination.',
    image: '/arcane-horizons/assets/images/research/Yotam-21.jpg',
    link: '/research/uav-ugv-construction'
  }, {
    title: 'Computational Fabrication',
    description: 'Designing digital tools for robotic and computational fabrication, with applications in textile-based construction and additive manufacturing.',
    image: '/arcane-horizons/assets/images/research/Img8535.jpg',
    link: '/research/computational-fabrication'
  }, {
    title: 'Acoustic Ground Design',
    description: 'Integrating robotic terrain shaping with noise mitigation to develop optimized, performative land formations that reduce urban noise.',
    image: '/arcane-horizons/assets/images/research/bb_img11.jpg',
    link: '/research/acoustic-ground-design'
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
                    <p className="text-white/90 text-xl md:text-2xl scroll-reveal mb-6">{area.description}</p>
                    <Link
                      to={area.link}
                      className="inline-flex items-center text-white hover:text-white/80 text-lg scroll-reveal group"
                    >
                      Learn more about {area.title} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
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
