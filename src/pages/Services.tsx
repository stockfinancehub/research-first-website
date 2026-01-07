import Layout from "@/components/Layout";
import { BarChart3, FileSearch, Briefcase, Users, TrendingUp, Building, PiggyBank } from "lucide-react";

const Services = () => {
  const activeServices = [
    {
      icon: BarChart3,
      title: "Equity Research & Fundamental Analysis",
      description: "Comprehensive research on listed companies using fundamental analysis, financial modeling, ratio analysis, and valuation methodologies. Our research covers business quality, competitive positioning, management assessment, and intrinsic value estimation.",
    },
    {
      icon: FileSearch,
      title: "Custom Research & Company Analysis",
      description: "Bespoke research reports tailored to your specific requirements. Whether you need deep-dive analysis on a particular company, sector study, or thematic research, we deliver detailed insights aligned with your investment thesis.",
    },
    {
      icon: Briefcase,
      title: "Model Portfolios",
      description: "Curated investment portfolios constructed through rigorous research and risk assessment. Our model portfolios are designed for long-term value creation, with clear investment rationale and regular monitoring.",
    },
    {
      icon: Users,
      title: "Research & Investment Consulting",
      description: "Strategic consulting services for institutions and HNIs seeking research-driven investment guidance. We provide independent research support, portfolio review, and investment process consulting.",
    },
  ];

  const comingSoonServices = [
    {
      icon: TrendingUp,
      title: "PMS Distribution",
      description: "Distribution of Portfolio Management Services from leading PMS providers. We will help you select suitable PMS strategies aligned with your investment objectives and risk profile.",
    },
    {
      icon: Building,
      title: "AIF Distribution",
      description: "Distribution of Alternative Investment Funds across various categories. Access to curated AIF offerings with thorough due diligence and suitability assessment.",
    },
    {
      icon: PiggyBank,
      title: "Mutual Fund Distribution",
      description: "Comprehensive mutual fund distribution services with unbiased fund selection based on fundamental research, cost efficiency, and alignment with your financial goals.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive research and investment services designed for disciplined, 
              long-term investors seeking fundamental insights and rational investment guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Active Services */}
      <section className="py-12 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Research & Advisory Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {activeServices.map((service, index) => (
              <div
                key={index}
                className="p-6 lg:p-8 rounded-lg border border-border bg-card"
              >
                <service.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Services */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Distribution Services
          </h2>
          <p className="text-muted-foreground mb-8">
            Expanding our offerings to provide comprehensive investment distribution services.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {comingSoonServices.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-border bg-muted/30 relative"
              >
                <span className="absolute top-4 right-4 inline-flex items-center rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                  Coming Soon
                </span>
                <service.icon className="h-8 w-8 text-muted-foreground mb-4" />
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

      {/* Approach */}
      <section className="py-12 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Our Approach
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Research-First:</strong> Every 
                recommendation is backed by thorough fundamental research and analysis.
              </p>
              <p>
                <strong className="text-foreground">Risk-Aware:</strong> We clearly 
                communicate risks and ensure recommendations align with investor suitability.
              </p>
              <p>
                <strong className="text-foreground">Long-Term Focus:</strong> Our 
                investment philosophy prioritizes sustainable value creation over short-term gains.
              </p>
              <p>
                <strong className="text-foreground">Compliance-First:</strong> All our 
                services adhere strictly to SEBI regulations and industry best practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
