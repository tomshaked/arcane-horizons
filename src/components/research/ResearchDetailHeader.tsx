
import React from 'react';

interface ResearchDetailHeaderProps {
  imageSrc: string;
  videoSrc?: string; // Optional video source
}

const ResearchDetailHeader: React.FC<ResearchDetailHeaderProps> = ({ imageSrc, videoSrc }) => {
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
    </div>
  );
};

export default ResearchDetailHeader;
