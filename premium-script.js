// Cursor Glow Effect
const cursorGlow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = (e.clientX - 200) + 'px';
    cursorGlow.style.top = (e.clientY - 200) + 'px';
});

// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            navMenu?.classList.remove('open');
        }
    });
});

// Contact Form Handler
function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    // Simulate form submission
    console.log('Form submitted:', Object.fromEntries(formData));
    alert('Thank you! We will contact you within 2 hours.');
    form.reset();
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

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

// Navbar Scroll Effect
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

// Number Counter Animation
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Trigger counters when in view
const counterElements = document.querySelectorAll('.stat strong');
let countersStarted = false;

window.addEventListener('scroll', () => {
    if (!countersStarted && window.scrollY > 300) {
        counterElements.forEach(el => {
            const text = el.textContent.replace(/[^0-9]/g, '');
            if (text) {
                animateCounter(el, parseInt(text));
            }
        });
        countersStarted = true;
    }
});

// Button Hover Effects
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Pricing Toggle (for future use)
function togglePricing(plan) {
    console.log('Selected plan:', plan);
}

// Add smooth animations to hero section
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroDesc = document.querySelector('.hero-desc');
    const heroCta = document.querySelector('.hero-cta');
    
    if (heroTitle) heroTitle.style.animation = 'slideInUp 0.8s ease 0.2s both';
    if (heroDesc) heroDesc.style.animation = 'slideInUp 0.8s ease 0.4s both';
    if (heroCta) heroCta.style.animation = 'slideInUp 0.8s ease 0.6s both';
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

console.log('Premium website loaded successfully!');
