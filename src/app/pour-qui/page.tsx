import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { DoctolibCTA } from "@/components/DoctolibCTA";
import { WatercolorBlob } from "@/components/WatercolorBlob";
import {
  HeartIcon,
  FamilyIcon,
  BookIcon,
  CoupleIcon,
} from "@/components/icons";

export const metadata = buildMetadata({
  title: "Pour qui ? Difficultés personnelles, parentales, études, travail, couple",
  description:
    "Les 4 grandes portes d'entrée de l'accompagnement de Sandra Sapio : difficultés personnelles, guidance parentale, études / travail, couple. Cabinet à Mauguio (Montpellier) et téléconsultation.",
  path: "/pour-qui/",
  keywords: [
    "psychologue Mauguio",
    "guidance parentale",
    "thérapie de couple Montpellier",
    "psychologue étudiant Santé Psy Étudiant",
    "psychologue burn-out",
    "psychologue dépendance affective",
    "psychologue relations toxiques",
  ],
});

const PAVES = [
  {
    icon: HeartIcon,
    eyebrow: "Pavé 1",
    title: "Difficultés personnelles, relationnelles ou émotionnelles",
    intro: "Vous traversez une période difficile ou un mal-être persistant ?",
    tags: [
      "Dépendance affective",
      "Relations toxiques",
      "Emprise",
      "Rupture",
      "Deuil",
      "Perte",
      "Anxiété",
      "Stress post-traumatique",
      "Troubles psychosomatiques",
    ],
    body:
      "Je vous accompagne pour mieux comprendre ce que vous vivez, retrouver des repères et avancer de façon plus apaisée.",
  },
  {
    icon: FamilyIcon,
    eyebrow: "Pavé 2",
    title: "Guidance parentale",
    intro:
      "Vous rencontrez des difficultés avec votre enfant ou dans votre rôle de parent ?",
    tags: [
      "Pleurs du nourrisson",
      "Sommeil",
      "Scolarité",
      "Opposition",
      "Colères",
      "Gestion des émotions",
      "Frustration",
      "Limites",
      "Tensions familiales",
    ],
    body:
      "Je vous reçois avant tout en tant que parent, dans une démarche de guidance parentale, afin de vous aider à mieux comprendre ce qui se joue, à retrouver des repères et à favoriser un équilibre familial plus apaisé.",
  },
  {
    icon: BookIcon,
    eyebrow: "Pavé 3",
    title: "Études, travail, concentration et positionnement",
    intro:
      "Vous êtes étudiant, professionnel ou responsable d'équipe et vous rencontrez des difficultés dans vos études, au travail ou dans les relations au sein de vos équipes ?",
    tags: [
      "Stress",
      "Surcharge mentale",
      "Perte de confiance",
      "Concentration",
      "Mémorisation",
      "Organisation",
      "Gestion du temps",
      "Épuisement",
      "Tensions relationnelles",
      "Difficultés à se positionner",
    ],
    body:
      "Grâce à mon approche intégrative, qui articule psychologie clinique, psychologie cognitive, psychologie sociale et ingénierie de la performance, je vous aide à comprendre vos difficultés, à identifier vos freins et à mettre en place des stratégies concrètes, adaptées à votre fonctionnement, pour travailler de façon plus sereine et plus efficace.",
  },
  {
    icon: CoupleIcon,
    eyebrow: "Pavé 4",
    title: "Couple",
    intro: "Vous traversez des difficultés dans votre couple ?",
    tags: [
      "Conflits répétés",
      "Incompréhensions",
      "Distance affective",
      "Dépendance",
      "Communication douloureuse",
      "Séparation",
      "Rupture",
      "Relations déséquilibrées",
    ],
    body:
      "Je vous accompagne, en individuel ou en thérapie de couple, pour mieux comprendre les mécanismes en jeu, apaiser les tensions, retrouver un positionnement plus juste et avancer vers des liens plus sains.",
  },
];

export default function PourQuiPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", href: "/" },
          { name: "Pour qui ?", href: "/pour-qui/" },
        ])}
      />

      <section className="relative overflow-hidden">
        <WatercolorBlob position="top-right" size="lg" color="watercolor-soft" />
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10 lg:py-28">
          <p className="text-xs uppercase tracking-[0.32em] text-ink-muted">
            Pour qui ?
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ink sm:text-6xl">
            Vous reconnaître,
            <br />
            <span className="text-accent">poser des mots</span>.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Quatre grandes portes d&rsquo;entrée pour identifier ce qui vous
            traverse aujourd&rsquo;hui et trouver l&rsquo;accompagnement
            adapté.
          </p>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {PAVES.map(({ icon: Icon, eyebrow, title, intro, tags, body }) => (
              <article
                key={title}
                className="group relative flex flex-col rounded-[1.75rem] border border-line bg-paper p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-md sm:p-10"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-watercolor-soft text-accent-dark transition-colors group-hover:bg-watercolor">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-[0.28em] text-ink-muted">
                    {eyebrow}
                  </span>
                </div>
                <h2 className="mt-6 font-display text-2xl leading-tight text-ink sm:text-[1.65rem]">
                  {title}
                </h2>
                <p className="mt-4 text-base font-medium italic text-ink-soft">
                  {intro}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line-soft bg-background px-3 py-1 text-xs text-ink-soft"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-relaxed text-ink-soft">
                  {body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-5 text-center">
            <p className="max-w-xl text-sm text-ink-soft">
              Vous reconnaissez votre situation dans l&rsquo;un de ces pavés ?
              Nous pouvons en parler ensemble.
            </p>
            <DoctolibCTA size="lg" variant="primary">
              Prendre rendez-vous
            </DoctolibCTA>
          </div>
        </div>
      </section>
    </>
  );
}
