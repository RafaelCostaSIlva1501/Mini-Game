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

/*-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~*/

const displaycontrol = (sectionsSelector, clickedButton) => {
  const sections = document.querySelectorAll(`.${sectionsSelector}`);

  // Oculta todas as seções
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // Pega o data-target do botão clicado
  const targetClass = clickedButton.getAttribute("data-target");
  const targetSection = document.querySelector(`.${targetClass}`);

  // Exibe a seção correspondente
  if (targetSection) {
    targetSection.style.display = "flex";
  }
};

DOM.btnDetails.forEach((btn) => {
  btn.addEventListener("click", () => {
    displaycontrol("details", btn);

    DOM.btnDetails.forEach((e) => {
      e.style.background = "none";
    });

    btn.style.backgroundColor = "#a3a3a348";
  });
});

/*-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~*/

const check = () => {
  const hash = window.location.hash.substring(1);

  const index = cards.findIndex((game) => game.access === hash);

  if (index >= 0) {
    overview(index);
  } else if (hash === "home") {
    DOM.main.style.display = "flex";
    DOM.overview.style.display = "none";
  }
};

const advice = () => {
  const isAdviceClosed = localStorage.getItem("adviceClosed");

  if (!isAdviceClosed) {
    advice.style.display = "block";
  }

  DOM.closeAdvice.addEventListener("click", () => {
    DOM.advice.style.display = "none";
    localStorage.setItem("adviceClosed", "true");
  });
};

window.addEventListener("hashchange", () => {
  check();
});

window.addEventListener("DOMContentLoaded", () => {
  advice();
  check();
});

/*-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~*/

const highlight = () => {
  const a = createElement("a");
  a.href = `#${cards[0].access}`;

  const article = createElement("article");

  const img = createElement("img");
  img.src = `img/banner/${cards[0].access}.jpg`;

  DOM.highlight.appendChild(a);
  a.appendChild(article);
  article.appendChild(img);
};

highlight();

cards.slice(1).forEach((e, i) => {
  const a = createElement("a");
  a.href = `#${e.access}`;
  a.addEventListener("click", () => {
    const index = cards.findIndex((game) => game.access === e.access);

    check();
    overview(index);
  });

  const article = createElement("article");

  const img = createElement("img");
  img.src = `img/banner/${e.access}.jpg`;

  DOM.games.appendChild(a);
  a.appendChild(article);
  article.appendChild(img);
});

const overview = (index) => {
  DOM.main.style.display = "none";
  DOM.overview.style.display = "flex";

  DOM.overview.style.backgroundImage = `url("img/banner/${cards[index].access}.jpg")`;
  DOM.banner.style.backgroundImage = `url("img/banner/${cards[index].access}.jpg")`;
  DOM.link.href = cards[index].link;

  about(index);
  updates(index);
  documentation(index);
};

const about = (index) => {
  DOM.portrait.src = `img/portrait/${cards[index].access}.png`;
  DOM.description.textContent = cards[index].description;

  DOM.dev.textContent = cards[index].dev[0];
  DOM.dev.href = cards[index].dev[1];
  DOM.release.textContent = cards[index].release;
};

const updates = (index) => {
  DOM.updates.innerHTML = "";

  if (cards[index].update) {
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
  }
};

const documentation = (index) => {
  DOM.documentation.innerHTML = "";

  cards[index].documentation.forEach((e) => {
    const h2 = createElement("h2");
    h2.textContent = e.title;

    DOM.documentation.appendChild(h2);

    e.text.forEach((e) => {
      const p = createElement("p");
      p.textContent = e;

      DOM.documentation.appendChild(p);
    });
  });
};

/*-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~*/
