
import React from 'react';
import Section from './Section';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Collective Robotic Site Preparation",
      description: "We develop tools and techniques for multi-robot collaboration aimed at automating construction site preparation tasks. Our frameworks enable aerial-ground robot coordination, with UAVs providing mapping and localization to guide UGVs in earthmoving operations.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      highlights: [
        "Real-time computer vision for UAV-UGV coordination",
        "Shepherd toolkit for high-level motion planning",
        "Autonomous outdoor construction robotics"
      ]
    },
    {
      title: "Eco-Friendly Robotic Additive Manufacturing",
      description: "Our lab explores sustainable construction using locally sourced materials through robotic additive manufacturing. This approach reduces transportation needs and tailors buildings to their environmental context while addressing the challenges of irregular natural materials.",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
      highlights: [
        "Optimized earthen mixtures for robotic printing",
        "Multimode techniques combining robotic and manual processes",
        "Applications from desert soil to lunar regolith"
      ]
    },
    {
      title: "Human-Robot Building Craft Transfer",
      description: "We develop methods to digitally preserve traditional building crafts by transferring artisanal skills to robotic systems. Through motion capture and analysis of skilled craftspeople, we encode tacit knowledge into adaptive fabrication protocols for industrial robots.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      highlights: [
        "Motion tracking of traditional stonework techniques",
        "Translation of human gestures to robotic toolpaths",
        "Adaptive fabrication based on material feedback"
      ]
    }
  ];

  return (
    <Section id="projects" className="bg-background">
      <div className="mb-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 animate-fade-in text-foreground">Featured Projects</h2>
        <p className="text-foreground/80 max-w-3xl mx-auto animate-fade-in">
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
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">{project.title}</h3>
              <p className="text-foreground/80 mb-6">{project.description}</p>
              
              {project.highlights && (
                <ul className="mb-6 space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/90">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
              
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
