// ==================== HERO SLIDER ====================
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let slideIndex = 0;
let autoSlideInterval;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    slides[i].classList.add("active");
    dots[i].classList.add("active");
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        stopAutoSlide();
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
        startAutoSlide();
    });
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        stopAutoSlide();
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
        startAutoSlide();
    });
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

if (slides.length > 0) {
    showSlide(0);
    startAutoSlide();
}

// ==================== STICKY HEADER ====================
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 100);
});

// ==================== MOBILE MENU ====================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".menu");
if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => navLinks.classList.toggle("show"));
}

// ==================== VIDEO MODAL ====================
const playBtn = document.getElementById('playBtn');
const modal = document.getElementById("videoModal");
const closeBtn = document.getElementById("closeBtn");
const iframe = document.getElementById("videoFrame");
const videoURL = "https://www.youtube.com/embed/_IhFKSV-UQU?si=ZLU-uog_a3k5q9gF";

if (playBtn && modal && closeBtn && iframe) {
    playBtn.onclick = () => { modal.style.display = "block"; iframe.src = videoURL; };
    closeBtn.onclick = () => { modal.style.display = "none"; iframe.src = ""; };
    window.addEventListener("click", e => {
        if (e.target === modal) { modal.style.display = "none"; iframe.src = ""; }
    });
}

// ==================== TESTIMONIAL SLIDER ====================
let currentTestimonial = 0;

const testimonials = [
    {
        img: "image/testimonial-image/marie.webp",
        text: "Farha Restaurant has completely redefined fine dining for me. Every dish is a masterpiece.",
        name: "MARIE SIMMONS",
        location: "NEW YORK, USA"
    },
    {
        img: "image/testimonial-image/okon.jpg",
        text: "The ambiance, the flavors, and the attention to detail are unmatched.",
        name: "OLIVER CHEN",
        location: "LONDON, UK"
    },
    {
        img: "image/testimonial-image/fatima.jpg",
        text: "Best African-Asian fusion food I've ever had! Highly recommended!",
        name: "FATIMA ALI",
        location: "LAGOS, NIGERIA"
    }
];

function showTestimonial(index) {
    const card = document.getElementById('testimonial-content') || document.querySelector('.testimonial-card');
    if (!card) return;

    card.style.opacity = '0';

    setTimeout(() => {
        card.innerHTML = `
            <div class="testimonial-content">
                <img src="${testimonials[index].img}" 
                     onerror="this.src='https://via.placeholder.com/95?text=Photo'" 
                     class="rounded-circle mb-4 border border-3 border-white shadow object-fit-cover" 
                     width="95" height="95" alt="${testimonials[index].name}">
                
                <p class="lead fst-italic mb-4">"${testimonials[index].text}"</p>
                
                <div class="stars mb-3">★★★★★</div>
                
                <h5 class="fw-bold">${testimonials[index].name}</h5>
                <small class="text-muted">${testimonials[index].location}</small>
            </div>
        `;
        card.style.opacity = '1';
    }, 400);
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Auto slide testimonials
setInterval(nextTestimonial, 6500);
showTestimonial(0);   // Show first one

// ==================== UPCOMING EVENTS SLIDER (REAL) ====================
let currentEvent = 0;

const events = [
    {
        date: "08:00 PM TUESDAY - 21 NOVEMBER 2025",
        title: "WINES DURING SPECIFIC NIGHTS",
        desc: "Enjoy exclusive wine tasting with our sommelier. Special selection from Italy and France.",
        image: "image/upcoming/upcoming.jpg"
    },
    {
        date: "07:30 PM SATURDAY - 15 DECEMBER 2025",
        title: "CHRISTMAS GALA DINNER",
        desc: "A special festive evening with live music, gourmet menu and premium drinks.",
        image: "image/upcoming/second-event.webp"
    },
    {
        date: "06:00 PM FRIDAY - 05 JANUARY 2026",
        title: "NEW YEAR WINE & CHEESE NIGHT",
        desc: "Celebrate the new year with the finest wines and artisanal cheeses.",
        image: "image/upcoming/upcoming.webp"
    }
];

function showEvent(index) {
    const card = document.querySelector('.event-card');
    if (!card) return;

    const e = events[index];

    card.innerHTML = `
        <div class="position-relative" style="flex: 1; min-height: 420px;">
            <img src="${e.image}" alt="Event" class="w-100 h-100 object-fit-cover">
            <div class="red-bar position-absolute top-0 start-0 h-100 d-flex align-items-center justify-content-center text-white text-center"
                 style="background: #DC7232; width: 55px; writing-mode: vertical-rl; transform: rotate(180deg); font-size: 14px; font-weight: 600; letter-spacing: 2px;">
                ${e.date}
            </div>
        </div>

        <div class="p-5" style="flex: 1;">
            <h2 class="fw-bold mb-3">${e.title}</h2>
            <p class="text-muted mb-4">${e.desc}</p>

            <div class="countdown d-flex gap-4 mb-4">
                <div class="text-center"><h3 class="fw-bold text-danger mb-0" id="days">25</h3><small>DAYS</small></div>
                <div class="text-center"><h3 class="fw-bold text-danger mb-0" id="hours">12</h3><small>HOURS</small></div>
                <div class="text-center"><h3 class="fw-bold text-danger mb-0" id="minutes">59</h3><small>MINUTES</small></div>
                <div class="text-center"><h3 class="fw-bold text-danger mb-0" id="seconds">29</h3><small>SECONDS</small></div>
            </div>

            <a href="#" class="btn btn-dark px-4 py-3">VIEW DETAILS →</a>
        </div>
    `;
}

function nextEvent() {
    currentEvent = (currentEvent + 1) % events.length;
    showEvent(currentEvent);
}

function prevEvent() {
    currentEvent = (currentEvent - 1 + events.length) % events.length;
    showEvent(currentEvent);
}

// Initialize Events
showEvent(0);