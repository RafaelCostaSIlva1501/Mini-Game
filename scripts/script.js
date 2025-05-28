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

cards.forEach((e, i) => {
  const article = createElement("article");
  article.addEventListener("click", () => {
    overview(i);
  });

  const img = createElement("img");
  img.src = e.banner[0];

  const h3 = createElement("h3");
  h3.textContent = e.name;

  const p = createElement("p");
  p.textContent = e.description;

  DOM.games.appendChild(article);

  article.appendChild(img);
  article.appendChild(h3);
  article.appendChild(p);
});

const overview = (index) => {
  DOM.main.style.display = "none";
  DOM.overview.style.display = "flex";

  // Info
  DOM.portrait.src = cards[index].portrait[0];
  cards[index].tags.forEach((e) => {
    const p = createElement("p");
    p.textContent = e;

    DOM.tags.appendChild(p);
  });

  // Sobre
  DOM.overview.style.backgroundImage = `url("${cards[index].banner[0]}")`;
  DOM.banner.style.backgroundImage = `url("${cards[index].banner[0]}")`;
  DOM.link.href = cards[index].link;
  DOM.description.textContent = cards[index].description;

  //Atualizações
  cards[index].update.forEach((e) => {
    const details = createElement("details");

    const summary = createElement("summary");
    summary.textContent = `Atualização de ${e.date}`;

    DOM.updates.appendChild(details);
    details.appendChild(summary);

    e.updates.forEach((update) => {
      const h2 = createElement("h2");
      h2.textContent = update.title;
      details.appendChild(h2);

      update.items.forEach((item) => {
        const p = createElement("p");
        p.textContent = item;
        details.appendChild(p);
      });
    });
  });
};

DOM.btnDetails.forEach((e, i) => {
  e.addEventListener("click", () => {
    DOM.details.forEach((e) => {
      e.style.display = "none";
    });

    DOM.details[i].style.display = "flex";
  });
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
