import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { ArrowLeft } from 'lucide-react';

// Define the structure for a publication
interface Publication {
  title: string;
  authors: string;
  year: number;
  source?: string;
  link?: string;
}

// Define the structure for a research project
interface ResearchProject {
  id: string;
  title: string;
  description: string;
  longDescription: string[];
  image: string;
  publications: Publication[];
}

const researchProjects: ResearchProject[] = [
  {
    id: 'uav-ugv-collaboration',
    title: 'UAV-UGV Collaboration',
    description: 'Research on integrating aerial (UAV) and ground (UGV) robots for automated construction site preparation.',
    longDescription: [
      'Our research focuses on integrating aerial (UAV) and ground (UGV) robots for automated construction site preparation.',
      'We develop vision-based approaches for surveying, material transport, and site setup, improving efficiency and reducing manual intervention in large-scale operations.',
      'Our systems combine drone-based mapping with autonomous ground vehicles to streamline construction processes and enhance site logistics.'
    ],
    image: '/arcane-horizons/assets/images/research/UAV-UGV_Collaboration.jpg',
    publications: [
      {
        title: 'Vision-Based UAV-UGV Collaboration for Autonomous Construction Site Preparation',
        authors: 'Oren Elmakis, Tom Shaked, Amir Degani',
        year: 2022,
        source: 'IEEE Access',
        link: 'https://www.researchgate.net/publication/370735851_Os-Breeze_Oil_Spills_Boundary_Red_Emission_Zone_Estimation_Using_Unmanned_Aerial_Vehicles'
      },
      {
        title: 'BREEZE—Boundary Red Emission Zone Estimation Using Unmanned Aerial Vehicles',
        authors: 'Oren Elmakis, Tom Shaked, Beni Fishbain, Amir Degani',
        year: 2022,
        source: 'Sensors',
        link: 'https://www.researchgate.net/publication/377614175_OS-BREEZE_Oil_Spills_Boundary_Red_Emission_Zone_Estimation_Using_Unmanned_Surface_Vehicles'
      }
    ]
  },
  {
    id: 'textile-based-manufacturing',
    title: 'Textile-Based Manufacturing',
    description: 'Developing digital tools for robotic textile fabrication, integrating parametric design, simulation, and automation.',
    longDescription: [
      'Our research focuses on developing digital tools for robotic textile fabrication, integrating parametric design, simulation, and automation.',
      'We explore structured knits, computational patterning, and bridge digital workflows with fabrication for architecture and industrial design applications.',
      'Our methods enable novel approaches to textile manufacturing through computational design tools that span from digital conception to robotic production.'
    ],
    image: '/arcane-horizons/assets/images/research/Computational_Textile_Design.jpg',
    publications: [
      {
        title: 'KNITIT: A Computational Tool for Design, Simulation, and Fabrication of Multiple Structured Knits',
        authors: 'Amit Karmon, Yael Sterman, Tom Shaked, Eyal Sheffer, Shany Nir',
        year: 2018,
        source: 'ACM Symposium on Computational Fabrication',
        link: 'https://www.researchgate.net/publication/370735851_KNITIT_A_Computational_Tool_for_Design_Simulation_and_Fabrication_of_Multiple_Structured_Knits'
      },
      {
        title: 'Tool for Design and Fabrication of Knitted Components',
        authors: 'Amit Karmon, Shany Nir, Tom Shaked, Eyal Sheffer, Yael Sterman',
        year: 2024,
        source: 'US Patents 11,421,355 & 11,913,149 (2022, 2024)',
        link: 'https://www.researchgate.net/publication/370735851_Tool_for_Design_and_Fabrication_of_Knitted_Components'
      }
    ]
  },
  {
    id: 'performative-ground-forming',
    title: 'Performative Ground Forming',
    description: 'Exploring robotic ground shaping for environmental performance, integrating acoustic analysis with landscape design.',
    longDescription: [
      'Our research explores robotic ground shaping for environmental performance, integrating acoustic analysis with landscape design.',
      'We develop noise-reducing terrain features through simulation and real-world testing, optimizing robotic construction for urban soundscapes and infrastructure.',
      'This work creates new possibilities for responsive landscapes that address environmental challenges while maintaining aesthetic and functional qualities.'
    ],
    image: '/arcane-horizons/assets/images/research/Acoustic_Terrain_Forming.jpg',
    publications: [
      {
        title: 'Toward Acoustic Landscapes: A Digital Design Workflow for Embedding Noise Reduction in Ground-Forming',
        authors: 'Keren Lee Bar-Sinai, Tom Shaked, ES Fettahoglu, J. Krimm, E. Pestriakova',
        year: 2023,
        source: 'Journal of Digital Landscape Architecture',
        link: 'https://www.researchgate.net/publication/370735851_Toward_Acoustic_Landscapes_A_Digital_Design_Workflow_for_Embedding_Noise_Reduction_in_Ground-Forming'
      },
      {
        title: 'Embedding Acoustic Analysis in Landscape Architecture Design Processes: A Case Study of Munich Airport',
        authors: 'Keren Lee Bar-Sinai, Tom Shaked, ES Fettahoglu, J. Krimm, B. Boucsein',
        year: 2023,
        source: 'Buildings',
        link: 'https://www.researchgate.net/publication/370735851_Embedding_Acoustic_Analysis_in_Landscape_Architecture_Design_Processes_A_Case_Study_of_Munich_Airport'
      },
      {
        title: 'Informing Grounds: Robotic Sand-Forming Simulating Remote Autonomous Lunar Groundscaping',
        authors: 'Keren Lee Bar-Sinai, Tom Shaked, Amir Sprecher',
        year: 2019,
        source: 'ACADIA',
        link: 'https://www.researchgate.net/publication/370735851_Informing_Grounds_Robotic_Sand-Forming_Simulating_Remote_Autonomous_Lunar_Groundscaping'
      }
    ]
  },
  {
    id: 'robotic-stone-carving',
    title: 'Robotic Stone Carving',
    description: 'Developing robotic workflows for adaptive stone carving, integrating digital design, automated toolpath planning, and material constraints.',
    longDescription: [
      'Our research focuses on developing robotic workflows for adaptive stone carving, integrating digital design, automated toolpath planning, and material constraints.',
      'We enable precise robotic stonework, combining automation with craftsmanship for construction and artistic applications.',
      'Our methods facilitate on-site robotic fabrication and middleware for integrating robots in traditional craft contexts while preserving material integrity.'
    ],
    image: '/arcane-horizons/assets/images/research/Digital_Stone_Carving_Analysis.jpg',
    publications: [
      {
        title: 'Adaptive Robotic Stone Carving: Method, Tools, and Experiments',
        authors: 'Tom Shaked, Keren Lee Bar-Sinai, Amir Sprecher',
        year: 2021,
        source: 'Automation in Construction',
        link: 'https://www.researchgate.net/publication/354170689_Adaptive_Robotic_Stone_Carving_Method_Tools_and_Experiments'
      },
      {
        title: 'Craft to Site: Middleware for In Situ Robotic Stonework',
        authors: 'Tom Shaked, Keren Lee Bar-Sinai, Amir Sprecher',
        year: 2020,
        source: 'Construction Robotics',
        link: 'https://www.researchgate.net/publication/351583426_Craft_to_site_middleware_for_in_situ_robotic_stonework'
      }
    ]
  },
  {
    id: 'robotic-earthmoving',
    title: 'Robotic Earthmoving',
    description: 'Investigating autonomous ground shaping for construction and landscape applications. Research includes robotic aggregate manipulation, terrain modeling, and noise-mitigating ground-forming techniques.',
    longDescription: [
      'Our research investigates autonomous ground shaping for construction and landscape applications.',
      'We develop methods for robotic aggregate manipulation, terrain modeling, and noise-mitigating ground-forming techniques.',
      'This work explores scalable, adaptive robotic land modification in urban, rural, and extraterrestrial contexts, integrating digital simulation and execution tools.'
    ],
    image: '/arcane-horizons/assets/images/research/Robotic_Earthmoving_Processes.jpg',
    publications: [
      {
        title: 'Aggregate-Forming Planner for Autonomous Earth-Moving',
        authors: 'Tom Shaked, Karen Lee Bar-Sinai, Ari Meles-Braverman, Oren Elmakis, Amir Degani',
        year: 2023,
        source: 'IEEE Access',
        link: 'https://www.researchgate.net/publication/374930162_Aggregate-Forming_Planner_for_Autonomous_Earth-moving'
      },
      {
        title: 'Informing Grounds: A Theoretical Framework and Iterative Process for Robotic Groundscaping of Remote Sites',
        authors: 'Karen Lee Bar-Sinai, Tom Shaked, Amir Sprecher',
        year: 2019,
        source: 'ACADIA',
        link: 'https://www.researchgate.net/publication/337945482_Informing_Grounds_A_Theoretical_Framework_and_Iterative_Process_for_Robotic_Groundscaping_of_Remote_Sites'
      },
      {
        title: 'Toward Acoustic Landscapes: A Digital Design Workflow for Embedding Noise Reduction in Ground-Forming',
        authors: 'Karen Lee Bar-Sinai, Tom Shaked, ES Fettahoglu, J. Krimm, E. Pestriakova',
        year: 2023,
        source: 'Journal of Digital Landscape Architecture',
        link: 'https://www.researchgate.net/publication/370980617_Toward_Acoustic_Landscapes_A_Digital_Design_Workflow_for_Embedding_Noise_Reduction_in_Ground-forming'
      }
    ]
  },
  {
    id: 'additive-manufacturing-with-local-soil',
    title: 'Additive Manufacturing with Local Soil',
    description: 'Exploring robotic 3D printing with native soil, integrating material processing, robotic deposition, and structural performance analysis.',
    longDescription: [
      'Our research explores robotic 3D printing with native soil, integrating material processing, robotic deposition, and structural performance analysis.',
      'We focus on sustainable, site-adaptive fabrication methods for architecture and planetary applications, using locally available materials.',
      'This work spans from earth-moving and terrain shaping to advanced soil-based 3D printing for construction applications.'
    ],
    image: '/arcane-horizons/assets/images/research/Robotic_Soil_3D_Printing.jpg',
    publications: [
      {
        title: 'Robotic Tools, Native Matter: Workflow and Methods for Geomaterial Reconstitution Using Additive Manufacturing',
        authors: 'Keren Lee Bar-Sinai, Tom Shaked, Amir Sprecher',
        year: 2021,
        source: 'Architectural Science Review',
        link: 'https://www.researchgate.net/publication/370735851_Robotic_Tools_Native_Matter_Workflow_and_Methods_for_Geomaterial_Reconstitution_Using_Additive_Manufacturing'
      },
      {
        title: 'Stimulated Soil for Continuous Shell Structures',
        authors: 'Roni Hillel, Tom Shaked, Michael Tsesarsky, Amir Sprecher',
        year: 2024,
        source: 'IASS',
        link: 'https://www.researchgate.net/publication/370735851_Stimulated_Soil_for_Continuous_Shell_Structures'
      },
      {
        title: 'Exploring Robotic Fabrication Using Stimulated Soil',
        authors: 'Roni Hillel, Tom Shaked, Michael Tsesarsky, Amir Sprecher',
        year: 2024,
        source: 'International Conference on Education and Research in Computer-Aided Architectural Design',
        link: 'https://www.researchgate.net/publication/370735851_Exploring_Robotic_Fabrication_Using_Stimulated_Soil'
      },
      {
        title: 'Aggregate-Forming Planner for Autonomous Earth-Moving',
        authors: 'Tom Shaked, Keren Lee Bar-Sinai, A. Meles-Braverman, Oren Elmakis, Amir Degani',
        year: 2023,
        source: 'IEEE Access',
        link: 'https://www.researchgate.net/publication/370735851_Aggregate-Forming_Planner_for_Autonomous_Earth-Moving'
      },
      {
        title: 'Earth-Shaping with Heterogeneous Robotic Teams: From Sim to Real',
        authors: 'Tom Shaked, Amir Degani',
        year: 2023,
        source: 'Conference on Robotics and Simulation',
        link: 'https://www.researchgate.net/publication/370735851_Earth-Shaping_with_Heterogeneous_Robotic_Teams_From_Sim_to_Real'
      }
    ]
  }
];

