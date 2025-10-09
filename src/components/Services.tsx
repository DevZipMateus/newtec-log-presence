import { Wrench, Package, Droplet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import partsImage from "@/assets/parts-service.jpg";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Peças para empilhadeira",
      description:
        "Reposição de peças multimarcas para empilhadeiras com qualidade garantida e pronta entrega.",
      features: [
        "Peças originais e alternativas",
        "Estoque disponível",
        "Compatibilidade multimarcas",
        "Preços competitivos",
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
        "Manutenção incluída",
        "Planos flexíveis",
        "Suporte técnico",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossos serviços</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas para manter sua operação funcionando com máxima eficiência
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-accent rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div
              className="min-h-[300px] bg-cover bg-center"
              style={{ backgroundImage: `url(${partsImage})` }}
            />
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Precisa de uma solução personalizada?
              </h3>
              <p className="text-white/90 mb-8 leading-relaxed">
                Nossa equipe está pronta para desenvolver a solução ideal para as necessidades específicas da sua empresa.
              </p>
              <Button
                size="lg"
                className="self-start"
                asChild
              >
                <a href="https://wa.me/5511442765155" target="_blank" rel="noopener noreferrer">
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
