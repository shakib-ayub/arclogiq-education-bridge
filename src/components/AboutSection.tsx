import AnimatedSection from "@/components/AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <AnimatedSection>
          <p className="text-sm font-sans uppercase tracking-widest text-muted-foreground mb-4">
            Our Purpose
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-8">
            Education is a shared responsibility
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            At Arclogiq, we believe education should never stop because of financial hardship.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We support children whose families are committed to their education but lack the financial means to continue it.
          </p>
          <div className="flex items-center justify-center gap-4 my-10">
            <span className="h-px w-12 bg-border" />
            <span className="text-muted-foreground/60 text-sm italic font-serif">
              This is not charity. This is shared responsibility.
            </span>
            <span className="h-px w-12 bg-border" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
