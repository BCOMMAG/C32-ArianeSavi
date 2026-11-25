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
  image: string;
  alt: string;
  title: string;
  description: string;
}

export const AUTHORITY_PILLARS: PillarItem[] = [
  {
    id: "trabalhista",
    label: "Foco Trabalhista",
    image: "/guide_valores.jpg",
    alt: "Auditoria de cálculos trabalhistas, folha de ponto e verbas rescisórias",
    title: "Apuração minuciosa de valores",
    description:
      "Conferência técnica de holerites, depósitos de FGTS, horas extras e reflexos rescisórios que costumam passar despercebidos.",
  },
  {
    id: "tecnica",
    label: "Atuação desde 2021",
    image: "/escritorio_editorial.jpg",
    alt: "Biblioteca jurídica e escritório contemporâneo Ariane Savi Advocacia",
    title: "Sólida base acadêmica",
    description:
      "Formada em Direito desde dezembro de 2020, pós-graduada em Direito e Processo do Trabalho e pós-graduanda em Famílias.",
  },
  {
    id: "humano",
    label: "Atendimento Humano",
    image: "/cards/audiencia.jpg",
    alt: "Atendimento próximo, escuta qualificada e orientação clara ao cliente",
    title: "Clareza sem juridiquês",
    description:
      "Escuta atenta e transparente em questões sensíveis de trabalho, família, consumo e patrimônio para decisões seguras.",
  },
  {
    id: "alcance",
    label: "Curitiba e Brasil",
    image: "/cards/contratos.jpg",
    alt: "Assinatura de contratos e atendimento presencial e digital",
    title: "Presencial no Capão Raso e Online",
    description:
      "Estrutura presencial acolhedora em Curitiba/PR integrada ao atendimento 100% digital para agilidade em qualquer cidade.",
  },
];

export interface MethodologyStep {
  step: string;
  shortTitle: string;
  title: string;
  description: string;
  image: string;
  checklist: string[];
  clientBenefit: string;
}

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    step: "01",
    shortTitle: "Escuta Qualificada",
    title: "Compreensão humana e jurídica dos fatos",
    description:
      "O primeiro atendimento é dedicado a ouvir a sua história com calma, identificar urgências — como prazos rescisórios ou liminares — e responder às dúvidas iniciais com linguagem direta.",
    image: "/cards/audiencia.jpg",
    checklist: [
      "Mapeamento completo do histórico profissional ou familiar",
      "Identificação imediata de prazos prescricionais em curso",
      "Atendimento reservado em Curitiba ou por videoconferência",
    ],
    clientBenefit:
      "Você sai da primeira conversa entendendo exatamente qual é a situação jurídica do seu caso.",
  },
  {
    step: "02",
    shortTitle: "Auditoria e Cálculos",
    title: "Conferência técnica de documentos e provas",
    description:
      "Antes de qualquer medida, analisamos holerites, cartões de ponto, extratos de FGTS, contratos bancários ou conversas digitais para detectar direitos violados e valores devidos.",
    image: "/guide_valores.jpg",
    checklist: [
      "Auditoria de verbas rescisórias, horas extras e adicionais",
      "Validação de provas digitais (WhatsApp, e-mails e documentos)",
      "Levantamento de taxas bancárias ou negativação indevida",
    ],
    clientBenefit:
      "Clareza sobre os reais valores e direitos envolvidos antes de iniciar qualquer protocolo.",
  },
  {
    step: "03",
    shortTitle: "Estratégia Clara",
    title: "Definição do caminho mais rápido e seguro",
    description:
      "Traçamos a melhor rota jurídica — desde acordos e escrituras extrajudiciais em cartório até ações judiciais com pedidos de urgência — priorizando eficiência e previsibilidade.",
    image: "/escritorio_editorial.jpg",
    checklist: [
      "Avaliação entre solução extrajudicial célere ou via judicial",
      "Transparência prévia sobre honorários e Justiça Gratuita",
      "Estruturação probatória sólida para reduzir riscos",
    ],
    clientBenefit:
      "Segurança jurídica para avançar sem surpresas sobre etapas, custos ou documentos.",
  },
  {
    step: "04",
    shortTitle: "Condução Firme",
    title: "Acompanhamento ativo até o resultado final",
    description:
      "Representamos seus interesses em audiências, perícias, sustentações e cobranças de sentença, mantendo você atualizado de cada movimentação relevante sem precisar ficar cobrando retorno.",
    image: "/cards/contratos.jpg",
    checklist: [
      "Atuação técnica presente em audiências e negociações",
      "Relatórios objetivos das atualizações processuais",
      "Sigilo profissional absoluto e atenção ao cumprimento de prazos",
    ],
    clientBenefit:
      "Tranquilidade para saber que seu processo está sendo conduzido com rigor e proximidade.",
  },
];
