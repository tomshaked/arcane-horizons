import React from 'react';
import Section from './Section';
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
      <Section id="mission" className="py-28 md:py-40" fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-6 lg:col-span-5 md:ml-8 lg:ml-16 xl:ml-24">
            <h2 className="font-display text-4xl md:text-5xl mb-4 animate-fade-in leading-tight lg:text-4xl font-normal">Our Mission</h2>
            <p className="text-foreground/70 text-xl animate-fade-in font-bold md:text-6xl">
              Advancing robotics for construction and architecture
            </p>
          </div>
          <div className="md:col-span-6 lg:col-span-6 lg:pr-16 xl:pr-24">
            <p className="text-foreground/70 mb-6 text-lg">
              We specialize in enhancing productivity, safety, and sustainability in the built environment through innovative robotic solutions.
            </p>
            <p className="text-foreground/70 text-lg">
              Our interdisciplinary team comprises experts in robotics, engineering, and architecture, dedicated to translating innovations into practical solutions.
            </p>
          </div>
        </div>
      </Section>

      <Section id="research" className="bg-secondary/30" withDivider dividerPosition="top">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 animate-fade-in">ARCA Research Lab</h2>
        </div>

        <div className="mb-16">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 text-center animate-fade-in">Research Focus</h3>
          <p className="text-foreground/70 max-w-3xl mx-auto text-center animate-fade-in mb-12">
            Our research centers on creating innovative computational tools and robotic technologies for design, simulation, and fabrication:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {researchAreas.map((area, index) => <div key={index} className="group glass-panel rounded-lg overflow-hidden transition-all hover:translate-y-[-8px] hover:shadow-lg hover:shadow-primary/10 animate-fade-in" style={{
          animationDelay: `${0.2 + index * 0.1}s`
        }}>
              <div className="aspect-video overflow-hidden">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{
              backgroundImage: `url(${area.image})`
            }} />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2 text-primary">{area.title}</h3>
                <p className="text-foreground/70">{area.description}</p>
              </div>
            </div>)}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <p className="text-foreground/70 max-w-3xl mx-auto">
            To learn more about our latest research and explore collaboration opportunities, please feel free to get in touch. Let's shape the future together.
          </p>
        </div>
      </Section>
    </>;
};
export default ResearchSection;