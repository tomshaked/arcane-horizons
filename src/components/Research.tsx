
import { useEffect, useRef } from "react";
import Container from "./ui/container";
import ResearchItem from "./ResearchItem";

const researchData = [
  {
    title: "Autonomous Systems Design",
    description: "Research on advanced algorithms for autonomous decision-making systems with applications in robotics and vehicle navigation.",
    link: "https://arcalaboratory.com/research/autonomous-systems",
  },
  {
    title: "Machine Learning for Complex Data Analysis",
    description: "Development of novel machine learning approaches for analyzing complex, multi-dimensional datasets in scientific research.",
    link: "https://arcalaboratory.com/research/machine-learning",
  },
  {
    title: "Secure Communication Protocols",
    description: "Exploration of secure communication methods for critical infrastructure and sensitive data transmission in networked environments.",
    link: "https://arcalaboratory.com/research/secure-communications",
  },
  {
    title: "Advanced Material Science",
    description: "Investigation of innovative materials with unique properties for applications in electronics, energy storage, and structural engineering.",
    link: "https://arcalaboratory.com/research/materials",
  },
  {
    title: "Human-Computer Interaction",
    description: "Research on intuitive interfaces and interaction methods for complex technological systems to enhance usability and accessibility.",
    link: "https://arcalaboratory.com/research/hci",
  },
  {
    title: "Energy Optimization Algorithms",
    description: "Development of computational methods for optimizing energy consumption in large-scale systems and infrastructure networks.",
    link: "https://arcalaboratory.com/research/energy-optimization",
  },
];

const Research = () => {
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
    <section id="research" ref={sectionRef} className="py-24 md:py-32 bg-secondary/50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="animated-element opacity-0 section-title mb-6">Our Research</h2>
          <p className="animated-element opacity-0 section-subtitle">
            Exploring innovative solutions to complex technological challenges through rigorous scientific research and development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchData.map((item, index) => (
            <ResearchItem
              key={index}
              index={index}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Research;
