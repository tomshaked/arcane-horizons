
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Section from '@/components/Section';
import PublicationsList from './PublicationsList';
import RelatedResearch from './RelatedResearch';
import { ResearchProject, researchProjects } from '@/data/researchProjects';

interface ResearchDetailContentProps {
  project: ResearchProject;
}

const ResearchDetailContent: React.FC<ResearchDetailContentProps> = ({ project }) => {
  // Find related research projects
  const relatedProjects = project.relatedResearch
    .map(id => researchProjects.find(p => p.id === id))
    .filter((p): p is ResearchProject => p !== undefined);
  
  return (
    <Section className="py-16 dark:bg-[#1A1F2C]">
      <div className="mb-12">
        <Link to="/#research" className="inline-flex items-center text-primary/80 hover:text-primary mb-4 dark:text-white/80 dark:hover:text-white">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Research Areas
        </Link>
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-8 dark:text-white">{project.title}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {project.longDescription.map((paragraph, idx) => (
              <p key={idx} className="text-foreground/80 text-lg leading-relaxed mb-6 dark:text-white/80">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-4">
          <PublicationsList publications={project.publications} />
        </div>
      </div>
      
      {/* Add Related Research Section */}
      {relatedProjects.length > 0 && (
        <RelatedResearch relatedProjects={relatedProjects} />
      )}
    </Section>
  );
};

export default ResearchDetailContent;
