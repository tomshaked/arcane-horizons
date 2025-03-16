
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ResearchSection from '@/components/ResearchSection';
import TeamSection from '@/components/TeamSection';
import PublicationsSection from '@/components/PublicationsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for animation on scroll
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          (entry.target as HTMLElement).style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Get all elements with animate-on-scroll or scroll-reveal class
    const scrollElements = document.querySelectorAll('.animate-on-scroll, .scroll-reveal');
    scrollElements.forEach(el => {
      // Set initial opacity if not already set
      if (!(el as HTMLElement).style.opacity) {
        (el as HTMLElement).style.opacity = '0';
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <ResearchSection />
      <TeamSection />
      <PublicationsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
