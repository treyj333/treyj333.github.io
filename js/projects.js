/* ============================================
   PROJECT DATA & FILTER SYSTEM
   All data pulled from real repos (github.com/treyj333)
   ============================================ */

const PROJECTS = [
  {
    id: 'project-sol',
    name: 'PROJECT SOL',
    tagline: 'Multi-backend conversational AI with persistent memory, mood detection, and journal mode',
    category: 'chatbots',
    tech: ['Python', 'Gemini', 'Ollama', 'Claude', 'SQLite', 'Vosk'],
    description: 'A conversational AI system with swappable brain backends (pattern matching, Gemini, Ollama, Claude). Features persistent memory, sentiment tracking, mood history, journal mode with follow-up questions, and a pattern-matching fallback engine that works fully offline. The more you talk, the smarter SOL gets about you.',
    github: 'https://github.com/treyj333/Project-SOL',
    snippets: ['sol-pattern-brain.py']
  },
  {
    id: 'ideasguy',
    name: 'Ideas Guy',
    tagline: 'AI business plan generator with interactive financial dashboards and real-time sliders',
    category: 'chatbots',
    tech: ['Node.js', 'Express', 'Claude API', 'SSE', 'PDF Parse', 'Mammoth'],
    description: 'Browser-based AI tool that generates complete interactive HTML business plans with financial calculators. Supports multi-format document upload (PDF, DOCX, XLSX, PPTX), streams generated plans via Server-Sent Events, and produces dashboards with real-time slider-based financial projections. Handles both new ventures and business acquisitions.',
    github: 'https://github.com/treyj333/ideasguy',
    snippets: ['ideasguy-sse.js']
  },
  {
    id: 'chairflow',
    name: 'ChairFlow',
    tagline: 'AI-powered client retention tool for barbers, stylists, and service providers',
    category: 'chatbots',
    tech: ['React', 'Vite', 'Tailwind', 'Node.js', 'Express', 'Claude API'],
    description: 'Full-stack AI retention platform that generates personalized follow-up messages, rebook reminders, and promo ideas for service-based businesses. Built with a React frontend and Express backend that routes prompts to Claude for context-aware content generation.',
    github: 'https://github.com/treyj333/chairflow',
    snippets: ['chairflow-generate.js']
  },
  {
    id: 'tacthrift',
    name: 'TacThrift OfflineLLM',
    tagline: 'Fully offline Android RAG chat app with local document indexing and on-device inference',
    category: 'edge-ai',
    tech: ['Kotlin', 'Jetpack Compose', 'llama.cpp', 'Room/SQLite', 'WorkManager'],
    description: 'Privacy-first Android app that indexes local documents (PDF, TXT, MD), generates embeddings locally, stores vectors in SQLite, and runs retrieval-augmented generation entirely on-device via llama.cpp JNI bridge. No cloud calls. Responses include source citations [S1], [S2] for traceability.',
    github: 'https://github.com/treyj333/tacthrift-offline-llm',
    snippets: ['tacthrift-rag.kt']
  },
  {
    id: 'recon-scanner',
    name: 'Recon Scanner',
    tagline: 'Android WiFi, Bluetooth, and BLE reconnaissance scanner with online/offline WiGLE integration',
    category: 'hardware',
    tech: ['Kotlin', 'Jetpack Compose', 'WiGLE API', 'Hilt DI', 'Coroutines', 'Flow'],
    description: 'Mobile intelligence tool for detecting and analyzing nearby wireless devices. Works online with WiGLE cloud API for historical WiFi lookup, or fully offline for field use. Scans WiFi, Bluetooth Classic, and BLE signals with RSSI-sorted results, automatic scan cycles, and reactive StateFlow UI. Built with MVVM architecture and Hilt dependency injection.',
    github: 'https://github.com/treyj333/reconscanneralpha',
    snippets: ['wifi-scanner-vm.kt']
  },
  {
    id: 'booking-bot',
    name: 'Booking Bot',
    tagline: 'AI agent that reads booking websites visually and books appointments through screen interaction',
    category: 'chatbots',
    tech: ['Node.js', 'Playwright', 'AI Vision'],
    description: 'An autonomous booking agent that scans service booking websites, reads the page visually (not through backend APIs), and interacts with UI elements to book appointments. Communicates with the user through a chat window for preferences and confirmation.',
    github: 'https://github.com/treyj333/bookingbot',
    snippets: []
  },
  {
    id: 'dithercam',
    name: 'Dither Camera',
    tagline: 'Floyd-Steinberg dithering applied to live camera feed for pixel art aesthetics',
    category: 'hardware',
    tech: ['Python', 'OpenCV', 'NumPy', 'Floyd-Steinberg'],
    description: 'Real-time camera application that applies Floyd-Steinberg error diffusion dithering to a live video feed, creating retro pixel-art style output. Demonstrates low-level image processing algorithms and computer vision fundamentals.',
    github: 'https://github.com/treyj333/dithercam',
    snippets: []
  },
  {
    id: 'starbase-predictor',
    name: 'SCRUBB',
    tagline: 'Starship launch probability prediction tool using data-driven analysis',
    category: 'games',
    tech: ['Python', 'Data Analysis'],
    description: 'Data-driven tool that analyzes conditions and historical patterns to predict SpaceX Starship launch probabilities. Combines multiple data sources into a scoring system for launch readiness assessment.',
    github: 'https://github.com/treyj333/Starbase-Predictor',
    snippets: []
  },
  {
    id: 'z96-retrozombs',
    name: 'Z96 RetroZombs',
    tagline: 'Retro-style zombie survival browser game built with TypeScript',
    category: 'games',
    tech: ['TypeScript', 'HTML5 Canvas', 'Game Loop'],
    description: 'Browser-based retro zombie survival game. Features a game loop, sprite rendering, collision detection, and wave-based enemy spawning. Built entirely in TypeScript with HTML5 Canvas for rendering.',
    github: 'https://github.com/treyj333/Z96-RetroZombs',
    snippets: []
  },
  {
    id: 'barber-receptionist',
    name: 'Barber Receptionist',
    tagline: 'AI chatbot receptionist with embedded business knowledge for barber shops',
    category: 'chatbots',
    tech: ['Node.js', 'Express', 'Claude API'],
    description: 'Domain-specific AI chatbot that handles appointment inquiries, service pricing, hours, and booking links for a barber shop. Uses a detailed system prompt with embedded business knowledge (services, pricing, policies, location) and maintains a warm, conversational tone with max 3-sentence responses.',
    github: 'https://github.com/treyj333/barber-receptionist',
    snippets: []
  },
  {
    id: 'excuse-generator',
    name: 'Excuse Generator Pro',
    tagline: 'Single-file HTML5 app with procedural SVG noise textures and dark theme UI',
    category: 'web-ui',
    tech: ['HTML5', 'CSS3', 'Vanilla JS', 'SVG Filters'],
    description: 'Self-contained web app that generates creative excuses. Features CSS custom properties for theming, procedural noise textures using SVG filters, responsive typography with clamp(), and a polished dark-mode UI in a single HTML file.',
    github: 'https://github.com/treyj333/excuse-generator',
    snippets: []
  },
  {
    id: 'airsoftx',
    name: 'AirsoftX Bookings',
    tagline: 'Autonomous booking and event system for the 4th largest paintball/airsoft facility in the world',
    category: 'web-ui',
    tech: ['TypeScript', 'Replit'],
    description: 'Built booking and event management systems that scaled participation and now operate autonomously for one of the largest paintball and airsoft facilities globally.',
    github: 'https://github.com/treyj333/AirsoftX-Bookings',
    snippets: []
  },
  {
    id: 'truline',
    name: 'TruLine Technologies',
    tagline: 'Web platform for TruLine Connect technology solutions',
    category: 'web-ui',
    tech: ['TypeScript', 'Web'],
    description: 'Professional web platform built for TruLine Technologies, showcasing their connect solutions and services.',
    github: 'https://github.com/treyj333/TruLine-Technologies',
    snippets: []
  },
  {
    id: 'hampy-laundry',
    name: 'Hampy Laundry',
    tagline: 'Website for Hampy laundry service business',
    category: 'web-ui',
    tech: ['TypeScript', 'Web'],
    description: 'Business website built for Hampy laundry service, featuring online booking and service information.',
    github: 'https://github.com/treyj333/hampy-laundry-website',
    snippets: []
  },
  {
    id: 'orion-concept',
    name: 'Orion Concept Ops',
    tagline: 'Task orchestration and operational planning system',
    category: 'chatbots',
    tech: ['Python', 'Automation', 'CLI'],
    description: 'Python-based operational planning and task orchestration system for managing multi-phase project execution workflows. Structures complex operations into trackable, sequential steps.',
    github: 'https://github.com/treyj333/orion-concept-ops',
    snippets: []
  }
];

