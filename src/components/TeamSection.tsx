
import React from 'react';
import Section from './Section';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Tom Shaked',
      role: 'Founder & PI',
      bio: 'Dr. Shaked leads our research endeavors in construction robotics.',
      image: 'https://storage.googleapis.com/arca-lab/team-1.jpg'
    },
    {
      name: 'Roni Hillel',
      role: 'PhD Student',
      bio: 'Roni is passionate about robotics and has a strong academic record in engineering.',
      image: 'https://storage.googleapis.com/arca-lab/team-2.jpg'
    },
    {
      name: 'Nave Segev',
      role: 'MSc Student',
      bio: 'Nave is an experienced architect with expertise in Building Information Modeling (BIM).',
      image: 'https://storage.googleapis.com/arca-lab/team-3.jpg'
    },
    {
      name: 'Ofer Finkelstein',
      role: 'MSc Student',
      bio: 'Ofer is a civil engineer with a passion for sustainable construction and material innovation.',
      image: 'https://storage.googleapis.com/arca-lab/team-4.jpg'
    },
    {
      name: 'Simon Fishkin',
      role: 'Research Assistant',
      bio: 'Simon is passionate about dynamic architectural systems.',
      image: 'https://storage.googleapis.com/arca-lab/team-1.jpg' // Reusing image as placeholder
    },
    {
      name: 'Ori Dvir',
      role: 'MSc Student',
      bio: 'With a strong background in architecture and technology, my research examines the relationship between design tools, planning methodologies, and the final expression of architectural projects. This study explores how the selection of tools—both for conceptual development and execution—shapes architectural evolution and contributes to broader shifts in the built environment. With expertise in both conventional and experimental architectural software, including graphic design, 3D modeling, and parametric tools, this research aims to provide insights into the connection between technological choices and architectural expression.',
      image: 'https://storage.googleapis.com/arca-lab/team-2.jpg' // Reusing image as placeholder
    }
  ];

  return (
    <Section id="team" className="bg-background">
      <div className="mb-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Our Team</h2>
        <p className="text-foreground/70 max-w-3xl mx-auto animate-fade-in">
          Bringing together experts in artificial intelligence, robotics, and engineering to push the boundaries of autonomous systems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="glass-panel rounded-lg overflow-hidden transition-all hover:translate-y-[-8px] group animate-fade-in"
            style={{ animationDelay: `${0.2 + index * 0.15}s` }}
          >
            <div className="aspect-square overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center grayscale transition-all duration-500 group-hover:grayscale-0"
                style={{ backgroundImage: `url(${member.image})` }}
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold mb-1 text-primary">{member.name}</h3>
              <p className="text-foreground/90 font-medium text-sm mb-3">{member.role}</p>
              <p className="text-foreground/70 text-sm">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TeamSection;
