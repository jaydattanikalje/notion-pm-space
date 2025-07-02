
import ContactForm from "@/components/ContactForm";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <main className="page-container">
      <h1 className="text-3xl font-medium tracking-tight sm:text-5xl mb-8">
        Contact
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
                <a href="mailto:samuel@example.com" className="notion-link text-muted-foreground">
                  samuel@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-5 h-5 mt-1 mr-3 text-muted-foreground" />
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <a href="tel:+11234567890" className="notion-link text-muted-foreground">
                  +1 (123) 456-7890
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <h3 className="text-lg font-medium mb-4">Office Hours</h3>
            <p className="text-muted-foreground">
              Monday to Friday<br />
              9:00 AM - 5:00 PM EST
            </p>
          </div>
          
          <div className="mt-10">
            <h3 className="text-lg font-medium mb-4">Location</h3>
            <p className="text-muted-foreground">
              San Francisco, California<br />
              United States
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
