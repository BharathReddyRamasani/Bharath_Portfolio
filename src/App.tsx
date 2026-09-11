import { useState, useEffect } from "react";
import {
  Layers,
  Database,
  Code2,
  GitBranch
} from "lucide-react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active section on scroll
  useEffect(() => {
    const sections = ["home", "about", "experience", "projects", "what-i-build", "skills", "achievements", "education", "contact"];
    const handleIntersect = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleIntersect);
    return () => window.removeEventListener("scroll", handleIntersect);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-slate-900 selection:bg-rose-100 selection:text-rose-900 font-sans antialiased relative">
      {/* 01. PRELOADER */}
      <Preloader />

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-rose-600 via-blue-600 to-rose-600 z-[9999] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setResumeOpen(true)} activeSection={activeSection} />

      {/* Main Content */}
      <main className="relative z-10">

        {/* HERO SECTION */}
        <HeroSection onOpenResume={() => setResumeOpen(true)} />

        {/* ABOUT SECTION */}
        <AboutSection />

        {/* WORK EXPERIENCE SECTION */}
        <ExperienceSection />

        {/* PROJECTS SECTION */}
        <ProjectsSection />

        {/* "WHAT I BUILD" / TECHNICAL FOCUS SECTION (P1.2) */}
        <section id="what-i-build" className="relative py-14 sm:py-18 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto z-10 border-t border-slate-200 scroll-mt-16">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-slate-200 pb-4">
              <div>
                <span className="font-mono text-[10px] uppercase text-rose-600 tracking-[0.25em] block font-semibold mb-1">
                  ENGINEERING CAPABILITIES &amp; ARCHITECTURAL SCOPE
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                  What I Build
                </h2>
                <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-2xl mt-1 leading-relaxed">
                  Clear engineering scope across model architectures, autonomous agent workflows, and full-stack software systems.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* 01: Autonomous Multi-Agent & RAG Systems */}
              <div className="bg-white border border-slate-200 hover:border-rose-300 rounded-xl p-5 sm:p-6 space-y-4 transition-all duration-300 shadow-xs hover:shadow-md group relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-rose-600 tracking-widest uppercase">
                    // 01 · AGENTIC SYSTEMS
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 group-hover:scale-110 transition-transform">
                    <GitBranch className="w-4 h-4" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                    Autonomous Multi-Agent &amp; RAG Systems
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Design supervisor and worker topologies using <strong>LangGraph</strong>. Implement state machine graphs, fallback routing, and validation loops. Build hybrid retrieval pipelines combining dense semantic embeddings (ChromaDB) with metadata filtering and reciprocal rank fusion to eliminate hallucinations.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {["LangGraph", "ChromaDB", "Supervisor Pattern", "State Graphs", "Evaluation Evals", "Groq Llama 3.1"].map((tag, i) => (
                    <span key={i} className="font-mono text-[11px] bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md text-slate-700 font-medium hover:border-rose-300 hover:text-rose-600 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 02: Applied ML, NLP & Multimodal Pipelines */}
              <div className="bg-white border border-slate-200 hover:border-blue-300 rounded-xl p-5 sm:p-6 space-y-4 transition-all duration-300 shadow-xs hover:shadow-md group relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-blue-600 tracking-widest uppercase">
                    // 02 · DEEP LEARNING &amp; NLP
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Applied ML, NLP &amp; Multimodal Pipelines
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Fine-tune Transformer architectures (<strong>RoBERTa, IndicBERT</strong>) for high-precision classification. Build end-to-end multimodal pipelines with Tesseract OCR, LIME model interpretability, and tabular demand forecasting with LightGBM/Prophet processing millions of retail rows.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {["PyTorch", "Hugging Face", "RoBERTa", "IndicBERT", "Tesseract OCR", "LIME Explainability", "LightGBM", "Prophet"].map((tag, i) => (
                    <span key={i} className="font-mono text-[11px] bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md text-slate-700 font-medium hover:border-blue-300 hover:text-blue-600 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 03: Production Backend & Scalable APIs */}
              <div className="bg-white border border-slate-200 hover:border-emerald-300 rounded-xl p-5 sm:p-6 space-y-4 transition-all duration-300 shadow-xs hover:shadow-md group relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-emerald-600 tracking-widest uppercase">
                    // 03 · BACKEND &amp; DATA SYSTEMS
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                    <Database className="w-4 h-4" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    Production Backend &amp; Scalable APIs
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Architect high-throughput REST APIs using <strong>FastAPI</strong> with Pydantic validation, JWT token security, and background task management. Model relational schemas with PostgreSQL and document stores with MongoDB, optimizing indexing for low-latency queries.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {["FastAPI", "PostgreSQL", "MongoDB", "JWT Auth", "Pydantic", "RESTful Design"].map((tag, i) => (
                    <span key={i} className="font-mono text-[11px] bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md text-slate-700 font-medium hover:border-emerald-300 hover:text-emerald-600 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 04: Full-Stack Integration & Deployment */}
              <div className="bg-white border border-slate-200 hover:border-amber-300 rounded-xl p-5 sm:p-6 space-y-4 transition-all duration-300 shadow-xs hover:shadow-md group relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-amber-600 tracking-widest uppercase">
                    // 04 · FULL-STACK &amp; DEPLOYMENT
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                    <Code2 className="w-4 h-4" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    Full-Stack Integration &amp; Deployment
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Build responsive, component-driven client interfaces in <strong>React.js</strong> and modern web standards. Containerize applications using Docker multi-stage builds and deploy scalable inference spaces to Hugging Face Spaces and cloud platforms with automated CI/CD.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {["React.js", "JavaScript", "Docker", "Hugging Face Spaces", "Git CI/CD", "Streamlit"].map((tag, i) => (
                    <span key={i} className="font-mono text-[11px] bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md text-slate-700 font-medium hover:border-amber-300 hover:text-amber-600 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS SECTION */}
        <SkillsSection />

        {/* ACHIEVEMENTS SECTION */}
        <AchievementsSection />

        {/* EDUCATION SECTION (CVR College) */}
        <EducationSection />

        {/* CONTACT SECTION */}
        <ContactSection />

      </main>

      {/* FOOTER IN LIGHT EDITORIAL STYLE */}
      <footer className="relative z-10 border-t border-slate-200 py-8 px-4 text-center font-mono text-xs text-slate-500 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Bharath Reddy Ramasani. Built with React, Vite &amp; Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/BharathReddyRamasani" target="_blank" rel="noreferrer" className="hover:text-rose-600 transition-colors">
              GitHub
            </a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/bharathreddyramasani/" target="_blank" rel="noreferrer" className="hover:text-rose-600 transition-colors">
              LinkedIn
            </a>
            <span>•</span>
            <a href="https://leetcode.com/u/Bharathreddy_Ramasani/" target="_blank" rel="noreferrer" className="hover:text-rose-600 transition-colors">
              LeetCode
            </a>
            <span>•</span>
            <a href="mailto:ramasanibharathreddy2004@gmail.com" className="hover:text-rose-600 transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>

      {/* RESUME MODAL */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
