// ===== MOBILE MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== SCROLL TO TOP BUTTON =====
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== CONTACT FORM HANDLER =====
const contactForm = document.getElementById('contactForm');
let formMessage = document.getElementById('formMessage');

// Jika form lokal dihapus, jangan jalankan handler.
if (contactForm) {
    if (!formMessage) {
        // buat elemen pesan jika tidak ada (safe fallback)
        formMessage = document.createElement('p');
        formMessage.id = 'formMessage';
        formMessage.style.display = 'none';
        formMessage.style.marginTop = '10px';
        formMessage.style.padding = '10px';
        formMessage.style.borderRadius = '5px';
        contactForm.appendChild(formMessage);
    }
// Jika ingin menggunakan Formspree, isi ENDPOINT ini, contoh: 'https://formspree.io/f/xxxxxx'
const FORMSPREE_ENDPOINT = '';

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const notelp = document.getElementById('notelp').value.trim();
    const subjek = document.getElementById('subjek').value;
    const pesan = document.getElementById('pesan').value.trim();

    // Validation
    if (!nama || !email || !notelp || !subjek || !pesan) {
        showFormMessage('Mohon isi semua kolom yang diperlukan!', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('Format email tidak valid!', 'error');
        return;
    }

    // Phone validation
    const phoneRegex = /^(\+62|0)[0-9]{9,12}$/;
    if (!phoneRegex.test(notelp)) {
        showFormMessage('Format nomor telepon tidak valid!', 'error');
        return;
    }

    // Prepare UI
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Mengirim...';
    btn.disabled = true;

    if (FORMSPREE_ENDPOINT) {
        const formData = new FormData();
        formData.append('nama', nama);
        formData.append('email', email);
        formData.append('notelp', notelp);
        formData.append('subjek', subjek);
        formData.append('pesan', pesan);

        fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok === false || data.error) {
                throw new Error(data.error || 'Gagal mengirim pesan');
            }
            showFormMessage('Pesan Anda telah berhasil dikirim! Terima kasih.', 'success');
            contactForm.reset();
        })
        .catch(err => {
            console.error('Form submission error:', err);
            showFormMessage('Terjadi kesalahan saat mengirim. Silakan coba lagi nanti.', 'error');
        })
        .finally(() => {
            btn.textContent = originalText;
            btn.disabled = false;
        });
    } else {
        // Fallback: simulasi pengiriman (untuk development tanpa server)
        setTimeout(() => {
            console.log({
                nama,
                email,
                notelp,
                subjek,
                pesan,
                tanggal: new Date().toLocaleString('id-ID')
            });

            showFormMessage('Pesan Anda telah berhasil dikirim! (simulasi)', 'success');
            contactForm.reset();
            btn.textContent = originalText;
            btn.disabled = false;
        }, 800);
    }
});
} // end if(contactForm)

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = type;
    formMessage.style.display = 'block';

    // Auto hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);

    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===== SMOOTH SCROLL FOR NAVIGATION =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
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

// Observe cards and items for fade-in animation
document.querySelectorAll('.requirement-card, .gallery-item, .info-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ===== TABLE ROW ANIMATION =====
document.querySelectorAll('.schedule-table tbody tr').forEach((tr, index) => {
    tr.style.opacity = '0';
    tr.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s forwards`;
});

// Add animation keyframe
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// ===== LAZY LOADING IMAGES =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}

// ===== ACTIVE LINK HIGHLIGHTING =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

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
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.querySelectorAll('.requirement-card, .gallery-item').forEach((el, index) => {
        setTimeout(() => {
            el.style.animation = `slideInLeft 0.6s ease forwards`;
        }, index * 100);
    });
});

// ===== STAT COUNTER ANIMATION (Optional) =====
function animateCounter(element, target) {
    let count = 0;
    const increment = target / 100;
    const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
            element.textContent = target;
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(count);
        }
    }, 30);
}

// ===== LOG READY =====
console.log('Website Penerimaan Mahasiswa Baru - Siap Digunakan');
console.log('Untuk menambah foto, replace URL pada gallery images');
