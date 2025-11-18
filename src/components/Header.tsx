import { useState, useEffect } from "react";
import { Menu, X, Mail, Phone, Home, Info, Briefcase, MessageSquare } from "lucide-react";
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
    { label: "Início", id: "hero", icon: Home },
    { label: "Sobre", id: "about", icon: Info },
    { label: "Serviços", id: "services", icon: Briefcase },
    { label: "Contato", id: "contact", icon: MessageSquare },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-background"
      }`}
    >
      {/* Top bar com contatos */}
      <div className="hidden lg:block bg-primary/5 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end gap-6 h-10 text-sm">
            <a
              href="mailto:contato@newteclog.com.br"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} />
              <span>contato@newteclog.com.br</span>
            </a>
            <a
              href="tel:+551144276515"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={16} />
              <span>(11) 4427-6515</span>
            </a>
          </div>
        </div>
      </div>

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
            className="lg:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden fixed top-0 right-0 bottom-0 w-[280px] bg-background shadow-2xl z-50 animate-slide-in-right border-l border-border">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-2">
                  <img src={logo} alt="New Tec Log" className="h-8 w-auto" />
                  <span className="font-bold text-base">New Tec Log</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                  aria-label="Fechar menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto py-6 px-4">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center gap-3 w-full text-left py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg font-medium transition-all group animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>

                {/* Contact Info in Mobile Menu */}
                <div className="mt-8 space-y-3 px-4">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Contato
                  </div>
                  <a
                    href="tel:+551144276515"
                    className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Phone size={16} />
                    <span>(11) 4427-6515</span>
                  </a>
                  <a
                    href="mailto:contato@newteclog.com.br"
                    className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Mail size={16} />
                    <span>contato@newteclog.com.br</span>
                  </a>
                </div>
              </div>

              {/* Menu Footer */}
              <div className="p-4 border-t border-border">
                <Button
                  variant="default"
                  className="w-full"
                  asChild
                >
                  <a href="https://wa.me/5511442765155" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 w-4 h-4" />
                    Fale conosco
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
