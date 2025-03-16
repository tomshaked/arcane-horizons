
import React from 'react';
import Section from '@/components/Section';
import PublicationsList from './PublicationsList';
import { ResearchProject } from '@/data/researchProjects';

interface ResearchDetailContentProps {
  project: ResearchProject;
}

const ResearchDetailContent: React.FC<ResearchDetailContentProps> = ({ project }) => {
  return (
    <Section className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <div className="prose prose-lg max-w-none">
            {project.longDescription.map((paragraph, idx) => (
              <p key={idx} className="text-foreground/80 text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-4">
          <PublicationsList publications={project.publications} />
        </div>
      </div>
    </Section>
  );
};

export default ResearchDetailContent;
