
import { useEffect, useRef } from "react";
import Container from "./ui/container";
import TeamMember from "./TeamMember";

const teamData = [
  {
    name: "Dr. Sarah Chen",
    role: "Principal Investigator",
    bio: "Leading expert in machine learning with over 15 years of experience in developing autonomous systems for real-world applications.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    profileLink: "https://arcalaboratory.com/team/schen",
  },
  {
    name: "Dr. Raj Patel",
    role: "Senior Researcher",
    bio: "Specializes in secure communication protocols and cryptography with applications in critical infrastructure protection.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    profileLink: "https://arcalaboratory.com/team/rpatel",
  },
  {
    name: "Dr. Emma Wilson",
    role: "Research Scientist",
    bio: "Expert in human-computer interaction focusing on intuitive interfaces for complex technological systems.",
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    profileLink: "https://arcalaboratory.com/team/ewilson",
  },
  {
    name: "Dr. James Lee",
    role: "Research Scientist",
    bio: "Specializes in advanced materials science with a focus on energy storage solutions and sustainable technologies.",
    imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    profileLink: "https://arcalaboratory.com/team/jlee",
  },
];

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll(".animated-element");
    animatedElements?.forEach((el) => observer.observe(el));

    return () => {
      animatedElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="team" ref={sectionRef} className="py-24 md:py-32">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="animated-element opacity-0 section-title mb-6">Our Team</h2>
          <p className="animated-element opacity-0 section-subtitle">
            Meet the brilliant minds behind our groundbreaking research and technological innovations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member, index) => (
            <TeamMember
              key={index}
              index={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              imageUrl={member.imageUrl}
              profileLink={member.profileLink}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;
