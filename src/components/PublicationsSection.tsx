
import React from 'react';
import Section from './Section';

const PublicationsSection = () => {
  const publications = [
    {
      title: "Construction Robotics - Past, Now, and Future",
      authors: "Shaked, T.",
      journal: "Proceedings of the ISARC - International Symposium on Automation and Robotics in Construction",
      year: 2023,
      link: "https://www.researchgate.net/publication/372864638_Construction_Robotics_-_Past_Now_and_Future"
    },
    {
      title: "Remote Control of Heavy Articulated Machines: Experimental Evaluation of Force Feedback Control vs Conventional Remote Control",
      authors: "Shaked, T., Birnboim, A., Park, T., Aharony, N., Elhajj, I., Hoffman, G., and Zacksenhouse, M.",
      journal: "Proceedings of the ISARC - International Symposium on Automation and Robotics in Construction",
      year: 2023,
      link: "https://www.researchgate.net/publication/372864671_Remote_Control_of_Heavy_Articulated_Machines_Experimental_Evaluation_of_Force_Feedback_Control_vs_Conventional_Remote_Control"
    },
    {
      title: "Evaluating Different Interaction Modalities for Teleoperation of Excavators in VR",
      authors: "Shaked, T., Birnboim, A., Park, T., and Zacksenhouse, M.",
      journal: "Proceedings of the Human Factors and Ergonomics Society Annual Meeting",
      year: 2022,
      link: "https://www.researchgate.net/publication/363785208_Evaluating_Different_Interaction_Modalities_for_Teleoperation_of_Excavators_in_VR"
    },
    {
      title: "Augmented Perception for Excavator Remote Control",
      authors: "Shaked, T., Park, T., Aluma, R., Birnboim, A., and Zacksenhouse, M.",
      journal: "Proceedings of the ISARC - International Symposium on Automation and Robotics in Construction",
      year: 2022,
      link: "https://www.researchgate.net/publication/362294518_Augmented_Perception_for_Excavator_Remote_Control"
    },
    {
      title: "Evaluation of Unimodal Visual Feedback in Force Feedback Bilateral Teleoperation of an Excavator Arm",
      authors: "Birnboim, A., Shaked, T., and Zacksenhouse, M.",
      journal: "Proceedings of the ISARC - International Symposium on Automation and Robotics in Construction",
      year: 2021,
      link: "https://www.researchgate.net/publication/354352857_Evaluation_of_Unimodal_Visual_Feedback_in_Force_Feedback_Bilateral_Teleoperation_of_an_Excavator_Arm"
    }
  ];

  return (
    <Section id="publications" className="bg-secondary/30" withDivider>
      <div className="mb-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Recent Publications</h2>
        <p className="text-foreground/70 max-w-3xl mx-auto animate-fade-in">
          Our research has been published in top-tier conferences and journals in robotics, construction automation, and human-machine interaction.
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
            <a 
              href={pub.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary/80 text-sm hover:text-primary hover:underline inline-flex items-center gap-1"
            >
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
