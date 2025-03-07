document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileNavToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileNavToggle.classList.toggle('active');
        document.body.classList.toggle('nav-open');

        if (navLinks.classList.contains('active')) {
            navLinks.style.maxHeight = navLinks.scrollHeight + "px";
        } else {
            navLinks.style.maxHeight = null;
        }
    });

    // Close mobile menu when a link is clicked
    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && !e.target.closest('.nav-icons')) {
            navLinks.classList.remove('active');
            mobileNavToggle.classList.remove('active');
            document.body.classList.remove('nav-open');
            navLinks.style.maxHeight = null;
        }
    });

    // Adjust menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            mobileNavToggle.classList.remove('active');
            document.body.classList.remove('nav-open');
            navLinks.style.maxHeight = null;
        } else if (navLinks.classList.contains('active')) {
            navLinks.style.maxHeight = navLinks.scrollHeight + "px";
        }
    });
});