const CATEGORIES = [
  { key: 'all',        label: 'All' },
  { key: 'chatbots',   label: 'Chatbots & Agents' },
  { key: 'edge-ai',    label: 'Edge AI' },
  { key: 'hardware',   label: 'Hardware' },
  { key: 'web-ui',     label: 'Web & UI' },
  { key: 'games',      label: 'Games' }
];

// Render filter buttons
function renderFilters() {
  const bar = document.getElementById('filter-bar');
  if (!bar) return;

  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat.key === 'all' ? ' active' : '');
    btn.dataset.filter = cat.key;
    btn.textContent = cat.label;
    btn.addEventListener('click', () => filterProjects(cat.key, btn));
    bar.appendChild(btn);
  });
}

// Render project cards
function renderProjects() {
  const grid = document.getElementById('project-grid');
  if (!grid) return;

  PROJECTS.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.dataset.category = project.category;
    card.dataset.id = project.id;

    const categoryLabel = CATEGORIES.find(c => c.key === project.category)?.label || project.category;

    card.innerHTML = `
      <div class="card-header">
        <h3 class="card-title">${project.name}</h3>
        <span class="card-badge">${categoryLabel}</span>
      </div>
      <p class="card-tagline">${project.tagline}</p>
      <div class="card-tech">
        ${project.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
      </div>
      <div class="card-actions">
        ${project.snippets.length > 0
          ? `<button class="card-btn primary" onclick="showSnippet('${project.id}')">View Code</button>`
          : ''}
        <button class="card-btn" onclick="showDetails('${project.id}')">Details</button>
        <a href="${project.github}" target="_blank" rel="noopener" class="card-btn">GitHub</a>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Filter projects
function filterProjects(filter, activeBtn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  activeBtn.classList.add('active');

  document.querySelectorAll('.project-card').forEach(card => {
    const match = filter === 'all' || card.dataset.category === filter;
    card.classList.toggle('hidden', !match);
    if (match) {
      card.style.animation = 'none';
      card.offsetHeight; // trigger reflow
      card.style.animation = 'fadeSlideIn 0.3s ease forwards';
    }
  });
}

// Show project details modal
function showDetails(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  const categoryLabel = CATEGORIES.find(c => c.key === project.category)?.label || project.category;

  document.getElementById('modal-title').textContent = project.name;
  document.getElementById('modal-body').innerHTML = `
    <p>${project.description}</p>
    <div class="modal-tech">
      ${project.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
    </div>
    <p style="color: var(--text-secondary); font-size: 0.75rem;">Category: ${categoryLabel}</p>
    <a href="${project.github}" target="_blank" rel="noopener" class="modal-link">View on GitHub</a>
  `;

  document.getElementById('modal-overlay').classList.add('open');
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderFilters();
  renderProjects();

  // Close modal
  document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('modal-overlay').classList.remove('open');
  });
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      e.currentTarget.classList.remove('open');
    }
  });
});
