
import React, { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ResearchSection from '@/components/ResearchSection';
import TeamSection from '@/components/TeamSection';
import PublicationsSection from '@/components/PublicationsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();

  // Handle hash navigation after mount
  useLayoutEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // remove the '#'
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // small delay to ensure rendering is complete
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

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
