import {
  Briefcase,
  ExternalLink,
  CheckCircle2,
  Award,
  Calendar,
  Layers,
  Sparkles
} from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  badge: string;
  badgeColor: string;
  deliverableTitle: string;
  summary: string;
  metrics?: { label: string; value: string }[];
  contributions: { title: string; text: string }[];
  technologies: string[];
  link?: string;
  linkText?: string;
}

export default function ExperienceSection() {
  const experiences: ExperienceItem[] = [
    {
      company: "Celebal Technologies",
      role: "Data Science Intern",
      period: "May 2026 – Jul 2026 • 2 Months",
      badge: "Celebal Excellence Distinction",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      deliverableTitle: "Retail Demand Intelligence & AI Forecasting Platform",
      summary:
        "Architected and deployed a production multi-series retail demand forecasting platform predicting SKU-level demand across 10 stores × 50 products (500 SKUs, 900K+ records) using a joint LightGBM gradient-boosted engine and recursive autoregressive inference. Integrated an asynchronous FastAPI backend and a LangChain + ChromaDB RAG layer enabling natural-language querying and automated forecast driver explanations.",
      contributions: [
        {
          title: "Multi-Series Forecasting Architecture",
          text: "Engineered an end-to-end ML pipeline with a joint LightGBM gradient-boosted model and multi-step recursive autoregressive loop over 500 store-SKUs, delivering 7.37% MAPE and 0.974 R²."
        },
        {
          title: "Async-First Production API",
          text: "Built an asynchronous FastAPI service with SQLAlchemy 2.0 and non-blocking worker threads (asyncio.to_thread) for heavy ML calculations, hardened with SlowAPI rate-limiting and structured logging."
        },
        {
          title: "Generative AI Analytics & RAG",
          text: "Integrated LangChain, ChromaDB, and NVIDIA NIM LLMs to enable natural-language business querying (/ai/ask) over sales history and automated plain-English forecast narrative summaries (/ai/explain-forecast)."
        },
        {
          title: "Interactive BI Suite & Distinction",
          text: "Deployed an 8-page Streamlit analytics dashboard with Plotly charts and automated stockout reorder triggers, earning the Celebal Excellence Distinction."
        }
      ],
      technologies: [
        "Python 3.11",
        "LightGBM",
        "FastAPI",
        "LangChain",
        "ChromaDB",
        "NVIDIA NIM",
        "Llama 3.1",
        "PostgreSQL",
        "SQLAlchemy",
        "Streamlit",
        "Docker",
        "Pandas",
        "NumPy"
      ],
      link: "https://github.com/BharathReddyRamasani/Multi-Series-Forecasting-celebal-project",
      linkText: "GitHub Repository"
    },
    {
      company: "Independent AI Systems Engineering",
      role: "Applied AI / Multi-Agent & Backend Architect",
      period: "Sep 2025 – Present • Production Systems",
      badge: "Production Proof-of-Work",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      deliverableTitle: "Full-Stack Autonomous Systems & Multimodal Platforms",
      summary:
        "Architected and deployed 4 production-grade systems spanning LangGraph supervisor topologies, hybrid recommendation engines with collaborative filtering, multilingual Transformer fine-tuning (RoBERTa & IndicBERT on 80K+ samples), and enterprise inventory analytics with PostgreSQL and Streamlit.",
      metrics: [
        { label: "Agents Coordinated", value: "7 Agents" },
        { label: "Fine-Tuning Dataset", value: "80K+ Samples" },
        { label: "Live Deployments", value: "4 Cloud Spaces" },
        { label: "Global Rating", value: "Top 16% LeetCode" }
      ],
      contributions: [
        {
          title: "CorpusAI Multi-Agent RAG",
          text: "Engineered a LangGraph supervisor orchestrating 7 worker agents for paper synthesis, local all-MiniLM-L6-v2 embeddings, and streaming reports."
        },
        {
          title: "AI Conversational Commerce",
          text: "Built a hybrid recommendation engine combining content-based and collaborative filtering with LangChain RAG and FastAPI."
        },
        {
          title: "Multimodal Emotion & Hate Speech Detection",
          text: "Fine-tuned IndicBERT and RoBERTa for 9 classification heads with Tesseract OCR text extraction and LIME explainability."
        }
      ],
      technologies: [
        "LangGraph",
        "FastAPI",
        "PyTorch",
        "RoBERTa",
        "IndicBERT",
        "ChromaDB",
        "MongoDB",
        "PostgreSQL",
        "Docker",
        "React 18",
        "JavaScript"
      ],
      link: "https://github.com/BharathReddyRamasani",
      linkText: "GitHub Profile"
    }
  ];

  return (
    <section id="experience" className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto z-10 scroll-mt-20">
      <div className="space-y-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-slate-200 pb-4">
          <div>
            <span className="font-mono text-[10px] uppercase text-rose-600 tracking-[0.25em] block font-semibold mb-1">
              02. EXPERIENCE • CAREER &amp; INDUSTRY MILESTONES
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Work Experience
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-2xl mt-1 leading-relaxed">
              Production software engineering, multi-series machine learning systems, and Generative AI platforms built during industry internships and production projects.
            </p>
          </div>
        </div>

        {/* DATA-DRIVEN ALTERNATING EXPERIENCE DECK */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`bg-white border rounded-2xl p-6 sm:p-8 space-y-6 transition-all duration-300 shadow-sm hover:shadow-md ${
                idx % 2 === 0
                  ? "border-slate-200/90 hover:border-rose-300"
                  : "border-slate-200/90 hover:border-blue-300"
              }`}
            >
              {/* Top Row: Dates, Company, Role, Badge */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-100 pb-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-rose-600 font-bold tracking-wider uppercase flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-rose-600" />
                      {exp.period}
                    </span>
                    <span className="text-slate-300">&bull;</span>
                    <span className={`inline-flex items-center gap-1 font-mono text-[11px] px-2.5 py-0.5 rounded-full font-semibold border ${exp.badgeColor}`}>
                      <Award className="w-3 h-3" />
                      {exp.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                    {exp.role}
                  </h3>
                  <p className="font-sans text-sm text-rose-700 font-semibold">
                    {exp.company}
                  </p>
                </div>

                <div className="w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center border border-rose-200 shrink-0 text-rose-600 shadow-xs">
                  <Briefcase className="w-5 h-5" />
                </div>
              </div>

              {/* Deliverable Title & Executive Summary */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200 uppercase tracking-wider">
                    Production Deliverable
                  </span>
                  <h4 className="font-display text-base sm:text-lg font-bold text-slate-900">
                    {exp.deliverableTitle}
                  </h4>
                </div>

                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {exp.summary}
                </p>
              </div>

              {/* Core Engineering Contributions */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <span className="font-mono text-[10px] text-rose-600 uppercase tracking-wider block font-semibold">
                  Key Engineering Contributions
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {exp.contributions.map((c, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-slate-900">{c.title}:</strong> {c.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack Tags */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block font-semibold">
                  Technologies &amp; Tools
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[11px] bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-md text-slate-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verification & Code Links */}
              {exp.link && (
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Verified Production Codebase</span>
                  </div>

                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-semibold font-mono transition-all hover:scale-105 shadow-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-rose-600" />
                    <span>{exp.linkText || "View Codebase"}</span>
                  </a>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
