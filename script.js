(function() {
  "use strict";
  const portfolio = document.querySelector("#portfolio");
  const cards = document.querySelectorAll(".portfolio__card");
  const slideButtons = document.querySelectorAll(".portfolio button");

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
    }, 75);

    setTimeout(() => {
      let offInterval = setInterval(() => {
        if (offIndex == 9) {
          clearInterval(offInterval);
        }
        letters[offIndex++].classList.toggle("active-text");
      }, 75);
    }, 75);
  });
})();
