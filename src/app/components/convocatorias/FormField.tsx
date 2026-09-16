import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}

export function FormField({ label, htmlFor, required = true, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block mb-2">
        {label}
        {required ? " *" : ""}
      </label>
      {children}
    </div>
  );
}
