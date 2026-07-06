document.addEventListener("DOMContentLoaded", function () {

    const totalSkills = document.querySelectorAll(".skill-tag").length;

    document.getElementById("skillCount").textContent =
        `${totalSkills}+ Technologies`;

    document.querySelector(".backend").style.width = "92%";
    document.querySelector(".frontend").style.width = "88%";
    document.querySelector(".database").style.width = "90%";
    document.querySelector(".tools").style.width = "85%";
    document.querySelector(".domain").style.width = "90%";

    const cards = document.querySelectorAll(".skill-card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    }, {
        threshold: 0.2
    });

    cards.forEach((card) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(60px)";
        card.style.transition = "0.8s";

        observer.observe(card);

    });

    const skills = document.querySelectorAll(".skill-tag");

    skills.forEach((skill) => {

        skill.addEventListener("mouseenter", function () {
            this.style.fontWeight = "bold";
        });

        skill.addEventListener("mouseleave", function () {
            this.style.fontWeight = "normal";
        });

    });

    const backBtn = document.getElementById("backBtn");

    backBtn.addEventListener("click", function () {
        window.location.href = "index.html";
    });

});