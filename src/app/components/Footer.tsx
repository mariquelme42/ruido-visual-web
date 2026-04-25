import { Link } from "react-router";
import { Mail, Instagram, Twitter, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-foreground/20 bg-background">
      <div className="px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-16">
            {/* Brand Statement */}
            <div className="md:col-span-1">
              <h3 className="mb-6 text-xl md:text-2xl" style={{ fontFamily: 'var(--font-serif)' }}>Ruido Visual</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                Red editorial colectiva, independiente y autogestionada. Un espacio de creación
                compartida y publicación libre.
              </p>
              <a
                href="https://ko-fi.com/ruidovisual"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground bg-background hover:bg-foreground hover:text-background transition-all duration-300 text-sm"
              >
                <Heart className="w-4 h-4" />
                Apoyar con una donación
              </a>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-6 text-muted-foreground">
                Secciones
              </h4>
              <nav className="space-y-3">
                {[
                  { path: "/", label: "Inicio" },
                  { path: "/acerca", label: "Acerca" },
                  { path: "/biblioteca", label: "Biblioteca" },
                  { path: "/galeria", label: "Galería" },
                  { path: "/convocatorias", label: "Convocatorias" },
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block text-sm hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-6 text-muted-foreground">
                Conectá
              </h4>
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:contacto@ruidovisual.org"
                  className="block text-sm hover:text-primary transition-colors duration-300"
                >
                  contacto@ruidovisual.org
                </a>
                <a
                  href="mailto:convocatorias@ruidovisual.org"
                  className="block text-sm hover:text-primary transition-colors duration-300"
                >
                  convocatorias@ruidovisual.org
                </a>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contacto@ruidovisual.org"
                  className="text-foreground hover:text-primary transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-foreground/10">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Ruido Visual — Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}