document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    // Toggle menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Animate hamburger
        hamburger.classList.toggle('toggle');
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        }
    });

    // Contact Form Submission Handling
    const contactForm = document.querySelector('.contact-form');
    let submitted = false;

    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            submitted = true;
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
        });
    }

    const successMessage = document.querySelector('.success-message');
    const sendAnotherBtn = document.getElementById('send-another');

    if (hiddenIframe) {
        hiddenIframe.addEventListener('load', () => {
            if (submitted) {
                // Hide form and show success message
                contactForm.style.display = 'none';
                successMessage.style.display = 'block';

                // Reset form data in background
                contactForm.reset();
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
                submitted = false;
            }
        });
    }

    if (sendAnotherBtn) {
        sendAnotherBtn.addEventListener('click', () => {
            successMessage.style.display = 'none';
            contactForm.style.display = 'flex';
        });
    }
});
