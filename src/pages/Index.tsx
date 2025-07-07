import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  return <main className="page-container">
      <section className="flex flex-col md:flex-row items-start gap-8 pb-12 pt-6 md:pt-10 mx-0 px-[34px] py-[60px]">
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-lg border-2 border-border shadow-sm">
            <img 
              src="/lovable-uploads/29cbd7b8-7396-49cd-bef8-e198b7335ea8.png" 
              alt="Jaydatta" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-6 flex-1">
          <div>
            <h1 className="text-3xl font-medium tracking-tight sm:text-5xl">Hi 👋🏼
I am Jaydatta</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-[700px]">A Product Manager specialising in making purposeful products reach their highest potential in the shortest time.</p>
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
        </div>
      </section>

      <section className="space-y-6 py-10 border-t border-border">
        <h2 className="text-2xl font-medium tracking-tight">💡 Currently on my mind!</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="group rounded-md border border-border p-6 transition-all hover:border-foreground/20 hover:bg-accent/40">
            <AspectRatio ratio={16 / 9} className="mb-4 overflow-hidden rounded-md bg-secondary">
              <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=225&fit=crop" alt="NapLab - Woman using laptop for sleep research" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
            </AspectRatio>
            <h3 className="text-xl font-medium mb-2">NapLab 🇸🇪</h3>
            <p className="text-muted-foreground">Building an efficient and reactive AI-based sound stimulation to improve quality of sleep.</p>
          </div>
          <div className="group rounded-md border border-border p-6 transition-all hover:border-foreground/20 hover:bg-accent/40">
            <AspectRatio ratio={16 / 9} className="mb-4 overflow-hidden rounded-md bg-secondary">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=225&fit=crop" alt="Whistle Blower - Technology circuit board" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
            </AspectRatio>
            <h3 className="text-xl font-medium mb-2">Whistle Blower 🇮🇳</h3>
            <p className="text-muted-foreground">A social experiment and an app against eve teasing and safety of all age- women.</p>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to="/projects" className="notion-link text-sm">
            View all projects
          </Link>
        </div>
      </section>

      <section className="space-y-6 py-10 border-t border-border">
        <h2 className="text-2xl font-medium tracking-tight">🚀 Experience</h2>
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium">Agile Product Manager - AI based iOS app</h3>
              <span className="text-sm text-muted-foreground">March 2025-Present</span>
            </div>
            <h4 className="text-base text-muted-foreground mb-2">NapLab - Stockholm</h4>
            <p className="text-muted-foreground">Scrum master, GTM strategy, Growth, stakeholders management and UI/UX.</p>
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
