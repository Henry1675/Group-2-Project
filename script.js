// Change navbar on scroll
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
// Fade on Scroll (repeats every time)
const fadeElements = document.querySelectorAll('.fade-on-scroll');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible'); // allow repeat animation
        }
    });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));
function toggleMenu() {
    document.querySelector("nav").classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", function () {
  const sliders = [
    document.getElementById("slider1"),
    document.getElementById("slider2")
  ];

 


  sliders.forEach(slider => {
    const cards = slider.querySelectorAll(".media-card");
    const visibleCards = 3;
    const cardWidth = cards[0].offsetWidth + 30;
    let index = 0;

    const slide = () => {
      index++;
      if (index > cards.length - visibleCards) index = 0;
      slider.style.transform = `translateX(-${cardWidth * index}px)`;
    };

    let interval = setInterval(slide, 4000);

    slider.addEventListener("mouseenter", () => clearInterval(interval));
    slider.addEventListener("mouseleave", () => interval = setInterval(slide, 4000));
  });
});

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});

/* CLOSE MENU WHEN CLICKING OVERLAY */
overlay.addEventListener("click", closeMenu);

/* CLOSE WHEN CLICKING A LINK */
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

function closeMenu() {
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
}

/* SCROLL EFFECT */
window.addEventListener("scroll", () => {
  document
    .getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            el.classList.add('active');
        }
    });
});
const refLine = document.querySelector('.references-line');

if (refLine) {
    let moveX = 0;

    const items = refLine.children;
    const itemWidth = items[0].offsetWidth + 50; // adjust 50 if margin/padding differs
    const totalItems = items.length;

    setInterval(() => {
        moveX += itemWidth;

        // Loop back to start
        if (moveX >= itemWidth * totalItems) {
            moveX = 0;
        }

        refLine.style.transform = `translateX(-${moveX}px)`;
    }, 3200);
}
// Close menu when a link is clicked (mobile)
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('header nav');
        nav.classList.remove('active');
    });
});

