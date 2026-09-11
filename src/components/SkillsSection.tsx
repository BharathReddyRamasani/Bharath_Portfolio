import { useState } from "react";
import { Brain, Sparkles, Code, Database, Terminal, Laptop, CheckCircle2 } from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  icon: typeof Brain;
  summary: string;
  skills: string[];
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const skillCategories: SkillCategory[] = [
    {
      id: "ds-ml",
      title: "Data Science & Machine Learning",
      badge: "Data Science & ML",
      icon: Brain,
      summary: "End-to-end ML pipelines, multi-series autoregressive time-series forecasting, and deep neural networks.",
      skills: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "PyTorch",
        "Deep Learning",
        "Feature Engineering",
        "Time-Series Forecasting",
        "ML Pipelines"
      ],
    },
    {
      id: "genai",
      title: "Generative AI & NLP",
      badge: "Models, Agents & Evals",
      icon: Sparkles,
      summary: "Supervisor-worker multi-agent topologies, Agentic RAG, semantic retrieval, and LLM evaluation.",
      skills: [
        "Multi-Agent Systems",
        "LLM Evals",
        "LangGraph",
        "LangChain",
        "LLMs",
        "RAG",
        "Transformers",
        "NLP",
        "Agentic AI"
      ],
    },
    {
      id: "software",
      title: "Software & Backend Development",
      badge: "APIs & Web Architecture",
      icon: Code,
      summary: "High-throughput asynchronous microservices, REST APIs, JWT authentication, and modern React interfaces.",
      skills: [
        "FastAPI",
        "Node.js",
        "Express.js",
        "React.js",
        "REST APIs",
        "JWT Authentication",
        "MVC Architecture",
        "HTML",
        "CSS"
      ],
    },
    {
      id: "databases",
      title: "Databases & Tools",
      badge: "Storage & DevOps",
      icon: Database,
      summary: "Relational modeling, document stores, dense vector indexing, Docker containerization, and Streamlit BI.",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "ChromaDB",
        "Docker",
        "Git",
        "GitHub",
        "Postman",
        "Streamlit"
      ],
    },
  ];

  const languages = ["Python", "Java", "JavaScript", "SQL"];

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="relative py-16 sm:py-20 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto z-10 scroll-mt-20">
      <div className="space-y-8">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-slate-200 pb-4">
          <div>
            <span className="font-mono text-[10px] uppercase text-rose-600 tracking-[0.25em] block font-semibold mb-1">
              04. SKILLS • TECHNICAL ARCHITECTURE &amp; SYSTEMS MATRIX
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Technical Skills Bento
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-2xl mt-1 leading-relaxed">
              Core programming languages, AI/ML models, agentic workflows, backend architecture, and database systems.
            </p>
          </div>

          {/* CATEGORY FILTER TABS */}
          <div className="flex flex-wrap gap-1.5 pt-2 sm:pt-0">
            {[
              { id: "all", label: "All Skills" },
              { id: "ds-ml", label: "DS & ML" },
              { id: "genai", label: "GenAI & NLP" },
              { id: "software", label: "Backend & Web" },
              { id: "databases", label: "DevOps & DBs" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-rose-600 text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-rose-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* TOP SPOTLIGHT ROW: PROGRAMMING LANGUAGES + CODING CHARACTER BANNER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Languages Box (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 p-5 sm:p-6 rounded-2xl space-y-3.5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-rose-600" />
                  <h3 className="font-display text-sm font-bold text-slate-900">
                    Core Programming Languages
                  </h3>
                </div>
                <span className="font-mono text-[10px] text-rose-600 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded font-bold">
                  Active Production Stacks
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-rose-300 hover:bg-rose-50/30 transition-all shadow-2xs group"
                  >
                    <span className="font-mono text-sm font-bold text-slate-900 group-hover:text-rose-600 block">
                      {lang}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      Production
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Applied daily across algorithm contests, microservices, and AI training</span>
            </div>
          </div>

          {/* Coding Character Spotlight Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm flex items-center gap-4 hover:border-rose-300 transition-colors">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shrink-0 p-1">
              <img
                src="/assets/skills-coding.jpg"
                alt="Bharath coding on laptop"
                className="w-full h-full object-contain filter drop-shadow-xs"
              />
            </div>
            <div className="space-y-1 text-left">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-rose-600 flex items-center gap-1">
                <Laptop className="w-3 h-3 text-rose-600" />
                Engineering Workflow
              </span>
              <h4 className="font-display text-sm font-bold text-slate-900">
                Full-Stack AI Implementation
              </h4>
              <p className="font-sans text-xs text-slate-600 leading-snug">
                From PyTorch model architecture and LangGraph state graphs to async FastAPI endpoints and responsive React frontends.
              </p>
            </div>
          </div>

        </div>

        {/* 4 TECHNICAL SECTIONS: Data Science & ML, Generative AI & NLP, Software & Backend, Databases & Tools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 hover:border-rose-300 p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 space-y-4 shadow-sm hover:shadow-md group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 group-hover:scale-105 transition-transform">
                      <IconComp className="w-4.5 h-4.5" />
                    </div>
                    <span className="font-mono text-[10px] text-slate-500 uppercase font-bold">
                      {cat.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 leading-tight mb-1">
                      {cat.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-600 leading-relaxed">
                      {cat.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 font-medium hover:border-rose-300 hover:text-rose-600 hover:bg-rose-50/40 transition-colors shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 font-mono text-[10px] text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span>Applied in Production Systems</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
