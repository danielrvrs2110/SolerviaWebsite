export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  audience: string;
  features: string[];
  availability: "development-placeholder" | "available" | "coming-soon";
  pricing?: string;
  cta: string;
};

// Development-only content. Replace this record when Solervia has a product
// approved for public communication. The UI labels it explicitly as a template.
export const products: Product[] = [
  {
    slug: "plantilla-desarrollo",
    name: "Plantilla de producto",
    tagline: "Estructura preparada para el primer producto de Solervia.",
    description:
      "Esta página demuestra cómo se presentará un producto sin atribuirle capacidades, precio o disponibilidad que todavía no existen.",
    problem:
      "Aquí se explicará el problema operativo específico que el producto resuelve.",
    audience:
      "Aquí se describirá con precisión para qué tipo de empresa y equipo está pensado.",
    features: [
      "Funcionalidad principal por definir",
      "Flujo de trabajo por definir",
      "Integraciones por definir",
    ],
    availability: "development-placeholder",
    cta: "Hablar sobre una necesidad",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
