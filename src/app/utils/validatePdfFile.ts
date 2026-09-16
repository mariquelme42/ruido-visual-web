export function validatePdfFile(file: File | null | undefined, maxSizeBytes: number): string {
  if (!file) {
    return "Adjuntá tu texto en formato PDF.";
  }

  const isPdf = file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");

  if (!isPdf) {
    return "El archivo debe estar en formato PDF.";
  }

  if (file.size > maxSizeBytes) {
    return `El archivo no debe superar los ${Math.round(maxSizeBytes / (1024 * 1024))} MB.`;
  }

  return "";
}
