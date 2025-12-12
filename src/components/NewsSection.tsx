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
        {newsItems.slice(0, 5).map((item, index) => (
          <div 
            key={item.id} 
            className="glass-panel transition-all hover:translate-x-1 group animate-fade-in cursor-pointer overflow-hidden"
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            onClick={() => navigate(`/news/${item.id}`)}
          >
            <div className="flex">
              {/* Square Image - 1/3 width, flush with edges */}
              <div className="w-1/3 min-h-[120px] flex-shrink-0 bg-secondary/50">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-primary/40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                      <circle cx="9" cy="9" r="2"/>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Content - 2/3 width */}
              <div className="w-2/3 p-5 flex items-center gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg font-medium mb-1 text-primary group-hover:text-primary/90">
                    {item.title}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-1">{formatDate(item.date)}</p>
                  <p className="text-foreground/80 text-sm line-clamp-1">{item.summary}</p>
                </div>
                
                {/* Arrow */}
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
                  className="text-primary/60 group-hover:text-primary transition-colors flex-shrink-0"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default NewsSection;
