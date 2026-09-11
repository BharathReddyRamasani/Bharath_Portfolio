import { useState, useEffect } from "react";
import {
  ArrowRight,
  Brain,
  Network,
  Database,
  Code2,
  FileText,
  Github,
  Linkedin,
  Mail,
  Trophy,
  ExternalLink,
  Layers,
  Cpu,
  CheckCircle2,
  GitBranch
} from "lucide-react";
import Navbar from "./components/Navbar";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import ResumeModal from "./components/ResumeModal";
import laptopDeskImg from "./assets/laptop_desk_setup.jpg";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track scroll section intersections
  useEffect(() => {
    const sections = ["home", "experience", "projects", "what-i-build", "skills", "achievements", "education", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.25, rootMargin: "-10% 0px -40% 0px" }
      );

      observer.observe(el);
      return { el, observer };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen text-on-surface bg-[#0a0f0e] font-sans overflow-x-hidden selection:bg-primary selection:text-on-primary">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary z-[9999] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setResumeOpen(true)} activeSection={activeSection} />

      {/* Main Content */}
      <main className="relative z-10">

        {/* HERO SECTION — EXACT SINGLE SLIDE FIT (Fills 100% of the screen, navbar overlays top) */}
        <section
          id="home"
          className="relative min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between pt-16 sm:pt-18 pb-3 sm:pb-4 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto overflow-hidden"
        >
          {/* Main Top/Middle Grid: Left Content (7 cols), Right Visual (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center flex-1 my-auto py-1">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-2.5 sm:space-y-3 text-left">
              <div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-extrabold tracking-tight text-on-surface leading-[1.04]">
                  Bharath Reddy <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-emerald-300 font-black">
                    Ramasani
                  </span>
                </h1>
              </div>

              {/* Roles */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-display font-bold text-on-surface">
                <span className="text-cyan-300">AI / ML Engineer</span>
                <span className="text-primary/70 font-black">•</span>
                <span className="text-white">Software Engineer</span>
                <span className="text-primary/70 font-black">•</span>
                <span className="text-secondary">Agentic AI &amp; Backend Systems</span>
              </div>

              {/* Positioning Description */}
              <p className="font-sans text-xs sm:text-[13.5px] text-on-surface-variant leading-relaxed max-w-xl">
                Building production-oriented AI and software systems across Multi-Agent Systems,
                Retrieval-Augmented Generation (RAG), Machine Learning, and scalable backend engineering.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#projects"
                  className="bg-primary text-on-primary font-display font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl hover:bg-cyan-300 transition-all flex items-center gap-2 shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>View Selected Work</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setResumeOpen(true)}
                  className="bg-surface-container-high/80 hover:bg-surface-container-highest text-on-surface border border-white/10 hover:border-primary/40 font-display font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-primary" />
                  <span>Digital Resume</span>
                </button>
              </div>

              {/* Direct PDF Resumes */}
              <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-mono pt-1">
                <span className="uppercase tracking-wider text-on-surface-variant/70 font-semibold flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-primary" />
                  Direct PDF Resumes:
                </span>
                <a
                  href="https://drive.google.com/file/d/1gTVsIZOMOwnpFQX5tOvQRn7jKDi4EtLc/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/10 hover:bg-primary/20 text-cyan-300 border border-primary/25 hover:border-primary transition-all font-semibold shadow-xs"
                >
                  <span>AI/ML Resume</span>
                  <ExternalLink className="w-3 h-3 text-primary" />
                </a>
                <span className="text-white/20">•</span>
                <a
                  href="https://drive.google.com/file/d/13SRI9L4a9YpSkCKU9U3A2USuOFb1975g/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/25 hover:border-secondary transition-all font-semibold shadow-xs"
                >
                  <span>Software Engineering Resume</span>
                  <ExternalLink className="w-3 h-3 text-secondary" />
                </a>
              </div>

              {/* Profile Links */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] sm:text-xs font-mono">
                <a href="https://github.com/BharathReddyRamasani" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-white transition-colors">
                  <Github className="w-3.5 h-3.5 text-primary" />
                  <span>GitHub</span>
                </a>
                <span className="text-white/20">•</span>
                <a href="https://www.linkedin.com/in/bharathreddyramasani/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-white transition-colors">
                  <Linkedin className="w-3.5 h-3.5 text-secondary" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-white/20">•</span>
                <a href="https://leetcode.com/u/Bharathreddy_Ramasani/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-white transition-colors">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  <span>LeetCode 1600+ (Top 16%)</span>
                </a>
                <span className="text-white/20">•</span>
                <a href="mailto:ramasanibharathreddy2004@gmail.com" className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Right Visual Column (Expanded Laptop on Desk with Ambient Glow & Cursive Caption) */}
            <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-center">
              {/* Handwritten cursive caption */}
              <div
                className="font-script text-2xl sm:text-3xl lg:text-[32px] font-bold text-cyan-300 -rotate-2 select-none flex flex-col items-center lg:items-end mb-2 pr-2"
                style={{ textShadow: "0 0 20px rgba(79, 219, 200, 0.85), 0 0 40px rgba(79, 219, 200, 0.45)" }}
              >
                <span className="tracking-wide">Turning Ideas into Impact</span>
                <svg className="w-36 sm:w-44 h-2.5 text-cyan-400" style={{ filter: "drop-shadow(0 0 8px rgba(79, 219, 200, 0.95))" }} viewBox="0 0 100 8" fill="none">
                  <path d="M2 6 Q 50 1, 98 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>

              {/* Minimalist Laptop Placed on Desk with Ambient Glow */}
              <div className="relative group w-full flex justify-center lg:justify-end">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/35 via-cyan-400/25 to-secondary/35 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none" />
                <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] xl:max-w-[520px] rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/20 group-hover:border-primary/60 transition-all duration-500 bg-[#070e0d]">
                  <div className="relative overflow-hidden aspect-[16/10] w-full">
                    <img
                      src={laptopDeskImg}
                      alt="Laptop open on desk with ideas, models, products, real impact on screen, pen, and notebook with better systems brighter tomorrow"
                      className="w-full h-full object-cover brightness-105 contrast-110 group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    {/* Subtle edge vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070e0d]/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 CORE TECHNICAL PILLARS — Positioned cleanly at bottom of single slide */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-2 sm:pt-3 border-t border-white/10 shrink-0 mb-1">
            {[
              {
                tag: "Agentic AI",
                title: "Multi-Agent Systems",
                spec: "LangGraph 7-Agent Architecture",
                desc: "Supervisor routing, state graphs, research synthesis, tool execution",
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
                  className="bg-[#0e1614]/90 border border-white/10 hover:border-primary/40 rounded-xl p-3 sm:p-3.5 transition-all duration-300 hover:-translate-y-1 group shadow-md hover:shadow-primary/10 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-all pointer-events-none" />
                  <div className="space-y-1 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-xs">
                        <IconComp className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="font-mono text-[9px] sm:text-[9.5px] text-cyan-300 bg-primary/10 border border-primary/25 px-2 py-0.5 rounded-full font-bold shadow-xs">
                        {pillar.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-xs sm:text-[13px] font-bold text-on-surface group-hover:text-cyan-300 transition-colors leading-tight">
                        {pillar.title}
                      </h3>
                      <p className="font-mono text-[9.5px] sm:text-[10px] text-primary/95 font-semibold mt-0.5 leading-tight">
                        {pillar.spec}
                      </p>
                    </div>

                    <p className="font-sans text-[10px] sm:text-[10.5px] text-on-surface-variant/90 leading-snug line-clamp-2">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* WORK EXPERIENCE SECTION */}
        <ExperienceSection />

        {/* PROJECTS SECTION */}
        <ProjectsSection />

        {/* "WHAT I BUILD" / TECHNICAL FOCUS SECTION (P1.2) */}
        <section id="what-i-build" className="relative py-14 sm:py-18 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto z-10 border-t border-white/5 scroll-mt-16">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-[10px] uppercase text-primary tracking-[0.25em] block font-semibold mb-1">
                  ENGINEERING CAPABILITIES &amp; ARCHITECTURAL SCOPE
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-on-surface">
                  What I Build
                </h2>
                <p className="font-sans text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
                  Clear engineering scope across model architectures, autonomous agent workflows, and full-stack software systems.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* 01: Autonomous Multi-Agent & RAG Systems */}
              <div className="bg-[#0e1614] border border-white/10 hover:border-primary/40 rounded-xl p-5 sm:p-6 space-y-4 transition-all duration-300 shadow-lg group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all pointer-events-none" />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-primary tracking-widest uppercase">
                    // 01 · AGENTIC SYSTEMS
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <GitBranch className="w-4 h-4" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display text-base sm:text-lg font-bold text-on-surface group-hover:text-cyan-300 transition-colors">
                    Autonomous Multi-Agent &amp; RAG Systems
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Design supervisor and worker topologies using <strong>LangGraph</strong>. Implement state machine graphs, fallback routing, and validation loops. Build hybrid retrieval pipelines combining dense semantic embeddings (ChromaDB) with metadata filtering and reciprocal rank fusion to eliminate hallucinations.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {["LangGraph", "ChromaDB", "Supervisor Pattern", "State Graphs", "Evaluation Evals", "Groq Llama 3.1"].map((tag, i) => (
                    <span key={i} className="font-mono text-[11px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-on-surface font-medium hover:border-primary/40 hover:text-cyan-300 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 02: Applied ML, NLP & Multimodal Pipelines */}
              <div className="bg-[#0e1614] border border-white/10 hover:border-secondary/40 rounded-xl p-5 sm:p-6 space-y-4 transition-all duration-300 shadow-lg group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-all pointer-events-none" />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-secondary tracking-widest uppercase">
                    // 02 · DEEP LEARNING &amp; NLP
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/25 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display text-base sm:text-lg font-bold text-on-surface group-hover:text-emerald-300 transition-colors">
                    Applied ML, NLP &amp; Multimodal Pipelines
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Fine-tune Transformer architectures (<strong>RoBERTa, IndicBERT</strong>) for high-precision classification. Build end-to-end multimodal pipelines with Tesseract OCR, LIME model interpretability, and tabular demand forecasting with LightGBM/Prophet processing millions of retail rows.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {["PyTorch", "Hugging Face", "RoBERTa", "IndicBERT", "Tesseract OCR", "LIME Explainability", "LightGBM", "Prophet"].map((tag, i) => (
                    <span key={i} className="font-mono text-[11px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-on-surface font-medium hover:border-secondary/40 hover:text-emerald-300 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 03: Production Backend & Scalable APIs */}
              <div className="bg-[#0e1614] border border-white/10 hover:border-emerald-500/40 rounded-xl p-5 sm:p-6 space-y-4 transition-all duration-300 shadow-lg group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all pointer-events-none" />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-emerald-400 tracking-widest uppercase">
                    // 03 · BACKEND &amp; DATA SYSTEMS
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Database className="w-4 h-4" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display text-base sm:text-lg font-bold text-on-surface group-hover:text-emerald-300 transition-colors">
                    Production Backend &amp; Scalable APIs
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Architect high-throughput REST APIs using <strong>FastAPI</strong> with Pydantic validation, JWT token security, and background task management. Model relational schemas with PostgreSQL and document stores with MongoDB, optimizing indexing for low-latency queries.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {["FastAPI", "PostgreSQL", "MongoDB", "JWT Auth", "Pydantic", "RESTful Design"].map((tag, i) => (
                    <span key={i} className="font-mono text-[11px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-on-surface font-medium hover:border-emerald-500/40 hover:text-emerald-300 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 04: Full-Stack Integration & Deployment */}
              <div className="bg-[#0e1614] border border-white/10 hover:border-amber-500/40 rounded-xl p-5 sm:p-6 space-y-4 transition-all duration-300 shadow-lg group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-all pointer-events-none" />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-amber-400 tracking-widest uppercase">
                    // 04 · FULL-STACK &amp; DEPLOYMENT
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Code2 className="w-4 h-4" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display text-base sm:text-lg font-bold text-on-surface group-hover:text-amber-300 transition-colors">
                    Full-Stack Integration &amp; Deployment
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Build responsive, component-driven client interfaces in <strong>React.js</strong> and TypeScript. Containerize applications using Docker multi-stage builds and deploy scalable inference spaces to Hugging Face Spaces and cloud platforms with automated CI/CD.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {["React.js", "TypeScript", "Docker", "Hugging Face Spaces", "Git CI/CD", "Streamlit"].map((tag, i) => (
                    <span key={i} className="font-mono text-[11px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-on-surface font-medium hover:border-amber-500/40 hover:text-amber-300 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS SECTION */}
        <SkillsSection />

        {/* ACHIEVEMENTS SECTION */}
        <AchievementsSection />

        {/* EDUCATION SECTION (CVR College) */}
        <EducationSection />

        {/* CONTACT SECTION */}
        <ContactSection />

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 py-8 px-4 text-center font-mono text-xs text-on-surface-variant/70 bg-[#070b0a]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Bharath Reddy Ramasani. Built with React, TypeScript &amp; Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/BharathReddyRamasani" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              GitHub
            </a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/bharathreddyramasani/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
            <span>•</span>
            <a href="https://leetcode.com/u/Bharathreddy_Ramasani/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              LeetCode
            </a>
            <span>•</span>
            <a href="mailto:ramasanibharathreddy2004@gmail.com" className="hover:text-primary transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>

      {/* RESUME MODAL */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
