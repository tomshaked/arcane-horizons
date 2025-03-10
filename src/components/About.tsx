
import { useEffect, useRef } from "react";
import Container from "./ui/container";
import { cn } from "@/lib/utils";

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="animated-element opacity-0">
              <h2 className="section-title mb-6">About ARCA Laboratory</h2>
              <p className="text-muted-foreground text-lg mb-6">
                ARCA Laboratory is at the forefront of technological innovation, focusing on developing advanced solutions for complex challenges.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Our interdisciplinary team combines expertise from various fields to create transformative technologies that address real-world problems.
              </p>
              <p className="text-muted-foreground text-lg">
                With a commitment to excellence and innovation, we push the boundaries of what's possible through rigorous research and creative problem-solving.
              </p>
            </div>
          </div>
          <div className="relative h-64 md:h-auto">
            <div className={cn(
              "animated-element opacity-0 glass-panel rounded-lg absolute inset-0",
              "before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-transparent before:rounded-lg"
            )}>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium">Our Mission</h3>
                    <p className="text-muted-foreground">To develop innovative technological solutions that address complex challenges and create positive impact.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium">Our Vision</h3>
                    <p className="text-muted-foreground">To be a global leader in technological innovation, known for excellence, integrity, and transformative research.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
