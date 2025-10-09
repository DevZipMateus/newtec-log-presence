import { Target, Lightbulb, Heart, Award, Users, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Buscar constantemente novas ideias",
    },
    {
      icon: Heart,
      title: "Ética",
      description: "Atuar com transparência, responsabilidade e respeito",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Compromisso com qualidade em cada entrega",
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Valorizar o trabalho em equipe e as parcerias estratégicas",
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Promover tecnologia responsável para um futuro melhor",
    },
    {
      icon: Target,
      title: "Foco no cliente",
      description: "Colocar as necessidades do cliente no centro das soluções",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Sobre a New Tec Log</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Fundada em 2010, atuamos há mais de 14 anos no mercado de empilhadeiras e equipamentos de movimentação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          <div className="bg-background rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Missão</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Desenvolver e entregar soluções de alta qualidade, acessíveis e personalizadas, que impulsionem a eficiência, a inovação e a competitividade de nossos clientes.
            </p>
          </div>

          <div className="bg-background rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Visão</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Ser referência em reposição de peças multimarcas para empilhadeiras, que transformam negócios e melhoram a vida das empresas, promovendo um futuro mais inteligente e sustentável.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Nossos valores</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="p-5 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2">{value.title}</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
