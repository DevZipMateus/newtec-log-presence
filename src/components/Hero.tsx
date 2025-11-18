import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-warehouse.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen flex items-center pt-16 sm:pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/80 to-accent/40 sm:from-accent/90 sm:via-accent/70 sm:to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-12 lg:py-0">
        <div className="max-w-3xl">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
            <span className="text-primary font-semibold text-sm sm:text-base">Movimentando Soluções</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            New Tec Log
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
            Referência em reposição de peças multimarcas para empilhadeiras, transformando negócios e melhorando a vida das empresas
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
            Desenvolvemos e entregamos soluções de alta qualidade, acessíveis e personalizadas, que impulsionam a eficiência, a inovação e a competitividade de nossos clientes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              size="lg"
              className="text-sm sm:text-base lg:text-lg group w-full sm:w-auto px-6 sm:px-8"
              asChild
            >
              <a href="https://wa.me/5511442765155" target="_blank" rel="noopener noreferrer">
                Solicitar orçamento
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-sm sm:text-base lg:text-lg bg-white/10 backdrop-blur-sm text-white border-white/60 hover:bg-white hover:text-accent w-full sm:w-auto px-6 sm:px-8"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
            >
              Nossos serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
