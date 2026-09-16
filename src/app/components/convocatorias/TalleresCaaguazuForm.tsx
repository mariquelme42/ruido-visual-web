import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Send } from "lucide-react";
import { ConvocatoriaFormModal } from "./ConvocatoriaFormModal";
import { FormField } from "./FormField";
import { validatePdfFile } from "../../utils/validatePdfFile";
import { useNetlifyFormSubmit } from "../../hooks/useNetlifyFormSubmit";

const FORM_NAME = "taller-ruidoso-caaguazu-2026";
const MAX_FILE_SIZE = 8 * 1024 * 1024;

interface TalleresCaaguazuFormProps {
  onClose: () => void;
}

export function TalleresCaaguazuForm({ onClose }: TalleresCaaguazuFormProps) {
  const [fileError, setFileError] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const { status, error, submit } = useNetlifyFormSubmit();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    setSelectedFileName(file?.name ?? "");
    setFileError(validatePdfFile(file, MAX_FILE_SIZE));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const fileInput = form.elements.namedItem("obra") as HTMLInputElement;
    const error = validatePdfFile(fileInput.files?.[0], MAX_FILE_SIZE);

    setFileError(error);

    if (error) return;

    const ok = await submit(form);
    if (ok) {
      setSelectedFileName("");
    }
  };

  return (
    <ConvocatoriaFormModal title="Talleres Ruidosos Caaguazú" onClose={onClose}>
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
          <FormField label="Nombre completo" htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </FormField>

          <FormField label="Pronombres" htmlFor="pronombres">
            <input
              id="pronombres"
              name="pronombres"
              type="text"
              required
              className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </FormField>

          <FormField label="Edad" htmlFor="edad">
            <input
              id="edad"
              name="edad"
              type="number"
              min={1}
              max={120}
              required
              className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </FormField>

          <FormField label="Ciudad de residencia" htmlFor="ciudad">
            <input
              id="ciudad"
              name="ciudad"
              type="text"
              required
              className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </FormField>

          <FormField label="Número de teléfono" htmlFor="telefono">
            <input
              id="telefono"
              name="telefono"
              type="tel"
              required
              className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </FormField>

          <FormField label="Instagram" htmlFor="instagram">
            <input
              id="instagram"
              name="instagram"
              type="text"
              required
              placeholder="@usuario"
              className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </FormField>
        </div>

        <FormField label="¿Qué intereses y hobbies tenés?" htmlFor="intereses">
          <textarea
            id="intereses"
            name="intereses"
            required
            rows={3}
            className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring resize-y"
          />
        </FormField>

        <FormField
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
        </FormField>

        <FormField label="¿A qué te dedicás? (trabajo y/o estudio)" htmlFor="ocupacion">
          <textarea
            id="ocupacion"
            name="ocupacion"
            required
            rows={3}
            className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring resize-y"
          />
        </FormField>

        <FormField
          label="¿Vas a poder participar de los cuatro talleres poéticos? (Domingos 4, 11, 18 y 25 de octubre, de 9 a 11 h)"
          htmlFor="disponibilidad"
        >
          <input
            id="disponibilidad"
            name="disponibilidad"
            type="text"
            required
            className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </FormField>

        <FormField
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
        </FormField>

        <div className="border border-border p-4">
          <p className="text-xs md:text-[13px] leading-relaxed text-muted-foreground mb-4">
            Al enviar este formulario, acepto que Ruido Visual recopile y utilice mis datos
            personales exclusivamente para gestionar esta convocatoria de talleres, evaluar el
            material presentado, comunicar resultados y coordinar mi participación en los
            talleres. Los datos no serán vendidos ni cedidos a terceros ajenos a la convocatoria.
            Podré solicitar la eliminación o rectificación de mis datos escribiendo a
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
              He leído y acepto el uso de mis datos personales para los fines de esta
              convocatoria.
            </span>
          </label>
        </div>

        <p className="text-sm text-muted-foreground">
          Antes de enviar tu postulación, revisá que el archivo esté en formato PDF y que los
          datos de contacto sean correctos.
        </p>

        {status === "loading" && (
          <p className="text-sm" role="status">
            Enviando postulación...
          </p>
        )}

        {status === "success" && (
          <p className="text-sm text-primary" role="status">
            Postulación enviada correctamente. ¡Gracias por postularte a los Talleres Ruidosos
            Caaguazú!
          </p>
        )}

        {status === "error" && (
          <p className="text-sm text-primary" role="alert">
            {error}
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
            disabled={status === "loading"}
            className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background hover:bg-foreground/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" />
            {status === "loading" ? "Enviando postulación..." : "Enviar postulación"}
          </button>
        </div>
      </form>
    </ConvocatoriaFormModal>
  );
}
