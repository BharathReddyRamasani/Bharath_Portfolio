<div align="center">
  <h1>Bharath Reddy Ramasani - Portfolio & AI Assistant</h1>
  <p><strong>AI / ML & Software Engineer</strong> specialized in Large Language Models (LLMs), Agentic RAG, Multi-Agent Systems, and Scalable Backend Architecture.</p>
</div>

---

## 🚀 About The Project

This is a modern, interactive portfolio application showcasing Bharath Reddy Ramasani's technical expertise and projects. It goes beyond a static website by integrating **RBR-Bot**, a custom AI Assistant powered by the **Google Gemini API**, which can interactively answer questions about Bharath's experience, skills, and projects.

### ✨ Key Features
- **Interactive AI Agent:** Built-in Chatbot powered by `gemini-3.5-flash` with custom system instructions to act as a personal portfolio assistant.
- **Modern Tech Stack:** Built with React 19, Vite, TailwindCSS, and Framer Motion for a stunning, responsive, and dynamic user interface.
- **Full-Stack Architecture:** Combines a Vite frontend with an Express.js backend API.
- **Vercel Ready:** Pre-configured for seamless deployment to Vercel with Serverless Functions (`@vercel/node`).

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, Lucide React, Framer Motion
- **Backend:** Node.js, Express.js
- **AI Integration:** `@google/genai` (Google Gemini API)
- **Deployment:** Vercel

## 💻 Running Locally

To run this project on your local machine, follow these steps:

### Prerequisites
- Node.js (v18+)
- `npm` or `bun`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BharathReddyRamasani/Bharath_Portfolio.git
   cd Bharath_Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Rename `.env.example` to `.env` (or create a new `.env` file) and add your Gemini API Key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   This will start both the Express API and the Vite development server concurrently at `http://localhost:3000`.

## ☁️ Deployment (Vercel)

This project is fully configured for Vercel deployment out-of-the-box.

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and import the repository.
3. In the Vercel project settings, add the `GEMINI_API_KEY` to your Environment Variables.
4. Deploy! Vercel will automatically build the static frontend and deploy the Express endpoints in the `api/` directory as serverless functions.

## 👨‍💻 About Bharath

Bharath is an AI/ML and Software Engineer with experience in:
- Developing AI-powered applications using LangChain, LangGraph, and RAG architectures.
- Building scalable backend systems using Python (FastAPI) and Node.js (Express).
- Training and fine-tuning Machine Learning and NLP models (PyTorch, LightGBM, Transformers).

### Highlighted Projects
- **CorpusAI:** Multi-Agent AI Research Assistant for Literature Synthesis.
- **Conversational Commerce:** E-commerce platform with recommendation systems and conversational RAG.
- **Emotion-Aware Hate Speech Detection:** Multimodal AI platform using fine-tuned RoBERTa/IndicBERT.
- **Nexus Commerce Suite:** Full-stack operations and analytics platform.

---
<div align="center">
  <i>Built by Bharath Reddy Ramasani</i>
</div>
