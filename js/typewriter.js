/**
 * Typewriter effect — types text character by character.
 * @param {HTMLElement} el - Target element
 * @param {string} text - Text to type
 * @param {number} speed - ms per character
 * @param {boolean} showCursor - append blinking cursor
 * @returns {Promise} resolves when typing is done
 */
function typewrite(el, text, speed = 40, showCursor = true) {
  return new Promise(resolve => {
    let i = 0;
    el.textContent = '';

    if (showCursor) {
      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      el.appendChild(cursor);
    }

    const interval = setInterval(() => {
      if (i < text.length) {
        const cursorEl = el.querySelector('.cursor');
        if (cursorEl) {
          el.insertBefore(document.createTextNode(text[i]), cursorEl);
        } else {
          el.textContent += text[i];
        }
        i++;
      } else {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}
