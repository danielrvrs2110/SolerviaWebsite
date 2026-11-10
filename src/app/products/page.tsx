import type { Metadata } from "next";
import { PageIntro } from "@/components/marketing/page-intro";
import { ProductCard } from "@/components/marketing/product-card";
import { products } from "@/content/products";

export const metadata: Metadata = { title: "Products", description: "Conoce PedidoFlow y Solervia Sales Agent, y el estado actual de cada proyecto." };

export default function ProductsPage() {
  return <>
    <PageIntro eyebrow="Products" title="Productos propios, con su estado a la vista." description="Estamos desarrollando herramientas para dos procesos concretos: la operación de pedidos B2B y el trabajo comercial. Aquí distinguimos lo que ya funciona de lo que sigue en desarrollo." />
    <section className="section" aria-labelledby="catalog-heading"><div className="container"><div className="catalog-heading"><p className="eyebrow">Proyectos actuales</p><h2 id="catalog-heading">Conoce el problema, el avance y sus límites.</h2></div><div className="product-list">{products.map((product, index) => <ProductCard key={product.slug} product={product} index={index + 1} />)}</div></div></section>
  </>;
}
