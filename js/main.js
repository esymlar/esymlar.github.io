function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("open");
}

function updateThemeIcon(isDark) {
    const themeBtn = document.querySelector(".theme-btn");
    if (themeBtn) {
        themeBtn.textContent = isDark ? "☀️" : "🌙";
    }
}

function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeIcon(isDark);
}

// Apply saved theme immediately when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";
    if (isDark) {
        document.body.classList.add("dark-mode");
    }
    updateThemeIcon(isDark);
});
