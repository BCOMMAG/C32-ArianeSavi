export interface EducationalArticle {
  id: string;
  category: string;
  readTime: string;
  image: string;
  title: string;
  excerpt: string;
  keyPoints: string[];
  legalNote: string;
  whatsappTopic: string;
}

export const EDUCATIONAL_ARTICLES: EducationalArticle[] = [
  {
    id: "valores-a-receber-trabalho",
    category: "Direito do Trabalho",
    readTime: "3 min de leitura",
    image: "/guide_valores.jpg",
    title: "Você pode ter valores a receber da empresa onde trabalhou e não saber",
    excerpt:
      "Muitos trabalhadores encerram o contrato acreditando que o acerto foi correto, mas erros no cálculo de horas extras, depósitos de FGTS ou férias passam despercebidos.",
    keyPoints: [
      "Confira o extrato analítico do FGTS no aplicativo oficial: depósitos ausentes ou em atraso geram direito à cobrança com multa de 40% na dispensa sem justa causa.",
      "Horas fora do registro de ponto (chegada antecipada, mensagens corporativas pós-expediente ou almoço reduzido) refletem em 13º, férias e FGTS.",
      "O aviso prévio proporcional acrescenta 3 dias por ano na empresa (até 90 dias), além do prazo legal de 10 dias para quitação rescisória (Art. 477 CLT).",
    ],
    legalNote: "Prazo de até 2 anos após o término do contrato para cobrar os últimos 5 anos.",
    whatsappTopic:
      "Olá! Li a orientação sobre valores a receber na rescisão e gostaria de solicitar uma análise com um advogado.",
  },
  {
    id: "pejotizacao-e-vinculo",
    category: "Direito do Trabalho",
    readTime: "4 min de leitura",
    image: "/cards/pj_vinculo.jpg",
    title: "Trabalho como PJ ou sem carteira assinada: quando a lei reconhece o vínculo",
    excerpt:
      "Exigir abertura de MEI ou CNPJ para encobrir uma rotina comum de empregado pode configurar fraude trabalhista, garantindo acesso retroativo a férias, 13º e FGTS.",
    keyPoints: [
      "Presença de subordinação (cumprimento de ordens diretas e metas), habitualidade (dias e horários fixos), pessoalidade e pagamento mensal.",
      "Mensagens de cobrança de horário, e-mails corporativos, crachás e comprovantes bancários recorrentes funcionam como prova documental.",
      "O princípio da primazia da realidade faz os fatos cotidianos prevalecerem sobre contratos meramente formais.",
    ],
    legalNote: "Fundamentação: Arts. 2º, 3º e 9º da CLT.",
    whatsappTopic:
      "Olá! Gostaria de conversar com um advogado sobre trabalho sem registro em carteira ou contrato PJ.",
  },
  {
    id: "pensao-guarda-divorcio",
    category: "Direito de Família",
    readTime: "3 min de leitura",
    image: "/cards/familia.jpg",
    title: "Pensão alimentícia e divórcio: mitos comuns e proteção jurídica imediata",
    excerpt:
      "Decisões familiares exigem serenidade e clareza técnica para proteger filhos e assegurar uma partilha justa de bens sem desgastes desnecessários.",
    keyPoints: [
      "A pensão não tem percentual fixo automático de 30%; ela obedece ao trinômio necessidade de quem recebe, possibilidade de quem paga e proporcionalidade.",
      "Divórcios consensuais podem ser formalizados rapidamente em Cartório de Notas com assistência obrigatória de advogado.",
      "O não pagamento permite execução sob pena de prisão civil das últimas 3 parcelas vencidas e das que vencerem no curso da ação (Art. 528 CPC).",
    ],
    legalNote: "Tramitação protegida por Segredo de Justiça (Art. 189, II CPC).",
    whatsappTopic:
      "Olá! Gostaria de orientações jurídicas sobre pensão alimentícia, guarda ou divórcio.",
  },
  {
    id: "golpes-pix-voos-saude",
    category: "Consumidor & Bancário",
    readTime: "4 min de leitura",
    image: "/cards/consumidor.jpg",
    title: "Consignado não reconhecido, Pix ou voo cancelado: como agir sem perder prazos",
    excerpt:
      "Bancos e prestadores de serviço respondem objetivamente por falhas na segurança digital e descumprimentos que geram prejuízo ao consumidor.",
    keyPoints: [
      "Registre imediatamente boletim de ocorrência e conteste no canal oficial do banco (acionando o MED em caso de Pix) guardando protocolos.",
      "Em empréstimos consignados fraudulentos, a Súmula 479 do STJ ampara o cancelamento do contrato e a restituição em dobro de descontos indevidos.",
      "Atrasos de voo acima de 4h, extravio de bagagem e negativas urgentes de planos de saúde admitem medidas liminares ágeis.",
    ],
    legalNote: "Base legal: Art. 14 e Art. 42 do CDC · Súmula 479 do STJ.",
    whatsappTopic:
      "Olá! Preciso falar com um advogado sobre cobrança bancária indevida, golpe digital ou direito do consumidor.",
  },
];
