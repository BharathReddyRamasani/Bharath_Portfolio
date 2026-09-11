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
      title: "Generative AI & Agentic Systems",
      badge: "RAG & Agents",
      icon: Sparkles,
      skills: ["LangGraph", "LangChain", "LLMs (Llama 3.1, Gemini)", "Multi-Agent Architectures", "ChromaDB (Vector DB)", "Semantic Retrieval", "Ragas Evals (Faithfulness, MRR)"],
    },
    {
      title: "AI & Machine Learning",
      badge: "Core ML & DL",
      icon: Brain,
      skills: ["PyTorch", "Hugging Face Transformers", "Scikit-learn", "LightGBM", "RoBERTa & IndicBERT", "Tesseract OCR", "LIME (Explainable AI)", "Model Fine-Tuning"],
    },
    {
      title: "Backend & Systems",
      badge: "APIs & Services",
      icon: Code,
      skills: ["FastAPI", "RESTful APIs", "Pydantic", "JWT Authentication", "Asynchronous Programming", "Microservice Design", "System Trade-offs"],
    },
    {
      title: "Databases & Storage",
      badge: "SQL & NoSQL",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "SQLite", "Vector Stores (ChromaDB)", "Database Indexing", "ACID Transactions", "Data Modeling"],
    },
    {
      title: "DevOps & Infrastructure",
      badge: "Deployment & CI",
      icon: Wrench,
      skills: ["Docker (Multi-Stage)", "Hugging Face Spaces", "Git & GitHub", "Streamlit", "Postman", "Linux Shell"],
    },
  ];

  const languages = [
    {
      name: "Python",
      role: "Flagship / Core Engineering",
      usage: "AI/ML, LangGraph, FastAPI, PyTorch, LightGBM, Pandas",
      color: "border-primary/40 text-cyan-300 bg-primary/10"
    },
    {
      name: "Java",
      role: "Algorithms & OOP",
      usage: "Data Structures, Competitive Programming, OOP Design Patterns",
      color: "border-secondary/40 text-secondary bg-secondary/10"
    },
    {
      name: "JavaScript",
      role: "Frontend & Full-Stack",
      usage: "React.js, TypeScript, REST Integration, Responsive Interfaces",
      color: "border-amber-400/40 text-amber-300 bg-amber-400/10"
    },
    {
      name: "SQL",
      role: "Relational Modeling",
      usage: "PostgreSQL, Normalized Schemas, Complex Joins, Aggregations",
      color: "border-emerald-400/40 text-emerald-300 bg-emerald-400/10"
    }
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
              Categorized technologies and tools applied in production-oriented projects and research pipelines.
            </p>
          </div>
        </div>

        {/* CORE PROGRAMMING LANGUAGES SHOWCASE */}
        <div className="bg-[#0e1614] border border-white/10 p-4 sm:p-5 rounded-xl space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              <h3 className="font-display text-sm font-bold text-on-surface">
                Core Programming Languages
              </h3>
            </div>
            <span className="font-mono text-[10px] text-primary bg-primary/10 border border-primary/25 px-2 py-0.5 rounded">
              Active Production Stacks
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                className="bg-black/30 border border-white/10 hover:border-primary/40 p-3 rounded-lg transition-all space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded border ${lang.color}`}>
                    {lang.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
                <p className="font-mono text-[11px] text-on-surface font-semibold pt-1">
                  {lang.role}
                </p>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                  {lang.usage}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5 CATEGORIZED SKILL GROUPS (No self-ratings or progress bars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {skillCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <div
                key={idx}
                className="bg-[#0e1614] border border-white/10 hover:border-primary/30 p-4 rounded-xl flex flex-col justify-between transition-all duration-300 space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] text-on-surface-variant/70 uppercase">
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
                        className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-on-surface"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 font-mono text-[10px] text-on-surface-variant/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  <span>Applied in Flagship &amp; Supporting Systems</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
