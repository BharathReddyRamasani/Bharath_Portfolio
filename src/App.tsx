import { useState, useEffect } from "react";
import {
  ArrowDown,
  ArrowRight,
  Brain,
  BarChart3,
  Network,
  Layers,
  Database,
  Code2,
  Sparkles,
  Terminal,
  FileText,
  CheckCircle2
} from "lucide-react";
import NeuralBackground from "./components/NeuralBackground";
import Navbar from "./components/Navbar";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import ResumeModal from "./components/ResumeModal";
import { motion, AnimatePresence } from "motion/react";
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
    const sections = ["home", "experience", "projects", "skills", "education", "achievements", "contact"];
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
    <div className="relative min-h-screen text-on-surface bg-bg-dark font-sans overflow-x-hidden selection:bg-primary selection:text-on-primary">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-tertiary z-[9999] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Interactive Floating Canvas */}
      <NeuralBackground />

      {/* Ambient noise & blur glow effects */}
      <div className="noise-overlay" />
      <div className="ambient-blob-1" />
      <div className="ambient-blob-2" />

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setResumeOpen(true)} activeSection={activeSection} />

      {/* Main Sections */}
      <main className="relative z-10">

        {/* HERO SECTION - SLIDE 1 (Exact Single Slide Fit) */}
        <section
          id="home"
          className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between pt-16 sm:pt-20 pb-3 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto overflow-hidden"
        >
          {/* Top Banner Accent: Tag on Left */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-1.5 sm:mb-2 relative z-10 w-full">
            {/* Top Left Tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs text-primary bg-primary/10 border border-primary/25 px-3 py-1 rounded-lg tracking-widest uppercase shadow-sm"
            >
              <Code2 className="w-3.5 h-3.5 text-primary" />
              <span>BUILD | LEARN | SOLVE | CREATE</span>
            </motion.div>
          </div>

          {/* Hero Main Grid: Left Content, Right Visual Screen */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center relative z-10">

            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-3 text-left">
              {/* Display Title */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-1.5"
              >
                <h1 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-on-surface leading-[1.06]">
                  BHARATH REDDY <br />
                  <span className="text-primary text-glow font-black">RAMASANI</span>
                </h1>

                {/* Subheading & Horizontal Cyan Bar */}
                <div className="pt-1.5 pb-0.5 space-y-1.5">
                  <h2 className="font-display text-sm sm:text-base font-extrabold tracking-widest text-on-surface uppercase flex items-center gap-2.5">
                    <span className="text-cyan-300">AI/ML</span>
                    <span className="text-primary font-black text-xs">■</span>
                    <span className="text-white">SOFTWARE ENGINEER</span>
                  </h2>
                  <div className="flex items-center gap-1.5">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-primary via-cyan-400 to-transparent rounded-full glow-teal" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                  </div>
                </div>
              </motion.div>

              {/* Teaser Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-xs sm:text-[13.5px] text-on-surface-variant max-w-xl leading-relaxed"
              >
                Building production-oriented AI and software systems across <span className="text-cyan-300 font-semibold">Machine Learning</span>, <span className="text-primary font-semibold">Generative AI</span>, and <span className="text-white font-semibold">scalable backend engineering</span>.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="space-y-3 pt-1"
              >
                <div className="flex flex-wrap items-center gap-3">
                  {/* Primary CTA Button */}
                  <a
                    href="#projects"
                    className="bg-gradient-to-r from-primary/25 via-primary/15 to-transparent hover:from-primary/35 hover:to-primary/20 text-primary border-2 border-primary font-mono font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(79,219,200,0.25)] text-xs sm:text-sm tracking-wider uppercase cursor-pointer"
                  >
                    <span>EXPLORE MY PORTFOLIO</span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </a>

                  {/* Secondary Modal Trigger */}
                  <button
                    onClick={() => setResumeOpen(true)}
                    className="bg-white/5 hover:bg-white/10 text-on-surface border border-white/20 hover:border-primary/50 px-4 py-2.5 rounded-xl transition-all hover:scale-105 active:scale-95 text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer backdrop-blur-md shadow-sm"
                  >
                    <FileText className="w-4 h-4 text-primary" />
                    <span>View Digital Resume</span>
                  </button>
                </div>

                {/* Smaller Direct PDF Links (Verified Google Drive URLs) */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="text-[10.5px] uppercase tracking-wider text-on-surface-variant/70 font-semibold flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-primary" />
                    PDF RESUMES:
                  </span>
                  <a
                    href="https://drive.google.com/file/d/1gTVsIZOMOwnpFQX5tOvQRn7jKDi4EtLc/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-primary/10 hover:bg-primary/20 text-cyan-300 border border-primary/25 hover:border-primary transition-all text-xs font-semibold hover:scale-105"
                  >
                    <FileText className="w-3 h-3 text-primary" /> AI/ML Resume
                  </a>
                  <span className="text-white/20">•</span>
                  <a
                    href="https://drive.google.com/file/d/13SRI9L4a9YpSkCKU9U3A2USuOFb1975g/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/25 hover:border-secondary transition-all text-xs font-semibold hover:scale-105"
                  >
                    <FileText className="w-3 h-3 text-secondary" /> Software Resume
                  </a>
                </div>

                {/* PROMINENTLY HIGHLIGHTED PROGRAMMING LANGUAGES */}


              </motion.div>
            </div>

            {/* Right Visual Column (Laptop on Desk with Pen & Notebook) */}
            {/* Right Visual Column (Laptop on Desk with Pen & Notebook) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-center"
            >
              {/* Handwritten cursive caption positioned clearly above laptop desk setup */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-script text-2xl sm:text-3xl font-bold text-cyan-300 -rotate-2 select-none flex flex-col items-center lg:items-end mb-2 pr-2"
                style={{ textShadow: "0 0 16px rgba(79, 219, 200, 0.7), 0 0 32px rgba(79, 219, 200, 0.3)" }}
              >
                <span className="tracking-wide">Turning Ideas into Impact</span>
                <svg className="w-36 sm:w-44 h-2.5 text-cyan-400" style={{ filter: "drop-shadow(0 0 6px rgba(79, 219, 200, 0.8))" }} viewBox="0 0 100 8" fill="none">
                  <path d="M2 6 Q 50 1, 98 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </motion.div>

              {/* Minimalist Laptop Placed on Desk with Pen & Notebook */}
              <div className="relative w-full max-w-[430px] rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/20 group hover:border-primary/60 transition-all duration-500 bg-[#070e0d]">
                {/* Ambient Soft Mesh Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/15 rounded-full blur-2xl pointer-events-none group-hover:bg-primary/25 transition-all" />

                {/* Desk Setup Image */}
                <div className="relative overflow-hidden aspect-[16/10.5] w-full">
                  <img
                    src={laptopDeskImg}
                    alt="Laptop open on desk with ideas, models, products, real impact on screen, pen, and notebook with better systems brighter tomorrow"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-100 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070e0d]/35 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>

          </div>

          {/* 6 DOMAIN FEATURE CARDS (Responsive & Effective Grid - AI/ML + SWE) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-white/5 relative z-10"
          >
            {[
              { title: "Generative AI", icon: Brain, subtitle: "RAG & LLMs" },
              { title: "ML & Deep Learning", icon: BarChart3, subtitle: "Pipelines & Neural Nets" },
              { title: "Agentic & Multi-Agent AI", icon: Network, subtitle: "LangGraph Workflows" },
              { title: "Software Engineering", icon: Layers, subtitle: "System Architecture" },
              { title: "Backend & APIs", icon: Database, subtitle: "FastAPI, REST & JWT" },
              { title: "Full-Stack Dev", icon: Code2, subtitle: "React & Architecture" },
            ].map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#091513]/85 backdrop-blur-md border border-primary/20 hover:border-primary/60 rounded-xl p-2.5 flex flex-col items-center text-center gap-1.5 transition-all duration-300 hover:-translate-y-0.5 group shadow-md shadow-black/40"
                >
                  {/* Icon with Glowing Outline */}
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 group-hover:border-primary group-hover:shadow-[0_0_10px_rgba(79,219,200,0.3)] transition-all">
                    <IconComp className="w-4 h-4 text-primary" />
                  </div>
                  <div className="space-y-0">
                    <h3 className="font-display text-[11px] sm:text-xs font-bold text-on-surface group-hover:text-primary transition-colors leading-tight">
                      {card.title}
                    </h3>
                    <p className="font-mono text-[8.5px] sm:text-[9px] text-on-surface-variant/70 truncate">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </section>

        {/* ABOUT ME & FOCUS - SLIDE 2 (Dedicated Single Slide Fit) */}
        <section id="about" className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center py-8 sm:py-12 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto z-10 border-t border-white/5 scroll-mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">

            {/* Left Column: Recruiter Narrative (6 cols) */}
            <div className="lg:col-span-6 space-y-3">
              <span className="font-mono text-[11px] uppercase text-primary tracking-[0.25em] block font-semibold">
                ENGINEERING PROFILE
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-on-surface">
                About Me
              </h2>
              <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                I'm a Computer Science (Data Science) undergraduate focused on building intelligent software systems. My work spans machine learning, deep learning, Generative AI, RAG, multi-agent systems, and backend engineering. I enjoy taking systems from model development and experimentation through APIs, databases, deployment, and user-facing applications.
              </p>

              {/* Core CS Credentials Card */}
              <div className="bg-surface-container-low/40 border border-white/10 p-3 sm:p-3.5 rounded-xl backdrop-blur-md flex items-center justify-between gap-3">
                <div>
                  <span className="font-mono text-[9px] text-secondary font-bold uppercase tracking-wider block">
                    Competitive Programming
                  </span>
                  <span className="font-display text-xs sm:text-sm font-bold text-on-surface">
                    LeetCode Contest Rating: 1600+
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400 block mt-0.5">
                    Top 16% Globally • 300+ Problems Solved
                  </span>
                </div>
                <a
                  href="https://leetcode.com/u/Bharathreddy_Ramasani/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-primary hover:underline border border-primary/25 bg-primary/10 px-2.5 py-1 rounded-lg shrink-0 font-semibold"
                >
                  Profile →
                </a>
              </div>
            </div>

            {/* Right Column: Areas of Focus Grid (6 cols) */}
            <div className="lg:col-span-6 bg-surface-container-low/40 border border-white/10 p-4 sm:p-5 rounded-xl backdrop-blur-md space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <h3 className="font-display text-[11px] font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  AREAS OF FOCUS
                </h3>
                <span className="font-mono text-[9px] text-on-surface-variant/70">
                  Applied Engineering
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[11px]">
                <div className="flex items-center gap-2 text-on-surface bg-black/20 p-2 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Machine Learning &amp; Features</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface bg-black/20 p-2 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Deep Learning &amp; NLP</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface bg-black/20 p-2 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Generative AI &amp; LLM Evals</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface bg-black/20 p-2 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>RAG &amp; Multi-Agent Systems</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface bg-black/20 p-2 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Backend &amp; Software Engineering</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface bg-black/20 p-2 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Full-Stack Systems</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* WORK EXPERIENCE SECTION */}
        <ExperienceSection />

        {/* FEATURED PROJECTS SECTION */}
        <ProjectsSection />

        {/* TECHNICAL SKILLS SECTION */}
        <SkillsSection />

        {/* EDUCATION SECTION */}
        <EducationSection />

        {/* ACHIEVEMENTS & CERTIFICATIONS SECTION */}
        <AchievementsSection />

        {/* SECURE COMM-CHANNEL (CONTACT) */}
        <ContactSection />
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 w-full py-12 bg-surface-container-lowest/40 backdrop-blur-lg border-t border-white/5 mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 gap-8 max-w-7xl mx-auto">
          {/* Brand */}
          <div className="font-mono text-primary flex items-center gap-1.5 font-bold text-sm tracking-widest">
            <Terminal className="w-4.5 h-4.5 text-primary" />
            <span>RBR</span>
          </div>

          {/* Tagline & Copyright */}
          <div className="font-mono text-[11px] text-on-surface-variant/80 text-center space-y-1.5">
            <p className="text-primary font-semibold">Open to AI/ML, Software Engineering, Backend, and Data-driven opportunities.</p>
            <p className="text-on-surface-variant/60">Building production-oriented AI and software systems • © 2026 Bharath Reddy Ramasani</p>
          </div>

          {/* Index links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/bharathreddyramasani/"
              target="_blank"
              rel="noreferrer"
              className="text-on-surface-variant/80 hover:text-primary transition-all hover:-translate-y-0.5 text-xs font-mono"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/BharathReddyRamasani"
              target="_blank"
              rel="noreferrer"
              className="text-on-surface-variant/80 hover:text-primary transition-all hover:-translate-y-0.5 text-xs font-mono"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>

      {/* DIGITAL RESUME PREVIEW MODAL */}
      <AnimatePresence>
        {resumeOpen && (
          <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
