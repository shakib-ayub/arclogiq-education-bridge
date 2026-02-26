import AnimatedSection from "@/components/AnimatedSection";
import { Heart } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-24 md:py-32 bg-sage/40">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <AnimatedSection>
          <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
            <Heart className="w-5 h-5 text-accent" />
          </div>
          <p className="text-sm font-sans uppercase tracking-widest text-muted-foreground mb-4">
            Community
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-8">
            Growing Through Trust
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            As more students are supported, trusted friends and well-wishers may choose to contribute towards a child's education.
          </p>
          <p className="text-base text-muted-foreground/80 leading-relaxed">
            Support is always directed toward real students and real needs.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CommunitySection;
