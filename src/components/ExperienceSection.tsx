import { Briefcase, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-12 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto z-10 scroll-mt-16">
      <div className="space-y-6">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-white/10 pb-4">
          <div>
            <span className="font-mono text-[10px] uppercase text-primary tracking-[0.25em] block font-semibold mb-1">
              PROFESSIONAL WORK
            </span>
            <h2 className="font-display text-2xl font-extrabold text-on-surface">
              Work Experience
            </h2>
            <p className="font-sans text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
              Production software engineering, machine learning pipelines, and applied AI systems.
            </p>
          </div>
        </div>

        {/* WORK EXPERIENCE CARD */}
        <div className="bg-[#0e1614] border border-white/10 hover:border-primary/40 p-5 sm:p-6 rounded-xl transition-all duration-300 shadow-xl relative overflow-hidden group">
          {/* Role & Company Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2.5 mb-4 relative z-10">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="font-mono text-xs text-primary font-semibold tracking-wider uppercase">
                  May 2026 – Jul 2026 &bull; 2 Months
                </span>
                <span className="text-white/20">&bull;</span>
                <span className="font-mono text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-semibold">
                  Celebal Excellence Internship Distinction
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-on-surface">
                Data Science Intern
              </h3>
              <p className="font-sans text-sm text-secondary font-medium mt-0.5">
                Celebal Technologies
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/25 shrink-0 text-primary">
              <Briefcase className="w-5 h-5" />
            </div>
          </div>

          {/* Bullet points: Action + Technical Work + Result */}
          <ul className="space-y-2.5 mb-5 text-xs sm:text-sm text-on-surface-variant leading-relaxed relative z-10">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                <strong>Engineered AI Retail Forecasting Platform:</strong> Processed and analyzed <strong className="text-on-surface">9 Lakh+ historical retail transaction rows across 10 stores and 500 store-product SKUs</strong> using Python, LightGBM, FastAPI, PostgreSQL, and Docker.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                <strong>End-to-End ML Pipeline Architecture:</strong> Formulated lag and rolling window features, trained multi-horizon recursive forecast models, and built asynchronous FastAPI endpoints delivering low-latency inference for store managers.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                <strong>RAG Analytical Layer:</strong> Integrated LangChain, NVIDIA NIM APIs, Llama 3.1, and ChromaDB vector search to enable natural-language business queries and automated forecast explanations.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                <strong>Containerization &amp; Distinction:</strong> Packaged complete service stack with Docker and presented the deployed system with interactive Streamlit dashboards, earning the <strong className="text-emerald-400">Celebal Excellence Internship Award</strong>.
              </span>
            </li>
          </ul>

          {/* Technologies Used Pill Bar */}
          <div className="mb-5 pt-2 border-t border-white/5 relative z-10">
            <span className="font-mono text-[10px] text-on-surface-variant/80 uppercase tracking-widest block mb-2 font-semibold">
              Technologies Used
            </span>
            <div className="flex flex-wrap gap-1.5">
              {["Python", "LightGBM", "FastAPI", "PostgreSQL", "Streamlit", "LangChain", "NVIDIA NIM", "Llama 3.1", "ChromaDB", "Docker"].map((tech, tIdx) => (
                <span key={tIdx} className="font-mono text-[11px] bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-md text-on-surface">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Link Box / Redirect Button */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 relative z-10">
            <div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Internship Deliverable: Retail Demand Forecasting &amp; Analytics Platform</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href="#projects"
                className="bg-primary/10 hover:bg-primary/20 text-cyan-300 border border-primary/30 px-3 py-1.5 rounded-lg text-xs font-semibold font-mono flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
              >
                <span>View Project in Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/BharathReddyRamasani/Multi-Series-Forecasting-celebal-project.git"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 hover:bg-white/10 text-on-surface border border-white/10 px-3 py-1.5 rounded-lg text-xs font-semibold font-mono flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
              >
                <ExternalLink className="w-3.5 h-3.5 text-primary" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
