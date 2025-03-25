
# ARCA Laboratory Website Configuration Guide

This guide explains how to customize the ARCA Laboratory website components and content. It provides instructions for modifying images, videos, research projects, team members, publications, and other key elements.

## Table of Contents

- [General Structure](#general-structure)
- [Changing Assets (Images & Videos)](#changing-assets)
- [Updating Research Projects](#updating-research-projects)
- [Managing Team Members](#managing-team-members)
- [Updating Publications](#updating-publications)
- [Contact Form Configuration](#contact-form-configuration)
- [Deployment](#deployment)

## General Structure

The website consists of several main sections:

- **Hero**: Full-screen video landing section
- **Research Areas**: Grid of research projects with links to detailed pages
- **Team**: Team member profiles
- **Publications**: Recent academic publications
- **Contact**: Contact form

Each section has its own component file in the `src/components/` directory.

## Changing Assets

### Images and Videos

All images and videos are stored in the `public/assets/` directory:

- Images: `public/assets/images/`
- Videos: `public/assets/videos/`

To update an asset:

1. Prepare your new image or video file
2. Add it to the appropriate folder in the `public/assets/` directory
3. Reference it in the code using the `getAssetPath` utility:

```jsx
import { getAssetPath } from '@/utils/assetPaths';

// In your component:
<img src={getAssetPath('/assets/images/your-new-image.jpg')} alt="Description" />

// For video backgrounds:
<video autoPlay muted loop playsInline>
  <source src={getAssetPath('/assets/videos/your-new-video.mp4')} type="video/mp4" />
</video>
```

### Updating the Hero Video

To change the main homepage video:

1. Add your new video to `public/assets/videos/`
2. Open `src/components/Hero.tsx`
3. Update the video source path:

```jsx
<video autoPlay muted loop playsInline className="object-cover w-full h-full">
  <source src={getAssetPath('/assets/videos/your-new-hero-video.mp4')} type="video/mp4" />
</video>
```

## Updating Research Projects

All research project data is managed in `src/data/researchProjects.ts`.

### To Add or Update a Research Project:

1. Open `src/data/researchProjects.ts`
2. Add a new object to the `researchProjects` array or modify an existing one:

```typescript
{
  id: 'your-project-id', // Used in URLs, must be unique
  title: 'Your Project Title',
  description: 'Short project description for the cards.',
  longDescription: [
    'First paragraph of detailed description.',
    'Second paragraph with more details.',
    // Add more paragraphs as needed
  ],
  image: '/assets/images/research/your-project-image.jpg', // Main image path
  videoSrc: '/assets/videos/your-project-video.mp4', // Optional video
  publications: [
    {
      title: 'Publication Title',
      authors: 'Author 1, Author 2, Author 3',
      year: 2024,
      source: 'Journal or Conference Name',
      link: 'https://link-to-publication.com'
    },
    // Add more publications as needed
  ],
  relatedResearch: ['related-project-id-1', 'related-project-id-2'] // IDs of related projects
}
```

Important notes:

- Make sure to add your image to `public/assets/images/research/`
- If adding a video, place it in `public/assets/videos/`
- The `relatedResearch` array must contain valid IDs of other projects in the same file

## Managing Team Members

Team members are defined in `src/components/TeamSection.tsx`.

### To Add or Update Team Members:

1. Open `src/components/TeamSection.tsx`
2. Find the `teamMembers` array and add or modify entries:

```javascript
const teamMembers = [
  {
    name: 'New Team Member',
    role: 'Their Role',
    bio: 'A short biography about the team member.',
    image: '/assets/images/team/new-member.jpg'
  },
  // Add more team members as needed
];
```

3. Add the team member's photo to `public/assets/images/team/`

## Updating Publications

Publications are defined in `src/components/PublicationsSection.tsx`.

### To Add or Update Publications:

1. Open `src/components/PublicationsSection.tsx`
2. Find the `publications` array and add or modify entries:

```javascript
const publications = [
  {
    title: "Your New Publication Title",
    authors: "Author 1, Author 2, Author 3",
    journal: "Journal or Conference Name",
    year: 2024,
    link: "https://link-to-publication.com"
  },
  // Add more publications as needed
];
```

## Contact Form Configuration

The contact form uses Formspree to handle form submissions. To update the form endpoint:

1. Create an account on [Formspree](https://formspree.io/) if you don't have one
2. Create a new form and get your form endpoint
3. Open `src/components/ContactSection.tsx`
4. Update the form action with your new endpoint:

```jsx
<form action="https://formspree.io/f/your-new-endpoint" method="POST" className="space-y-6">
```

## Deployment

### GitHub Pages

This site is configured to deploy automatically to GitHub Pages.

1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy the site

### Custom Domain

To use a custom domain:

1. Update the CNAME file in the GitHub repository settings
2. Configure your domain's DNS settings to point to GitHub Pages
3. The site will be available at your custom domain

### Local Development

To run the site locally:

```sh
# Install dependencies
npm install

# Start the development server
npm run dev
```

This will start a local development server accessible at http://localhost:8080

## Advanced Customization

For more advanced customization such as changing colors, fonts, or layout, you'll need to modify the following files:

- **Tailwind Config**: `tailwind.config.ts` - For color themes and basic styling
- **Component Files**: Individual component files in `src/components/`
- **Routing**: `src/App.tsx` - To add or modify page routes
