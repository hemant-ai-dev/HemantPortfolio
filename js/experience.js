const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0)";
        }
    });
},{
    threshold:0.2
});

cards.forEach((card)=>{
    card.style.opacity="0";
    card.style.transform="translateX(100px)";
    card.style.transition="0.8s";
    observer.observe(card);
});

const backButton = document.getElementById("backBtn");

backButton.addEventListener("click", function () {

    window.location.href = "index.html";

});