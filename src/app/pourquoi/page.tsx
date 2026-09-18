import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { DoctolibCTA } from "@/components/DoctolibCTA";
import { WatercolorBlob } from "@/components/WatercolorBlob";
import { PersonIcon, PairIcon, GroupIcon } from "@/components/icons";

export const metadata = buildMetadata({
  title: "Pourquoi ? Approche intégrative en individuel, à deux ou à plusieurs",
  description:
    "L'approche intégrative de Sandra Sapio : un accompagnement chaleureux, dynamique et concret. Consultations en individuel, à deux ou à plusieurs, en cabinet à Mauguio ou en téléconsultation.",
  path: "/pourquoi/",
  keywords: [
    "approche intégrative psychologie",
    "psychologue individuel Montpellier",
    "thérapie à deux",
    "thérapie familiale Mauguio",
    "psychologue téléconsultation",
  ],
});

const FORMATS = [
  {
    icon: PersonIcon,
    label: "1",
    title: "En individuel",
    body:
      "En individuel, je vous reçois pour travailler sur les difficultés psychiques, relationnelles, affectives, familiales, scolaires ou professionnelles qui jalonnent votre parcours de vie.",
    tags: [
      "Anxiété",
      "Angoisses",
      "Crises de panique",
      "TOC",
      "Hypocondrie",
      "Burn-out",
      "Stress",
      "Épuisement",
      "Dépression",
      "Mal-être",
      "Troubles du sommeil",
      "Rythmes",
      "Alimentation",
      "Troubles psychosomatiques",
      "Estime de soi",
      "Rupture",
      "Deuil",
      "Dépendance affective",
      "Relations toxiques",
      "Emprise",
      "Stress post-traumatique",
    ],
  },
  {
    icon: PairIcon,
    label: "2",
    title: "À deux",
    body:
      "Je peux également vous recevoir à deux lorsque la difficulté concerne une relation importante : couple, parent et adolescent, mère et fille, père et fils, frère et sœur, amis, collègues, proches en conflit ou en incompréhension.",
    extra:
      "Ce travail permet de mieux comprendre ce qui se joue dans la relation, d'apaiser les tensions, de restaurer le dialogue et de retrouver un positionnement plus juste.",
  },
  {
    icon: GroupIcon,
    label: "3",
    title: "À plusieurs",
    body:
      "Lorsque la situation implique plusieurs personnes, je peux proposer un travail à plusieurs : famille, fratrie, amis, collègues, proches concernés par une même difficulté, ou autres configurations relationnelles nécessitant un espace commun de parole et de compréhension.",
  },
];

export default function PourquoiPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", href: "/" },
          { name: "Pourquoi ?", href: "/pourquoi/" },
        ])}
      />

      <section className="relative overflow-hidden">
        <WatercolorBlob position="top-left" size="lg" color="watercolor" variant={2} />
        <WatercolorBlob position="bottom-right" size="md" color="watercolor-soft" variant={1} />

        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10 lg:py-28">
          <p className="text-xs uppercase tracking-[0.32em] text-ink-muted">
            Pourquoi ?
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ink sm:text-6xl">
            Remettre du
            <br />
            <span className="text-accent">mouvement</span>.
          </h1>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-3xl px-6 pb-20 lg:px-10">
          <div className="space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>
              À différents moments de la vie, certaines difficultés peuvent
              devenir envahissantes et nécessitent un espace pour être
              comprises, traversées et dépassées.
            </p>
            <p>
              Mon approche allie chaleur humaine, dynamisme et recherche de
              repères concrets, dans un véritable échange destiné à vous aider
              à retrouver du mouvement là où quelque chose s&rsquo;est figé.
            </p>
            <p>
              J&rsquo;ai à c&oelig;ur de proposer un travail à la fois profond,
              vivant et concret, fondé sur une approche intégrative.
              J&rsquo;articule plusieurs courants de pensée, une écoute
              clinique approfondie et des repères concrets pour remettre du
              mouvement là où quelque chose s&rsquo;est figé, dans une
              dynamique de changement, de liberté et d&rsquo;efficacité.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-background-alt/60">
        <div className="mx-auto max-w-6xl space-y-8 px-6 py-24 lg:px-10 lg:py-32">
          {FORMATS.map(({ icon: Icon, label, title, body, tags, extra }) => (
            <article
              key={title}
              className="grid gap-8 rounded-[1.75rem] border border-line bg-paper p-8 sm:p-12 lg:grid-cols-12 lg:gap-12"
            >
              <div className="flex items-start gap-5 lg:col-span-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-watercolor-soft text-accent-dark">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-ink-muted">
                    Format {label}
                  </p>
                  <h2 className="mt-2 font-display text-3xl leading-tight text-ink sm:text-4xl">
                    {title}
                  </h2>
                </div>
              </div>
              <div className="space-y-5 lg:col-span-8">
                <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
                  {body}
                </p>
                {extra && (
                  <p className="text-base leading-relaxed text-ink-soft">
                    {extra}
                  </p>
                )}
                {tags && (
                  <ul className="flex flex-wrap gap-2 pt-2">
                    {tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line-soft bg-background px-3 py-1 text-xs text-ink-soft"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-10">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            Vous souhaitez en parler ?
          </h2>
          <p className="mt-5 text-base text-ink-soft">
            Prendre rendez-vous ou contacter Sandra Sapio se fait directement
            via Doctolib.
          </p>
          <div className="mt-8 flex justify-center">
            <DoctolibCTA size="lg">Prendre rendez-vous</DoctolibCTA>
          </div>
        </div>
      </section>
    </>
  );
}
