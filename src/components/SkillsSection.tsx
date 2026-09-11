import { Brain, Sparkles, Code, Database, Wrench, Terminal, Layers } from "lucide-react";

interface SkillCategory {
  title: string;
  badge: string;
  icon: typeof Brain;
  skills: string[];
}

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "AI, Machine Learning & GenAI",
      badge: "Models, Agents & Evals",
      icon: Sparkles,
      skills: [
        "Multi-Agent Systems",
        "LLM Evals",
        "LangGraph",
        "LangChain",
        "LLMs",
        "RAG",
        "Transformers",
        "PyTorch",
        "Scikit-learn",
        "Deep Learning",
        "NLP",
        "Feature Engineering",
        "Time-Series Forecasting",
        "Pandas",
        "NumPy"
      ],
    },
    {
      title: "Software & Backend Development",
      badge: "APIs & Web Architecture",
      icon: Code,
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
      title: "Databases & Tools",
      badge: "Storage & DevOps",
      icon: Database,
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

  const languages = [
    { name: "Python", color: "border-primary/40 text-cyan-300 bg-primary/10" },
    { name: "Java", color: "border-secondary/40 text-secondary bg-secondary/10" },
    { name: "JavaScript", color: "border-amber-400/40 text-amber-300 bg-amber-400/10" },
    { name: "SQL", color: "border-emerald-400/40 text-emerald-300 bg-emerald-400/10" }
  ];

  return (
    <section id="skills" className="relative py-12 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto z-10 scroll-mt-16">
      <div className="space-y-6">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-white/10 pb-4">
          <div>
            <span className="font-mono text-[10px] uppercase text-primary tracking-[0.25em] block font-semibold mb-1">
              TECHNICAL MATRIX
            </span>
            <h2 className="font-display text-2xl font-extrabold text-on-surface">
              Technical Skills
            </h2>
            <p className="font-sans text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
              Core programming languages, AI/ML models, agentic workflows, backend architecture, and database systems.
            </p>
          </div>
        </div>

        {/* PROGRAMMING LANGUAGES — Clean badges without descriptions */}
        <div className="bg-[#0e1614] border border-white/10 p-4 sm:p-5 rounded-xl space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              <h3 className="font-display text-sm font-bold text-on-surface">
                Programming Languages
              </h3>
            </div>
            <span className="font-mono text-[10px] text-primary bg-primary/10 border border-primary/25 px-2 py-0.5 rounded">
              Active Production Stacks
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            {languages.map((lang, idx) => (
              <span
                key={idx}
                className={`font-mono text-xs sm:text-sm font-bold px-4 py-2 rounded-lg border ${lang.color} shadow-sm`}
              >
                {lang.name}
              </span>
            ))}
          </div>
        </div>

        {/* 3 COMPREHENSIVE CATEGORIES (AI/ML/GenAI, Software & Backend, Databases & Tools) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <div
                key={idx}
                className="bg-[#0e1614] border border-white/10 hover:border-primary/30 p-5 rounded-xl flex flex-col justify-between transition-all duration-300 space-y-3"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] text-on-surface-variant/70 uppercase font-semibold">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-sm font-bold text-on-surface">
                    {cat.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[11px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-on-surface font-medium hover:border-primary/40 hover:text-cyan-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2.5 border-t border-white/5 flex items-center gap-1.5 font-mono text-[10px] text-on-surface-variant/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
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
