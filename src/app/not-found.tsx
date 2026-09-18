import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center lg:px-10">
      <p className="text-xs uppercase tracking-[0.32em] text-ink-muted">404</p>
      <h1 className="mt-6 font-display text-5xl leading-tight text-ink sm:text-6xl">
        Page introuvable
      </h1>
      <p className="mt-6 max-w-md text-base text-ink-soft">
        La page que vous cherchez n&rsquo;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
      >
        Retour à l&rsquo;accueil
      </Link>
    </section>
  );
}
