
import React from 'react';
import Section from './Section';
import { AspectRatio } from './ui/aspect-ratio';

const ResearchSection = () => {
  const researchAreas = [{
    title: 'Collective Construction Robots',
    description: 'Developing systems for coordinated structure assembly by multiple robotic agents working together effectively.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
  }, {
    title: 'On-site Adaptive Fabrication',
    description: 'Creating robotic tools that use real-time sensory feedback to adapt to changing conditions during construction.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1'
  }, {
    title: 'Autonomous Construction Robotics',
    description: 'Building autonomous robotic systems capable of navigating and operating in unstructured construction environments.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
  }, {
    title: 'Human-Robot Collaboration',
    description: 'Designing interfaces and systems that enable effective teamwork between human workers and robotic assistants.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
  }];

  return <>
      <Section id="mission" className="py-28 md:py-40 pb-0 md:pb-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-6 lg:col-span-5">
            <h2 className="font-display text-4xl md:text-5xl mb-4 animate-fade-in leading-tight lg:text-4xl font-normal">Our Mission</h2>
            <p className="text-foreground/70 text-xl animate-fade-in font-semibold md:text-6xl">
              Advancing robotics for construction and architecture
            </p>
          </div>
          <div className="md:col-span-6 lg:col-span-6">
            <p className="text-foreground/70 mb-6 text-2xl">
              We specialize in enhancing productivity, safety, and sustainability in the built environment through innovative robotic solutions.
            </p>
            <p className="text-foreground/70 text-2xl">
              Our interdisciplinary team comprises experts in robotics, engineering, and architecture, dedicated to translating innovations into practical solutions.
            </p>
          </div>
        </div>
      </Section>

      <Section id="research" className="bg-secondary/30 p-0 pt-0 mt-0" fullWidth>
        <div className="space-y-0">
          {researchAreas.map((area, index) => (
            <div 
              key={index} 
              className="relative h-screen w-full overflow-hidden animate-fade-in" 
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="absolute inset-0 w-full h-full">
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{ 
                    backgroundImage: `url(${area.image})`,
                    backgroundBlendMode: 'overlay',
                    backgroundColor: 'rgba(0,0,0,0.7)'
                  }} 
                />
              </div>
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-6 md:px-8">
                  <div className="max-w-xl text-left">
                    <h3 className="font-display text-3xl md:text-5xl font-semibold mb-6 text-white">{area.title}</h3>
                    <p className="text-white/90 text-xl md:text-2xl">{area.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="py-16 text-center animate-fade-in">
          <p className="text-foreground/70 max-w-3xl mx-auto">
            To learn more about our latest research and explore collaboration opportunities, please feel free to get in touch. Let's shape the future together.
          </p>
        </div>
      </Section>
    </>;
};

export default ResearchSection;
