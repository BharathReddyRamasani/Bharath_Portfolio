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

        {/* HERO SECTION — Credibility & Proof of Work in <7 Seconds */}
        <section
          id="home"
          className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-24 sm:pt-28 pb-12 px-4 sm:px-8 md:px-12 lg:px-16 max-w-6xl mx-auto"
        >
          {/* Top Row: Availability Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-primary bg-primary/10 border border-primary/25 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open to Opportunities • AI/ML &amp; Software Engineering</span>
            </div>

            <div className="hidden sm:flex items-center gap-3 font-mono text-xs text-on-surface-variant">
              <span>Hyderabad, India</span>
              <span className="text-white/20">•</span>
              <span>B.Tech CSE (Data Science) 2027</span>
            </div>
          </div>

          {/* Main Hero Header */}
          <div className="space-y-4 max-w-4xl">
            <div>
              <span className="font-mono text-xs sm:text-sm text-primary tracking-[0.2em] uppercase font-semibold block mb-2">
                Portfolio &amp; Engineering Work
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface leading-[1.08]">
                Bharath Reddy <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-secondary">
                  Ramasani
                </span>
              </h1>
            </div>

            {/* Role & Positioning */}
            <div className="space-y-3 pt-1">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base font-display font-bold">
                <span className="text-cyan-300">AI / ML Engineer</span>
                <span className="text-primary/60 font-black">•</span>
                <span className="text-white">Software Engineer</span>
                <span className="text-primary/60 font-black">•</span>
                <span className="text-secondary">Agentic AI &amp; Backend Systems</span>
              </div>

              <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-3xl">
                Building production-oriented AI and software systems across Multi-Agent Systems,
                Retrieval-Augmented Generation (RAG), Machine Learning, and scalable backend engineering.
              </p>
            </div>

            {/* CTAs & Direct Resume Links */}
            <div className="pt-3 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#experience"
                  className="bg-primary text-on-primary font-display font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-cyan-300 transition-all flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>View Experience</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#projects"
                  className="bg-surface-container-high/80 hover:bg-surface-container-highest text-on-surface border border-white/10 hover:border-primary/40 font-display font-bold text-sm px-5 py-2.5 rounded-lg transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>View Projects</span>
                </a>

                <button
                  onClick={() => setResumeOpen(true)}
                  className="bg-surface-container-high/80 hover:bg-surface-container-highest text-on-surface border border-white/10 hover:border-primary/40 font-display font-bold text-sm px-5 py-2.5 rounded-lg transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-primary" />
                  <span>Digital Resume</span>
                </button>
              </div>

              {/* Direct PDF Downloads / Verified Links */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono pt-1">
                <span className="text-[11px] uppercase tracking-wider text-on-surface-variant/70 font-semibold flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-primary" />
                  Direct PDF Resumes:
                </span>
                <a
                  href="https://drive.google.com/file/d/1gTVsIZOMOwnpFQX5tOvQRn7jKDi4EtLc/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-primary/10 hover:bg-primary/20 text-cyan-300 border border-primary/25 hover:border-primary transition-all font-semibold"
                >
                  <span>AI/ML Resume</span>
                  <ExternalLink className="w-3 h-3 text-primary" />
                </a>
                <span className="text-white/20">•</span>
                <a
                  href="https://drive.google.com/file/d/13SRI9L4a9YpSkCKU9U3A2USuOFb1975g/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/25 hover:border-secondary transition-all font-semibold"
                >
                  <span>Software Engineering Resume</span>
                  <ExternalLink className="w-3 h-3 text-secondary" />
                </a>
              </div>

              {/* Verified Profile Links */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono">
                <a
                  href="https://github.com/BharathReddyRamasani"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-primary" />
                  <span>GitHub</span>
                </a>
                <span className="text-white/20">•</span>
                <a
                  href="https://www.linkedin.com/in/bharathreddyramasani/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-secondary" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-white/20">•</span>
                <a
                  href="https://leetcode.com/u/Bharathreddy_Ramasani/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-white transition-colors"
                >
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  <span>LeetCode 1600+ (Top 16%)</span>
                </a>
                <span className="text-white/20">•</span>
                <a
                  href="mailto:ramasanibharathreddy2004@gmail.com"
                  className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* 4 CORE TECHNICAL PILLARS — Replaces generic domain cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-10 pt-6 border-t border-white/10">
            {[
              {
                title: "Multi-Agent Systems",
                spec: "LangGraph 7-Agent Architecture",
                desc: "Supervisor routing, state graphs, research synthesis, tool execution",
                icon: Network,
                tag: "Agentic AI"
              },
              {
                title: "Production RAG & LLMs",
                spec: "Vector Search & Evaluation",
                desc: "ChromaDB, hybrid retrieval, hallucination reduction, faithfulness eval",
                icon: Brain,
                tag: "GenAI"
              },
              {
                title: "ML & Deep Learning",
                spec: "PyTorch & Transformers",
                desc: "RoBERTa fine-tuning, IndicBERT, multimodal OCR, sales forecasting",
                icon: Cpu,
                tag: "Core ML"
              },
              {
                title: "Backend & Scalable APIs",
                spec: "FastAPI, PostgreSQL & Docker",
                desc: "JWT authentication, REST services, MongoDB, containerized deployments",
                icon: Database,
                tag: "Software Eng"
              }
            ].map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0e1614] border border-white/10 hover:border-primary/40 rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5 group shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:border-primary/50 transition-colors">
                        <IconComp className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-mono text-[10px] text-primary/80 bg-primary/5 border border-primary/20 px-2 py-0.5 rounded">
                        {pillar.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="font-mono text-[11px] text-secondary font-medium mt-0.5">
                        {pillar.spec}
                      </p>
                    </div>

                    <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
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
