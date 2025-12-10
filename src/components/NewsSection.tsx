import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from './Section';
import { newsItems } from '@/data/newsItems';

const NewsSection = () => {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <Section id="news" className="bg-secondary/30" withDivider>
      <div className="mb-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Latest News</h2>
        <p className="text-foreground/70 max-w-3xl mx-auto animate-fade-in">
          Stay updated with our latest research presentations, publications, and laboratory activities.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {newsItems.map((item, index) => (
          <div 
            key={item.id} 
            className="glass-panel p-6 transition-all hover:translate-x-1 group animate-fade-in cursor-pointer"
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            onClick={() => navigate(`/news/${item.id}`)}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-display text-lg font-medium mb-2 text-primary group-hover:text-primary/90">
                  {item.title}
                </h3>
                <p className="text-foreground/60 text-sm mb-2">{formatDate(item.date)}</p>
                <p className="text-foreground/80 text-sm">{item.summary}</p>
              </div>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-primary/60 group-hover:text-primary transition-colors flex-shrink-0 mt-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default NewsSection;
