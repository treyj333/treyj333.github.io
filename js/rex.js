/* ============================================
   REX ASCII MASCOT
   Hero: idle animation + hover roar + typewriter entrance
   Footer: walking + chat bubble
   ============================================ */

const REX_FRAMES = {
  idle1: `
         __
        / _)
       / /
  ____/ /
 /      \\
| o   o |
|   __  |
 \\  \\/  /
  |    |
  |    |
 _|    |_
|  \\  /  |
|   ||   |
 \\  ||  /
  | || |
  |_||_|
  (_ |_)`,

  idle2: `
         __
        / _)
       / /
  ____/ /
 /      \\
| o   o |
|   __  |
 \\  \\/  /
  |    |
  |    |
 _|    |_
|  \\  /  |
|   ||   |
 \\  ||  /
  |_|| |
  (_|| )
     |_)`,

  roar: `
         __
        / _)
       / /
  ____/ /
 /      \\
| O   O |
|  ____  |
| /    \\ |
 |  !!  |
  |    |
 _|    |_
|  \\  /  |
|   ||   |
 \\  ||  /
  | || |
  |_||_|
  (_ |_)`
};

const WALK_FRAMES = {
  walk1: `    __\n   / _)\n  / /\n_/ / \n\\_/\\ \n|o o|\n| > |\n/| |\\`,

  walk2: `    __\n   / _)\n  / /\n_/ / \n\\_/\\ \n|o o|\n| > |\n\\| |/`
};

// Hero REX
(function initHeroRex() {
  const rexEl = document.getElementById('rex-art');
  if (!rexEl) return;

  const frames = [REX_FRAMES.idle1, REX_FRAMES.idle2];
  let currentFrame = 0;
  let idleInterval = null;
  let entranceDone = false;

  // Typewriter entrance
  const text = REX_FRAMES.idle1;
  let charIndex = 0;
  rexEl.textContent = '';

  const entranceInterval = setInterval(() => {
    if (charIndex < text.length) {
      rexEl.textContent += text[charIndex];
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
      rexEl.textContent = frames[currentFrame];
    }, 800);
  }

  rexEl.parentElement.addEventListener('mouseenter', () => {
    if (!entranceDone) return;
    if (idleInterval) clearInterval(idleInterval);
    rexEl.textContent = REX_FRAMES.roar;
  });

  rexEl.parentElement.addEventListener('mouseleave', () => {
    if (!entranceDone) return;
    startIdle();
  });
})();

// Walking REX at bottom of screen
(function initWalkingRex() {
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
