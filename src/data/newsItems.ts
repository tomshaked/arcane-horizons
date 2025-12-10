// Define the structure for a news item
export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string[];
  image?: string;
  link?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 'clawar-2024-presentation',
    title: 'CLAWAR 2024 Conference Presentation',
    date: '2024-09-15',
    summary: 'Our team presented "Earth-Shaping with Heterogeneous Robotic Teams: From Sim to Real" at the Climbing and Walking Robots Conference.',
    content: [
      'Our research team presented groundbreaking work on heterogeneous robotic teams for earth-shaping applications at CLAWAR 2024.',
      'The presentation showcased our simulation-to-reality pipeline for autonomous ground manipulation using coordinated UAV and UGV systems.',
      'This work demonstrates practical applications of multi-robot collaboration in construction and landscape modification scenarios.'
    ],
    image: '/assets/images/research/Robotic_Earthmoving_Processes.jpg'
  },
  {
    id: 'iass-2024-soil-structures',
    title: 'IASS 2024: Stimulated Soil Research',
    date: '2024-08-20',
    summary: 'Research on stimulated soil for continuous shell structures presented at the International Association for Shell and Spatial Structures symposium.',
    content: [
      'Our latest research on using stimulated soil for continuous shell structures was presented at IASS 2024.',
      'This work explores innovative approaches to robotic fabrication using locally sourced soil materials.',
      'The research demonstrates potential applications for sustainable construction in resource-limited environments.'
    ],
    image: '/assets/images/research/Robotic_Soil_3D_Printing.jpg'
  },
  {
    id: 'ecaade-2024-robotic-fabrication',
    title: 'eCAADe 2024: Robotic Fabrication with Soil',
    date: '2024-07-10',
    summary: 'Our paper on exploring robotic fabrication using stimulated soil was presented at the Education and Research in Computer Aided Architectural Design conference.',
    content: [
      'At eCAADe 2024, we presented our research on robotic fabrication techniques using stimulated soil materials.',
      'The paper explores novel approaches to additive manufacturing with natural materials.',
      'This research contributes to the growing field of sustainable and site-adaptive construction methods.'
    ],
    image: '/assets/images/research/Robotic_Soil_3D_Printing.jpg'
  },
  {
    id: 'sensors-2024-oil-spills',
    title: 'New Publication in Sensors Journal',
    date: '2024-01-18',
    summary: 'OS-BREEZE research on oil spill boundary estimation using unmanned surface vehicles published in Sensors journal.',
    content: [
      'Our OS-BREEZE research has been published in the Sensors journal.',
      'This work presents a novel approach to oil spill boundary estimation using unmanned surface vehicles equipped with red emission zone detection.',
      'The research has applications in environmental monitoring and disaster response scenarios.'
    ],
    image: '/assets/images/research/UAV-UGV_Collaboration.jpg'
  },
  {
    id: 'dla-2023-acoustic-landscapes',
    title: 'Digital Landscape Architecture 2023',
    date: '2023-06-15',
    summary: 'Research on acoustic landscapes and noise reduction in ground-forming presented at the Digital Landscape Architecture Conference.',
    content: [
      'Our team presented research on integrating acoustic analysis with landscape design at DLA 2023.',
      'The work demonstrates a digital design workflow for embedding noise reduction capabilities in ground-forming processes.',
      'This interdisciplinary approach combines robotics, acoustics, and landscape architecture for improved urban environments.'
    ],
    image: '/assets/images/research/Acoustic_Terrain_Forming.jpg'
  }
];
