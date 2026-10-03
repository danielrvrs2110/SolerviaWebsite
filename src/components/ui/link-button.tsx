import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/icons";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
};

export function LinkButton({ href, children, variant = "primary", className = "" }: LinkButtonProps) {
  return <Link className={`button button-${variant} ${className}`} href={href}><span>{children}</span><ArrowUpRight className="button-icon" /></Link>;
}
