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

    // Back to top button
    const backToTop = document.getElementById("back-to-top");
    function updateBackToTop() {
        if (!backToTop) return;
        if (window.scrollY > 300) backToTop.classList.remove("hidden");
        else backToTop.classList.add("hidden");
    }

    if (backToTop) {
        backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
        window.addEventListener("scroll", updateBackToTop);
        updateBackToTop();
    }
});
