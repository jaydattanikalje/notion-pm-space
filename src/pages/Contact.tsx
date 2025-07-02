
import ContactForm from "@/components/ContactForm";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <main className="page-container">
      <h1 className="text-3xl font-medium tracking-tight sm:text-5xl mb-8">
        <span className="bg-yellow-200 px-2 py-1 rounded">Contact</span>
      </h1>
      
      <p className="text-lg text-muted-foreground mb-10">
        Interested in working together? Feel free to reach out through the form below or via email.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-medium mb-6">Get In Touch</h2>
          <ContactForm />
        </div>
        
        <div>
          <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="w-5 h-5 mt-1 mr-3 text-muted-foreground" />
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <a href="mailto:jaydatta@example.com" className="notion-link text-muted-foreground">
                  jaydatta@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Linkedin className="w-5 h-5 mt-1 mr-3 text-muted-foreground" />
              <div>
                <h3 className="text-lg font-medium">LinkedIn</h3>
                <a href="https://linkedin.com/in/jaydattanikalje" target="_blank" rel="noopener noreferrer" className="notion-link text-muted-foreground">
                  linkedin.com/in/jaydattanikalje
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <h3 className="text-lg font-medium mb-4">Location</h3>
            <p className="text-muted-foreground">
              Stockholm, Sweden
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
