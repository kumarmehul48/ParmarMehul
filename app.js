// Google Apps Script Web App URL
// Replace this with your actual Google Apps Script deployment URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/d/{YOUR_SCRIPT_ID}/usercopy'; // You'll update this after creating the script

document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    const formData = {
        practiceName: this.elements['practiceName'].value,
        email: this.elements['email'].value,
        phone: this.elements['phone'].value,
        practiceType: this.elements['practiceType'].value,
        timestamp: new Date().toLocaleString(),
        source: 'Meridian Billing Website'
    };
    
    try {
        // Option 1: Send to Google Sheets via Apps Script
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        // Show success message
        alert('✓ Thank you! Your inquiry has been saved. We will contact you within 2 hours.');
        this.reset();
        
    } catch (error) {
        console.error('Error:', error);
        alert('There was an issue. Please try again or contact us directly at hello@meridianbilling.com');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// Cursor glow effect
const cursorGlow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    if (cursorGlow) {
        cursorGlow.style.left = (e.clientX - 200) + 'px';
        cursorGlow.style.top = (e.clientY - 200) + 'px';
    }
});

// Mobile menu toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');
if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            if (navMenu) navMenu.style.display = 'none';
        }
    });
});

// Intersection observer for animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.solution-card, .feature-item, .testimonial-card, .metric-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Navbar scroll effect
let lastScrollY = 0;
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    if (lastScrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 8px 20px rgba(13, 91, 213, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.92)';
        navbar.style.boxShadow = 'none';
    }
});

console.log('Website loaded successfully!');
console.log('Form data will be saved to Google Sheets when you add the Apps Script URL.');
