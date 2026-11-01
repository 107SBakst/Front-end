// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navToggle.setAttribute('aria-expanded', navMenu.classList.toggle('active'));

        // Animate hamburger menu
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 6px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            }
        });
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');

            // Reset hamburger menu
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        });
    });

    // Smooth scrolling for navigation links (instant when the reader asks for reduced motion)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: reduceMotion ? 'auto' : 'smooth'
                });
            }
        });
    });

    // Add active class to navigation links based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const navHeight = document.querySelector('.navbar').offsetHeight;

        navLinks.forEach(link => {
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const sectionTop = targetSection.offsetTop - navHeight - 100;
                const sectionBottom = sectionTop + targetSection.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });

    // Add scroll effect to navbar: a class, so styles.css owns the colours (graphite in both themes)
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('scrolled', window.scrollY > 100);
    });

    // Animate elements on scroll. Items in the same group rise in one after another;
    // styles.css holds the motion (.reveal / .revealed) and turns it off for reduced motion.
    const revealSelector = '.project-card, .resume-item, .skill-item, .course-tile';
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.classList.add('revealed');
                observer.unobserve(el);
                // Once it has risen, drop the reveal classes so hover effects respond at their own speed
                const delay = parseFloat(el.style.getPropertyValue('--reveal-delay')) || 0;
                setTimeout(() => {
                    el.classList.remove('reveal', 'revealed');
                    el.style.removeProperty('--reveal-delay');
                }, delay + 800);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    if (!reduceMotion) {
        const animateElements = document.querySelectorAll(revealSelector);
        animateElements.forEach(el => {
            const group = Array.from(el.parentElement.children).filter(c => c.matches(revealSelector));
            const order = Math.min(group.indexOf(el), 8);
            el.style.setProperty('--reveal-delay', (order * 70) + 'ms');
            el.classList.add('reveal');
            observer.observe(el);
        });
    }
});
