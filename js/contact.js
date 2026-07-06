document.addEventListener("DOMContentLoaded", function () {

    const backBtn = document.getElementById("backBtn");

    backBtn.addEventListener("click", function () {
        window.location.href = "index.html";
    });

    const infoBoxes = document.querySelectorAll(".info-box");

    infoBoxes.forEach(function (box) {

        box.addEventListener("mouseenter", function () {
            box.style.transform = "scale(1.05)";
            box.style.transition = "0.3s";
        });

        box.addEventListener("mouseleave", function () {
            box.style.transform = "scale(1)";
        });

    });

});