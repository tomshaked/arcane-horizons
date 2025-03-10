
import React from 'react';
import Section from './Section';

const PublicationsSection = () => {
  const publications = [
    {
      title: "Deep Reinforcement Learning for Dynamic Obstacle Avoidance in Autonomous Navigation",
      authors: "Chen, S., Rodriguez, J., & Wong, M.",
      journal: "IEEE Transactions on Robotics",
      year: 2023,
      link: "#"
    },
    {
      title: "Multi-Modal Perception for Robust Object Manipulation in Unstructured Environments",
      authors: "Rodriguez, J., Patel, A., & Chen, S.",
      journal: "International Conference on Robotics and Automation (ICRA)",
      year: 2023,
      link: "#"
    },
    {
      title: "Cooperative Multi-Agent Learning for Decentralized Task Allocation in Heterogeneous Robot Teams",
      authors: "Wong, M., Chen, S., & Smith, K.",
      journal: "Journal of Artificial Intelligence Research",
      year: 2022,
      link: "#"
    },
    {
      title: "Human-Inspired Learning Methods for Intuitive Robot Teaching",
      authors: "Patel, A., Chen, S., & Rodriguez, J.",
      journal: "ACM/IEEE International Conference on Human-Robot Interaction",
      year: 2022,
      link: "#"
    },
    {
      title: "Transfer Learning Approaches for Rapid Adaptation of Robot Manipulation Skills",
      authors: "Chen, S., Wong, M., & Patel, A.",
      journal: "Conference on Neural Information Processing Systems (NeurIPS)",
      year: 2021,
      link: "#"
    }
  ];

  return (
    <Section id="publications" className="bg-secondary/30" withDivider>
      <div className="mb-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Recent Publications</h2>
        <p className="text-foreground/70 max-w-3xl mx-auto animate-fade-in">
          Our research has been published in top-tier conferences and journals in robotics, artificial intelligence, and related fields.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {publications.map((pub, index) => (
          <div 
            key={index} 
            className="glass-panel p-6 rounded-lg transition-all hover:translate-x-1 group animate-fade-in"
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          >
            <h3 className="font-display text-lg font-medium mb-2 text-primary group-hover:text-primary/90">{pub.title}</h3>
            <p className="text-foreground/80 text-sm mb-1">{pub.authors}</p>
            <p className="text-foreground/60 text-sm mb-2">
              <span>{pub.journal}</span>
              <span className="mx-2">•</span>
              <span>{pub.year}</span>
            </p>
            <a href={pub.link} className="text-primary/80 text-sm hover:text-primary hover:underline inline-flex items-center gap-1">
              View publication
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7l10 10M7 17V7h10" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default PublicationsSection;
