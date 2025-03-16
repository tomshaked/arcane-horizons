
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ResearchDetailHeaderProps {
  title: string;
  imageSrc: string;
}

const ResearchDetailHeader: React.FC<ResearchDetailHeaderProps> = ({ title, imageSrc }) => {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${imageSrc})`,
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0,0,0,0.4)'
          }} 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="container mx-auto px-6 md:px-12 pb-16">
          <Link to="/#research" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Research Areas
          </Link>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default ResearchDetailHeader;
