// script.js
document.addEventListener("DOMContentLoaded", () => {
    // 1. Navigation using JavaScript (Requirement)
    const navLinks = {
        'nav-home': 'index.html',
        'nav-tvs': 'televisions.html',
        'nav-about': 'about.html',
        'nav-logo': 'index.html'
    };

    // Attach click events to navigate via JS
    for (const [id, url] of Object.entries(navLinks)) {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default HTML link behavior
                window.location.href = url; // Navigate using JS
            });
        }
    }

    // 2. Feedback on current page (Requirement)
    // Get the current filename from URL
    let currentPage = window.location.pathname.split('/').pop();
    if (currentPage === '') currentPage = 'index.html'; // Default to home

    const activeMap = {
        'index.html': 'nav-home',
        'televisions.html': 'nav-tvs',
        'about.html': 'nav-about'
    };

    const activeId = activeMap[currentPage];
    if (activeId) {
        document.getElementById(activeId).classList.add('active');
    }

    // 3. Dynamic Year for Footer (Requirement)
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
