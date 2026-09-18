import type { Metadata } from "next";
import { SITE } from "./site";

const DEFAULT_DESCRIPTION =
  "Sandra Sapio, psychologue clinicienne diplômée de Paris Cité. Consultations en français et en espagnol au cabinet de Mauguio (Montpellier) et en téléconsultation. Rendez-vous via Doctolib.";

const DEFAULT_KEYWORDS = [
  "Sandra Sapio",
  "psychologue Mauguio",
  "psychologue Montpellier",
  "psychologue clinicienne",
  "téléconsultation psychologue",
  "psychologue français espagnol",
  "guidance parentale Montpellier",
  "thérapie de couple Montpellier",
  "psychologue Santé Psy Étudiant",
  "psychologue intégrative",
];

interface PageMetaInput {
  title: string;
  description?: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  keywords,
  ogImage = "/og-image.jpg",
}: PageMetaInput): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = title.includes(SITE.name)
    ? title
    : `${title} | ${SITE.fullName}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords ?? DEFAULT_KEYWORDS,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.fullName,
      locale: SITE.locale,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: SITE.fullName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const ROOT_METADATA: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.fullName} à Mauguio (Montpellier) et en téléconsultation`,
    template: `%s | ${SITE.fullName}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-touch-icon.png",
  },
};
