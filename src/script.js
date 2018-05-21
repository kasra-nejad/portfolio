(function() {
  "use strict"
  const portfolio = document.querySelector("#portfolio");

  if (!portfolio.classList.contains("active")) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > window.innerHeight) {
        portfolio.classList.add("active");
        console.log(window.pageYOffset);
      }
    })
  }
})();
