/* ==========================================
   Wedding Website - JavaScript
   Bilingual Vietnamese-English support
   ========================================== */

// ==========================================
// Initialize Main Content
// ==========================================
const mainContent = document.getElementById('mainContent');

// ==========================================
// Language Configuration
// ==========================================
let currentLanguage = 'vi'; // Default language: Vietnamese

const translations = {
    vi: {
        // Navigation
        'Trang Chủ': 'Trang Chủ',
        'Câu Chuyện': 'Câu Chuyện',
        'Sự Kiện': 'Sự Kiện',
        'Bộ Ảnh': 'Bộ Ảnh',
        'Xác Nhận': 'Xác Nhận',
        'Món Quà': 'Món Quà',
        'Liên Hệ': 'Liên Hệ',
        
        // Form validation messages
        'nameRequired': 'Vui lòng nhập họ tên',
        'phoneRequired': 'Vui lòng nhập số điện thoại',
        'phoneInvalid': 'Số điện thoại không hợp lệ',
        
        // Calendar event texts
        'engagementTitle': 'Lễ Vu Quy - Thuỷ & Thuỳ',
        'weddingTitle': 'Lễ Cưới - Thuỷ & Thuỳ',
        'engagementDesc': 'Lễ Vu Quy của Nguyễn Trọng Thuỷ và Lê Thị Diệu Thuỳ',
        'weddingDesc': 'Lễ cưới của Nguyễn Trọng Thuỷ và Lê Thị Diệu Thuỳ'
    },
    en: {
        // Navigation
        'Trang Chủ': 'Home',
        'Câu Chuyện': 'Our Story',
        'Sự Kiện': 'Events',
        'Bộ Ảnh': 'Gallery',
        'Xác Nhận': 'RSVP',
        'Món Quà': 'Gift',
        'Liên Hệ': 'Contact',
        
        // Form validation messages
        'nameRequired': 'Please enter your name',
        'phoneRequired': 'Please enter your phone number',
        'phoneInvalid': 'Invalid phone number',
        
        // Calendar event texts
        'engagementTitle': 'Bride Ceremony - Thuy & Thuy',
        'weddingTitle': 'Wedding Ceremony - Thuy & Thuy',
        'engagementDesc': 'Bride ceremony of Nguyen Trong Thuy and Le Thi Dieu Thuy',
        'weddingDesc': 'Wedding ceremony of Nguyen Trong Thuy and Le Thi Dieu Thuy'
    }
};

// ==========================================
// Language Toggle Functionality
// ==========================================
const languageToggle = document.getElementById('languageToggle');

const toggleLanguage = () => {
    currentLanguage = currentLanguage === 'vi' ? 'en' : 'vi';
    updateLanguage();
};

const updateLanguage = () => {
    // Update all elements with data-vi and data-en attributes
    const elements = document.querySelectorAll('[data-vi][data-en]');
    
    elements.forEach(element => {
        const viText = element.getAttribute('data-vi');
        const enText = element.getAttribute('data-en');
        
        if (currentLanguage === 'vi') {
            element.textContent = viText;
        } else {
            element.textContent = enText;
        }
    });
    
    // Update placeholders
    const inputsWithPlaceholder = document.querySelectorAll('[data-placeholder-vi][data-placeholder-en]');
    inputsWithPlaceholder.forEach(input => {
        const viPlaceholder = input.getAttribute('data-placeholder-vi');
        const enPlaceholder = input.getAttribute('data-placeholder-en');
        
        input.placeholder = currentLanguage === 'vi' ? viPlaceholder : enPlaceholder;
    });
    
    // Update language toggle button (if it exists)
    if (languageToggle) {
        const flagSpan = languageToggle.querySelector('.flag');
        const langText = languageToggle.querySelector('.lang-text');
        
        if (flagSpan && langText) {
            if (currentLanguage === 'vi') {
                flagSpan.textContent = '🇻🇳';
                langText.textContent = 'EN';
            } else {
                flagSpan.textContent = '🇬🇧';
                langText.textContent = 'VI';
            }
        }
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
};

// Event listener for language toggle (if it exists)
if (languageToggle) {
    languageToggle.addEventListener('click', toggleLanguage);
}

// ==========================================
// Countdown Timer
// ==========================================
const weddingDate = new Date('2026-02-26T11:00:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    } else {
        // Wedding day has arrived!
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
};

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);


