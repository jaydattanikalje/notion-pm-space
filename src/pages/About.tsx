
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="page-container">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-1">
          <h1 className="text-3xl font-medium tracking-tight sm:text-5xl mb-8">
            About Me
          </h1>
          
          <section className="mb-12">
            <p className="text-lg mb-4">
              I'm Samuel Miller, a product manager with over 6 years of experience in the tech industry. My passion lies in creating intuitive products that solve complex problems. I specialize in user-centered design and strategic product development.
            </p>
            <p className="text-lg mb-4">
              My approach combines analytical thinking with creative problem-solving to deliver products that not only meet business objectives but also provide exceptional user experiences. I thrive in collaborative environments and enjoy working with cross-functional teams.
            </p>
          </section>
        </div>
        
        <div className="md:w-80 flex justify-center md:justify-end">
          <div className="w-64 h-64 overflow-hidden rounded-full border border-border shadow-sm">
            <img 
              src="/lovable-uploads/29cbd7b8-7396-49cd-bef8-e198b7335ea8.png" 
              alt="Jaydatta"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">Skills</h2>
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
        <h2 className="text-2xl font-medium mb-6">Work Experience</h2>
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-medium">Senior Product Manager</h3>
              <span className="text-muted-foreground">2021-Present</span>
            </div>
            <h4 className="text-lg text-muted-foreground mb-2">TechCorp Inc.</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Led the development of a new analytics platform, increasing user engagement by 35%</li>
              <li>• Managed a team of 3 product owners and collaborated with engineering teams across 3 time zones</li>
              <li>• Implemented a customer feedback loop that reduced churn by 20%</li>
              <li>• Advocated for and implemented accessibility improvements across products</li>
            </ul>
          </div>
          
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-medium">Product Manager</h3>
              <span className="text-muted-foreground">2018-2021</span>
            </div>
            <h4 className="text-lg text-muted-foreground mb-2">InnovateSoft</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Owned the product roadmap for a B2B SaaS application with 50,000+ users</li>
              <li>• Conducted user research and developed personas to guide product decisions</li>
              <li>• Coordinated with sales and marketing teams to develop go-to-market strategies</li>
              <li>• Launched 4 major features that collectively increased revenue by 25%</li>
            </ul>
          </div>
          
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-medium">Associate Product Manager</h3>
              <span className="text-muted-foreground">2016-2018</span>
            </div>
            <h4 className="text-lg text-muted-foreground mb-2">StartupVision</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Assisted in developing product strategy for an early-stage startup</li>
              <li>• Created wireframes and prototypes for user testing</li>
              <li>• Collaborated with developers to implement user feedback</li>
              <li>• Helped grow the user base from 500 to 15,000 in 18 months</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-medium mb-6">Education</h2>
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
