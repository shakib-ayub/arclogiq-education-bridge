import { Shield, ArrowRight, Handshake, HeartHandshake } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  { icon: HeartHandshake, label: "Dignity" },
  { icon: ArrowRight, label: "Continuity" },
  { icon: Shield, label: "Trust" },
  { icon: Handshake, label: "Responsibility" },
];

const ValuesSection = () => {
  return (
    <section id="values" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <AnimatedSection>
          <p className="text-sm font-sans uppercase tracking-widest text-muted-foreground mb-4">
            Our Values
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-14">
            What guides us
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          {values.map((v, i) => (
            <AnimatedSection key={v.label} delay={i * 100}>
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-sky flex items-center justify-center">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-base font-serif font-medium text-foreground">{v.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={500}>
          <p className="text-muted-foreground italic font-serif text-lg">
            Education should depend on aspiration — not affordability.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ValuesSection;
