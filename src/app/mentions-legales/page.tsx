import Link from "next/link";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "Mentions légales",
  description:
    "Mentions légales du site sandra-sapio-psychologue.com : éditeur, hébergeur, SIREN/SIRET, RPPS, travaux et publications de Sandra Sapio, psychologue clinicienne.",
  path: "/mentions-legales/",
});

const PUBLICATIONS = [
  {
    year: "2023",
    title:
      "Sandra Sapio : psychologue clinicienne au service du bien-être psychique",
    publisher: "Marie Claire",
    type: "Article",
    href: "https://www.marieclaire.fr/adresses-incontournables/sandra-sapio/",
  },
  {
    year: "2012",
    title: "Maltraitance (dossier en co-rédaction)",
    publisher:
      "Revue de gériatrie n°5 vol. 37, dir. publication Robert Moulias",
    type: "Article",
    href: "https://aphp.aphp.fr/wp-content/blogs.dir/106/files/2013/04/Maltraitance_P.A.MAJINFOOct2012.pdf",
  },
  {
    year: "2009",
    title:
      "Psychologue écoutant en téléphonie, une autre façon d'exercer",
    publisher:
      "Le Journal des psychologues n°267 – Dossier : Psychologues au téléphone",
    type: "Article",
    href: "https://shs.cairn.info/revue-le-journal-des-psychologues-2009-4-page-45?lang=fr",
  },
  {
    year: "2007",
    title: "Écouter la personne en détresse",
    publisher: "Doc'Domicile – Aide et soins aux personnes dépendantes",
    type: "Interview",
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", href: "/" },
          { name: "Mentions légales", href: "/mentions-legales/" },
        ])}
      />

      <section className="relative">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs uppercase tracking-[0.32em] text-ink-muted">
            Informations
          </p>
          <h1 className="mt-6 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Mentions légales
          </h1>

          <div className="mt-12 space-y-12">
            <section className="space-y-3">
              <h2 className="font-display text-2xl text-ink">
                Éditeur du site
              </h2>
              <div className="space-y-1 text-sm leading-relaxed text-ink-soft">
                <p className="font-medium text-ink">{SITE.fullName}</p>
                <p>Adresse légale : {SITE.legal.address}</p>
                <p>
                  Établissement secondaire : {SITE.address.street},{" "}
                  {SITE.address.postalCode} {SITE.address.locality}
                </p>
                <p className="pt-3">
                  <span className="text-ink-muted">Contact : </span>
                  prise de rendez-vous et messagerie via{" "}
                  <Link
                    href={SITE.doctolib}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-dark underline-offset-4 hover:underline"
                  >
                    Doctolib
                  </Link>
                  .
                </p>
                <p className="pt-3">SIREN : {SITE.legal.siren}</p>
                <p>SIRET Châtillon : {SITE.legal.siretChatillon}</p>
                <p>SIRET Mauguio : {SITE.legal.siretMauguio}</p>
                <p>RPPS : {SITE.legal.rpps}</p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl text-ink">Hébergeur</h2>
              <div className="space-y-1 text-sm leading-relaxed text-ink-soft">
                <p className="font-medium text-ink">{SITE.hosting.name}</p>
                <p>{SITE.hosting.address}</p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl text-ink">
                Propriété intellectuelle
              </h2>
              <p className="text-sm leading-relaxed text-ink-soft">
                L&rsquo;ensemble des contenus de ce site (textes, images,
                photographies, identité visuelle) est la propriété exclusive
                de Sandra Sapio, sauf mention contraire. Toute reproduction,
                représentation ou diffusion, totale ou partielle, est
                interdite sans autorisation préalable et écrite.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl text-ink">
                Données personnelles
              </h2>
              <p className="text-sm leading-relaxed text-ink-soft">
                Ce site ne collecte aucune donnée personnelle de navigation.
                La prise de rendez-vous et les échanges se font exclusivement
                via la plateforme sécurisée Doctolib, qui dispose de sa propre
                politique de confidentialité.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="font-display text-2xl text-ink">
                Travaux et publications
              </h2>
              <ul className="space-y-6">
                {PUBLICATIONS.map((pub) => (
                  <li
                    key={pub.title}
                    className="border-l-2 border-watercolor pl-5"
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-ink-muted">
                      {pub.year} &middot; {pub.type}
                    </p>
                    <p className="mt-2 font-display text-lg leading-snug text-ink">
                      {pub.title}
                    </p>
                    <p className="mt-1 text-sm text-ink-soft">
                      {pub.publisher}
                    </p>
                    {pub.href && (
                      <Link
                        href={pub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-xs text-accent-dark underline-offset-4 hover:underline"
                      >
                        Consulter l&rsquo;article
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