// ==========================================
// Scroll to Top Button + Floating Music Icon
// ==========================================
const scrollToTopBtn = document.getElementById('scrollToTop');
const floatingMusicIcon = document.getElementById('floatingMusicIcon');

const isElementInViewport = (el) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

window.addEventListener('scroll', () => {
    const scrolledFarEnough = window.pageYOffset > 500;

    // Toggle scroll-to-top visibility
    if (scrolledFarEnough) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }

    // Show floating music icon only when:
    // - we are scrolled down enough AND
    // - the original header music icon is no longer fully visible
    if (floatingMusicIcon && musicIcon) {
        const headerMusicVisible = isElementInViewport(musicIcon);
        if (scrolledFarEnough && !headerMusicVisible) {
            floatingMusicIcon.classList.add('visible');

            // Keep play/stop visual state in sync with header icon
            if (musicIcon.classList.contains('stopped')) {
                floatingMusicIcon.classList.add('stopped');
            } else {
                floatingMusicIcon.classList.remove('stopped');
            }
        } else {
            floatingMusicIcon.classList.remove('visible');
        }
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// Fade-in Animation on Scroll
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px 100px 0px' // Trigger 100px before element enters viewport
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in-up class
const fadeElements = document.querySelectorAll('.fade-in-up');
fadeElements.forEach(element => observer.observe(element));

// ==========================================
// Wedding Information Animation
// ==========================================
const weddingInfoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const countdownSection = entry.target;
            const weddingInfo = countdownSection.querySelector('.wedding-information');
            const weddingSignature = countdownSection.querySelector('.wedding-signature');
            
            if (weddingInfo) {
                const groomInfo = weddingInfo.querySelector('.groom .info');
                const brideInfo = weddingInfo.querySelector('.bride .info');
                const groomImage = weddingInfo.querySelector('.groom .image');
                const brideImage = weddingInfo.querySelector('.bride .image');
                
                // Animate groom info first (slides from left)
                if (groomInfo) {
                    setTimeout(() => {
                        groomInfo.classList.add('animate-in');
                    }, 100);
                }
                
                // Animate bride info (slides from right)
                if (brideInfo) {
                    setTimeout(() => {
                        brideInfo.classList.add('animate-in');
                    }, 250);
                }
                
                // Animate groom image (slides from left to center)
                if (groomImage) {
                    setTimeout(() => {
                        groomImage.classList.add('animate-in');
                    }, 400);
                }
                
                // Animate bride image (slides from right to center)
                if (brideImage) {
                    setTimeout(() => {
                        brideImage.classList.add('animate-in');
                    }, 550);
                }
            }
            
            if (weddingSignature) {
                const nameElements = weddingSignature.querySelectorAll('.name');
                const ampersand = weddingSignature.querySelector('.ampersand');
                
                // Animate names first, then ampersand
                nameElements.forEach((name, index) => {
                    setTimeout(() => {
                        name.classList.add('animate-in');
                    }, 700 + (index * 150));
                });
                
                if (ampersand) {
                    setTimeout(() => {
                        ampersand.classList.add('animate-in');
                    }, 1000);
                }
            }
            
            // Unobserve after animation starts
            weddingInfoObserver.unobserve(countdownSection);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px 200px 0px' // Trigger 200px before section enters viewport
});

// Observe countdown section (which contains wedding-information)
const countdownSection = document.querySelector('.countdown-section');
if (countdownSection) {
    weddingInfoObserver.observe(countdownSection);
}

