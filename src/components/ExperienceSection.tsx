import {
  Briefcase,
  ExternalLink,
  CheckCircle2,
  Award
} from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto z-10 scroll-mt-20">
      <div className="space-y-6">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-white/10 pb-4">
          <div>
            <span className="font-mono text-[10px] uppercase text-primary tracking-[0.25em] block font-semibold mb-1">
              PROFESSIONAL WORK EXPERIENCE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-on-surface">
              Work Experience
            </h2>
            <p className="font-sans text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
              Production software engineering, multi-series machine learning systems, and Generative AI platforms built during industry internships.
            </p>
          </div>
        </div>

        {/* WORK EXPERIENCE COMPACT & HIGH-CONVERSION CARD */}
        <div className="bg-[#0e1614] border border-white/10 hover:border-primary/40 p-5 sm:p-7 rounded-xl transition-all duration-300 shadow-xl space-y-5">
          
          {/* Header: Company, Role, Distinction & Dates */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-primary font-bold tracking-wider uppercase">
                  May 2026 – Jul 2026 &bull; 2 Months
                </span>
                <span className="text-white/20">&bull;</span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-semibold">
                  <Award className="w-3 h-3" />
                  Celebal Excellence Distinction
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-on-surface">
                Data Science Intern
              </h3>
              <p className="font-sans text-sm text-secondary font-semibold">
                Celebal Technologies
              </p>
            </div>

            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25 shrink-0 text-primary shadow-sm">
              <Briefcase className="w-5 h-5" />
            </div>
          </div>

          {/* Project Deliverable Title & Executive Summary */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-primary/10 text-cyan-300 border border-primary/30 uppercase tracking-wider">
                Production Deliverable
              </span>
              <h4 className="font-display text-base sm:text-lg font-bold text-on-surface">
                Retail Demand Intelligence &amp; AI Forecasting Platform
              </h4>
            </div>

            <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Architected and deployed a production multi-series retail demand forecasting platform predicting SKU-level demand across <strong>10 stores &times; 50 products (500 SKUs, 900K+ records)</strong> using a joint LightGBM gradient-boosted engine and recursive autoregressive inference. Integrated an asynchronous FastAPI backend and a LangChain + ChromaDB RAG layer enabling natural-language querying and automated forecast driver explanations.
            </p>
          </div>

          {/* 4 Crisp Core Engineering Deliverables */}
          <div className="space-y-2.5 pt-1">
            <span className="font-mono text-[10px] text-primary uppercase tracking-wider block font-semibold">
              Key Engineering Contributions
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong className="text-on-surface">Multi-Series Forecasting Architecture:</strong> Engineered an end-to-end ML pipeline with a joint LightGBM gradient-boosted model and multi-step recursive autoregressive loop over 500 store-SKUs, delivering 7.37% MAPE and 0.974 R².
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong className="text-on-surface">Async-First Production API:</strong> Built an asynchronous FastAPI service with SQLAlchemy 2.0 and non-blocking worker threads (<code className="text-primary font-mono text-[11px]">asyncio.to_thread</code>) for heavy ML calculations, hardened with SlowAPI rate-limiting and structured logging.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong className="text-on-surface">Generative AI Analytics &amp; RAG:</strong> Integrated LangChain, ChromaDB, and NVIDIA NIM LLMs to enable natural-language business querying (<code className="text-cyan-300 font-mono text-[11px]">/ai/ask</code>) over sales history and automated plain-English forecast narrative summaries (<code className="text-cyan-300 font-mono text-[11px]">/ai/explain-forecast</code>).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong className="text-on-surface">Interactive BI Suite &amp; Distinction:</strong> Deployed an 8-page Streamlit analytics dashboard with Plotly charts and automated stockout reorder triggers, earning the <strong className="text-emerald-400">Celebal Excellence Distinction</strong>.
                </span>
              </li>
            </ul>
          </div>

          {/* Technology Stack Tags */}
          <div className="pt-2 border-t border-white/5 space-y-2">
            <span className="font-mono text-[10px] text-on-surface-variant/80 uppercase tracking-widest block font-semibold">
              Technologies &amp; Tools
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Python 3.11",
                "LightGBM",
                "FastAPI",
                "LangChain",
                "ChromaDB",
                "NVIDIA NIM",
                "Llama 3.1",
                "PostgreSQL",
                "SQLAlchemy (Async)",
                "Streamlit",
                "Docker",
                "Pandas",
                "NumPy"
              ].map((tech, tIdx) => (
                <span key={tIdx} className="font-mono text-[11px] bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-md text-on-surface">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Verification & Code Links */}
          <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Celebal Technologies Internship Deliverable</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://github.com/BharathReddyRamasani/Multi-Series-Forecasting-celebal-project"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-cyan-300 border border-primary/30 text-xs font-semibold font-mono transition-all hover:scale-105"
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