const ResearchDetail = () => {
  const location = useLocation();
  const projectId = location.pathname.split('/research/')[1];
  const project = researchProjects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <Section>
          <div className="text-center py-20">
            <h1 className="font-display text-4xl mb-4">Research Project Not Found</h1>
            <p className="mb-8 text-foreground/70">The research project you're looking for doesn't exist or has been moved.</p>
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80">
              <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
            </Link>
          </div>
        </Section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${project.image})`,
              backgroundBlendMode: 'overlay',
              backgroundColor: 'rgba(0,0,0,0.6)'
            }} 
          />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 md:px-8">
            <Link to="/#research" className="inline-flex items-center text-white/80 hover:text-white mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Research Areas
            </Link>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white">{project.title}</h1>
          </div>
        </div>
      </div>
      
      <Section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none">
              {project.longDescription.map((paragraph, idx) => (
                <p key={idx} className="text-foreground/80 text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-secondary/20 p-6 rounded-lg">
              <h3 className="font-display text-xl font-medium mb-4">Related Publications</h3>
              <div className="space-y-6">
                {project.publications.map((pub, idx) => (
                  <div key={idx} className="border-b border-border/40 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-medium text-primary/90 mb-1">{pub.title}</h4>
                    <p className="text-sm text-foreground/70 mb-1">{pub.authors}</p>
                    <p className="text-sm text-foreground/60 mb-2">
                      {pub.source ? `${pub.source}, ` : ''}{pub.year}
                    </p>
                    {pub.link && (
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
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default ResearchDetail;

