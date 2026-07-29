
import React from 'react';
import Section from './Section';
import { getAssetPath } from '@/utils/assetPaths';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Dr. Tom Shaked',
      role: 'Director & PI',
      bio: 'Founder of ARCA Lab, Tom leads research in architectural robotics and construction automation.',
      image: '/assets/images/team/tom-shaked.jpg'
    },
    {
      name: 'Dr. Uri Dubin',
      role: 'Researcher',
      bio: 'Uri specializes in computer vision, robotics, and AI-driven perception, and is the founder of RobotAI.',
      image: '/assets/images/team/uri-dubin.jpg'
    },
    {
      name: 'Roni Hillel',
      role: 'PhD Student',
      bio: 'Roni develops bio-cemented soils and MICP for sustainable robotic fabrication.',
      image: '/assets/images/team/roni-hillel.jpg'
    },
    {
      name: 'Nave Segev',
      role: 'PhD Student',
      bio: 'Nave advances BIM-to-CAM workflows for automated construction.',
      image: '/assets/images/team/nave-segev.jpg'
    },
    {
      name: 'Ofer Finkelstein',
      role: 'MSc Student',
      bio: 'Ofer explores sensor-driven robotic fabrication and adaptive 3D printing.',
      image: '/assets/images/team/ofer-finkelstein.jpg'
    },
    {
      name: 'Ori Dvir',
      role: 'MSc Student',
      bio: 'Ori investigates computational design, visual programming, and architectural software.',
      image: '/assets/images/team/ori-dvir.jpg'
    },
    {
      name: 'Maor Brill',
      role: 'MSc Student',
      bio: 'Maor explores sustainable robotic 3D printing using industrial waste and cement-free materials.',
      image: '/assets/images/team/maor-brill.jpg'
    },
    {
      name: 'Slava Rubtsov',
      role: 'MSc Student',
      bio: 'Slava develops graph-based planning for mobile robotic 3D printing.',
      image: '/assets/images/team/slava-rubtsov.jpg'
    },
    {
      name: 'Lia Hornfeld',
      role: 'MSc Student',
      bio: 'Lia investigates early-stage decision-making for sustainable robotic 3D printing.',
      image: '/assets/images/team/lia-horenfeld.jpg'
    },
    {
      name: 'Shiran Wiessman',
      role: 'Research Assistant',
      bio: 'Shiran investigates robotic autonomy and multi-agent systems for autonomous construction.',
      image: '/assets/images/team/shiran-wiessman.jpg'
    },
    {
      name: 'Simon Fishkin',
      role: 'Research Assistant',
      bio: 'Simon explores environmental acoustics and robotic earthmoving.',
      image: '/assets/images/team/simon-fishkin.jpg'
    },
    {
      name: 'Maybe You?',
      role: 'Join ARCA Lab',
      bio: 'Interested in robotics, AI, computational design, or digital fabrication? Contact us about research opportunities.',
      image: '/assets/images/team/simon-fishkin.jpg'
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
        {teamMembers.map((member, index) => {
          const isJoinCard = index === teamMembers.length - 1;

          const scrollToContact = () => {
            const element = document.getElementById('contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          };

          const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              scrollToContact();
            }
          };

          return (
            <div
              key={index}
              className={`glass-panel overflow-hidden transition-all hover:translate-y-[-8px] group animate-fade-in ${
                isJoinCard
                  ? 'cursor-pointer border-dashed border-2 border-border/60 hover:border-foreground/30 hover:shadow-lg hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                  : ''
              }`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              role={isJoinCard ? 'button' : undefined}
              tabIndex={isJoinCard ? 0 : undefined}
              onClick={isJoinCard ? scrollToContact : undefined}
              onKeyDown={isJoinCard ? handleKeyDown : undefined}
              aria-label={isJoinCard ? 'Join ARCA Lab - scroll to contact section' : undefined}
            >
              <div className="aspect-square overflow-hidden">
                {isJoinCard ? (
                  <div className="w-full h-full flex items-center justify-center bg-secondary/60 text-foreground/25 group-hover:text-foreground/45 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="96"
                      height="96"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-24 h-24"
                      aria-hidden="true"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                ) : (
                  <div
                    className="w-full h-full bg-cover bg-center grayscale transition-all duration-500 group-hover:grayscale-0"
                    style={{ backgroundImage: `url(${getAssetPath(member.image)})` }}
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-1 text-primary">{member.name}</h3>
                <p className="text-foreground/90 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-foreground/70 text-sm">{member.bio}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default TeamSection;
