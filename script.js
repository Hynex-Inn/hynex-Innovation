/* =========================================================
   HYNEX INNOVATION
   Website Interactions
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-active");

    });

}


/* =========================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
========================================================= */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-active");

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .service-card, .process-item, .contact-grid, .cta-container"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !service || !message) {
            event.preventDefault();
            alert("Please complete all fields before submitting.");
            return;
        }

        const serviceField = document.createElement("input");
        serviceField.type = "hidden";
        serviceField.name = "Service";
        serviceField.value = service;
        contactForm.appendChild(serviceField);

        const nameField = document.getElementById("name");
        const emailField = document.getElementById("email");
        const messageField = document.getElementById("message");

        nameField.name = "name";
        emailField.name = "email";
        messageField.name = "message";
    });
}

/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");

    }

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear = new Date().getFullYear();

const footerYear = document.querySelector(".footer-bottom span");

if (footerYear) {

    footerYear.textContent =
        `© ${currentYear} Hynex Innovation. All rights reserved.`;

}
