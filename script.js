const ADMIN_USERNAME = "admin"; // Change this to your username
const ADMIN_PASSWORD = "mess123"; // Change this to your password

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
                localStorage.setItem("isAuthenticated", "true");
                window.location.href = "admin.html"; // Redirect to Admin Panel
            } else {
                document.getElementById("error-message").innerText = "Invalid credentials!";
            }
        });
    }

    // Protect admin panel
    if (window.location.pathname.includes("admin.html")) {
        if (localStorage.getItem("isAuthenticated") !== "true") {
            window.location.href = "login.html";
        }
    }
});
