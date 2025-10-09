import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Sobre", id: "about" },
    { label: "Serviços", id: "services" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
            aria-label="Ir para o início"
          >
            <img src={logo} alt="New Tec Log" className="h-10 sm:h-12 w-auto" />
            <span className="font-bold text-lg sm:text-xl text-foreground">
              New Tec Log
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full text-sm xl:text-base"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button
            variant="default"
            size="sm"
            className="hidden lg:inline-flex"
            asChild
          >
            <a href="https://wa.me/5511442765155" target="_blank" rel="noopener noreferrer">
              Fale conosco
            </a>
          </Button>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-2 text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="default"
              className="w-full mt-4"
              asChild
            >
              <a href="https://wa.me/5511442765155" target="_blank" rel="noopener noreferrer">
                Fale conosco
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
