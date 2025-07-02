import { NavLink } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="border-t border-border py-8 mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground font-normal">
              © {currentYear} Samuel Miller. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <NavLink to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </NavLink>
            <NavLink to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </NavLink>
            <NavLink to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </NavLink>
            <NavLink to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;