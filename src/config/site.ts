export const siteConfig = {
  name: "Solervia",
  description:
    "Software sencillo y accesible para PyMEs que quieren ordenar procesos, centralizar información y reducir trabajo manual.",
  // Development canonical. Replace with the confirmed domain before deployment.
  url: "http://localhost:3000",
  navigation: [
    { href: "/products", label: "Products" },
    { href: "/custom", label: "Custom" },
    { href: "/about", label: "Nosotros" },
  ],
} as const;
