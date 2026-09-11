import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Brain,
  Network,
  Database,
  FileText,
  Github,
  Linkedin,
  Mail,
  Trophy,
  ExternalLink,
  Cpu,
  Sparkles
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const charRotateX = useTransform(smoothMouseY, [-300, 300], [6, -6]);
  const charRotateY = useTransform(smoothMouseX, [-300, 300], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Marquee item rows
  const marqueeRow1 = [
    "LangGraph Supervisor",
    "Multi-Agent Systems",
    "Agentic RAG",
    "ChromaDB Vector Store",
    "PyTorch Deep Learning",
    "FastAPI Microservices",
    "LightGBM Multi-Series",
    "Groq Llama 3.1",
    "Transformers (RoBERTa/IndicBERT)"
  ];

  const marqueeRow2 = [
    "React 18 & Modern UI",
    "PostgreSQL & SQLite WAL",
    "Docker Containerization",
    "NVIDIA NIM Cloud",
    "Streamlit BI Dashboards",
    "Tesseract OCR Multimodal",
    "LIME Explainability",
    "RESTful APIs & JWT",
    "Hugging Face Spaces"
  ];

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto overflow-hidden select-none"
    >
      {/* ━━━━━━━━ OVERSIZED ANIMATED BACKGROUND WATERMARK TYPOGRAPHY ━━━━━━━━ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex flex-col justify-around opacity-[0.035]">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="whitespace-nowrap font-display font-black text-7xl sm:text-9xl text-slate-950 tracking-tighter"
        >
          AI/ML ARCHITECT • MULTI-AGENT WORKFLOWS • RAG PIPELINES • FULL-STACK SYSTEMS •
        </motion.div>
        <motion.div
          animate={{ x: [-1000, 0] }}
          transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          className="whitespace-nowrap font-display font-black text-7xl sm:text-9xl text-slate-950 tracking-tighter"
        >
          ENTERPRISE SCALABILITY • TIME-SERIES FORECASTING • TRANSFORMERS • HIGH-THROUGHPUT APIS •
        </motion.div>
      </div>

      {/* ━━━━━━━━ MAIN HERO GRID ━━━━━━━━ */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto">
        
        {/* LEFT COLUMN: IDENTIFIER, ROLES, CTAs (7 Cols) */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
          
          {/* Status ticker pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs text-slate-700 font-semibold tracking-wide">
              Open to Opportunities • AI/ML &amp; Software Engineer
            </span>
          </div>

          {/* Name & Title */}
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-rose-600 font-bold block mb-1">
              // PORTFOLIO &amp; PROOF-OF-WORK
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
              Bharath Reddy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 font-black">
                Ramasani
              </span>
            </h1>
          </div>

          {/* Roles */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-display font-bold text-slate-800">
            <span className="text-rose-600">AI / ML Engineer</span>
            <span className="text-slate-300 font-black">•</span>
            <span className="text-slate-900">Software Engineer</span>
            <span className="text-slate-300 font-black">•</span>
            <span className="text-blue-600">Agentic AI &amp; Backend Systems</span>
          </div>

          {/* Concise Positioning Introduction */}
          <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
            Engineering production-grade AI systems, autonomous Multi-Agent state graphs, and Retrieval-Augmented Generation (RAG) pipelines backed by high-throughput FastAPI and React architectures.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="bg-rose-600 text-white font-display font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl hover:bg-rose-700 transition-all flex items-center gap-2 shadow-md shadow-rose-500/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Engineering Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-display font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-xs"
            >
              <FileText className="w-4 h-4 text-rose-600" />
              <span>Digital Resume</span>
            </button>
          </div>

          {/* Direct PDF Resumes */}
          <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-mono pt-1">
            <span className="uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-rose-600" />
              Direct PDF Resumes:
            </span>
            <a
              href="https://drive.google.com/file/d/1gTVsIZOMOwnpFQX5tOvQRn7jKDi4EtLc/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 transition-all font-semibold shadow-xs"
            >
              <span>AI/ML Resume</span>
              <ExternalLink className="w-3 h-3 text-rose-600" />
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="https://drive.google.com/file/d/13SRI9L4a9YpSkCKU9U3A2USuOFb1975g/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-all font-semibold shadow-xs"
            >
              <span>Software Engineering Resume</span>
              <ExternalLink className="w-3 h-3 text-blue-600" />
            </a>
          </div>

          {/* Verification & Social Links */}
          <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] sm:text-xs font-mono">
            <a href="https://github.com/BharathReddyRamasani" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors">
              <Github className="w-3.5 h-3.5 text-slate-700" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-300">•</span>
            <a href="https://www.linkedin.com/in/bharathreddyramasani/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors">
              <Linkedin className="w-3.5 h-3.5 text-blue-600" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-300">•</span>
            <a href="https://leetcode.com/u/Bharathreddy_Ramasani/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>LeetCode 1600+ (Top 16%)</span>
            </a>
            <span className="text-slate-300">•</span>
            <a href="mailto:ramasanibharathreddy2004@gmail.com" className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors">
              <Mail className="w-3.5 h-3.5 text-rose-600" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: WORKSTATION LAPTOP SETUP WITH MOUSE PARALLAX & STUDIO LIGHTING (5 Cols) */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
          
          {/* Ambient Lighting Rings */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 via-rose-500/15 to-blue-500/20 rounded-full blur-2xl opacity-70 pointer-events-none" />

          {/* Handwritten Cursive Glow Script */}
          <div
            className="font-script text-2xl sm:text-3xl font-bold text-rose-600 -rotate-2 select-none flex flex-col items-center mb-3"
            style={{ textShadow: "0 0 16px rgba(225, 29, 72, 0.35)" }}
          >
            <span className="tracking-wide">Turning Ideas into Impact</span>
            <svg className="w-36 sm:w-44 h-2.5 text-rose-500" viewBox="0 0 100 8" fill="none">
              <path d="M2 6 Q 50 1, 98 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          {/* Interactive Engineering Workstation Card with Parallax */}
          <motion.div
            style={{ rotateX: charRotateX, rotateY: charRotateY }}
            className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[440px] rounded-3xl p-3 bg-white border border-slate-200/90 shadow-2xl shadow-slate-200/80 group hover:border-cyan-400/60 transition-colors duration-500"
          >
            {/* Inner frame with workstation laptop image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center border border-slate-800">
              <img
                src="/assets/laptop_desk_setup.jpg"
                alt="Ideas, Models, Products, Real Impact - Engineering Workstation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Glowing overlay ring */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />

              {/* Floating Monogram Chip */}
              <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md border border-slate-700/80 px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 font-mono text-[10px] font-bold text-cyan-300">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>RBR • PRODUCTION AI</span>
              </div>

              {/* Floating Core Focus Pill */}
              <div className="absolute bottom-3 right-3 bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 text-white font-mono text-[10px] font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-cyan-200 font-medium">Ideas → Real Impact</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* ━━━━━━━━ DUAL-LAYER MARQUEE FOR CORE SKILLS ━━━━━━━━ */}
      <div className="relative z-10 pt-8 pb-4 space-y-2 overflow-hidden border-t border-slate-200/80 mt-6">
        
        {/* Layer 1: Leftward Marquee */}
        <div className="flex gap-3 whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex items-center gap-3 shrink-0"
          >
            {marqueeRow1.concat(marqueeRow1).map((skill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-mono text-xs font-semibold shadow-2xs hover:border-rose-300 hover:text-rose-600 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Layer 2: Rightward Marquee */}
        <div className="flex gap-3 whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            className="flex items-center gap-3 shrink-0"
          >
            {marqueeRow2.concat(marqueeRow2).map((skill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-700 font-mono text-xs font-semibold shadow-2xs hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

      </div>

      {/* ━━━━━━━━ 4 CORE TECHNICAL PILLARS ━━━━━━━━ */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-slate-200 shrink-0">
        {[
          {
            tag: "Agentic AI",
            title: "Multi-Agent Systems",
            spec: "LangGraph 7-Agent Architecture",
            desc: "Supervisor routing, typed state graphs, research synthesis, tool execution",
            icon: Network
          },
          {
            tag: "GenAI",
            title: "Production RAG & LLMs",
            spec: "Vector Search & Evaluation",
            desc: "ChromaDB, hybrid retrieval, hallucination reduction, faithfulness eval",
            icon: Brain
          },
          {
            tag: "Core ML",
            title: "ML & Deep Learning",
            spec: "PyTorch & Transformers",
            desc: "RoBERTa fine-tuning, IndicBERT, multimodal OCR, sales forecasting",
            icon: Cpu
          },
          {
            tag: "Software Eng",
            title: "Backend & Scalable APIs",
            spec: "FastAPI, PostgreSQL & Docker",
            desc: "JWT authentication, REST services, MongoDB, containerized deployments",
            icon: Database
          }
        ].map((pillar, idx) => {
          const IconComp = pillar.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 hover:border-rose-300 rounded-xl p-3 sm:p-3.5 transition-all duration-300 hover:-translate-y-1 group shadow-xs hover:shadow-md flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-1 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 group-hover:scale-110 transition-transform shadow-xs">
                    <IconComp className="w-3.5 h-3.5 text-rose-600" />
                  </div>
                  <span className="font-mono text-[9px] sm:text-[9.5px] text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full font-bold shadow-xs">
                    {pillar.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-rose-600 transition-colors leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="font-mono text-[9.5px] sm:text-[10px] text-rose-600 font-semibold mt-0.5 leading-tight">
                    {pillar.spec}
                  </p>
                </div>

                <p className="font-sans text-[10px] sm:text-[10.5px] text-slate-600 leading-snug line-clamp-2">
                  {pillar.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
