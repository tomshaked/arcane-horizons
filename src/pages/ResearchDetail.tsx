
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { ArrowLeft } from 'lucide-react';
import { researchProjects } from '@/data/researchProjects';
import ResearchDetailHeader from '@/components/research/ResearchDetailHeader';
import ResearchDetailContent from '@/components/research/ResearchDetailContent';

const ResearchDetail = () => {
  const location = useLocation();
  const projectId = location.pathname.split('/research/')[1];
  const project = researchProjects.find(p => p.id === projectId);

  // Scroll to top when component mounts or when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
      <ResearchDetailHeader title={project.title} imageSrc={project.image} />
      <ResearchDetailContent project={project} />
      <Footer />
    </div>
  );
};

export default ResearchDetail;
