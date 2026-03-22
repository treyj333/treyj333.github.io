# CONTEXT.md

## Project: AI Engineer Portfolio Site
## Live URL: https://treyj333.github.io
## Repo: https://github.com/treyj333/treyj333.github.io

---

### [2026-03-21] Initial build complete

Built complete single-page portfolio site from scratch:

- **Structure:** Plain HTML/CSS/JS, no framework, zero build step
- **Theme:** Ideas Guy branding palette (#87d787 green, #ffaf00 amber, #111111 bg)
- **Fonts:** VT323 (display) + IBM Plex Mono (body) via Google Fonts
- **Askornot Mascot:** ASCII astronaut (Among Us bean style) with 3 animation frames (idle-1, idle-2, wave), typewriter entrance, hover interaction
- **Walking Askornot:** Fixed-position astronaut walks across bottom of viewport with periodic chat bubble ("Click me to ask about Marvin")
- **Askornot Chatbot:** Pattern-matching chatbot with full knowledge base (resume, projects, skills, certifications, experience). Terminal-styled chat window.
- **Project Cards:** 16 projects with real data from local repos and GitHub (treyj333). Filterable by category: All, Chatbots & Agents, Edge AI, Hardware, Web & UI, Games.
- **Terminal Code Windows:** 5 real code snippets from PROJECT SOL, Ideas Guy, ChairFlow, TacThrift, and WiFi Scanner. Prism.js syntax highlighting with custom theme overrides.
- **Sections:** Hero (boot sequence), About (bio + stats + skills cloud), Projects (filterable grid), Code Snippets (terminal windows), Contact (terminal commands), Footer
- **Mobile:** Responsive at 768px and 480px breakpoints
- **Deployed:** GitHub Pages at treyj333.github.io

### [2026-03-21] Mascot redesign + content cleanup

- **Mascot:** Replaced REX (T-Rex) with Askornot (cute ASCII astronaut, Among Us bean style). Updated all frames, labels, chat titles, and chatbot references.
- **Removed:** FAA Part 107 Drone cert and Building Automation (BAS) from skills cloud, contact section, and chatbot knowledge base.
- **Added:** MIT Professional Education No Code and Agentic AI certification (was already present).
- **Layout:** Moved Askornot mascot + boot sequence out of hero into a transition section between hero and About. Hero now shows name/title/tagline/links only.
