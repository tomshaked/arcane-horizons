
import React from 'react';
import Section from '@/components/Section';
import PublicationsList from './PublicationsList';
import { ResearchProject } from '@/data/researchProjects';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ResearchDetailContentProps {
  project: ResearchProject;
}

const ResearchDetailContent: React.FC<ResearchDetailContentProps> = ({ project }) => {
  return (
    <div className="bg-background">
      {/* Overview Section */}
      <Section className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Overview</h2>
            <div className="prose prose-lg max-w-none">
              {project.longDescription.slice(0, 1).map((paragraph, idx) => (
                <p key={idx} className="text-foreground/80 text-xl leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <Card className="w-full overflow-hidden shadow-lg border-0">
              <CardContent className="p-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto object-cover aspect-video"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
      
      {/* Details Section */}
      <Section className="py-12 md:py-16 bg-secondary/10">
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="details">Research Details</TabsTrigger>
            <TabsTrigger value="publications">Publications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details" className="mt-0">
            <div className="prose prose-lg max-w-4xl">
              {project.longDescription.slice(1).map((paragraph, idx) => (
                <p key={idx + 1} className="text-foreground/80 text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="publications" className="mt-0">
            <div className="max-w-4xl">
              <PublicationsList publications={project.publications} />
            </div>
          </TabsContent>
        </Tabs>
      </Section>
      
      {/* Related Research */}
      <Section className="py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">Related Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* This would ideally be populated with related research, but for now we'll just show a placeholder */}
          <Card className="bg-secondary/5 hover:bg-secondary/10 transition-colors cursor-pointer overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Explore More Research</h3>
              <p className="text-foreground/70">Discover our other research initiatives in robotics and architecture.</p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default ResearchDetailContent;
