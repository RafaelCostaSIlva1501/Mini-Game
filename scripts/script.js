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

cards.slice(1).forEach((e, i) => {
  const article = createElement("article");
  article.addEventListener("click", () => {
    overview(i + 1); // i + 1 porque slice começa em 0 aqui
  });

  const img = createElement("img");
  img.src = `img/banner/${e.access}.jpg`;

  DOM.games.appendChild(article);
  article.appendChild(img);
});

const overview = (index) => {
  DOM.main.style.display = "none";
  DOM.overview.style.display = "flex";

  DOM.overview.style.backgroundImage = `url("img/banner/${cards[index].access}.jpg")`;
  DOM.banner.style.backgroundImage = `url("img/banner/${cards[index].access}.jpg")`;
  DOM.link.href = cards[index].link;

  // Info
  info(index);

  //Atualizações
  update(index);
};

const info = (index) => {
  // Imagem do portrait
  DOM.portrait.src = `img/portrait/${cards[index].access}.png`;

  // Tags do jogo
  cards[index].tags.forEach((e) => {
    const div = createElement("div");

    const span = createElement("span");
    span.classList.add("material-symbols-outlined");
    span.textContent = e[1];

    const p = createElement("p");
    p.textContent = e[0];

    DOM.tags.appendChild(div);
    div.appendChild(span);
    div.appendChild(p);
  });

  DOM.description.textContent = cards[index].description;
  // Desenvolvedor do jogo com link para midia social
  const a = createElement("a");
  a.textContent = cards[index].dev[0];
  a.href = cards[index].dev[1];
  DOM.dev.appendChild(a);

  // Data de lançamento do jogo
  DOM.release.textContent = cards[index].release;

  // Sobre
};

const about = (index) => {
  cards[index].about.forEach((e) => {
    const h2 = createElement("h2");
  });
};

const update = (index) => {
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
