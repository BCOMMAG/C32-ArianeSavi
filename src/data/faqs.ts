export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  whatsappMessage: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "prazo-trabalhista",
    category: "Trabalhista",
    question: "Qual é o prazo máximo para entrar com uma ação trabalhista após sair da empresa?",
    answer:
      "Pela Constituição Federal e pela CLT, o trabalhador possui até 2 (dois) anos contados do término do contrato (considerando a projeção do aviso prévio) para ingressar com a reclamação trabalhista, podendo cobrar verbas devidas dos últimos 5 (cinco) anos anteriores ao ajuizamento.",
    whatsappMessage:
      "Olá! Tenho uma dúvida sobre o prazo máximo para entrar com ação trabalhista após sair da empresa. Gostaria de saber mais no WhatsApp.",
  },
  {
    id: "provas-whatsapp",
    category: "Provas Digitais",
    question: "Conversas de WhatsApp, áudios e e-mails servem como prova em processos judiciais?",
    answer:
      "Sim. Prints de conversas, relatórios de ponto paralelos, áudios e até gravações ambientais feitas por um dos interlocutores (conforme entendimento consolidado do STF) são aceitos como prova lícita. O ideal é preservar os arquivos originais e jamais apagar os diálogos.",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre como utilizar conversas de WhatsApp e provas digitais em uma ação judicial.",
  },
  {
    id: "justica-gratuita",
    category: "Custos e Acesso",
    question: "Preciso pagar custas judiciais se estiver desempregado ou com renda limitada?",
    answer:
      "A legislação prevê a concessão dos benefícios da Justiça Gratuita para quem comprovar insuficiência de recursos para arcar com as despesas processuais (e, na Justiça do Trabalho, de forma objetiva para quem recebe salário igual ou inferior a 40% do teto do RGPS). O caso é analisado individualmente antes de qualquer protocolo.",
    whatsappMessage:
      "Olá! Gostaria de esclarecer dúvidas sobre Justiça Gratuita e funcionamento dos honorários advocatícios.",
  },
  {
    id: "pensao-porcentagem",
    category: "Família",
    question: "Existe um valor ou percentual fixo de 30% obrigatório para pensão alimentícia?",
    answer:
      "Não existe tabela rígida em lei. O juiz avalia sempre o trinômio necessidade de quem pede (despesas escolares, saúde, moradia e alimentação), possibilidade financeira de quem paga e proporcionalidade entre os genitores, inclusive podendo estipular em percentual sobre o salário líquido ou fração do salário mínimo.",
    whatsappMessage:
      "Olá! Tenho dúvida sobre o cálculo da pensão alimentícia (valor ou percentual) e gostaria de falar com um advogado.",
  },
  {
    id: "inventario-extrajudicial",
    category: "Sucessões",
    question: "É possível fazer divórcio ou inventário rápido em cartório?",
    answer:
      "Sim. Quando existe consenso entre as partes sobre a partilha de bens e todos os envolvidos são capazes (ou cumpridos os requisitos normativos vigentes com assistência advocatícia e participação ministerial quando cabível), o procedimento extrajudicial em Cartório de Notas é significativamente mais célere que a via judicial contenciosa. Lembrando que para o inventário, o prazo legal de abertura sem multa estadual no ITCMD é de 60 dias do óbito.",
    whatsappMessage:
      "Olá! Gostaria de saber se o meu caso de divórcio ou inventário pode ser realizado de forma extrajudicial em cartório.",
  },
  {
    id: "negativacao-golpe-banco",
    category: "Bancário & Consumidor",
    question: "Sofri desconto de empréstimo não autorizado no benefício ou negativação indevida. O que fazer?",
    answer:
      "É fundamental reunir extratos bancários, comprovante do protocolo de contestação no banco ou Boletim de Ocorrência. Pela Súmula 479 do STJ e pelo Código de Defesa do Consumidor, o banco responde objetivamente por falhas na segurança, podendo ser obrigado judicialmente a cancelar o contrato, restituir valores descontados e reparar os danos causados.",
    whatsappMessage:
      "Olá! Sofri um problema com empréstimo não autorizado ou negativação indevida e gostaria de buscar orientação jurídica.",
  },
  {
    id: "atendimento-online",
    category: "Atendimento",
    question: "O escritório atende apenas em Curitiba ou também de forma online?",
    answer:
      "O escritório físico está localizado na Av. Winston Churchill, 1824, bairro Capão Raso, em Curitiba/PR, para atendimento presencial com horário agendado. Além disso, realizamos atendimentos e protocolos 100% digitais com validade jurídica em todo o Brasil via videoconferência e assinatura eletrônica.",
    whatsappMessage:
      "Olá! Gostaria de agendar um atendimento presencial em Curitiba ou uma consulta jurídica online.",
  },
];
