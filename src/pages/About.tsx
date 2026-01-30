import Layout from "@/components/Layout";
import { Shield, Target, Eye, CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our research and recommendations.",
    },
    {
      icon: Target,
      title: "Discipline",
      description: "Our investment philosophy is grounded in systematic analysis, not speculation.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear communication of our methodology, assumptions, and potential risks.",
    },
    {
      icon: CheckCircle,
      title: "Compliance",
      description: "Strict adherence to SEBI regulations and investor suitability requirements.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              About Stock Finance Hub
            </h1>
            <p className="text-lg text-muted-foreground">
              An independent equity research firm committed to delivering fundamental, 
              data-driven investment insights for disciplined investors.
            </p>
          </div>
        </div>
      </section>

      {/* Founder & Co-Founder Section */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Founder */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
                Founder
              </h2>
              <p className="text-lg font-medium text-foreground mb-1">
                Hemanth M M
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Founder & Research Head, Stock Finance Hub
              </p>
              <p className="text-muted-foreground mb-4">
                Hemanth M M is the Founder & Research Head at Stock Finance Hub, a research-first 
                financial platform focused on transparent equity research, fundamental analysis, 
                and disciplined long-term wealth creation. His journey into finance developed 
                through curiosity and self-learning rather than a predefined path.
              </p>
              <p className="text-muted-foreground mb-4">
                While initially pursuing a BCA degree, he realized the field did not align with 
                his long-term goals and gradually developed a strong interest in the stock market. 
                During his early learning phase, he observed that many coaching programs emphasized 
                short-term trading strategies like F&O, scalping, and hedging, often overlooking 
                the importance of structured research and long-term investing. This realization 
                encouraged him to pursue a different direction—one centered on understanding 
                business fundamentals, sector analysis, and rational investment principles.
              </p>
              <p className="text-muted-foreground mb-4">
                Over time, he dedicated himself to studying company financials, market behavior, 
                and long-term value creation, building strong skills in equity research, fundamental 
                analysis, company valuation basics, portfolio structuring, and sector study. He is 
                currently pursuing a B.Com degree to meet the academic requirements for SEBI Research 
                Analyst registration and is actively preparing for future regulatory qualifications.
              </p>
              <p className="text-muted-foreground">
                With a vision to promote ethical, unbiased, and compliance-oriented financial research, 
                he founded Stock Finance Hub to help investors make informed decisions based on data 
                rather than speculation. He strongly believes in long-term wealth creation, a client-first 
                approach, zero hype, and complete transparency in finance, with the long-term goal of 
                building one of India's most trusted research-driven investment platforms and serving 
                investors with high-quality insights.
              </p>
            </div>

            {/* Co-Founder */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
                Co-Founder
              </h2>
              <p className="text-lg font-medium text-foreground mb-4">
                Naveen M E
              </p>
              <p className="text-muted-foreground">
                Naveen M E, Co-Founder of Stock Finance Hub, contributes to the firm's 
                research development, operational structure, and long-term strategic direction, 
                supporting a disciplined and transparent investment research framework.
              </p>
            </div>

            {/* Launching Soon Note */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                Regulatory registrations and expanded investment services are planned and 
                will be launched in accordance with applicable regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Our Philosophy
            </h2>
            <p className="text-muted-foreground mb-6">
              We believe that successful long-term investing is built on a foundation of 
              rigorous fundamental analysis, patience, and disciplined decision-making. 
              Our research process focuses on understanding businesses deeply — their 
              competitive advantages, financial health, management quality, and intrinsic value.
            </p>
            <p className="text-muted-foreground">
              We do not chase short-term market movements or speculative trends. Instead, 
              we focus on identifying quality businesses at reasonable valuations, 
              helping our clients make informed investment decisions aligned with their 
              risk tolerance and financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <value.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-muted-foreground">
              To build a trusted, research-driven investment brand in India that empowers 
              investors with institutional-quality fundamental research, enabling them to 
              make informed, rational investment decisions for long-term wealth creation.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
