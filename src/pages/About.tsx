import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-normal text-foreground mb-8">
              About
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              An independent equity research firm committed to delivering fundamental, 
              data-driven investment insights for disciplined investors.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-xl font-normal text-foreground mb-2">
              Founder
            </h2>
            <p className="text-base text-foreground mb-6">
              Hemanth M M
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Stock Finance Hub is founded by Hemanth M M, a NISM-Qualified investment 
              professional with a strong focus on fundamental equity research, data-driven 
              analysis, and disciplined long-term investing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The founder follows a research-first and compliance-oriented approach, 
              emphasizing transparency, investor suitability, and rational decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Co-Founder */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-xl font-normal text-foreground mb-2">
              Co-Founder
            </h2>
            <p className="text-base text-foreground mb-6">
              Naveen M E
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Naveen M E, Co-Founder of Stock Finance Hub, contributes to the firm's 
              research development, operational structure, and long-term strategic direction, 
              supporting a disciplined and transparent investment research framework.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-xl font-normal text-foreground mb-6">
              Philosophy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe that successful long-term investing is built on a foundation of 
              rigorous fundamental analysis, patience, and disciplined decision-making. 
              Our research process focuses on understanding businesses deeply — their 
              competitive advantages, financial health, management quality, and intrinsic value.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do not chase short-term market movements or speculative trends. Instead, 
              we focus on identifying quality businesses at reasonable valuations, 
              helping our clients make informed investment decisions aligned with their 
              risk tolerance and financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-xl font-normal text-foreground mb-10">
              Core Values
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-base font-normal text-foreground mb-2">Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  We maintain the highest ethical standards in all our research and recommendations.
                </p>
              </div>
              <div>
                <h3 className="text-base font-normal text-foreground mb-2">Discipline</h3>
                <p className="text-sm text-muted-foreground">
                  Our investment philosophy is grounded in systematic analysis, not speculation.
                </p>
              </div>
              <div>
                <h3 className="text-base font-normal text-foreground mb-2">Transparency</h3>
                <p className="text-sm text-muted-foreground">
                  Clear communication of our methodology, assumptions, and potential risks.
                </p>
              </div>
              <div>
                <h3 className="text-base font-normal text-foreground mb-2">Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  Strict adherence to SEBI regulations and investor suitability requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-xl font-normal text-foreground mb-6">
              Vision
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To build a trusted, research-driven investment brand in India that empowers 
              investors with institutional-quality fundamental research, enabling them to 
              make informed, rational investment decisions for long-term wealth creation.
            </p>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm text-muted-foreground italic">
              Regulatory registrations and expanded investment services are planned and 
              will be launched in accordance with applicable regulations.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
