// Eighty Six Strategies - Main JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle (if needed in future)
    initMobileNav();
    
    // Form Submission Handling for Netlify Forms
    initFormHandling();
    
    // Smooth Scrolling for Anchor Links
    initSmoothScrolling();
    
    // Google Analytics Event Tracking
    initAnalyticsTracking();
});

/**
 * Initialize mobile navigation toggle
 */
function initMobileNav() {
    // This is a placeholder for mobile menu functionality
    // Implement hamburger menu toggle if needed
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

/**
 * Initialize form submission handling for Netlify Forms
 */
function initFormHandling() {
    const contactForm = document.querySelector('form[name="contact"]');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Netlify handles the form submission automatically
            // We just need to show a loading state and handle the response
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const formMessage = document.getElementById('form-message');
            
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
            }
            
            // Netlify will redirect or reload the page on success
            // For better UX, we could use AJAX submission with fetch:
            
            // Uncomment below for AJAX submission (requires additional setup)
            /*
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            
            fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
            .then(response => {
                if (response.ok) {
                    showFormMessage('success', 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                showFormMessage('error', 'Oops! Something went wrong. Please try again or contact us directly.');
            })
            .finally(() => {
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = 'Send Message';
                }
            });
            */
        });
    }
}

/**
 * Show form message
 */
function showFormMessage(type, message) {
    const formMessage = document.getElementById('form-message');
    
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = 'form-message ' + type + ' show';
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Hide message after 10 seconds
        setTimeout(() => {
            formMessage.classList.remove('show');
        }, 10000);
    }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#' || targetId === '') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Initialize Google Analytics event tracking
 * IMPORTANT: Replace 'GA_MEASUREMENT_ID' in index.html with your actual tracking ID
 */
function initAnalyticsTracking() {
    // Check if gtag is available (Google Analytics is loaded)
    if (typeof gtag === 'function') {
        
        // Track button clicks
        const ctaButtons = document.querySelectorAll('.btn');
        ctaButtons.forEach(button => {
            button.addEventListener('click', function() {
                const buttonText = this.textContent.trim();
                const buttonHref = this.getAttribute('href') || 'no-link';
                
                gtag('event', 'cta_click', {
                    'event_category': 'engagement',
                    'event_label': buttonText,
                    'value': buttonHref
                });
            });
        });
        
        // Track outbound links
        const outboundLinks = document.querySelectorAll('a[href^="http"]');
        outboundLinks.forEach(link => {
            // Only track external links, not same-domain
            if (!link.href.includes(window.location.hostname)) {
                link.addEventListener('click', function() {
                    gtag('event', 'outbound_click', {
                        'event_category': 'engagement',
                        'event_label': this.href
                    });
                });
            }
        });
        
        // Track form submissions
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', function() {
                const formName = this.getAttribute('name') || 'unnamed-form';
                
                gtag('event', 'form_submit', {
                    'event_category': 'engagement',
                    'event_label': formName
                });
            });
        });
        
        // Track scroll depth
        let scrollDepthTracked = {
            '25': false,
            '50': false,
            '75': false,
            '100': false
        };
        
        window.addEventListener('scroll', function() {
            const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
            
            Object.keys(scrollDepthTracked).forEach(depth => {
                if (scrollPercent >= parseInt(depth) && !scrollDepthTracked[depth]) {
                    scrollDepthTracked[depth] = true;
                    
                    gtag('event', 'scroll_depth', {
                        'event_category': 'engagement',
                        'event_label': depth + '%',
                        'value': parseInt(depth)
                    });
                }
            });
        });
    }
}

/**
 * Add animation on scroll (optional enhancement)
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.service-card, .feature');
    animatedElements.forEach(el => observer.observe(el));
}

// Initialize scroll animations if needed
// initScrollAnimations();