
import React from "react";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface ResearchItemProps {
  title: string;
  description: string;
  link: string;
  index: number;
  className?: string;
}

const ResearchItem: React.FC<ResearchItemProps> = ({
  title,
  description,
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
        "animated-element opacity-0 group block p-6 rounded-lg glass-panel transition-all duration-300",
        "hover:translate-y-[-4px] hover:shadow-lg",
        className
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-medium group-hover:text-primary transition-colors duration-300">{title}</h3>
        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
      </div>
      <p className="text-muted-foreground">{description}</p>
    </a>
  );
};

export default ResearchItem;
