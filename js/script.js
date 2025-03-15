document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a, .hero-content a, .footer-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            
            const formElements = contactForm.elements;
            let isValid = true;
            
            // Basic validation
            for (let i = 0; i < formElements.length; i++) {
                if (formElements[i].hasAttribute('required') && !formElements[i].value) {
                    isValid = false;
                    formElements[i].style.borderColor = 'red';
                } else {
                    formElements[i].style.borderColor = '#ddd';
                }
            }
            
            // reCAPTCHA validation
            const recaptchaResponse = grecaptcha.getResponse();
            if (recaptchaResponse.length === 0) {
                isValid = false;
                alert('Vänligen bekräfta att du inte är en robot genom att slutföra reCAPTCHA.');
            }
            
            if (isValid) {
                alert('Tack för ditt meddelande! Vi återkommer så snart som möjligt.');
                contactForm.reset();
                grecaptcha.reset();
            }
        });}
    }
    
    // Mobile menu toggle functionality
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            document.getElementById('mainNav').classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    // Close the DOMContentLoaded event listener
});