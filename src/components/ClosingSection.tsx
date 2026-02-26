import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const ClosingSection = () => {
  return (
    <section className="py-28 md:py-36 bg-primary/5">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-foreground leading-relaxed mb-10">
            Together, we can ensure that determination is never limited by financial circumstances.
          </h2>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-base rounded-full shadow-lg"
          >
            Support a Child
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ClosingSection;
