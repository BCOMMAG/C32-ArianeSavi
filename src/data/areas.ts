export interface PracticeTopic {
  title: string;
  summary: string;
  legalBasis?: string;
}

export interface PracticeArea {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  badge: string;
  headline: string;
  description: string;
  ctaLabel: string;
  whatsappPrefill: string;
  topics: PracticeTopic[];
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "trabalhista",
    slug: "direito-do-trabalho",
    name: "Direito do Trabalho",
    shortName: "Trabalhista",
    badge: "Especialidade Principal",
    headline: "Você pode ter valores a receber e não sabe.",
    description:
      "Atuação técnica na defesa dos direitos de trabalhadores urbanos, rurais, temporários e domésticos. Auditoria completa de cálculos trabalhistas, reversão de irregularidades e busca pela integralidade de verbas devidas.",
    ctaLabel: "Consultar Advogado Trabalhista",
    whatsappPrefill:
      "Olá! Gostaria de consultar um advogado sobre uma questão de Direito do Trabalho e verificar possíveis verbas a receber.",
    topics: [
      {
        title: "Horas Extras e Banco de Horas Irregular",
        summary:
          "Apuração de jornada além das 8h diárias/44h semanais, horas in itinere suprimidas, registros britânicos inválidos e adicional mínimo de 50% ou 100% em domingos e feriados.",
        legalBasis: "Art. 59 da CLT e Súmula 338 do TST",
      },
      {
        title: "Verbas Rescisórias e Vínculo sem Registro (CTPS)",
        summary:
          "Cobrança de saldo de salário, férias + 1/3, 13º proporcional, aviso prévio proporcional, liberação de FGTS + multa de 40%, além de reconhecimento de vínculo em caso de pejotização fraudulenta.",
        legalBasis: "Arts. 3º, 467 e 477 da CLT · Lei 12.506/11",
      },
      {
        title: "Rescisão Indireta e Reversão de Justa Causa",
        summary:
          "Pedido de desligamento com recebimento integral das verbas quando há falta grave do empregador (atraso salarial, ausência de FGTS, rigor excessivo) ou anulação de justa causa abusiva.",
        legalBasis: "Arts. 482 e 483 da CLT",
      },
      {
        title: "Acidente de Trabalho, Doença Ocupacional e Limbo Previdenciário",
        summary:
          "Estabilidade provisória de 12 meses após alta do auxílio-doença acidentário (B91), indenização por danos morais/materiais (LER/DORT, Burnout) e salários no limbo entre INSS e empresa.",
        legalBasis: "Art. 118 da Lei 8.213/91",
      },
      {
        title: "Insalubridade, Periculosidade e Adicional Noturno",
        summary:
          "Cobrança de adicionais por exposição a agentes nocivos (10%, 20% ou 40%), risco acentuado com inflamáveis/eletricidade/motocicleta (30%) e trabalho entre 22h e 5h com hora reduzida.",
        legalBasis: "Arts. 73, 189 e 193 da CLT · NRs 15 e 16",
      },
      {
        title: "Assédio Moral, Desvio de Função e Estabilidades",
        summary:
          "Proteção contra metas abusivas e humilhações, diferenças salariais por acúmulo/desvio de função ou equiparação salarial, além de defesa da estabilidade da gestante e cipeiro.",
        legalBasis: "Arts. 10 II ADCT, 461 e 223-A da CLT",
      },
    ],
  },
  {
    id: "familia",
    slug: "direito-de-familia-e-sucessoes",
    name: "Direito de Família e Sucessões",
    shortName: "Família e Sucessões",
    badge: "Sigilo e Acolhimento",
    headline: "Soluções jurídicas seguras para relações familiares e patrimônio.",
    description:
      "Condução humanizada, sob rigoroso segredo de justiça quando aplicável, em demandas de divórcio, pensão alimentícia, guarda de filhos e regularização patrimonial em inventários e partilhas.",
    ctaLabel: "Conversar com Advogado de Família",
    whatsappPrefill:
      "Olá! Gostaria de buscar orientação jurídica na área de Direito de Família e Sucessões.",
    topics: [
      {
        title: "Pensão Alimentícia, Revisional e Execução",
        summary:
          "Fixação com base no trinômio necessidade, possibilidade e proporcionalidade, pedido de revisão ou exoneração e cobrança de atrasados sob pena de prisão civil ou penhora de bens.",
        legalBasis: "Lei 5.478/68 · Arts. 523 e 528 do CPC",
      },
      {
        title: "Divórcio Consensual, Litigioso e União Estável",
        summary:
          "Divórcio direto em cartório ou judicial, dissolução e reconhecimento de união estável, partilha equitativa de imóveis, veículos e dívidas sob o regime de bens aplicável.",
        legalBasis: "EC 66/2010 · Art. 1.723 do Código Civil",
      },
      {
        title: "Guarda Compartilhada, Convivência e Alienação Parental",
        summary:
          "Definição de residência base e regime equilibrado de visitas priorizando o melhor interesse da criança, além de medidas contra atos de alienação parental.",
        legalBasis: "Lei 13.058/14 · Lei 12.318/10",
      },
      {
        title: "Inventário Judicial, Extrajudicial e Alvarás",
        summary:
          "Regularização de heranças em cartório (mais célere e econômico quando há consenso) ou via judicial com proteção ao direito real de habitação do cônjuge sobrevivente e levantamento de valores.",
        legalBasis: "Art. 1.784 CC · Art. 611 CPC · Lei 6.858/80",
      },
      {
        title: "Reconhecimento de Paternidade e Multiparentalidade",
        summary:
          "Ações de investigação de paternidade com pedido de exame de DNA e reconhecimento judicial ou em cartório de filiação socioafetiva.",
        legalBasis: "Súmula 301 STJ · Tema 622 STF",
      },
      {
        title: "Medidas Protetivas, Curatela e Planejamento Familiar",
        summary:
          "Acompanhamento de medidas de urgência, curatela de pessoas incapazes, pactos antenupciais e contratos de convivência para segurança jurídica prévia.",
        legalBasis: "Lei 11.340/06 · Estatuto da Pessoa com Deficiência",
      },
    ],
  },
  {
    id: "consumidor",
    slug: "direito-do-consumidor",
    name: "Direito do Consumidor",
    shortName: "Consumidor",
    badge: "Código de Defesa do Consumidor",
    headline: "Reparação eficaz contra abusos contratuais e falhas na prestação de serviços.",
    description:
      "Atuação baseada no Código de Defesa do Consumidor (CDC) para cancelar cobranças indevidas, corrigir prejuízos financeiros e assegurar direitos diante de fornecedores, companhias aéreas e operadoras de saúde.",
    ctaLabel: "Solicitar Atendimento ao Consumidor",
    whatsappPrefill:
      "Olá! Gostaria de falar com um advogado sobre um problema de Direito do Consumidor.",
    topics: [
      {
        title: "Negativação Indevida (SPC/Serasa) e Repetição de Indébito",
        summary:
          "Retirada liminar urgente de apontamentos por dívidas pagas, prescritas ou inexistentes, aliada à restituição em dobro de valores cobrados indevidamente.",
        legalBasis: "Art. 42, parágrafo único do CDC · Súmulas 359 e 385 STJ",
      },
      {
        title: "Transporte Aéreo: Voos Cancelados, Atrasos e Bagagem",
        summary:
          "Assistência material não prestada, overbooking, perda de conexão, atraso superior a 4 horas ou extravio definitivo de bagagens.",
        legalBasis: "CDC e Resolução 400 da ANAC",
      },
      {
        title: "Planos de Saúde e Negativas de Cobertura",
        summary:
          "Tutelas de urgência em até 24h contra negativas abusivas de cirurgias, home care, exames ou terapias multidisciplinares, além de revisão de reajustes por faixa etária.",
        legalBasis: "Lei 9.656/98 · Súmula 608 STJ · Tema 952 STJ",
      },
      {
        title: "Compras Online, Vícios de Produto e Atraso de Imóveis",
        summary:
          "Responsabilidade solidária de marketplaces por entrega não realizada, direito de arrependimento em 7 dias, troca de produto defeituoso sem reparo em 30 dias e atraso na entrega de imóvel.",
        legalBasis: "Arts. 18, 35 e 49 do CDC · Temas 970 e 971 STJ",
      },
    ],
  },
  {
    id: "civil",
    slug: "direito-civil",
    name: "Direito Cível",
    shortName: "Cível",
    badge: "Contratos, Imóveis e Indenizações",
    headline: "Segurança jurídica patrimonial, contratual e responsabilidade civil.",
    description:
      "Assessoria consultiva e contenciosa voltada à elaboração e revisão de contratos, recuperação de crédito, proteção possessória e reparação integral de danos materiais, morais e estéticos.",
    ctaLabel: "Buscar Orientação Jurídica Cível",
    whatsappPrefill:
      "Olá! Preciso de orientação jurídica na área de Direito Cível.",
    topics: [
      {
        title: "Elaboração, Revisão e Distrato de Contratos",
        summary:
          "Prevenção de litígios em contratos de compra e venda, locação, prestação de serviços e distrato imobiliário com restituição proporcional de valores.",
        legalBasis: "Art. 421 e seguintes do Código Civil · Lei 13.786/18",
      },
      {
        title: "Responsabilidade Civil e Indenizações",
        summary:
          "Reparação por acidentes de trânsito, danos à honra/imagem, erro médico ou hospitalar e falhas graves em serviços técnicos, incluindo lucros cessantes e dano estético cumulável.",
        legalBasis: "Arts. 186 e 927 do CC · Súmula 387 STJ",
      },
      {
        title: "Cobrança, Execução de Títulos e Despejo",
        summary:
          "Ações monitórias e execuções de notas promissórias, cheques ou contratos com assinatura de testemunhas, além de ações locatícias de despejo e revisional de aluguel.",
        legalBasis: "Art. 784 CPC · Lei 8.245/91 (Lei do Inquilinato)",
      },
      {
        title: "Direito Imobiliário: Usucapião e Ações Possessórias",
        summary:
          "Regularização registral de imóveis por usucapião judicial ou extrajudicial em cartório, reintegração e manutenção de posse e direito de vizinhança.",
        legalBasis: "Art. 1.238 CC · Art. 216-A da Lei de Registros Públicos",
      },
    ],
  },
  {
    id: "bancario",
    slug: "direito-bancario",
    name: "Direito Bancário",
    shortName: "Bancário",
    badge: "Proteção Financeira",
    headline: "Defesa contra fraudes bancárias, empréstimos consignados não solicitados e juros abusivos.",
    description:
      "Análise técnica de contratos bancários e defesa rápida em fraudes digitais, com foco na preservação do mínimo existencial, desconstituição de débitos fraudulentos e revisão de cláusulas abusivas.",
    ctaLabel: "Falar com Advogado Bancário",
    whatsappPrefill:
      "Olá! Gostaria de consultar um advogado sobre uma demanda de Direito Bancário.",
    topics: [
      {
        title: "Golpes Digitais, Fraudes no Pix e Consignados Indevidos",
        summary:
          "Responsabilidade objetiva da instituição financeira por falha de segurança em empréstimos contratados por terceiros, invasão de aplicativo, falsa central e descontos ilegais em benefício do INSS.",
        legalBasis: "Súmula 479 do STJ · Art. 14 do CDC",
      },
      {
        title: "Revisão de Juros Abusivos e Venda Casada",
        summary:
          "Comparação pericial com a Taxa Média de Mercado do Banco Central (BACEN), afastamento de seguros prestamistas ou tarifas embutidas sem anuência (TAC/TEC) e recálculo do saldo.",
        legalBasis: "Tema 28 e Súmulas 539 e 541 do STJ",
      },
      {
        title: "Defesa em Busca e Apreensão e Penhoras Indevidas",
        summary:
          "Atuação urgente em apreensão de veículos financiados (análise de notificação e adimplemento substancial), bem como desbloqueio de salários e aposentadorias atingidos via Sisbajud.",
        legalBasis: "Decreto-Lei 911/69 · Art. 833, IV do CPC",
      },
      {
        title: "Proteção do Bem de Família e Renegociação Estruturada",
        summary:
          "Afastamento de constrições sobre o único imóvel residencial da família e revisão de dívidas com encargos moratórios abusivos ou comissão de permanência cumulada.",
        legalBasis: "Lei 8.009/90 · Súmula 472 do STJ",
      },
    ],
  },
];
