
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

// Mobile navigation
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// Automatic footer year
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Smooth reveal for sections
const revealElements = document.querySelectorAll(
  ".intro, .learning-card, .book-copy, .book-art, .tool-item, .futuresim-section, .closing-section"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
  });
}
