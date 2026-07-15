// ============ NAV: scroll state + mobile menu ============
const nav = document.getElementById('nav');
const navLinks = document.getElementById('navLinks');
const menuToggle = document.getElementById('menuToggle');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============ ANIMATED COUNTERS ============
const counters = document.querySelectorAll('.trust-num[data-count]');
const animateCounter = (el) => {
  const target = parseInt(el.getAttribute('data-count'), 10);
  const suffix = el.getAttribute('data-suffix') || '';
  const span = el.querySelector('span') || el;
  let current = 0;
  const duration = 1400;
  const startTime = performance.now();
  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    current = Math.floor(progress * target);
    span.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(step);
    else span.textContent = target + suffix;
  };
  requestAnimationFrame(step);
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
counters.forEach(c => counterObserver.observe(c));

// ============ SCROLL REVEAL ============
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

// ============ FAQ ACCORDION ============
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  q.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(open => open.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// ============ FLOATING APPLY BAR ON MOBILE ============
const applySection = document.getElementById('apply');
const fabApply = document.querySelector('.fab-apply');
if (fabApply) {
  const fabObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      fabApply.style.display = (entry.isIntersecting || window.innerWidth > 760) ? 'none' : 'flex';
    });
  }, { threshold: 0 });
  if (applySection) fabObserver.observe(applySection);
}