// ==========================================
// Section Animations (RSVP, Gift, Events, Gallery)
// ==========================================
const sectionAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const section = entry.target;
            
            // Animate section title
            const sectionTitle = section.querySelector('.section-title');
            if (sectionTitle) {
                setTimeout(() => {
                    sectionTitle.classList.add('animate-in');
                }, 100);
            }
            
            // Animate section subtitle
            const sectionSubtitle = section.querySelector('.section-subtitle');
            if (sectionSubtitle) {
                setTimeout(() => {
                    sectionSubtitle.classList.add('animate-in');
                }, 200);
            }
            
            // RSVP Section - animate form container and form groups
            if (section.classList.contains('rsvp-section')) {
                const formContainer = section.querySelector('.rsvp-form-container');
                if (formContainer) {
                    setTimeout(() => {
                        formContainer.classList.add('animate-in');
                    }, 400);
                }
                
                const formGroups = section.querySelectorAll('.form-group');
                formGroups.forEach((group, index) => {
                    setTimeout(() => {
                        group.classList.add('animate-in');
                    }, 600 + (index * 100));
                });
            }
            
            // Gift Section - animate gift cards
            if (section.classList.contains('gift-section')) {
                const giftCards = section.querySelectorAll('.gift-card');
                giftCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate-in');
                    }, 400 + (index * 200));
                });
            }
            
            // Events Section - animate event cards
            if (section.classList.contains('events-section')) {
                const eventCards = section.querySelectorAll('.event-card');
                eventCards.forEach((card, index) => {
                    // Remove fade-in-up class if present to use new animation
                    card.classList.remove('fade-in-up');
                    setTimeout(() => {
                        card.classList.add('animate-in');
                    }, 400 + (index * 150));
                });
            }
            
            // Gallery Section - animate gallery viewer
            if (section.classList.contains('gallery-section')) {
                const galleryViewer = section.querySelector('.gallery-viewer');
                if (galleryViewer) {
                    setTimeout(() => {
                        galleryViewer.classList.add('animate-in');
                    }, 400);
                }
            }
            
            // Unobserve after animation starts
            sectionAnimationObserver.unobserve(section);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px 150px 0px' // Trigger 150px before section enters viewport
});

// Observe all main sections
const sectionsToAnimate = document.querySelectorAll('.rsvp-section, .gift-section, .events-section, .gallery-section');
sectionsToAnimate.forEach(section => {
    sectionAnimationObserver.observe(section);
});

// ==========================================
// Gallery Lightbox
// ==========================================
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentImageIndex = 0;
const galleryImages = [];

// Gallery viewer (main image + thumbnails)
const galleryMainImage = document.getElementById('galleryMainImage');
const galleryGrid = document.getElementById('galleryGrid');
const galleryMainPrev = document.getElementById('galleryMainPrev');
const galleryMainNext = document.getElementById('galleryMainNext');
const galleryThumbsPrev = document.getElementById('galleryThumbsPrev');
const galleryThumbsNext = document.getElementById('galleryThumbsNext');

// Collect all gallery images
galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    galleryImages.push(img.src);
    
    item.addEventListener('click', () => {
        // Update main image first for the "hero + thumbs" view
        setGalleryMain(index);
        openLightbox(index);
    });
});

const setGalleryMain = (index, shouldScrollIntoView = true) => {
    currentImageIndex = index;

    // Update active thumb state
    galleryItems.forEach(el => el.classList.remove('is-active'));
    const activeItem = galleryItems[currentImageIndex];
    if (activeItem) activeItem.classList.add('is-active');

    // Update main image (if exists on page)
    if (galleryMainImage && galleryImages[currentImageIndex]) {
        // Simple smooth swap: fade out then swap then fade in
        galleryMainImage.style.opacity = '0.25';
        const nextSrc = galleryImages[currentImageIndex];
        const preloader = new Image();
        preloader.onload = () => {
            galleryMainImage.src = nextSrc;
            galleryMainImage.style.opacity = '1';
        };
        preloader.src = nextSrc;
    }

    // Keep active thumbnail visible (only when user navigates gallery)
    if (activeItem && shouldScrollIntoView) {
        activeItem.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
    }
};

const openLightbox = (index) => {
    currentImageIndex = index;
    lightboxImage.src = galleryImages[currentImageIndex];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
};

const showPrevImage = () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImage.src = galleryImages[currentImageIndex];
};

const showNextImage = () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    lightboxImage.src = galleryImages[currentImageIndex];
};

