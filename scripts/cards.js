export const cards = [
  // Mico
  {
    name: "Medieval Clicker",
    access: "clicker",
    dev: ["Dev Rafael", "https://rafaelcostasilva1501.github.io/Portfolio/"],
    release: "Em desenvolvimento",
    description: "",
    link: "#",
    github: "#",
    update: [],
  },

  // Mico
  {
    name: "Mico",
    access: "mico",
    dev: ["Dev Rafael", "https://rafaelcostasilva1501.github.io/Portfolio/"],
    release: "Em desenvolvimento",
    description:
      "Em Mico, você é um gatinho minerador focado e determinado que explora cavernas em busca de pedras preciosas e minerais raros. Com planejamento, upgrades e estratégias, enfrenta desafios e inimigos, transformando a mineração em um trabalho sério, não apenas uma aventura.",
    link: "#",
    github: "#",
    update: [],
  },

  // Snake Game
  {
    name: "Snake Game",
    access: "snake-game",
    dev: ["Dev Rafael", "https://rafaelcostasilva1501.github.io/Portfolio/"],
    release: "27 de Set 2024",
    description:
      "O clássico que nunca sai de moda! Controle uma cobrinha faminta e desafie seus reflexos enquanto coleta alimentos para crescer cada vez mais.",
    link: "https://rafaelcostasilva1501.github.io/Snake-Game/",
    github: "https://github.com/RafaelCostaSIlva1501/Snake-Game",
    update: [
      {
        date: "10.03.2025",
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
    documentation: [
      {
        title: "Documentação do Jogo Snake",
        text: [
          "Este projeto é uma implementação do clássico jogo Snake, utilizando HTML5 Canvas e JavaScript Modular. A estrutura do código foi organizada em diferentes módulos para facilitar a manutenção, expansão e compreensão de cada funcionalidade.",
        ],
      },

      {
        title: "Estrutura e Funcionamento Geral",
        text: [
          "O jogo é dividido em diversos arquivos JavaScript, cada um responsável por uma parte específica da lógica. A renderização gráfica ocorre dentro de um elemento <canvas> HTML, enquanto os elementos da interface (como telas de início, fim de jogo e configurações) são manipulados via DOM.",
        ],
      },

      {
        title: "Módulo DOM.js",
        text: [
          "Este módulo centraliza todas as referências aos elementos da interface HTML. Ele facilita o acesso e a manipulação dos componentes visuais do jogo, como o canvas, as telas de menu, os botões de interação e os elementos de exibição de pontuação. Assim, qualquer modificação na estrutura do HTML pode ser facilmente ajustada em um único lugar no código.",
        ],
      },

      {
        title: "Módulo canvas.js",
        text: [
          "Responsável por configurar e desenhar o fundo do jogo dentro do canvas. Ele ajusta automaticamente o tamanho do canvas com base nas dimensões da tela e nas unidades de blocos utilizadas pelo jogo. Além disso, o módulo desenha o padrão quadriculado de fundo, com cores alternadas para melhorar a visibilidade dos elementos durante a jogabilidade.",
        ],
      },

      {
        title: "Módulo food.js",
        text: [
          "Controla o comportamento da comida da cobra. Inclui a geração aleatória da posição da comida dentro dos limites do canvas, sempre alinhada à grade do jogo para manter a consistência com o movimento da cobra.",
        ],
      },

      {
        title: "Módulo snake.js",
        text: [
          "Define todas as propriedades e comportamentos da cobra. Controla o corpo da cobra, sua direção, crescimento e movimentação. Também cuida da renderização da cobra, com estilos diferentes. Além disso, o módulo contém as funções para detecção de colisões com o próprio corpo e para o controle de crescimento quando a cobra come a comida.",
        ],
      },

      {
        title: "Controle de Pontuação e Colisões",
        text: [
          "O jogo inclui um sistema de pontuação que registra a pontuação atual e o recorde alcançado pelo jogador. Toda vez que a cobra consome a comida, a pontuação é atualizada e exibida na interface. A lógica de colisão é responsável por encerrar o jogo caso a cobra colida com as paredes ou com ela mesma.",
        ],
      },
    ],
  },

  // Pixelart
  {
    name: "Pixelart",
    access: "pixelart",
    dev: ["Dev Rafael", "https://rafaelcostasilva1501.github.io/Portfolio/"],
    release: "2 de Dez 2024",
    description:
      "Dê vida à sua criatividade! Neste game de pixel art, você cria, desenha e colore suas próprias artes pixeladas de forma divertida e intuitiva.",
    link: "https://rafaelcostasilva1501.github.io/Pixelart/",
    github: "https://github.com/RafaelCostaSIlva1501/Pixelart",
    update: [],
    documentation: [
      {
        title: "Documentação do Projeto Pixel Art",
        text: [
          "Este projeto é uma aplicação de Pixel Art feita com HTML, CSS e JavaScript. O usuário pode desenhar livremente em um grid de pixels, utilizando diferentes ferramentas como pincel, borracha e grade. Também é possível escolher cores e realizar o download da arte criada.",
        ],
      },

      {
        title: "Estrutura e Funcionamento Geral",
        text: [
          "O projeto utiliza manipulação de DOM para criar um grid de pixels interativo dentro de um elemento HTML. O canvas é gerado dinamicamente com base em um valor de tamanho (length), e cada pixel é representado por uma pequena div. As ações de pintura são feitas via eventos de mouse.",
        ],
      },

      {
        title: "Criação do Canvas",
        text: [
          "A função `loadCanvas` é responsável por gerar a grade de pixels (canvas). Ela cria linhas (divs com a classe 'row') e, dentro de cada linha, insere os pixels individuais (divs com a classe 'pixel'). A quantidade de linhas e colunas é definida pela variável `length`. Há também um placeholder que exibe o tamanho atual do grid na interface.",
        ],
      },

      {
        title: "Ferramentas de Desenho",
        text: [
          "O usuário pode alternar entre duas ferramentas: pincel e borracha. O pincel pinta os pixels com a cor selecionada pelo usuário, enquanto a borracha redefine o pixel para a cor de fundo padrão. A variável `pencil` guarda a ferramenta atualmente ativa, e a função `paintingPixel` executa a ação de pintar ou apagar.",
        ],
      },

      {
        title: "Sistema de Grid",
        text: [
          "O botão de grid permite alternar entre exibir ou ocultar as linhas de separação entre os pixels. Isso é feito alterando os espaçamentos (gap) entre as divs de linha (`row`) e entre os pixels dentro do canvas. O estado do grid é controlado pela variável booleana `gridON`.",
        ],
      },

      {
        title: "Seleção de Cores",
        text: [
          "O projeto inclui uma paleta de cores com botões pré-definidos. Cada botão de cor usa um dataset para armazenar a cor correspondente, e ao ser clicado, essa cor é atribuída ao input de cor (`selectColor`). Assim, o usuário pode escolher rapidamente entre as cores disponíveis ou selecionar manualmente uma cor personalizada.",
        ],
      },

      {
        title: "Eventos de Pintura",
        text: [
          "A pintura funciona com eventos de mouse: `mousedown`, `mouseup`, `mouseleave` e `mouseover`. Enquanto o mouse está pressionado (`isPaiting = true`), o usuário pode arrastar o cursor para pintar múltiplos pixels em sequência. Isso permite um comportamento de 'pintura contínua'.",
        ],
      },

      {
        title: "Download da Arte",
        text: [
          "Ao clicar no botão de download, a função `downloadCanvas` é chamada. Ela utiliza a biblioteca externa `html2canvas` para capturar o conteúdo visual do canvas e gerar uma imagem PNG. O usuário pode então baixar essa imagem localmente com um clique.",
        ],
      },
    ],
  },

  // Paint
  {
    name: "Paint",
    access: "paint",
    dev: ["Dev Rafael", "https://rafaelcostasilva1501.github.io/Portfolio/"],
    release: "26 de Nov 2024",
    description:
      "Desenhe e pinte com facilidade, criando obras digitais com uma paleta intuitiva e ferramentas simples!",
    link: "https://rafaelcostasilva1501.github.io/Paint/",
    github: "https://github.com/RafaelCostaSIlva1501/Paint",
    update: [],
    documentation: [
      {
        title: "Documentação do Projeto Paint Canvas",
        text: [
          "Este projeto é uma aplicação de pintura digital feita com HTML5 Canvas e JavaScript. O usuário pode desenhar livremente, escolher entre diferentes ferramentas (pincel, balde de tinta, borracha e pincel com efeito de crescimento), alterar tamanhos e cores, limpar o canvas e realizar o download do desenho final como uma imagem PNG.",
        ],
      },

      {
        title: "Estrutura e Funcionamento Geral",
        text: [
          "O canvas é ajustado dinamicamente ao tamanho da tela, menos uma margem fixa para melhor responsividade. As dimensões são atualizadas automaticamente sempre que a janela do navegador é redimensionada, graças ao evento de `resize` do JavaScript.",
        ],
      },

      {
        title: "Ferramentas de Desenho",
        text: [
          "O usuário pode escolher entre quatro ferramentas: pincel comum (`brush`), balde de tinta (`bucket`), borracha (`erase`) e pincel com efeito de crescimento (`brush-two`). Cada ferramenta tem um comportamento diferente no método `draw`, que seleciona a função apropriada para renderizar no canvas. A variável `painting.pencil` armazena a ferramenta ativa.",
        ],
      },

      {
        title: "Configuração de Tamanho e Cor",
        text: [
          "O usuário pode alterar o tamanho do pincel escolhendo entre diferentes botões de tamanho (`size`), onde o valor é lido via dataset. A cor também pode ser definida através de uma paleta de botões ou por um seletor de cor (`input type='color'`). A configuração de cor e tamanho é armazenada no objeto `painting`, que centraliza o estado atual da ferramenta.",
        ],
      },

      {
        title: "Eventos de Pintura",
        text: [
          "O canvas responde a três eventos principais: `mousedown`, `mousemove` e `mouseup`. Quando o usuário pressiona o mouse (`mousedown`), o desenho começa. Movendo o mouse com o botão pressionado (`mousemove`), o desenho continua em tempo real. Quando o botão é solto (`mouseup`), o desenho é interrompido. O evento `mouseleave` garante que o desenho também pare caso o mouse saia da área do canvas.",
        ],
      },

      {
        title: "Implementação das Ferramentas",
        text: [
          "Cada ferramenta tem uma função específica para executar o seu efeito visual:\n\n- `brush`: Desenha círculos com o tamanho e cor definidos.\n- `brushTwo`: Pincel com efeito de crescimento gradual, aumentando o raio a cada movimento até um tamanho máximo.\n- `bucket`: Preenche uma grande área simulando um balde de tinta.\n- `erase`: Apaga partes do desenho, usando o modo de composição 'destination-out' do canvas.",
        ],
      },

      {
        title: "Limpar o Canvas",
        text: [
          "O botão de limpar (`clear`) apaga todo o conteúdo do canvas usando o método `clearRect`, que reseta a área de desenho ao estado original (vazio).",
        ],
      },

      {
        title: "Download da Imagem",
        text: [
          "O botão de download captura o conteúdo atual do canvas, transforma-o em uma URL de imagem no formato PNG (`toDataURL`) e dispara o download automático para o computador do usuário. O arquivo é salvo com o nome padrão 'meu_desenho.png'.",
        ],
      },
    ],
  },

  // Piano
  {
    name: "Piano",
    access: "piano",
    dev: ["Dev Rafael", "https://rafaelcostasilva1501.github.io/Portfolio/"],
    release: "26 de Nov 2024",
    description:
      "Transforme seu teclado em um piano e toque músicas enquanto explora novas melodias de forma divertida!",
    link: "https://rafaelcostasilva1501.github.io/Piano/",
    github: "https://github.com/RafaelCostaSIlva1501/Piano",
    update: [],
    documentation: [
      {
        title: "Documentação do Projeto Piano Virtual",
        text: [
          "Este projeto é um piano virtual interativo, desenvolvido com HTML, CSS e JavaScript. O usuário pode tocar notas musicais utilizando tanto o mouse (clicando nas teclas visuais) quanto o teclado físico do computador (através de mapeamento de teclas). Os sons são reproduzidos a partir de arquivos de áudio pré-gravados no formato `.wav`.",
        ],
      },

      {
        title: "Estrutura e Funcionamento Geral",
        text: [
          "O piano é composto por elementos HTML representando as teclas (`.keys`). Cada tecla possui um atributo `data-note` que identifica qual arquivo de áudio deve ser tocado ao interagir com ela. Os sons estão armazenados na pasta `audio/`, com o nome das notas de acordo com o mapeamento numérico usado no código.",
        ],
      },

      {
        title: "Reprodução de Áudio",
        text: [
          "A função `playPiano(nota)` é responsável por tocar o som correspondente a uma determinada nota musical. Ela cria um novo objeto `Audio`, passando como parâmetro o caminho para o arquivo `.wav` da nota, e chama o método `.play()` para reproduzir o som.",
        ],
      },

      {
        title: "Interação por Clique do Mouse",
        text: [
          "Cada tecla na interface HTML escuta o evento `click`. Quando o usuário clica em uma tecla, o código captura o valor do atributo `data-note` da tecla clicada e chama a função `playPiano()` com a nota correspondente. Isso permite tocar o piano diretamente pela interface gráfica.",
        ],
      },

      {
        title: "Interação por Teclado Físico",
        text: [
          "O projeto também permite tocar as notas usando o teclado físico do computador. Para isso, há um objeto chamado `pianoKeyboard`, que faz o mapeamento entre as teclas do teclado (`event.key`) e as funções que executam as notas.\n\nExemplo:\n- Pressionar a tecla 'q' do teclado toca a nota 3 (Ré 4).\n- Pressionar '1' toca a nota 2 (Dó# 4), e assim por diante.\n\nO evento `keydown` captura as teclas pressionadas e executa a função correspondente dentro do objeto `pianoKeyboard`. O método `preventDefault()` é usado para evitar o comportamento padrão de teclas como `Tab`, `Enter`, e `Backspace` durante o uso do piano.",
        ],
      },

      {
        title: "Observações sobre o Mapeamento de Teclas",
        text: [
          "O mapeamento das teclas foi feito manualmente e pode variar dependendo do layout de teclado (ABNT2, US, etc). Algumas teclas especiais como `Backspace`, `Enter`, e `Tab` também foram associadas a determinadas notas musicais para aumentar a variedade de teclas utilizáveis no piano.",
        ],
      },
    ],
  },

  // Space Invaders
  {
    name: "Space Invaders",
    access: "space-invaders",
    dev: ["Dev Rafael", "https://rafaelcostasilva1501.github.io/Portfolio/"],
    release: "Em desenvolvimento",
    description:
      "Controle sua nave e enfrente ondas de inimigos espaciais em batalhas cada vez mais desafiadoras!",
    link: "",
    github: "",
    update: [],
  },

  // Brick Breaker
  {
    name: "Brick Breaker",
    access: "brick-breaker",
    dev: ["Dev Rafael", "https://rafaelcostasilva1501.github.io/Portfolio/"],
    release: "Em desenvolvimento",
    description:
      "Quebre os blocos com uma bola enquanto controla a barra para evitar que ela caia, neste clássico desafio de reflexos!",
    link: "",
    github: "",
    update: [],
  },
];
