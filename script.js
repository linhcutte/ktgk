const members = [
    { name: "Nguyễn Văn A", img: "images/nguyendanhlinh.jpeg", page: "student/nguyendanhlinh.html" },
    { name: "Trần Thị B", img: "images/member2.jpg", page: "members/member2.html" },
    { name: "Lê Văn C", img: "images/member3.jpg", page: "members/member3.html" },
    { name: "Phạm Thị D", img: "images/member4.jpg", page: "members/member4.html" },
    { name: "Hoàng Văn E", img: "images/member5.jpg", page: "members/member5.html" }
];

const teamContainer = document.getElementById("team-members");

// Hiển thị danh sách thành viên
members.forEach((member) => {
    const div = document.createElement("div");
    div.classList.add("member-card");
    div.innerHTML = `<img src="${member.img}" alt="${member.name}"><h3>${member.name}</h3>`;
    div.addEventListener("click", () => {
        window.location.href = member.page;
    });
    teamContainer.appendChild(div);
});
