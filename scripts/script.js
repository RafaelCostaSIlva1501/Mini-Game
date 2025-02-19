const btnMenu = document.querySelectorAll(".button-menu");
const menu = document.querySelector(".menu");

let menuON = false;

btnMenu.forEach((e) => {
  e.addEventListener("click", () => {
    menuON = !menuON;

    menu.style.width = menuON ? "220px" : "0px";
    menu.style.padding = menuON ? "20px 20px" : " 20px 0px";
    menu.style.borderLeft = menuON ? "1px solid #e0e0e0" : "none";
  });
});

/*-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~*/

const container = document.querySelector(".cards-container");

const cards = [
  {
    name: "Snake Game",
    banner: ["img/snake-logo.webp", "Snake Game Banner"],
    description:
      "Controle uma cobra faminta e tente comer o máximo de frutas possível sem bater nas paredes ou em si mesma! Até onde você consegue chegar?",
    link: "https://rafaelcostasilva1501.github.io/Snake-Game/",
    github: "https://github.com/RafaelCostaSIlva1501/Snake-Game",
    tech: ["js", "html5", "css3"],
  },

  {
    name: "Pixelart",
    banner: ["img/pixelart-logo.webp", "Pixelart Banner"],
    description:
      "Crie incríveis obras em pixel! Use uma grade de pixels para projetar imagens no estilo retrô, como personagens, objetos e muito mais.",
    link: "https://rafaelcostasilva1501.github.io/Pixelart/",
    github: "https://github.com/RafaelCostaSIlva1501/Pixelart",
    tech: ["js", "html5", "css3"],
  },

  {
    name: "Paint",
    banner: ["img/paint-logo.jpg", "Paint Banner"],
    description:
      "Libere sua criatividade! Desenhe, pinte e crie obras de arte digitais usando uma paleta de cores intuitiva e ferramentas simples de pintura.",
    link: "https://rafaelcostasilva1501.github.io/Paint/",
    github: "https://github.com/RafaelCostaSIlva1501/Paint",
    tech: ["js", "html5", "css3"],
  },

  {
    name: "Piano",
    banner: ["img/piano-logo.webp", "Piano Banner"],
    description:
      "Transforme seu teclado em um piano! Toque músicas, experimente novas melodias e divirta-se aprendendo com este piano digital.",
    link: "https://rafaelcostasilva1501.github.io/Piano/",
    github: "https://github.com/RafaelCostaSIlva1501/Piano",
    tech: ["js", "html5", "css3"],
  },

  {
    name: "Space Invaders",
    banner: ["img/space-invaders-logo.jpg", "Space Invaders Banner"],
    description:
      "Space Invaders é um jogo onde você controla uma nave solitária em meio ao espaço, enfrentando ondas de criaturas que descem em ataques cada vez mais intensos.",
    link: "",
    github: "",
    tech: ["js", "html5", "css3"],
  },

  {
    name: "Brick Breaker",
    banner: ["img/brick-breaker-logo.jpg", "Brick Breaker Banner"],
    description:
      "",
    link: "",
    github: "",
    tech: ["js", "html5", "css3"],
  },
];

const createElement = (tag) => {
  const element = document.createElement(tag);
  return element;
};

cards.forEach((cards) => {
  const link = createElement("a")
  link.href = cards.link

  const card = createElement("div");
  card.className = "game-card";

  const banner = createElement("img");
  banner.src = cards.banner[0];
  banner.alt = cards.banner[1];

  const title = createElement("h3");
  title.innerText = cards.name;

  const techContainer = createElement("div");
  cards.tech.forEach((e) => {
    const tech = createElement("img");
    tech.src = `img/tech/${e}.png`;
    techContainer.appendChild(tech);
  });


  card.appendChild(banner);
  card.appendChild(title);
  card.appendChild(techContainer);
  link.appendChild(card)
  container.appendChild(link);
});

/*-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~*/

const advice = document.querySelector(".advice");

const closeAdvice = document.querySelector(".close-advice");

closeAdvice.addEventListener("click", () => {
  advice.style.display = "none";
});
