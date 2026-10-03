import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/marketing/final-cta";
import { Check } from "@/components/ui/icons";
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
  return <><section className="product-hero"><div className="container product-hero-grid"><div><p className="dev-badge">PLACEHOLDER DE DESARROLLO</p><h1>{product.name}</h1><p className="lead">{product.tagline}</p></div><p className="product-description">{product.description}</p></div></section><section className="section"><div className="container product-detail-grid"><article><p className="overline">Problema</p><h2>{product.problem}</h2></article><article><p className="overline">Para quién</p><h2>{product.audience}</h2></article></div></section><section className="section section-surface"><div className="container features-grid"><div><p className="eyebrow">Funcionalidades</p><h2>Una estructura lista para información real.</h2></div><ul>{product.features.map((feature) => <li key={feature}><Check />{feature}</li>)}</ul></div></section><FinalCta /></>;
}
