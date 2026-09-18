import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { DoctolibCTA } from "@/components/DoctolibCTA";
import { WatercolorBlob } from "@/components/WatercolorBlob";
import {
  ListenIcon,
  ShieldIcon,
  LeafIcon,
  SunriseIcon,
  GlobeIcon,
  MapPinIcon,
  VideoIcon,
  ArrowIcon,
} from "@/components/icons";

export const metadata = buildMetadata({
  title: "Sandra Sapio – Psychologue clinicienne à Mauguio (Montpellier) et en téléconsultation",
  description:
    "Sandra Sapio, psychologue clinicienne diplômée de Paris Cité. Plus de 20 ans d'expérience. Consultations en français et en espagnol au cabinet de Mauguio (Montpellier) et en téléconsultation. Prise de rendez-vous via Doctolib.",
  path: "/",
});

const VALUES = [
  {
    icon: ListenIcon,
    title: "Écoute",
    description: "Une présence attentive et sans jugement.",
  },
  {
    icon: ShieldIcon,
    title: "Confiance",
    description: "Un cadre sécurisant et confidentiel.",
  },
  {
    icon: LeafIcon,
    title: "Sens",
    description: "Mieux se comprendre pour avancer.",
  },
  {
    icon: SunriseIcon,
    title: "Sérénité",
    description: "Retrouver équilibre et légèreté.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Accueil", href: "/" }])} />

      <section className="relative overflow-hidden">
        <WatercolorBlob position="top-left" size="xl" color="watercolor" variant={1} />
        <WatercolorBlob position="bottom-right" size="lg" color="watercolor-soft" variant={2} />

        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-32">
          <div className="relative z-10 flex flex-col justify-center lg:col-span-7">
            <p className="mb-6 text-xs uppercase tracking-[0.32em] text-ink-muted animate-fade-up">
              Un espace pour vous
            </p>
            <h1 className="font-display text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl animate-fade-up">
              Respirer.
              <br />
              Comprendre.
              <br />
              <span className="text-accent">Avancer.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg animate-fade-up">
              Je vous accompagne avec bienveillance pour traverser les étapes
              importantes de votre vie et retrouver équilibre et sérénité.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up">
              <DoctolibCTA size="lg" variant="primary">
                Prendre rendez-vous
              </DoctolibCTA>
              <Link
                href="/pour-qui/"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                En savoir plus
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>

            <ul className="mt-12 grid gap-3 text-sm text-ink-soft sm:grid-cols-3 animate-fade-up">
              <li className="flex items-center gap-2">
                <MapPinIcon className="h-4 w-4 text-accent" />
                <span>Cabinet à Mauguio</span>
              </li>
              <li className="flex items-center gap-2">
                <VideoIcon className="h-4 w-4 text-accent" />
                <span>Téléconsultation</span>
              </li>
              <li className="flex items-center gap-2">
                <GlobeIcon className="h-4 w-4 text-accent" />
                <span>Français &amp; espagnol</span>
              </li>
            </ul>
          </div>

          <div className="relative lg:col-span-5">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-watercolor-soft/40 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-paper shadow-sm">
              <Image
                src="/images/sandra-sapio.jpg"
                alt="Sandra Sapio, psychologue clinicienne, dans son cabinet"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {VALUES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-start gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-watercolor-soft text-accent-dark">
                <Icon className="h-5 w-5" />
              </span>
              <h2 className="font-display text-xl text-ink">{title}</h2>
              <p className="text-sm leading-relaxed text-ink-soft">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-12 lg:gap-20 lg:px-10 lg:py-32">
          <div className="space-y-6 lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.28em] text-ink-muted">
              À propos
            </p>
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              Sandra Sapio, psychologue clinicienne diplômée de la faculté
              <span className="italic text-accent-dark"> Paris 5 – Paris Cité</span>.
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                Consultations en français et en espagnol. Sandra Sapio vous
                accompagne dans les moments importants, les difficultés et les
                transitions de la vie.
              </p>
              <p>
                Forte de plus de 20 ans d&rsquo;expérience, notamment en région
                parisienne, et certifiée ingénieur performance, elle vous
                reçoit aujourd&rsquo;hui dans la région de Montpellier et en
                téléconsultation dans le monde entier.
              </p>
              <p>
                Son expertise, nourrie à la fois par la clinique et par la
                performance, s&rsquo;inscrit dans une même qualité de présence
                et de continuité, qui a conduit ses patients à poursuivre leur
                suivi à distance au fil du temps.
              </p>
            </div>
          </div>

          <aside className="relative lg:col-span-5">
            <div className="sticky top-28 space-y-6 rounded-3xl border border-line bg-paper p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent-dark">
                  <ShieldIcon className="h-4 w-4" />
                </span>
                <h3 className="font-display text-xl text-ink">
                  Un guichet unique
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">
                La prise de rendez-vous et l&rsquo;ensemble des échanges se
                font exclusivement via Doctolib. Un canal unique pour un suivi
                plus simple, plus clair et plus sécurisé.
              </p>
              <DoctolibCTA size="md" variant="primary" className="w-full">
                Prendre rendez-vous ou contacter
              </DoctolibCTA>
              <p className="text-xs italic text-ink-muted">
                Souvent en consultation, ce canal unique permet un suivi plus
                simple, plus clair et plus sécurisé des demandes.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background-alt/60">
        <WatercolorBlob position="top-right" size="lg" color="watercolor-soft" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-32">
          <div className="relative lg:col-span-5">
            <div className="aspect-square overflow-hidden rounded-[2rem] border border-line bg-paper shadow-sm">
              <Image
                src="/images/pelote-laine.jpg"
                alt="Une pelote de laine entre les mains, symbole d'un fil que l'on démêle patiemment"
                width={800}
                height={800}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="relative z-10 flex flex-col justify-center space-y-6 lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.28em] text-ink-muted">
              Une métaphore
            </p>
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              La vie est comme une pelote de laine.
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                De petits n&oelig;uds se font et se dénouent. Au fil du temps,
                il arrive que certains deviennent des obstacles, des troubles
                ou des maladies. Vous pouvez agir avant qu&rsquo;ils ne
                s&rsquo;accumulent et vous débordent.
              </p>
              <p>
                Ma mission est de vous accompagner soigneusement. Nous
                balaierons ensemble les freins qui se forment sur votre
                parcours de vie, pour avancer en toute sérénité.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/pourquoi/"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent-dark transition-colors hover:text-accent"
              >
                Découvrir mon approche
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-accent/20 bg-paper p-10 shadow-sm sm:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-watercolor-soft opacity-60 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.28em] text-accent-dark">
                  Doctolib
                </p>
                <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
                  Prendre rendez-vous ou contacter ce praticien.
                </h2>
                <p className="text-base leading-relaxed text-ink-soft">
                  La prise de rendez-vous et la messagerie passent par
                  Doctolib. Un canal unique, simple et sécurisé.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <DoctolibCTA size="lg" variant="primary">
                  Aller sur Doctolib
                </DoctolibCTA>
                <p className="text-xs italic text-ink-muted">
                  Le lien ouvre la fiche Doctolib de Sandra Sapio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
