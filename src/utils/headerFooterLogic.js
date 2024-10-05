// Logica que se encarga de manejar la visibilidad del header y el footer

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const footer = document.querySelector("#footer");
  const sectionAccessories = document.querySelector("#accessories");

  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target.id === "footer" && entry.isIntersecting) {
        header.style.display = "none";
      } else if (entry.target.id === "accessories" && entry.isIntersecting) {
        header.style.display = "flex";
      }
    });
  }, observerOptions);

  observer.observe(footer);
  observer.observe(sectionAccessories);
});