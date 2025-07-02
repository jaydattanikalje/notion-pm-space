import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="page-container">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3">
          <img 
            src="/lovable-uploads/c13f8dd4-0bbb-4215-b228-a84a6c176030.png" 
            alt="Jaydatta" 
            className="w-full max-w-sm rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-medium tracking-tight sm:text-5xl mb-8">
            <span className="bg-yellow-200 px-2 py-1 rounded">About Me</span>
          </h1>
          
          <section className="mb-8">
            <p className="text-lg mb-4">
              I'm Jaydatta, a product manager with experience in the tech industry. My passion lies in creating intuitive products that solve complex problems. I specialize in user-centered design and strategic product development.
            </p>
            <p className="text-lg mb-4">
              My approach combines analytical thinking with creative problem-solving to deliver products that not only meet business objectives but also provide exceptional user experiences. I thrive in collaborative environments and enjoy working with cross-functional teams.
            </p>
          </section>
        </div>
      </div>
      
      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">
          <span className="bg-yellow-200 px-2 py-1 rounded">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium mb-3">Product Management</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Product Strategy & Roadmapping</li>
              <li>• Market Research</li>
              <li>• User Stories & Requirements</li>
              <li>• Agile & Scrum Methodologies</li>
              <li>• Product Analytics</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">Technical Skills</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Data Analysis</li>
              <li>• SQL & Basic Programming</li>
              <li>• Wireframing & Prototyping</li>
              <li>• A/B Testing</li>
              <li>• Product Analytics Tools</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">
          <span className="bg-yellow-200 px-2 py-1 rounded">Work Experience</span>
        </h2>
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-medium">Product Manager (UX and Marketing)</h3>
              <span className="text-muted-foreground">March 2025-Present</span>
            </div>
            <h4 className="text-lg text-muted-foreground mb-2">NapLab - SineAB - Stockholm</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Led cross-functional teams to deliver user-centered products that increased customer satisfaction by 28%</li>
            </ul>
          </div>
          
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-medium">Product Marketing Manager</h3>
              <span className="text-muted-foreground">2023-2024</span>
            </div>
            <h4 className="text-lg text-muted-foreground mb-2">Godspeed Systems - Singapore (Remote)</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Managed product lifecycle from conception to launch for B2B SaaS applications</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-medium mb-6">
          <span className="bg-yellow-200 px-2 py-1 rounded">Education</span>
        </h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-medium">MBA, Product Management</h3>
              <span className="text-muted-foreground">2014-2016</span>
            </div>
            <p className="text-muted-foreground">University of Technology</p>
          </div>
          
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-medium">BS, Computer Science</h3>
              <span className="text-muted-foreground">2010-2014</span>
            </div>
            <p className="text-muted-foreground">State University</p>
          </div>
        </div>
      </section>
      
      <div className="mt-12 flex justify-center">
        <Link to="/contact" className="notion-link">
          Get in touch with me
        </Link>
      </div>
    </main>
  );
};

export default About;
