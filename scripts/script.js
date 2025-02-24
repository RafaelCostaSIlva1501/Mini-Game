import { DOM } from "./DOM.js";
import { cards } from "./cards.js";

let menuON = false; // Flag que controla o menu

// Função que liga e desliga (abre e fecha) o MENU
DOM.buttonMenu.forEach((button) => {
  button.addEventListener("click", () => {
    menuON = !menuON;

    DOM.menu.style.width = menuON ? "220px" : "0px";
    DOM.menu.style.padding = menuON ? "20px 20px" : " 20px 0px";
  });
});

/*-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~*/

const createElement = (tag) => {
  const element = document.createElement(tag);
  return element;
};

const createCard = (cardData) => {
  const link = createElement("a"); // Cria a tag <a>

  // Verifica se há uma URL e se não houver, previne o comportamento do link
  if (!cardData.link) {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Previne o comportamento de navegação
      console.log("Link não tem URL, navegação prevenido");
    });
  } else {
    link.href = cardData.link; // Atribui a URL à tag <a>
  }

  const card = createElement("div"); // Cria a tag <div>
  card.className = "game-card"; // Atribui uma classe à tag <div>

  const banner = createElement("img"); // Cria a tag <img>
  banner.src = cardData.banner[0]; // Define a imagem do banner
  banner.alt = cardData.banner[1]; // Define o texto alternativo (acessibilidade)

  const div = createElement("div"); // Cria uma <div> para armazenar o título e os ícones das tecnologias

  const title = createElement("h3"); // Cria a tag <h3> para o título do card
  title.innerText = cardData.name; // Define o nome do card como conteúdo do <h3>

  const description = createElement("p"); // Cria a tag <p> para a descrição do card
  description.innerText = cardData.description; // Define a descrição do card

  // Percorre o array de tecnologias e cria um ícone <img> para cada uma
  cardData.tech.forEach((techName) => {
    const tech = createElement("img"); // Cria a tag <img> para representar a tecnologia
    tech.src = `img/tech/${techName}.png`; // Define o caminho da imagem da tecnologia
    div.appendChild(tech); // Adiciona o ícone dentro da <div> de informações do card
  });

  // Monta a estrutura do card adicionando os elementos na hierarquia correta
  div.appendChild(title); // Adiciona o título dentro da div de informações
  card.appendChild(banner); // Adiciona a imagem/banner dentro do card
  card.appendChild(div); // Adiciona a div com título e tecnologias ao card
  card.appendChild(description); // Adiciona a descrição ao card
  link.appendChild(card); // Adiciona o card dentro da tag <a>

  return link; // Retorna o elemento <a> contendo todo o card estruturado
};

// Adicionar os cards ao container
cards.forEach((cardData) => {
  DOM.container.appendChild(createCard(cardData));
});

/*-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~*/

// Verifica se a mensagem de aviso já foi mostrada anteriormente
document.addEventListener("DOMContentLoaded", () => {
  const isAdviceClosed = localStorage.getItem("adviceClosed");

  if (!isAdviceClosed) {
    advice.style.display = "block";
  }

  DOM.closeAdvice.addEventListener("click", () => {
    DOM.advice.style.display = "none";
    localStorage.setItem("adviceClosed", "true");
  });
});
