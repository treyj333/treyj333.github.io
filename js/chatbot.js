/* ============================================
   ASKORNOT CHATBOT
   Static knowledge-based chatbot that answers
   questions about Marvin Johnson using a local
   knowledge base. No API calls needed.
   ============================================ */

const KNOWLEDGE = {
  name: 'Marvin Johnson III',
  title: 'Applied AI & Systems Builder',
  location: 'Taylors, South Carolina',
  email: 'marvin.r.johnson89@gmail.com',
  linkedin: 'linkedin.com/in/marvin-johnson-89ba82210',
  github: 'github.com/treyj333',
  tagline: 'Offline-First AI, Edge Computer Vision, Wireless Automation. Turning inefficiencies into resilient systems.',

  summary: 'Marvin builds offline-capable, real-world AI systems for environments where reliability, privacy, and efficiency matter. His work sits at the intersection of applied AI, edge computer vision, wireless systems, and automation. He\'s not a traditional coder or engineer. He\'s a problem solver, efficiency nerd, and waste eliminator who figures things out and thinks outside the box. He has a deep understanding of how to learn complex tasks quickly and turns inefficiencies into resilient, autonomous solutions.',

  skills: 'Process Optimization Audits, Secure AI Systems for Regulated Environments, Edge AI, Computer Vision, Wireless Automation, LoRa Mesh Networking, Offline LLM Architectures, Python, Kotlin, JavaScript, TypeScript, React, Node.js, SQLite, Claude API, Gemini, Ollama, llama.cpp, Raspberry Pi, ESP32, Jetpack Compose, Playwright, Pinecone, n8n',

  certifications: 'MIT Professional Education No Code and Agentic AI',

  patent: 'MANNEQUIN HEAD HOLDER (patent pending) — a training device developed through his company Atalva',

  experience: [
    { company: 'M&M Services and Solutions LLC', role: 'Founder / Applied AI / Systems Builder', dates: 'January 2023 to Present', desc: 'Independently leads the design and deployment of applied AI, edge computer vision, and wireless automation systems, reducing operational inefficiencies through offline-capable architectures.' },
    { company: 'AirsoftX', role: 'Founder', dates: 'January 2025 to Present', desc: 'Built booking and event systems that scaled participation at the 4th largest paintball and airsoft facility in the world. The system now operates autonomously.' },
    { company: 'Atalva', role: 'Co-Founder / Product Design', dates: 'March 2023 to January 2026', desc: 'Developed and commercialized a patent-pending training device and secured contracts with the South Carolina Department of Education.' },
    { company: 'The Mailroom Barber Co', role: 'Marketing / Operations Lead', dates: 'August 2021 to November 2024', desc: 'Drove substantial revenue growth through automation, digital systems, and operational optimization.' },
    { company: 'The Brand Mule', role: 'Web Designer', dates: 'February 2021 to October 2024', desc: 'Web design work for clients.' },
    { company: 'US Army', role: 'Joint Fire Support Specialist & Operations Manager', dates: 'June 2018 to June 2021', desc: 'Military service at Fort Bragg (now Fort Liberty), Fayetteville, North Carolina.' }
  ],

  projects: [
    'PROJECT SOL — Multi-backend conversational AI with persistent memory and mood detection',
    'Ideas Guy — AI business plan generator with interactive financial dashboards',
    'ChairFlow — AI client retention tool for service providers',
    'TacThrift OfflineLLM — Fully offline Android RAG chat app with on-device inference',
    'Recon Scanner — Android WiFi/Bluetooth/BLE reconnaissance scanner',
    'Booking Bot — AI agent that books appointments through visual screen interaction',
    'Dither Camera — Floyd-Steinberg dithering on live camera feeds',
    'SCRUBB — Starship launch probability prediction tool',
    'Z96 RetroZombs — Retro zombie survival browser game',
    'AirsoftX Bookings — Autonomous booking system for major airsoft facility'
  ],

  interests: 'Edge AI, infrastructure, security, industrial systems, applied automation, and roles where technology must work reliably in the field, not just in theory.'
};

