// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('active');
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Counter Animation
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Trigger counter animation for statistics
            if (entry.target.classList.contains('counter')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Observe all elements with reveal class
document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});

// Observe counter elements
document.querySelectorAll('.counter').forEach(element => {
    observer.observe(element);
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 700);
    }
});

// Mouse Move Parallax Effect
document.addEventListener('mousemove', function(e) {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    document.querySelectorAll('.floating-leaf').forEach((leaf, index) => {
        const speed = (index + 1) * 0.5;
        leaf.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
    });
});

// Product Card Tilt Effect
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.querySelector('div').style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', function() {
        card.querySelector('div').style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// Lazy Loading for Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Animated Number Counter on Scroll
class Counter {
    constructor(element, options = {}) {
        this.element = element;
        this.target = parseInt(element.getAttribute('data-target'));
        this.duration = options.duration || 2000;
        this.hasAnimated = false;
    }

    animate() {
        if (this.hasAnimated) return;
        this.hasAnimated = true;

        let current = 0;
        const increment = this.target / (this.duration / 16);
        const timer = setInterval(() => {
            current += increment;
            if (current >= this.target) {
                this.element.textContent = this.target + '+';
                clearInterval(timer);
            } else {
                this.element.textContent = Math.floor(current) + '+';
            }
        }, 16);
    }
}

// Initialize counters
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const counterInstance = new Counter(counter);
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counterInstance.animate();
            }
        });
    }, { threshold: 0.5 });
    
    counterObserver.observe(counter);
});

// Add ripple effect to buttons
document.querySelectorAll('button, .btn-primary').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Typing Effect for Hero Text (Optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Form Validation
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (name && email && phone && message) {
            // Show success message
            showNotification('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً', 'success');
            this.reset();
        } else {
            showNotification('الرجاء ملء جميع الحقول', 'error');
        }
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 20px 30px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        animation: slideInRight 0.5s ease;
        font-weight: bold;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    }
`;
document.head.appendChild(style);

// Scroll Progress Bar
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(to right, #10b981, #34d399);
    z-index: 9999;
    transition: width 0.1s ease;
    box-shadow: 0 2px 10px rgba(16, 185, 129, 0.5);
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// Floating Action Button
const fab = document.createElement('div');
fab.innerHTML = '<i class="fas fa-arrow-up"></i>';
fab.style.cssText = `
    position: fixed;
    bottom: 30px;
    left: 30px;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 5px 20px rgba(16, 185, 129, 0.4);
    z-index: 1000;
    transition: all 0.3s ease;
    opacity: 0;
    transform: scale(0);
`;
document.body.appendChild(fab);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        fab.style.opacity = '1';
        fab.style.transform = 'scale(1)';
    } else {
        fab.style.opacity = '0';
        fab.style.transform = 'scale(0)';
    }
});

fab.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

fab.addEventListener('mouseenter', () => {
    fab.style.transform = 'scale(1.1)';
    fab.style.boxShadow = '0 8px 30px rgba(16, 185, 129, 0.6)';
});

fab.addEventListener('mouseleave', () => {
    fab.style.transform = 'scale(1)';
    fab.style.boxShadow = '0 5px 20px rgba(16, 185, 129, 0.4)';
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Active Navigation Link Highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Image Hover Effect
document.querySelectorAll('.product-image-container img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.15) rotate(5deg)';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Cursor Trail Effect (Optional - for desktop only)
if (window.innerWidth > 768) {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll('.circle');
    
    document.addEventListener('mousemove', function(e) {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });
}

// Auto-hide notification after form submission
function autoHideNotification(element, delay = 3000) {
    setTimeout(() => {
        element.style.transition = 'opacity 0.5s, transform 0.5s';
        element.style.opacity = '0';
        element.style.transform = 'translateY(-20px)';
        setTimeout(() => element.remove(), 500);
    }, delay);
}

// Console Welcome Message
console.log('%c مرحباً بك في موقع شركة زمزم للمواد الغذائية! ', 'background: linear-gradient(135deg, #10b981, #059669); color: white; font-size: 20px; padding: 10px 20px; border-radius: 10px; font-weight: bold;');
console.log('%c من الطبيعة... إلى طاولتك 🌿', 'color: #10b981; font-size: 16px; font-weight: bold;');

// Initialize AOS (Animate On Scroll) - if needed
document.addEventListener('DOMContentLoaded', function() {
    // Add reveal class to elements that should animate
    const animatedElements = document.querySelectorAll('.about-card, .product-card, .quality-card');
    animatedElements.forEach(el => el.classList.add('reveal'));
});

// Performance optimization - Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const handleScroll = debounce(() => {
    // Your scroll handling code here
}, 10);

window.addEventListener('scroll', handleScroll);

// Add loading state to external links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function() {
        this.classList.add('loading');
        setTimeout(() => {
            this.classList.remove('loading');
        }, 1000);
    });
});

console.log('✅ جميع السكريبتات تم تحميلها بنجاح!');