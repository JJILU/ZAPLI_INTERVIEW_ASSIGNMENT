# 🌌 AI Portal — Zapli Frontend Assignment (React + Vite)

This project is a single-page immersive frontend experience built with React and Vite.

It was designed as a take-home assignment to demonstrate:
- Scroll-based cinematic animations
- UI/UX storytelling and motion design
- Real API integration (no mock data)
- Clean component architecture

---

# 🚀 Live Concept

The app simulates an **AI Portal experience**:

1. A cinematic animated landing hero
2. A transition into an AI search interface
3. A real-time web search chat powered by an external API

The goal is to create a **smooth narrative flow from animation → interaction**.

---

# 🎬 Features

## 1. Cinematic AI Portal Hero
- Full-screen animated landing experience
- Continuous glowing energy core
- Rotating orbital ring system
- Floating particle motion system
- Scroll-enhanced scaling transitions
- Immediate visual movement on page load (no delay)

## 2. AI Search Chat Interface
- Chat-style UI similar to modern AI tools
- Real-time web search integration (Tavily API)
- Structured result rendering (title, snippet, link)
- Smooth animated message transitions
- Loading state for search feedback

---

# 🛠️ Tech Stack

- React (Vite)
- Framer Motion (animation system)
- Tailwind CSS (styling)
- Tavily Search API (live web search)

---

# ⚡ Getting Started

## 1. Install dependencies

npm install


### Run development server
npm run dev

### The app will be available at:
[View Deployed Site](https://zapli-interview-assignment.vercel.app/)

## 🔐 Environment Variables

Create a .env file in the root directory:
- VITE_TAVILY_API_KEY=your_api_key_here


## 📁 Project Structure
src/
 ├── components/
 │    ├── Hero.jsx
 │    └── Chat.jsx
 │
 ├── services/
 │    └── searchApi.js
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css


## 🎯 Architecture Highlights

### 🔹 Separation of Concerns
- API logic is isolated in services/searchApi.js
- UI logic is separated into reusable components

### 🔹 Animation System
- Framer Motion used for both scroll-based and continuous animations
- Hero uses layered motion (glow core + orbit + particles)
- Chat uses entrance transitions for messages

### 🔹 Performance Considerations
- Lightweight particle system (no heavy rendering loops)
- Minimal re-renders in chat system
- GPU-friendly transforms (scale, opacity, translate)

## 🌌 Design Concept

#### The UI is designed around a futuristic idea:
  - "An AI Portal that activates on landing and transforms into a search interface."

#### This creates a narrative flow:
  - Landing Experience → Activation → Interaction

## 📌 Key Features Implemented
- Scroll-based hero animation
- Continuous motion background system
- Real API integration (Tavily)
- Chat-style search interface
- Animated message rendering
- Loading feedback state
- Mobile-responsive layout

## ✨ Future Improvements
If given more time, I would enhance:
- Smarter scroll-driven transitions (GSAP timeline control)
- Chat streaming responses (token-by-token UI)
- Improved mobile gesture interactions
- Better performance optimization for particles
- Sound design for portal activation
- Advanced 3D or WebGL effects


## 👨‍💻 Purpose

This project demonstrates:
- Frontend animation skills
- API integration ability
- UI composition thinking
- Clean React architecture
- Ability to build interactive experiences from scratch

## 📎 Notes

This project focuses on:
- Visual storytelling
- Smooth motion design
- Real-world API usage
- Clean and maintainable code structure