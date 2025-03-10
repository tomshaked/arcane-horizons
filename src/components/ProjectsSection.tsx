
import React from 'react';
import Section from './Section';
import Button from './Button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Adaptive Manipulation Robot",
      description: "A robotic arm platform with advanced ML capabilities that can learn to manipulate novel objects with minimal training.",
      image: "https://storage.googleapis.com/arca-lab/project-1.jpg"
    },
    {
      title: "Multi-Robot Coordination System",
      description: "Framework enabling teams of heterogeneous robots to coordinate complex tasks in dynamic environments.",
      image: "https://storage.googleapis.com/arca-lab/project-2.jpg"
    },
    {
      title: "Autonomous Navigation in Unstructured Terrain",
      description: "Robot navigation system using reinforcement learning to traverse complex, unstructured environments safely.",
      image: "https://storage.googleapis.com/arca-lab/project-3.jpg"
    }
  ];

  return (
    <Section id="projects" className="bg-background">
      <div className="mb-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Featured Projects</h2>
        <p className="text-foreground/70 max-w-3xl mx-auto animate-fade-in">
          Exploring the boundaries of what's possible in robotics and AI through our innovative research projects.
        </p>
      </div>

      <div className="space-y-24 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`flex flex-col-reverse ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center animate-fade-in`}
            style={{ animationDelay: `${0.2 + index * 0.3}s` }}
          >
            <div className="flex-1">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-primary">{project.title}</h3>
              <p className="text-foreground/80 mb-6">{project.description}</p>
              <Button variant="outline">Learn More</Button>
            </div>
            <div className="flex-1 overflow-hidden rounded-lg group">
              <div 
                className="w-full aspect-video bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
