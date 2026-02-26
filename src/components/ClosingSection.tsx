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
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-base rounded-full shadow-lg"
            >
              Support a Child
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground/10 px-10 py-6 text-base rounded-full shadow-lg"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSe1MthT37VJ0NjR9iYcDioYYJmkTrt8dehrVtSLjBk9yd5_gQ/viewform", "_blank")}
            >
              Contact
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ClosingSection;
