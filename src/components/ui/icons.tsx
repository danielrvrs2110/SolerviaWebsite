type IconProps = { className?: string };

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function ArrowUpRight({ className }: IconProps) {
  return <svg {...baseProps} className={className}><path d="M7 17 17 7M8 7h9v9" /></svg>;
}

export function Check({ className }: IconProps) {
  return <svg {...baseProps} className={className}><path d="m5 12 4 4L19 6" /></svg>;
}

export function Menu({ className }: IconProps) {
  return <svg {...baseProps} className={className}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}
