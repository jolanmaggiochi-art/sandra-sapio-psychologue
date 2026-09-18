import Link from "next/link";
import { SITE } from "@/lib/site";

interface LogoProps {
  className?: string;
  variant?: "header" | "footer";
}

export function Logo({ className = "", variant = "header" }: LogoProps) {
  const isHeader = variant === "header";
  return (
    <Link
      href="/"
      aria-label={`${SITE.fullName} – retour à l'accueil`}
      className={`group inline-flex flex-col leading-none ${className}`}
    >
      <span
        className={`font-display ${
          isHeader ? "text-[1.5rem]" : "text-[1.4rem]"
        } font-medium text-ink transition-colors group-hover:text-accent-dark`}
      >
        Sandra Sapio
      </span>
      <span className="mt-0.5 text-[0.65rem] uppercase tracking-[0.28em] text-ink-soft">
        Psychologue clinicienne
      </span>
    </Link>
  );
}
