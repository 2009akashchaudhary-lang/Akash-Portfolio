
// Smooth reveal animation for website sections
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.15 });

sections.forEach((section) => observer.observe(section));

console.log("Akash Portfolio Loaded Successfully!");
