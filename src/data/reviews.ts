export interface GoogleReview {
  id: string;
  author: string;
  text: string;
  rating: 5;
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "gabrielly",
    author: "Gabrielly Zica Padilha",
    rating: 5,
    text: "Agradeço imensamente à Dra. Ariane por todo o cuidado, atenção e profissionalismo desde o primeiro contato. Sempre muito clara, justa e dedicada, conduziu todo o processo com segurança e humanidade, o que fez toda a diferença.",
  },
  {
    id: "karen",
    author: "Karen Siebert",
    rating: 5,
    text: "Profissional excelente! Ao longo de todo o processo, foi sempre muito atenta aos detalhes, clara nas explicações e cumpriu todos os prazos com pontualidade. Demonstrou total comprometimento e responsabilidade, o que me transmitiu muita segurança.",
  },
  {
    id: "rafael",
    author: "Rafael Cabral",
    rating: 5,
    text: "Muito grato pelo serviço prestado pela doutora Ariane Savi e sua equipe... Agilidade, atenção, confiança... Melhores de Curitiba-PR, gratidão a todos!",
  },
  {
    id: "douglas",
    author: "Douglas Alber Olivares Aguilera",
    rating: 5,
    text: "Excelente serviço, fiquei muito satisfeito com a atenção e o profissionalismo.",
  },
  {
    id: "luciano",
    author: "Luciano Silva",
    rating: 5,
    text: "Atendimento claro e direto, com acompanhamento constante do processo. Recomendo o escritório pelo cuidado técnico e respeito ao cliente.",
  },
  {
    id: "camila",
    author: "Camila Ferreira",
    rating: 5,
    text: "Fui muito bem orientada sobre os meus direitos desde a primeira conversa. Transparência e tranquilidade em um momento difícil.",
  },
];
