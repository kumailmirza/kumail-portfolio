document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Scroll progress bar ---------- */
const progressBar = document.getElementById('progressBar');
function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

/* ---------- Cursor glow (desktop only) ---------- */
const cursorGlow = document.getElementById('cursorGlow');
const isTouch = window.matchMedia('(pointer: coarse)').matches;
if (!isTouch) {
  window.addEventListener('mousemove', (e) => {
    cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  });
}

/* ---------- Mobile nav toggle ---------- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});
document.querySelectorAll('[data-nav]').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll('.reveal-up');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach((el) => revealObserver.observe(el));

/* ---------- Stat count-up ---------- */
const stats = document.querySelectorAll('.stat');
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const numberEl = el.querySelector('.stat-number');
    const isDecimal = String(target).includes('.');
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      numberEl.textContent = (isDecimal ? value.toFixed(1) : Math.round(value)) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    statObserver.unobserve(el);
  });
}, { threshold: 0.4 });
stats.forEach((el) => statObserver.observe(el));

/* ---------- Case study expand/collapse ---------- */
document.querySelectorAll('.case-expand').forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    target.classList.toggle('open');
    btn.querySelector('span').textContent = expanded ? 'Read the full story' : 'Show less';
  });
});

/* ---------- Nav background on scroll ---------- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.style.background = 'rgba(10,10,11,0.85)';
    nav.style.borderBottom = '1px solid var(--border, #232325)';
  } else {
    nav.style.background = 'linear-gradient(to bottom, rgba(10,10,11,0.85), transparent)';
    nav.style.borderBottom = 'none';
  }
}, { passive: true });
