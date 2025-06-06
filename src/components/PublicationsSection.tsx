
import React from 'react';
import Section from './Section';

const PublicationsSection = () => {
  const publications = [
    {
      title: "Earth-Shaping with Heterogeneous Robotic Teams: From Sim to Real",
      authors: "Federico Oliva, Tom Shaked, Karen-Lee Bar-Sinai, Omer Shalev, Oren Elmakis, Ari Meles-Braverman, Amir Degani",
      journal: "Climbing and Walking Robots Conference, Springer",
      year: 2024,
      link: "https://www.researchgate.net/publication/384344853_Earth-Shaping_with_Heterogeneous_Robotic_Teams_From_Sim_to_Real"
    },
    {
      title: "Exploring Robotic Fabrication Using Stimulated Soil",
      authors: "Roni Hillel, Tom Shaked, Michael Tsesarsky, Aaron Sprecher",
      journal: "Proceedings of the International Conference on Education and Research in Computer Aided Architectural Design in Europe",
      year: 2024,
      link: "https://www.researchgate.net/publication/383999997_Exploring_Robotic_Fabrication_Using_Stimulated_Soil"
    },
    {
      title: "Stimulated Soil for Continuous Shell Structures",
      authors: "Roni Hillel, Tom Shaked, Michael Tsesarsky, Aaron Sprecher",
      journal: "The International Association for Shell and Spatial Structures (IASS)",
      year: 2024,
      link: "https://www.researchgate.net/publication/385131103_Stimulated_Soil_for_Continuous_Shell_Structures"
    },
    {
      title: "OS-BREEZE: Oil Spills Boundary Red Emission Zone Estimation Using Unmanned Surface Vehicles",
      authors: "Oren Elmakis, Sergei Polinov, Tom Shaked, Amir Degani",
      journal: "Sensors",
      year: 2024,
      link: "https://www.researchgate.net/publication/377614175_OS-BREEZE_Oil_Spills_Boundary_Red_Emission_Zone_Estimation_Using_Unmanned_Surface_Vehicles"
    },
    {
      title: "Toward Acoustic Landscapes: A Digital Design Workflow for Embedding Noise Reduction in Ground-forming",
      authors: "Karen Lee Bar-Sinai, Tom Shaked, Elif Simge Fettahoglu, Jochen Krimm, Ekaterina Pestriakova, Liubov Kniazeva, Sharon Friedberg, Benedikt Boucsein",
      journal: "Digital Landscape Architecture Conference",
      year: 2023,
      link: "https://www.researchgate.net/publication/370980617_Toward_Acoustic_Landscapes_A_Digital_Design_Workflow_for_Embedding_Noise_Reduction_in_Ground-forming"
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
            className="glass-panel p-6 transition-all hover:translate-x-1 group animate-fade-in"
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
