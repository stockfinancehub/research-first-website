import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-normal text-foreground mb-8">
              Contact
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about our research services? We'd be happy to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-xl font-normal text-foreground mb-6">
              Email
            </h2>
            <p className="text-muted-foreground mb-4">
              For inquiries about our research services, custom analysis requests, 
              or general questions.
            </p>
            <a
              href="mailto:contact@stockfinancehub.com"
              className="text-foreground"
            >
              contact@stockfinancehub.com
            </a>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-xl font-normal text-foreground mb-8">
              What to Expect
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>Response within 24-48 business hours</li>
              <li>Professional consultation to understand your requirements</li>
              <li>Clear communication about our services and approach</li>
              <li>Suitability assessment before any engagement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm text-muted-foreground">
              Please note: We do not provide stock tips or short-term trading recommendations. 
              Our services are designed for investors seeking disciplined, research-driven 
              long-term investment guidance.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
