console.log("Education Innovation Tuition Centre Website Loaded");

// Check Student Login Session & Update Navigation Button on All Pages
document.addEventListener("DOMContentLoaded", function () {
    const studentRoll = localStorage.getItem("studentRoll");

    if (studentRoll) {
        // ১. Navbar-এর Login/Dashboard বাটন চেক ও আপডেট
        const navLoginBtn = document.querySelector(".nav-buttons .login-btn") || document.getElementById("nav-login-btn");

        if (navLoginBtn) {
            navLoginBtn.innerText = "👨‍🎓 My Dashboard";
            navLoginBtn.href = "student-dashboard.html";
        }

        // ২. Hero Section-এর Login/Dashboard বাটন থাকলে আপডেট করা
        const heroLoginBtn = document.getElementById("hero-login-btn");
        if (heroLoginBtn) {
            heroLoginBtn.innerText = "👨‍🎓 My Dashboard";
            heroLoginBtn.href = "student-dashboard.html";
        }
    }
});