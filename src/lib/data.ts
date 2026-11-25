export const OFFICE_INFO = {
  brandName: "Ariane Savi",
  fullTitle: "Ariane Savi - Advocacia e Assessoria Jurídica",
  lawyerFullName: "Ariane Cristina Bones Savi",
  oab: "OAB/PR 112.323",
  graduatedSince: "dezembro de 2020",
  practiceSince: "desde 2021",
  tagline: "Você pode ter valores a receber e não sabe!",
  specialtyHeadline: "Especialista em Direito do Trabalho",
  summaryDescription:
    "Advocacia e Assessoria Jurídica nas áreas Trabalhista, Família e Sucessões, Cível, Consumidor e Bancária.",
  whatsappRaw: "5541992857270",
  whatsappDisplay: "(41) 99285-7270",
  email: "arianesaviadvocacia@gmail.com",
  instagramUrl: "https://www.instagram.com/arianesaviadv/",
  instagramHandle: "@arianesaviadv",
  address: {
    street: "Av. Winston Churchill, 1824",
    neighborhood: "Capão Raso",
    city: "Curitiba",
    state: "PR",
    zip: "81130-000",
    full: "Av. Winston Churchill, 1824 - Capão Raso, Curitiba - PR, 81130-000",
  },
  hours: [
    { days: "Segunda a Sexta", time: "09:00 às 12:00 · 13:00 às 17:30" },
    { days: "Sábado e Domingo", time: "Fechado" },
  ],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Winston+Churchill+1824+Capao+Raso+Curitiba+PR+81130-000",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Av.%20Winston%20Churchill,%201824%20-%20Cap%C3%A3o%20Raso,%20Curitiba%20-%20PR,%2081130-000&output=embed",
  siteUrl: "https://arianesavi.pages.dev",
};

export function getWhatsAppUrl(message?: string): string {
  const defaultMsg =
    "Olá! Gostaria de conversar com um advogado para esclarecer dúvidas jurídicas e solicitar atendimento.";
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${text}`;
}

export interface PillarItem {
  id: string;
  label: string;
  title: string;
  description: string;
  metricDisplay: string;
}

export const AUTHORITY_PILLARS: PillarItem[] = [
  {
    id: "trabalhista",
    label: "Foco Trabalhista",
    metricDisplay: "CLT & Verbas",
    title: "Apuração minuciosa de verbas",
    description:
      "Auditoria técnica de folhas de ponto, holerites, depósitos de FGTS, horas extras e verbas rescisórias não quitadas.",
  },
  {
    id: "formacao",
    label: "Atuação Sólida",
    metricDisplay: "Desde 2021",
    title: "Rigidez técnica e atualização",
    description:
      "Formação em Direito desde dezembro de 2020, com pós-graduação em Direito e Processo do Trabalho e especialização em Famílias.",
  },
  {
    id: "atendimento",
    label: "Atendimento Humano",
    metricDisplay: "5.0 ★ Google",
    title: "Clareza em cada etapa",
    description:
      "Comunicação acessível, transparente e acolhedora em questões delicadas de trabalho, família, consumo e patrimônio.",
  },
  {
    id: "alcance",
    label: "Curitiba e Brasil",
    metricDisplay: "100% Digital",
    title: "Presencial no Capão Raso e Online",
    description:
      "Estrutura física em Curitiba/PR e atendimento 100% digital para agilizar análises documentais em todo o território nacional.",
  },
];

export interface MethodologyStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    step: "01",
    title: "Escuta Qualificada",
    description:
      "Primeiro contato para compreender o contexto dos fatos, prazos legais em curso e necessidades urgentes do seu caso.",
    detail: "Atendimento presencial em Curitiba ou por videoconferência.",
  },
  {
    step: "02",
    title: "Auditoria Documental e Cálculos",
    description:
      "Conferência criteriosa de holerites, contratos, extratos de FGTS, acordos ou certidões para identificar direitos e eventuais valores a receber.",
    detail: "Análise fundamentada na legislação e jurisprudência dos tribunais.",
  },
  {
    step: "03",
    title: "Estratégia Jurídica Clara",
    description:
      "Definição da via mais segura e eficiente — composição extrajudicial em cartório, notificação ou medida judicial — com total transparência.",
    detail: "Linguagem direta, sem termos jurídicos obscuros.",
  },
  {
    step: "04",
    title: "Acompanhamento Contínuo",
    description:
      "Condução firme em audiências, negociações e cumprimentos de sentença, mantendo você informado sobre cada movimentação.",
    detail: "Atenção aos prazos e sigilo profissional absoluto.",
  },
];
