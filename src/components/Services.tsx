import { Wrench, Package, Droplet, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import partsImage from "@/assets/parts-service.jpg";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Peças e Acessórios para Empilhadeiras",
      description:
        "Reposição de peças multimarcas para empilhadeiras com qualidade garantida e pronta entrega.",
      features: [
        "Peças genuínas e importadas",
        "Estoque amplo",
        "Intercompatibilidade",
        "Preços competitivos",
        "Reposição de peças para empilhadeiras: HYSTER, TOYOTA, STILL, CLARK, HANGCHA, entre outras.",
      ],
    },
    {
      icon: Wrench,
      title: "Manutenção de empilhadeira",
      description:
        "Serviços completos de manutenção preventiva e corretiva para garantir máxima eficiência operacional.",
      features: [
        "Manutenção preventiva",
        "Reparos especializados",
        "Equipe técnica qualificada",
        "Atendimento rápido",
      ],
    },
    {
      icon: Droplet,
      title: "Locação de lavadora de piso",
      description:
        "Equipamentos modernos para limpeza industrial com excelente custo-benefício.",
      features: [
        "Equipamentos modernos",
        "Manutenção inclusa",
        "Planos de locação com produto e material incluso",
        "Suporte técnico",
      ],
    },
    {
      icon: Truck,
      title: "Locação de Empilhadeiras",
      description:
        "Equipamentos modernos com excelente custo benefício.",
      features: [
        "Equipamentos elétricos e a combustão",
        "Manutenção inclusa",
        "Suporte Técnico",
      ],
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Nossos serviços</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Soluções completas para manter sua operação funcionando com máxima eficiência
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="p-4 sm:p-5 lg:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl lg:text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-5 lg:p-6 pt-0">
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mb-3 sm:mb-4">{service.description}</p>
                <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-accent rounded-xl sm:rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div
              className="min-h-[200px] sm:min-h-[250px] md:min-h-[300px] bg-cover bg-center"
              style={{ backgroundImage: `url(${partsImage})` }}
            />
            <div className="p-5 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
                Precisa de uma solução personalizada?
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-white/90 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                Nossa equipe está pronta para desenvolver a solução ideal para as necessidades específicas da sua empresa.
              </p>
              <Button
                size="lg"
                className="text-sm sm:text-base lg:text-lg w-full sm:w-auto sm:self-start px-6 sm:px-8"
                asChild
              >
                <a href="https://wa.me/551144276515" target="_blank" rel="noopener noreferrer">
                  Solicitar orçamento
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
