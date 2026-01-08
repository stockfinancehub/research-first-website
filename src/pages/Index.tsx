import { useState } from "react";
import { Link } from "react-router-dom";
import { BarChart3, FileSearch, Briefcase, Users } from "lucide-react";
import Layout from "@/components/Layout";
import EmailModal from "@/components/EmailModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: BarChart3,
      title: "Equity Research & Fundamental Analysis",
      description: "In-depth research on companies using fundamental analysis, financial modeling, and valuation frameworks.",
    },
    {
      icon: FileSearch,
      title: "Custom Research & Company Analysis",
      description: "Bespoke research reports tailored to your specific investment thesis or sector interest.",
    },
    {
      icon: Briefcase,
      title: "Model Portfolios",
      description: "Curated portfolios based on rigorous research, risk assessment, and long-term value creation.",
    },
    {
      icon: Users,
      title: "Research & Investment Consulting",
      description: "Strategic consulting for institutions and individuals seeking research-driven investment guidance.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
              Independent Equity Research Built on Fundamentals & Data
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              We provide disciplined, research-driven equity insights grounded in 
              fundamental analysis and rational decision-making. No hype, no speculation—only 
              structured research for informed investors.
            </p>
          </div>

          {/* Fixed CTA Button - Right Side */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden lg:inline-flex fixed right-8 top-1/2 -translate-y-1/2 h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-md"
          >
            Get Daily Pre-Market Report
          </button>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            <div>
              <p className="text-sm font-medium text-primary">SEBI-Registered</p>
              <p className="text-xs text-muted-foreground mt-1">Research Analyst</p>
            </div>
            <div>
              <p className="text-sm font-medium text-primary">NISM Qualified</p>
              <p className="text-xs text-muted-foreground mt-1">Professional</p>
            </div>
            <div>
              <p className="text-sm font-medium text-primary">Compliance First</p>
              <p className="text-xs text-muted-foreground mt-1">Approach</p>
            </div>
            <div>
              <p className="text-sm font-medium text-primary">Research Driven</p>
              <p className="text-xs text-muted-foreground mt-1">Investment Insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive research and investment services designed for disciplined, 
              long-term investors seeking fundamental insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <service.icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Built on Integrity & Discipline
            </h2>
            <p className="text-muted-foreground">
              Stock Finance Hub is founded by a SEBI-Registered Research Analyst (registration 
              details available on request) and NISM-Qualified Professional, committed to 
              transparency, regulatory compliance, and investor suitability. Our vision is to 
              build a trusted, research-driven investment brand in India.
            </p>
          </div>
        </div>
      </section>

      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Layout>
  );
};

export default Index;
