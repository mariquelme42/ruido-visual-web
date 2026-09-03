import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent, MouseEvent, ReactNode } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { setPageSeo } from "../utils/seo";

const FORM_NAME = "taller-ruidoso-caaguazu-2026";
const MAX_FILE_SIZE = 8 * 1024 * 1024;
const COVER_IMAGE = "/images/convocatorias/convocatoria-1.jpg";

export function Calls() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileError, setFileError] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [submitError, setSubmitError] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPageSeo({
      title: "Talleres Ruidosos Caaguazú | Ruido Visual",
      description:
        "Postulá a los Talleres Ruidosos Caaguazú: talleres poéticos gratuitos para jóvenes escritoras y escritores.",
      path: "/convocatorias",
      favicon: "/favicon.png",
      siteName: "Ruido Visual",
    });
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const openModal = () => {
    setFileError("");
    setSelectedFileName("");
    setSubmitError("");
    setSubmitStatus("idle");
    setIsModalOpen(true);
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const validateFile = (file?: File | null) => {
    if (!file) {
      return "Adjuntá tu texto en formato PDF.";
    }

    const isPdf =
      file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");

    if (!isPdf) {
      return "El archivo debe estar en formato PDF.";
    }

    if (file.size > MAX_FILE_SIZE) {
      return "El archivo no debe superar los 8 MB.";
    }

    return "";
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    setSelectedFileName(file?.name ?? "");
    setFileError(validateFile(file));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const fileInput = form.elements.namedItem("obra") as HTMLInputElement;
    const error = validateFile(fileInput.files?.[0]);

    setFileError(error);
    setSubmitError("");

    if (error) return;

    setSubmitStatus("loading");

    try {
      const formData = new FormData(form);

      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario.");
      }

      form.reset();
      setSelectedFileName("");
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
      setSubmitError(
        "No pudimos enviar la postulación. Revisá tu conexión e intentá nuevamente."
      );
    }
  };

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
            Talleres Ruidosos Caaguazú
          </h1>
        </header>

        <section className="border-2 border-foreground bg-background">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-muted">
              <img
                src={COVER_IMAGE}
                alt="Afiche de Talleres Ruidosos Caaguazú"
                className="h-full min-h-[360px] w-full object-cover"
              />
            </div>

            <div className="p-7 md:p-10 lg:p-14 flex flex-col justify-center">
              <div className="mb-8">
                <span className="inline-block border border-foreground px-3 py-1 text-xs uppercase tracking-[0.2em]">
                  Abierta
                </span>
              </div>

              <h2
                className="text-3xl md:text-5xl mb-4 leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Postulación a talleres poéticos en octubre
              </h2>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Postular
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 text-center py-8 border-t border-border">
          <p className="text-muted-foreground mb-2">
            ¿Tenés dudas sobre los talleres?
          </p>
          <a
            href="https://wa.me/595971535556"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <MessageCircle className="w-4 h-4" />
            0971 535556
          </a>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-foreground/70 px-4 py-6 md:py-10 flex items-center justify-center"
          onMouseDown={handleBackdropClick}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="convocatoria-form-title"
            className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-background border-2 border-foreground shadow-xl"
          >
            <div className="sticky top-0 z-10 bg-background border-b border-border px-6 md:px-8 py-5 flex items-start justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground mb-2">
                  Formulario de postulación
                </p>
                <h2
                  id="convocatoria-form-title"
                  className="text-2xl md:text-3xl"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Talleres Ruidosos Caaguazú
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                aria-label="Cerrar formulario"
                className="p-2 hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              name={FORM_NAME}
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              className="px-6 md:px-8 py-8 space-y-6"
            >
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <input
                type="hidden"
                name="subject"
                value="Nueva postulación - Talleres Ruidosos Caaguazú"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Nombre completo" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </Field>

                <Field label="Pronombres" htmlFor="pronombres">
                  <input
                    id="pronombres"
                    name="pronombres"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </Field>

                <Field label="Edad" htmlFor="edad">
                  <input
                    id="edad"
                    name="edad"
                    type="number"
                    min={1}
                    max={120}
                    required
                    className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </Field>

                <Field label="Ciudad de residencia" htmlFor="ciudad">
                  <input
                    id="ciudad"
                    name="ciudad"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </Field>

                <Field label="Número de teléfono" htmlFor="telefono">
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </Field>

                <Field label="Instagram" htmlFor="instagram">
                  <input
                    id="instagram"
                    name="instagram"
                    type="text"
                    required
                    placeholder="@usuario"
                    className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </Field>
              </div>

              <Field label="¿Qué intereses y hobbies tenés?" htmlFor="intereses">
                <textarea
                  id="intereses"
                  name="intereses"
                  required
                  rows={3}
                  className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                />
              </Field>

              <Field
                label="¿Cuáles son tus influencias artísticas? (libros, música, cine, etc.)"
                htmlFor="influencias"
              >
                <textarea
                  id="influencias"
                  name="influencias"
                  required
                  rows={3}
                  className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                />
              </Field>

              <Field label="¿A qué te dedicás? (trabajo y/o estudio)" htmlFor="ocupacion">
                <textarea
                  id="ocupacion"
                  name="ocupacion"
                  required
                  rows={3}
                  className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                />
              </Field>

              <Field
                label="¿Vas a poder participar de los cuatro talleres poéticos? (Domingos 4, 11, 18 y 25 de octubre, de 9 a 11 h)"
                htmlFor="disponibilidad"
              >
                <select
                  id="disponibilidad"
                  name="disponibilidad"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="" disabled>
                    Seleccioná una opción
                  </option>
                  <option value="Sí">Sí</option>
                  <option value="No">No</option>
                </select>
              </Field>

              <Field
                label="¡Queremos leerte! Pasanos un PDF con algo que hayas escrito (poemas, cuentos, ensayos, o cualquier texto propio), de 1 a 3 páginas"
                htmlFor="obra"
              >
                <input
                  id="obra"
                  name="obra"
                  type="file"
                  accept="application/pdf,.pdf"
                  required
                  onChange={handleFileChange}
                  aria-describedby="obra-help obra-error"
                  className="sr-only"
                />
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <label
                    htmlFor="obra"
                    className="inline-flex w-full sm:w-auto cursor-pointer items-center justify-center px-5 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors"
                  >
                    Seleccionar archivo
                  </label>
                  <span className="min-w-0 max-w-full text-sm text-muted-foreground truncate">
                    {selectedFileName || "Ningún archivo seleccionado"}
                  </span>
                </div>
                <p id="obra-help" className="mt-2 text-sm text-muted-foreground">
                  Solo se aceptan archivos PDF de 1 a 3 páginas, hasta 8 MB.
                </p>
                {fileError && (
                  <p id="obra-error" className="mt-2 text-sm text-primary">
                    {fileError}
                  </p>
                )}
              </Field>

              <div className="border border-border p-4">
                <p className="text-xs md:text-[13px] leading-relaxed text-muted-foreground mb-4">
                  Al enviar este formulario, acepto que Ruido Visual recopile y
                  utilice mis datos personales exclusivamente para gestionar esta
                  convocatoria de talleres, evaluar el material presentado, comunicar
                  resultados y coordinar mi participación en los talleres. Los datos no
                  serán vendidos ni cedidos a terceros ajenos a la convocatoria. Podré
                  solicitar la eliminación o rectificación de mis datos escribiendo a
                  ruidovisual25@gmail.com.
                </p>

                <label className="flex items-start gap-3 text-xs md:text-[13px] leading-relaxed">
                  <input
                    type="checkbox"
                    name="aceptacionDatos"
                    required
                    value="Acepto"
                    className="mt-1 h-4 w-4 accent-foreground"
                  />
                  <span>
                    He leído y acepto el uso de mis datos personales para los fines de
                    esta convocatoria.
                  </span>
                </label>
              </div>

              <p className="text-sm text-muted-foreground">
                Antes de enviar tu postulación, revisá que el archivo esté en formato
                PDF y que los datos de contacto sean correctos.
              </p>

              {submitStatus === "loading" && (
                <p className="text-sm" role="status">
                  Enviando postulación...
                </p>
              )}

              {submitStatus === "success" && (
                <p className="text-sm text-primary" role="status">
                  Postulación enviada correctamente. ¡Gracias por postularte a los
                  Talleres Ruidosos Caaguazú!
                </p>
              )}

              {submitStatus === "error" && (
                <p className="text-sm text-primary" role="alert">
                  {submitError}
                </p>
              )}

              <p className="hidden">
                <label>
                  No completar este campo: <input name="bot-field" />
                </label>
              </p>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitStatus === "loading"}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background hover:bg-foreground/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {submitStatus === "loading"
                    ? "Enviando postulación..."
                    : "Enviar postulación"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block mb-2">
        {label} *
      </label>
      {children}
    </div>
  );
}
