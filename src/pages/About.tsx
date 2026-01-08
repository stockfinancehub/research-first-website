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

      {/* Founder Section */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Our Founder
            </h2>
            <p className="text-muted-foreground mb-6">
              Stock Finance Hub is founded by a SEBI-Registered Research Analyst and 
              NISM-Qualified Professional with deep expertise in fundamental 
              equity analysis and portfolio construction.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                SEBI-Registered Research Analyst (Registration details available on request)
              </span>
              <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                NISM-Qualified Professional
              </span>
            </div>
            <p className="text-muted-foreground">
              With a commitment to compliance-first practices and investor suitability, 
              our founder brings institutional-grade research discipline to individual 
              and institutional investors alike.
            </p>
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
