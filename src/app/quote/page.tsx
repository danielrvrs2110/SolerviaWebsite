import type { Metadata } from "next";
import { PageIntro } from "@/components/marketing/page-intro";
import { QuoteForm } from "@/features/quote/quote-form";

export const metadata: Metadata = { title: "Cotizar un proyecto", description: "Cuéntanos qué proceso quieres construir o mejorar con software." };

export default function QuotePage() {
  return <><PageIntro eyebrow="Contacto / Cotización" title="Empecemos por entender qué necesitas mejorar." description="Cuéntanos cómo trabaja tu empresa hoy. No necesitas definir la tecnología ni tener un presupuesto cerrado para iniciar la conversación." /><section className="section quote-section"><div className="container quote-layout"><aside><p className="eyebrow">Antes de enviar</p><h2>Información útil, sin pedirte que diseñes la solución.</h2><p>Queremos entender el proceso actual, quién lo usa y qué tendría que cambiar para que el proyecto valga la pena.</p><div className="quote-note"><strong>Hoy</strong><span>Este formulario valida la experiencia del frontend. No realiza un envío real.</span></div></aside><QuoteForm /></div></section></>;
}
