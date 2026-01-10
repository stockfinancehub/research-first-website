import Layout from "@/components/Layout";

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-normal text-foreground mb-8">
              Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive research and investment services designed for disciplined, 
              long-term investors seeking fundamental insights and rational investment guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Research & Advisory Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-xl font-normal text-foreground mb-3">
              Research & Advisory Services
            </h2>
            <p className="text-sm text-muted-foreground italic mb-10">
              These services are proposed offerings and will be launched subject to applicable regulatory approvals.
            </p>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-base font-normal text-foreground mb-2">
                  Equity Research & Fundamental Analysis
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Comprehensive research on listed companies using fundamental analysis, financial modeling, 
                  ratio analysis, and valuation methodologies. Our research covers business quality, 
                  competitive positioning, management assessment, and intrinsic value estimation.
                </p>
              </div>

              <div>
                <h3 className="text-base font-normal text-foreground mb-2">
                  Custom Research & Company Analysis
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bespoke research reports tailored to your specific requirements. Whether you need 
                  deep-dive analysis on a particular company, sector study, or thematic research, 
                  we deliver detailed insights aligned with your investment thesis.
                </p>
              </div>

              <div>
                <h3 className="text-base font-normal text-foreground mb-2">
                  Model Portfolios
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Curated investment portfolios constructed through rigorous research and risk assessment. 
                  Our model portfolios are designed for long-term value creation, with clear investment 
                  rationale and regular monitoring.
                </p>
              </div>

              <div>
                <h3 className="text-base font-normal text-foreground mb-2">
                  Research & Investment Consulting
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Strategic consulting services for institutions and HNIs seeking research-driven 
                  investment guidance. We provide independent research support, portfolio review, 
                  and investment process consulting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-xl font-normal text-foreground mb-3">
              Distribution Services
            </h2>
            <p className="text-sm text-muted-foreground mb-2">
              Expanding our offerings to provide comprehensive investment distribution services.
            </p>
            <p className="text-sm text-muted-foreground italic mb-10">
              These services are proposed offerings and will be launched subject to applicable regulatory approvals.
            </p>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-base font-normal text-foreground mb-2">
                  PMS Distribution
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Distribution of Portfolio Management Services from leading PMS providers. 
                  We will help you select suitable PMS strategies aligned with your investment 
                  objectives and risk profile.
                </p>
              </div>

              <div>
                <h3 className="text-base font-normal text-foreground mb-2">
                  AIF Distribution
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Distribution of Alternative Investment Funds across various categories. 
                  Access to curated AIF offerings with thorough due diligence and suitability assessment.
                </p>
              </div>

              <div>
                <h3 className="text-base font-normal text-foreground mb-2">
                  Mutual Fund Distribution
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Comprehensive mutual fund distribution services with unbiased fund selection 
                  based on fundamental research, cost efficiency, and alignment with your financial goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-xl font-normal text-foreground mb-8">
              Our Approach
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                <span className="text-foreground">Research-First:</span> Every 
                recommendation is backed by thorough fundamental research and analysis.
              </p>
              <p>
                <span className="text-foreground">Risk-Aware:</span> We clearly 
                communicate risks and ensure recommendations align with investor suitability.
              </p>
              <p>
                <span className="text-foreground">Long-Term Focus:</span> Our 
                investment philosophy prioritizes sustainable value creation over short-term gains.
              </p>
              <p>
                <span className="text-foreground">Compliance-First:</span> All our 
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
