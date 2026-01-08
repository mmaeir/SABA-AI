// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const school = document.getElementById('school').value;
    const workshopType = document.getElementById('workshopType').value;
    const message = document.getElementById('message').value;
    
    // Create email subject and body
    const subject = encodeURIComponent('פנייה חדשה מאתר סבא AI');
    // Get workshop type display name
    const workshopTypeOptions = {
        'zoom-private': 'בזום - פרטי',
        'zoom-institutional': 'בזום - מוסדי',
        'in-person-private': 'פרונטלי - פרטי',
        'in-person-institutional': 'פרונטלי - מוסדי'
    };
    const workshopTypeDisplay = workshopTypeOptions[workshopType] || workshopType;

    const body = encodeURIComponent(
        `שלום,\n\nפנייה חדשה מהאתר:\n\n` +
        `שם: ${name}\n` +
        `אימייל: ${email}\n` +
        `טלפון: ${phone}\n` +
        `בית ספר/מוסד: ${school || 'לא צוין'}\n` +
        `סוג סדנה: ${workshopTypeDisplay}\n\n` +
        `הודעה:\n${message || 'אין הודעה'}`
    );
    
    // Create mailto link
    const mailtoLink = `mailto:moshe@maeir.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setTimeout(() => {
        alert('תודה! נפתחה תיבת דואר אלקטרוני עם פרטי הפנייה. אנא שלחו את ההודעה.\n\nנחזור אליכם בהקדם!');
        // Reset form
        this.reset();
    }, 500);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced scroll animation with stagger effect
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animated');
            }, index * 100);
        }
    });
}, observerOptions);

// Observe all cards and items with enhanced animations
document.querySelectorAll('.content-card, .benefit-item, .workshop-item, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add counter animation for numbers (if any)
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Add typing effect to hero title (optional enhancement)
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

// Enhanced form validation with visual feedback
document.getElementById('contactForm')?.addEventListener('input', function(e) {
    const input = e.target;
    if (input.value.trim() !== '') {
        input.style.borderColor = '#4CAF50';
        input.style.boxShadow = '0 0 0 3px rgba(76, 175, 80, 0.1)';
    } else {
        input.style.borderColor = '#E0E0E0';
        input.style.boxShadow = 'none';
    }
});

// Add ripple effect to buttons
document.querySelectorAll('.cta-button, .submit-button, .workshop-button, .details-button, .whatsapp-button, .whatsapp-float').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect dynamically
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth reveal animation for sections
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});








