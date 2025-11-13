// ================================
// Global State
// ================================
const state = {
    currentLang: 'en',
    theme: 'light',
    isScrolled: false,
    isMobileMenuOpen: false
};

// ================================
// DOM Elements
// ================================
const elements = {
    navbar: document.getElementById('navbar'),
    navMenu: document.getElementById('navMenu'),
    navLinks: document.querySelectorAll('.nav-link'),
    themeToggle: document.getElementById('themeToggle'),
    langToggle: document.getElementById('langToggle'),
    langOptions: document.querySelectorAll('.lang-option'),
    mobileToggle: document.getElementById('mobileToggle'),
    contactForm: document.getElementById('contactForm'),
    yearSpan: document.getElementById('year'),
    translatableElements: document.querySelectorAll('[data-en]')
};

// ================================
// Translations
// ================================
const translations = {
    en: {
        // Already in HTML data attributes
    },
    nl: {
        // Already in HTML data attributes
    }
};

// ================================
// Initialize
// ================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initNavigation();
    initScrollAnimations();
    initContactForm();
    updateYear();
    
    // Add event listeners
    elements.themeToggle?.addEventListener('click', toggleTheme);
    elements.langToggle?.addEventListener('click', handleLanguageToggle);
    elements.mobileToggle?.addEventListener('click', toggleMobileMenu);
    
    // Smooth scroll for navigation links
    elements.navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Scroll event for navbar
    window.addEventListener('scroll', handleScroll);
    
    // Close mobile menu on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && state.isMobileMenuOpen) {
            toggleMobileMenu();
        }
    });
});

// ================================
// Theme Management
// ================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    state.theme = savedTheme;
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    state.theme = newTheme;
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add animation class
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
}

// ================================
// Language Management
// ================================
function initLanguage() {
    const savedLang = localStorage.getItem('language') || 'en';
    state.currentLang = savedLang;
    updateLanguage(savedLang);
}

function handleLanguageToggle(e) {
    if (e.target.classList.contains('lang-option')) {
        const lang = e.target.getAttribute('data-lang');
        if (lang && lang !== state.currentLang) {
            state.currentLang = lang;
            updateLanguage(lang);
            localStorage.setItem('language', lang);
        }
    }
}

function updateLanguage(lang) {
    // Update active language indicator
    elements.langOptions.forEach(option => {
        option.classList.toggle('active', option.getAttribute('data-lang') === lang);
    });
    
    // Update all translatable elements
    elements.translatableElements.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            // Handle different element types
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else if (element.tagName === 'BUTTON') {
                element.textContent = text;
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'nl' ? 'nl-BE' : 'en';
}

// ================================
// Navigation Management
// ================================
function initNavigation() {
    updateActiveNavLink();
}

function handleNavClick(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const navHeight = elements.navbar.offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (state.isMobileMenuOpen) {
            toggleMobileMenu();
        }
    }
}

