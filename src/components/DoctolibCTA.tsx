import Link from "next/link";
import { clsx } from "clsx";
import { SITE } from "@/lib/site";

type Variant = "primary" | "outline" | "soft" | "banner";
type Size = "sm" | "md" | "lg";

interface DoctolibCTAProps {
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  ariaLabel?: string;
  href?: string;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dark shadow-sm hover:shadow",
  outline:
    "border border-accent text-accent hover:bg-accent hover:text-white",
  soft:
    "bg-watercolor-soft text-ink hover:bg-watercolor",
  banner:
    "bg-accent text-white hover:bg-accent-dark shadow-md hover:shadow-lg",
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-8 py-4 text-base",
};

export function DoctolibCTA({
  children = "Prendre rendez-vous",
  variant = "primary",
  size = "md",
  className,
  ariaLabel,
  href = SITE.doctolib,
}: DoctolibCTAProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? "Prendre rendez-vous avec Sandra Sapio sur Doctolib (ouvre un nouvel onglet)"}
      title="Doctolib"
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className,
      )}
    >
      <span>{children}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </Link>
  );
}