const showPrevMain = () => {
    const nextIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setGalleryMain(nextIndex, true);
};

const showNextMain = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    setGalleryMain(nextIndex, true);
};

const scrollThumbsBy = (direction) => {
    if (!galleryGrid) return;
    const amount = Math.max(260, Math.floor(galleryGrid.clientWidth * 0.7));
    galleryGrid.scrollBy({ left: direction * amount, behavior: 'smooth' });
};

// Event listeners for lightbox
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxPrev) {
    lightboxPrev.addEventListener('click', showPrevImage);
}

if (lightboxNext) {
    lightboxNext.addEventListener('click', showNextImage);
}

// Event listeners for gallery viewer
if (galleryMainPrev) {
    galleryMainPrev.addEventListener('click', showPrevMain);
}

if (galleryMainNext) {
    galleryMainNext.addEventListener('click', showNextMain);
}

if (galleryThumbsPrev) {
    galleryThumbsPrev.addEventListener('click', () => scrollThumbsBy(-1));
}

if (galleryThumbsNext) {
    galleryThumbsNext.addEventListener('click', () => scrollThumbsBy(1));
}

// Close lightbox on background click
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    }
});

// Initialize hero gallery on load
if (galleryItems.length && galleryMainImage) {
    // Do not scroll thumbnails into view on initial load (prevents auto-scroll to gallery on mobile)
    setGalleryMain(0, false);
    // Clicking the main image opens lightbox too
    galleryMainImage.addEventListener('click', () => openLightbox(currentImageIndex));
}

// ==========================================
// RSVP Form Validation & Submission
// ==========================================
const rsvpForm = document.getElementById('rsvpForm');
const rsvpSuccess = document.getElementById('rsvpSuccess');
const rsvpError = document.getElementById('rsvpError');

const validatePhone = (phone) => {
    // Vietnamese phone number validation (supports formats like 0912345678 or +84912345678)
    const phoneRegex = /^(\+84|0)(3|5|7|8|9)\d{8}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
};

const showError = (elementId, message) => {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
};

const clearErrors = () => {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
};

if (rsvpForm) {
    rsvpForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        clearErrors();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const note = document.getElementById('note').value.trim();
        
        // Validation
        let isValid = true;
        
        if (!name) {
            showError('nameError', translations[currentLanguage].nameRequired);
            isValid = false;
        }
        
        if (!phone) {
            showError('phoneError', translations[currentLanguage].phoneRequired);
            isValid = false;
        } else if (!validatePhone(phone)) {
            showError('phoneError', translations[currentLanguage].phoneInvalid);
            isValid = false;
        }
        
        if (!isValid) {
            return;
        }
        
        // Prepare data
        const formData = {
            name: name,
            phone: phone,
            note: note
        };
        
        try {
            // Submit to backend
            // OPTION 1: PHP Backend
            const response = await fetch('/api/rsvp.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            // OPTION 2: Node.js Backend (uncomment to use)
            // const response = await fetch('/api/rsvp', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(formData)
            // });
            
            if (response.ok) {
                // Show success message
                rsvpForm.style.display = 'none';
                rsvpSuccess.classList.add('active');
                
                // Reset form
                rsvpForm.reset();
                
                // Hide success message after 5 seconds and show form again
                setTimeout(() => {
                    rsvpSuccess.classList.remove('active');
                    rsvpForm.style.display = 'block';
                }, 5000);
            } else {
                throw new Error('Failed to submit RSVP');
            }
        } catch (error) {
            console.error('RSVP submission error:', error);
            
            // Show error message
            rsvpForm.style.display = 'none';
            rsvpError.classList.add('active');
            
            // Hide error message after 5 seconds and show form again
            setTimeout(() => {
                rsvpError.classList.remove('active');
                rsvpForm.style.display = 'block';
            }, 5000);
        }
    });
}

