
# ARCA Laboratory - Configuration Guide

This guide will help you customize and maintain your ARCA Laboratory website.

## Table of Contents
- [Image and Video Configuration](#image-and-video-configuration)
- [Research Projects](#research-projects)
- [Publications](#publications)
- [Team Members](#team-members)
- [Contact Information](#contact-information)
- [Other Content Sections](#other-content-sections)
- [Deployment](#deployment)

## Image and Video Configuration

### Hero Video
- To change the hero video, replace the file at `public/assets/videos/arca-hero.mp4`
- You can also update the video source in `src/components/Hero.tsx`

### Research Project Images
- Project images are stored in `public/assets/images/research/`
- Each image is referenced in `src/data/researchProjects.ts`
- Follow the naming convention: descriptive names with underscores (e.g., `Robotic_Soil_3D_Printing.jpg`)

### Team Member Photos
- Team photos are stored in `public/assets/images/team/`
- Add new team members by placing their photo in this folder and updating the team data in `src/components/TeamSection.tsx`
- Photos should be square format for optimal display

## Research Projects

Research projects are defined in `src/data/researchProjects.ts`. To add or modify projects:

1. Edit the `researchProjects` array in this file
2. Each project requires:
   - `id`: Unique identifier for routing
   - `title`: Project title
   - `description`: Brief project summary
   - `image`: Path to cover image
   - `content`: Detailed project content (supports markdown formatting)
   - `videoSrc` (optional): Path to project video
   - `publications`: Related publications
   - `relatedProjects`: IDs of related research projects

Example:
```typescript
{
  id: "robotic-soil-printing",
  title: "Robotic Soil 3D Printing",
  description: "Advanced techniques for 3D printing with soil materials",
  image: "/assets/images/research/Robotic_Soil_3D_Printing.jpg",
  videoSrc: "/assets/videos/Robotic_Soil_3D_Printing.mp4",
  content: "## Project Overview\nThis research explores...",
  publications: ["publication1", "publication2"],
  relatedProjects: ["uav-ugv-collaboration", "acoustic-terrain-forming"]
}
```

## Publications

Publications are managed in `src/components/PublicationsSection.tsx`. To update:

1. Edit the `publications` array
2. Each publication requires:
   - `title`: Publication title
   - `authors`: Author names
   - `journal`: Journal or conference name
   - `year`: Publication year
   - `link`: URL to the publication

Example:
```javascript
{
  title: "Earth-Shaping with Heterogeneous Robotic Teams: From Sim to Real",
  authors: "Federico Oliva, Tom Shaked, Karen-Lee Bar-Sinai, ...",
  journal: "Climbing and Walking Robots Conference, Springer",
  year: 2024,
  link: "https://www.researchgate.net/publication/384344853_Earth-Shaping_with_Heterogeneous_Robotic_Teams_From_Sim_to_Real"
}
```

For project-specific publications in detail pages, update the reference IDs in each project's `publications` array in `researchProjects.ts`.

## Team Members

Team members are defined in `src/components/TeamSection.tsx`. To modify:

1. Edit the `teamMembers` array
2. Each team member requires:
   - `name`: Full name
   - `role`: Position/title
   - `image`: Path to profile photo
   - `bio`: Brief biography
   - `links` (optional): Social/academic profile links

## Contact Information

Update contact details in `src/components/ContactSection.tsx`. You can modify:
- Email address
- Phone number
- Physical address
- Contact form settings (if applicable)

## Other Content Sections

### Projects Section
Edit featured projects in `src/components/ProjectsSection.tsx` by updating the `projects` array.

### Mission Section
Modify mission statement and description in the `ResearchSection.tsx` file, within the mission section.

### Header and Footer
- Update navigation links in `src/components/Header.tsx`
- Modify footer content and links in `src/components/Footer.tsx`

## Deployment

### GitHub Pages
This site is configured to deploy to GitHub Pages using the workflow in `.github/workflows/deploy.yml`.

When using a custom domain:
1. The workflow automatically creates a CNAME file with your domain
2. Ensure your domain's DNS is properly configured to point to GitHub Pages
3. Enable custom domain in your repository settings

### Manual Deployment
For manual deployment or using other platforms:

```sh
# Install dependencies
npm install

# Build the project
npm run build

# The built site will be in the 'dist' directory
# Upload these files to your hosting provider
```

## Development

To run the site locally:

```sh
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at http://localhost:8080
