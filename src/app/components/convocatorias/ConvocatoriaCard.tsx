import { Download, Send } from "lucide-react";
import type { Convocatoria } from "../../data/convocatorias";

interface ConvocatoriaCardProps {
  convocatoria: Convocatoria;
  onPostular: () => void;
}

export function ConvocatoriaCard({ convocatoria, onPostular }: ConvocatoriaCardProps) {
  const isAbierta = convocatoria.status === "abierta";

  return (
    <section className="border-2 border-foreground bg-background">
      <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-muted">
          <img
            src={convocatoria.coverImage}
            alt={convocatoria.coverAlt}
            className="h-full min-h-[360px] w-full object-cover"
          />
        </div>

        <div className="p-7 md:p-10 lg:p-14 flex flex-col justify-center">
          <div className="mb-8">
            <span className="inline-block border border-foreground px-3 py-1 text-xs uppercase tracking-[0.2em]">
              {isAbierta ? "Abierta" : "Cerrada"}
            </span>
          </div>

          <h2
            className="text-3xl md:text-5xl mb-4 leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {convocatoria.title}
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            {convocatoria.summary}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {isAbierta && (
              <button
                type="button"
                onClick={onPostular}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                <Send className="w-4 h-4" />
                Postular
              </button>
            )}

            {convocatoria.basesUrl && (
              <a
                href={convocatoria.basesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 border-2 border-foreground hover:bg-secondary/50 transition-colors"
              >
                <Download className="w-4 h-4" />
                Descargar bases y condiciones (PDF)
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
