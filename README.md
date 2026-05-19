# Zapli Frontend Assignment (React + Vite)

This project is a single-page frontend application built using React and Vite.

It was created as a take-home assignment to demonstrate:
- Scroll-based animations
- UI/UX design thinking
- Real API integration
- Component-based architecture

---

## 🚀 Features

### 1. Cinematic Scroll Animation Hero
- Multi-phase scroll-driven animation
- Floating particles and glowing effects
- Smooth transitions between animation states
- Creative “Journey Into AI” concept

### 2. Web Search Chat Interface
- Chat-style UI similar to ChatGPT
- Users can type queries
- Fetches real-time results from a live search API (Tavily)
- Displays results in a structured format

---

## 🛠️ Tech Stack

This project uses the following:

- React (with Vite)
- Framer Motion (animations)
- Tailwind CSS (styling)
- Tavily Search API (real-time web search)

---

## ⚡ Getting Started

### Install dependencies
npm install


### Run development server
npm run dev

### The app will be available at:


## 🔐 Environment Variables

Create a .env file in the root directory:
VITE_TAVILY_API_KEY=


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


## 🎯 React + Vite Notes

This project is built using the default Vite React template with some modifications for the assignment.

Official Plugins Used:
- @vitejs/plugin-react – uses Babel for Fast Refresh
- @vitejs/plugin-react-swc – optional alternative using SWC for faster builds

More info:
[Vite GitHub Repo](https://github.com/vitejs/vite-plugin-react)

### ⚙️ React Compiler

The React Compiler is not enabled in this project due to potential impacts on development and build performance.

Learn more:
[Learn React Installation](https://react.dev/learn/react-compiler/installation)

### 📌 ESLint & Best Practices

For production-ready applications, it is recommended to:

- Enable TypeScript
- Use type-aware ESLint rules
- Follow stricter linting configurations

You can explore the official Vite React TS template here:
[official Vite React TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)

### ✨ Future Improvements

If given more time, I would improve:

- Smoother hero-to-chat transition animations
- Better mobile responsiveness
- Loading skeletons for API results
- Improved UI polish and micro-interactions
- Streaming search results instead of batch rendering


## 👨‍💻 Purpose

This project was built to demonstrate:

- Frontend animation skills
- API integration skills
- Clean React architecture
- UI creativity under time constraints