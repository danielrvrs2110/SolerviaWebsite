import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "@/components/ui/icons";
import { getProduct, products } from "@/content/products";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProduct((await params).slug);
  return product ? { title: product.name, description: product.description } : { title: "Producto no encontrado" };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  return <>
    <section className="product-hero"><div className="container product-hero-grid"><div><p className="eyebrow">{product.category}</p><h1>{product.name}</h1><p className="lead">{product.tagline}</p></div><div className="product-hero-aside"><span className="product-status">{product.status}</span><p>{product.description}</p></div></div></section>
    <section className="section"><div className="container product-detail-grid"><article><p className="overline">El problema</p><h2>{product.problem}</h2></article><article><p className="overline">Para quién</p><h2>{product.audience}</h2></article></div></section>
    <section className="section section-surface"><div className="container product-progress"><div><p className="eyebrow">Estado del proyecto</p><h2>Qué existe hoy y qué sigue.</h2><p className="product-availability">{product.availability}</p></div><div className="progress-columns"><div><h3>Implementado</h3><ul>{product.implemented.map((item) => <li key={item}><Check />{item}</li>)}</ul></div><div><h3>En desarrollo o pendiente</h3><ul>{product.inDevelopment.map((item) => <li key={item}><span className="pending-mark" aria-hidden="true" />{item}</li>)}</ul></div></div></div></section>
    <section className="section product-next"><div className="container"><p className="eyebrow">Explora Solervia</p><h2>¿Tu proceso tiene necesidades parecidas?</h2><p>Conoce cómo abordamos proyectos a medida. Nuestro formulario de contacto aún funciona como demostración.</p><Link href="/custom">Ver soluciones a medida <ArrowUpRight /></Link></div></section>
  </>;
}
