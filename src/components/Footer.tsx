import Link from "next/link";
import { SITE } from "@/lib/site";
import { Logo } from "./Logo";
import { DoctolibCTA } from "./DoctolibCTA";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-3 lg:px-10 lg:py-20">
        <div className="space-y-5">
          <Logo variant="footer" />
          <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
            Consultations en français et en espagnol, au cabinet de Mauguio
            (Montpellier) et en téléconsultation dans le monde francophone et
            hispanophone.
          </p>
          <p className="text-xs uppercase tracking-[0.22em] text-ink-muted">
            Conventionnée Santé Psy Étudiant
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs uppercase tracking-[0.28em] text-ink-muted">
            Cabinet
          </h3>
          <address className="not-italic text-sm leading-relaxed text-ink-soft">
            <span className="block font-medium text-ink">
              {SITE.address.placeName}
            </span>
            <span className="block">{SITE.address.sector}</span>
            <span className="mt-2 block">{SITE.address.street}</span>
            <span className="block">
              {SITE.address.postalCode} {SITE.address.locality}
            </span>
            <span className="mt-2 block text-xs italic text-ink-muted">
              Parking réservé à la clientèle
            </span>
          </address>
        </div>

        <div className="space-y-5">
          <h3 className="text-xs uppercase tracking-[0.28em] text-ink-muted">
            Prendre rendez-vous
          </h3>
          <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
            Prise de rendez-vous et messagerie sécurisée, exclusivement via
            Doctolib.
          </p>
          <DoctolibCTA size="md">Doctolib</DoctolibCTA>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-ink-muted lg:flex-row lg:px-10">
          <p>
            &copy; {new Date().getFullYear()} {SITE.fullName}. Tous droits
            réservés.
          </p>
          <nav aria-label="Liens secondaires" className="flex gap-6">
            <Link
              href="/mentions-legales/"
              className="transition-colors hover:text-ink"
            >
              Mentions légales
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
