
import React from 'react';
import { Publication } from '@/data/researchProjects';

interface PublicationsListProps {
  publications: Publication[];
}

const PublicationsList: React.FC<PublicationsListProps> = ({ publications }) => {
  return (
    <div className="bg-secondary/20 p-6 rounded-lg">
      <h3 className="font-display text-xl font-medium mb-4">Related Publications</h3>
      <div className="space-y-6">
        {publications.map((pub, idx) => (
          <div key={idx} className="border-b border-border/40 pb-4 last:border-0 last:pb-0">
            <h4 className="font-medium text-primary/90 mb-1">{pub.title}</h4>
            <p className="text-sm text-foreground/70 mb-1">{pub.authors}</p>
            <p className="text-sm text-foreground/60 mb-2">
              {pub.source ? `${pub.source}, ` : ''}{pub.year}
            </p>
            {pub.link && (
              <a 
                href={pub.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary/80 text-sm hover:text-primary hover:underline inline-flex items-center gap-1"
              >
                View publication
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 7l10 10M7 17V7h10" />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationsList;
