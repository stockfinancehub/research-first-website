import Layout from "@/components/Layout";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our research services? We'd be happy to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-12 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <div className="p-8 rounded-lg border border-border bg-card">
              <Mail className="h-12 w-12 text-accent mx-auto mb-6" />
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Email Us
              </h2>
              <p className="text-muted-foreground mb-6">
                For inquiries about our research services, custom analysis requests, 
                or general questions.
              </p>
              <a
                href="mailto:contact@stockfinancehub.com"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                contact@stockfinancehub.com
              </a>
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-medium text-foreground mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3 text-left text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2"></span>
                  <span>Response within 24-48 business hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2"></span>
                  <span>Professional consultation to understand your requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2"></span>
                  <span>Clear communication about our services and approach</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2"></span>
                  <span>Suitability assessment before any engagement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
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
