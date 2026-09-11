import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Github,
  CheckCircle2,
  ExternalLink,
  Workflow
} from "lucide-react";

interface TechHighlight {
  component: string;
  usage: string;
}

interface EngineeringDecision {
  decision: string;
  explanation: string;
}

interface ProjectData {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  positioningRole: string;
  tagsSummary: string;
  hookTeaser: string;
  overview: string;
  keyEngineering: string[];
  architectureSteps: string[];
  architectureNote?: string;
  techHighlights: TechHighlight[];
  technologies: string[];
  engineeringDecisions: EngineeringDecision[];
  liveUrl?: string;
  githubUrl: string;
}

export default function ProjectsSection() {
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({
    "corpus-ai": true // First flagship project open by default for immediate technical proof
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
      index: "01",
      title: "CorpusAI — AI-Powered Academic Literature Synthesis & Research Assistant",
      subtitle: "Multi-Agent Research Intelligence & Synthesis Platform",
      positioningRole: "Agentic AI / Multi-Agent / RAG",
      tagsSummary: "LangGraph · Multi-Agent Systems · Local all-MiniLM-L6-v2 · ChromaDB · FastAPI · Groq Llama 3.1 · React 18",
      hookTeaser: "A local-first, multi-agent research platform engineered to eliminate manual paper analysis. Coordinates a LangGraph supervisor across 7 specialized worker agents with local all-MiniLM-L6-v2 embeddings, ChromaDB vector indexing, and rate-limit resilient Groq LLM inference with exponential backoff. Automates multi-paper cross-examination, citation knowledge graph generation, research gap discovery, and in-memory streaming report synthesis.",
      overview: "Academic literature reviews require synthesizing dozens of dense PDFs, finding methodology gaps, and cross-referencing claims. Monolithic single-prompt LLMs fail due to token context window degradation and document hallucinations. CorpusAI decomposes literature synthesis into a multi-agent state machine where a central supervisor routes queries across specialized workers backed by persistent vector retrieval and real-time citation attribution.",
      keyEngineering: [
        "Supervisor Multi-Agent State Machine: Engineered a LangGraph supervisor topology coordinating 7 specialized agents (Paper Analysis, Multi-Paper Chat, Gap Detection, Literature Synthesis, Reviewer 2 Critique, Report Generation, and Citation Mapping) with strictly typed AgentState and recursion safeguards.",
        "Memory-Prioritized Context Chunking: Implemented an intelligent document ingestion pipeline (supporting PDF, DOCX, ArXiv, and Trafilatura web URLs) capping processing at 150 chunks per document while prioritizing Abstract, Introduction, and Conclusion sections to minimize context drift.",
        "Local Embedding & Vector Persistence: Deployed local all-MiniLM-L6-v2 embedding inference via SentenceTransformers—eliminating external embedding API latency—paired with a persistent ChromaDB HNSW cosine vector index.",
        "High-Throughput Resilience & Rate-Limit Handling: Hardened LLM inference against upstream Groq provider rate limits using dynamic API key rotation coupled with Tenacity exponential backoff retry policies.",
        "Production-Grade Async Architecture: Architected a FastAPI backend utilizing aiosqlite with SQLite WAL (Write-Ahead Logging) mode for concurrent read/write isolation, JWT authentication, and in-memory streaming of PDF/DOCX research reports directly to client buffers.",
        "Citation Knowledge Graph & Audio Synthesis: Extracted frequent citation co-occurrences and benchmark datasets into interactive react-force-graph-2d network visualizations, with edge-tts audio synthesis generating automated research briefing podcasts and spaced-repetition flashcards."
      ],
      architectureSteps: [
        "React Frontend",
        "FastAPI Backend",
        "LangGraph Supervisor",
        "7 Specialized Worker Agents",
        "ChromaDB Vector Store",
        "Groq / Llama 3.1",
        "Streaming Citations"
      ],
      architectureNote: "Document Ingestion: ArXiv / PDF / URLs → Trafilatura + PyMuPDF → Smart 150-Chunk Prioritization → Local all-MiniLM-L6-v2 Embeddings → ChromaDB HNSW Index",
      techHighlights: [
        { component: "LangGraph Supervisor", usage: "Deterministically routes queries across 7 specialized worker agents with typed state graphs and recursion limits." },
        { component: "ChromaDB + Local all-MiniLM", usage: "Sub-millisecond local vector retrieval over prioritized paper chunks with source citation tracking." },
        { component: "Tenacity + Key Rotation", usage: "Dynamic API key rotation pool with exponential backoff handling upstream provider rate limits during burst traffic." },
        { component: "SQLite WAL + FastAPI", usage: "Concurrent async session persistence, multi-paper chat histories, and in-memory PDF/DOCX report streaming." }
      ],
      technologies: [
        "Python",
        "FastAPI",
        "React 18",
        "JavaScript",
        "LangGraph",
        "LangChain",
        "ChromaDB",
        "Groq / Llama 3.1",
        "SentenceTransformers",
        "Docker",
        "JWT",
        "SQLite (WAL)"
      ],
      engineeringDecisions: [
        {
          decision: "Centralized Supervisor vs. Autonomous Sequential Chain",
          explanation: "Sequential chains compound hallucination errors and fail completely when an intermediate agent encounters unparseable document artifacts. The centralized supervisor pattern isolates each agent's execution scope with automated fallback edges and loop-termination safeguards."
        },
        {
          decision: "Local Embedding Generation vs. Hosted Embedding APIs",
          explanation: "Running all-MiniLM-L6-v2 locally removes external network roundtrips, reduces cold-start embedding costs to zero, and guarantees document privacy during offline processing."
        }
      ],
      liveUrl: "https://huggingface.co/spaces/Bharath2769/ai-research-assistant",
      githubUrl: "https://github.com/BharathReddyRamasani/CorpusAI-An-AI-Powered-Literature-Synthesis-for-Researchers"
    },
    {
      id: "ai-commerce",
      index: "02",
      title: "AI-Powered Conversational Commerce Platform",
      subtitle: "Full-Stack E-Commerce & Conversational Assistant",
      positioningRole: "Full-Stack / Recommendation / GenAI",
      tagsSummary: "FastAPI · React.js · Adaptive Hybrid Recommender · ChromaDB · LangChain · Gemini 2.5 · MongoDB Atlas",
      hookTeaser: "A full-stack intelligent commerce engine that solves e-commerce cold-start and rigid keyword discovery by uniting adaptive recommendation algorithms with conversational GenAI. Dynamically pivots between popularity scoring, TF-IDF content similarity, and user-user collaborative filtering based on customer interaction thresholds, while a RAG pipeline pairs ChromaDB vector search with Gemini 2.5 Flash for grounded product discovery.",
      overview: "Traditional e-commerce platforms suffer from two critical architectural pain points: severe cold-start drop-off for new users with no history, and rigid keyword search engines unable to interpret nuanced natural-language buying criteria. This platform resolves both by marrying an adaptive hybrid recommendation engine with a RAG discovery pipeline that combines vector similarity and personalized re-ranking.",
      keyEngineering: [
        "Adaptive Multi-Stage Recommendation Engine: Designed an adaptive hybrid recommender that dynamically switches strategies based on interaction volume: 0 interactions activates popularity-based scoring (cold-start mitigation); 1–4 interactions triggers TF-IDF content-based similarity; and 5+ interactions executes user-user cosine similarity with SVD matrix factorization fallback.",
        "Unified RAG & Re-Ranking Discovery Flow: Built a hybrid retrieval pipeline combining ChromaDB semantic search (using local all-MiniLM-L6-v2 embeddings) with the recommendation engine to re-rank the top-10 candidate products before passing them as grounded context to Gemini 2.5 Flash.",
        "Modular Full-Stack Architecture: Built a modular FastAPI backend paired with React.js, implementing JWT authentication, secure password hashing, cart state machines, checkout orders, and real-time recommendation analytics.",
        "Strict Anti-Hallucination Prompt Grounding: Constrained the conversational assistant's prompt schema to strictly reference retrieved catalog product IDs and live inventory metadata, preventing hallucinated specifications and phantom SKUs.",
        "Containerized Full-Stack Deployment: Dockerized both the FastAPI REST services and React frontend into a multi-stage production container with automated health probes on Hugging Face Spaces."
      ],
      architectureSteps: [
        "React Frontend",
        "FastAPI Backend",
        "Commerce APIs",
        "MongoDB Atlas",
        "ChromaDB",
        "Hybrid Re-Ranking",
        "Gemini 2.5 Flash",
        "Grounded Response"
      ],
      architectureNote: "Dual-Flow Architecture: React → FastAPI → Commerce APIs → MongoDB (Transactional Flow) & User Query → ChromaDB → Hybrid Recommender Re-Ranking → Gemini 2.5 Flash → Context → Response (AI Discovery Flow)",
      techHighlights: [
        { component: "Adaptive Recommender", usage: "Dynamically toggles popularity, content similarity, and collaborative filtering based on interaction thresholds." },
        { component: "ChromaDB + Local all-MiniLM", usage: "Sub-50ms local vector candidate generation without external embedding API dependencies." },
        { component: "Gemini 2.5 Flash Integration", usage: "Context-grounded natural language shopping assistant constrained strictly to verified inventory." },
        { component: "MongoDB Atlas", usage: "Document store modeling dynamic product schemas, user interaction logs, and transactional order states." }
      ],
      technologies: [
        "Python",
        "FastAPI",
        "React.js",
        "MongoDB Atlas",
        "Scikit-learn",
        "SciPy",
        "SentenceTransformers",
        "LangChain",
        "ChromaDB",
        "Gemini 2.5 Flash",
        "Docker"
      ],
      engineeringDecisions: [
        {
          decision: "Adaptive Strategy Switching vs. Static Collaborative Filtering",
          explanation: "Static collaborative filtering fails catastrophically for 100% of new visitors. The threshold-based routing (0 -> Popularity, 1-4 -> TF-IDF, 5+ -> Collaborative) guarantees accurate, personalized recommendations at every stage of the user lifecycle."
        },
        {
          decision: "Semantic Vector Retrieval Paired with Hybrid Re-Ranking",
          explanation: "Instead of feeding raw vector search results to the LLM, passing candidates through the hybrid recommendation engine ensures that semantic matches are prioritized by personal preference and brand affinity."
        }
      ],
      liveUrl: "https://huggingface.co/spaces/Bharath2769/AI-Powered-Conversational-Commerce-Platform",
      githubUrl: "https://github.com/BharathReddyRamasani/AI-Powered-Conversational-Commerce-Platform"
    },
    {
      id: "hate-speech",
      index: "03",
      title: "Emotion-Aware Hate Speech Detection System",
      subtitle: "Multilingual & Multimodal Moderation Platform (EmiHate)",
      positioningRole: "Deep Learning / NLP / Transformers",
      tagsSummary: "PyTorch · RoBERTa & IndicBERT · 80K+ Samples · 9-Head Neural Grid · Tesseract OCR · LIME & SHAP · FastAPI",
      hookTeaser: "A deep learning moderation platform engineered with RoBERTa and IndicBERT Transformer backbones fine-tuned on an 80K+ multi-domain dataset to simultaneously predict hate speech, emotion, and sentiment across English, Hindi, and Telugu. Ingests raw text, images, and scanned PDFs via a Tesseract OCR and PyPDF2 pipeline, provides token-level interpretability using both LIME and SHAP, and analyzes multi-turn conversation threads for escalating or de-escalating toxicity trends.",
      overview: "Automated content moderation typically operates as a single-label black box restricted to English text, ignoring multimodal evasion tactics (such as offensive text embedded in memes or screenshots) and failing to capture nuanced regional dialects. EmiHate fine-tunes RoBERTa and IndicBERT Transformer backbones on an 80K+ trilingual dataset across a 9-head neural architecture analyzing hate speech, emotional tone, and sentiment concurrently across English, Hindi, and Telugu, backed by post-hoc explainability so human moderators can inspect the exact linguistic drivers behind every prediction.",
      keyEngineering: [
        "9-Head Multitask Neural Architecture: Fine-tuned RoBERTa and IndicBERT Transformer backbones in PyTorch on an 80K+ annotated multi-domain dataset, engineering 9 specialized classification heads operating simultaneously over shared encoder representations to detect hate categories, emotional profiles, and sentiment polarity.",
        "Trilingual NLP Pipeline (English, Hindi, Telugu): Designed specialized tokenization and preprocessing workflows tailored to Indian linguistic nuances, dialectal transliterations, and multilingual code-mixing using langdetect and fine-tuned IndicBERT encoders.",
        "Multimodal Document & Image Ingestion: Built an automated ingestion microservice integrating Tesseract OCR and PyPDF2 to extract embedded textual content from screenshots, memes, and PDF documents prior to model classification.",
        "Dual Explainability (LIME & SHAP): Integrated both LIME local perturbation scoring and SHAP feature attribution to output token-level importance heatmaps, showing moderators exactly which words triggered flags to minimize bias and false positives.",
        "Multi-Turn Conversation Trend Analysis: Implemented conversation thread analysis that parses message sequences over time to identify escalating toxicity velocity and flag volatile threads before conflict spikes."
      ],
      architectureSteps: [
        "Multimodal Input (Text/Image/PDF)",
        "Tesseract OCR / PyPDF2 Extraction",
        "Preprocessing & LangDetect",
        "Fine-Tuned RoBERTa & IndicBERT (80K+)",
        "9-Head Neural Grid",
        "LIME / SHAP Explainability",
        "REST Inference API"
      ],
      architectureNote: "Inference Endpoints: POST /api/analyze/text | POST /api/analyze/image | POST /api/analyze/pdf | POST /api/analyze/conversation",
      techHighlights: [
        { component: "9-Head Neural Grid (RoBERTa & IndicBERT)", usage: "Jointly classifies hate speech severity, discrete emotional states, and fine-grained sentiment polarity on 80K+ samples." },
        { component: "Tesseract OCR & PyPDF2 Engine", usage: "Extracts text from multimodal files (memes, scanned documents, PDFs) for unified downstream classification." },
        { component: "LIME & SHAP Explainability", usage: "Computes token-level attribution weights to provide transparent, interpretable rationales for moderators." },
        { component: "FastAPI REST Microservice", usage: "Exposes high-throughput inference endpoints containerized with Docker for seamless platform integration." }
      ],
      technologies: [
        "Python",
        "PyTorch",
        "Hugging Face Transformers",
        "RoBERTa",
        "IndicBERT",
        "80K+ Dataset",
        "Tesseract OCR",
        "PyPDF2",
        "LIME",
        "SHAP",
        "FastAPI",
        "Docker"
      ],
      engineeringDecisions: [
        {
          decision: "Multitask 9-Head Shared Encoder vs. Independent Classifiers",
          explanation: "Running separate models for hate, emotion, and sentiment would triple memory footprint and inference latency. Fine-tuning a single shared Transformer backbone (RoBERTa/IndicBERT) on 80K+ samples with 9 specialized output heads reduced latency by 60% while improving generalization across correlated tasks."
        },
        {
          decision: "Dual-Mode Explainability for Moderator Auditing",
          explanation: "Black-box predictions cause high false-positive disputes. Providing per-token attribution weights via LIME/SHAP gives content moderation teams immediate verifiable evidence for swift policy enforcement."
        }
      ],
      liveUrl: "https://huggingface.co/spaces/annepagaanvesh/EmiHate-Grid",
      githubUrl: "https://github.com/BharathReddyRamasani/Emotion-Aware-Hate-Speech-Detection-System"
    },
    {
      id: "nexus-commerce",
      index: "04",
      title: "Nexus Commerce Suite",
      subtitle: "Transactional Operations & BI Analytics Suite",
      positioningRole: "Data Science / Analytics / Software",
      tagsSummary: "Streamlit · Supabase · PostgreSQL · Linear Regression (95% CI) · ABC Pareto · RFM Segmentation · Plotly",
      hookTeaser: "A full-stack business operations and data analytics suite combining transactional point-of-sale workflows with advanced statistical business intelligence. Features automated Pareto ABC inventory classification, RFM customer clustering, Pearson correlation matrix narration, and linear-regression sales forecasting with 95% confidence intervals and R² calculation—built on Streamlit and Supabase PostgreSQL with strict Row-Level Security.",
      overview: "Small and medium businesses frequently struggle with disconnected operational systems: cash registers that don't track inventory velocity, and static spreadsheets incapable of forecasting demand or identifying customer churn risk. Nexus Commerce Suite unites transactional daily operations (POS sales, inventory adjustments, split cash/UPI payments) with quantitative data science tools that automatically classify inventory revenue drivers and project future sales with statistical confidence intervals.",
      keyEngineering: [
        "Full-Stack Operations & Supabase Data Layer: Built a multi-page operational suite in Streamlit connected to Supabase (PostgreSQL), enforcing Row-Level Security (RLS), ACID-compliant multi-item sales transactions, and role-based session states.",
        "Pareto ABC Inventory Classification: Implemented algorithmic ABC analysis calculating cumulative SKU revenue percentages to categorise products into Tier A (top 80% revenue drivers), Tier B (next 15%), and Tier C (remaining 5%) to optimize procurement capital.",
        "RFM Customer Segmentation: Developed automated Recency, Frequency, and Monetary quantile scoring that segments customers into actionable Gold, Silver, and Bronze tiers to drive targeted retention campaigns.",
        "Statistical Sales Forecasting with 95% Confidence Intervals: Engineered an automated time series forecasting module using historical sales data with linear trend regression, outputting projected demand, standard error bounds, daily growth rates, and 95% confidence intervals.",
        "Pearson Correlation & Business Health Metrics: Built correlation matrix engines analyzing product attributes against sales velocity, generating automated natural-language insight summaries, inventory health classifications (Hot/Cooling/Frozen), and pre-sale discount financial simulators."
      ],
      architectureSteps: [
        "Streamlit Multi-Page UI",
        "Business Logic Layer",
        "Supabase PostgreSQL (RLS)",
        "Analytics Engines (Pandas/NumPy)",
        "Forecasting (Linear Regression)",
        "Interactive Plotly Insights"
      ],
      architectureNote: "Operational Workflow: POS Transaction (Cash/UPI/Card Split) → Inventory Auto-Decrement → Ledger Audit Log → ABC / RFM / Regression Recalculation",
      techHighlights: [
        { component: "Supabase PostgreSQL Layer", usage: "Enforces ACID transactional guarantees and Row-Level Security (RLS) across POS transactions and inventory movements." },
        { component: "ABC Pareto Analytics", usage: "Calculates cumulative revenue contributions to automate high-priority inventory reorder cycles." },
        { component: "Linear Regression with 95% CI", usage: "Computes statistical sales projections, trend directions, R² goodness-of-fit, and standard error bands." },
        { component: "RFM Quantile Clustering", usage: "Segments customer bases into Gold/Silver/Bronze tiers based on behavioral purchase velocity." }
      ],
      technologies: [
        "Python",
        "Streamlit",
        "Supabase",
        "PostgreSQL",
        "Pandas",
        "NumPy",
        "Plotly",
        "Scikit-learn",
        "Statistical Modeling"
      ],
      engineeringDecisions: [
        {
          decision: "Relational PostgreSQL with RLS vs. Unstructured Storage",
          explanation: "Inventory decrements, point-of-sale receipts, and order statuses require strict transactional ACID compliance and foreign-key constraints to prevent stock discrepancies and race conditions."
        },
        {
          decision: "Vectorized Analytics over Row Loops",
          explanation: "Instead of row-by-row computations, vectorized transformations process 900K+ transactional records in sub-500ms for instantaneous Streamlit KPI dashboard recalculations."
        }
      ],
      liveUrl: "https://bharathreddyramasani-nexus-commerce-suite-app-rbr.streamlit.app/",
      githubUrl: "https://github.com/BharathReddyRamasani/Nexus-Commerce-Suite"
    }
  ];

  return (
    <section id="projects" className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto z-10 scroll-mt-20 overflow-hidden">
      
      {/* WATERMARK BACKGROUND TYPOGRAPHY */}
      <div className="absolute top-10 right-0 pointer-events-none select-none font-display font-black text-8xl sm:text-9xl text-slate-900/[0.03] tracking-tighter uppercase z-0">
        PROOF OF WORK
      </div>

      <div className="relative z-10 space-y-6">

        {/* SECTION HEADER & DIRECTIONAL CHARACTER BANNER */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 max-w-2xl text-left">
            <span className="font-mono text-[10px] uppercase text-rose-600 tracking-[0.25em] block font-semibold">
              03. PROJECTS • VERIFIED PROOF-OF-WORK &amp; DEEP CASE STUDIES
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Featured Projects
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
              Production-oriented AI and software systems demonstrating multi-agent orchestration, adaptive hybrid recommendations, multimodal NLP, and enterprise transactional analytics. All live links and open-source codebases verified.
            </p>
          </div>

          {/* Directional Character Avatar Pointing Toward Project Cards */}
          <div className="relative shrink-0 flex items-center justify-center">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl p-1 bg-gradient-to-tr from-rose-500/20 via-blue-500/10 to-transparent border border-slate-200 overflow-hidden shadow-sm group hover:scale-105 transition-transform">
              <img
                src="/assets/projects-pointing.jpg"
                alt="Bharath pointing toward project showcase cards"
                className="w-full h-full object-contain filter drop-shadow-xs"
              />
              <div className="absolute bottom-1 right-1 bg-white/95 border border-slate-200 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold text-rose-600 shadow-2xs">
                Explore ↓
              </div>
            </div>
          </div>
        </div>

        {/* STREAMING-PLATFORM FAST TICKER BANNER */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-2.5 overflow-hidden shadow-2xs">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-mono text-[10.5px] uppercase font-bold text-rose-600 shrink-0 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
              LIVE TICKER:
            </span>
            <div className="whitespace-nowrap overflow-hidden text-xs font-mono text-slate-700 flex items-center gap-4">
              <span>🚀 CorpusAI (7-Agent Supervisor RAG on HF Spaces)</span>
              <span className="text-slate-300">•</span>
              <span>⚡ Conversational Commerce (Hybrid Recommender + LangChain RAG)</span>
              <span className="text-slate-300">•</span>
              <span>🎯 EmiHate Grid (RoBERTa &amp; IndicBERT Multilingual Detection)</span>
              <span className="text-slate-300">•</span>
              <span>📊 Nexus Commerce Suite (Streamlit &amp; PostgreSQL Analytics)</span>
            </div>
          </div>
        </div>

        {/* PROJECTS LIST — Compact Cards with Deep Disclosure */}
        <div className="space-y-6">
          {projects.map((project) => {
            const isExpanded = !!expandedProjects[project.id];

            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-rose-300 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
              >
                {/* ━━━━━━━━ COMPACT PROJECT CARD (Always Visible) ━━━━━━━━ */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  {/* Top Row: Index + Complete Title + Positioning Role Label */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-100 pb-3">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold text-rose-600">
                          {project.index} &mdash;
                        </span>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                          {project.title}
                        </h3>
                      </div>
                      <p className="font-sans text-xs text-rose-700 font-semibold">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Distinct Positioning Role Label */}
                    <span className="inline-flex items-center font-mono text-[11px] font-bold px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 shadow-2xs shrink-0">
                      {project.positioningRole}
                    </span>
                  </div>

                  {/* Tags Summary */}
                  <div className="font-mono text-[11px] text-slate-500 tracking-wide font-medium">
                    {project.tagsSummary}
                  </div>

                  {/* Compelling 2-4 Line Hook Teaser Description */}
                  <p className="font-sans text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                    {project.hookTeaser}
                  </p>

                  {/* Compact Action Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => toggleProject(project.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold font-display text-rose-600 hover:text-rose-700 transition-colors cursor-pointer group"
                    >
                      <span>{isExpanded ? "Collapse Technical Case Study" : "View Project Details →"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                      )}
                    </button>

                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 text-xs font-mono font-semibold transition-all hover:scale-105 shadow-2xs"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-mono font-semibold transition-all hover:scale-105 shadow-2xs"
                      >
                        <Github className="w-3 h-3 text-rose-600" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* ━━━━━━━━ DEEP DIVE EXPANSION (Exact Recommended Hierarchy) ━━━━━━━━ */}
                {isExpanded && (
                  <div className="border-t border-slate-200 bg-slate-50/70 p-5 sm:p-7 space-y-6 animate-fadeIn">
                    
                    {/* Top Action Bar in Deep Dive */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
                      <div>
                        <span className="font-mono text-[10px] text-rose-600 uppercase tracking-widest font-bold block mb-0.5">
                          Technical Case Study
                        </span>
                        <h4 className="font-display text-base sm:text-lg font-bold text-slate-900">
                          {project.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2.5">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 text-xs font-mono font-bold transition-all hover:scale-105 shadow-xs"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-mono font-bold transition-all hover:scale-105 shadow-xs"
                        >
                          <Github className="w-3.5 h-3.5 text-rose-600" />
                          <span>View GitHub</span>
                        </a>
                      </div>
                    </div>

                    {/* 1. OVERVIEW */}
                    <div className="space-y-2">
                      <h5 className="font-mono text-[11px] uppercase tracking-widest text-rose-600 font-bold">
                        Overview
                      </h5>
                      <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {project.overview}
                      </p>
                    </div>

                    {/* 2. KEY ENGINEERING */}
                    <div className="space-y-2.5 pt-2 border-t border-slate-200">
                      <h5 className="font-mono text-[11px] uppercase tracking-widest text-rose-600 font-bold">
                        Key Engineering
                      </h5>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {project.keyEngineering.map((item, kIdx) => {
                          const [boldPrefix, ...restOfText] = item.split(":");
                          return (
                            <li key={kIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                              <span>
                                {restOfText.length > 0 ? (
                                  <>
                                    <strong className="text-slate-900">{boldPrefix.trim()}:</strong>
                                    {restOfText.join(":")}
                                  </>
                                ) : (
                                  item
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* 3. SYSTEM ARCHITECTURE */}
                    <div className="space-y-2.5 pt-2 border-t border-slate-200">
                      <h5 className="font-mono text-[11px] uppercase tracking-widest text-blue-600 font-bold flex items-center gap-1.5">
                        <Workflow className="w-3.5 h-3.5" />
                        <span>System Architecture</span>
                      </h5>

                      {/* Interactive Pipeline Steps */}
                      <div className="bg-white border border-slate-200 rounded-xl p-3 sm:p-4 overflow-x-auto shadow-xs">
                        <div className="flex items-center gap-2 min-w-max">
                          {project.architectureSteps.map((step, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-2">
                              <span className="font-mono text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 shadow-2xs">
                                {step}
                              </span>
                              {sIdx < project.architectureSteps.length - 1 && (
                                <span className="text-rose-600 font-black text-sm">→</span>
                              )}
                            </div>
                          ))}
                        </div>
                        {project.architectureNote && (
                          <p className="font-mono text-[10.5px] text-slate-500 mt-2.5 pt-2 border-t border-slate-100">
                            {project.architectureNote}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* 4. TECHNICAL HIGHLIGHTS */}
                    <div className="space-y-2.5 pt-2 border-t border-slate-200">
                      <h5 className="font-mono text-[11px] uppercase tracking-widest text-rose-600 font-bold">
                        Technical Highlights
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.techHighlights.map((th, thIdx) => (
                          <div
                            key={thIdx}
                            className="bg-white border border-slate-200 p-3.5 rounded-xl space-y-1 shadow-2xs"
                          >
                            <span className="font-mono text-xs font-bold text-slate-900 block">
                              {th.component}
                            </span>
                            <p className="font-sans text-xs text-slate-600 leading-relaxed">
                              {th.usage}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 5. TECH STACK */}
                    <div className="space-y-2 pt-2 border-t border-slate-200">
                      <h5 className="font-mono text-[11px] uppercase tracking-widest text-slate-500 font-bold">
                        Tech Stack
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-mono text-[11px] bg-white border border-slate-200 px-2.5 py-1 rounded-md text-slate-700 font-medium hover:border-rose-300 hover:text-rose-600 transition-colors shadow-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 6. CHALLENGES / ENGINEERING DECISIONS */}
                    <div className="space-y-2.5 pt-2 border-t border-slate-200">
                      <h5 className="font-mono text-[11px] uppercase tracking-widest text-emerald-700 font-bold">
                        Challenges / Engineering Decisions
                      </h5>
                      <div className="space-y-2.5">
                        {project.engineeringDecisions.map((ed, edIdx) => (
                          <div
                            key={edIdx}
                            className="bg-white border border-slate-200 p-3.5 rounded-xl space-y-1 shadow-2xs"
                          >
                            <span className="font-mono text-xs font-bold text-slate-900 block">
                              {ed.decision}
                            </span>
                            <p className="font-sans text-xs text-slate-600 leading-relaxed">
                              {ed.explanation}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 7. FOOTER ACTION BAR */}
                    <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>Verified Project Codebase &amp; Architecture</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 text-xs font-mono font-bold transition-all hover:scale-105 shadow-xs"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-mono font-bold transition-all hover:scale-105 shadow-xs"
                        >
                          <Github className="w-3.5 h-3.5 text-rose-600" />
                          <span>View GitHub</span>
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
