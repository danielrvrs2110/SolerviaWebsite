import Link from "next/link";

const footerLinks = [
  { href: "/products", label: "Products" }, { href: "/custom", label: "Custom" },
  { href: "/about", label: "Nosotros" }, { href: "/quote", label: "Contacto" },
  { href: "/privacy", label: "Privacidad" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid"><div><Link className="wordmark wordmark-light" href="/">SOLERVIA<span aria-hidden="true">.</span></Link><p>Software útil para operaciones reales.</p></div><nav aria-label="Navegación del pie">{footerLinks.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav></div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Solervia.</span><span>Hecho para PyMEs mexicanas.</span></div>
    </footer>
  );
}
