
# ARCA Laboratory Website Configuration Guide

This document provides instructions for customizing the ARCA Laboratory website, including how and where to change background images, add new projects and content, update team members, and manage the publications list.

---

## Table of Contents

- [Changing Background Images and Videos](#changing-background-images-and-videos)
- [Editing/Adding Research Projects](#editingadding-research-projects)
- [Managing Team Members](#managing-team-members)
- [Updating Publications](#updating-publications)
- [Changing the Hero Section (Landing Page)](#changing-the-hero-section-landing-page)
- [Updating Contact Information](#updating-contact-information)
- [Deployment & Local Development](#deployment--local-development)

---

## Changing Background Images and Videos

Images and video assets are stored in the `public/assets/` folder.

- **Main Page Background Video:**  
  - Path: `public/assets/videos/arca-hero.mp4`
  - Change by replacing this file or updating its path in `src/components/Hero.tsx`:
    ```jsx
    <source src={getAssetPath('/assets/videos/arca-hero.mp4')} type="video/mp4" />
    ```

- **Research/Project Images:**  
  - Store images in `public/assets/images/research/`
  - Update their references in the project data file `src/data/researchProjects.ts`

- **Team Photos and Other Images:**  
  - Store in `public/assets/images/team/` for team members
  - Update as referenced in `src/components/TeamSection.tsx`

> **Tip:**  
> To add a new image or video, simply put your file into the appropriate folder and reference it using a relative path (ex: `/assets/images/yourimage.jpg`).

---

## Editing/Adding Research Projects

All research project entries are managed in [`src/data/researchProjects.ts`](src/data/researchProjects.ts).

- **Add a New Project:**  
  1. Open `src/data/researchProjects.ts`
  2. Add an object to the `researchProjects` array with this structure:
      ```ts
      {
        id: 'unique-project-id',
        title: 'Project Title',
        description: 'Short description for cards',
        longDescription: [
          'Paragraph 1.',
          'Paragraph 2 (optional).'
        ],
        image: '/assets/images/research/your-image.jpg',
        videoSrc: '/assets/videos/your-video.mp4', // optional
        publications: [
          {
            title: 'Publication Title',
            authors: 'Author list',
            year: 2023,
            source: 'Journal/Conference',
            link: 'https://...'
          }
        ],
        relatedResearch: ['other-project-id'] // optional
      }
      ```
  3. Put image and video files in their respective folders.

- **Edit/Remove Existing Projects:**  
  - Edit or remove objects from the `researchProjects` array as needed.

---

## Managing Team Members

Team members are defined directly in [`src/components/TeamSection.tsx`](src/components/TeamSection.tsx).

- **Add/Edit a Team Member:**
  1. Open `TeamSection.tsx`
  2. Update the `teamMembers` array:
      ```js
      {
        name: 'Full Name',
        role: 'Position or title',
        bio: 'Short biography...',
        image: '/assets/images/team/filename.jpg'
      }
      ```
  3. Add their photo to `public/assets/images/team/`

- **Remove a Member:**  
  - Simply remove their entry from the array.

---

## Updating Publications

The publications list for the main site can be edited in [`src/components/PublicationsSection.tsx`](src/components/PublicationsSection.tsx):

- **To add or update a publication:**
  1. Edit the `publications` array:
      ```js
      {
        title: 'Title of the publication',
        authors: 'Authors',
        journal: 'Journal or Conference',
        year: 2024,
        link: 'https://...'
      }
      ```

---

## Changing the Hero Section (Landing Page)

- **To update the hero (landing) section video or image:**  
  1. Upload a new video to `public/assets/videos/`  
  2. Change the video `src` in `src/components/Hero.tsx`  
  3. The title text can also be changed directly in `Hero.tsx` (within the `<h1>` tag)

- **To update the Open Graph (social sharing) image:**  
  1. Replace the value of the `<meta property="og:image" ... />` tag in `index.html`:
      ```html
      <meta property="og:image" content="/lovable-uploads/f65dcf06-e07a-41ab-8768-4d5d0f21fe8d.png" />
      ```
  2. This ensures social media platforms use the correct preview image.

---

## Updating Contact Information

- The contact form is handled in [`src/components/ContactSection.tsx`](src/components/ContactSection.tsx).
- If using Formspree or another provider, update the endpoint in the form’s `action` property:
    ```jsx
    <form action="https://formspree.io/f/your-endpoint" method="POST" ...>
    ```

---

## Deployment & Local Development

- **Local Development:**
  ```sh
  npm install
  npm run dev
  # Visit http://localhost:8080
  ```

- **Deploying:**  
  - For static hosting (like GitHub Pages), just push to your main branch; GitHub Actions will handle deployment.

- **Custom Domain:**  
  - Use the domain/DNS settings in your repository and add a CNAME file as needed.

---

## Advanced Customization

- **Styling:**  
  - For site-wide styles and color changes, edit `tailwind.config.ts`
  - For per-section changes, edit individual files in `src/components/`

- **Routing/Pages:**  
  - Adjust routes in `src/App.tsx` as desired.

---
