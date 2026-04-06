import heroImage from "@/assets/hero-education.jpg";
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
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/30" />
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary-foreground leading-tight mb-6 animate-fade-up">
          Ensuring Education Never Stops
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 font-light leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
          We stand beside parents who want their children to study but cannot afford schooling.
        </p>
        <div className="animate-fade-up flex flex-wrap gap-4 justify-center" style={{ animationDelay: "0.4s" }}>
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
    </section>
  );
};

export default HeroSection;
