import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Github,
  CheckCircle2,
  ExternalLink,
  Workflow,
  ArrowRight,
  Layers,
  Sparkles,
  Database,
  Cpu
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
  shortSummary: string;
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
    "corpus-ai": true // First project open by default for immediate technical proof
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
      title: "CorpusAI — Multi-Agent AI Research Assistant",
      subtitle: "Multi-Agent AI Research Assistant",
      positioningRole: "Agentic AI / Multi-Agent / RAG",
      tagsSummary: "Agentic AI · RAG · LLMs · Multi-Agent Systems · Backend",
      shortSummary: "A multi-agent AI research platform designed to help researchers analyze papers, perform semantic search, compare research works, identify research gaps, synthesize literature, and generate research reports.",
      overview: "CorpusAI combines Retrieval-Augmented Generation, multi-agent orchestration, semantic search, and LLM-based reasoning into a single research workflow. Users can upload research papers and interact with them through conversational queries while specialized agents handle different research tasks.",
      keyEngineering: [
        "Built a full-stack research platform using FastAPI and React.js with REST APIs and JWT-based authentication.",
        "Designed an Agentic RAG pipeline using LangGraph, LangChain, ChromaDB, and Llama 3.1 for document processing, semantic retrieval, and context-aware generation.",
        "Implemented a supervisor-based multi-agent architecture coordinating 7 specialized agents for research analysis, paper comparison, research-gap detection, literature synthesis, and report generation.",
        "Integrated document processing and OCR workflows for extracting information from research documents.",
        "Containerized the application using Docker and deployed the system on Hugging Face Spaces with persistent storage."
      ],
      architectureSteps: [
        "React",
        "FastAPI",
        "LangGraph Supervisor",
        "Specialized Agents",
        "RAG / ChromaDB",
        "LLM",
        "Response"
      ],
      techHighlights: [
        { component: "LangGraph Supervisor", usage: "Deterministically routes queries across 7 specialized worker agents with typed state graphs and recursion limits." },
        { component: "ChromaDB Vector Store", usage: "Indexes chunked academic literature using all-MiniLM-L6-v2 embeddings for sub-millisecond semantic retrieval." },
        { component: "Groq / Llama 3.1", usage: "High-speed LLM inference for grounded claim synthesis, cross-paper comparison, and research-gap detection." },
        { component: "FastAPI REST Engine", usage: "Asynchronous backend managing secure JWT user sessions, OCR document extraction, and conversation histories." }
      ],
      technologies: [
        "Python",
        "FastAPI",
        "React.js",
        "LangGraph",
        "LangChain",
        "ChromaDB",
        "Groq / Llama 3.1",
        "RAG",
        "Docker",
        "JWT"
      ],
      engineeringDecisions: [
        {
          decision: "Supervisor Topology vs. Autonomous Chain",
          explanation: "Sequential chains accumulate context drift and fail catastrophically if any intermediate step errors out. The central supervisor pattern isolates worker execution scope with automated fallback edges and strict recursion safeguards."
        },
        {
          decision: "ChromaDB (Vector) + SQLite (Relational) Dual Storage",
          explanation: "ChromaDB provides fast approximate nearest neighbor (ANN) vector searches on document chunks, while SQLite guarantees strict ACID compliance for user sessions, chat histories, and research report metadata."
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
      tagsSummary: "Full-Stack · Recommendation Systems · RAG · Conversational AI",
      shortSummary: "A full-stack e-commerce platform combining personalized recommendation systems, semantic product discovery, and conversational AI to create an intelligent shopping experience.",
      overview: "The platform combines conventional e-commerce functionality with recommendation algorithms and Retrieval-Augmented Generation. Users can browse products, manage carts and orders, receive personalized recommendations, and interact with an AI assistant for product discovery.",
      keyEngineering: [
        "Architected a modular full-stack commerce platform using FastAPI, React.js, MongoDB, and REST APIs with authentication, product catalog, cart, and order-management workflows.",
        "Developed a hybrid recommendation engine combining collaborative filtering, content-based similarity, and popularity-based recommendations using weighted interaction scoring.",
        "Built a RAG-powered product discovery system using LangChain, ChromaDB, and Gemini LLM for semantic search and context-aware conversational shopping.",
        "Integrated AI services with the backend to connect product retrieval, recommendation logic, and conversational responses.",
        "Containerized and deployed the application using Docker and Hugging Face Spaces."
      ],
      architectureSteps: [
        "React",
        "FastAPI",
        "Commerce APIs",
        "MongoDB",
        "RAG Pipeline",
        "ChromaDB",
        "Gemini",
        "Product Context",
        "Response"
      ],
      architectureNote: "Dual-Flow Architecture: React → FastAPI → Commerce APIs → MongoDB (Transactional Flow) & User Query → RAG Pipeline → ChromaDB → Gemini → Context → Response (AI Discovery Flow)",
      techHighlights: [
        { component: "Hybrid Recommender", usage: "Blends collaborative filtering, TF-IDF content similarity, and popularity metrics to overcome user and product cold-start." },
        { component: "ChromaDB + LangChain", usage: "Indexes catalog metadata and vector embeddings to support semantic product search and natural-language matching." },
        { component: "Gemini LLM", usage: "Conversational shopping assistant strictly constrained to retrieved catalog context to eliminate out-of-catalog hallucinations." },
        { component: "MongoDB Document Store", usage: "Flexible document modeling for dynamic product catalogs, nested variant attributes, carts, and order lifecycles." }
      ],
      technologies: [
        "Python",
        "FastAPI",
        "React.js",
        "MongoDB",
        "LangChain",
        "ChromaDB",
        "RAG",
        "Gemini",
        "REST APIs",
        "Docker"
      ],
      engineeringDecisions: [
        {
          decision: "Hybrid Recommendation Scoring vs. Pure Collaborative Filtering",
          explanation: "Pure collaborative filtering fails for new users and freshly listed SKUs (cold-start problem). The hybrid engine applies weighted interaction scoring combining catalog attributes, user click history, and category popularity."
        },
        {
          decision: "Strictly Grounded RAG Shopping Assistant",
          explanation: "Standard conversational models hallucinate nonexistent products or pricing. The assistant retrieves verifiable catalog items from ChromaDB and passes them as explicit system context to Gemini before generating recommendations."
        }
      ],
      liveUrl: "https://huggingface.co/spaces/Bharath2769/AI-Powered-Conversational-Commerce-Platform",
      githubUrl: "https://github.com/BharathReddyRamasani/AI-Powered-Conversational-Commerce-Platform"
    },
    {
      id: "hate-speech",
      index: "03",
      title: "Emotion-Aware Hate Speech Detection System",
      subtitle: "Multilingual & Multimodal Moderation Platform",
      positioningRole: "Deep Learning / NLP / Transformers",
      tagsSummary: "Deep Learning · NLP · Transformers · Multimodal AI · Explainable AI",
      shortSummary: "A multilingual and multimodal AI system for detecting hate speech from text and document-based inputs, combining Transformer-based classification, OCR, and explainable AI.",
      overview: "The system extends traditional text classification into a multimodal moderation workflow, allowing users to analyze text, images, PDFs, and documents. OCR-based extraction converts visual/document content into text before multilingual classification.",
      keyEngineering: [
        "Developed a multimodal hate-speech detection pipeline supporting text, images, PDFs, and documents through OCR-based text extraction and multilingual processing.",
        "Fine-tuned RoBERTa and IndicBERT Transformer models using PyTorch for multilingual hate-speech classification.",
        "Built preprocessing and inference workflows for handling diverse linguistic inputs and document-derived text.",
        "Integrated LIME-based explainability to provide interpretable insights into model classification decisions.",
        "Developed REST APIs using FastAPI and containerized the application with Docker for deployment on Hugging Face Spaces."
      ],
      architectureSteps: [
        "Text / Image / PDF",
        "OCR Extraction",
        "Preprocessing",
        "Transformer Model",
        "Classification",
        "LIME Explanation"
      ],
      techHighlights: [
        { component: "RoBERTa & IndicBERT", usage: "Fine-tuned transformer models specialized for multilingual hate speech, slang, and code-mixed Indian language text." },
        { component: "Tesseract OCR Engine", usage: "Extracts textual content from uploaded memes, screenshots, scanned PDFs, and document images prior to classification." },
        { component: "LIME (Explainable AI)", usage: "Computes local token attribution scores highlighting the exact words and phrases that triggered the model prediction." },
        { component: "FastAPI Microservice", usage: "Containerized REST API providing sub-150ms inference endpoints for automated content moderation workflows." }
      ],
      technologies: [
        "Python",
        "PyTorch",
        "Hugging Face Transformers",
        "RoBERTa",
        "IndicBERT",
        "FastAPI",
        "React.js",
        "OCR",
        "LIME",
        "Docker"
      ],
      engineeringDecisions: [
        {
          decision: "IndicBERT Fine-Tuning vs. Generic Multilingual BERT",
          explanation: "Generic multilingual models underperform on low-resource and code-mixed regional text. IndicBERT was fine-tuned to capture phonetic transliterations, localized profanities, and regional hate-speech patterns."
        },
        {
          decision: "LIME Token Attribution vs. Black-Box Scoring",
          explanation: "Automated moderation requires human-in-the-loop review. LIME generates visual perturbation-based feature importance weights so moderators can instantly inspect the rationale behind flagged content."
        }
      ],
      githubUrl: "https://github.com/BharathReddyRamasani/Emotion-Aware-Hate-Speech-Detection-System"
    },
    {
      id: "nexus-commerce",
      index: "04",
      title: "Nexus Commerce Suite",
      subtitle: "Transactional Operations & BI Analytics Suite",
      positioningRole: "Data Science / Analytics / Software",
      tagsSummary: "Data Science · Business Analytics · PostgreSQL · Forecasting",
      shortSummary: "A full-stack business operations and analytics platform combining transactional commerce workflows with data-driven business intelligence.",
      overview: "Nexus Commerce Suite focuses on the software and data engineering side of commerce, providing inventory and sales management together with analytical tools for understanding customers, products, and future demand.",
      keyEngineering: [
        "Developed a business operations platform supporting inventory management, sales processing, and transactional workflows.",
        "Implemented ABC Analysis to classify products based on their contribution to business value.",
        "Developed RFM customer segmentation to analyze purchasing behavior and identify customer groups.",
        "Built sales analytics and visualization workflows using Pandas, NumPy, and Streamlit.",
        "Integrated sales forecasting to support demand planning and data-driven business decisions.",
        "Used PostgreSQL for structured transactional and analytical data management."
      ],
      architectureSteps: [
        "Streamlit",
        "Application Logic",
        "PostgreSQL",
        "Analytics / Forecasting",
        "Business Insights"
      ],
      techHighlights: [
        { component: "Pareto ABC Engine", usage: "Calculates cumulative SKU revenue contributions to classify inventory into Tier A (80%), B (15%), and C (5%)." },
        { component: "RFM Segmentation", usage: "Computes statistical quantile scoring across Recency, Frequency, and Monetary dimensions to segment customers." },
        { component: "Time-Series Forecasting", usage: "Multi-horizon sales demand projection utilizing trend and seasonal decomposition with LightGBM and Prophet." },
        { component: "PostgreSQL Database", usage: "Relational data schema with strict ACID transactional guarantees for inventory tracking and audit trails." }
      ],
      technologies: [
        "Python",
        "Streamlit",
        "PostgreSQL",
        "Pandas",
        "NumPy",
        "Data Analytics",
        "RFM Analysis",
        "ABC Analysis",
        "Forecasting"
      ],
      engineeringDecisions: [
        {
          decision: "Relational PostgreSQL Schema vs. NoSQL",
          explanation: "Inventory decrements, point-of-sale receipts, and order statuses require strict transactional ACID compliance and foreign-key constraints to prevent stock discrepancies and race conditions."
        },
        {
          decision: "Vectorized Pandas & NumPy Analytics",
          explanation: "Instead of row-by-row computations, vectorized transformations process 900K+ transactional records in sub-500ms for instantaneous Streamlit KPI dashboard recalculations."
        }
      ],
      githubUrl: "https://github.com/BharathReddyRamasani/Nexus-Commerce-Suite"
    }
  ];

  return (
    <section id="projects" className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto z-10 scroll-mt-20">
      <div className="space-y-6">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-white/10 pb-4">
          <div>
            <span className="font-mono text-[10px] uppercase text-primary tracking-[0.25em] block font-semibold mb-1">
              ENGINEERING EVIDENCE &amp; EVALUATION
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-on-surface">
              Featured Projects
            </h2>
            <p className="font-sans text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
              Production-oriented AI and software systems demonstrating multi-agent orchestration, hybrid recommendations, multimodal NLP, and enterprise transactional analytics.
            </p>
          </div>
        </div>

        {/* PROJECTS LIST — Compact Cards with Deep Disclosure */}
        <div className="space-y-5">
          {projects.map((project) => {
            const isExpanded = !!expandedProjects[project.id];

            return (
              <div
                key={project.id}
                className="bg-[#0e1614] rounded-xl border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-lg overflow-hidden"
              >
                {/* ━━━━━━━━ COMPACT PROJECT CARD (Always Visible) ━━━━━━━━ */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  {/* Top Row: Index + Title + Positioning Role Label */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-white/5 pb-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-primary">
                          {project.index} &mdash;
                        </span>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-on-surface">
                          {project.title.split("—")[0].trim()}
                        </h3>
                      </div>
                      <p className="font-sans text-xs text-secondary font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Distinct Positioning Role Label */}
                    <span className="inline-flex items-center font-mono text-[11px] font-bold px-3 py-1 rounded-full bg-primary/10 text-cyan-300 border border-primary/25 shadow-sm shrink-0">
                      {project.positioningRole}
                    </span>
                  </div>

                  {/* Tags Summary */}
                  <div className="font-mono text-[11px] text-on-surface-variant/80 tracking-wide font-medium">
                    {project.tagsSummary}
                  </div>

                  {/* Short 1-line Summary */}
                  <p className="font-sans text-xs sm:text-[13px] text-on-surface-variant leading-relaxed">
                    {project.shortSummary}
                  </p>

                  {/* Compact Action Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => toggleProject(project.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold font-display text-primary hover:text-cyan-300 transition-colors cursor-pointer group"
                    >
                      <span>{isExpanded ? "Collapse Details" : "View Project Details"}</span>
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
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/25 text-xs font-mono font-semibold transition-all hover:scale-105"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 text-on-surface border border-white/10 text-xs font-mono font-semibold transition-all hover:scale-105"
                      >
                        <Github className="w-3 h-3 text-primary" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* ━━━━━━━━ DEEP DIVE EXPANSION (Recommended Exact Hierarchy) ━━━━━━━━ */}
                {isExpanded && (
                  <div className="border-t border-white/10 bg-[#0a100f] p-5 sm:p-7 space-y-6 animate-fadeIn">
                    
                    {/* Top Action Bar in Deep Dive */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                      <div>
                        <span className="font-mono text-[10px] text-primary uppercase tracking-widest font-bold block mb-0.5">
                          Technical Case Study
                        </span>
                        <h4 className="font-display text-base sm:text-lg font-bold text-on-surface">
                          {project.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2.5">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold transition-all hover:scale-105 shadow-sm"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-cyan-300 border border-primary/30 text-xs font-mono font-bold transition-all hover:scale-105 shadow-sm"
                        >
                          <Github className="w-3.5 h-3.5 text-primary" />
                          <span>GitHub</span>
                        </a>
                      </div>
                    </div>

                    {/* 1. OVERVIEW */}
                    <div className="space-y-2">
                      <h5 className="font-mono text-[11px] uppercase tracking-widest text-primary font-bold flex items-center gap-1.5">
                        <span>Overview</span>
                      </h5>
                      <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        {project.overview}
                      </p>
                    </div>

                    {/* 2. KEY ENGINEERING */}
                    <div className="space-y-2.5 pt-2 border-t border-white/5">
                      <h5 className="font-mono text-[11px] uppercase tracking-widest text-primary font-bold">
                        Key Engineering
                      </h5>
                      <ul className="space-y-2 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        {project.keyEngineering.map((item, kIdx) => (
                          <li key={kIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 3. SYSTEM ARCHITECTURE */}
                    <div className="space-y-2.5 pt-2 border-t border-white/5">
                      <h5 className="font-mono text-[11px] uppercase tracking-widest text-secondary font-bold flex items-center gap-1.5">
                        <Workflow className="w-3.5 h-3.5" />
                        <span>System Architecture</span>
                      </h5>

                      {/* Interactive Pipeline Steps */}
                      <div className="bg-[#050b0a] border border-white/10 rounded-xl p-3 sm:p-4 overflow-x-auto">
                        <div className="flex items-center gap-2 min-w-max">
                          {project.architectureSteps.map((step, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-2">
                              <span className="font-mono text-xs font-bold px-3 py-1.5 rounded-lg bg-surface-container-high/80 border border-white/10 text-cyan-200 shadow-sm">
                                {step}
                              </span>
                              {sIdx < project.architectureSteps.length - 1 && (
                                <span className="text-primary font-black text-sm">→</span>
                              )}
                            </div>
                          ))}
                        </div>
                        {project.architectureNote && (
                          <p className="font-mono text-[10.5px] text-on-surface-variant/70 mt-2.5 pt-2 border-t border-white/5">
                            {project.architectureNote}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* 4. TECHNICAL HIGHLIGHTS */}
                    <div className="space-y-2.5 pt-2 border-t border-white/5">
                      <h5 className="font-mono text-[11px] uppercase tracking-widest text-primary font-bold">
                        Technical Highlights
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.techHighlights.map((th, thIdx) => (
                          <div
                            key={thIdx}
                            className="bg-[#070e0d] border border-white/10 p-3 rounded-lg space-y-1"
                          >
                            <span className="font-mono text-xs font-bold text-cyan-300 block">
                              {th.component}
                            </span>
                            <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                              {th.usage}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 5. TECH STACK */}
                    <div className="space-y-2 pt-2 border-t border-white/5">
                      <h5 className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant/80 font-bold">
                        Tech Stack
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-mono text-[11px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-on-surface font-medium hover:border-primary/40 hover:text-cyan-300 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 6. CHALLENGES / ENGINEERING DECISIONS */}
                    <div className="space-y-2.5 pt-2 border-t border-white/5">
                      <h5 className="font-mono text-[11px] uppercase tracking-widest text-emerald-400 font-bold">
                        Challenges / Engineering Decisions
                      </h5>
                      <div className="space-y-2">
                        {project.engineeringDecisions.map((ed, edIdx) => (
                          <div
                            key={edIdx}
                            className="bg-[#070e0d] border border-white/10 p-3 rounded-lg space-y-1"
                          >
                            <span className="font-mono text-xs font-bold text-on-surface block">
                              {ed.decision}
                            </span>
                            <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                              {ed.explanation}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 7. FOOTER ACTION BAR */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>Verified Project Codebase &amp; Architecture</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold transition-all hover:scale-105"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-cyan-300 border border-primary/30 text-xs font-mono font-bold transition-all hover:scale-105"
                        >
                          <Github className="w-3.5 h-3.5 text-primary" />
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
