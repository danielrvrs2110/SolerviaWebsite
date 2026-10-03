import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { products } from "@/content/products";
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", "/products", "/custom", "/about", "/quote", "/privacy"]; return [...routes.map((route) => ({ url: `${siteConfig.url}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.8 })), ...products.map(({ slug }) => ({ url: `${siteConfig.url}/products/${slug}`, changeFrequency: "monthly" as const, priority: 0.5 }))]; }
