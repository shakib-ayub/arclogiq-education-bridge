import heroImage from "@/assets/hero-education.jpg";
import classroomImage from "@/assets/kids-smartboard.jpg";
import { Button } from "@/components/ui/button";

const FloatingShapes = () => {
  const items = [
    { type: "letter", char: "A", left: "6%", top: "70%", size: "text-4xl md:text-5xl", anim: "animate-drift-up", delay: "0s", duration: "13s", op: 0.18, rot: "-8deg", rotEnd: "12deg" },
    { type: "letter", char: "B", left: "18%", top: "85%", size: "text-3xl md:text-4xl", anim: "animate-drift-diagonal", delay: "2s", duration: "15s", op: 0.16, rot: "10deg", rotEnd: "-5deg" },
    { type: "letter", char: "C", left: "82%", top: "75%", size: "text-5xl md:text-6xl", anim: "animate-drift-up", delay: "4s", duration: "14s", op: 0.14, rot: "5deg", rotEnd: "-10deg" },
    { type: "letter", char: "1", left: "70%", top: "88%", size: "text-3xl md:text-4xl", anim: "animate-drift-diagonal", delay: "6s", duration: "16s", op: 0.16, rot: "-5deg", rotEnd: "8deg" },
    { type: "letter", char: "+", left: "40%", top: "82%", size: "text-4xl md:text-5xl", anim: "animate-drift-up", delay: "1s", duration: "12s", op: 0.15, rot: "0deg", rotEnd: "20deg" },
    { type: "icon", char: "📖", left: "10%", top: "80%", size: "text-3xl md:text-4xl", anim: "animate-drift-up", delay: "3s", duration: "14s", op: 0.35, rot: "-10deg", rotEnd: "10deg" },
    { type: "icon", char: "✏️", left: "55%", top: "90%", size: "text-3xl md:text-4xl", anim: "animate-drift-diagonal", delay: "5s", duration: "13s", op: 0.4, rot: "15deg", rotEnd: "-15deg" },
    { type: "icon", char: "📚", left: "88%", top: "82%", size: "text-3xl md:text-4xl", anim: "animate-drift-up", delay: "7s", duration: "15s", op: 0.35, rot: "-5deg", rotEnd: "10deg" },
    { type: "icon", char: "🎨", left: "30%", top: "88%", size: "text-3xl md:text-4xl", anim: "animate-drift-diagonal", delay: "8s", duration: "16s", op: 0.35, rot: "8deg", rotEnd: "-8deg" },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]" aria-hidden="true">
      {items.map((it, i) => (
        <span
          key={i}
          className={`absolute font-serif font-bold text-primary-foreground select-none ${it.size} ${it.anim}`}
          style={{
            left: it.left,
            top: it.top,
            animationDelay: it.delay,
            animationDuration: it.duration,
            ["--max-op" as never]: it.op,
            ["--rot-start" as never]: it.rot,
            ["--rot-end" as never]: it.rotEnd,
          }}
        >
          {it.char}
        </span>
      ))}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="A child studying with parental support in warm sunlight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/65 to-foreground/40" />
      </div>
      <FloatingShapes />
      <div className="relative z-10 container mx-auto px-6 pt-32 sm:pt-36 md:pt-40 lg:pt-24 pb-16 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary-foreground leading-tight mb-6 animate-fade-up">
            Ensuring Education Never Stops
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 font-light leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            We stand beside parents who want their children to study but cannot afford schooling.
          </p>
          <div className="animate-fade-up flex flex-wrap gap-4 justify-center lg:justify-start" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base rounded-full shadow-lg"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground bg-primary-foreground text-foreground hover:bg-primary-foreground/90 px-8 py-6 text-base rounded-full shadow-lg"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSe1MthT37VJ0NjR9iYcDioYYJmkTrt8dehrVtSLjBk9yd5_gQ/viewform", "_blank")}
            >
              Contact
            </Button>
          </div>
        </div>

        <div className="relative animate-fade-up mx-auto w-full max-w-xl" style={{ animationDelay: "0.3s" }}>
          <div className="relative animate-float-soft">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-primary/40 via-sky/40 to-warm/30 blur-2xl opacity-70" aria-hidden="true" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-primary-foreground/20 animate-board-glow">
              <img
                src={classroomImage}
                alt="Animated illustration of children in school uniforms learning at an interactive smart whiteboard"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
              />
            </div>
            <span className="absolute -top-3 -left-3 w-5 h-5 rounded-full bg-warm animate-sparkle" aria-hidden="true" />
            <span className="absolute top-1/3 -right-4 w-3 h-3 rounded-full bg-primary animate-sparkle" style={{ animationDelay: "0.8s" }} aria-hidden="true" />
            <span className="absolute -bottom-2 left-1/4 w-4 h-4 rounded-full bg-sky animate-sparkle" style={{ animationDelay: "1.4s" }} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
