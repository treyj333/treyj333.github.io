/* ============================================
   TERMINAL CODE WINDOWS
   Builds terminal-styled code viewers with
   tabs, syntax highlighting, and copy.
   ============================================ */

const snippetCache = {};

// Snippet metadata
const SNIPPET_META = {
  'sol-pattern-brain.py': { lang: 'python', filename: 'pattern_brain.py', project: 'PROJECT SOL' },
  'ideasguy-sse.js':      { lang: 'javascript', filename: 'server.js', project: 'Ideas Guy' },
  'chairflow-generate.js':{ lang: 'javascript', filename: 'generate.js', project: 'ChairFlow' },
  'tacthrift-rag.kt':     { lang: 'kotlin', filename: 'Retriever.kt', project: 'TacThrift' },
  'wifi-scanner-vm.kt':   { lang: 'kotlin', filename: 'WifiViewModel.kt', project: 'Recon Scanner' }
};

// Create a terminal window element
function createTerminalWindow(snippetIds, projectName) {
  const container = document.createElement('div');
  container.className = 'terminal-window';
  container.dataset.project = projectName;

  const titlebar = document.createElement('div');
  titlebar.className = 'terminal-titlebar';

  // Traffic light dots
  titlebar.innerHTML = `
    <div class="terminal-dots">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
    </div>
  `;

  // Tabs
  const tabs = document.createElement('div');
  tabs.className = 'terminal-tabs';

  snippetIds.forEach((sid, i) => {
    const meta = SNIPPET_META[sid] || { filename: sid, lang: 'text' };
    const tab = document.createElement('button');
    tab.className = 'term-tab' + (i === 0 ? ' active' : '');
    tab.dataset.snippet = sid;
    tab.textContent = meta.filename;
    tab.addEventListener('click', () => switchTab(container, sid, tab));
    tabs.appendChild(tab);
  });

  titlebar.appendChild(tabs);

  // Copy button
  const copyBtn = document.createElement('button');
  copyBtn.className = 'copy-btn';
  copyBtn.textContent = '[ COPY ]';
  copyBtn.addEventListener('click', () => copyCode(container, copyBtn));
  titlebar.appendChild(copyBtn);

  container.appendChild(titlebar);

  // Body
  const body = document.createElement('div');
  body.className = 'terminal-body';
  body.innerHTML = '<pre><code></code></pre>';
  container.appendChild(body);

  return container;
}

// Load and display a snippet
async function loadSnippet(container, snippetId) {
  const codeEl = container.querySelector('code');
  const meta = SNIPPET_META[snippetId] || { lang: 'text' };

  // Set language class
  codeEl.className = `language-${meta.lang}`;

  if (snippetCache[snippetId]) {
    codeEl.textContent = snippetCache[snippetId];
  } else {
    codeEl.textContent = 'Loading...';
    try {
      const res = await fetch(`snippets/${snippetId}`);
      if (!res.ok) throw new Error('Not found');
      const text = await res.text();
      snippetCache[snippetId] = text;
      codeEl.textContent = text;
    } catch {
      codeEl.textContent = '// Snippet not available yet';
    }
  }

  // Highlight
  if (window.Prism) {
    Prism.highlightElement(codeEl);
  }
}

// Switch active tab
function switchTab(container, snippetId, tabEl) {
  container.querySelectorAll('.term-tab').forEach(t => t.classList.remove('active'));
  tabEl.classList.add('active');
  loadSnippet(container, snippetId);
}

// Copy code to clipboard
async function copyCode(container, btn) {
  const code = container.querySelector('code').textContent;
  try {
    await navigator.clipboard.writeText(code);
    btn.textContent = '[ COPIED ]';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = '[ COPY ]';
      btn.classList.remove('copied');
    }, 2000);
  } catch {
    btn.textContent = '[ FAILED ]';
    setTimeout(() => { btn.textContent = '[ COPY ]'; }, 2000);
  }
}

// Show a snippet for a project (called from project cards)
function showSnippet(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project || project.snippets.length === 0) return;

  const snippetsContainer = document.getElementById('snippets-container');

  // Check if terminal already exists for this project
  let existing = snippetsContainer.querySelector(`[data-project="${project.name}"]`);
  if (!existing) {
    existing = createTerminalWindow(project.snippets, project.name);
    snippetsContainer.prepend(existing);
    loadSnippet(existing, project.snippets[0]);
  }

  // Scroll to it
  existing.scrollIntoView({ behavior: 'smooth', block: 'center' });
  existing.style.animation = 'none';
  existing.offsetHeight;
  existing.style.animation = 'fadeSlideIn 0.3s ease forwards';
}

// Pre-render featured snippets on page load
document.addEventListener('DOMContentLoaded', () => {
  const featured = ['project-sol', 'ideasguy', 'tacthrift'];
  const container = document.getElementById('snippets-container');
  if (!container) return;

  featured.forEach(pid => {
    const project = PROJECTS.find(p => p.id === pid);
    if (!project || project.snippets.length === 0) return;

    const termWin = createTerminalWindow(project.snippets, project.name);
    container.appendChild(termWin);
    loadSnippet(termWin, project.snippets[0]);
  });
});
