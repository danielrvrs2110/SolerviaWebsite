import { LinkButton } from "@/components/ui/link-button";

export function FinalCta() {
  return <section className="final-cta"><div className="container final-cta-grid"><p className="eyebrow eyebrow-light">Siguiente paso</p><div><h2>Cuéntanos qué proceso quieres dejar de resolver a mano.</h2><p>No necesitas tener una solución definida. Empezamos por entender cómo funciona hoy y qué tendría que mejorar.</p><LinkButton href="/quote" variant="accent">Solicitar cotización</LinkButton></div></div></section>;
}
