import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "TV Lúcio Veiga, 53 sala 3",
      subtitle: "Centro - Santo André, SP - 09040-090",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 4427-6515",
      subtitle: "Segunda a sexta",
    },
    {
      icon: Mail,
      title: "Email",
      content: "reneadm.teclog@gmail.com",
      subtitle: "Resposta em até 24h",
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      content: "Segunda a sexta",
      subtitle: "Das 8:00 às 17:30",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Entre em contato</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Estamos prontos para atender sua empresa com excelência e agilidade
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-5 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2 text-sm sm:text-base">{info.title}</h3>
                <p className="text-xs sm:text-sm font-medium mb-1">{info.content}</p>
                <p className="text-xs text-muted-foreground">{info.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-background rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center max-w-3xl mx-auto shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Fale conosco pelo WhatsApp</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            Entre em contato agora mesmo e solicite um orçamento sem compromisso. Nossa equipe responderá rapidamente.
          </p>
          <Button
            size="lg"
            className="text-base sm:text-lg w-full sm:w-auto"
            asChild
          >
            <a
              href="https://wa.me/5511442765155"
              target="_blank"
              rel="noopener noreferrer"
            >
              Iniciar conversa
            </a>
          </Button>
        </div>

        <div className="mt-8 sm:mt-12 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.846926!2d-46.5361894!3d-23.6620782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42f3e1e1c1c1%3A0x1e1e1e1e1e1e1e1e!2sTV.%20L%C3%BAcio%20Veiga%2C%2053%20-%20Centro%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009040-090!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização New Tec Log"
            className="sm:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
