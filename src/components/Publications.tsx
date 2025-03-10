
import { useEffect, useRef } from "react";
import Container from "./ui/container";
import PublicationItem from "./PublicationItem";

const publicationsData = [
  {
    title: "Adaptive Neural Networks for Autonomous Navigation in Unstructured Environments",
    authors: "Chen, S., Wilson, E., & Patel, R.",
    venue: "Journal of Autonomous Systems",
    year: "2023",
    link: "https://arcalaboratory.com/publications/adaptive-neural-networks",
  },
  {
    title: "Secure Communication Protocols for Critical Infrastructure Protection",
    authors: "Patel, R., Lee, J., & Chen, S.",
    venue: "IEEE Transactions on Security",
    year: "2023",
    link: "https://arcalaboratory.com/publications/secure-communication",
  },
  {
    title: "Novel Materials for High-Efficiency Energy Storage Systems",
    authors: "Lee, J., Wilson, E., & Chen, S.",
    venue: "Advanced Materials Research",
    year: "2022",
    link: "https://arcalaboratory.com/publications/novel-materials",
  },
  {
    title: "User-Centered Design for Complex Technological Systems",
    authors: "Wilson, E., Chen, S., & Lee, J.",
    venue: "International Conference on HCI",
    year: "2022",
    link: "https://arcalaboratory.com/publications/user-centered-design",
  },
  {
    title: "Optimizing Energy Consumption in Large-Scale Infrastructure Networks",
    authors: "Chen, S., Patel, R., & Lee, J.",
    venue: "Journal of Energy Optimization",
    year: "2021",
    link: "https://arcalaboratory.com/publications/optimizing-energy",
  },
];

const Publications = () => {
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
    <section id="publications" ref={sectionRef} className="py-24 md:py-32 bg-secondary/50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="animated-element opacity-0 section-title mb-6">Publications</h2>
          <p className="animated-element opacity-0 section-subtitle">
            Our latest research publications showcasing our contributions to advancing technology and innovation.
          </p>
        </div>
        <div className="space-y-4">
          {publicationsData.map((publication, index) => (
            <PublicationItem
              key={index}
              index={index}
              title={publication.title}
              authors={publication.authors}
              venue={publication.venue}
              year={publication.year}
              link={publication.link}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Publications;
