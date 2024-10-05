// Función para manejar eventos de Hover de la Navbar
function setupMenuBackdrop() {
  const listItem = document.querySelectorAll("#landing-header li");
  const menuBackDrop = document.querySelector("#menu-backdrop");

  listItem.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const { left, top, width, height } = item.getBoundingClientRect();
      menuBackDrop.style.setProperty("--left", `${left}px`);
      menuBackDrop.style.setProperty("--top", `${top}px`);
      menuBackDrop.style.setProperty("--width", `${width}px`);
      menuBackDrop.style.setProperty("--height", `${height}px`);
      menuBackDrop.style.opacity = "1";
      menuBackDrop.style.visibility = "visible";
    });

    item.addEventListener("mouseleave", () => {
      menuBackDrop.style.opacity = "0";
      menuBackDrop.style.visibility = "hidden";
    });
  });
}

// Función para observar secciones y cambiar el color del encabezado
function setupIntersectionObserver() {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  };

  const header = document.querySelector("#landing-header");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { isIntersecting, target } = entry;
      if (isIntersecting) {
        const color = target.getAttribute("data-header-color");
        header.style.color = color;
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll(".landing-section");
  sections.forEach((section) => observer.observe(section));
}

// Inicializacion de funciones
function initHeaderLogic() {
  setupMenuBackdrop();
  setupIntersectionObserver();
}

// Ejecutar la inicializacion de la logica de mi header
initHeaderLogic();