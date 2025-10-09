import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-warehouse.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-5rem)] sm:min-h-screen flex items-center pt-20">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-0">
        <div className="max-w-3xl">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
            <span className="text-primary font-semibold text-sm sm:text-base">Movimentando Soluções</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            New Tec Log
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
            Referência em reposição de peças multimarcas para empilhadeiras, transformando negócios e melhorando a vida das empresas
          </h2>

          <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 leading-relaxed">
            Desenvolvemos e entregamos soluções de alta qualidade, acessíveis e personalizadas, que impulsionam a eficiência, a inovação e a competitividade de nossos clientes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              size="lg"
              className="text-base sm:text-lg group w-full sm:w-auto"
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
              className="text-base sm:text-lg bg-white/10 backdrop-blur-sm text-white border-white/60 hover:bg-white hover:text-accent w-full sm:w-auto"
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
