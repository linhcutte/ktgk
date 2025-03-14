document.addEventListener("DOMContentLoaded", function () {
    // Lấy tất cả hình ảnh thành viên
    const memberImages = document.querySelectorAll(".member-img");

    // Gắn sự kiện click cho từng hình ảnh
    memberImages.forEach((img) => {
        img.addEventListener("click", () => {
            const link = img.getAttribute("data-link"); // Lấy đường dẫn từ thuộc tính data-link
            window.location.href = link; // Chuyển hướng đến trang cá nhân
        });
    });
});
