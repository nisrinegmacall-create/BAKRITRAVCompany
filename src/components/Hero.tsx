import { Button } from "@/components/ui/button";
import { Sparkles, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-sauna.jpg";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: 'translateZ(0)'
        }}
      >
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-white font-medium">
              Plus de 15 ans d'expertise
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
            Créez Votre Sanctuaire
            <span className="block text-accent mt-2">de Bien-Être</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Saunas authentiques • Hammams luxueux • Piscines élégantes
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              onClick={scrollToServices}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-7 rounded-full shadow-card-hover transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <span>Découvrir nos réalisations</span>
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white text-lg px-10 py-7 rounded-full transition-all duration-300 hover:scale-105"
            >
              Demander un devis gratuit
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <Award className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">500+</div>
            <div className="text-sm text-white/80">Projets Réalisés</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <Users className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-sm text-white/80">Clients Satisfaits</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <Sparkles className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">15+</div>
            <div className="text-sm text-white/80">Années d'Expertise</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
