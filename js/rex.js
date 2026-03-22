/* ============================================
   ASKORNOT ASCII MASCOT
   Hero: idle animation + hover wave + typewriter entrance
   Footer: walking + chat bubble
   ============================================ */

const ASKORNOT_FRAMES = {
  idle1: `
      ████
    ██    ██
    █ ████ █
    █ █░░█ █
    █ ████ █
    ██    ██
      ████
       ██
     ██████
     █ ██ █
       ██
      █  █
      █  █`,

  idle2: `
      ████
    ██    ██
    █ ████ █
    █ █░░█ █
    █ ████ █
    ██    ██
      ████
       ██
     ██████
     █ ██ █
       ██
       ██
      █  █`,

  wave: `
      ████
    ██    ██
    █ ████ █
    █ █░░█ █
    █ ████ █
    ██    ██
      ████
       ██  █
     ██████
     █ ██
       ██
      █  █
      █  █`
};

const WALK_FRAMES = {
  walk1: `  ████\n ██  ██\n █ ██ █\n ██  ██\n  ████\n   ██\n  ████\n █  █`,

  walk2: `  ████\n ██  ██\n █ ██ █\n ██  ██\n  ████\n   ██\n  ████\n  █  █`
};

// Hero Askornot
(function initHeroAskornot() {
  const artEl = document.getElementById('rex-art');
  if (!artEl) return;

  const frames = [ASKORNOT_FRAMES.idle1, ASKORNOT_FRAMES.idle2];
  let currentFrame = 0;
  let idleInterval = null;
  let entranceDone = false;

  // Typewriter entrance
  const text = ASKORNOT_FRAMES.idle1;
  let charIndex = 0;
  artEl.textContent = '';

  const entranceInterval = setInterval(() => {
    if (charIndex < text.length) {
      artEl.textContent += text[charIndex];
      charIndex++;
    } else {
      clearInterval(entranceInterval);
      entranceDone = true;
      startIdle();
    }
  }, 15);

  function startIdle() {
    idleInterval = setInterval(() => {
      currentFrame = (currentFrame + 1) % frames.length;
      artEl.textContent = frames[currentFrame];
    }, 800);
  }

  artEl.parentElement.addEventListener('mouseenter', () => {
    if (!entranceDone) return;
    if (idleInterval) clearInterval(idleInterval);
    artEl.textContent = ASKORNOT_FRAMES.wave;
  });

  artEl.parentElement.addEventListener('mouseleave', () => {
    if (!entranceDone) return;
    startIdle();
  });
})();

// Walking Askornot at bottom of screen
(function initWalkingAskornot() {
  const walkEl = document.getElementById('walking-rex-art');
  if (!walkEl) return;

  const frames = [WALK_FRAMES.walk1, WALK_FRAMES.walk2];
  let currentFrame = 0;
  walkEl.textContent = frames[0];

  setInterval(() => {
    currentFrame = (currentFrame + 1) % frames.length;
    walkEl.textContent = frames[currentFrame];
  }, 300);

  // Chat bubble
  const bubble = document.getElementById('chat-bubble');
  if (!bubble) return;

  function showBubble() {
    bubble.classList.add('visible');
    setTimeout(() => {
      bubble.classList.remove('visible');
    }, 5000);
  }

  // Show bubble after 3s, then every 20s
  setTimeout(showBubble, 3000);
  setInterval(showBubble, 20000);

  // Click to open chat
  const walkingRex = document.getElementById('walking-rex');
  const chatWindow = document.getElementById('chat-window');

  walkingRex.addEventListener('click', () => {
    chatWindow.classList.add('open');
    bubble.classList.remove('visible');
    document.getElementById('chat-input').focus();
  });
})();
