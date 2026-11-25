import type { Metadata } from "next";
import { LinksClient } from "@/components/LinksClient";
import { OFFICE_INFO } from "@/lib/data";

export const metadata: Metadata = {
  alternates: {
    canonical: "/links",
  },
  title: "Links Oficiais",
  description: `Central de atendimento e contatos diretos — ${OFFICE_INFO.fullTitle} (${OFFICE_INFO.oab}).`,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${OFFICE_INFO.siteUrl}/links`,
    siteName: OFFICE_INFO.fullTitle,
    title: `Links Oficiais | ${OFFICE_INFO.fullTitle}`,
    description: `Atendimento jurídico direto via WhatsApp, localização no Capão Raso em Curitiba/PR e acesso ao site institucional (${OFFICE_INFO.oab}).`,
    images: [
      {
        url: `${OFFICE_INFO.siteUrl}/og_image.jpg`,
        secureUrl: `${OFFICE_INFO.siteUrl}/og_image.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: `${OFFICE_INFO.fullTitle} — ${OFFICE_INFO.oab}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Links Oficiais | ${OFFICE_INFO.fullTitle}`,
    description: OFFICE_INFO.summaryDescription,
    images: [`${OFFICE_INFO.siteUrl}/og_image.jpg`],
  },
};

export default function LinksPage() {
  return <LinksClient />;
}
