(function() {
  "use strict";
  const portfolio = document.querySelector("#portfolio");
  const cards = document.querySelectorAll(".portfolio__card");

  //highlight name
  window.addEventListener("load", () => {
    const letters = document.querySelectorAll(".letters");
    let index = 0;
    let offIndex = 0;

    let onInterval = setInterval(() => {
      if (index == 9) {
        clearInterval(onInterval);
      }

      letters[index++].classList.toggle("active-text");
    }, 250);

    setTimeout(() => {
      let offInterval = setInterval(() => {
        if (offIndex == 9) {
          clearInterval(offInterval);
        }
        letters[offIndex++].classList.toggle("active-text");
      }, 250);
    }, 250);
  });

  // slide show click
  portfolio.addEventListener("click", () => slideCard());

  const slideCard = e => {
    cards.forEach(card => {
      if (card.classList.contains("active")) {
        card.classList.toggle("active");
      } else {
        card.classList.toggle("active");
      }
    });
  };
})();
