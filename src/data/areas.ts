export interface LegalDemandCard {
  id: string;
  categoryId: string;
  categoryName: string;
  badge: string;
  title: string;
  summary: string;
  details: string;
  legalBasis: string;
  image: string;
  highlights: string[];
  whatsappMessage: string;
}

export interface PracticeCategory {
  id: string;
  shortName: string;
  name: string;
}

export const PRACTICE_CATEGORIES: PracticeCategory[] = [
  { id: "todos", shortName: "Todas as Áreas", name: "Todas as Especialidades" },
  { id: "trabalhista", shortName: "Direito do Trabalho", name: "Direito do Trabalho" },
  { id: "familia", shortName: "Família e Sucessões", name: "Direito de Família e Sucessões" },
  { id: "consumidor", shortName: "Consumidor", name: "Direito do Consumidor" },
  { id: "civil", shortName: "Direito Cível", name: "Direito Cível" },
  { id: "bancario", shortName: "Direito Bancário", name: "Direito Bancário" },
];

export const LEGAL_DEMANDS: LegalDemandCard[] = [
  {
    id: "horas-extras-verbas",
    categoryId: "trabalhista",
    categoryName: "Direito do Trabalho",
    badge: "Valores a Receber",
    title: "Horas Extras e Verbas Rescisórias",
    summary:
      "Auditoria minuciosa de rescisões, banco de horas irregular, intervalos reduzidos e depósitos ausentes de FGTS.",
    details:
      "Muitos trabalhadores deixam a empresa sem conferir se todas as horas além da jornada normal, reflexos no 13º salário, férias + 1/3, aviso prévio proporcional e multa de 40% do FGTS foram quitados corretamente.",
    legalBasis: "Arts. 59, 467 e 477 da CLT · Súmula 338 TST",
    image: "/guide_valores.jpg",
    highlights: [
      "Apuração de horas extras e adicional noturno não lançados",
      "Liberação e cobrança de FGTS em atraso com multa de 40%",
      "Multa pelo atraso no pagamento rescisório (Art. 477 CLT)",
    ],
    whatsappMessage:
      "Olá! Gostaria de consultar um advogado para conferir horas extras e possíveis valores a receber na rescisão trabalhista.",
  },
  {
    id: "pejotizacao-sem-registro",
    categoryId: "trabalhista",
    categoryName: "Direito do Trabalho",
    badge: "Vínculo CLT",
    title: "Trabalho como PJ ou Sem Registro",
    summary:
      "Reconhecimento de vínculo empregatício quando há rotina subordinada e exigência fraudulenta de MEI/CNPJ.",
    details:
      "Se você cumpria horários, recebia ordens diretas e prestava serviços habituais sob fachada de contrato PJ ou sem assinatura em carteira, a Justiça do Trabalho reconhece o vínculo e assegura todos os direitos retroativos.",
    legalBasis: "Arts. 2º, 3º e 9º da CLT",
    image: "/cards/pj_vinculo.jpg",
    highlights: [
      "Anotação retroativa da Carteira de Trabalho (CTPS)",
      "Férias, 13º salário e FGTS de todo o período trabalhado",
      "Aceitação de prints de WhatsApp, e-mails e crachás como prova",
    ],
    whatsappMessage:
      "Olá! Trabalho ou trabalhei como PJ / sem registro e gostaria de conversar com um advogado sobre vínculo trabalhista.",
  },
  {
    id: "rescisao-indireta-justa-causa",
    categoryId: "trabalhista",
    categoryName: "Direito do Trabalho",
    badge: "Rescisão Protetiva",
    title: "Rescisão Indireta e Justa Causa",
    summary:
      "Desligamento sem perda de direitos diante de faltas graves do empregador ou anulação de justa causa injusta.",
    details:
      "Atrasos salariais recorrentes, falta de depósito de FGTS, assédio moral ou rigor excessivo permitem encerrar o contrato pela via judicial mantendo seguro-desemprego, FGTS + 40% e aviso prévio.",
    legalBasis: "Arts. 482 e 483 da CLT · Art. 223-A CLT",
    image: "/cards/contratos.jpg",
    highlights: [
      "Preservação integral das verbas na rescisão indireta",
      "Reversão judicial de justa causa aplicada sem comprovação",
      "Reparação por assédio moral, acúmulo ou desvio de função",
    ],
    whatsappMessage:
      "Olá! Preciso falar com um advogado sobre rescisão indireta ou reversão de justa causa.",
  },
  {
    id: "acidente-saude-trabalho",
    categoryId: "trabalhista",
    categoryName: "Direito do Trabalho",
    badge: "Estabilidade & Saúde",
    title: "Acidente, Burnout e Adicionais",
    summary:
      "Estabilidade de 12 meses, indenização por doença ocupacional, insalubridade e periculosidade não pagas.",
    details:
      "Trabalhadores acometidos por acidentes típicos, LER/DORT ou adoecimento psíquico ligado ao trabalho têm proteção legal de estabilidade após auxílio acidentário (B91), além do direito a adicionais de risco quando expostos sem EPI eficaz.",
    legalBasis: "Art. 118 Lei 8.213/91 · NRs 15 e 16",
    image: "/cards/saude.jpg",
    highlights: [
      "Estabilidade provisória de 12 meses após alta do INSS (B91)",
      "Salários devidos no chamado limbo previdenciário",
      "Insalubridade (10% a 40%) e periculosidade (30%)",
    ],
    whatsappMessage:
      "Olá! Gostaria de buscar orientação jurídica sobre acidente de trabalho, doença ocupacional ou adicionais.",
  },
  {
    id: "pensao-guarda-familia",
    categoryId: "familia",
    categoryName: "Família e Sucessões",
    badge: "Segredo de Justiça",
    title: "Pensão Alimentícia, Guarda e Convivência",
    summary:
      "Fixação justa, revisional ou execução urgente de pensão alimentícia e organização equilibrada da guarda de filhos.",
    details:
      "Condução firme e humanizada sob sigilo judicial, observando o trinômio necessidade, possibilidade e proporcionalidade para garantir proteção imediata às crianças e equilíbrio financeiro aos genitores.",
    legalBasis: "Lei 5.478/68 · Art. 528 CPC · Lei 13.058/14",
    image: "/cards/familia.jpg",
    highlights: [
      "Fixação liminar e cobrança urgente de alimentos atrasados",
      "Regulamentação de guarda compartilhada e visitas",
      "Revisão de valores em caso de mudança de renda",
    ],
    whatsappMessage:
      "Olá! Gostaria de conversar com um advogado sobre pensão alimentícia ou guarda de filhos.",
  },
  {
    id: "divorcio-inventario",
    categoryId: "familia",
    categoryName: "Família e Sucessões",
    badge: "Extrajudicial & Judicial",
    title: "Divórcio, Partilha e Inventários",
    summary:
      "Regularização célere de divórcios em cartório ou judiciais, união estável e inventários sem entraves.",
    details:
      "Quando há consenso, o divórcio e o inventário extrajudicial em Cartório de Notas oferecem economia de tempo e previsibilidade; havendo litígio, atuamos na proteção rigorosa do patrimônio e do direito real de habitação.",
    legalBasis: "EC 66/2010 · Art. 1.784 CC · Art. 611 CPC",
    image: "/cards/civil.jpg",
    highlights: [
      "Divórcio consensual e união estável com partilha de bens",
      "Abertura ágil de inventário e levantamento de alvarás",
      "Proteção contra dilapidação ou retenção de bens comuns",
    ],
    whatsappMessage:
      "Olá! Gostaria de solicitar atendimento jurídico para divórcio, união estável ou inventário.",
  },
  {
    id: "consumidor-negativacao-aereo",
    categoryId: "consumidor",
    categoryName: "Direito do Consumidor",
    badge: "Código de Defesa do Consumidor",
    title: "Negativação Indevida, Saúde e Voos",
    summary:
      "Liminares rápidas para limpar nome indevido, liberar coberturas de planos de saúde e indenizar falhas graves.",
    details:
      "Defesa do consumidor contra inclusão abusiva em SPC/Serasa, negativas urgentes de cirurgias ou tratamentos médicos, atrasos severos ou cancelamentos de voos e compras online não entregues.",
    legalBasis: "Arts. 14, 18 e 42 CDC · Súmulas 359 e 608 STJ",
    image: "/cards/consumidor.jpg",
    highlights: [
      "Retirada urgente de restrição no CPF/CNPJ e devolução em dobro",
      "Liminares de saúde para cirurgias, exames e terapias",
      "Indenização por cancelamento de voo e extravio de bagagem",
    ],
    whatsappMessage:
      "Olá! Gostaria de consultar um advogado sobre Direito do Consumidor (negativação, plano de saúde ou voo).",
  },
  {
    id: "bancario-fraudes-juros",
    categoryId: "bancario",
    categoryName: "Direito Bancário",
    badge: "Proteção Financeira",
    title: "Golpes no Pix, Consignado e Juros",
    summary:
      "Cancelamento de empréstimos não contratados, devolução de descontos no INSS e proteção contra fraudes digitais.",
    details:
      "Instituições financeiras respondem objetivamente por falhas na segurança digital e contratação fraudulenta em nome do cliente, cabendo suspensão liminar dos descontos e recomposição do patrimônio.",
    legalBasis: "Súmula 479 STJ · Art. 833 IV CPC · Tema 28 STJ",
    image: "/cards/bancario.jpg",
    highlights: [
      "Suspensão urgente de empréstimo consignado não solicitado",
      "Responsabilidade bancária em golpes digitais e invasão de app",
      "Desbloqueio de verba salarial e revisão de taxas acima da média BACEN",
    ],
    whatsappMessage:
      "Olá! Preciso falar com um advogado sobre fraude bancária, empréstimo não reconhecido ou juros abusivos.",
  },
  {
    id: "civil-contratos-imoveis",
    categoryId: "civil",
    categoryName: "Direito Cível",
    badge: "Segurança Patrimonial",
    title: "Contratos, Imóveis e Indenizações",
    summary:
      "Revisão contratual, cobrança e execução de dívidas, usucapião, locação e responsabilidade civil.",
    details:
      "Prevenção e solução de conflitos envolvendo negócios particulares, distratos, locação residencial/comercial, regularização de imóveis e reparação integral por danos materiais, morais e estéticos.",
    legalBasis: "Arts. 186 e 927 CC · Art. 784 CPC · Lei 8.245/91",
    image: "/escritorio_editorial.jpg",
    highlights: [
      "Elaboração e revisão segura de contratos e distratos",
      "Usucapião extrajudicial em cartório ou judicial e reintegração",
      "Ações indenizatórias por danos materiais e morais",
    ],
    whatsappMessage:
      "Olá! Gostaria de buscar orientação jurídica na área de Direito Cível e contratos.",
  },
];
