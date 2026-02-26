import { BookOpen, PenLine, Shirt, Package } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const supports = [
  { icon: BookOpen, title: "School Fees", desc: "Tuition and enrollment support" },
  { icon: PenLine, title: "Books & Stationery", desc: "Essential learning materials" },
  { icon: Shirt, title: "Uniforms", desc: "School dress and accessories" },
  { icon: Package, title: "Academic Supplies", desc: "Basic educational necessities" },
];

const SupportSection = () => {
  return (
    <section className="py-24 md:py-32 bg-sky/40">
      <div className="container mx-auto px-6 max-w-5xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-sans uppercase tracking-widest text-muted-foreground mb-4">
              What We Support
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              Continuity, not one-time assistance
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {supports.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 100}>
              <div className="bg-card rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/50">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-sage flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-serif font-medium text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={500}>
          <p className="text-center text-sm text-muted-foreground mt-12 italic">
            We ensure continuity in education, not one-time assistance.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SupportSection;
