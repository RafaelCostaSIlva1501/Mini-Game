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
      "Controle a cobra, coma frutas e evite bater em paredes ou em si mesma para alcançar a maior pontuação!",
    link: "https://rafaelcostasilva1501.github.io/Snake-Game/",
    github: "https://github.com/RafaelCostaSIlva1501/Snake-Game",
    tech: ["js", "html5", "css3"],
  },

  {
    name: "Pixelart",
    banner: ["img/pixelart-logo.webp", "Pixelart Banner"],
    description:
      "Crie arte retrô em pixel usando uma grade para projetar personagens, objetos e muito mais!",
    link: "https://rafaelcostasilva1501.github.io/Pixelart/",
    github: "https://github.com/RafaelCostaSIlva1501/Pixelart",
    tech: ["js", "html5", "css3"],
  },

  {
    name: "Paint",
    banner: ["img/paint-logo.jpg", "Paint Banner"],
    description:
      "Desenhe e pinte com facilidade, criando obras digitais com uma paleta intuitiva e ferramentas simples!",
    link: "https://rafaelcostasilva1501.github.io/Paint/",
    github: "https://github.com/RafaelCostaSIlva1501/Paint",
    tech: ["js", "html5", "css3"],
  },

  {
    name: "Piano",
    banner: ["img/piano-logo.webp", "Piano Banner"],
    description:
      "Transforme seu teclado em um piano e toque músicas enquanto explora novas melodias de forma divertida!",
    link: "https://rafaelcostasilva1501.github.io/Piano/",
    github: "https://github.com/RafaelCostaSIlva1501/Piano",
    tech: ["js", "html5", "css3"],
  },

  {
    name: "Space Invaders",
    banner: ["img/space-invaders-logo.jpg", "Space Invaders Banner"],
    description: "- PROJETO EM DESENVOLVIMENTO -",
    link: "",
    github: "",
    tech: ["js", "html5", "css3"],

    // Controle sua nave e enfrente ondas de inimigos espaciais em batalhas cada vez mais desafiadoras!
  },

  {
    name: "Brick Breaker",
    banner: ["img/brick-breaker-logo.jpg", "Brick Breaker Banner"],
    description: "- PROJETO EM DESENVOLVIMENTO -",
    link: "",
    github: "",
    tech: ["js", "html5", "css3"],

    // Quebre os blocos com uma bola enquanto controla a barra para evitar que ela caia, neste clássico desafio de reflexos!
  },
];

const createElement = (tag) => {
  const element = document.createElement(tag);
  return element;
};

cards.forEach((cards) => {
  const link = createElement("a");
  link.href = cards.link;

  const card = createElement("div");
  card.className = "game-card";

  const banner = createElement("img");
  banner.src = cards.banner[0];
  banner.alt = cards.banner[1];

  const div = createElement("div");

  const title = createElement("h3");
  title.innerText = cards.name;

  const description = createElement("p");
  description.innerText = cards.description;

  container.appendChild(link);
  link.appendChild(card);
  card.appendChild(banner);
  card.appendChild(div);
  div.appendChild(title);
  cards.tech.forEach((e) => {
    const tech = createElement("img");
    tech.src = `img/tech/${e}.png`;
    div.appendChild(tech);
  });
  card.appendChild(description);
});

/*-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~*/

document.addEventListener("DOMContentLoaded", () => {
  const advice = document.querySelector(".advice");
  const closeAdvice = document.querySelector(".close-advice");

  const isAdviceClosed = localStorage.getItem("adviceClosed");

  if (!isAdviceClosed) {
    advice.style.display = "block";
  }

  closeAdvice.addEventListener("click", () => {
    advice.style.display = "none";
    localStorage.setItem("adviceClosed", "true");
  });
});

/*-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~*/
