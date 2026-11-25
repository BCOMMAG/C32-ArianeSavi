import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { OFFICE_INFO } from "@/lib/data";
import { getLegalServiceSchema } from "@/lib/schema";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(OFFICE_INFO.siteUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: `${OFFICE_INFO.fullTitle} | Curitiba - PR`,
    template: `%s | ${OFFICE_INFO.fullTitle}`,
  },
  description:
    "Escritório de advocacia em Curitiba/PR especialista em Direito do Trabalho, além de atuação em Família e Sucessões, Consumidor, Cível e Bancário. OAB/PR 112.323.",
  keywords: [
    "Advogada Trabalhista Curitiba",
    "Ariane Savi Advocacia",
    "Direito do Trabalho Curitiba",
    "Direito de Família Curitiba",
    "Advogado Capão Raso Curitiba",
    "OAB PR 112323",
    "Verbas Rescisórias Curitiba",
    "Direito do Consumidor e Bancário",
  ],
  authors: [{ name: OFFICE_INFO.lawyerFullName }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: OFFICE_INFO.siteUrl,
    siteName: OFFICE_INFO.fullTitle,
    title: `${OFFICE_INFO.fullTitle} | Especialista em Direito do Trabalho`,
    description:
      "Atendimento presencial em Curitiba (Capão Raso) e online em todo o Brasil. Direito do Trabalho, Família e Sucessões, Consumidor, Cível e Bancário.",
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
    title: `${OFFICE_INFO.fullTitle} | Curitiba - PR`,
    description: OFFICE_INFO.summaryDescription,
    images: [`${OFFICE_INFO.siteUrl}/og_image.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getLegalServiceSchema();

  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F9F6F0] text-[#24141A] dark:bg-[#2B0815] dark:text-[#F4EFE6] antialiased transition-colors duration-300">
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
