export interface EducationalArticle {
  id: string;
  category: string;
  readTime: string;
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
    title: "Você pode ter valores a receber da empresa onde trabalhou e não saber",
    excerpt:
      "Muitos trabalhadores encerram o contrato acreditando que o valor pago no acerto está completo, mas erros no cálculo de horas extras, depósitos do FGTS ou férias não gozadas passam despercebidos.",
    keyPoints: [
      "Confira o extrato analítico do FGTS no aplicativo oficial: depósitos ausentes ou em atraso geram direito à cobrança com multa de 40% na dispensa sem justa causa.",
      "Horas registradas fora do ponto (como início antecipado, WhatsApp corporativo pós-expediente ou intervalo de almoço reduzido) devem integrar os reflexos em 13º e férias.",
      "O aviso prévio proporcional acrescenta 3 dias por ano trabalhado na mesma empresa (até 90 dias), além do prazo legal de 10 dias para pagamento da rescisão (Art. 477 CLT).",
    ],
    legalNote: "Prazo de até 2 anos após o término do contrato para reclamar os últimos 5 anos.",
    whatsappTopic:
      "Olá! Li o artigo sobre possíveis valores a receber na rescisão e gostaria de solicitar uma análise com um advogado.",
  },
  {
    id: "pejotizacao-e-vinculo",
    category: "Direito do Trabalho",
    readTime: "4 min de leitura",
    title: "Trabalho como PJ ou sem carteira assinada: quando a lei reconhece o vínculo",
    excerpt:
      "A exigência de abertura de MEI ou CNPJ para encobrir uma rotina comum de empregado pode configurar fraude trabalhista, garantindo acesso retroativo a férias, 13º e FGTS.",
    keyPoints: [
      "Presença de subordinação (cumprimento de ordens diretas e metas), habitualidade (dias e horários fixos), pessoalidade e pagamento mensal.",
      "Mensagens de cobrança de horário, e-mails corporativos, crachás e comprovantes de transferência recorrente servem como prova documental.",
      "O princípio da primazia da realidade faz com que os fatos cotidianos prevaleçam sobre o contrato formal de prestação de serviços.",
    ],
    legalNote: "Fundamentação: Arts. 2º, 3º e 9º da CLT.",
    whatsappTopic:
      "Olá! Gostaria de conversar com um advogado sobre trabalho sem registro em carteira ou contrato PJ.",
  },
  {
    id: "pensao-guarda-divorcio",
    category: "Direito de Família",
    readTime: "3 min de leitura",
    title: "Pensão alimentícia e divórcio: o que é mito e o que garante proteção imediata",
    excerpt:
      "Decisões familiares exigem serenidade e clareza técnica para proteger filhos menores e assegurar a partilha justa de bens sem desgastes desnecessários.",
    keyPoints: [
      "A pensão não é fixada em percentual fixo automático de 30%; ela obedece ao trinômio necessidade de quem recebe, possibilidade de quem paga e proporcionalidade.",
      "Divórcios consensuais sem filhos menores ou incapazes podem ser feitos rapidamente em Cartório de Notas com acompanhamento obrigatório de advogado.",
      "O não pagamento de alimentos permite execução sob pena de prisão civil das últimas 3 parcelas vencidas e das que vencerem no curso da ação (Art. 528 do CPC).",
    ],
    legalNote: "Tramitação protegida por Segredo de Justiça (Art. 189, II do CPC).",
    whatsappTopic:
      "Olá! Gostaria de orientações jurídicas sobre pensão alimentícia, guarda ou divórcio.",
  },
  {
    id: "golpes-pix-voos-saude",
    category: "Consumidor & Bancário",
    readTime: "4 min de leitura",
    title: "Empréstimo consignado não reconhecido, Pix ou voo cancelado: como agir rápido",
    excerpt:
      "Instituições financeiras e prestadores de serviço respondem objetivamente por falhas na segurança digital e descumprimentos contratuais que causam prejuízo ao consumidor.",
    keyPoints: [
      "Registre imediatamente o boletim de ocorrência e conteste a transação no canal oficial do banco (e acione o MED no caso de Pix) guardando os protocolos.",
      "Em empréstimos consignados contratados por fraude, a jurisprudência (Súmula 479 do STJ) reconhece o cancelamento do contrato e restituição em dobro de descontos indevidos.",
      "Atrasos de voo acima de 4 horas, cancelamentos sem assistência ou negativa urgente de plano de saúde permitem pedidos liminares rápidos para resguardar seus direitos.",
    ],
    legalNote: "Base legal: Art. 14 e Art. 42 do CDC · Súmula 479 do STJ.",
    whatsappTopic:
      "Olá! Preciso falar com um advogado sobre cobrança bancária indevida, golpe digital ou direito do consumidor.",
  },
];
