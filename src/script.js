(function() {
  "use strict";
  const portfolio = document.querySelector("#portfolio");
  const projects = document.querySelectorAll(".portfolio__project");

  //highlight name
  window.addEventListener("load", () => {
    const letters = document.querySelectorAll(".letters");
    let index = 0;
    let offIndex = 0;

    let onInterval = setInterval(() => {
      if (index == 10) {
        clearInterval(onInterval);
      }

      letters[index++].classList.add("active-text");
    }, 50);

    setTimeout(() => {
      let offInterval = setInterval(() => {
        if (offIndex == 10) {
          clearInterval(offInterval);
        }
        letters[offIndex++].classList.remove("active-text");
      }, 50);
    }, 50);
  });

  // slide in projects
  if (!portfolio.classList.contains("active")) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > window.innerHeight) {
        portfolio.classList.add("active");
        projects.forEach(project => {
          project.classList.add("active");
        });
      }
    });
  }
})();