function handleScroll() {
    const scrollPosition = window.scrollY;
    
    // Update navbar style
    if (scrollPosition > 50 && !state.isScrolled) {
        state.isScrolled = true;
        elements.navbar?.classList.add('scrolled');
    } else if (scrollPosition <= 50 && state.isScrolled) {
        state.isScrolled = false;
        elements.navbar?.classList.remove('scrolled');
    }
    
    // Update active nav link
    updateActiveNavLink();
    
    // Trigger scroll animations
    handleScrollAnimations();
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navHeight = elements.navbar?.offsetHeight || 0;
    const scrollPosition = window.scrollY + navHeight + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            elements.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

function toggleMobileMenu() {
    state.isMobileMenuOpen = !state.isMobileMenuOpen;
    elements.navMenu?.classList.toggle('active');
    elements.mobileToggle?.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = state.isMobileMenuOpen ? 'hidden' : '';
}

// ================================
// Scroll Animations
// ================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate skill bars
                if (entry.target.classList.contains('skill-category')) {
                    animateSkillBars(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe sections and cards
    const elementsToAnimate = document.querySelectorAll(
        '.detail-card, .skill-category, .contact-item, .projects-placeholder'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function handleScrollAnimations() {
    // This function can be used for additional scroll-based animations
}

function animateSkillBars(container) {
    const skillBars = container.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.width = bar.style.getPropertyValue('--progress') || '0%';
        }, index * 100);
    });
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ================================
// Contact Form Management
// ================================
function initContactForm() {
    elements.contactForm?.addEventListener('submit', handleFormSubmit);
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name')?.value,
        email: document.getElementById('email')?.value,
        subject: document.getElementById('subject')?.value,
        message: document.getElementById('message')?.value
    };
    
    // Get submit button
    const submitButton = elements.contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = state.currentLang === 'nl' ? 'Verzenden...' : 'Sending...';
    
    try {
        // Create mailto link (since this is a static site)
        const subject = encodeURIComponent(formData.subject);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const mailtoLink = `mailto:jelledesouter@gmail.com?subject=${subject}&body=${body}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        showFormMessage('success', 
            state.currentLang === 'nl' 
                ? 'Bedankt! Je e-mailclient wordt geopend.' 
                : 'Thank you! Your email client is opening.'
        );
        
        // Reset form
        elements.contactForm.reset();
        
    } catch (error) {
        console.error('Form submission error:', error);
        showFormMessage('error', 
            state.currentLang === 'nl' 
                ? 'Er is iets misgegaan. Probeer het later opnieuw.' 
                : 'Something went wrong. Please try again later.'
        );
    } finally {
        // Reset button
        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }, 2000);
    }
}

function showFormMessage(type, message) {
    // Remove existing message if any
    const existingMessage = elements.contactForm.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `form-message form-message-${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 0.5rem;
        font-weight: 500;
        background: ${type === 'success' ? 'var(--success)' : 'var(--error)'};
        color: white;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(animationStyle);
    
    // Append message
    elements.contactForm.appendChild(messageEl);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageEl.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => messageEl.remove(), 300);
    }, 5000);
}

// ================================
// Utility Functions
// ================================
function updateYear() {
    if (elements.yearSpan) {
        elements.yearSpan.textContent = new Date().getFullYear();
    }
}

// ================================
// Performance Optimization
// ================================
// Debounce function for scroll events
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

// Optimize scroll handler
const optimizedScrollHandler = debounce(handleScroll, 10);
window.removeEventListener('scroll', handleScroll);
window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

// ================================
// Keyboard Navigation
// ================================
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && state.isMobileMenuOpen) {
        toggleMobileMenu();
    }
});

// ================================
// Preload Critical Resources
// ================================
function preloadCriticalResources() {
    const criticalFonts = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap'
    ];
    
    criticalFonts.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = font;
        document.head.appendChild(link);
    });
}

// ================================
// Analytics & Tracking (Optional)
// ================================
function trackEvent(category, action, label) {
    // Placeholder for analytics tracking
    // Can be integrated with Google Analytics, Plausible, etc.
    console.log('Event tracked:', { category, action, label });
}

// Track page view
trackEvent('Navigation', 'Page View', window.location.pathname);

// Track language changes
const originalUpdateLanguage = updateLanguage;
updateLanguage = function(lang) {
    originalUpdateLanguage(lang);
    trackEvent('User Interaction', 'Language Change', lang);
};

// Track theme changes
const originalToggleTheme = toggleTheme;
toggleTheme = function() {
    originalToggleTheme();
    trackEvent('User Interaction', 'Theme Toggle', state.theme);
};

// ================================
// Error Handling
// ================================
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    // Could send to error tracking service
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // Could send to error tracking service
});

// ================================
// Console Message
// ================================
console.log(
    '%c👋 Hello there! ',
    'font-size: 20px; font-weight: bold; color: #0066ff;'
);
console.log(
    '%cInterested in the code? Check out the source at https://github.com/jelledesouter',
    'font-size: 14px; color: #00d4aa;'
);
console.log(
    '%c🚀 This site is built with vanilla HTML, CSS, and JavaScript - no frameworks!',
    'font-size: 12px; color: #6c757d;'
);

// ================================
// Export for testing (if needed)
// ================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        state,
        toggleTheme,
        updateLanguage,
        handleFormSubmit
    };
}
