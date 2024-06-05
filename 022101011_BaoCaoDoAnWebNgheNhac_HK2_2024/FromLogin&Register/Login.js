// Danh sách các tài khoản đã đăng ký
const registeredAccounts = [
    { username: "dat1", email: "dat1@gmail.com", password: "123456" },
    { username: "dat2", email: "dat2@gmail.com", password: "123456" },
    { username: "dat3", email: "dat3@gmail.com", password: "123456" },
    { username: "dat4", email: "dat4@gmail.com", password: "123456" },
    { username: "dat5", email: "dat5@gmail.com", password: "123456" }
];

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("registerForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn việc gửi biểu mẫu bình thường


        const username = document.querySelector("input[type='username']").value;
        const password = document.querySelector("input[type='password']").value;

        // ktra
        const matchedAccount = registeredAccounts.find(account => account.username === username && account.password === password);

        if (matchedAccount) {
            window.location.href = "../index.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
