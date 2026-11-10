import { LinkButton } from "@/components/ui/link-button";

export function FinalCta() {
  return <section className="final-cta"><div className="container final-cta-grid"><p className="eyebrow eyebrow-light">Siguiente paso</p><div><h2>Identifica qué proceso quieres dejar de resolver a mano.</h2><p>Usa nuestra guía de consulta para ordenar el contexto. El envío de solicitudes estará disponible cuando exista un canal público de contacto.</p><LinkButton href="/quote" variant="accent">Preparar consulta</LinkButton></div></div></section>;
}
