import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { Mail } from "lucide-react";
import { setPageSeo } from "../utils/seo";
import { convocatorias } from "../data/convocatorias";
import { ConvocatoriaCard } from "./convocatorias/ConvocatoriaCard";
import { ResidenciaPoeticaForm } from "./convocatorias/ResidenciaPoeticaForm";
import { TalleresCaaguazuForm } from "./convocatorias/TalleresCaaguazuForm";

export function Calls() {
  const [openConvocatoriaId, setOpenConvocatoriaId] = useState<string | null>(null);

  useEffect(() => {
    setPageSeo({
      title: "Residencia Poética Ruidosa 2026 | Ruido Visual",
      description:
        "Convocatorias de Ruido Visual: postulá a la Residencia Poética Ruidosa 2026 y a los Talleres Ruidosos Caaguazú.",
      path: "/convocatorias",
      favicon: "/favicon.png",
      siteName: "Ruido Visual",
    });
  }, []);

  const closeModal = () => setOpenConvocatoriaId(null);

  return (
    <div className="px-6 md:px-12 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-4">
            Convocatorias
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-7xl tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Convocatorias de Ruido Visual
          </h1>
        </header>

        <div className="space-y-10">
          {convocatorias.map((convocatoria) => (
            <ConvocatoriaCard
              key={convocatoria.id}
              convocatoria={convocatoria}
              onPostular={() => setOpenConvocatoriaId(convocatoria.id)}
            />
          ))}
        </div>

        <div className="mt-12 text-center py-8 border-t border-border">
          <p className="text-muted-foreground mb-2">¿Tenés dudas sobre las convocatorias?</p>
          <a
            href="mailto:ruidovisual25@gmail.com"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <Mail className="w-4 h-4" />
            ruidovisual25@gmail.com
          </a>
        </div>
      </div>

      <AnimatePresence>
        {openConvocatoriaId === "residencia-poetica-ruidosa-2026" && (
          <ResidenciaPoeticaForm key="residencia" onClose={closeModal} />
        )}

        {openConvocatoriaId === "talleres-ruidosos-caaguazu" && (
          <TalleresCaaguazuForm key="talleres" onClose={closeModal} />
        )}
      </AnimatePresence>
    </div>
  );
}
