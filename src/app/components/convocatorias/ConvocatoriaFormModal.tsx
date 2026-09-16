import { useEffect } from "react";
import type { MouseEvent, ReactNode } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";

interface ConvocatoriaFormModalProps {
  title: string;
  eyebrow?: string;
  onClose: () => void;
  children: ReactNode;
}

export function ConvocatoriaFormModal({
  title,
  eyebrow = "Formulario de postulación",
  onClose,
  children,
}: ConvocatoriaFormModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed inset-0 z-50 bg-foreground/70 px-4 py-6 md:py-10 flex items-center justify-center"
      onMouseDown={handleBackdropClick}
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="convocatoria-form-title"
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-background border-2 border-foreground shadow-xl"
      >
        <div className="sticky top-0 z-10 bg-background border-b border-border px-6 md:px-8 py-5 flex items-start justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground mb-2">
              {eyebrow}
            </p>
            <h2
              id="convocatoria-form-title"
              className="text-2xl md:text-3xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar formulario"
            className="p-2 hover:bg-secondary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {children}
      </motion.div>
    </motion.div>
  );
}
