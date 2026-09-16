import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Send } from "lucide-react";
import { ConvocatoriaFormModal } from "./ConvocatoriaFormModal";
import { FormField } from "./FormField";
import { validatePdfFile } from "../../utils/validatePdfFile";
import { useNetlifyFormSubmit } from "../../hooks/useNetlifyFormSubmit";
import { DEPARTAMENTOS, LOCALIDADES_POR_DEPARTAMENTO } from "../../data/convocatorias";

const FORM_NAME = "residencia-poetica-ruidosa-2026";
const MAX_FILE_SIZE = 8 * 1024 * 1024;

interface ResidenciaPoeticaFormProps {
  onClose: () => void;
}

export function ResidenciaPoeticaForm({ onClose }: ResidenciaPoeticaFormProps) {
  const [fileError, setFileError] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [edad, setEdad] = useState("");
  const { status, error, submit } = useNetlifyFormSubmit();

  const localidades = departamento ? LOCALIDADES_POR_DEPARTAMENTO[departamento] ?? [] : [];
  const esMenorDeEdad = edad !== "" && Number(edad) < 18;

  const handleDepartamentoChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDepartamento(event.target.value);
    setLocalidad("");
  };

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
      setDepartamento("");
      setLocalidad("");
      setEdad("");
    }
  };

  return (
    <ConvocatoriaFormModal title="Residencia Poética Ruidosa 2026" onClose={onClose}>
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
          value="Nueva postulación - Residencia Poética Ruidosa 2026"
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
              min={15}
              required
              value={edad}
              onChange={(event) => setEdad(event.target.value)}
              className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </FormField>

          <FormField label="Departamento de residencia" htmlFor="departamento">
            <select
              id="departamento"
              name="departamento"
              required
              value={departamento}
              onChange={handleDepartamentoChange}
              className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="" disabled>
                Seleccioná una opción
              </option>
              {DEPARTAMENTOS.map((dep) => (
                <option key={dep} value={dep}>
                  {dep}
                </option>
              ))}
            </select>
          </FormField>

          <FormField label="Ciudad / localidad" htmlFor="localidad">
            <select
              id="localidad"
              name="localidad"
              required
              value={localidad}
              onChange={(event) => setLocalidad(event.target.value)}
              disabled={!departamento}
              className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
            >
              <option value="" disabled>
                {departamento ? "Seleccioná una opción" : "Elegí primero el departamento"}
              </option>
              {localidades.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
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

          <FormField label="Instagram" htmlFor="instagram" required={false}>
            <input
              id="instagram"
              name="instagram"
              type="text"
              placeholder="@usuario"
              className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </FormField>

          <FormField label="Correo electrónico" htmlFor="email" required={false}>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </FormField>
        </div>

        <FormField label="Título de la obra o colección de poemas" htmlFor="tituloObra">
          <input
            id="tituloObra"
            name="tituloObra"
            type="text"
            required
            className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </FormField>

        {esMenorDeEdad && (
          <p className="border border-border p-4 text-sm text-muted-foreground">
            Al ser menor de edad, en caso de ser seleccionadx la editorial va a coordinar una
            reunión con tu madre, padre o tutor legal para autorizar tu participación en la
            residencia.
          </p>
        )}

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
          label="¿Vas a poder participar de los tres días de la residencia? (Viernes 20, Sábado 21 y Domingo 22 de noviembre)"
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

        <label className="flex items-start gap-3 text-xs md:text-[13px] leading-relaxed border border-border p-4">
          <input
            type="checkbox"
            name="aceptacionBases"
            required
            value="Acepto"
            className="mt-1 h-4 w-4 accent-foreground"
          />
          <span>
            He leído y acepto las{" "}
            <a
              href="/pdfs/convocatorias/residencia-poetica-ruidosa-2026-bases-y-condiciones.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              bases y condiciones
            </a>{" "}
            de la Residencia Poética Ruidosa 2026.
          </span>
        </label>

        <div className="border border-border p-4">
          <p className="text-xs md:text-[13px] leading-relaxed text-muted-foreground mb-4">
            Al enviar este formulario, acepto que Ruido Visual recopile y utilice mis datos
            personales exclusivamente para gestionar mi postulación a la Residencia Poética
            Ruidosa 2026, evaluar el material presentado, comunicar resultados y coordinar mi
            participación en caso de ser seleccionadx. Los datos no serán vendidos ni cedidos a
            terceros ajenos a la convocatoria. Podré solicitar la eliminación o rectificación de
            mis datos escribiendo a ruidovisual25@gmail.com.
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
            Postulación enviada correctamente. ¡Gracias por postularte a la Residencia Poética
            Ruidosa 2026!
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
