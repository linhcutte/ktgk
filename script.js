document.addEventListener("DOMContentLoaded", function () {
    // Danh sách thành viên
    const members = [
        {
            name: "Nguyễn Danh Linh",
            bio: "Thành viên yêu thích lập trình Web.",
            img: "...assests/images/nguyendanhlinh.jpeg",
        },
        {
            name: "Nguyễn Đức Hân",
            bio: "Thành viên chuyên nghiên cứu AI.",
            img: "path/to/image2.jpg",
        },
        {
            name: "Trần Quốc Toàn",
            bio: "Thành viên thích phát triển ứng dụng di động.",
            img: "path/to/image3.jpg",
        },
        {
            name: "Trần Minh Cương",
            bio: "Thành viên thích phát triển ứng dụng di động.",
            img: "path/to/image3.jpg",
        },
        {
            name: "Nguyễn Thanh Tùng",
            bio: "Thành viên thích phát triển ứng dụng di động.",
            img: "path/to/image3.jpg",
        },
    ];

    const teamList = document.getElementById("team-members");
    const modal = document.getElementById("member-detail");
    const modalContent = {
        img: document.getElementById("member-img"),
        name: document.getElementById("member-name"),
        bio: document.getElementById("member-bio"),
    };
    const closeBtn = document.querySelector(".close");

    // Tạo danh sách thành viên
    members.forEach((member, index) => {
        const memberDiv = document.createElement("div");
        memberDiv.className = "team-member";
        memberDiv.innerHTML = `
            <img src="${member.img}" alt="${member.name}" class="member-img">
            <h3>${member.name}</h3>
        `;
        memberDiv.addEventListener("click", () => {
            showMemberDetail(member);
        });
        teamList.appendChild(memberDiv);
    });

    // Hiển thị thông tin chi tiết thành viên
    function showMemberDetail(member) {
        modalContent.img.src = member.img;
        modalContent.name.textContent = member.name;
        modalContent.bio.textContent = member.bio;
        modal.classList.remove("hidden");
    }

    // Đóng modal
    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    // Đóng modal khi click ra ngoài
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });
});
