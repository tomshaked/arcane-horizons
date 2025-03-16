
import React from 'react';
import { Link, useParams } from 'react-router-dom';
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
    id: 'robotic-stone-carving',
    title: 'Robotic Stone Carving',
    description: 'Developing robotic workflows for adaptive stone fabrication, integrating computational design, robotic precision, and material constraints.',
    longDescription: [
      'Our research focuses on developing robotic workflows for adaptive stone fabrication that integrate computational design, robotic precision, and material constraints.',
      'We explore on-site robotic carving, middleware for integrating robots in traditional craft, and techniques for automating stonework while preserving design intent and material integrity.',
      'These methods enable customized, data-driven fabrication for both construction and artistic applications, bridging traditional craftsmanship with advanced robotics.'
    ],
    image: '/arcane-horizons/assets/images/research/chisel_stroke_analysis1.jpg',
    publications: [
      {
        title: 'Adaptive robotic stone carving: Method, tools, and experiments',
        authors: 'Shaked, T., et al.',
        year: 2021,
        link: '#'
      },
      {
        title: 'Craft to site: Middleware for in situ robotic stonework',
        authors: 'Hillel, R., Shaked, T., et al.',
        year: 2020,
        link: '#'
      }
    ]
  },
  {
    id: 'robotic-earthmoving',
    title: 'Robotic Earthmoving',
    description: 'Investigating autonomous ground shaping for construction and landscape applications.',
    longDescription: [
      'Our research investigates autonomous ground shaping for construction and landscape applications, including robotic aggregate manipulation, digital planning for terrain modeling, and ground-forming techniques for noise mitigation.',
      'We explore methods for scalable, adaptive robotic land modification in urban, rural, and extraterrestrial contexts, integrating digital tools for simulation, planning, and execution.',
      'This work creates new possibilities for intelligent landscape design and construction that responds to environmental, acoustic, and functional requirements.'
    ],
    image: '/arcane-horizons/assets/images/research/img18.jpg',
    publications: [
      {
        title: 'Aggregate-forming planner for autonomous earth-moving',
        authors: 'Shaked, T., Bar-Sinai, K.L., et al.',
        year: 2023,
        link: '#'
      },
      {
        title: 'Informing grounds: Robotic sand-forming simulating remote autonomous lunar groundscaping',
        authors: 'Bar-Sinai, K.L., Shaked, T., et al.',
        year: 2019,
        link: '#'
      },
      {
        title: 'Toward Acoustic Landscapes: A Digital Design Workflow for Embedding Noise Reduction in Ground-forming',
        authors: 'Bar-Sinai, K.L., Shaked, T., Fettahoglu Oezgen, E.S., Boucsein, B.',
        year: 2023,
        link: 'https://www.researchgate.net/publication/370980617_Toward_Acoustic_Landscapes_A_Digital_Design_Workflow_for_Embedding_Noise_Reduction_in_Ground-forming'
      }
    ]
  },
  {
    id: 'human-robot-fabrication',
    title: 'Human-Robot Fabrication',
    description: 'Exploring collaborative robotic workflows that embed human expertise in material-aware fabrication.',
    longDescription: [
      'Our research explores collaborative robotic workflows that embed human expertise in material-aware fabrication processes.',
      'We examine how robots can enhance adaptive, context-responsive construction, integrating human creativity with computational and robotic precision.',
      'Projects address automation in craft, robotic interventions in traditional materials, and hybrid workflows for designing with emergent material properties, creating new possibilities for architectural expression and construction efficiency.'
    ],
    image: '/arcane-horizons/assets/images/research/5b.jpg',
    publications: [
      {
        title: 'Autonomous in craft-embedding human sensibility in architectural robotic fabrication',
        authors: 'Shaked, T., et al.',
        year: 2020,
        link: '#'
      },
      {
        title: 'Robotic tools, native matter: Workflow and methods for geomaterial reconstitution using additive manufacturing',
        authors: 'Hillel, R., Shaked, T., et al.',
        year: 2021,
        link: '#'
      }
    ]
  },
  {
    id: 'uav-ugv-construction',
    title: 'UAV-UGV Construction',
    description: 'Developing autonomous multi-robot systems for construction site preparation.',
    longDescription: [
      'Our research develops autonomous multi-robot systems for construction site preparation, combining aerial (UAV) and ground (UGV) robots.',
      'We focus on vision-based coordination, task allocation, and environmental adaptation for robotic site preparation in challenging conditions.',
      'These methods aim to reduce manual labor, optimize logistics, and enhance the adaptability of construction automation in complex environments.'
    ],
    image: '/arcane-horizons/assets/images/research/Yotam-21.jpg',
    publications: [
      {
        title: 'Vision-based UAV-UGV collaboration for autonomous construction site preparation',
        authors: 'Segev, N., Shaked, T., et al.',
        year: 2022,
        link: '#'
      }
    ]
  },
  {
    id: 'computational-fabrication',
    title: 'Computational Fabrication',
    description: 'Designing digital tools for robotic and computational fabrication.',
    longDescription: [
      'Our research focuses on designing digital tools for robotic and computational fabrication, with applications in textile-based construction, additive manufacturing, and mobile robotic control.',
      'We investigate simulation-driven workflows, toolpath optimization, and automation strategies that bridge material properties with computational design.',
      'This work enables advanced robotic fabrication techniques that expand architectural possibilities while maintaining control over material expression and performance.'
    ],
    image: '/arcane-horizons/assets/images/research/Img8535.jpg',
    publications: [
      {
        title: 'KNITIT: A computational tool for design, simulation, and fabrication of multiple structured knits',
        authors: 'Shaked, T., et al.',
        year: 2018,
        link: '#'
      },
      {
        title: 'Tool for design and fabrication of knitted components',
        authors: 'Shaked, T., et al.',
        year: 2024,
        source: 'US Patents, 2022, 2024',
        link: '#'
      }
    ]
  },
  {
    id: 'acoustic-ground-design',
    title: 'Acoustic Ground Design',
    description: 'Integrating robotic terrain shaping with noise mitigation strategies.',
    longDescription: [
      'Our research integrates robotic terrain shaping with noise mitigation strategies, exploring digital workflows for ground-forming that embed acoustic analysis in landscape architecture.',
      'We develop optimized, performative land formations to reduce urban noise, combining robotic automation with environmental performance modeling.',
      'This work aims to enhance urban soundscapes through intelligent landscape design that responds to acoustic requirements while maintaining aesthetic and functional quality.'
    ],
    image: '/arcane-horizons/assets/images/research/bb_img11.jpg',
    publications: [
      {
        title: 'Embedding Acoustic Analysis in Landscape Architecture Design Processes: A Case Study of Munich Airport',
        authors: 'Bar-Sinai, K.L., Shaked, T., et al.',
        year: 2023,
        link: '#'
      },
      {
        title: 'Toward Acoustic Landscapes: A Digital Design Workflow for Embedding Noise Reduction in Ground-forming',
        authors: 'Bar-Sinai, K.L., Shaked, T., Fettahoglu Oezgen, E.S., Boucsein, B.',
        year: 2023,
        link: 'https://www.researchgate.net/publication/370980617_Toward_Acoustic_Landscapes_A_Digital_Design_Workflow_for_Embedding_Noise_Reduction_in_Ground-forming'
      }
    ]
  }
];

const ResearchDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
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