// ==========================================
// Add to Calendar Functionality
// ==========================================
const addToCalendar = (eventType) => {
    let eventTitle, eventDescription, eventLocation, eventDate, eventEndDate;
    
    if (eventType === 'engagement') {
        eventTitle = translations[currentLanguage].engagementTitle;
        eventDescription = translations[currentLanguage].engagementDesc;
        eventLocation = 'Sân văn hoá thôn 1';
        eventDate = '20260222T103000';
        eventEndDate = '20260222T123000';
    } else {
        eventTitle = translations[currentLanguage].weddingTitle;
        eventDescription = translations[currentLanguage].weddingDesc;
        eventLocation = 'Tư gia nhà trai';
        eventDate = '20260226T110000';
        eventEndDate = '20260226T150000';
    }
    
    // Create ICS file content
    const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Wedding Website//EN',
        'BEGIN:VEVENT',
        `DTSTART:${eventDate}`,
        `DTEND:${eventEndDate}`,
        `SUMMARY:${eventTitle}`,
        `DESCRIPTION:${eventDescription}`,
        `LOCATION:${eventLocation}`,
        'STATUS:CONFIRMED',
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\n');
    
    // Create download link
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${eventType}_thuy_thuy.ics`;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// Make addToCalendar function globally accessible
window.addToCalendar = addToCalendar;

// ==========================================
// Lazy Loading Images
// ==========================================
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    lazyImages.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const lazyLoadObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src;
                lazyLoadObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => lazyLoadObserver.observe(img));
}

// ==========================================
// Auto Slow Scroll (Top → Bottom) with Easing
// Stops on User Interaction
// ==========================================
let autoScrollRAF = null;
let autoScrollStopped = false;

// Ease-out cubic (smooth deceleration)
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const startAutoScroll = (duration = 75000) => {
    if (autoScrollRAF) return;

    const startY = window.scrollY;
    const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

    const startTime = performance.now();
    autoScrollStopped = false;

    const step = (now) => {
        // Check immediately if stopped
        if (autoScrollStopped) {
            autoScrollRAF = null;
            return;
        }

        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);

        // Double-check before scrolling
        if (autoScrollStopped) {
            autoScrollRAF = null;
            return;
        }

        const targetY = startY + (maxScroll - startY) * eased;
        window.scrollTo(0, targetY);

        if (progress < 1 && !autoScrollStopped) {
            autoScrollRAF = requestAnimationFrame(step);
        } else {
            autoScrollRAF = null;
        }
    };

    autoScrollRAF = requestAnimationFrame(step);
};

const stopAutoScroll = () => {
    autoScrollStopped = true;
    if (autoScrollRAF) {
        cancelAnimationFrame(autoScrollRAF);
        autoScrollRAF = null;
    }
};

// Stop on ANY user interaction - use capture phase for immediate stop
const stopOnInteraction = () => {
    stopAutoScroll();
};

// Listen for various user interactions
window.addEventListener('wheel', stopOnInteraction, { passive: true, once: true, capture: true });
window.addEventListener('touchstart', stopOnInteraction, { passive: true, once: true, capture: true });
window.addEventListener('mousedown', stopOnInteraction, { passive: true, once: true, capture: true });
window.addEventListener('click', stopOnInteraction, { passive: true, once: true, capture: true });
window.addEventListener('keydown', stopOnInteraction, { passive: true, once: true, capture: true });

// Also listen on document for click/touch events (in case they don't bubble to window)
document.addEventListener('click', stopOnInteraction, { passive: true, once: true, capture: true });
document.addEventListener('touchstart', stopOnInteraction, { passive: true, once: true, capture: true });
document.addEventListener('mousedown', stopOnInteraction, { passive: true, once: true, capture: true });

// ==========================================
// Initialize on Page Load
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Show main content immediately (no splash screen)
    if (mainContent) {
        mainContent.style.display = 'block';
    }
    
    // Set initial language
    updateLanguage();
    
    // Add smooth reveal animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Ensure page starts at top
    window.scrollTo(0, 0);
    
    // Trigger any entrance animations
    setTimeout(() => {
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.style.opacity = '1';
        }
        // Initialize and try to auto-play music
        initMusicPlayer();
    }, 100);
});

// ==========================================
// Start Auto-Scroll After Page Fully Loaded
// ==========================================
window.addEventListener('load', () => {
    // Wait a moment after all resources are loaded, then start auto-scroll
    setTimeout(() => {
        startAutoScroll();
    }, 500);
});

// ==========================================
// Performance Optimization
// ==========================================
// Debounce function for scroll events
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Apply debounce to scroll-heavy operations if needed
// Example: window.addEventListener('scroll', debounce(someFunction, 100));

// ==========================================
// Music Player Functionality
// ==========================================
let backgroundMusic = null;
let musicIcon = null;
let musicStarted = false;

const initMusicPlayer = () => {
    backgroundMusic = document.getElementById('backgroundMusic');
    musicIcon = document.getElementById('musicIcon');
    
    if (!backgroundMusic || !musicIcon) return;
    
    // Set volume (some browsers require this)
    backgroundMusic.volume = 0.7;
    
    // Try to auto-play music immediately
    tryPlayMusic();

    // Click on floating music icon should also toggle music
    if (floatingMusicIcon) {
        floatingMusicIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            // Mirror visual state from main icon
            if (musicIcon.classList.contains('stopped')) {
                floatingMusicIcon.classList.add('stopped');
            } else {
                floatingMusicIcon.classList.remove('stopped');
            }
            toggleMusic(e);
        });
    }
    
    // Handle click on music icon
    musicIcon.addEventListener('click', toggleMusic);
    
    // Also try to play on first user interaction (click anywhere on page)
    // This helps when autoplay is blocked by browser
    const startMusicOnInteraction = () => {
        if (!musicStarted && backgroundMusic && backgroundMusic.paused) {
            tryPlayMusic();
        }
    };
    
    // Try multiple interaction events to catch the first user interaction
    document.addEventListener('click', startMusicOnInteraction, { once: true, passive: true });
    document.addEventListener('touchstart', startMusicOnInteraction, { once: true, passive: true });
    document.addEventListener('keydown', startMusicOnInteraction, { once: true });
    
    // Update icon state when music ends or is paused
    backgroundMusic.addEventListener('pause', () => {
        musicIcon.classList.remove('playing');
        musicIcon.classList.add('stopped');
        if (floatingMusicIcon) {
            floatingMusicIcon.classList.add('stopped');
        }
    });
    
    backgroundMusic.addEventListener('play', () => {
        musicIcon.classList.add('playing');
        musicIcon.classList.remove('stopped');
        if (floatingMusicIcon) {
            floatingMusicIcon.classList.remove('stopped');
        }
        musicStarted = true;
    });
    
    // Also try to play when audio is loaded
    backgroundMusic.addEventListener('loadeddata', () => {
        if (!musicStarted) {
            tryPlayMusic();
        }
    });
};

const tryPlayMusic = () => {
    if (!backgroundMusic || !musicIcon) return;
    
    const playPromise = backgroundMusic.play();
    
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                // Music started playing
                musicIcon.classList.add('playing');
                musicIcon.classList.remove('stopped');
                musicStarted = true;
            })
            .catch(error => {
                // Auto-play was prevented (browser policy)
                console.log('Auto-play prevented. User interaction required.');
                musicIcon.classList.add('stopped');
            });
    }
};

const toggleMusic = (e) => {
    if (!backgroundMusic) return;
    
    // Prevent event bubbling
    if (e) {
        e.stopPropagation();
    }
    
    if (backgroundMusic.paused) {
        // Resume music
        backgroundMusic.play()
            .then(() => {
                musicIcon.classList.add('playing');
                musicIcon.classList.remove('stopped');
                musicStarted = true;
            })
            .catch(error => {
                console.error('Error playing music:', error);
            });
    } else {
        // Pause music
        backgroundMusic.pause();
        musicIcon.classList.remove('playing');
        musicIcon.classList.add('stopped');
    }
};

// ==========================================
// Console Welcome Message
// ==========================================
console.log('%c💍 Thuỷ & Thuỳ Wedding Website 💍', 'font-size: 20px; font-weight: bold; color: #f4c2c2;');
console.log('%cThank you for visiting our wedding website!', 'font-size: 14px; color: #6b6b6b;');
console.log('%cCảm ơn bạn đã ghé thăm trang web cưới của chúng tôi!', 'font-size: 14px; color: #6b6b6b;');


