import { Briefcase, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 bg-surface-container-lowest/20 z-10 scroll-mt-12">
      <div className="px-6 md:px-20 max-w-5xl mx-auto space-y-8">
        
        {/* SECTION HEADER */}
        <div className="text-center">
          <span className="font-mono text-xs uppercase text-primary tracking-[0.25em] mb-2 block font-semibold">
            INDUSTRY EXPERIENCE
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-on-surface">
            Work Experience
          </h2>
          <p className="font-sans text-base text-on-surface-variant max-w-xl mx-auto mt-3 leading-relaxed">
            Hands-on software engineering, machine learning pipelines, and production AI system development.
          </p>
        </div>

        {/* WORK EXPERIENCE CARD */}
        <div className="bg-surface-container-low/40 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-2xl hover:border-primary/40 transition-all duration-300 shadow-2xl relative overflow-hidden group">
          {/* Top Glow Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-all"></div>

          {/* Role & Company Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 relative z-10">
            <div>
              <span className="font-mono text-xs text-primary mb-1 block font-semibold tracking-wider uppercase">
                May 2026 – Jul 2026 • 2 Mos
              </span>
              <h3 className="font-display text-2xl font-bold text-on-surface">
                Data Science Intern
              </h3>
              <p className="font-sans text-base text-secondary font-medium flex flex-wrap items-center gap-2 mt-0.5">
                Celebal Technologies
                <span className="inline-block text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-mono">
                  Celebal Excellence Internship 2026
                </span>
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25 shrink-0 glow-teal">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
          </div>

          {/* Bullet points */}
          <ul className="space-y-3.5 mb-8 text-sm text-on-surface-variant leading-relaxed relative z-10">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
              <span>Developed an AI-powered Retail Demand Forecasting & Analytics Platform using Python, LightGBM, FastAPI, Streamlit, PostgreSQL, and Docker for multi-SKU demand prediction and business analytics.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
              <span>Engineered a production-oriented ML pipeline covering data preprocessing, feature engineering, hyperparameter tuning, time-series model training, evaluation, recursive forecasting, and REST API-based real-time inference.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
              <span>Integrated a RAG-powered analytics layer using LangChain, NVIDIA NIM APIs, Llama 3.1, NVIDIA embedding models, and ChromaDB to enable natural-language business querying and AI-powered forecast explanations.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
              <span>Delivered the end-to-end application by integrating ML inference, backend APIs, RAG services, and interactive analytics through iterative mentor-led technical reviews.</span>
            </li>
          </ul>

          {/* Project Link Box / Redirect Button */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span>Internship Project: AI Retail Demand Forecasting & Analytics</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-xl text-xs font-bold font-mono flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                View Project in Portfolio
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/BharathReddyRamasani/Multi-Series-Forecasting-celebal-project.git"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 hover:bg-white/10 text-on-surface border border-white/10 px-4 py-2 rounded-xl text-xs font-bold font-mono flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <ExternalLink className="w-3.5 h-3.5 text-primary" />
                GitHub Repository
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
