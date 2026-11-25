import { OFFICE_INFO } from "./data";

export function getLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: OFFICE_INFO.fullTitle,
    description: OFFICE_INFO.summaryDescription,
    url: OFFICE_INFO.siteUrl,
    image: `${OFFICE_INFO.siteUrl}/og_image.jpg`,
    telephone: "+5541992857270",
    email: OFFICE_INFO.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICE_INFO.address.street,
      addressLocality: OFFICE_INFO.address.city,
      addressRegion: OFFICE_INFO.address.state,
      postalCode: OFFICE_INFO.address.zip,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.4957,
      longitude: -49.2952,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "13:00",
        closes: "17:30",
      },
    ],
    sameAs: [OFFICE_INFO.instagramUrl],
    founder: {
      "@type": "Person",
      name: OFFICE_INFO.lawyerFullName,
      jobTitle: "Advogada Especialista em Direito do Trabalho",
    },
  };
}
