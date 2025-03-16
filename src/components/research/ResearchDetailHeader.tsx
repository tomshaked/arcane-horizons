
import React, { useEffect, useRef } from 'react';

interface ResearchDetailHeaderProps {
  imageSrc: string;
  videoSrc?: string; // Optional video source
}

const ResearchDetailHeader: React.FC<ResearchDetailHeaderProps> = ({ imageSrc, videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Reset video when props change
  useEffect(() => {
    if (videoRef.current && videoSrc) {
      // Reset the video element by updating its src and reloading
      videoRef.current.src = videoSrc;
      videoRef.current.load();
      videoRef.current.play().catch(err => {
        console.log('Video autoplay failed:', err);
      });
    }
  }, [videoSrc]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {videoSrc ? (
          // Video background with overlay
          <>
            <video 
              ref={videoRef}
              autoPlay 
              muted 
              loop 
              playsInline 
              className="object-cover w-full h-full"
              key={videoSrc} // Add key prop based on videoSrc to force re-render
            >
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
      
      {/* Scroll Down Indicator - Using the same SVG as in Hero component */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70 text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

export default ResearchDetailHeader;
