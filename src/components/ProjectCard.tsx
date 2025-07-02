
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { AspectRatio } from "./ui/aspect-ratio";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  image: string;
  className?: string;
}

const tagColors = [
  "bg-blue-100 text-blue-800",
  "bg-green-100 text-green-800", 
  "bg-purple-100 text-purple-800",
  "bg-pink-100 text-pink-800",
  "bg-orange-100 text-orange-800",
  "bg-indigo-100 text-indigo-800",
  "bg-red-100 text-red-800",
  "bg-yellow-100 text-yellow-800"
];

const ProjectCard = ({
  title,
  description,
  tags,
  slug,
  image,
  className,
}: ProjectCardProps) => {
  return (
    <Link to={`/projects/${slug}`} className="block">
      <div
        className={cn(
          "group rounded-md border border-border p-6 transition-all hover:border-foreground/20 hover:bg-accent/40",
          className
        )}
      >
        <AspectRatio ratio={16 / 9} className="mb-4 overflow-hidden rounded-md bg-secondary">
          <img 
            src={image} 
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </AspectRatio>
        
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={tag}
              className={cn(
                "inline-block text-xs px-2 py-1 rounded font-medium",
                tagColors[index % tagColors.length]
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
