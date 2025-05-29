export const cards = [
  // Snake Game
  {
    name: "Snake Game",
    dev: ["Dev Rafael", "https://rafaelcostasilva1501.github.io/Portfolio/"],
    release: "27 de Set 2024",
    banner: ["img/banner/snake-game.webp", "Snake Game Banner"],
    portrait: ["img/portrait/snake-game.png", "Snake Game Portrait"],
    description:
      "O clássico que nunca sai de moda! Controle uma cobrinha faminta e desafie seus reflexos enquanto coleta alimentos para crescer cada vez mais. Quanto maior você fica, mais difícil é se mover sem se enrolar! Desvie dos próprios movimentos, ultrapasse seus recordes e mostre quem é o mestre!",
    link: "https://rafaelcostasilva1501.github.io/Snake-Game/",
    github: "https://github.com/RafaelCostaSIlva1501/Snake-Game",
    tags: [
      ["Mobile", "phone_iphone"],
      ["Desktop", "computer"],
      ["Um Jogador", "person"],
      ["Teclado", "keyboard"],
      ["Web", "Language"],
    ],
    icon: ["js", "html5", "css3"],
    update: [
      {
        date: "10.03.2025",
        banner: ["img/snake-update.jpg", "Banner de update"],
        updates: [
          // Novos Temas
          {
            title: "Novos Temas",
            items: [
              "Selva, Outono, Ártico, Vulcânico, Noite, Deserto, Nebulosa, Caverna, Oceano, Tóxico",
            ],
          },

          // Correção de bugs
          {
            title: "Correção de bugs",
            items: [
              "- Corrigido um erro onde a cobrinha se movia para a direção oposta rapidamente, atravessando seu corpo. Agora, a cobrinha não pode mais mudar diretamente para a direção oposta.",

              "- Corrigido um problema onde a cobrinha morria antes de alcançar os limites do canvas. Agora, a colisão só ocorre quando a cabeça da cobrinha realmente atinge a borda do tabuleiro.",

              "- Corrigido um problema onde o placar era atualizado antes da cobrinha realmente pegar a comida. Agora, a pontuação só é incrementada após a colisão ser confirmada, garantindo uma exibição precisa do progresso do jogador.",
            ],
          },

          // Melhorias no código
          {
            title: "Melhorias no código",
            items: [
              "Foram realizadas diversas melhorias no código para aprimorar sua manutenção, legibilidade e organização. A estrutura foi refinada para tornar o código mais modular, permitindo que futuras alterações sejam feitas de forma mais simples e sem impactos indesejados em outras partes do projeto.",

              "Além disso, nomes de variáveis e funções foram ajustados para serem mais descritivos, tornando seu propósito mais claro e facilitando a compreensão do fluxo de execução. Comentários também foram adicionados e revisados para garantir explicações mais detalhadas dos trechos-chave do código, ajudando tanto na leitura quanto na manutenção futura.",

              "Algumas lógicas repetitivas foram refatoradas para evitar redundâncias e melhorar a reutilização do código, tornando-o mais eficiente. Pequenos bugs visuais e lógicos também foram corrigidos, garantindo um funcionamento mais previsível e sem inconsistências.",

              "Com essas melhorias, o código se torna mais limpo, organizado e fácil de expandir, contribuindo para a evolução contínua do projeto.",
            ],
          },
        ],
      },
    ],
  },

  // Pixelart
  {
    name: "Pixelart",
    banner: ["img/banner/pixelart.webp", "Pixelart Banner"],
    description:
      "Dê vida à sua criatividade! Neste game de pixel art, você cria, desenha e colore suas próprias artes pixeladas de forma divertida e intuitiva.",
    link: "https://rafaelcostasilva1501.github.io/Pixelart/",
    github: "https://github.com/RafaelCostaSIlva1501/Pixelart",
    icon: ["js", "html5", "css3"],
  },

  // Paint
  {
    name: "Paint",
    banner: ["img/banner/paint.jpg", "Paint Banner"],
    description:
      "Desenhe e pinte com facilidade, criando obras digitais com uma paleta intuitiva e ferramentas simples!",
    link: "https://rafaelcostasilva1501.github.io/Paint/",
    github: "https://github.com/RafaelCostaSIlva1501/Paint",
    icon: ["js", "html5", "css3"],
  },

  // Piano
  {
    name: "Piano",
    banner: ["img/banner/piano.webp", "Piano Banner"],
    description:
      "Transforme seu teclado em um piano e toque músicas enquanto explora novas melodias de forma divertida!",
    link: "https://rafaelcostasilva1501.github.io/Piano/",
    github: "https://github.com/RafaelCostaSIlva1501/Piano",
    icon: ["js", "html5", "css3"],
  },

  // Space Invaders
  {
    name: "Space Invaders",
    banner: ["img/banner/space-invaders.jpg", "Space Invaders Banner"],
    description:
      "Controle sua nave e enfrente ondas de inimigos espaciais em batalhas cada vez mais desafiadoras!",
    link: "",
    github: "",
    icon: ["js", "html5", "css3"],
  },

  // Brick Breaker
  {
    name: "Brick Breaker",
    banner: ["img/banner/brick-breaker.jpg", "Brick Breaker Banner"],
    description:
      "Quebre os blocos com uma bola enquanto controla a barra para evitar que ela caia, neste clássico desafio de reflexos!",
    link: "",
    github: "",
    icon: ["js", "html5", "css3"],
  },
];
