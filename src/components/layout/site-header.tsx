"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="wordmark" href="/" onClick={() => setOpen(false)}>SOLERVIA<span aria-hidden="true">.</span></Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {siteConfig.navigation.map((item) => <Link className={pathname.startsWith(item.href) ? "active" : undefined} href={item.href} key={item.href}>{item.label}</Link>)}
          <Link className="nav-cta" href="/quote">Cotizar</Link>
        </nav>
        <button className="menu-button" type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((current) => !current)}><Menu className="menu-icon" /></button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Navegación móvil">
        {siteConfig.navigation.map((item) => <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
        <Link href="/quote" onClick={() => setOpen(false)}>Cotizar un proyecto</Link>
      </nav>
    </header>
  );
}
