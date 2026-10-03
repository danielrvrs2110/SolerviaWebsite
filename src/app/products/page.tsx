import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/marketing/page-intro";
import { ArrowUpRight } from "@/components/ui/icons";
import { products } from "@/content/products";

export const metadata: Metadata = { title: "Products", description: "Productos de software de Solervia para resolver problemas repetibles de PyMEs." };

export default function ProductsPage() {
  return <><PageIntro eyebrow="Products" title="Software listo para resolver problemas concretos." description="Esta línea reunirá productos propios de Solervia que una empresa pueda empezar a usar sin desarrollar un sistema desde cero." /><section className="section"><div className="container products-layout"><div className="catalog-note"><p className="overline">Estado actual</p><h2>Catálogo en preparación</h2><p>Todavía no publicamos productos sin información real. Dejamos lista la estructura para incorporar el primero sin rediseñar el sitio.</p></div><div className="dev-template"><div className="dev-badge">PLACEHOLDER DE DESARROLLO</div><h3>{products[0].name}</h3><p>{products[0].description}</p><Link href={`/products/${products[0].slug}`}>Ver plantilla de producto <ArrowUpRight /></Link></div></div></section></>;
}
