
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "group rounded-md border border-border p-6 transition-all hover:border-foreground/20 hover:bg-accent/40",
        className
      )}
    >
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
