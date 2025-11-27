import { Award, Leaf, Wrench, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Award,
    title: "Qualité",
    description: "Des matériaux premium et un savoir-faire artisanal"
  },
  {
    icon: Users,
    title: "Expertise",
    description: "Plus de 15 ans d'expérience dans le bien-être"
  },
  {
    icon: Leaf,
    title: "Nature",
    description: "Des designs inspirés par la nature et l'écologie"
  },
  {
    icon: Wrench,
    title: "Sur-Mesure",
    description: "Chaque projet adapté à vos besoins uniques"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            À propos de nous
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            BakriTrav Company est spécialisée dans la conception et l'installation de saunas sur mesure, 
            hammams traditionnels et modernes, piscines intérieures et extérieures, ainsi que des espaces 
            bien-être complets. Notre équipe d'experts transforme vos rêves en réalité, en alliant tradition 
            et innovation pour créer des espaces de détente exceptionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-scale-in border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
