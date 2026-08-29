import { useState } from "react";
import { ExternalLink, ShoppingCart, ShieldAlert, Cpu, ChevronDown, ChevronUp, Sparkles, Github, Globe, CheckCircle2, Layers } from "lucide-react";
import { Project } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface TechDetail {
  name: string;
  role: string;
}

interface EnhancedProject extends Project {
  techDetails: TechDetail[];
  bullets: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

export default function ProjectsSection() {
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

  const toggleTech = (id: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const projects: EnhancedProject[] = [
    {
      id: "corpus-ai",
      title: "CorpusAI – Multi-Agent AI Research Assistant for Literature Synthesis",
      category: "Agentic AI & Multi-Agent",
      categoryType: "primary",
      description: "A multi-agent AI research platform for literature synthesis, semantic document retrieval, and multi-paper analysis.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUzA8uuk8LVgODy31yDHDXdeA7NwmTD3VeI2rfRBSAzXE2HAHgqMfj1CjwF8AWLG5HkmzCzdxy5abn_WI3b8ULCvR3F8XgGDMbkuTnxrH9Qsyg3938GILCUk_S-HhYx8r-sF4PycL3o2LjWeirOM5xMY2C2UMLwtbKBSZIx6l0zXHUup2aYwSy-UcJJxa12YZ8TacGWfj7aTr7TjE3WxZgaZQWacUO4iYjAzCDDMvUXCid1ubAtRpl",
      imageAlt: "Digital neural network interface visualization for multi-agent literature synthesis.",
      tech: ["Python", "FastAPI", "React.js", "LangGraph", "LangChain", "ChromaDB", "RAG", "Docker", "Groq Llama 3.1"],
      techDetails: [
        { name: "Python", role: "Core application and AI pipeline development" },
        { name: "FastAPI", role: "REST API backend and service integration" },
        { name: "React.js", role: "Research interface and conversational workflows" },
        { name: "LangGraph", role: "Supervisor-based multi-agent orchestration" },
        { name: "LangChain", role: "RAG retrieval, prompt templates, and chain workflows" },
        { name: "ChromaDB", role: "Vector storage and semantic document retrieval" },
        { name: "Docker", role: "Containerized application deployment" }
      ],
      bullets: [
        "Architected and developed a modular full-stack AI research platform using FastAPI and React.js for research paper analysis, semantic search, and conversational question answering.",
        "Designed and implemented an Agentic RAG pipeline using LangGraph, LangChain, ChromaDB, Groq Llama 3.1, and all-MiniLM-L6-v2 embeddings for document chunking, semantic retrieval, and context-aware response generation.",
        "Engineered a supervisor-based multi-agent architecture coordinating 7 specialized AI agents for multi-paper chat, paper comparison, research gap detection, literature synthesis, and automated report generation.",
        "Designed and Dockerized a modular architecture with JWT authentication, OCR, SQLite, ChromaDB, REST APIs, and persistent storage on Hugging Face Spaces for scalable deployment."
      ],
      githubUrl: "https://github.com/BharathReddyRamasani/CorpusAI-An-AI-Powered-Literature-Synthesis-for-Researchers.git",
      liveUrl: "https://huggingface.co/spaces/Bharath2769/ai-research-assistant"
    },
    {
      id: "ai-commerce",
      title: "AI-Powered Conversational Commerce Platform",
      category: "Full-Stack & Recommendation",
      categoryType: "secondary",
      description: "Full-stack commerce platform combining recommendation systems, semantic product discovery, and conversational AI.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ3JC6B5iDIIKakesGKgbZjRfFxnti7ka5sRv9xO1sHL21DIlv5SQ4U_hBosoPADtP8vvy6G4brxMATWc6HxZCvuK9OpVzGzlHVzGYusYcQPd8aUXkR0kM52J7YiKMCv6hRvyaQVWe3p1JoXN8_t8i-TK9ToLDEujbL6lboIlqhcC7PEbZCxrKnJWnFuV5FiIzMFv-5MooMj9m-OZ9XFnKUMj65sE8lP8w52XQZLWmXh_FlfKU7e79",
      imageAlt: "Conversational mobile mockup illustrating an AI assistant suggesting luxury products to users.",
      tech: ["Python", "FastAPI", "React.js", "MongoDB", "LangChain", "ChromaDB", "RAG", "REST APIs", "Docker", "Gemini LLM"],
      techDetails: [
        { name: "Python", role: "Backend scripting, recommendation algorithms, and RAG execution" },
        { name: "FastAPI", role: "REST API endpoints serving commerce workflows and inference" },
        { name: "React.js", role: "Interactive commerce frontend interface with cart and checkout" },
        { name: "MongoDB", role: "Document database for user sessions, product catalogs, and orders" },
        { name: "LangChain", role: "Conversational RAG pipeline and prompt orchestration" },
        { name: "ChromaDB", role: "Vector database for semantic product search and similarity" },
        { name: "Docker", role: "Multi-service containerized deployment" }
      ],
      bullets: [
        "Architected and developed a scalable full-stack commerce platform using FastAPI, React.js, MongoDB, and REST APIs, implementing secure authentication, product catalog, cart, and order management with a modular backend architecture.",
        "Designed and implemented a hybrid recommendation engine combining collaborative, content-based, and popularity-based filtering to deliver personalized product recommendations through weighted interaction scoring and product similarity.",
        "Built a Retrieval-Augmented Generation (RAG) pipeline using LangChain, ChromaDB, and Gemini LLM to enable semantic product search, context-aware conversational shopping, and AI-powered product discovery.",
        "Containerized and deployed the platform using Docker and Hugging Face Spaces, implementing secure APIs, scalable backend services, and production-ready AI-powered commerce workflows."
      ],
      githubUrl: "https://github.com/BharathReddyRamasani/AI-Powered-Conversational-Commerce-Platform.git",
      liveUrl: "https://huggingface.co/spaces/Bharath2769/AI-Powered-Conversational-Commerce-Platform"
    },
    {
      id: "hate-speech",
      title: "Emotion-Aware Hate Speech Detection System",
      category: "Deep Learning & NLP",
      categoryType: "error",
      description: "Multimodal AI platform for multilingual hate speech detection across text, images, PDFs, and documents using Transformer-based NLP and explainable AI.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvpCJN7lkYUHqBygajIk8qp-LcMvwo_q_l3tXorls_KtZ7RjFokq9r3XMuFJQcfENi9rekeI0N_7KY9oPUncT5OG920XPScKyRupGPCNKQ5RGkWeug0bQWVR1bYOQQZlYkWTtJ7cJeqOqUZlIlYnSqWPZiX3b-ZKxysQseKVP9JjszIzIgD_l0PW98rBeMyFfWPJ7fkbzI2_LFJk99dazCaoCOfJB3YS-WkQY44M_Uvh5-iv5kBEXY",
      imageAlt: "Digital text processing wave passing through a crystalline glowing filter.",
      tech: ["Python", "FastAPI", "PyTorch", "Hugging Face Transformers", "React.js", "Tesseract OCR", "Docker", "LIME"],
      techDetails: [
        { name: "Python", role: "Deep learning pipeline and model training orchestration" },
        { name: "PyTorch", role: "Fine-tuning multilingual Transformer models (RoBERTa & IndicBERT)" },
        { name: "FastAPI", role: "REST API backend for batch and real-time inference" },
        { name: "React.js", role: "Web dashboard for input processing and explainability display" },
        { name: "Tesseract OCR", role: "Text extraction from image and document inputs" },
        { name: "LIME", role: "Explainable AI framework for feature importance scoring" },
        { name: "Docker", role: "Containerized deployment on Hugging Face Spaces" }
      ],
      bullets: [
        "Developed a multimodal AI platform for hate speech detection across text, images, PDFs, and documents using OCR-based text extraction and multilingual processing pipelines.",
        "Fine-tuned multilingual Transformer models (RoBERTa and IndicBERT) using PyTorch on 80K+ samples for robust multilingual hate speech classification across diverse linguistic inputs.",
        "Integrated LIME-based explainability to generate interpretable predictions and provide clear insights into model classification decisions.",
        "Developed REST APIs using FastAPI and Dockerized the application, deploying it on Hugging Face Spaces for scalable real-time inference across multilingual and multimodal inputs."
      ],
      githubUrl: "https://github.com/BharathReddyRamasani/Emotion-Aware-Hate-Speech-Detection-System.git",
      liveUrl: "https://huggingface.co/spaces/annepagaanvesh/EmiHate-Grid"
    },
    {
      id: "nexus-commerce",
      title: "Nexus Commerce Suite",
      category: "Software & Data Analytics",
      categoryType: "primary",
      description: "Full-stack business operations and analytics platform enabling inventory management, transaction processing, and customer segmentation.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "An enterprise analytical dashboard visualizing sales trends and operational parameters.",
      tech: ["Python", "Streamlit", "PostgreSQL", "Pandas", "NumPy"],
      techDetails: [
        { name: "Python", role: "Core algorithms, business logic, and data processing" },
        { name: "Streamlit", role: "Interactive analytical dashboards and sales workflows" },
        { name: "PostgreSQL", role: "Relational database with transaction safety and Row-Level Security" },
        { name: "Pandas", role: "Multi-dimensional analytics, RFM segmentation, and data modeling" },
        { name: "NumPy", role: "Vectorized mathematical computations and predictive metrics" }
      ],
      bullets: [
        "Developed full-stack business operations platform for inventory management, transaction processing, and sales tracking.",
        "Implemented transactional workflows for order management, stock validation, and role-based access control with PostgreSQL.",
        "Built analytics modules including ABC Analysis, RFM Segmentation, and sales forecasting using Pandas and NumPy.",
        "Engineered an interactive analytics interface using Streamlit for live business intelligence and operational reporting."
      ],
      githubUrl: "https://github.com/BharathReddyRamasani/Nexus-Commerce-Suite.git",
      liveUrl: "https://bharathreddyramasani-nexus-commerce-suite-app-rbr.streamlit.app/"
    }
  ];

  const getCategoryBadgeStyle = (type: string) => {
    switch (type) {
      case "primary":
        return "bg-primary/10 text-primary border-primary/25";
      case "secondary":
        return "bg-secondary/10 text-secondary border-secondary/25";
      case "error":
        return "bg-tertiary/10 text-tertiary border-tertiary/25";
      default:
        return "bg-white/5 text-on-surface border-white/10";
    }
  };

  const getCategoryIcon = (type: string) => {
    switch (type) {
      case "primary":
        return <Cpu className="w-3.5 h-3.5 text-primary" />;
      case "secondary":
        return <ShoppingCart className="w-3.5 h-3.5 text-secondary" />;
      case "error":
        return <ShieldAlert className="w-3.5 h-3.5 text-tertiary" />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="relative py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto z-10 scroll-mt-12">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 border-b border-white/10 pb-6">
        <div>
          <span className="font-mono text-xs uppercase text-primary tracking-[0.25em] mb-2 block font-semibold">
            ENGINEERING PORTFOLIO
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-on-surface flex items-center gap-3">
            Featured Projects
          </h2>
          <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-2xl mt-2 leading-relaxed">
            Production-grade software and intelligent systems spanning multi-agent AI research, conversational commerce, multimodal NLP, and business data analytics.
          </p>
        </div>
        <div className="font-mono text-xs text-primary bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-xl shrink-0 font-semibold flex items-center gap-2">
          <Layers className="w-3.5 h-3.5" />
          <span>4 Core Systems</span>
        </div>
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {projects.map((project) => {
          const isExpanded = !!expandedProjects[project.id];

          return (
            <div
              key={project.id}
              className={`bg-surface-container-low/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 shadow-xl flex flex-col justify-between group ${
                project.featured ? "lg:col-span-2 bg-surface-container-low/60 border-primary/20" : ""
              }`}
            >
              {/* Top Banner Image Container */}
              <div className="relative w-full aspect-[16/8] sm:aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/7] overflow-hidden bg-black/40 border-b border-white/10">
                <img
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark Gradient Overlay for Crisp Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-black/40" />

                {/* Badges Overlay */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center gap-2 z-10">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border backdrop-blur-md ${getCategoryBadgeStyle(project.categoryType)}`}>
                    {getCategoryIcon(project.categoryType)}
                    <span>{project.category}</span>
                  </div>

                  {project.featured && (
                    <span className="bg-primary text-on-primary font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                      Flagship Internship Project
                    </span>
                  )}
                </div>

                {/* Bottom Overlay Title in Banner */}
                <div className="absolute bottom-4 left-5 right-5 z-10">
                  <h3 className="font-display text-2xl md:text-3xl font-extrabold text-on-surface tracking-tight group-hover:text-primary transition-colors drop-shadow-md">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  {/* Short Description */}
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    {project.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2.5 pt-2">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs text-on-surface-variant/90 leading-relaxed flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills & Action Links */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[11px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg text-on-surface-variant"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => toggleTech(project.id)}
                      className="flex items-center gap-1.5 font-mono text-xs text-primary hover:text-primary-container transition-colors cursor-pointer select-none border border-primary/20 bg-primary/5 px-3 py-1 rounded-lg shrink-0 font-semibold"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="w-3.5 h-3.5" />
                          <span>Hide Details</span>
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-3.5 h-3.5" />
                          <span>Architecture</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Architecture Breakdown Drawer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden space-y-2 bg-black/20 p-4 rounded-xl border border-white/5"
                      >
                        <span className="font-mono text-[10px] text-primary uppercase tracking-widest block flex items-center gap-1.5 font-bold mb-3">
                          <Sparkles className="w-3.5 h-3.5 text-primary" />
                          Technical Architecture & Module Roles
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.techDetails.map((detail, dIdx) => (
                            <div
                              key={dIdx}
                              className="bg-surface-container-high/40 border border-white/5 p-2.5 rounded-lg flex flex-col gap-0.5"
                            >
                              <span className="font-mono text-xs text-primary font-bold">
                                {detail.name}
                              </span>
                              <span className="text-[11px] text-on-surface-variant/85 leading-tight">
                                {detail.role}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Links (GitHub Repo & Live Demo) */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-white/5 hover:bg-white/10 text-on-surface border border-white/10 py-2.5 px-4 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Github className="w-4 h-4 text-primary" />
                      <span>GitHub Repository</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 py-2.5 px-4 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Live App / Space</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
