import { useState } from "react";
import Layout from "@/components/Layout";
import EmailModal from "@/components/EmailModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 lg:py-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-foreground leading-tight mb-8">
              Independent Equity Research
            </h1>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Disciplined, research-driven equity insights grounded in 
              fundamental analysis and rational decision-making.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              No hype, no speculation—only structured research for informed investors.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm text-muted-foreground mb-3">SEBI-Registered Research Analyst</p>
            <p className="text-sm text-muted-foreground mb-3">NISM Qualified Professional</p>
            <p className="text-sm text-muted-foreground">Compliance-First Approach</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-normal text-foreground mb-10">
              Services
            </h2>

            <div className="space-y-10">
              <div>
                <h3 className="text-base font-normal text-foreground mb-2">
                  Equity Research & Fundamental Analysis
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In-depth research on companies using fundamental analysis, financial modeling, and valuation frameworks.
                </p>
              </div>

              <div>
                <h3 className="text-base font-normal text-foreground mb-2">
                  Custom Research & Company Analysis
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bespoke research reports tailored to your specific investment thesis or sector interest.
                </p>
              </div>

              <div>
                <h3 className="text-base font-normal text-foreground mb-2">
                  Model Portfolios
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Curated portfolios based on rigorous research, risk assessment, and long-term value creation.
                </p>
              </div>

              <div>
                <h3 className="text-base font-normal text-foreground mb-2">
                  Research & Investment Consulting
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Strategic consulting for institutions and individuals seeking research-driven investment guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-normal text-foreground mb-6">
              Our Commitment
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Stock Finance Hub is founded by a SEBI-Registered Research Analyst and 
              NISM-Qualified Professional, committed to transparency, regulatory compliance, 
              and investor suitability. Our vision is to build a trusted, research-driven 
              investment brand in India.
            </p>
          </div>
        </div>
      </section>

      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Layout>
  );
};

export default Index;
