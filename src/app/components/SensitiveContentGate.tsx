import { useEffect, useRef, useState, type ReactNode } from "react";
import { useNavigate } from "react-router";

const STORAGE_KEY = "rv_sensitive_age_ok";
const VALIDITY_MS = 30 * 24 * 60 * 60 * 1000; // 30 días

function hasValidAgeConfirmation() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const { confirmedAt } = JSON.parse(raw) as { confirmedAt: number };
    return Date.now() - confirmedAt < VALIDITY_MS;
  } catch {
    return false;
  }
}

function useProtectiveMetaTags(active: boolean) {
  useEffect(() => {
    if (!active) return;

    const created: HTMLMetaElement[] = [];
    const setMeta = (attr: "name" | "property" | "http-equiv", key: string, content: string) => {
      const el = document.createElement("meta");
      el.setAttribute(attr, key);
      el.setAttribute("content", content);
      document.head.appendChild(el);
      created.push(el);
    };

    setMeta("name", "robots", "noimageindex");
    setMeta("name", "googlebot", "noimageindex");
    setMeta("name", "rating", "restricted");
    setMeta("property", "og:title", "Contenido sensible — verificación requerida");
    setMeta(
      "property",
      "og:description",
      "Este material requiere verificación de edad y contiene advertencia de contenido sensible."
    );
    setMeta("http-equiv", "Cache-Control", "no-store, no-cache, must-revalidate");

    return () => {
      created.forEach((el) => el.remove());
    };
  }, [active]);
}

function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
}

interface GateProps {
  title: string;
  children: ReactNode;
}

export function SensitiveContentGate({ title, children }: GateProps) {
  const navigate = useNavigate();
  const [stage, setStage] = useState<"age" | "unlocked">(() =>
    hasValidAgeConfirmation() ? "unlocked" : "age"
  );
  const [readingMode, setReadingMode] = useState(false);
  const acceptButtonRef = useRef<HTMLButtonElement>(null);

  useProtectiveMetaTags(stage !== "unlocked");
  useLockBodyScroll(stage !== "unlocked");

  useEffect(() => {
    acceptButtonRef.current?.focus();
  }, [stage]);

  const goBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/biblioteca");
    }
  };

  const acceptAge = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ confirmedAt: Date.now() }));
    } catch {
      // localStorage no disponible: igual dejamos avanzar en esta sesión
    }
    setStage("unlocked");
  };

  if (stage === "age") {
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="age-gate-title"
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm px-4 py-8"
      >
        <div className="w-full max-w-md border-2 border-border bg-card p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Verificación de edad requerida
            </p>
            <h2
              id="age-gate-title"
              className="text-2xl md:text-3xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {title}
            </h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Este fotolibro contiene fotografías de desnudez parcial. Las imágenes forman parte de
            un registro documental y artístico de la memoria de mujeres trans durante la
            dictadura paraguaya.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Para continuar, confirmá que sos mayor de 18 años.
          </p>
          <div className="flex flex-col gap-3">
            <button
              ref={acceptButtonRef}
              onClick={acceptAge}
              className="w-full px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Confirmar que soy mayor de 18
            </button>
            <button
              onClick={goBack}
              className="w-full px-6 py-3 border-2 border-border hover:bg-secondary/50 transition-colors"
            >
              No acepto
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setReadingMode((v) => !v)}
          className="px-4 py-2 text-xs uppercase tracking-wider border-2 border-border bg-card hover:bg-secondary/50 transition-colors"
        >
          {readingMode ? "Desactivar modo lectura" : "Modo lectura"}
        </button>
      </div>
      <div
        style={readingMode ? { filter: "brightness(0.82)" } : undefined}
        className="transition-[filter] duration-300"
      >
        {children}
      </div>
    </div>
  );
}
