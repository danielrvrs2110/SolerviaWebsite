import type { Metadata } from "next";
import { Bricolage_Grotesque, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/config/site";
import "./globals.css";

const displayFont = Bricolage_Grotesque({ variable: "--font-display", subsets: ["latin"] });
const bodyFont = Source_Sans_3({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Solervia | Software para PyMEs", template: "%s | Solervia" },
  description: siteConfig.description,
  openGraph: { title: "Solervia | Software para PyMEs", description: siteConfig.description, type: "website", locale: "es_MX", siteName: "Solervia" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="es" className={`${displayFont.variable} ${bodyFont.variable}`}><body><a className="skip-link" href="#main-content">Saltar al contenido</a><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></body></html>;
}
