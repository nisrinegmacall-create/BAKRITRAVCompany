import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import serviceSauna from "@/assets/service-sauna.jpg";
import serviceHammam from "@/assets/service-hammam.jpg";
import servicePool from "@/assets/service-pool.jpg";
import serviceSpa from "@/assets/service-spa.jpg";
import serviceInstallation from "@/assets/service-installation.jpg";

const services = [
  {
    image: serviceSauna,
    title: "Sauna sur mesure",
    description: "Conception et installation de saunas traditionnels et infrarouges, adaptés à vos espaces intérieurs et extérieurs."
  },
  {
    image: serviceHammam,
    title: "Hammam traditionnel et moderne",
    description: "Création de hammams authentiques marocains ou design contemporain avec tous les équipements nécessaires."
  },
  {
    image: servicePool,
    title: "Piscine intérieure / extérieure",
    description: "Construction de piscines élégantes et fonctionnelles, du concept à la réalisation complète."
  },
  {
    image: serviceSpa,
    title: "Spa & bien-être",
    description: "Aménagement d'espaces bien-être complets incluant jacuzzis, douches sensorielles et zones de relaxation."
  },
  {
    image: serviceInstallation,
    title: "Installation & rénovation",
    description: "Services d'installation professionnelle et rénovation d'installations existantes pour leur redonner vie."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre gamme complète de services pour créer votre espace bien-être idéal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-fade-up group border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  En savoir plus
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
