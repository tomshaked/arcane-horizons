
import React from 'react';
import Section from './Section';

const ResearchSection = () => {
  const researchAreas = [
    {
      title: 'Reinforcement Learning for Robotics',
      description: 'Developing advanced RL algorithms that enable robotic systems to learn complex tasks through interaction with their environment.',
      image: 'https://storage.googleapis.com/arca-lab/research-1.jpg'
    },
    {
      title: 'Computer Vision & Perception',
      description: 'Creating robust visual perception systems that allow robots to understand and navigate complex, dynamic environments.',
      image: 'https://storage.googleapis.com/arca-lab/research-2.jpg'
    },
    {
      title: 'Multi-Agent Coordination',
      description: 'Investigating frameworks for multiple robots to collaborate effectively on complex tasks requiring coordination.',
      image: 'https://storage.googleapis.com/arca-lab/research-3.jpg'
    }
  ];

  return (
    <Section id="research" className="bg-secondary/30" withDivider dividerPosition="top">
      <div className="mb-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Research Focus</h2>
        <p className="text-foreground/70 max-w-3xl mx-auto animate-fade-in">
          Our laboratory conducts pioneering research at the intersection of artificial intelligence, 
          robotics, and autonomous systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {researchAreas.map((area, index) => (
          <div
            key={index}
            className="group glass-panel rounded-lg overflow-hidden transition-all hover:translate-y-[-8px] hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
            style={{ animationDelay: `${0.2 + index * 0.2}s` }}
          >
            <div className="aspect-video overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${area.image})` }}
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold mb-2 text-primary">{area.title}</h3>
              <p className="text-foreground/70">{area.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ResearchSection;
