# CreatorOS — AI-Powered Influencer Marketing Platform

CreatorOS is a premium, high-performance platform designed to automate and scale influencer marketing. Built with a focus on precision discovery, automated outreach, and real-time ROI tracking.

![CreatorOS Hero](https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000)

## ✨ Key Features

- 🎯 **AI-Powered Discovery**: Find the perfect creators for your brand with precision AI matching.
- 🤖 **Automated Outreach**: Scale your campaigns with automated negotiation and management.
- 📊 **Real-time Analytics**: Tracking ROI and campaign performance on the fly.
- 💳 **Secure Payments**: Escrow-based payment systems for peace of mind.
- 💎 **Premium UI**: Designed with a sleek Electric Blue + Charcoal + Cyan theme using glassmorphism.

## 🚀 Tech Stack

- **Frontend**: Vite + React + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui + Framer Motion
- **Design System**: Visuals generated via **Stitch MCP**
- **Infrastructure**: Docker + Nginx (Production optimized)

## 🛠️ Getting Started

### Prerequisites

- Node.js (v20+)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/animeburly-source/creator-ai-collective.git
   cd creator-ai-collective
   ```

2. Install dependencies:
   ```bash                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:8081`

## 🐳 Docker Deployment

The project is fully dockerized with a production-ready Nginx configuration.

### Build and Run

```bash
# Using Docker Compose
docker compose up -d --build
```

The production build will be available at `http://localhost:8080`.

### Nginx Features
- SPA Routing support (fallback to index.html)
- Gzip compression enabled
- Static asset caching (1-year headers)
- Health checks included

## 🎨 Design Redesign

The platform underwent a major visual overhaul:
- **Primary Color**: Electric Blue (`#0066FF`)
- **Secondary Color**: Cyan (`#06B6D4`)
- **Background**: Charcoal (`#0F172A`)
- **Aesthetics**: Glassmorphic cards, smooth gradients, and high-fidelity animations preserved from the original build.

## 📄 License

(C) 2026 CreatorOS. All rights reserved.
