// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth close on nav link click (mobile)
document.querySelectorAll('.nav-links a').forEach((a) => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Theme toggle with localStorage persistence
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') document.documentElement.classList.add('light');

function setTheme(next) {
  if (next === 'light') {
    document.documentElement.classList.add('light');
  } else {
    document.documentElement.classList.remove('light');
  }
  localStorage.setItem('theme', next);
  if (themeToggle) themeToggle.textContent = next === 'light' ? '🌙' : '☀️';
}

if (themeToggle) {
  const current = document.documentElement.classList.contains('light') ? 'light' : 'dark';
  themeToggle.textContent = current === 'light' ? '🌙' : '☀️';
  themeToggle.addEventListener('click', () => {
    const isLight = document.documentElement.classList.toggle('light');
    setTheme(isLight ? 'light' : 'dark');
  });
}

// Set year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();


