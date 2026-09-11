import { useState } from "react";
import {
  Cpu,
  ChevronDown,
  ChevronUp,
  Github,
  Globe,
  Layers,
  Terminal,
  Database,
  GitBranch,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  BarChart3,
  Sparkles,
  Workflow,
  ArrowRight
} from "lucide-react";

interface BenchmarkMetric {
  metric: string;
  baseline: string;
  measured: string;
  impact: string;
}

interface TradeOff {
  decision: string;
  tradeoff: string;
}

interface ProjectData {
  id: string;
  title: string;
  roleBadge: string;
  roleType: "flagship-a" | "flagship-b" | "supporting";
  shortSummary: string;
  keyMetrics: { label: string; value: string; subtext: string }[];
  tags: string[];
  keyBullets: string[];
  githubUrl: string;
  liveUrl: string;
  problem: string;
  solution: string;
  diagramType: "corpus-ai" | "ai-commerce" | "hate-speech" | "nexus-commerce";
  tradeoffs: TradeOff[];
  benchmarks: BenchmarkMetric[];
  deepDiveTitle: string;
  deepDiveItems: { label: string; detail: string }[];
  limitations: { limitation: string; roadmap: string };
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<"ALL" | "FLAGSHIP" | "AI_ML" | "FULLSTACK">("ALL");
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({
    "corpus-ai": true // Default expanded for instant recruiter verification
  });

