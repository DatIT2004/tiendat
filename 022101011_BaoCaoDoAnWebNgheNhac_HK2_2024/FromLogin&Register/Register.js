// Danh sách các tài khoản ảo
const fakeAccounts = [
    { username: "dat1", email: "dat1@gmail.com", password: "123456" },
    { username: "dat2", email: "dat2@gmail.com", password: "123456" },
    { username: "dat3", email: "dat3@gmail.com", password: "123456" },
    { username: "dat4", email: "dat4@gmail.com", password: "123456" },
    { username: "dat5", email: "dat5@gmail.com", password: "123456" }
];

document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn việc gửi biểu mẫu bình thường

        const username = document.querySelector("input[type='username']").value;
        const email = document.querySelector("input[type='email']").value;
        const password = document.querySelector("input[type='password']").value;
        const confirmPassword = document.querySelectorAll("input[type='password']")[1].value;

        // Kiểm tra xem tên người dùng hoặc email đã nhập có khớp với bất kỳ tài khoản giả mạo nào không
        const matchedAccount = fakeAccounts.find(account => (account.username === username || account.email === email));

        if (!matchedAccount) {
            alert("Username or email is not recognized. Please try again.");
            return;
        }

        // ktra password
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // Check  password
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        alert("Registration successful!");
        window.location.href = "./Login.html";
    });
});
