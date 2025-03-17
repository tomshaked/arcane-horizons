// Define the structure for a publication
export interface Publication {
  title: string;
  authors: string;
  year: number;
  source?: string;
  link?: string;
}

// Define the structure for a research project
export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  longDescription: string[];
  image: string;
  videoSrc?: string; // Optional video source for hero section
  publications: Publication[];
  relatedResearch: string[]; // IDs of related research projects
}

export const researchProjects: ResearchProject[] = [
  {
    id: 'robotic-earthmoving',
    title: 'Robotic Earthmoving',
    description: 'Investigating autonomous ground shaping for construction and landscape applications. Research includes robotic aggregate manipulation, terrain modeling, and noise-mitigating ground-forming techniques.',
    longDescription: [
      'Our research investigates autonomous ground shaping for construction and landscape applications.',
      'We develop methods for robotic aggregate manipulation, terrain modeling, and noise-mitigating ground-forming techniques.',
      'This work explores scalable, adaptive robotic land modification in urban, rural, and extraterrestrial contexts, integrating digital simulation and execution tools.'
    ],
    videoSrc: '/assets/videos/Robotic_Earthmoving_Processes.mp4',
    image: '/assets/images/research/Robotic_Earthmoving_Processes.jpg',
    publications: [
      {
        title: 'Earth-Shaping with Heterogeneous Robotic Teams: From Sim to Real',
        authors: 'Federico Oliva, Tom Shaked, Karen-Lee Bar-Sinai, Omer Shalev, Oren Elmakis, Ari Meles-Braverman, Amir Degani',
        year: 2024,
        source: 'Climbing and Walking Robots Conference, Springer',
        link: 'https://www.researchgate.net/publication/384344853_Earth-Shaping_with_Heterogeneous_Robotic_Teams_From_Sim_to_Real'
      },
      {
        title: 'Aggregate-Forming Planner for Autonomous Earth-Moving',
        authors: 'Tom Shaked, Karen Lee Bar-Sinai, Ari Meles-Braverman, Oren Elmakis, Amir Degani',
        year: 2023,
        source: 'IEEE Access',
        link: 'https://www.researchgate.net/publication/374930162_Aggregate-Forming_Planner_for_Autonomous_Earth-moving'
      },
      {
        title: 'Informing Grounds: A Theoretical Framework and Iterative Process for Robotic Groundscaping of Remote Sites',
        authors: 'Karen Lee Bar-Sinai, Tom Shaked, Aaron Sprecher',
        year: 2019,
        source: 'ACADIA',
        link: 'https://www.researchgate.net/publication/337945482_Informing_Grounds_A_Theoretical_Framework_and_Iterative_Process_for_Robotic_Groundscaping_of_Remote_Sites'
      },
      {
        title: 'Toward Acoustic Landscapes: A Digital Design Workflow for Embedding Noise Reduction in Ground-Forming',
        authors: 'Karen Lee Bar-Sinai, Tom Shaked, Elif Simge Fettahoglu, Jochen Krimm, Ekaterina Pestriakova, Liubov Kniazeva, Sharon Friedberg, Benedikt Boucsein',
        year: 2023,
        source: 'Journal of Digital Landscape Architecture',
        link: 'https://www.researchgate.net/publication/370980617_Toward_Acoustic_Landscapes_A_Digital_Design_Workflow_for_Embedding_Noise_Reduction_in_Ground-forming'
      }
    ],
    relatedResearch: ['performative-ground-forming', 'additive-manufacturing-with-local-soil', 'uav-ugv-collaboration']
  },
  {
    id: 'uav-ugv-collaboration',
    title: 'UAV-UGV Collaboration',
    description: 'Research on integrating aerial (UAV) and ground (UGV) robots for automated construction site preparation.',
    longDescription: [
      'Our research focuses on integrating aerial (UAV) and ground (UGV) robots for automated construction site preparation.',
      'We develop vision-based approaches for surveying, material transport, and site setup, improving efficiency and reducing manual intervention in large-scale operations.',
      'Our systems combine drone-based mapping with autonomous ground vehicles to streamline construction processes and enhance site logistics.'
    ],
    videoSrc: '', // Empty string for no video
    image: '/assets/images/research/UAV-UGV_Collaboration.jpg',
    publications: [
      {
        title: 'Earth-Shaping with Heterogeneous Robotic Teams: From Sim to Real',
        authors: 'Federico Oliva, Tom Shaked, Karen-Lee Bar-Sinai, Omer Shalev, Oren Elmakis, Ari Meles-Braverman, Amir Degani',
        year: 2024,
        source: 'Climbing and Walking Robots Conference, Springer',
        link: 'https://www.researchgate.net/publication/384344853_Earth-Shaping_with_Heterogeneous_Robotic_Teams_From_Sim_to_Real'
      },
      {
        title: 'Vision-Based UAV-UGV Collaboration for Autonomous Construction Site Preparation',
        authors: 'Oren Elmakis, Tom Shaked, Amir Degani',
        year: 2022,
        source: 'IEEE Access',
        link: 'https://www.researchgate.net/publication/360192685_Vision-Based_UAV-UGV_Collaboration_for_Autonomous_Construction_Site_Preparation'
      },
      {
        title: 'BREEZE—Boundary Red Emission Zone Estimation Using Unmanned Aerial Vehicles',
        authors: 'Oren Elmakis, Tom Shaked, Barak Fishbain, Amir Degani',
        year: 2022,
        source: 'Sensors',
        link: 'https://www.researchgate.net/publication/362207406_BREEZE-Boundary_Red_Emission_Zone_Estimation_Using_Unmanned_Aerial_Vehicles'
      }
    ],
    relatedResearch: ['robotic-earthmoving', 'additive-manufacturing-with-local-soil']
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
    videoSrc: '/assets/videos/Robotic_Soil_3D_Printing.mp4',
    image: '/assets/images/research/Robotic_Soil_3D_Printing.jpg',
    publications: [
      {
        title: 'Robotic Tools, Native Matter: Workflow and Methods for Geomaterial Reconstitution Using Additive Manufacturing',
        authors: 'Karen Lee Bar-Sinai, Tom Shaked, Aaron Sprecher',
        year: 2021,
        source: 'Architectural Science Review',
        link: 'https://www.researchgate.net/publication/349989665_Robotic_tools_native_matter_workflow_and_methods_for_geomaterial_reconstitution_using_additive_manufacturing'
      },
      {
        title: 'Stimulated Soil for Continuous Shell Structures',
        authors: 'Roni Hillel, Tom Shaked, Michael Tsesarsky, Aaron Sprecher',
        year: 2024,
        source: 'IASS',
        link: 'https://www.researchgate.net/publication/385131103_Stimulated_Soil_for_Continuous_Shell_Structures'
      },
      {
        title: 'Exploring Robotic Fabrication Using Stimulated Soil',
        authors: 'Roni Hillel, Tom Shaked, Michael Tsesarsky, Aaron Sprecher',
        year: 2024,
        source: 'International Conference on Education and Research in Computer-Aided Architectural Design',
        link: 'https://www.researchgate.net/publication/383999997_Exploring_Robotic_Fabrication_Using_Stimulated_Soil'
      },
      {
        title: 'Aggregate-Forming Planner for Autonomous Earth-Moving',
        authors: 'Tom Shaked, Karen Lee Bar-Sinai, Ari Meles-Braverman, Oren Elmakis, Amir Degani',
        year: 2023,
        source: 'IEEE Access',
        link: 'https://www.researchgate.net/publication/374930162_Aggregate-Forming_Planner_for_Autonomous_Earth-moving'
      },
      {
        title: 'Earth-Shaping with Heterogeneous Robotic Teams: From Sim to Real',
        authors: 'Tom Shaked, Amir Degani',
        year: 2023,
        source: 'Conference on Robotics and Simulation',
        link: 'https://www.researchgate.net/publication/384344853_Earth-Shaping_with_Heterogeneous_Robotic_Teams_From_Sim_to_Real'
      }
    ],
    relatedResearch: ['robotic-earthmoving', 'performative-ground-forming', 'robotic-stone-carving']
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
    videoSrc: '', // Empty string for no video
    image: '/assets/images/research/Acoustic_Terrain_Forming.jpg',
    publications: [
      {
        title: 'Toward Acoustic Landscapes: A Digital Design Workflow for Embedding Noise Reduction in Ground-Forming',
        authors: 'Karen Lee Bar-Sinai, Tom Shaked, Elif Simge Fettahoglu, Jochen Krimm, Ekaterina Pestriakova, Liubov Kniazeva, Sharon Friedberg, Benedikt Boucsein',
        year: 2023,
        source: 'Journal of Digital Landscape Architecture',
        link: 'https://www.researchgate.net/publication/370980617_Toward_Acoustic_Landscapes_A_Digital_Design_Workflow_for_Embedding_Noise_Reduction_in_Ground-forming'
      },
      {
        title: 'Embedding Acoustic Analysis in Landscape Architecture Design Processes: A Case Study of Munich Airport',
        authors: 'Karen Lee Bar-Sinai, Tom Shaked, Elif Simge Fettahoglu, Jochen Krimm, Benedikt Boucsein',
        year: 2023,
        source: 'Buildings',
        link: 'https://www.researchgate.net/publication/366878235_Embedding_Acoustic_Analysis_in_Landscape_Architecture_Design_Processes_A_Case_Study_of_Munich_Airport'
      },
      {
        title: 'Informing Grounds: Robotic Sand-Forming Simulating Remote Autonomous Lunar Groundscaping',
        authors: 'Karen Lee Bar-Sinai, Tom Shaked, Aaron Sprecher',
        year: 2019,
        source: 'ACADIA',
        link: 'https://www.researchgate.net/publication/337945482_Informing_Grounds_A_Theoretical_Framework_and_Iterative_Process_for_Robotic_Groundscaping_of_Remote_Sites'
      }
    ],
    relatedResearch: ['robotic-earthmoving', 'additive-manufacturing-with-local-soil']
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
    videoSrc: '', // Empty string for no video
    image: '/assets/images/research/Digital_Stone_Carving_Analysis.jpg',
    publications: [
      {
        title: 'Adaptive Robotic Stone Carving: Method, Tools, and Experiments',
        authors: 'Tom Shaked, Karen Lee Bar-Sinai, Aaron Sprecher',
        year: 2021,
        source: 'Automation in Construction',
        link: 'https://www.researchgate.net/publication/352681602_Adaptive_robotic_stone_carving_Method_tools_and_experiments'
      },
      {
        title: 'Craft to Site: Middleware for In Situ Robotic Stonework',
        authors: 'Tom Shaked, Karen Lee Bar-Sinai, Aaron Sprecher',
        year: 2020,
        source: 'Construction Robotics',
        link: 'https://www.researchgate.net/publication/345455092_Craft_to_site_Middleware_for_in_situ_robotic_stonework'
      },
      {
        title: 'Device and method for adaptive robotic stone surfacing',
        authors: 'Aaron Sprecher, Tom Shaked',
        year: 2022,
        source: 'US Patent App. 17/393,622',
        link: 'https://patents.google.com/patent/US20220040884A1/en'
      }
    ],
    relatedResearch: ['additive-manufacturing-with-local-soil', 'textile-design-to-manufacturing']
  },
  {
    id: 'textile-design-to-manufacturing',
    title: 'Textile Design to Manufacturing',
    description: 'Developing digital tools for robotic textile fabrication, integrating parametric design, simulation, and automation.',
    longDescription: [
      'Our research focuses on developing digital tools for robotic textile fabrication, integrating parametric design, simulation, and automation.',
      'We explore structured knits, computational patterning, and bridge digital workflows with fabrication for architecture and industrial design applications.',
      'Our methods enable novel approaches to textile manufacturing through computational design tools that span from digital conception to robotic production.'
    ],
    videoSrc: '', // Empty string for no video
    image: '/assets/images/research/Computational_Textile_Design.jpg',
    publications: [
      {
        title: 'KNITIT: A Computational Tool for Design, Simulation, and Fabrication of Multiple Structured Knits',
        authors: 'Ayelet Karmon, Yoav Sterman, Tom Shaked, Eyal Sheffer, Shoval Nir',
        year: 2018,
        source: 'ACM Symposium on Computational Fabrication',
        link: 'https://www.researchgate.net/publication/325887522_KNITIT_a_computational_tool_for_design_simulation_and_fabrication_of_multiple_structured_knits'
      },
      {
        title: 'Tool for Design and Fabrication of Knitted Components',
        authors: 'Ayelet Karmon, Shoval Nir, Tom Shaked, Eyal Sheffer, Yoav Sterman',
        year: 2024,
        source: 'US Patents 11,421,355 & 11,913,149 (2022, 2024)',
        link: 'https://www.researchgate.net/publication/346095991_Tool_for_design_and_fabrication_of_knitted_components'
      }
    ],
    relatedResearch: ['robotic-stone-carving']
  }
];
