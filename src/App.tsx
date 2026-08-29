import { useState, useEffect } from "react";
import { ArrowDown, Brain, Sparkles, Terminal, FileText, Check, User } from "lucide-react";
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
    <div className="relative min-h-screen text-on-surface bg-bg-dark font-sans overflow-x-hidden select-none selection:bg-primary selection:text-on-primary">
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
        
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 md:px-20 max-w-7xl mx-auto overflow-hidden"
        >
          <div className="text-center space-y-8 max-w-3xl relative z-10">
            {/* AI Engineering Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 px-4 py-1.5 rounded-full shadow-md glow-teal"
            >
              <Brain className="w-4 h-4 text-primary animate-pulse" />
              <span className="font-mono text-xs text-primary font-semibold tracking-[0.2em] uppercase">
                AI / ML • SOFTWARE ENGINEER
              </span>
            </motion.div>

            {/* Display Headings */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.1]"
              >
                Bharath Reddy <br className="hidden sm:inline" />
                <span className="text-primary text-glow font-black">Ramasani</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-sans text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
              >
                Building production-ready AI and software systems across Machine Learning, Data Science, Generative AI, and scalable backend engineering.
              </motion.p>
            </div>

            {/* Action Callouts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <a
                href="#projects"
                className="bg-primary hover:bg-primary-container text-on-primary font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all glow-teal border border-primary/10 cursor-pointer text-sm"
              >
                Explore Projects
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>
              
              <a
                href="http://drive.google.com/file/d/1siq7BHmpvKMiIXQg2uuNlAGxOrwccjc5/view"
                target="_blank" rel="noreferrer"
                className="border border-outline hover:border-primary/50 text-on-surface font-bold px-6 py-3 rounded-xl backdrop-blur-md hover:bg-white/5 hover:text-primary transition-all cursor-pointer text-sm flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-secondary" /> AI Resume (PDF)
              </a>

              <a
                href="https://drive.google.com/file/d/1IvMVJPDKRZASnS4dKybUEOku8r23NOxI/view?usp=sharing"
                target="_blank" rel="noreferrer"
                className="border border-outline hover:border-primary/50 text-on-surface font-bold px-6 py-3 rounded-xl backdrop-blur-md hover:bg-white/5 hover:text-primary transition-all cursor-pointer text-sm flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-tertiary" /> SDE Resume (PDF)
              </a>
            </motion.div>

            {/* Scannable Profile Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto pt-6 border-t border-white/10"
            >
              <div className="bg-surface-container-low/40 border border-white/10 p-5 rounded-2xl backdrop-blur-md">
                <h3 className="font-display text-xs font-bold text-primary mb-3 uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" /> PROFILE
                </h3>
                <ul className="space-y-2 font-sans text-xs text-on-surface-variant">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                    <span>Computer Science (Data Science) Undergraduate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                    <span>AI / ML Engineer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                    <span>Software / Backend Engineer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                    <span>Full-Stack Developer</span>
                  </li>
                </ul>
              </div>

              <div className="bg-surface-container-low/40 border border-white/10 p-5 rounded-2xl backdrop-blur-md">
                <h3 className="font-display text-xs font-bold text-secondary mb-3 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> INTERESTED IN
                </h3>
                <div className="space-y-2 font-mono text-[11px] text-on-surface-variant">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    <span>Machine Learning & Data Science</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    <span>Deep Learning & NLP</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    <span>Generative AI & LLMs</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    <span>RAG & Agentic AI</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    <span>Multi-Agent Systems</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    <span>Backend & Software Engineering</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating Scroll Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 select-none pointer-events-none">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-on-surface-variant">
              Scroll
            </span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent" />
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
          <div className="font-mono text-[11px] text-on-surface-variant/70 text-center space-y-1">
            <p className="text-on-surface font-medium">Building intelligent systems with practical engineering.</p>
            <p className="text-on-surface-variant/50">© 2026 Bharath Reddy Ramasani. All rights reserved.</p>
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
