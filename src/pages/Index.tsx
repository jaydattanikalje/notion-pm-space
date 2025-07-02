import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  return <main className="page-container">
      <section className="flex flex-col items-start space-y-6 pb-12 pt-6 md:pt-10">
        <div className="flex items-center gap-6">
          <Avatar className="h-16 w-16 md:h-20 md:w-20">
            <AvatarImage src="/lovable-uploads/c13f8dd4-0bbb-4215-b228-a84a6c176030.png" alt="Jaydatta" />
            <AvatarFallback>JN</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-medium tracking-tight sm:text-5xl">
              Hi 👋🏼 I am <span className="bg-yellow-200 px-2 py-1 rounded">Jaydatta</span>
            </h1>
          </div>
        </div>
        <p className="text-xl text-muted-foreground max-w-[700px]">A Product Manager specialising in making purposeful products reach their highest potential.
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
        <h2 className="text-2xl font-medium tracking-tight">
          <span className="bg-yellow-200 px-2 py-1 rounded">Currently working on</span>
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="group rounded-md border border-border p-6 transition-all hover:border-foreground/20 hover:bg-accent/40">
            <h3 className="text-xl font-medium mb-2">NapLab</h3>
            <p className="text-muted-foreground">Product manager on an AI integrated iOS app that helps users improve sleep dramatically with sound stimulation at the right time.</p>
          </div>
          <div className="group rounded-md border border-border p-6 transition-all hover:border-foreground/20 hover:bg-accent/40">
            <h3 className="text-xl font-medium mb-2">Talking Forests</h3>
            <p className="text-muted-foreground">A hobby project that make forests into verbal storytelling and conversation medium for young adults, elders and nature enthusiasts.</p>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to="/projects" className="notion-link text-sm">
            View all projects
          </Link>
        </div>
      </section>

      <section className="space-y-6 py-10 border-t border-border">
        <h2 className="text-2xl font-medium tracking-tight">
          <span className="bg-yellow-200 px-2 py-1 rounded">Experience</span>
        </h2>
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium">Product Manager (UX and Marketing)</h3>
              <span className="text-sm text-muted-foreground">March 2025-Present</span>
            </div>
            <h4 className="text-base text-muted-foreground mb-2">NapLab - SineAB - Stockholm</h4>
            <p className="text-muted-foreground">
              Led cross-functional teams to deliver user-centered products that increased customer satisfaction by 28%.
            </p>
          </div>
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium">Product Marketing Manager</h3>
              <span className="text-sm text-muted-foreground">2023-2024</span>
            </div>
            <h4 className="text-base text-muted-foreground mb-2">Godspeed Systems - Singapore (Remote)</h4>
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
    </main>;
};
export default Index;
