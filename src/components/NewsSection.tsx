import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from './Section';
import { newsItems, newsColors } from '@/data/newsItems';

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
              {/* Square Image/Color Block - 1/3 width, aspect-square */}
              <div className="w-1/3 aspect-square flex-shrink-0 relative overflow-hidden">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div 
                    className="w-full h-full flex items-center justify-center p-3"
                    style={{ backgroundColor: newsColors[index % newsColors.length] }}
                  >
                    <span className="text-white font-display font-bold text-lg md:text-xl leading-tight text-center overflow-hidden">
                      {item.shortTitle}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Content - 2/3 width */}
              <div className="w-2/3 p-5 flex items-center gap-4">
                <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                  <div>
                    <p className="text-foreground/50 text-xs uppercase tracking-wider mb-2">{formatDate(item.date)}</p>
                    <h3 className="font-display text-xl font-bold text-primary group-hover:text-primary/90 leading-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70 text-sm line-clamp-2">{item.summary}</p>
                  </div>
                  <span className="text-primary/80 text-sm font-medium mt-3 inline-flex items-center gap-1 group-hover:text-primary transition-colors">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default NewsSection;
