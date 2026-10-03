import type { Metadata } from "next";
import { PageIntro } from "@/components/marketing/page-intro";

export const metadata: Metadata = { title: "Privacidad" };
export default function PrivacyPage() { return <><PageIntro eyebrow="Privacidad" title="Aviso de privacidad pendiente de publicación." description="Este espacio está preparado para incorporar el aviso legal definitivo antes del despliegue público." /><section className="section"><div className="container legal-placeholder"><p>PLACEHOLDER DE DESARROLLO</p><h2>El formulario actual no transmite ni almacena información.</h2><p>Antes de conectar un backend se definirá el responsable, las finalidades, los medios de contacto y el tratamiento aplicable.</p></div></section></>; }
