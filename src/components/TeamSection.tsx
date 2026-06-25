
import React from 'react';
import Section from './Section';
import { getAssetPath } from '@/utils/assetPaths';

const TeamSection = () => {
const teamMembers = [
    {
      name: 'Tom Shaked',
      role: 'Director & PI',
      bio: 'Founder of ARCA Lab, Dr. Shaked leads research in architectural robotics and construction automation.',
      image: '/assets/images/team/tom-shaked.jpg'
    },
    {
      name: 'Uri Dubin',
      role: 'Researcher',
      bio: 'Dr. Dubin is the founder of RobotAI and a researcher in computer vision, robotics, and AI-driven perception.',
      image: '/assets/images/team/uri-dubin.jpg'
    },
    {
      name: 'Roni Hillel',
      role: 'PhD Student',
      bio: 'Roni researches bio-cemented soils, MICP, and robotic fabrication using locally sourced materials.',
      image: '/assets/images/team/roni-hillel.jpg'
    },
    {
      name: 'Nave Segev',
      role: 'MSc Student',
      bio: 'Nave researches BIM-to-CAM workflows and digital continuity for automated construction.',
      image: '/assets/images/team/nave-segev.jpg'
    },
    {
      name: 'Ofer Finkelstein',
      role: 'MSc Student',
      bio: 'Ofer researches sensor-driven robotic fabrication and adaptive 3D printing of vaulted structures.',
      image: '/assets/images/team/ofer-finkelstein.jpg'
    },
    {
      name: 'Ori Dvir',
      role: 'MSc Student',
      bio: 'Ori researches computational design, visual programming, and architectural software.',
      image: '/assets/images/team/ori-dvir.jpg'
    },
    {
      name: 'Maor Brill',
      role: 'MSc Student',
      bio: 'Maor researches sustainable robotic 3D printing using industrial waste and cement-free materials.',
      image: '/assets/images/team/maor-brill.jpg'
    },
    {
      name: 'Slava Rubtsov',
      role: 'MSc Student',
      bio: 'Slava researches mobile robotic 3D printing and graph-based planning for on-site construction.',
      image: '/assets/images/team/slava-rubtsov.jpg'
    },
    {
      name: 'Shiran Wiessman',
      role: 'Research Assistant',
      bio: 'Shiran researches robotic autonomy and multi-agent systems for autonomous construction.',
      image: '/assets/images/team/shiran-wiessman.jpg'
    },
    // {
    //   name: 'Simon Fishkin',
    //   role: 'Research Assistant',
    //   bio: 'Simon researches environmental acoustics and robotic earthmoving.',
    //   image: '/assets/images/team/simon-fishkin.jpg'
    // }
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
            className="glass-panel overflow-hidden transition-all hover:translate-y-[-8px] group animate-fade-in"
            style={{ animationDelay: `${0.2 + index * 0.15}s` }}
          >
            <div className="aspect-square overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center grayscale transition-all duration-500 group-hover:grayscale-0"
                style={{ backgroundImage: `url(${getAssetPath(member.image)})` }}
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
