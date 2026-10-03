import type { Metadata } from "next";
import { FinalCta } from "@/components/marketing/final-cta";
import { PageIntro } from "@/components/marketing/page-intro";

export const metadata: Metadata = { title: "Nosotros", description: "El propósito y la forma de trabajar de Solervia." };

export default function AboutPage() {
  return <><PageIntro eyebrow="Nosotros" title="Solervia empieza con una idea sencilla: el software debe ayudar a trabajar mejor." description="Somos una empresa de software enfocada en PyMEs. Estamos construyendo productos propios y soluciones a medida con una prioridad: que sean útiles en la operación diaria." /><section className="section about-manifesto"><div className="container manifesto-grid"><p className="manifesto-number">01</p><div><p className="eyebrow">Propósito</p><h2>Hacer que la tecnología sea una herramienta práctica, no otra complicación.</h2><p>Buscamos reemplazar pasos innecesarios, ordenar información dispersa y dar visibilidad donde hoy hay seguimiento manual.</p></div></div></section><section className="section section-dark"><div className="container principles-grid"><p className="eyebrow eyebrow-light">Cómo trabajamos</p><div>{["Entender antes de construir", "Empezar por una versión útil", "Explicar sin lenguaje innecesario", "No prometer lo que todavía no existe"].map((principle) => <h3 key={principle}>{principle}</h3>)}</div></div></section><section className="section"><div className="container two-lines"><article><span>Products</span><h2>Soluciones que pueden servir a varias empresas con necesidades parecidas.</h2></article><article><span>Custom</span><h2>Software creado para una empresa cuando el proceso necesita algo propio.</h2></article></div></section><FinalCta /></>;
}
