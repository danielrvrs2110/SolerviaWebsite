"use client";

import { FormEvent, useState } from "react";
import { submitQuote, type QuotePayload } from "@/features/quote/quote-service";

type FormStatus = "idle" | "loading" | "success" | "error";
type FieldErrors = Partial<Record<keyof QuotePayload, string>>;
const initialValues: QuotePayload = { name: "", company: "", email: "", phone: "", business: "", goal: "", currentProcess: "", projectType: "", preferredContact: "" };

function validate(values: QuotePayload): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) errors.name = "Escribe tu nombre.";
  if (!values.company.trim()) errors.company = "Escribe el nombre de tu empresa.";
  if (!values.email.trim()) errors.email = "Escribe tu correo.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Escribe un correo válido.";
  if (!values.business.trim()) errors.business = "Cuéntanos a qué se dedica tu empresa.";
  if (!values.goal.trim()) errors.goal = "Describe qué quieres construir o mejorar.";
  if (!values.currentProcess.trim()) errors.currentProcess = "Explica brevemente cómo lo hacen hoy.";
  if (!values.projectType) errors.projectType = "Selecciona un tipo de proyecto.";
  if (!values.preferredContact) errors.preferredContact = "Selecciona un medio de contacto.";
  return errors;
}

export function QuoteForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  function updateField(name: keyof QuotePayload, value: string) { setValues((current) => ({ ...current, [name]: value })); setErrors((current) => ({ ...current, [name]: undefined })); }
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const nextErrors = validate(values); setErrors(nextErrors); if (Object.keys(nextErrors).length > 0) return; setStatus("loading");
    try { const simulateError = new URLSearchParams(window.location.search).get("simulate") === "error"; await submitQuote(values, { simulateError }); setStatus("success"); setValues(initialValues); } catch { setStatus("error"); }
  }
  const field = (name: keyof QuotePayload) => ({ value: values[name], onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => updateField(name, event.target.value), "aria-invalid": Boolean(errors[name]), "aria-describedby": errors[name] ? `${name}-error` : undefined });
  return <form className="quote-form" noValidate onSubmit={handleSubmit}>
    <div className="form-grid"><FormField label="Nombre" name="name" error={errors.name} required><input id="name" type="text" autoComplete="name" {...field("name")} /></FormField><FormField label="Empresa" name="company" error={errors.company} required><input id="company" type="text" autoComplete="organization" {...field("company")} /></FormField><FormField label="Email" name="email" error={errors.email} required><input id="email" type="email" autoComplete="email" {...field("email")} /></FormField><FormField label="Teléfono / WhatsApp" name="phone" error={errors.phone}><input id="phone" type="tel" autoComplete="tel" {...field("phone")} /></FormField></div>
    <FormField label="¿A qué se dedica tu empresa?" name="business" error={errors.business} required><textarea id="business" rows={3} {...field("business")} /></FormField><FormField label="¿Qué quieres construir o mejorar?" name="goal" error={errors.goal} required><textarea id="goal" rows={4} {...field("goal")} /></FormField><FormField label="¿Cómo realizas actualmente ese proceso?" name="currentProcess" error={errors.currentProcess} required><textarea id="currentProcess" rows={4} {...field("currentProcess")} /></FormField>
    <div className="form-grid"><FormField label="Tipo de proyecto" name="projectType" error={errors.projectType} required><select id="projectType" {...field("projectType")}><option value="">Selecciona una opción</option><option>Aplicación web</option><option>Sistema interno</option><option>Website</option><option>Automatización</option><option>Integración</option><option>No estoy seguro</option></select></FormField><FormField label="Medio preferido de contacto" name="preferredContact" error={errors.preferredContact} required><select id="preferredContact" {...field("preferredContact")}><option value="">Selecciona una opción</option><option>Email</option><option>Teléfono</option><option>WhatsApp</option></select></FormField></div>
    <div className="form-submit"><button type="submit" disabled={status === "loading"}>{status === "loading" ? "Preparando solicitud…" : "Enviar solicitud"}</button><p>Demostración de frontend: tus datos no se envían ni se guardan todavía.</p></div><div className="form-feedback" aria-live="polite">{status === "success" ? <p className="success-message">La validación funcionó. En la siguiente fase conectaremos el envío real.</p> : null}{status === "error" ? <p className="error-message">No pudimos completar la simulación. Intenta de nuevo.</p> : null}</div>
  </form>;
}

function FormField({ label, name, error, required, children }: { label: string; name: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return <div className="form-field"><label htmlFor={name}>{label}{required ? <span aria-hidden="true"> *</span> : null}</label>{children}{error ? <p className="field-error" id={`${name}-error`}>{error}</p> : null}</div>;
}
