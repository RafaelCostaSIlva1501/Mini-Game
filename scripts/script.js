const btnMenu = document.querySelectorAll(".button-menu");
const menu = document.querySelector(".menu");

let menuON = false;

btnMenu.forEach((e) => {
  e.addEventListener("click", () => {
    menuON = !menuON;

    menu.style.width = menuON ? "220px" : "0px";
    menu.style.padding = menuON ? "20px" : "0px";
  });
});

const container = document.querySelector(".cards-container");

const cards = [
  {
    name: "Space Invaders",
    banner: ["img/space-invaders-logo.webp", ""],
    description:
      "Space Invaders é um jogo onde você controla uma nave solitária em meio ao espaço, enfrentando ondas de criaturas que descem em ataques cada vez mais intensos.",
    link: "",
  },

  {
    name: "Snake Game",
    banner: ["img/snake-logo.webp", "Snake Game Banner"],
    description:
      "Controle uma cobra faminta e tente comer o máximo de frutas possível sem bater nas paredes ou em si mesma! Até onde você consegue chegar?",
    link: "https://rafaelcostasilva1501.github.io/Snake-Game/",
  },

  {
    name: "Pixelart",
    banner: ["img/pixelart-logo.webp", "Pixelart Banner"],
    description:
      "Crie incríveis obras em pixel! Use uma grade de pixels para projetar imagens no estilo retrô, como personagens, objetos e muito mais.",
    link: "https://rafaelcostasilva1501.github.io/Pixelart/",
  },

  {
    name: "Paint",
    banner: ["img/paint-logo.jpg", "Paint Banner"],
    description:
      "Libere sua criatividade! Desenhe, pinte e crie obras de arte digitais usando uma paleta de cores intuitiva e ferramentas simples de pintura.",
    link: "https://rafaelcostasilva1501.github.io/Paint/",
  },

  {
    name: "Piano",
    banner: ["img/piano-logo.webp", "Piano Banner"],
    description:
      "Transforme seu teclado em um piano! Toque músicas, experimente novas melodias e divirta-se aprendendo com este piano digital.",
    link: "",
  },
];

const createElement = (tag) => {
  const element = document.createElement(tag);
  return element;
};

cards.forEach((cards) => {
  const card = createElement("div");
  card.className = "game-card";

  const banner = createElement("img");
  banner.src = cards.banner[0];
  banner.alt = cards.banner[1];

  const title = createElement("h3");
  title.innerText = cards.name;

  const description = createElement("p");
  description.innerText = cards.description;

  const link = createElement("a");
  link.innerText = "Jogue Agora";
  link.href = cards.link;
  link.target = "_self";

  card.appendChild(banner);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(link);
  container.appendChild(card);
});
