// Define the structure for a news item
export interface NewsItem {
  id: string;
  title: string;
  shortTitle: string; // Important part of title for colored square display
  date: string;
  summary: string;
  content: string[];
  image?: string;
  link?: string;
}

// Color palette for news items (cycles through)
export const newsColors = [
  'hsl(220, 70%, 45%)',  // Blue
  'hsl(160, 60%, 35%)',  // Teal
  'hsl(350, 65%, 45%)',  // Rose
  'hsl(30, 70%, 45%)',   // Orange
  'hsl(270, 55%, 45%)',  // Purple
  'hsl(180, 50%, 35%)',  // Cyan
  'hsl(45, 75%, 40%)',   // Amber
  'hsl(200, 65%, 40%)',  // Sky
];

export const newsItems: NewsItem[] = [
  {
    id: 'erc-parallel-grant-2025',
    title: 'ARCA Lab Wins Ministry of Science ERC-Parallel Grant',
    shortTitle: 'ERC-Parallel Grant',
    date: '2025-12-07',
    summary: 'ARCA Lab has been awarded a 4-year Ministry of Innovation, Science & Technology grant under the ERC-Parallel (Starting) program.',
    content: [
      'The Ministry of Innovation, Science & Technology has granted ARCA Lab a 4-year ERC-Parallel (Starting) award to support new research on autonomous multi-robot construction systems.',
      'The project explores advanced automation across key phases of the construction process and includes international collaboration.',
      'Candidates interested in contributing to this research are encouraged to apply to our [open Postdoctoral and PhD positions](#/news/open-research-positions).'
    ]
  },
  {
    id: 'kkl-grant-2025',
    title: 'KKL 2025 Research Grant Awarded to ARCA Lab',
    shortTitle: 'KKL Research Grant',
    date: '2025-12-01',
    summary: 'ARCA Lab has been awarded a 2025 KKL–JNF research grant to support innovative work on sustainable trail and ground-stabilization technologies.',
    content: [
      'ARCA Lab has been awarded a competitive KKL–JNF grant to advance new robotic and environmentally oriented methods for stabilizing forest roads and hiking trails.',
      'The project includes laboratory development and field testing in KKL forest areas.',
      'Researchers interested in joining the team are invited to view our [open Postdoctoral and PhD positions](#/news/open-research-positions).'
    ]
  },
  {
    id: 'open-research-positions',
    title: 'Open Postdoctoral and PhD Positions at ARCA Lab',
    shortTitle: 'Open Positions',
    date: '2024-12-10',
    summary: 'We are seeking motivated postdoctoral researchers and PhD candidates to join our team in collective robotic construction research.',
    content: [
      'Our group conducts advanced research in robotic construction, digital fabrication, autonomous multi-agent systems, and simulation-based methods for construction. We welcome candidates from architecture, engineering, robotics, computer science, materials science, or related fields.',
      '**Research Focus Areas:**',
      '- Multi-agent robotic construction (UAVs, UGVs, robotic arms)\n- Robotic 3D printing and automated fabrication workflows\n- Autonomous earthworks and physics-based simulation\n- Digital twins for construction',
      '**What We Offer:**',
      '- Competitive scholarships\n- Access to advanced research facilities\n- Opportunities for publications, conference participation, and grant applications\n- Mentorship and career development within an interdisciplinary research environment\n- Support for international researchers with visas, housing, and relocation',
      '**Required Qualifications:**',
      '- For Postdoc: PhD (completed or nearing completion) in a relevant discipline\n- For Doctoral: Master\'s degree in a relevant field\n- Published research or strong academic record\n- Strong quantitative skills\n- Excellent scientific communication skills in English',
      '**To Apply:**',
      'Please send a single PDF to [tomsha@ariel.ac.il](mailto:tomsha@ariel.ac.il) including:',
      '- A Cover Letter explaining your research interests\n- A CV with a list of publications (if applicable)\n- Contact information of 2-3 potential referees\n- Academic transcripts',
      'Positions are open until filled. For more information [contact us](#contact).'
    ],
    image: '/assets/images/news/Lab_Presentation.jpg'
  },
  {
    id: 'clawar-2024-presentation',
    title: 'CLAWAR 2024 Conference Presentation',
    shortTitle: 'CLAWAR 2024',
    date: '2024-09-15',
    summary: 'Our team presented "Earth-Shaping with Heterogeneous Robotic Teams: From Sim to Real" at the Climbing and Walking Robots Conference.',
    content: [
      'Our research team presented groundbreaking work on heterogeneous robotic teams for earth-shaping applications at CLAWAR 2024.',
      'The presentation showcased our simulation-to-reality pipeline for autonomous ground manipulation using coordinated UAV and UGV systems.',
      'This work demonstrates practical applications of multi-robot collaboration in construction and landscape modification scenarios.'
    ]
  },
  {
    id: 'iass-2024-soil-structures',
    title: 'IASS 2024: Stimulated Soil Research',
    shortTitle: 'IASS 2024',
    date: '2024-08-20',
    summary: 'Research on stimulated soil for continuous shell structures presented at the International Association for Shell and Spatial Structures symposium.',
    content: [
      'Our latest research on using stimulated soil for continuous shell structures was presented at IASS 2024.',
      'This work explores innovative approaches to robotic fabrication using locally sourced soil materials.',
      'The research demonstrates potential applications for sustainable construction in resource-limited environments.'
    ]
  },
  {
    id: 'ecaade-2024-robotic-fabrication',
    title: 'eCAADe 2024: Robotic Fabrication with Soil',
    shortTitle: 'eCAADe 2024',
    date: '2024-07-10',
    summary: 'Our paper on exploring robotic fabrication using stimulated soil was presented at the Education and Research in Computer Aided Architectural Design conference.',
    content: [
      'At eCAADe 2024, we presented our research on robotic fabrication techniques using stimulated soil materials.',
      'The paper explores novel approaches to additive manufacturing with natural materials.',
      'This research contributes to the growing field of sustainable and site-adaptive construction methods.'
    ]
  },
  {
    id: 'sensors-2024-oil-spills',
    title: 'New Publication in Sensors Journal',
    shortTitle: 'Sensors Journal',
    date: '2024-01-18',
    summary: 'OS-BREEZE research on oil spill boundary estimation using unmanned surface vehicles published in Sensors journal.',
    content: [
      'Our OS-BREEZE research has been published in the Sensors journal.',
      'This work presents a novel approach to oil spill boundary estimation using unmanned surface vehicles equipped with red emission zone detection.',
      'The research has applications in environmental monitoring and disaster response scenarios.'
    ]
  },
  {
    id: 'dla-2023-acoustic-landscapes',
    title: 'Digital Landscape Architecture 2023',
    shortTitle: 'DLA 2023',
    date: '2023-06-15',
    summary: 'Research on acoustic landscapes and noise reduction in ground-forming presented at the Digital Landscape Architecture Conference.',
    content: [
      'Our team presented research on integrating acoustic analysis with landscape design at DLA 2023.',
      'The work demonstrates a digital design workflow for embedding noise reduction capabilities in ground-forming processes.',
      'This interdisciplinary approach combines robotics, acoustics, and landscape architecture for improved urban environments.'
    ]
  }
];
