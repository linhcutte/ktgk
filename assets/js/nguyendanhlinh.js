document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        setTimeout(() => {
            section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, index * 200);
    });

    const profileImg = document.querySelector(".profile-img");
    profileImg.addEventListener("mouseover", () => {
        profileImg.style.transform = "scale(1.1) rotate(5deg)";
        profileImg.style.transition = "transform 0.3s ease-in-out";
    });

    profileImg.addEventListener("mouseleave", () => {
        profileImg.style.transform = "scale(1) rotate(0)";
    });
});
