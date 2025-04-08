
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main className="page-container">
      <section className="flex flex-col items-start space-y-6 pb-12 pt-6 md:pt-10">
        <h1 className="text-3xl font-medium tracking-tight sm:text-5xl">
          Samuel Miller
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px]">
          Product Manager specializing in user-centered design and strategic product development
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link to="/projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/about">About Me</Link>
          </Button>
        </div>
      </section>

      <section className="space-y-6 py-10 border-t border-border">
        <h2 className="text-2xl font-medium tracking-tight">Featured Work</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="group rounded-md border border-border p-6 transition-all hover:border-foreground/20 hover:bg-accent/40">
            <h3 className="text-xl font-medium mb-2">Product Roadmap Tool</h3>
            <p className="text-muted-foreground">
              Strategic roadmapping application for tech companies to align their product vision.
            </p>
          </div>
          <div className="group rounded-md border border-border p-6 transition-all hover:border-foreground/20 hover:bg-accent/40">
            <h3 className="text-xl font-medium mb-2">E-commerce Platform</h3>
            <p className="text-muted-foreground">
              Marketplace solution with streamlined checkout process increasing conversion by 32%.
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to="/projects" className="notion-link text-sm">
            View all projects
          </Link>
        </div>
      </section>

      <section className="space-y-6 py-10 border-t border-border">
        <h2 className="text-2xl font-medium tracking-tight">Experience</h2>
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium">Senior Product Manager</h3>
              <span className="text-sm text-muted-foreground">2021-Present</span>
            </div>
            <h4 className="text-base text-muted-foreground mb-2">TechCorp Inc.</h4>
            <p className="text-muted-foreground">
              Led cross-functional teams to deliver user-centered products that increased customer satisfaction by 28%.
            </p>
          </div>
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium">Product Manager</h3>
              <span className="text-sm text-muted-foreground">2018-2021</span>
            </div>
            <h4 className="text-base text-muted-foreground mb-2">InnovateSoft</h4>
            <p className="text-muted-foreground">
              Managed product lifecycle from conception to launch for B2B SaaS applications.
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to="/about" className="notion-link text-sm">
            Learn more about me
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
