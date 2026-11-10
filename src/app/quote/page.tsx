import type { Metadata } from "next";
import { PageIntro } from "@/components/marketing/page-intro";
import { QuoteForm } from "@/features/quote/quote-form";

export const metadata: Metadata = { title: "Preparar una consulta", description: "Organiza la información sobre el proceso que quieres construir o mejorar." };

export default function QuotePage() {
  return <><PageIntro eyebrow="Consulta / demostración" title="Empieza por definir qué necesitas mejorar." description="Ordena los datos de tu proyecto en un formulario de demostración. Aún no existe un canal público para enviarlo a Solervia." /><section className="section quote-section"><div className="container quote-layout"><aside><p className="eyebrow">Antes de empezar</p><h2>Información útil, sin pedirte que diseñes la solución.</h2><p>Estas preguntas ayudan a explicar el proceso actual, quién lo usa y qué tendría que cambiar para que el proyecto valga la pena.</p><div className="quote-note"><strong>Estado del formulario</strong><span>Valida los campos en tu navegador. No transmite ni conserva datos.</span></div></aside><QuoteForm /></div></section></>;
}
