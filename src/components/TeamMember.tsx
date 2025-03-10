
import React from "react";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  profileLink: string;
  index: number;
  className?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  imageUrl,
  profileLink,
  index,
  className,
}) => {
  return (
    <a
      href={profileLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "animated-element opacity-0 group block rounded-lg glass-panel transition-all duration-300",
        "hover:translate-y-[-4px] hover:shadow-lg",
        className
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="overflow-hidden rounded-t-lg">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-medium group-hover:text-primary transition-colors duration-300">{name}</h3>
          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        </div>
        <p className="text-muted-foreground font-medium mb-3">{role}</p>
        <p className="text-muted-foreground text-sm">{bio}</p>
      </div>
    </a>
  );
};

export default TeamMember;
