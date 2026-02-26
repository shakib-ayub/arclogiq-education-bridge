import AnimatedSection from "@/components/AnimatedSection";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              If you'd like to support a child's education or learn more about our initiative, we'd love to hear from you.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md border border-border bg-card">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe1MthT37VJ0NjR9iYcDioYYJmkTrt8dehrVtSLjBk9yd5_gQ/viewform?embedded=true"
              width="100%"
              height="800"
              className="border-0 w-full"
              title="Contact Form"
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
