import { Link } from "react-router-dom";
import sfhLogo from "@/assets/sfh_logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <img src={sfhLogo} alt="Stock Finance Hub" className="h-10 w-auto" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Independent equity research built on fundamentals, data, and disciplined analysis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Regulatory</h3>
            <p className="text-sm text-muted-foreground">
              SEBI Registered Research Analyst
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>Disclaimer:</strong> Investment in securities market are subject to market risks. 
            Read all the related documents carefully before investing. The securities quoted are 
            exemplary and are not recommendatory. Past performance is not indicative of future results. 
            Please consult your financial advisor before making any investment decisions. 
            Stock Finance Hub does not guarantee any returns on investments.
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            © {new Date().getFullYear()} Stock Finance Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
