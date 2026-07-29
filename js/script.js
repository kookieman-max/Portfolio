document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("hamburger-menu");
    const mainNavigation = document.getElementById("main-navigation");
    const desktopBreakpoint = 1000;

    function updateNavigation() {
        if (window.innerWidth >= desktopBreakpoint) {
            mainNavigation.classList.remove("open");
            toggleButton.setAttribute("aria-expanded", "false");
        }
    }

    function toggleNavigation() {
        const isOpen = mainNavigation.classList.toggle("open");
        toggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }

    toggleButton.addEventListener("click", toggleNavigation);
    window.addEventListener("resize", updateNavigation);
    updateNavigation();
});
