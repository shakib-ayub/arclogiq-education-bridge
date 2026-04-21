import heroImage from "@/assets/hero-education.jpg";
import classroomImage from "@/assets/kids-smartboard.jpg";
import { Button } from "@/components/ui/button";

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
      <div className="relative z-10 container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
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
