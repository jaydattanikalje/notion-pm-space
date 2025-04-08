
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

// Import projects data
import { projectsData } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="page-container">
        <h1 className="text-3xl font-medium tracking-tight sm:text-5xl mb-8">
          Project not found
        </h1>
        <Button asChild>
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="page-container">
      <div className="mb-8">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>
        
        <h1 className="text-3xl font-medium tracking-tight sm:text-5xl mb-4">
          {project.title}
        </h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <AspectRatio ratio={16 / 9} className="mb-8 overflow-hidden rounded-md bg-secondary">
        <img 
          src={project.image} 
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </AspectRatio>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          {project.description}
        </p>
        
        <h2 className="text-2xl font-medium mb-4">Project Overview</h2>
        <p className="mb-6">
          This product management initiative was focused on solving key user problems while aligning with business objectives. 
          Through extensive market research and user feedback, we identified core opportunities for innovation in this space.
        </p>
        
        <h2 className="text-2xl font-medium mb-4">Key Achievements</h2>
        <ul className="space-y-2 mb-6">
          <li>Increased user engagement by 45% through intuitive interface design</li>
          <li>Reduced development cycles by 30% with improved requirements documentation</li>
          <li>Boosted customer satisfaction scores from 7.2 to 9.1 within six months</li>
          <li>Successfully coordinated cross-functional teams across three time zones</li>
        </ul>
        
        <h2 className="text-2xl font-medium mb-4">Process & Methodology</h2>
        <p className="mb-6">
          Following a user-centered design approach, we conducted extensive research to validate our hypotheses before committing 
          to development. This involved stakeholder interviews, competitive analysis, user testing, and iterative prototyping.
        </p>
        
        <Card className="mb-6">
          <CardContent className="pt-6">
            <blockquote className="italic">
              "Working on this project allowed us to truly understand our users' needs and deliver a solution that transformed their workflow."
            </blockquote>
          </CardContent>
        </Card>
        
        <h2 className="text-2xl font-medium mb-4">Lessons Learned</h2>
        <p>
          Throughout this project, we discovered the importance of early stakeholder alignment and continuous feedback loops. 
          Regular user testing sessions revealed unexpected insights that significantly improved the final product.
        </p>
      </div>
    </main>
  );
};

export default ProjectDetail;
