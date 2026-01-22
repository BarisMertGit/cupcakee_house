/**
 * Cupcake House Bake & Cake
 * JavaScript functionality for smooth scroll, navigation, and interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const header = document.getElementById('header');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // ===== Header Scroll Effect =====
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Initial check
    handleScroll();
    
    // Listen for scroll events with throttling
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                handleScroll();
                scrollTimeout = null;
            }, 10);
        }
    });

    // ===== Mobile Navigation Toggle =====
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav') && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // ===== Smooth Scroll for Navigation Links =====
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Gallery Item Hover Effect =====
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ===== Intersection Observer for Scroll Animations =====
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe gallery items and contact elements
    document.querySelectorAll('.gallery-item, .contact-btn, .contact-info').forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ===== Active Navigation Link Highlight =====
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollPosition = window.scrollY + header.offsetHeight + 100;
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // ===== Parallax Effect for Hero (Optional - subtle effect) =====
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            if (scrollPosition < window.innerHeight) {
                const heroContent = document.querySelector('.hero-content');
                if (heroContent) {
                    heroContent.style.transform = 'translateY(' + (scrollPosition * 0.3) + 'px)';
                    heroContent.style.opacity = 1 - (scrollPosition / window.innerHeight);
                }
            }
        });
    }

    // ===== Console welcome message =====
    console.log('%cCupcake House Bake & Cake', 'font-family: Georgia, serif; font-size: 24px; color: #5D4037; font-weight: bold;');
    console.log('%cTatli bir baslangic...', 'font-family: Georgia, serif; font-size: 14px; color: #E8B4B8; font-style: italic;');
});
