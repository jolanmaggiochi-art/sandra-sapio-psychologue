export const SITE = {
  name: "Sandra Sapio",
  fullName: "Sandra Sapio – Psychologue clinicienne",
  url: "https://sandra-sapio-psychologue.com",
  locale: "fr_FR",
  language: "fr",
  doctolib: "https://www.doctolib.fr/psychologue/chatillon/sandra-sapio",
  email: "sandra.sapio92@gmail.com",
  address: {
    placeName: "Espace Holistik",
    street: "165 rue Roland-Garros",
    locality: "Mauguio",
    postalCode: "34130",
    region: "Occitanie",
    country: "FR",
    sector: "Secteur Fréjorgues, entre Lattes et Mauguio",
  },
  legal: {
    address: "4 rue Chateaubriand, 92320 Châtillon",
    siren: "452 979 438",
    siretChatillon: "452 979 438 00028",
    siretMauguio: "452 979 438 00073",
    rpps: "810058522673",
  },
  hosting: {
    name: "LWS – Ligne Web Services",
    address: "10 rue de Penthièvre, 75008 Paris, France",
  },
  social: {
    doctolib: "https://www.doctolib.fr/psychologue/chatillon/sandra-sapio",
    marieClaire: "https://www.marieclaire.fr/adresses-incontournables/sandra-sapio/",
  },
} as const;

export const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/pour-qui/", label: "Pour qui ?" },
  { href: "/pourquoi/", label: "Pourquoi ?" },
  { href: "/mentions-legales/", label: "Mentions légales" },
] as const;
