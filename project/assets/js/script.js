// Hiệu ứng load dần nội dung
document.addEventListener("DOMContentLoaded", function() {
    let cards = document.querySelectorAll(".card");
    let delay = 0;
    
    cards.forEach((card) => {
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, delay);
        delay += 200;
    });
});

// Hiệu ứng hover avatar
const avatar = document.querySelector(".avatar");
if (avatar) {
    avatar.addEventListener("mouseenter", function() {
        this.style.transform = "scale(1.15)";
    });
    avatar.addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
    });
}
