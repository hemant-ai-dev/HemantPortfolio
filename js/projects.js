document.addEventListener("DOMContentLoaded", function () {
    const backBtn = document.getElementById("backBtn");

    backBtn.addEventListener("click", function () {
        window.location.href = "index.html";
    });

    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });

    }, 
    {
        threshold: 0.2
    });

    cards.forEach((card) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(60px)";
        card.style.transition = "0.8s";
        observer.observe(card);
    });
});