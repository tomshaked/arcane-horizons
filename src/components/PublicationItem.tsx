
import React from "react";
import { cn } from "@/lib/utils";
import { FileText, ExternalLink } from "lucide-react";

interface PublicationItemProps {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link: string;
  index: number;
  className?: string;
}

const PublicationItem: React.FC<PublicationItemProps> = ({
  title,
  authors,
  venue,
  year,
  link,
  index,
  className,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "animated-element opacity-0 group flex p-6 rounded-lg glass-panel transition-all duration-300",
        "hover:translate-y-[-4px] hover:shadow-lg",
        className
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="flex-shrink-0 mr-5">
        <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
          <FileText className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium group-hover:text-primary transition-colors duration-300">{title}</h3>
          <ExternalLink className="w-5 h-5 ml-3 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        </div>
        <p className="text-muted-foreground mt-1 text-sm">{authors}</p>
        <div className="flex justify-between mt-2">
          <p className="text-muted-foreground text-sm">{venue}</p>
          <p className="text-primary font-medium text-sm">{year}</p>
        </div>
      </div>
    </a>
  );
};

export default PublicationItem;
