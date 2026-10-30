
// ==========================================
// WEALTHLAB AFRICA
// Website interactions
// ==========================================


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("show");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    // Close navigation after selecting a link

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";

        });

    });

}


// AUTOMATIC FOOTER YEAR

const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// SMOOTH NAVIGATION AND ACTIVE LINK

const navigationLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
);

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navigationLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


// SIMPLE SCROLL REVEAL

const revealElements = document.querySelectorAll(
    ".learning-card, .tool-card, .book-content, .intro-grid, .futuresim-grid"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

}
