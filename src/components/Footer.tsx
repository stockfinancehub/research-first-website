import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-3xl">
          <p className="text-sm text-foreground mb-8">
            Stock Finance Hub
          </p>
          
          <nav className="flex flex-wrap gap-x-8 gap-y-2 mb-12">
            <Link to="/" className="text-sm text-muted-foreground">
              Home
            </Link>
            <Link to="/about" className="text-sm text-muted-foreground">
              About
            </Link>
            <Link to="/services" className="text-sm text-muted-foreground">
              Services
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground">
              Contact
            </Link>
          </nav>

          <p className="text-xs text-muted-foreground leading-relaxed mb-8">
            Disclaimer: Investment in securities market are subject to market risks. 
            Read all the related documents carefully before investing. Any securities mentioned are 
            for educational and illustrative purposes only and do not constitute investment advice 
            or recommendations. Past performance is not indicative of future results. 
            Stock Finance Hub does not guarantee any returns on investments.
          </p>
          
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Stock Finance Hub
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
