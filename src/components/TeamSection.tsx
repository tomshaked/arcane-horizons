
import React from 'react';
import Section from './Section';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Laboratory Director',
      bio: 'Leading expert in reinforcement learning with over 15 years of experience in autonomous robotics systems.',
      image: 'https://storage.googleapis.com/arca-lab/team-1.jpg'
    },
    {
      name: 'Dr. James Rodriguez',
      role: 'Principal Investigator',
      bio: 'Specializes in computer vision and deep learning approaches for robotic perception.',
      image: 'https://storage.googleapis.com/arca-lab/team-2.jpg'
    },
    {
      name: 'Dr. Mei Wong',
      role: 'Research Scientist',
      bio: 'Expert in multi-agent systems and distributed AI for coordinated robotic tasks.',
      image: 'https://storage.googleapis.com/arca-lab/team-3.jpg'
    },
    {
      name: 'Dr. Alex Patel',
      role: 'Postdoctoral Researcher',
      bio: 'Focuses on human-robot interaction and intuitive control systems for collaborative robots.',
      image: 'https://storage.googleapis.com/arca-lab/team-4.jpg'
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
