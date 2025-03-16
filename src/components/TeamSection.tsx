
import React from 'react';
import Section from './Section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Tom Shaked',
      role: 'Founder & PI',
      bio: 'Dr. Shaked leads our research endeavors in construction robotics.',
      image: '/arcane-horizons/assets/images/team/tom-shaked.jpg'
    },
    {
      name: 'Roni Hillel',
      role: 'PhD Student',
      bio: 'Roni is passionate about robotics and has a strong academic record in engineering.',
      image: '/arcane-horizons/assets/images/team/roni-hillel.jpg'
    },
    {
      name: 'Nave Segev',
      role: 'MSc Student',
      bio: 'Nave is an experienced architect with expertise in Building Information Modeling (BIM).',
      image: '/arcane-horizons/assets/images/team/nave-segev.jpg'
    },
    {
      name: 'Ofer Finkelstein',
      role: 'MSc Student',
      bio: 'Ofer is a civil engineer with a passion for sustainable construction and material innovation.',
      image: '/arcane-horizons/assets/images/team/ofer-finkelstein.jpg'
    },
    {
      name: 'Ori Dvir',
      role: 'MSc Student',
      bio: 'Ori investigates the evolution of architectural expression through the impact of design tools and planning methodologies.',
      image: '/arcane-horizons/assets/images/team/ori-dvir.jpg'
    },
    {
      name: 'Simon Fishkin',
      role: 'Research Assistant',
      bio: 'Simon is passionate about dynamic architectural systems.',
      image: '/arcane-horizons/assets/images/team/simon-fishkin.jpg'
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

      <div className="px-4 sm:px-6 md:px-8 lg:px-10 relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div
                  className="glass-panel overflow-hidden transition-all hover:translate-y-[-8px] group animate-fade-in h-full"
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 sm:-translate-x-0 z-10" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 sm:translate-x-0 z-10" />
        </Carousel>
      </div>
    </Section>
  );
};

export default TeamSection;
