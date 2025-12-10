
import React, { useLayoutEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { ArrowLeft } from 'lucide-react';
import { researchProjects } from '@/data/researchProjects';
import ResearchDetailHeader from '@/components/research/ResearchDetailHeader';
import ResearchDetailContent from '@/components/research/ResearchDetailContent';

const ResearchDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();
  const project = researchProjects.find(p => p.id === projectId);

  // Always scroll to top when navigating to a research detail page
  useLayoutEffect(() => {
    // Immediate scroll
    window.scrollTo(0, 0);
    // Also scroll after a brief delay to handle any async content loading
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 50);
    return () => clearTimeout(timeoutId);
  }, [projectId]);

  // Handle browser back navigation to ensure we don't get a 404
  useLayoutEffect(() => {
    if (!project) {
      // If project not found, navigate to homepage or research section
      navigate('/#research', { replace: true });
    }
  }, [project, navigate]);

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
      <ResearchDetailHeader 
        key={project.id} // Add key prop to force re-render when project changes
        imageSrc={project.image} 
        videoSrc={project.videoSrc} 
      />
      <ResearchDetailContent project={project} />
      <Footer />
    </div>
  );
};

export default ResearchDetail;
