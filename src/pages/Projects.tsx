
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";

const Projects = () => {
  return (
    <main className="page-container">
      <h1 className="text-3xl font-medium tracking-tight sm:text-5xl mb-8">
        Projects
      </h1>
      
      <p className="text-lg text-muted-foreground mb-10">
        A collection of products I've had the privilege to work on throughout my career as a product manager.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            slug={project.slug}
            image={project.image}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;
