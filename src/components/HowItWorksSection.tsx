import { Search, ClipboardCheck, GraduationCap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Identify",
    desc: "Find families committed to their children's education",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Assess",
    desc: "Understand the financial need and educational context",
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Support",
    desc: "Ensure the child's schooling continues uninterrupted",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-sans uppercase tracking-widest text-muted-foreground mb-4">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              A simple, transparent process
            </h2>
          </div>
        </AnimatedSection>
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 150}>
              <div className="relative text-center">
                <span className="text-5xl font-serif font-bold text-primary/10 block mb-2">
                  {step.number}
                </span>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-medium text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={500}>
          <p className="text-center text-sm text-muted-foreground mt-14 italic max-w-lg mx-auto">
            Our role is to ensure financial challenges never interrupt learning.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HowItWorksSection;
