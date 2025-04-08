
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Product Roadmap Tool",
      description: "Strategic roadmapping application for tech companies to align their product vision with daily development work.",
      tags: ["Product Strategy", "UX Design", "Agile"],
    },
    {
      title: "E-commerce Platform",
      description: "Marketplace solution with streamlined checkout process increasing conversion by 32% and reducing cart abandonment.",
      tags: ["User Research", "A/B Testing", "Analytics"],
    },
    {
      title: "Healthcare Patient Portal",
      description: "Patient management system focusing on intuitive design and accessibility, improving patient engagement by 45%.",
      tags: ["Accessibility", "User Testing", "HIPAA Compliance"],
    },
    {
      title: "Financial Dashboard",
      description: "Data visualization tool providing real-time insights for financial analysts, reducing reporting time by 68%.",
      tags: ["Data Analysis", "Visualization", "Real-time"],
    },
    {
      title: "Task Management App",
      description: "Productivity application with smart prioritization algorithms, helping teams increase efficiency by 27%.",
      tags: ["Productivity", "Team Collaboration", "Mobile First"],
    },
    {
      title: "Learning Management System",
      description: "Educational platform with adaptive learning paths based on user performance and preferences.",
      tags: ["EdTech", "Personalization", "User Journey"],
    },
  ];

  return (
    <main className="page-container">
      <h1 className="text-3xl font-medium tracking-tight sm:text-5xl mb-8">
        Projects
      </h1>
      
      <p className="text-lg text-muted-foreground mb-10">
        A collection of products I've had the privilege to work on throughout my career as a product manager.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;
