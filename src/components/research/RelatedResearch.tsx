
import React from 'react';
import { Link } from 'react-router-dom';
import { ResearchProject } from '@/data/researchProjects';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { getAssetPath } from '@/utils/assetPaths';

interface RelatedResearchProps {
  relatedProjects: ResearchProject[];
}

const RelatedResearch: React.FC<RelatedResearchProps> = ({ relatedProjects }) => {
  if (relatedProjects.length === 0) return null;
  
  return (
    <div className="mt-16">
      <h3 className="font-display text-2xl mb-8">Related Research</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden bg-card/50 hover:bg-card/80 transition-colors border-border/50 rounded-none">
            <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${getAssetPath(project.image)})` }} />
            <CardContent className="p-6">
              <h4 className="font-display text-xl font-medium mb-2">{project.title}</h4>
              <p className="text-sm text-foreground/70 mb-4 line-clamp-3">{project.description}</p>
              <Link
                to={`/research/${project.id}`}
                className="inline-flex items-center text-primary hover:text-primary/80 text-sm group"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedResearch;
