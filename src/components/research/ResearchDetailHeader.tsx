
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ResearchDetailHeaderProps {
  imageSrc: string;
  videoSrc?: string; // Optional video source
}

const ResearchDetailHeader: React.FC<ResearchDetailHeaderProps> = ({ imageSrc, videoSrc }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
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
      
      {/* Scroll Down Indicator - Same as in Hero component */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70 text-white">
        <ChevronDown size={24} />
      </div>
    </div>
  );
};

export default ResearchDetailHeader;
