import React, { useLayoutEffect, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { newsItems } from '@/data/newsItems';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NewsDetail = () => {
  const { newsId } = useParams<{ newsId: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const newsItem = newsItems.find(item => item.id === newsId);

  // Always scroll to top when navigating to a news detail page
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 50);
    return () => clearTimeout(timeoutId);
  }, [newsId]);

  // Handle browser back navigation
  useEffect(() => {
    const handlePopState = () => {
      if (location.pathname.includes('/news/')) {
        navigate('/', { replace: true });
      }
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [navigate, location.pathname]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">News item not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-primary hover:underline"
          >
            Return to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {newsItem.image && (
          <div className="absolute inset-0">
            <img 
              src={newsItem.image} 
              alt={newsItem.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        )}
        {!newsItem.image && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/40" />
        )}
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/70 text-sm mb-4">{formatDate(newsItem.date)}</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            {newsItem.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-foreground/70 hover:text-primary mb-8 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to News
          </button>

          {/* Summary */}
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            {newsItem.summary}
          </p>

          {/* Full Content */}
          <div className="space-y-6">
            {newsItem.content.map((paragraph, index) => (
              <p key={index} className="text-foreground/70 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* External Link */}
          {newsItem.link && (
            <a 
              href={newsItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-primary hover:underline"
            >
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7l10 10M7 17V7h10" />
              </svg>
            </a>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsDetail;
