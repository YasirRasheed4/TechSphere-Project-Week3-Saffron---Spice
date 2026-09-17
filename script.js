// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Smooth Scrolling for Anchor Links (Get Started / Learn More buttons)
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Interactive Form Submission Handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form field values
            const name = document.getElementById('name').value;
            
            // Display quick feedback to user
            alert(`Thank you, ${name}! Your inquiry has been received. We will contact you shortly.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
});