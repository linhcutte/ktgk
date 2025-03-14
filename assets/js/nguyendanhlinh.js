document.addEventListener("DOMContentLoaded", function () {
    const profileImg = document.querySelector(".profile-img");

    // Hiệu ứng hover ảnh
    profileImg.addEventListener("mouseover", () => {
        profileImg.style.transform = "scale(1.1)";
        profileImg.style.transition = "transform 0.3s ease-in-out";
    });

    profileImg.addEventListener("mouseleave", () => {
        profileImg.style.transform = "scale(1)";
    });

    // Click vào nút trở về trang chủ
    const backButton = document.querySelector(".btn");
    backButton.addEventListener("click", () => {
        alert("Quay lại trang chủ!");
    });
});
