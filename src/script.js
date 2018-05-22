(function() {
  "use strict"
  const portfolio = document.querySelector("#portfolio");
  const projects = document.querySelectorAll(".portfolio__project");

  if (!portfolio.classList.contains("active")) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > window.innerHeight) {
        portfolio.classList.add("active");
        projects.forEach(project => {
          project.classList.add("active")
        })
      }
    })
  }
})();
