// Improved main.js

// Mobile Navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('is-active');
});

// Form Handling with Formspree
const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"];');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    submitButton.disabled = true;
    const formData = new FormData(form);
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
    }).then(response => response.json())
      .then(data => {
          console.log(data);
          alert('Form submitted successfully!');
      }).catch(error => {
          console.error('Error:', error);
          alert('There was an error submitting the form.');
      }).finally(() => {
          submitButton.disabled = false;
      });
});

// Performance Optimization with requestAnimationFrame
let lastScrollTop = 0;
const header = document.querySelector('header');

const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.classList.add('is-hidden');
    } else {
        header.classList.remove('is-hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    requestAnimationFrame(handleScroll);
};

requestAnimationFrame(handleScroll);

// Smooth Scrolling for Active Links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Update Active Link
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

// Dynamic Year in Footer
const footerYear = document.getElementById('footer-year');
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

// Accessibility Improvements
document.querySelectorAll('[data-aria]').forEach(el => {
    const role = el.getAttribute('data-aria');
    if (role) {
        el.setAttribute('role', role);
    }
});

// Ensure the form has required attributes for screen readers
form.setAttribute('aria-label', 'Contact Form');
form.setAttribute('role', 'form');
