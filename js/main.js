/* ============================================
   MAIN — Boot sequence, scroll, observers
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Boot sequence
  runBootSequence();

  // Scroll-triggered section animations
  setupScrollObserver();
});

// Boot sequence in hero
async function runBootSequence() {
  const bootEl = document.getElementById('boot-sequence');
  const nameEl = document.getElementById('hero-name');
  const taglineEl = document.getElementById('hero-tagline');

  if (!bootEl) return;

  // Hide hero content initially
  nameEl.style.opacity = '0';
  taglineEl.style.opacity = '0';

  const bootLines = [
    { text: '> initializing portfolio...', delay: 400 },
    { text: '> loading projects [16 found]', delay: 600 },
    { text: '> waking up Askornot...', delay: 500 },
    { text: '> READY', delay: 300, className: 'ready' }
  ];

  for (const line of bootLines) {
    await sleep(line.delay);
    const lineEl = document.createElement('div');
    lineEl.className = 'boot-line' + (line.className ? ' ' + line.className : '');
    lineEl.textContent = line.text;
    bootEl.appendChild(lineEl);
    // Stagger fade in
    await sleep(50);
    lineEl.style.opacity = '1';
  }

  await sleep(400);

  // Reveal hero name
  nameEl.style.transition = 'opacity 0.5s';
  nameEl.style.opacity = '1';

  await sleep(300);

  // Type tagline
  taglineEl.style.opacity = '1';
  await typewrite(
    taglineEl,
    'Turning inefficiencies into resilient, autonomous systems.',
    35,
    true
  );
}

// Intersection Observer for section animations
function setupScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe all sections
  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
}

// Add visible class handler
document.addEventListener('scroll', () => {
  document.querySelectorAll('.section:not(.visible)').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      section.classList.add('visible');
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
