
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ResearchDetailHeaderProps {
  title: string;
  imageSrc: string;
  videoSrc?: string; // Optional video source
}

const ResearchDetailHeader: React.FC<ResearchDetailHeaderProps> = ({ title, imageSrc, videoSrc }) => {
  return (
    <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {videoSrc ? (
          // Video background with overlay
          <>
            <video autoPlay muted loop playsInline className="object-cover w-full h-full">
              <source src={videoSrc} type="video/mp4" />
              {/* Fallback to image if video fails */}
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${imageSrc})`,
                  backgroundBlendMode: 'overlay',
                  backgroundColor: 'rgba(0,0,0,0.6)'
                }}
              />
            </video>
            <div className="absolute inset-0 bg-black/50"></div>
          </>
        ) : (
          // Image background with overlay
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${imageSrc})`,
              backgroundBlendMode: 'overlay',
              backgroundColor: 'rgba(0,0,0,0.6)'
            }} 
          />
        )}
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-8">
          <Link to="/#research" className="inline-flex items-center text-white/80 hover:text-white mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Research Areas
          </Link>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default ResearchDetailHeader;
