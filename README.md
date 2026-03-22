# Marvin Johnson | AI Engineer Portfolio

Terminal-themed portfolio site showcasing applied AI, edge computer vision, and wireless automation projects.

**Live:** [treyj333.github.io](https://treyj333.github.io)

## Features

- REX ASCII mascot with idle animation, hover roar, and typewriter entrance
- Walking REX at bottom of screen with interactive chatbot (asks/answers questions about Marvin)
- 16 project cards with category filtering (Chatbots & Agents, Edge AI, Hardware, Web & UI, Games)
- Terminal-style code snippet windows with syntax highlighting and copy-to-clipboard
- Boot sequence animation on page load
- Scanline overlay for retro terminal aesthetic
- Mobile responsive

## Tech Stack

- Plain HTML/CSS/JS (no framework, no build step)
- Prism.js for syntax highlighting (CDN)
- Google Fonts: VT323 + IBM Plex Mono

## Run Locally

```
cd site
python3 -m http.server 8080
# or
npx serve . -p 8080
```

Open http://localhost:8080

## Deploy

Push to `main` branch. GitHub Pages auto-deploys.

## Color Palette

Based on Ideas Guy branding:
- Background: `#111111`
- Card surfaces: `#1a1a1a`
- Accent green: `#87d787`
- Warm amber: `#ffaf00`
- Text: `#d7d7d7`
