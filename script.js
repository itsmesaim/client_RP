// // Scroll-triggered animations
// document.addEventListener("DOMContentLoaded", function () {
//     const fadeInElements = document.querySelectorAll(".fade-in");

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("active");
//             }
//         });
//     });

//     fadeInElements.forEach((el) => observer.observe(el));
// });


// script.js:
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
});