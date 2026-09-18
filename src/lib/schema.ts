import { SITE } from "./site";

const ID_BASE = `${SITE.url}#`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Psychologist", "MedicalBusiness", "LocalBusiness"],
    "@id": `${ID_BASE}business`,
    name: SITE.fullName,
    alternateName: SITE.name,
    description:
      "Sandra Sapio, psychologue clinicienne diplômée de la faculté Paris 5 – Paris Cité. Consultations en français et en espagnol, au cabinet de Mauguio (Montpellier) et en téléconsultation.",
    url: SITE.url,
    image: `${SITE.url}/images/sandra-sapio.jpg`,
    logo: `${SITE.url}/images/logo.png`,
    priceRange: "EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      postalCode: SITE.address.postalCode,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.6217,
      longitude: 4.0019,
    },
    areaServed: [
      { "@type": "City", name: "Mauguio" },
      { "@type": "City", name: "Montpellier" },
      { "@type": "City", name: "Lattes" },
      { "@type": "AdministrativeArea", name: "Hérault" },
      { "@type": "AdministrativeArea", name: "Occitanie" },
    ],
    availableLanguage: [
      { "@type": "Language", name: "Français", alternateName: "fr" },
      { "@type": "Language", name: "Espagnol", alternateName: "es" },
    ],
    medicalSpecialty: ["Psychology", "ClinicalPsychology", "Psychotherapy"],
    knowsAbout: [
      "Psychologie clinique",
      "Psychologie cognitive",
      "Psychologie sociale",
      "Thérapie intégrative",
      "Guidance parentale",
      "Thérapie de couple",
      "Santé Psy Étudiant",
      "Téléconsultation",
      "Ingénierie de la performance",
    ],
    sameAs: [SITE.social.doctolib, SITE.social.marieClaire],
    founder: { "@id": `${ID_BASE}sandra-sapio` },
    employee: { "@id": `${ID_BASE}sandra-sapio` },
    paymentAccepted: ["Cash", "Credit Card", "Cheque"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${ID_BASE}sandra-sapio`,
    name: SITE.name,
    givenName: "Sandra",
    familyName: "Sapio",
    jobTitle: "Psychologue clinicienne",
    description:
      "Psychologue clinicienne diplômée de la faculté Paris 5 – Paris Cité, certifiée ingénieur performance, plus de 20 ans d'expérience.",
    image: `${SITE.url}/images/sandra-sapio.jpg`,
    url: SITE.url,
    knowsLanguage: ["fr", "es"],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Université Paris Cité (Paris 5)",
    },
    worksFor: { "@id": `${ID_BASE}business` },
    sameAs: [SITE.social.doctolib, SITE.social.marieClaire],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${ID_BASE}website`,
    url: SITE.url,
    name: SITE.fullName,
    inLanguage: "fr-FR",
    publisher: { "@id": `${ID_BASE}business` },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.href}`,
    })),
  };
}
