// Scroll-triggered animations
document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    });

    fadeInElements.forEach((el) => observer.observe(el));

// Acronym hover effect
    const acronym = document.getElementById("acronym-hover");
    const details = document.querySelector(".acronym-details");

    acronym.addEventListener("mouseenter", function () {
        details.style.display = "block";
    });

    acronym.addEventListener("mouseleave", function () {
        details.style.display = "none";
    });

    // navbar effect
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled"); // Reduce opacity when scrolling
        } else {
            navbar.classList.remove("scrolled"); // Restore full opacity at the top
        }
    });
});