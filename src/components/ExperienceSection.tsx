import { Briefcase, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center py-8 sm:py-12 bg-surface-container-lowest/20 z-10 scroll-mt-16">
      {/* WORK EXPERIENCE - SLIDE 3 (Dedicated Single Slide Fit) */}
      <div className="px-4 sm:px-6 md:px-10 max-w-5xl mx-auto space-y-4 w-full">
        
        {/* SECTION HEADER */}
        <div className="text-center">
          <span className="font-mono text-[10px] uppercase text-primary tracking-[0.25em] mb-1 block font-semibold">
            INDUSTRY EXPERIENCE
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-extrabold text-on-surface">
            Work Experience
          </h2>
          <p className="font-sans text-[11px] sm:text-xs text-on-surface-variant max-w-xl mx-auto mt-1 leading-relaxed">
            Hands-on software engineering, machine learning pipelines, and production AI system development.
          </p>
        </div>

        {/* WORK EXPERIENCE CARD */}
        <div className="bg-surface-container-low/40 backdrop-blur-md border border-white/10 p-4 sm:p-5 md:p-6 rounded-xl hover:border-primary/40 transition-all duration-300 shadow-xl relative overflow-hidden group">
          {/* Top Glow Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-all"></div>

          {/* Role & Company Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2.5 mb-3.5 relative z-10">
            <div>
              <span className="font-mono text-[10px] text-primary mb-0.5 block font-semibold tracking-wider uppercase">
                May 2026 – Jul 2026 • 2 Mos
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-on-surface">
                Data Science Intern
              </h3>
              <p className="font-sans text-xs sm:text-sm text-secondary font-medium flex flex-wrap items-center gap-2 mt-0.5">
                Celebal Technologies
                <span className="inline-block text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-mono">
                  Celebal Excellence Internship 2026
                </span>
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/25 shrink-0 glow-teal">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
          </div>

          {/* Bullet points */}
          <ul className="space-y-2 mb-4 text-xs sm:text-[13px] text-on-surface-variant leading-relaxed relative z-10">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>Developed an AI-powered Retail Demand Forecasting &amp; Analytics Platform analyzing <strong>9 Lakh+ historical retail transaction rows across 10 stores and 50 products per store (representing 500 store-product SKUs)</strong> using Python, LightGBM, FastAPI, Streamlit, PostgreSQL, and Docker.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>Engineered an end-to-end production-oriented ML pipeline covering data cleaning, lag and rolling feature engineering, hyperparameter tuning, recursive multi-horizon forecasting, and FastAPI REST endpoints for real-time model inference.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>Integrated a RAG-powered analytical layer using LangChain, NVIDIA NIM APIs, Llama 3.1, NVIDIA embeddings, and ChromaDB vector search to enable natural-language business queries and automated forecast explanations.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>Containerized the application with Docker and presented the deployed system with interactive Streamlit dashboards, achieving the Celebal Excellence Internship distinction.</span>
            </li>
          </ul>

          {/* Canonical Tech Stack Pill Bar */}
          <div className="mb-4 pt-1 relative z-10">
            <span className="font-mono text-[9px] text-on-surface-variant/70 uppercase tracking-widest block mb-1.5 font-bold">
              Canonical Technology Stack
            </span>
            <div className="flex flex-wrap gap-1">
              {["Python", "LightGBM", "FastAPI", "PostgreSQL", "Streamlit", "LangChain", "NVIDIA NIM", "Llama 3.1", "ChromaDB", "Docker"].map((tech, tIdx) => (
                <span key={tIdx} className="font-mono text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-md text-on-surface">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Link Box / Redirect Button */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 relative z-10">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-on-surface-variant">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span>Internship Project: AI Retail Demand Forecasting & Analytics</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href="#projects"
                className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 px-3 py-1.5 rounded-lg text-[11px] font-bold font-mono flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
              >
                View Project in Portfolio
                <ArrowRight className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/BharathReddyRamasani/Multi-Series-Forecasting-celebal-project.git"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 hover:bg-white/10 text-on-surface border border-white/10 px-3 py-1.5 rounded-lg text-[11px] font-bold font-mono flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
              >
                <ExternalLink className="w-3 h-3 text-primary" />
                GitHub Repository
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
