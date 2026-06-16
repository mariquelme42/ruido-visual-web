import { motion } from "motion/react";
import { Mail, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { setPageSeo } from "../utils/seo";

export function Calls() {
  useEffect(() => {
    setPageSeo({
      title: "Convocatorias | Ruido Visual",
      description:
        "Sección de convocatorias de Ruido Visual. Actualmente no hay convocatorias abiertas.",
      path: "/convocatorias",
      favicon: "/favicon.png",
      siteName: "Ruido Visual",
    });
  }, []);

  return (
    <div className="overflow-x-hidden px-4 py-10 sm:px-6 md:px-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8 md:mb-14">
          <p className="text-xs uppercase tracking-[0.22em] sm:tracking-[0.28em] text-muted-foreground mb-3 md:mb-4">
            Convocatorias
          </p>
          <h1
            className="text-4xl leading-[1.05] md:text-5xl lg:text-7xl tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Próximamente
          </h1>
        </header>

        <section className="relative overflow-hidden border-2 border-foreground bg-background">
          <div className="absolute inset-x-0 top-0 h-1 bg-foreground" />

          <div className="grid md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[280px] md:min-h-[520px] bg-secondary/30 border-b-2 md:border-b-0 md:border-r-2 border-foreground flex items-center justify-center p-8">
              <motion.div
                className="absolute h-44 w-44 rounded-full border border-foreground/25"
                animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute h-28 w-28 rounded-full border-2 border-foreground"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="relative z-10 flex h-16 w-16 items-center justify-center bg-foreground text-background"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="h-7 w-7" />
              </motion.div>
            </div>

            <div className="p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-center">
              <span className="mb-7 inline-block w-fit border border-foreground px-3 py-1 text-[11px] uppercase tracking-[0.2em]">
                Sin convocatorias abiertas
              </span>

              <h2
                className="text-3xl md:text-5xl mb-5 leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Estamos preparando nuevas llamadas editoriales.
              </h2>

              <div className="space-y-5 text-base md:text-lg leading-7 md:leading-relaxed text-muted-foreground">
                <p>
                  La convocatoria externa 2026 ya finalizó. Gracias a quienes
                  compartieron sus obras y confiaron en este proceso colectivo. Anunciaremos los resultados
                  entre el 30 de junio y el 15 de julio.
                </p>
                <p>
                  Cuando abramos una nueva convocatoria, publicaremos aquí las bases,
                  fechas y formas de postulación.
                </p>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Para consultas generales, podés escribirnos.
                </p>
                <a
                  href="mailto:ruidovisual25@gmail.com"
                  className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-3 bg-foreground px-6 py-3.5 text-background hover:bg-foreground/90 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  ruidovisual25@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