// Pattern matching for user questions
function getResponse(input) {
  const q = input.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|sup|yo|what'?s up)/i.test(q)) {
    return `Hey! I'm Askornot, Marvin's digital assistant. Ask me about his projects, experience, skills, or anything else. I only deal in facts.`;
  }

  // Name
  if (q.includes('who is') || q.includes('name') || (q.includes('who') && q.includes('marvin'))) {
    return `${KNOWLEDGE.name}. ${KNOWLEDGE.title}, based in ${KNOWLEDGE.location}. ${KNOWLEDGE.summary.split('.').slice(0, 2).join('.')}.`;
  }

  // Contact
  if (q.includes('email') || q.includes('contact') || q.includes('reach') || q.includes('hire') || q.includes('get in touch')) {
    return `You can reach Marvin at ${KNOWLEDGE.email}. LinkedIn: ${KNOWLEDGE.linkedin}. GitHub: ${KNOWLEDGE.github}.`;
  }

  // Skills
  if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('language') || q.includes('what can') || q.includes('tools')) {
    return `Marvin's core skills: ${KNOWLEDGE.skills}. He's especially strong in edge AI, offline architectures, and turning messy real-world problems into clean, automated solutions.`;
  }

  // Certifications
  if (q.includes('cert') || q.includes('education') || q.includes('degree') || q.includes('mit') || q.includes('license') || q.includes('qualified')) {
    return `Certifications: ${KNOWLEDGE.certifications}. He's also a US Army veteran and holds a patent.`;
  }

  // Patent
  if (q.includes('patent') || q.includes('invention') || q.includes('atalva') || q.includes('mannequin')) {
    return `Marvin holds a patent pending for the ${KNOWLEDGE.patent}.`;
  }

  // Military / Army
  if (q.includes('army') || q.includes('military') || q.includes('veteran') || q.includes('service') || q.includes('fire support')) {
    const army = KNOWLEDGE.experience.find(e => e.company === 'US Army');
    return `Marvin served in the ${army.company} as a ${army.role} from ${army.dates}. Stationed at Fort Bragg, Fayetteville, NC. His military discipline and operations background heavily influences his systems-first approach to problem solving.`;
  }

  // Experience / work history
  if (q.includes('experience') || q.includes('work') || q.includes('job') || q.includes('career') || q.includes('resume') || q.includes('background') || q.includes('history')) {
    const exp = KNOWLEDGE.experience.map(e => `${e.company} (${e.role}, ${e.dates})`).join('; ');
    return `Marvin's experience: ${exp}. He's a serial founder and builder who brings military-grade operations thinking to every project.`;
  }

  // Specific companies
  if (q.includes('m&m') || q.includes('m and m') || q.includes('services and solutions')) {
    const e = KNOWLEDGE.experience[0];
    return `${e.company}: ${e.role}, ${e.dates}. ${e.desc}`;
  }
  if (q.includes('airsoft') || q.includes('paintball')) {
    const e = KNOWLEDGE.experience[1];
    return `${e.company}: ${e.role}, ${e.dates}. ${e.desc}`;
  }
  if (q.includes('mailroom') || q.includes('barber')) {
    const e = KNOWLEDGE.experience[3];
    return `${e.company}: ${e.role}, ${e.dates}. ${e.desc}`;
  }

  // Projects
  if (q.includes('project') || q.includes('portfolio') || q.includes('built') || q.includes('build') || q.includes('made') || q.includes('create')) {
    return `Marvin has 16+ projects including: ${KNOWLEDGE.projects.slice(0, 5).join('; ')}. Check out the Projects section above for the full list with code snippets.`;
  }

  // Specific projects
  if (q.includes('sol') && !q.includes('solution')) {
    return `PROJECT SOL is a multi-backend conversational AI with persistent memory. It has swappable brain backends (pattern matching, Gemini, Ollama, Claude), sentiment tracking, mood history, and journal mode. The pattern brain works fully offline. Built in Python with SQLite.`;
  }
  if (q.includes('ideas guy') || q.includes('ideasguy') || q.includes('business plan')) {
    return `Ideas Guy is an AI business plan generator that creates interactive HTML dashboards with financial sliders. It supports multi-format document upload (PDF, DOCX, XLSX, PPTX) and streams generated plans via Server-Sent Events. Built with Node.js, Express, and Claude API.`;
  }
  if (q.includes('chairflow') || q.includes('chair flow') || q.includes('retention')) {
    return `ChairFlow is an AI-powered client retention tool for barbers, stylists, and service providers. It generates personalized follow-up messages, rebook reminders, and promo ideas. Built with React, Vite, Tailwind, Node.js, and Claude API.`;
  }
  if (q.includes('tacthrift') || q.includes('offline llm') || q.includes('rag')) {
    return `TacThrift OfflineLLM is a fully offline Android RAG chat app. It indexes local documents, generates embeddings locally, stores vectors in SQLite, and runs inference on-device via llama.cpp JNI bridge. Zero cloud calls, full privacy. Built in Kotlin with Jetpack Compose.`;
  }
  if (q.includes('recon') || q.includes('scanner')) {
    return `Recon Scanner is an Android app for WiFi, Bluetooth Classic, and BLE reconnaissance. It detects nearby wireless devices, estimates signal strength, and looks up historical WiFi data via WiGLE API. Built in Kotlin with Jetpack Compose.`;
  }

  // Strengths
  if (q.includes('strength') || q.includes('good at') || q.includes('best') || q.includes('special') || q.includes('stand out') || q.includes('unique') || q.includes('different')) {
    return `Marvin's biggest strengths: figuring stuff out and thinking outside the box. He's not a traditional coder. He's a problem solver and efficiency nerd who learns complex tasks quickly. He excels at cutting waste, improving ROIs, and building systems that work reliably in the real world, not just in theory.`;
  }

  // Interests
  if (q.includes('interest') || q.includes('looking for') || q.includes('want') || q.includes('goal') || q.includes('passion')) {
    return `Marvin is interested in ${KNOWLEDGE.interests}`;
  }

  // Location
  if (q.includes('where') || q.includes('location') || q.includes('based') || q.includes('live')) {
    return `Marvin is based in ${KNOWLEDGE.location}.`;
  }

  // Drone
  if (q.includes('drone') || q.includes('faa') || q.includes('fly') || q.includes('107')) {
    return `Marvin holds an FAA Part 107 Commercial Drone Operators License, allowing him to fly drones commercially.`;
  }

  // Fallback
  return `I don't have specific info on that, but you can reach Marvin directly at ${KNOWLEDGE.email}. Try asking about his projects, experience, skills, certifications, or what makes him unique.`;
}

// Chat UI logic
document.addEventListener('DOMContentLoaded', () => {
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');
  const chatMessages = document.getElementById('chat-messages');
  const chatClose = document.getElementById('chat-close');
  const chatWindow = document.getElementById('chat-window');

  if (!chatInput || !chatSend) return;

  function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    // User message
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user-message';
    userMsg.innerHTML = `<span class="chat-sender">YOU&gt;</span> ${escapeHtml(text)}`;
    chatMessages.appendChild(userMsg);

    chatInput.value = '';

    // Askornot response (with small delay for effect)
    setTimeout(() => {
      const response = getResponse(text);
      const rexMsg = document.createElement('div');
      rexMsg.className = 'chat-message rex-message';
      rexMsg.innerHTML = `<span class="chat-sender">ASKORNOT&gt;</span> ${escapeHtml(response)}`;
      chatMessages.appendChild(rexMsg);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 300);

    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  chatSend.addEventListener('click', sendMessage);
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  chatClose.addEventListener('click', () => {
    chatWindow.classList.remove('open');
  });
});

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
