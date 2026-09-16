import { useState } from "react";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function useNetlifyFormSubmit() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState("");

  const reset = () => {
    setStatus("idle");
    setError("");
  };

  const submit = async (form: HTMLFormElement) => {
    setStatus("loading");
    setError("");

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
      setStatus("success");
      return true;
    } catch {
      setStatus("error");
      setError("No pudimos enviar la postulación. Revisá tu conexión e intentá nuevamente.");
      return false;
    }
  };

  return { status, error, submit, reset };
}
