// التأثيرات التفاعلية عند التحويم على بطاقات الخدمة
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.3)';
        card.style.transform = 'scale(1.1)';
    });

    card.addEventListener('mouseout', () => {
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        card.style.transform = 'scale(1)';
    });
});

// استخدام مكتبة ScrollReveal لإظهار العناصر عند التمرير
ScrollReveal().reveal('.service-card', {
    delay: 200,
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom'
});

ScrollReveal().reveal('header h1', {
    delay: 100,
    distance: '20px',
    duration: 800,
    origin: 'top'
});

ScrollReveal().reveal('header p', {
    delay: 300,
    distance: '20px',
    duration: 800,
    origin: 'top'
});

ScrollReveal().reveal('.video-section video', {
    delay: 100,
    distance: '50px',
    duration: 1000,
    origin: 'bottom',
    easing: 'ease-in-out'
});

// تأثير تحميل الصفحة
window.addEventListener('load', () => {
    document.querySelector('body').style.opacity = '1';
});


// يبقى كما هو دون تغيير

ScrollReveal().reveal('footer .contact-info', {
    delay: 200,
    distance: '20px',
    duration: 800,
    origin: 'bottom'
});
