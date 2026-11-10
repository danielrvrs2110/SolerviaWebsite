import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/icons";
import type { Product } from "@/content/products";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  return <article className="product-card"><div className="product-card-index">0{index} / {product.category}</div><div className="product-card-main"><div className="product-card-top"><h3>{product.name}</h3><span className="product-status">{product.status}</span></div><p>{product.tagline}</p><Link href={`/products/${product.slug}`} aria-label={`Conocer ${product.name} y su estado actual`}>Conocer el proyecto <ArrowUpRight /></Link></div></article>;
}