  const toggleProject = (id: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const projects: ProjectData[] = [
    {
      id: "corpus-ai",
      title: "CorpusAI — Multi-Agent AI Research Assistant for Literature Synthesis",
      roleBadge: "Flagship A • Agentic AI & RAG",
      roleType: "flagship-a",
      shortSummary: "Supervisor multi-agent LangGraph platform coordinating 7 specialized AI agents for academic paper analysis, semantic retrieval, research gap detection, and literature synthesis.",
      keyMetrics: [
        { label: "Recall@5", value: "89.1%", subtext: "ChromaDB + all-MiniLM-L6-v2" },
        { label: "Faithfulness", value: "92.4%", subtext: "Zero hallucination groundedness" }
      ],
      tags: ["Python", "LangGraph", "LangChain", "FastAPI", "ChromaDB", "Docker", "Llama 3.1", "React.js"],
      keyBullets: [
        "Architected a LangGraph supervisor multi-agent system coordinating 7 specialized agents (Paper Analysis, Multi-Paper Chat, Gap Detection, Literature Synthesis, Report Gen).",
        "Engineered an Agentic RAG pipeline with ChromaDB and all-MiniLM-L6-v2 embeddings achieving 89.1% Recall@5 and 0.81 MRR with source-level citation attribution.",
        "Built modular FastAPI REST backend with JWT authentication, OCR document extraction, and persistent SQLite session storage deployed via Docker on Hugging Face Spaces."
      ],
      githubUrl: "https://github.com/BharathReddyRamasani/CorpusAI-An-AI-Powered-Literature-Synthesis-for-Researchers.git",
      liveUrl: "https://huggingface.co/spaces/Bharath2769/ai-research-assistant",
      problem: "Academic literature reviews require synthesizing dozens of dense PDFs, finding research gaps, and cross-referencing claims. Monolithic single-prompt LLMs fail from limited context windows, document hallucinations, and lack of specialized reasoning delegation.",
      solution: "Decomposed the synthesis workflow into a LangGraph supervisor-worker state machine. A central supervisor deterministically routes user queries across 7 specialist agents, drawing from a persistent ChromaDB vector store and returning citation-grounded synthesis via Groq Llama 3.1.",
      diagramType: "corpus-ai",
      tradeoffs: [
        {
          decision: "ChromaDB (Vector DB) + SQLite (Relational) Dual Storage",
          tradeoff: "ChromaDB delivers sub-millisecond approximate nearest neighbor (ANN) vector searches on 384-d embeddings, while SQLite guarantees strict ACID compliance for user sessions, chat histories, and metadata."
        },
        {
          decision: "Agentic RAG vs Model Fine-Tuning",
          tradeoff: "Fine-tuning cannot cite exact source pages in newly published literature. Agentic RAG allows zero-downtime document uploads with verifiable page-level citation tracing and 92.4% faithfulness."
        },
        {
          decision: "Supervisor Topology vs Autonomous Sequential Chain",
          tradeoff: "Sequential chains accumulate context drift and fail catastrophically if any intermediate agent errors out. The supervisor pattern isolates each agent's execution scope with automated fallback edges."
        }
      ],
      benchmarks: [
        { metric: "Recall@5", baseline: "72.4%", measured: "89.1%", impact: "+16.7% relevant context captured in top-5 chunks" },
        { metric: "Mean Reciprocal Rank (MRR)", baseline: "0.61", measured: "0.81", impact: "First relevant source positioned near top of prompt context" },
        { metric: "Faithfulness (Ragas Eval)", baseline: "79.5%", measured: "92.4%", impact: "Generated claims directly backed by underlying document citations" },
        { metric: "End-to-End Latency", baseline: "4.6s", measured: "2.1s", impact: "Parallelized graph execution cuts overall synthesis latency by 54%" },
        { metric: "Loop Termination Safeguard", baseline: "N/A", measured: "100%", impact: "Hard recursion_limit=15 strictly prevents infinite agent tool calls" }
      ],
      deepDiveTitle: "Agentic Architecture & State Management",
      deepDiveItems: [
        { label: "Graph State Typing", detail: "State is strictly typed using LangGraph's AgentState with custom operator reducers for append-only conversational messages and overwrite semantics for routing directives." },
        { label: "Fault Recovery", detail: "If a worker encounters OCR artifacts or unparseable tables, it emits a structured error node back to the supervisor to trigger relaxed semantic retrieval or targeted clarification." },
        { label: "Memory Isolation", detail: "Conversational history is preserved in SQLite sessions, vector embeddings reside immutably in ChromaDB, and task state remains ephemeral for graph runtime." }
      ],
      limitations: {
        limitation: "Multi-column academic PDF layouts and dense scientific tables occasionally lose structural hierarchy during standard sentence chunking.",
        roadmap: "Integrating vision-language document models (ColPali / LayoutLMv3) for layout-aware bounding box parsing and hybrid dense-sparse (BM25 + vector) retrieval."
      }
    },
    {
      id: "ai-commerce",
      title: "AI-Commerce — Autonomous Conversational Commerce & Recommendation Platform",
      roleBadge: "Flagship B • Full-Stack Engineering & ML",
      roleType: "flagship-b",
      shortSummary: "Production-oriented full-stack e-commerce system pairing a hybrid recommendation engine (collaborative, content, popularity) with a conversational RAG shopping assistant grounded in MongoDB.",
      keyMetrics: [
        { label: "NDCG@10", value: "0.84", subtext: "Ranking relevance vs 0.62 baseline" },
        { label: "Groundedness", value: "94.1%", subtext: "Zero catalog hallucination" }
      ],
      tags: ["Python", "FastAPI", "MongoDB", "React.js", "ChromaDB", "LangChain", "Gemini LLM", "Docker", "REST APIs"],
      keyBullets: [
        "Designed and implemented a hybrid recommendation engine combining collaborative, content-based similarity, and popularity scoring (0.84 NDCG@10).",
        "Built a conversational RAG shopping assistant using LangChain, ChromaDB catalog embeddings, and Gemini LLM for natural-language product discovery (94.1% groundedness).",
        "Architected modular full-stack application with FastAPI REST routers, MongoDB document store, React.js UI, and sub-45ms order and cart transaction latency."
      ],
      githubUrl: "https://github.com/BharathReddyRamasani/AI-Powered-Conversational-Commerce-Platform.git",
      liveUrl: "https://huggingface.co/spaces/Bharath2769/AI-Powered-Conversational-Commerce-Platform",
      problem: "E-commerce shoppers face keyword-search failure for descriptive needs (e.g., 'lightweight water-resistant jacket under $80') while typical chatbots hallucinate products or fail to reflect real inventory stock and cart status.",
      solution: "Built a dual-tier architecture: an algorithmic recommendation engine that personalizes product feeds, paired with a conversational RAG shopping assistant that pulls matching items from ChromaDB and Gemini LLM with real-time stock validation in MongoDB.",
      diagramType: "ai-commerce",
      tradeoffs: [
        {
          decision: "Hybrid Recommendation (Collaborative + Content + Popularity) vs Pure Collaborative Filtering",
          tradeoff: "Pure collaborative filtering suffers from severe cold-start with new inventory. Blending content metadata similarity with interaction weights maintains high recommendation relevance from day one."
        },
        {
          decision: "Dual Database: MongoDB (Document) + ChromaDB (Vector)",
          tradeoff: "MongoDB stores high-frequency transactional data (users, shopping carts, orders) with ACID documents, while ChromaDB handles dense vector embeddings for conceptual product discovery."
        }
      ],
      benchmarks: [
        { metric: "NDCG@10 (Ranking Quality)", baseline: "0.62", measured: "0.84", impact: "+0.22 improvement over popularity baseline" },
        { metric: "Top-5 Precision", baseline: "68.0%", measured: "86.4%", impact: "High relevance on personalized recommendations" },
        { metric: "Catalog Groundedness", baseline: "76.0%", measured: "94.1%", impact: "Zero hallucinated SKUs or out-of-spec claims" },
        { metric: "Cart & Checkout P95 Latency", baseline: "110ms", measured: "45ms", impact: "FastAPI async endpoints with indexed MongoDB queries" }
      ],
      deepDiveTitle: "Full-Stack System Design & Grounding",
      deepDiveItems: [
        { label: "Catalog Vectorization", detail: "Product attributes (category, brand, materials, price range) are vectorized into ChromaDB collections for high-precision semantic lookup." },
        { label: "Real-Time Stock Checking", detail: "Prior to presenting conversational suggestions, the FastAPI service queries MongoDB inventory to ensure out-of-stock items are omitted." },
        { label: "Stateful Cart Management", detail: "The shopping assistant has direct tool-calling endpoints to inspect the active cart and apply discount coupons securely." }
      ],
      limitations: {
        limitation: "Vector search over catalog embeddings requires post-query filtering to check dynamic real-time inventory stock levels.",
        roadmap: "Integrating Redis-backed real-time inventory caches directly into pre-retrieval vector metadata filters to eliminate out-of-stock suggestions before LLM generation."
      }
    },
    {
      id: "hate-speech",
      title: "Emotion-Aware Multimodal Hate Speech Detection System",
      roleBadge: "Supporting Project • NLP & Deep Learning",
      roleType: "supporting",
      shortSummary: "Multilingual, multimodal NLP system detecting hate speech across text, image memes, PDFs, and scanned flyers using fine-tuned Transformer models (RoBERTa, IndicBERT) with LIME explainability.",
      keyMetrics: [
        { label: "Macro F1", value: "88.4%", subtext: "80K+ Multilingual dataset" },
        { label: "OCR Accuracy", value: "94.2%", subtext: "Tesseract image meme extraction" }
      ],
      tags: ["Python", "PyTorch", "Transformers", "RoBERTa", "IndicBERT", "FastAPI", "Tesseract OCR", "LIME XAI", "Docker"],
      keyBullets: [
        "Fine-tuned multilingual Transformer models (RoBERTa and IndicBERT) using PyTorch on 80,000+ verified samples (88.4% Macro F1).",
        "Engineered a multimodal text extraction pipeline using Tesseract OCR to process text within image memes, PDFs, and scanned flyers (94.2% character accuracy).",
        "Integrated LIME (Local Interpretable Model-agnostic Explanations) to generate token-level attribution heatmaps explaining classification decisions."
      ],
      githubUrl: "https://github.com/BharathReddyRamasani/Emotion-Aware-Hate-Speech-Detection-System.git",
      liveUrl: "https://huggingface.co/spaces/annepagaanvesh/EmiHate-Grid",
      problem: "Online harmful content frequently evades keyword blacklists by appearing inside image memes, screenshots, and cross-lingual scripts (Indic languages). Furthermore, black-box AI moderators fail to provide transparent evidence for moderation appeals.",
      solution: "Engineered an end-to-end multimodal classification pipeline with Tesseract OCR, fine-tuned RoBERTa and IndicBERT Transformer models in PyTorch, and integrated LIME explainability for token-level transparency.",
      diagramType: "hate-speech",
      tradeoffs: [
        {
          decision: "Locally Fine-Tuned Transformers vs Closed Cloud APIs",
          tradeoff: "Fine-tuning RoBERTa and IndicBERT locally ensures deterministic classification thresholds, zero external per-token API costs, 120ms P95 latency, and absolute data confidentiality."
        },
        {
          decision: "LIME vs Raw Gradient Saliency Maps",
          tradeoff: "LIME produces intuitive, word-level perturbation weights that human moderators can immediately interpret, whereas raw gradient saliency maps produce noisy, unintuitive token attributions."
        }
      ],
      benchmarks: [
        { metric: "Macro F1 Score", baseline: "81.2%", measured: "88.4%", impact: "+7.2% improvement across balanced multilingual categories" },
        { metric: "Precision (Low False Positives)", baseline: "82.5%", measured: "89.1%", impact: "Minimizes false bans on sarcastic or controversial non-hateful speech" },
        { metric: "Indic Cross-Lingual F1", baseline: "73.4%", measured: "85.9%", impact: "Strong performance on regional Indian linguistic nuances" },
        { metric: "P95 Text Inference Latency", baseline: "240ms", measured: "120ms", impact: "FastAPI REST service with optimized PyTorch runtime" }
      ],
      deepDiveTitle: "Transformer Fine-Tuning & Explainability",
      deepDiveItems: [
        { label: "Training Procedure", detail: "Trained using PyTorch with AdamW optimizer, linear warmup, cross-entropy loss, and validation checkpointing across 80K+ multilingual samples." },
        { label: "Multimodal Handling", detail: "Automatic mime-type routing: text passes directly to tokenizers; images and PDFs undergo adaptive thresholding and Tesseract OCR preprocessing." },
        { label: "LIME Explainability", detail: "Generates localized feature importance scores by perturbing words, illustrating exact words triggering toxic classification." }
      ],
      limitations: {
        limitation: "Sarcasm, culturally specific slang, and code-mixed vernacular (Hinglish) remain challenging edge cases.",
        roadmap: "Active learning human-in-the-loop moderator feedback loops and joint multi-task emotion co-training to capture contextual sentiment."
      }
    },
    {
      id: "nexus-commerce",
      title: "Nexus Commerce Suite — Enterprise Retail Analytics & Forecasting",
      roleBadge: "Supporting Project • Data Science & SDE",
      roleType: "supporting",
      shortSummary: "Enterprise retail operations and analytics suite processing 900,000+ historical transaction rows across 500 SKUs with Pareto ABC classification, RFM segmentation, and sales forecasting.",
      keyMetrics: [
        { label: "Dataset Scale", value: "900K+ Rows", subtext: "10 stores × 500 SKUs" },
        { label: "Forecast MAPE", value: "8.7%", subtext: "XGBoost / Prophet models" }
      ],
      tags: ["Python", "SQL", "PostgreSQL", "Pandas", "NumPy", "Streamlit", "LightGBM", "Prophet", "Time-Series"],
      keyBullets: [
        "Architected an operational business intelligence platform backed by PostgreSQL with transactional integrity across inventory, orders, and sales.",
        "Implemented quantitative algorithms including ABC Inventory Analysis (80/15/5 Pareto principle) and RFM Customer Segmentation.",
        "Engineered predictive sales forecasting pipelines and an interactive Streamlit operations dashboard processing 900,000+ transaction rows."
      ],
      githubUrl: "https://github.com/BharathReddyRamasani/Nexus-Commerce-Suite.git",
      liveUrl: "https://bharathreddyramasani-nexus-commerce-suite-app-rbr.streamlit.app/",
      problem: "Midsize retail operations often rely on fragmented spreadsheets without transactional validation, lacking visibility into high-revenue inventory (Pareto distribution) and demand trends to prevent stockouts.",
      solution: "Engineered a PostgreSQL-backed data platform with an analytical computing layer built using vectorized Pandas/NumPy and an interactive Streamlit dashboard for real-time demand forecasting.",
      diagramType: "nexus-commerce",
      tradeoffs: [
        {
          decision: "Vectorized In-Memory Computing (Pandas/NumPy) vs Distributed Spark",
          tradeoff: "For datasets under 5 million records (900K rows in production), single-node vectorized processing executes in <500ms with zero cluster orchestration overhead or cloud cluster bills."
        },
        {
          decision: "PostgreSQL Relational Schema with Constraints vs NoSQL",
          tradeoff: "Financial transactions and inventory movements demand strict ACID guarantees and foreign key constraints to eliminate stock discrepancies."
        }
      ],
      benchmarks: [
        { metric: "Sales Demand Forecast MAPE", baseline: "17.8%", measured: "8.7%", impact: "High-accuracy demand projection minimizing overstock and stockouts" },
        { metric: "Pareto ABC Classification", baseline: "Manual/Ad-hoc", measured: "100%", impact: "Automated classification of top 80% revenue drivers (A-tier SKUs)" },
        { metric: "Data Processing Scale", baseline: "10K rows", measured: "900,000+ rows", impact: "Enterprise transaction history across 10 retail stores and 500 SKUs" },
        { metric: "Analytical Query Latency", baseline: "2.8s", measured: "<500ms", impact: "Vectorized computation for instantaneous dashboard metric recalculations" }
      ],
      deepDiveTitle: "Quantitative Algorithms & Analytics Engine",
      deepDiveItems: [
        { label: "Pareto ABC Engine", detail: "Calculates cumulative SKU revenue contributions and deterministically maps items to Category A (top 80%), B (next 15%), or C (remaining 5%)." },
        { label: "RFM Segmentation", detail: "Computes statistical quantile scoring across Recency, Frequency, and Monetary metrics to identify champion and churn-risk customer segments." },
        { label: "Demand Forecasting", detail: "Multi-horizon sales forecasting leveraging trend and seasonal decomposition with LightGBM and Prophet models." }
      ],
      limitations: {
        limitation: "Time-series forecasting on volatile promotional items currently requires manual tuning of holiday changepoint priors.",
        roadmap: "Automating hyperparameter tuning with Optuna and establishing materialized PostgreSQL views with automated cron refreshes for sub-50ms dashboard responsiveness."
      }
    }
  ];

  // Filtering
  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "FLAGSHIP") return p.roleType.startsWith("flagship");
    if (activeFilter === "AI_ML") return p.tags.includes("LangGraph") || p.tags.includes("PyTorch");
    if (activeFilter === "FULLSTACK") return p.tags.includes("FastAPI") || p.tags.includes("React.js");
    return true;
  });

  return (
    <section id="projects" className="relative py-12 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto z-10 scroll-mt-16">
      <div className="space-y-6">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-white/10 pb-4">
          <div>
            <span className="font-mono text-[10px] uppercase text-primary tracking-[0.25em] block font-semibold mb-1">
              ENGINEERING EVIDENCE &amp; EVALUATION
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-on-surface">
              Selected Work
            </h2>
            <p className="font-sans text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
              Two flagship engineering systems demonstrating Multi-Agent orchestration and full-stack ML, followed by supporting deep learning and analytics systems.
            </p>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
            <button
              onClick={() => setActiveFilter("ALL")}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                activeFilter === "ALL"
                  ? "bg-primary text-on-primary font-bold shadow-sm"
                  : "bg-surface-container-high/60 text-on-surface-variant hover:text-white"
              }`}
            >
              All (4)
            </button>
            <button
              onClick={() => setActiveFilter("FLAGSHIP")}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                activeFilter === "FLAGSHIP"
                  ? "bg-primary text-on-primary font-bold shadow-sm"
                  : "bg-surface-container-high/60 text-on-surface-variant hover:text-white"
              }`}
            >
              Flagships (2)
            </button>
            <button
              onClick={() => setActiveFilter("AI_ML")}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                activeFilter === "AI_ML"
                  ? "bg-primary text-on-primary font-bold shadow-sm"
                  : "bg-surface-container-high/60 text-on-surface-variant hover:text-white"
              }`}
            >
              Agentic / ML
            </button>
            <button
              onClick={() => setActiveFilter("FULLSTACK")}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                activeFilter === "FULLSTACK"
                  ? "bg-primary text-on-primary font-bold shadow-sm"
                  : "bg-surface-container-high/60 text-on-surface-variant hover:text-white"
              }`}
            >
              Full-Stack &amp; APIs
            </button>
          </div>
        </div>

        {/* PROJECTS LIST */}
        <div className="space-y-6">
          {filteredProjects.map((project) => {
            const isExpanded = !!expandedProjects[project.id];
            const isFlagship = project.roleType.startsWith("flagship");

            return (
              <div
                key={project.id}
                className={`bg-[#0e1614] rounded-xl border transition-all duration-300 shadow-lg ${
                  isFlagship
                    ? "border-primary/30 hover:border-primary/60"
                    : "border-white/10 hover:border-white/25"
                }`}
              >
                {/* PROJECT CARD HEADER & SUMMARY */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Top Badges & Title */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`font-mono text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider border ${
                            isFlagship
                              ? "bg-primary/10 text-cyan-300 border-primary/30"
                              : "bg-secondary/10 text-secondary border-secondary/25"
                          }`}
                        >
                          {project.roleBadge}
                        </span>
                        {isFlagship && (
                          <span className="font-mono text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
                            Verified Benchmarks
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-on-surface leading-snug">
                        {project.title}
                      </h3>
                    </div>

                    {/* Direct Links on Card */}
                    <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-on-surface-variant hover:text-white border border-white/10 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-cyan-300 border border-primary/25 text-xs font-mono font-semibold transition-all hover:scale-105"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Summary & Key Metrics Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                    <div className="lg:col-span-8 space-y-2">
                      <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        {project.shortSummary}
                      </p>

                      {/* 3 High-Impact Technical Bullets */}
                      <ul className="space-y-1.5 pt-1 text-xs text-on-surface-variant">
                        {project.keyBullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 2 Strongest Metrics Box (Static, No Flashy Counters) */}
                    <div className="lg:col-span-4 bg-black/40 border border-white/10 rounded-xl p-3 sm:p-4 space-y-3">
                      <span className="font-mono text-[10px] text-on-surface-variant/80 uppercase tracking-wider block font-semibold">
                        Key Measured Results
                      </span>
                      <div className="grid grid-cols-2 gap-3">
                        {project.keyMetrics.map((km, kmIdx) => (
                          <div key={kmIdx} className="space-y-0.5">
                            <span className="font-mono text-[10px] text-on-surface-variant block">
                              {km.label}
                            </span>
                            <span className="font-display text-xl sm:text-2xl font-black text-primary block">
                              {km.value}
                            </span>
                            <span className="font-mono text-[9px] text-on-surface-variant/70 block leading-tight">
                              {km.subtext}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack Tags & Drawer Toggle Button */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-2 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-[10px] bg-white/5 text-on-surface-variant border border-white/10 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => toggleProject(project.id)}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-primary hover:text-cyan-300 transition-colors cursor-pointer py-1"
                    >
                      <span>{isExpanded ? "Collapse Case Study" : "Explore Architecture & Evals"}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* EXPANDABLE CASE STUDY DRAWER (~7 FOCUSED TECHNICAL SECTIONS) */}
                {isExpanded && (
                  <div className="border-t border-white/10 bg-[#070d0c] p-5 sm:p-6 space-y-6">

                    {/* 1. Problem & Context */}
                    <div className="space-y-1.5">
                      <span className="font-mono text-[10px] uppercase text-primary tracking-wider font-bold block">
                        01 • Problem &amp; Engineering Challenge
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* 2. Technical Solution */}
                    <div className="space-y-1.5">
                      <span className="font-mono text-[10px] uppercase text-primary tracking-wider font-bold block">
                        02 • Technical Solution
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* 3. Clean CSS-Rendered Architecture Diagram */}
                    <div className="space-y-2">
                      <span className="font-mono text-[10px] uppercase text-primary tracking-wider font-bold block">
                        03 • System Architecture &amp; Data Flow
                      </span>
                      <ArchitectureDiagram type={project.diagramType} />
                    </div>

                    {/* 4. Key Engineering Decisions & Trade-offs */}
                    <div className="space-y-2">
                      <span className="font-mono text-[10px] uppercase text-primary tracking-wider font-bold block">
                        04 • Key Engineering Decisions &amp; Trade-offs
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.tradeoffs.map((to, toIdx) => (
                          <div key={toIdx} className="bg-white/3 border border-white/10 rounded-lg p-3 space-y-1">
                            <h4 className="font-mono text-xs font-bold text-on-surface text-cyan-300">
                              {to.decision}
                            </h4>
                            <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                              {to.tradeoff}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 5. Quantitative Evaluation & Benchmarks Table */}
                    <div className="space-y-2">
                      <span className="font-mono text-[10px] uppercase text-primary tracking-wider font-bold block">
                        05 • Quantitative Benchmarks &amp; System Evaluation
                      </span>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs font-mono border border-white/10 rounded-lg overflow-hidden">
                          <thead className="bg-white/5 text-on-surface-variant text-[10px] uppercase tracking-wider">
                            <tr>
                              <th className="p-2.5 border-b border-white/10">Metric</th>
                              <th className="p-2.5 border-b border-white/10">Baseline</th>
                              <th className="p-2.5 border-b border-white/10 text-primary">Measured</th>
                              <th className="p-2.5 border-b border-white/10">Impact / Description</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 text-on-surface-variant">
                            {project.benchmarks.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-white/2 transition-colors">
                                <td className="p-2.5 font-bold text-on-surface">{row.metric}</td>
                                <td className="p-2.5 text-on-surface-variant/70">{row.baseline}</td>
                                <td className="p-2.5 font-bold text-emerald-400">{row.measured}</td>
                                <td className="p-2.5 font-sans text-xs text-on-surface-variant">{row.impact}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* 6. Technical Deep Dive (Agentic State / Algorithm / ML Details) */}
                    <div className="space-y-2">
                      <span className="font-mono text-[10px] uppercase text-primary tracking-wider font-bold block">
                        06 • {project.deepDiveTitle}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {project.deepDiveItems.map((item, itemIdx) => (
                          <div key={itemIdx} className="bg-black/30 border border-white/10 p-3 rounded-lg space-y-1">
                            <span className="font-mono text-[11px] font-bold text-secondary block">
                              {item.label}
                            </span>
                            <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                              {item.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 7. Limitations & Engineering Roadmap */}
                    <div className="space-y-1.5 bg-black/40 border border-white/10 rounded-lg p-3.5">
                      <span className="font-mono text-[10px] uppercase text-amber-400 tracking-wider font-bold block">
                        07 • Limitations &amp; Future Engineering Roadmap
                      </span>
                      <div className="space-y-1 text-xs font-sans">
                        <p className="text-on-surface-variant">
                          <strong className="text-on-surface font-mono">Known Limitation: </strong>
                          {project.limitations.limitation}
                        </p>
                        <p className="text-on-surface-variant">
                          <strong className="text-primary font-mono">Engineering Roadmap: </strong>
                          {project.limitations.roadmap}
                        </p>
                      </div>
                    </div>

                    {/* Drawer Footer Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                      <div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>Production Deployment Verified</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-on-surface border border-white/10 text-xs font-mono font-semibold transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Inspect Code</span>
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary hover:bg-cyan-300 text-on-primary text-xs font-mono font-bold transition-all shadow-sm"
                        >
                          <span>Open Live Space</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// CLEAN CSS-RENDERED ARCHITECTURE DIAGRAMS (Replaces raw ASCII art)
function ArchitectureDiagram({ type }: { type: string }) {
  if (type === "corpus-ai") {
    return (
      <div className="bg-[#050a09] border border-white/10 rounded-xl p-4 sm:p-5 space-y-4">
        {/* Step 1: Document Ingestion Pipeline */}
        <div className="space-y-1.5">
          <span className="font-mono text-[9.5px] uppercase tracking-wider text-on-surface-variant/70 block">
            Phase 1: Ingestion &amp; Vector Store
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
            <div className="bg-white/5 border border-white/10 p-2 rounded-lg text-on-surface">
              Research PDFs
            </div>
            <div className="bg-white/5 border border-white/10 p-2 rounded-lg text-on-surface">
              OCR &amp; Chunking
            </div>
            <div className="bg-white/5 border border-white/10 p-2 rounded-lg text-on-surface">
              all-MiniLM-L6-v2 (384-d)
            </div>
            <div className="bg-primary/10 border border-primary/30 p-2 rounded-lg text-primary font-bold">
              ChromaDB Vector DB
            </div>
          </div>
        </div>

        {/* Step 2: Supervisor Multi-Agent Flow */}
        <div className="space-y-1.5 pt-2 border-t border-white/5">
          <span className="font-mono text-[9.5px] uppercase tracking-wider text-cyan-300 block">
            Phase 2: Supervisor Intent Routing &amp; Multi-Agent State Machine
          </span>
          <div className="bg-[#0b1413] border border-primary/20 rounded-lg p-3 space-y-2">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono">
              <span className="text-on-surface font-semibold">User Query &rarr; FastAPI Backend</span>
              <span className="text-primary font-bold">&rarr;</span>
              <span className="bg-primary/20 text-cyan-300 border border-primary/40 px-3 py-1 rounded-md font-bold">
                LangGraph Supervisor Node
              </span>
            </div>

            {/* 7 Worker Agents */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-center text-[10.5px] font-mono pt-1">
              <div className="bg-black/40 border border-white/10 p-1.5 rounded text-on-surface">Paper Analysis</div>
              <div className="bg-black/40 border border-white/10 p-1.5 rounded text-on-surface">Multi-Paper Chat</div>
              <div className="bg-black/40 border border-white/10 p-1.5 rounded text-on-surface">Paper Comparison</div>
              <div className="bg-black/40 border border-white/10 p-1.5 rounded text-on-surface">Gap Detection</div>
              <div className="bg-black/40 border border-white/10 p-1.5 rounded text-on-surface">Synthesis Agent</div>
              <div className="bg-black/40 border border-white/10 p-1.5 rounded text-on-surface">Report Generator</div>
              <div className="bg-black/40 border border-white/10 p-1.5 rounded text-on-surface col-span-2">Context Verification Loop</div>
            </div>
          </div>
        </div>

        {/* Step 3: Synthesis & Verification */}
        <div className="space-y-1.5 pt-2 border-t border-white/5">
          <span className="font-mono text-[9.5px] uppercase tracking-wider text-emerald-400 block">
            Phase 3: Grounded Synthesis &amp; Citation Output
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs font-mono">
            <div className="bg-secondary/10 border border-secondary/25 p-2 rounded-lg text-secondary">
              ChromaDB Context Retrieval
            </div>
            <div className="bg-secondary/15 border border-secondary/30 p-2 rounded-lg text-secondary font-bold">
              Groq Llama 3.1 Inference
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 p-2 rounded-lg text-emerald-300 font-bold">
              92.4% Faithful Citation Output
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "ai-commerce") {
    return (
      <div className="bg-[#050a09] border border-white/10 rounded-xl p-4 sm:p-5 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
          {/* Track 1: Recommendation Engine */}
          <div className="bg-[#0b1413] border border-secondary/20 rounded-lg p-3 space-y-2">
            <span className="font-bold text-secondary uppercase text-[10px] block">
              Track 1: Hybrid Recommendation Engine
            </span>
            <div className="space-y-1.5 text-center">
              <div className="bg-black/40 border border-white/10 p-2 rounded text-on-surface">
                User Browsing &amp; Cart Events (MongoDB)
              </div>
              <div className="text-secondary font-bold text-[10px]">&darr; Weighted Interaction Scoring</div>
              <div className="bg-secondary/10 border border-secondary/30 p-2 rounded text-secondary font-semibold">
                Collaborative + Content Cosine + Popularity
              </div>
              <div className="text-secondary font-bold text-[10px]">&darr; Top-N Scoring</div>
              <div className="bg-emerald-500/10 border border-emerald-500/25 p-2 rounded text-emerald-300 font-bold">
                0.84 NDCG@10 Personalized Feed
              </div>
            </div>
          </div>

          {/* Track 2: Conversational RAG */}
          <div className="bg-[#0b1413] border border-primary/20 rounded-lg p-3 space-y-2">
            <span className="font-bold text-primary uppercase text-[10px] block">
              Track 2: Conversational RAG Shopping Agent
            </span>
            <div className="space-y-1.5 text-center">
              <div className="bg-black/40 border border-white/10 p-2 rounded text-on-surface">
                Natural-Language Query &rarr; ChromaDB
              </div>
              <div className="text-primary font-bold text-[10px]">&darr; Catalog Semantic Matching</div>
              <div className="bg-primary/10 border border-primary/30 p-2 rounded text-primary font-semibold">
                LangChain Context Formulation + Real-Time Stock
              </div>
              <div className="text-primary font-bold text-[10px]">&darr; Gemini LLM</div>
              <div className="bg-emerald-500/10 border border-emerald-500/25 p-2 rounded text-emerald-300 font-bold">
                94.1% Grounded Product Advice
              </div>
            </div>
          </div>
        </div>

        {/* Backend & Deployment Bar */}
        <div className="bg-white/3 border border-white/10 p-2.5 rounded-lg flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-on-surface-variant">
          <span>FastAPI REST Layer: Auth, Cart, Orders (45ms P95)</span>
          <span className="text-primary">&bull;</span>
          <span>Docker Container on Hugging Face Spaces</span>
        </div>
      </div>
    );
  }

  if (type === "hate-speech") {
    return (
      <div className="bg-[#050a09] border border-white/10 rounded-xl p-4 sm:p-5 space-y-3 font-mono text-xs">
        <span className="font-mono text-[9.5px] uppercase tracking-wider text-tertiary block">
          Multimodal Extraction &amp; Transformer Pipeline
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center">
          <div className="bg-white/5 border border-white/10 p-2 rounded-lg text-on-surface">
            Text / Image / PDF
          </div>
          <div className="bg-white/5 border border-white/10 p-2 rounded-lg text-on-surface">
            Tesseract OCR (94.2%)
          </div>
          <div className="bg-tertiary/10 border border-tertiary/30 p-2 rounded-lg text-tertiary font-bold">
            RoBERTa + IndicBERT
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/30 p-2 rounded-lg text-emerald-300 font-bold">
            88.4% Macro F1 Score
          </div>
        </div>

        <div className="bg-[#0b1413] border border-white/10 rounded-lg p-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-on-surface-variant">
          <span className="text-amber-300 font-semibold">LIME Explainability Engine</span>
          <span>&rarr; Local perturbation testing &rarr; Token attribution heatmap output</span>
          <span className="text-primary font-bold">120ms P95 Latency</span>
        </div>
      </div>
    );
  }

  // nexus-commerce
  return (
    <div className="bg-[#050a09] border border-white/10 rounded-xl p-4 sm:p-5 space-y-3 font-mono text-xs">
      <span className="font-mono text-[9.5px] uppercase tracking-wider text-primary block">
        Transactional Storage &amp; Vectorized Computing Engine
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center">
        <div className="bg-white/5 border border-white/10 p-2 rounded-lg text-on-surface">
          900K+ Sales Rows
        </div>
        <div className="bg-primary/10 border border-primary/30 p-2 rounded-lg text-primary font-bold">
          PostgreSQL (ACID)
        </div>
        <div className="bg-secondary/10 border border-secondary/30 p-2 rounded-lg text-secondary font-bold">
          Pandas / NumPy Engine
        </div>
        <div className="bg-emerald-500/10 border border-emerald-500/30 p-2 rounded-lg text-emerald-300 font-bold">
          Streamlit BI Dashboard
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-[10.5px]">
        <div className="bg-black/40 border border-white/10 p-2 rounded text-on-surface">
          Pareto ABC Analysis (80/15/5% Split)
        </div>
        <div className="bg-black/40 border border-white/10 p-2 rounded text-on-surface">
          RFM Segmentation (Quantile Scoring)
        </div>
        <div className="bg-black/40 border border-white/10 p-2 rounded text-on-surface">
          8.7% Forecast MAPE (LightGBM/Prophet)
        </div>
      </div>
    </div>
  );
}
