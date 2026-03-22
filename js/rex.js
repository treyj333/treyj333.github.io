/* ============================================
   ASKORNOT PIXEL ART MASCOT
   Hero: floating animation via CSS
   Footer: walking + chat bubble
   ============================================ */

// Walking Askornot at bottom of screen
(function initWalkingAskornot() {
  const walkEl = document.getElementById('walking-rex-art');
  if (!walkEl) return;

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
