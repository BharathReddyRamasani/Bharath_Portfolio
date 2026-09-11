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
          className="relative h-screen min-h-[600px] flex flex-col justify-between pt-16 sm:pt-20 pb-3 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto overflow-hidden"
        >
          {/* Main Top/Middle Grid: Left Content (7 cols), Right Visual (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center flex-1 my-auto py-0.5">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-1.5 sm:space-y-2 text-left">
              <div>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-[38px] font-extrabold tracking-tight text-on-surface leading-[1.08]">
                  Bharath Reddy <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-secondary font-black">
                    Ramasani
                  </span>
                </h1>
              </div>

              {/* Roles */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-[13px] font-display font-bold text-on-surface">
                <span className="text-cyan-300">AI / ML Engineer</span>
                <span className="text-primary/70 font-black">•</span>
                <span className="text-white">Software Engineer</span>
                <span className="text-primary/70 font-black">•</span>
                <span className="text-secondary">Agentic AI &amp; Backend Systems</span>
              </div>

              {/* Positioning Description */}
              <p className="font-sans text-xs sm:text-[13px] text-on-surface-variant leading-relaxed max-w-xl">
                Building production-oriented AI and software systems across Multi-Agent Systems,
                Retrieval-Augmented Generation (RAG), Machine Learning, and scalable backend engineering.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
                <a
                  href="#projects"
                  className="bg-primary text-on-primary font-display font-bold text-xs px-4 py-2 rounded-lg hover:bg-cyan-300 transition-all flex items-center gap-1.5 shadow-md shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>View Selected Work</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setResumeOpen(true)}
                  className="bg-surface-container-high/80 hover:bg-surface-container-highest text-on-surface border border-white/10 hover:border-primary/40 font-display font-bold text-xs px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-primary" />
                  <span>Digital Resume</span>
                </button>
              </div>

              {/* Direct PDF Resumes */}
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono pt-0.5">
                <span className="uppercase tracking-wider text-on-surface-variant/70 font-semibold flex items-center gap-1">
                  <FileText className="w-3 h-3 text-primary" />
                  Direct PDF Resumes:
                </span>
                <a
                  href="https://drive.google.com/file/d/1gTVsIZOMOwnpFQX5tOvQRn7jKDi4EtLc/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary/10 hover:bg-primary/20 text-cyan-300 border border-primary/25 hover:border-primary transition-all font-semibold"
                >
                  <span>AI/ML Resume</span>
                  <ExternalLink className="w-2.5 h-2.5 text-primary" />
                </a>
                <span className="text-white/20">•</span>
                <a
                  href="https://drive.google.com/file/d/13SRI9L4a9YpSkCKU9U3A2USuOFb1975g/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/25 hover:border-secondary transition-all font-semibold"
                >
                  <span>Software Engineering Resume</span>
                  <ExternalLink className="w-2.5 h-2.5 text-secondary" />
                </a>
              </div>

              {/* Profile Links */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5 text-[11px] font-mono">
                <a href="https://github.com/BharathReddyRamasani" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-on-surface-variant hover:text-white transition-colors">
                  <Github className="w-3 h-3 text-primary" />
                  <span>GitHub</span>
                </a>
                <span className="text-white/20">•</span>
                <a href="https://www.linkedin.com/in/bharathreddyramasani/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-on-surface-variant hover:text-white transition-colors">
                  <Linkedin className="w-3 h-3 text-secondary" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-white/20">•</span>
                <a href="https://leetcode.com/u/Bharathreddy_Ramasani/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-on-surface-variant hover:text-white transition-colors">
                  <Trophy className="w-3 h-3 text-amber-400" />
                  <span>LeetCode 1600+ (Top 16%)</span>
                </a>
                <span className="text-white/20">•</span>
                <a href="mailto:ramasanibharathreddy2004@gmail.com" className="inline-flex items-center gap-1 text-on-surface-variant hover:text-white transition-colors">
                  <Mail className="w-3 h-3 text-primary" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Right Visual Column (Laptop on Desk with Clean Native Image Display & Cursive Caption) */}
            <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-center">
              {/* Handwritten cursive caption */}
              <div
                className="font-script text-xl sm:text-2xl font-bold text-cyan-300 -rotate-2 select-none flex flex-col items-center lg:items-end mb-1 pr-2"
                style={{ textShadow: "0 0 16px rgba(79, 219, 200, 0.8), 0 0 32px rgba(79, 219, 200, 0.4)" }}
              >
                <span className="tracking-wide">Turning Ideas into Impact</span>
                <svg className="w-32 sm:w-36 h-2 text-cyan-400" style={{ filter: "drop-shadow(0 0 6px rgba(79, 219, 200, 0.9))" }} viewBox="0 0 100 8" fill="none">
                  <path d="M2 6 Q 50 1, 98 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>

              {/* Minimalist Laptop Placed on Desk with Pen & Notebook (Crisp native image without duplicate text overlays) */}
              <div className="relative w-full max-w-[320px] sm:max-w-[350px] rounded-xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/20 group hover:border-primary/60 transition-all duration-500 bg-[#070e0d]">
                <div className="relative overflow-hidden aspect-[16/10.5] w-full">
                  <img
                    src={laptopDeskImg}
                    alt="Laptop open on desk with ideas, models, products, real impact on screen, pen, and notebook with better systems brighter tomorrow"
                    className="w-full h-full object-cover brightness-105 contrast-110"
                  />
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070e0d]/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* 4 CORE TECHNICAL PILLARS — Positioned cleanly at bottom of single slide */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 pt-1.5 border-t border-white/10 shrink-0 mb-1">
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
                  className="bg-[#0e1614] border border-white/10 hover:border-primary/40 rounded-lg p-2 sm:p-2.5 transition-all duration-200 hover:-translate-y-0.5 group shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center justify-between">
                      <div className="w-5 h-5 rounded bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:border-primary/50 transition-colors">
                        <IconComp className="w-3 h-3 text-primary" />
                      </div>
                      <span className="font-mono text-[8.5px] text-primary/80 bg-primary/5 border border-primary/20 px-1.5 py-0.2 rounded font-semibold">
                        {pillar.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-[11.5px] font-bold text-on-surface group-hover:text-primary transition-colors leading-tight">
                        {pillar.title}
                      </h3>
                      <p className="font-mono text-[9.5px] text-secondary font-medium mt-0.5 leading-tight">
                        {pillar.spec}
                      </p>
                    </div>

                    <p className="font-sans text-[9.5px] text-on-surface-variant/80 leading-snug line-clamp-2">
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
        <section id="what-i-build" className="relative py-12 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto z-10 border-t border-white/5 scroll-mt-16">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-[10px] uppercase text-primary tracking-[0.25em] block font-semibold mb-1">
                  ENGINEERING CAPABILITIES
                </span>
                <h2 className="font-display text-2xl font-extrabold text-on-surface">
                  What I Build
                </h2>
                <p className="font-sans text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
                  Clear engineering scope across model architectures, autonomous agent workflows, and full-stack software systems.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0e1614] border border-white/10 p-5 rounded-xl space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center text-primary">
                    <GitBranch className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-base font-bold text-on-surface">
                    Autonomous Multi-Agent &amp; RAG Systems
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Design supervisor and worker topologies using <strong>LangGraph</strong>. Implement state machine graphs, fallback routing, and validation loops. Build hybrid retrieval pipelines combining dense semantic embeddings (ChromaDB) with metadata filtering and reciprocal rank fusion to eliminate hallucinations.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["LangGraph", "ChromaDB", "Supervisor Pattern", "State Graphs", "Evaluation Evals", "Groq Llama 3.1"].map((tag, i) => (
                    <span key={i} className="font-mono text-[10px] bg-primary/10 text-cyan-300 border border-primary/20 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#0e1614] border border-white/10 p-5 rounded-xl space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/25 flex items-center justify-center text-secondary">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-base font-bold text-on-surface">
                    Applied ML, NLP &amp; Multimodal Pipelines
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Fine-tune Transformer architectures (<strong>RoBERTa, IndicBERT</strong>) for high-precision classification. Build end-to-end multimodal pipelines with Tesseract OCR, LIME model interpretability, and tabular demand forecasting with LightGBM/Prophet processing millions of retail rows.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["PyTorch", "Hugging Face", "RoBERTa", "Tesseract OCR", "LIME Explainability", "LightGBM", "Prophet"].map((tag, i) => (
                    <span key={i} className="font-mono text-[10px] bg-secondary/10 text-secondary border border-secondary/20 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#0e1614] border border-white/10 p-5 rounded-xl space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                    <Database className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-base font-bold text-on-surface">
                    Production Backend &amp; Scalable APIs
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Architect high-throughput REST APIs using <strong>FastAPI</strong> with Pydantic validation, JWT token security, and background task management. Model relational schemas with PostgreSQL and document stores with MongoDB, optimizing indexing for low-latency queries.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["FastAPI", "PostgreSQL", "MongoDB", "JWT Auth", "Pydantic", "RESTful Design"].map((tag, i) => (
                    <span key={i} className="font-mono text-[10px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#0e1614] border border-white/10 p-5 rounded-xl space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-base font-bold text-on-surface">
                    Full-Stack Integration &amp; Deployment
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Build responsive, component-driven client interfaces in <strong>React.js</strong> and TypeScript. Containerize applications using Docker multi-stage builds and deploy scalable inference spaces to Hugging Face Spaces and cloud platforms with automated CI/CD.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["React.js", "TypeScript", "Docker", "Hugging Face Spaces", "Git CI/CD", "Streamlit"].map((tag, i) => (
                    <span key={i} className="font-mono text-[10px] bg-amber-500/10 text-amber-300 border border-amber-500/20 px-2 py-0.5 rounded">
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
