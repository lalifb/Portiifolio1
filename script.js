var cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", (dets) => {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  cursorBlur.style.left = dets.x - 125 + "px";
  cursorBlur.style.top = dets.y - 125 + "px";
});

// Dark Mode Toggle
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.dataset.theme = body.dataset.theme === "dark" ? "light" : "dark";
  themeToggle.querySelector("i").classList.toggle("fa-moon");
  themeToggle.querySelector("i").classList.toggle("fa-sun");
  localStorage.setItem("theme", body.dataset.theme);
});

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.dataset.theme = savedTheme;
  if (savedTheme === "dark") {
    themeToggle.querySelector("i").classList.replace("fa-moon", "fa-sun");
  }
}

// Scroll Progress Indicator
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = (scrollTop / docHeight) * 100;
  document.querySelector(
    ".scroll-indicator .progress"
  ).style.width = `${scrollProgress}%`;
});

// Typing Animation
const typingText = document.querySelector(".typing-text span");
const words = [
  "Web Developer",
  "CS Student",
  "Problem Solver",
  "Tech Enthusiast",
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

// Start typing animation
type();

// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuBtn.querySelector("i").classList.toggle("fa-bars");
  menuBtn.querySelector("i").classList.toggle("fa-times");
});
