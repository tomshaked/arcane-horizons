
import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  const projectId = location.pathname.split('/research/')[1];
  const project = researchProjects.find(p => p.id === projectId);

  // Enhanced scroll to top behavior for all devices
  useEffect(() => {
    // Force scroll to top immediately when component mounts
    window.scrollTo(0, 0);
    
    // Add a small delay for mobile devices that might need additional time
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  // Also scroll when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // Handle browser back navigation to ensure we don't get a 404
  useEffect(() => {
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
        imageSrc={project.image} 
        videoSrc={project.videoSrc} 
      />
      <ResearchDetailContent project={project} />
      <Footer />
    </div>
  );
};

export default ResearchDetail;
