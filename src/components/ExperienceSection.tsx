import {
  Briefcase,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Brain,
  Database,
  BarChart3,
  FileText,
  Layers,
  Zap,
  ShieldCheck,
  Activity
} from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-12 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto z-10 scroll-mt-16">
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

        {/* WORK EXPERIENCE MAIN CARD */}
        <div className="bg-[#0e1614] border border-white/10 hover:border-primary/40 p-6 sm:p-7 rounded-xl transition-all duration-300 shadow-xl space-y-6">
          
          {/* Header: Company, Role, Distinction & Dates */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-primary font-bold tracking-wider uppercase">
                  May 2026 – Jul 2026 &bull; 2 Months
                </span>
                <span className="text-white/20">&bull;</span>
                <span className="font-mono text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-semibold">
                  Celebal Excellence Internship Distinction
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-on-surface">
                Data Science Intern
              </h3>
              <p className="font-sans text-sm text-secondary font-medium">
                Celebal Technologies
              </p>
            </div>

            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25 shrink-0 text-primary shadow-sm">
              <Briefcase className="w-5 h-5" />
            </div>
          </div>

          {/* Project Title & System Narrative */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded bg-primary/10 text-cyan-300 border border-primary/30 uppercase tracking-wider">
                Internship Production Deliverable
              </span>
              <h4 className="font-display text-base sm:text-lg font-bold text-on-surface">
                Retail Demand Intelligence &amp; AI Forecasting Platform
              </h4>
            </div>

            <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              An asynchronous, multi-series retail demand forecasting platform designed and deployed during the Celebal Technologies internship. At its core is a single LightGBM gradient-boosted model trained jointly across every store &times; product combination — learning shared network demand patterns across <strong>10 stores &times; 50 products (500 SKUs, 900K+ historical transaction rows)</strong> while executing store- and product-specific predictions through a recursive autoregressive multi-step inference loop.
            </p>
            <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Layered on top is a <strong>Generative AI analytical layer</strong> orchestrated with LangChain, ChromaDB, and NVIDIA NIM APIs. It empowers business stakeholders with natural-language querying (<code className="text-cyan-300 font-mono text-[11px]">/ai/ask</code>) directly over the database without SQL, and automated plain-English forecast explanations (<code className="text-cyan-300 font-mono text-[11px]">/ai/explain-forecast</code>) that translate statistical trends into actionable commercial insights.
            </p>
          </div>

          {/* Key Verified Performance Benchmarks Bar */}
          <div className="bg-black/40 border border-white/10 rounded-xl p-4 space-y-2.5">
            <span className="font-mono text-[10px] text-on-surface-variant/80 uppercase tracking-wider block font-semibold">
              Model Performance &amp; Scale Metrics (Evaluated on 179,600 Held-Out Predictions)
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
              <div className="bg-white/3 border border-white/5 p-2.5 rounded-lg space-y-0.5">
                <span className="font-mono text-[9.5px] text-on-surface-variant block">Forecast MAPE</span>
                <span className="font-display text-lg sm:text-xl font-black text-primary block">7.37%</span>
                <span className="font-mono text-[9px] text-on-surface-variant/70 block">Consistent Error</span>
              </div>

              <div className="bg-white/3 border border-white/5 p-2.5 rounded-lg space-y-0.5">
                <span className="font-mono text-[9.5px] text-on-surface-variant block">R² Score</span>
                <span className="font-display text-lg sm:text-xl font-black text-emerald-400 block">0.974</span>
                <span className="font-mono text-[9px] text-on-surface-variant/70 block">Explained Variance</span>
              </div>

              <div className="bg-white/3 border border-white/5 p-2.5 rounded-lg space-y-0.5">
                <span className="font-mono text-[9.5px] text-on-surface-variant block">RMSE / MAE</span>
                <span className="font-display text-lg sm:text-xl font-black text-cyan-300 block">4.67 / 3.56</span>
                <span className="font-mono text-[9px] text-on-surface-variant/70 block">Absolute Deviation</span>
              </div>

              <div className="bg-white/3 border border-white/5 p-2.5 rounded-lg space-y-0.5">
                <span className="font-mono text-[9.5px] text-on-surface-variant block">Network Scale</span>
                <span className="font-display text-lg sm:text-xl font-black text-secondary block">900K+</span>
                <span className="font-mono text-[9px] text-on-surface-variant/70 block">500 Store-SKUs</span>
              </div>

              <div className="bg-white/3 border border-white/5 p-2.5 rounded-lg space-y-0.5">
                <span className="font-mono text-[9.5px] text-on-surface-variant block">Feature Space</span>
                <span className="font-display text-lg sm:text-xl font-black text-amber-300 block">34</span>
                <span className="font-mono text-[9px] text-on-surface-variant/70 block">Engineered Features</span>
              </div>

              <div className="bg-white/3 border border-white/5 p-2.5 rounded-lg space-y-0.5">
                <span className="font-mono text-[9.5px] text-on-surface-variant block">Inference Strategy</span>
                <span className="font-display text-base font-bold text-on-surface block mt-1">Recursive</span>
                <span className="font-mono text-[9px] text-on-surface-variant/70 block">Multi-Horizon Loop</span>
              </div>
            </div>
          </div>

          {/* Core Responsibilities & Engineering Work (The 4 Official Prompt Bullets) */}
          <div className="space-y-2 pt-1">
            <span className="font-mono text-[10px] text-primary uppercase tracking-wider block font-semibold">
              Core Engineering Responsibilities &amp; Deliverables
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>AI Retail Demand Platform Engineering:</strong> Developed an AI-powered Retail Demand Forecasting &amp; Analytics Platform using Python, LightGBM, FastAPI, Streamlit, PostgreSQL, and Docker for multi-SKU demand prediction and business analytics.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>End-to-End Production ML Pipeline:</strong> Engineered a production-oriented ML pipeline covering data preprocessing, feature engineering (34 features), hyperparameter tuning, time series model training, evaluation, recursive forecasting, and REST API-based real-time inference.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>RAG-Powered Analytics &amp; LLM Narration:</strong> Integrated a RAG-powered analytics layer using LangChain, NVIDIA NIM APIs, Llama 3.1, NVIDIA embedding models, and ChromaDB to enable natural-language business querying (<code className="text-cyan-300 font-mono text-[11px]">/ai/ask</code>) and AI-powered forecast explanations (<code className="text-cyan-300 font-mono text-[11px]">/ai/explain-forecast</code>).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>End-to-End Integration &amp; Distinction:</strong> Delivered the end-to-end application by integrating ML inference, backend APIs, RAG services, and interactive analytics through iterative mentor-led technical reviews, earning the <strong className="text-emerald-400">Celebal Excellence distinction</strong>.
                </span>
              </li>
            </ul>
          </div>

          {/* Detailed System Architecture & Features Breakdown (4 Pillar Cards) */}
          <div className="space-y-2 pt-2 border-t border-white/5">
            <span className="font-mono text-[10px] text-secondary uppercase tracking-wider block font-semibold">
              Deep Architecture &amp; System Capabilities
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              
              <div className="bg-black/30 border border-white/10 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-cyan-300 font-bold font-mono text-xs">
                  <Zap className="w-4 h-4 text-primary" />
                  <span>Async-First Backend &amp; API Hardening</span>
                </div>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                  FastAPI + SQLAlchemy 2.0 async engine. CPU-bound ML computations (LightGBM training and recursive predictions) are dispatched via <code className="text-primary font-mono text-[11px]">asyncio.to_thread</code> to guarantee the event loop never blocks. Hardened with SlowAPI rate-limiting, custom security-headers middleware, structured Loguru logging, and global exception handlers.
                </p>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-xs">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span>Joint Multi-Series LightGBM Engine</span>
                </div>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                  Instead of maintaining hundreds of individual SKU models, a single LightGBM gradient-boosted model learns global demand trends across all stores and products. A recursive autoregressive loop recalculates lag and rolling statistics from prior day predictions to roll forward multi-horizon forecasts with 7.37% network MAPE.
                </p>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-secondary font-bold font-mono text-xs">
                  <Brain className="w-4 h-4 text-secondary" />
                  <span>Generative AI Assistant &amp; ChromaDB RAG</span>
                </div>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                  LangChain-orchestrated assistant backed by a ChromaDB vector store and NVIDIA NIM models. Bridges the gap between raw statistical numbers and business decision-making by explaining trend drivers in plain English and allowing stakeholders to query live inventory and sales without writing SQL.
                </p>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-bold font-mono text-xs">
                  <BarChart3 className="w-4 h-4 text-amber-300" />
                  <span>Streamlit BI &amp; Predictive Inventory</span>
                </div>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                  Multi-page Streamlit application (dashboard, forecast, batch forecast, analytics, inventory, AI chat, history, settings) with interactive Plotly visual charts, store-level filtering, and automated reorder-point triggers tied directly to demand projections to avert stockouts.
                </p>
              </div>

            </div>
          </div>

          {/* 34-Feature Engineering Pipeline Breakdown */}
          <div className="bg-black/30 border border-white/10 rounded-lg p-4 space-y-2">
            <span className="font-mono text-[10px] text-on-surface-variant/80 uppercase tracking-wider block font-semibold">
              34-Feature Engineering Space
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
              <div className="bg-white/3 p-2 rounded border border-white/5 space-y-1">
                <span className="text-cyan-300 font-bold block text-[11px]">Temporal &amp; Cyclical</span>
                <p className="text-[10.5px] text-on-surface-variant">year, month, day, day_of_week, day_of_year, week_of_year, quarter, is_weekend, month_sin/cos, day_of_week_sin/cos</p>
              </div>

              <div className="bg-white/3 p-2 rounded border border-white/5 space-y-1">
                <span className="text-secondary font-bold block text-[11px]">Autoregressive Lags &amp; Stats</span>
                <p className="text-[10.5px] text-on-surface-variant">lag_7, lag_14, lag_30, rolling mean/std/max/min over 7/14/30-day windows, exponential moving averages (ema_7, ema_30)</p>
              </div>

              <div className="bg-white/3 p-2 rounded border border-white/5 space-y-1">
                <span className="text-emerald-400 font-bold block text-[11px]">Pricing &amp; External Drivers</span>
                <p className="text-[10.5px] text-on-surface-variant">is_holiday flags, price_to_cost_ratio, promotional impact indicators, stock velocity coefficients</p>
              </div>
            </div>
          </div>

          {/* Complete Technology Stack Pill Bar */}
          <div className="pt-2 border-t border-white/5 space-y-2">
            <span className="font-mono text-[10px] text-on-surface-variant/80 uppercase tracking-widest block font-semibold">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Python 3.11",
                "LightGBM",
                "FastAPI",
                "SQLAlchemy 2.0 (Async)",
                "PostgreSQL",
                "Streamlit",
                "LangChain",
                "ChromaDB",
                "NVIDIA NIM",
                "Llama 3.1",
                "Redis",
                "Plotly",
                "Pandas",
                "NumPy",
                "Docker Compose",
                "SlowAPI",
                "Loguru"
              ].map((tech, tIdx) => (
                <span key={tIdx} className="font-mono text-[11px] bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-md text-on-surface">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Direct Verification Links */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Celebal Technologies Internship Verified Codebase &amp; Technical Docs</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://github.com/BharathReddyRamasani/Multi-Series-Forecasting-celebal-project/blob/main/Retail_Forecasting_Platform_Documentation.docx"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-on-surface border border-white/10 text-xs font-semibold font-mono transition-all hover:scale-105"
              >
                <FileText className="w-3.5 h-3.5 text-secondary" />
                <span>Full Platform Documentation (Docx)</span>
                <ExternalLink className="w-3 h-3 text-on-surface-variant" />
              </a>

              <a
                href="https://github.com/BharathReddyRamasani/Multi-Series-Forecasting-celebal-project"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-cyan-300 border border-primary/30 text-xs font-semibold font-mono transition-all hover:scale-105"
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
