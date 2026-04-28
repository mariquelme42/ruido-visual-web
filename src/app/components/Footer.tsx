import { Link } from "react-router";
import { Mail, Instagram, Heart } from "lucide-react";
import { useState } from "react";
import DonationModal from "./DonationModal";

export function Footer() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

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
              <button
                type="button"
                onClick={() => setIsDonationModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground bg-background hover:bg-foreground hover:text-background transition-all duration-300 text-sm"
              >
                <Heart className="w-4 h-4" />
                Apoyar con una donación
              </button>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-6 text-muted-foreground">
                Secciones
              </h4>
              <nav className="space-y-3">
                {[
                  { path: "/ruido-visual", label: "Inicio" },
                  { path: "/acerca", label: "Acerca" },
                  { path: "/biblioteca", label: "Biblioteca" },
                  { path: "/galeria", label: "Galería" },
                 /* { path: "/convocatorias", label: "Convocatorias" },*/
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      if (item.path === "/ruido-visual") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
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

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:ruidovisual25@gmail.com"
                  className="inline-flex items-center gap-3 text-sm hover:text-primary transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>ruidovisual25@gmail.com</span>
                </a>

                <a
                  href="https://www.instagram.com/ruidovisual.py/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm hover:text-primary transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@ruidovisual.py</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-foreground/10">
            <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Ruido Visual
              <span className="mx-2">·</span>
              Hecho con ♥ por{" "}
              <a
                href="https://tu-link-aqui.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-foreground transition-colors"
              >
                María José
              </a>
            </p>
          </div>
        </div>
      </div>
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </footer>
  );
}