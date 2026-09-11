import { Brain, Sparkles, Code, Database, Wrench, Trophy, ExternalLink, Terminal } from "lucide-react";

interface SemanticSkillGroup {
  title: string;
  badge: string;
  icon: "ai" | "genai" | "backend" | "data" | "engineering";
  skills: string[];
}

export default function SkillsSection() {
  const skillCategories: SemanticSkillGroup[] = [
    {
      title: "AI / ML",
      badge: "Core ML",
      icon: "ai",
      skills: ["Machine Learning", "Deep Learning", "NLP", "Transformers", "PyTorch", "Scikit-learn", "Feature Engineering"],
    },
    {
      title: "Generative AI",
      badge: "Agents & RAG",
      icon: "genai",
      skills: ["LLMs", "RAG", "LangChain", "LangGraph", "Agentic AI", "Multi-Agent Systems", "LLM Evals"],
    },
    {
      title: "Backend & Full-Stack",
      badge: "APIs & Systems",
      icon: "backend",
      skills: ["FastAPI", "REST APIs", "Node.js", "Express.js", "JWT", "React.js"],
    },
    {
      title: "Data",
      badge: "DBs & Vectors",
      icon: "data",
      skills: ["Pandas", "NumPy", "PostgreSQL", "MongoDB", "Vector Databases (ChromaDB)"],
    },
    {
      title: "Engineering",
      badge: "DevOps & Tools",
      icon: "engineering",
      skills: ["Docker", "Git", "Postman", "Streamlit"],
    },
  ];

  const languages = [
    {
      name: "Python",
      role: "Flagship / Core Engineering",
      usage: "AI/ML, FastAPI, PyTorch, LangGraph, Pandas",
      color: "border-primary/40 text-primary bg-primary/10",
      accent: "bg-primary"
    },
    {
      name: "Java",
      role: "Algorithms & OOP",
      usage: "Data Structures, Core OOP, Systems Programming",
      color: "border-secondary/40 text-secondary bg-secondary/10",
      accent: "bg-secondary"
    },
    {
      name: "JavaScript",
      role: "Frontend & Full-Stack",
      usage: "React.js, Interactive UIs, Asynchronous APIs",
      color: "border-amber-400/40 text-amber-300 bg-amber-400/10",
      accent: "bg-amber-400"
    },
    {
      name: "SQL",
      role: "Relational Modeling",
      usage: "PostgreSQL, Complex Aggregations, Schema Design",
      color: "border-emerald-400/40 text-emerald-300 bg-emerald-400/10",
      accent: "bg-emerald-400"
    }
  ];

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case "ai":
        return <Brain className="w-4 h-4 text-primary" />;
      case "genai":
        return <Sparkles className="w-4 h-4 text-secondary" />;
      case "backend":
        return <Code className="w-4 h-4 text-tertiary" />;
      case "data":
        return <Database className="w-4 h-4 text-primary" />;
      case "engineering":
        return <Wrench className="w-4 h-4 text-secondary" />;
      default:
        return null;
    }
  };

  const getBadgeColors = (icon: string) => {
    switch (icon) {
      case "ai":
        return "bg-primary/10 text-primary border-primary/20";
      case "genai":
        return "bg-secondary/10 text-secondary border-secondary/20";
      case "backend":
        return "bg-tertiary/10 text-tertiary border-tertiary/20";
      case "data":
        return "bg-primary/10 text-primary border-primary/20";
      case "engineering":
        return "bg-secondary/10 text-secondary border-secondary/20";
      default:
        return "bg-white/5 text-on-surface border-white/10";
    }
  };

  return (
    <section id="skills" className="relative py-8 sm:py-12 px-4 sm:px-6 md:px-10 lg:px-14 max-w-7xl mx-auto z-10 scroll-mt-12">
      
      {/* SECTION HEADER (Compact) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 gap-3 border-b border-white/10 pb-2.5">
        <div>
          <span className="font-mono text-[10px] uppercase text-primary tracking-[0.25em] mb-1 block font-semibold">
            CURATED TECHNICAL MATRIX
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-extrabold text-on-surface">
            Technical Skills
          </h2>
          <p className="font-sans text-[11px] sm:text-xs text-on-surface-variant max-w-2xl mt-0.5 leading-relaxed">
            Semantically organized capabilities across core programming languages, AI/ML, Generative AI, backend engineering, and databases.
          </p>
        </div>

        {/* LeetCode Milestone Badge */}
        <div className="bg-surface-container-low/60 border border-primary/25 px-3 py-1.5 rounded-xl backdrop-blur-md shrink-0 flex items-center gap-2.5 shadow-md">
          <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/30 text-primary">
            <Trophy className="w-3 h-3" />
          </div>
          <div>
            <span className="font-mono text-[8.5px] text-primary uppercase font-bold tracking-wider block leading-none">
              LeetCode Milestone
            </span>
            <span className="font-display text-[11px] font-bold text-on-surface block mt-0.5">
              1600+ Rating &bull; Top 16% Globally
            </span>
          </div>
          <a
            href="https://leetcode.com/u/Bharathreddy_Ramasani/"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:text-primary-container transition-colors ml-1"
            title="View LeetCode Profile"
          >
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* PROMINENTLY HIGHLIGHTED PROGRAMMING LANGUAGES SHOWCASE */}
      <div className="mb-5 bg-surface-container-low/50 border border-primary/30 p-3.5 sm:p-4 rounded-xl backdrop-blur-md shadow-lg">
        <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-primary" />
            <h3 className="font-display text-xs sm:text-sm font-bold text-on-surface">
              Core Programming Languages
            </h3>
          </div>
          <span className="font-mono text-[9px] text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full font-bold">
            Daily Production Tools
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {languages.map((lang, idx) => (
            <div
              key={idx}
              className="bg-black/40 border border-white/10 hover:border-primary/40 p-2.5 rounded-lg transition-all hover:-translate-y-0.5 group shadow-sm"
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded-md border ${lang.color} shadow-sm`}>
                  {lang.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              <p className="font-mono text-[9.5px] text-on-surface font-semibold mb-0.5">
                {lang.role}
              </p>
              <p className="font-sans text-[10.5px] text-on-surface-variant/80 leading-snug">
                {lang.usage}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5 SEMANTIC SKILL CATEGORIES (Compact & Dense) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-surface-container-low/40 backdrop-blur-md border border-white/10 p-3 rounded-xl flex flex-col justify-between hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 shadow-md group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/40 transition-colors">
                  {getCategoryIcon(cat.icon)}
                </div>
                <span className="font-mono text-[9px] text-on-surface-variant/70 uppercase">
                  {cat.badge}
                </span>
              </div>
              
              <h3 className="font-display text-sm font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-1 pt-0.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`font-mono text-[10px] px-2 py-0.5 rounded border ${getBadgeColors(cat.icon)} font-medium`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Subtle Indicator */}
            <div className="pt-3 mt-3 border-t border-white/5 flex items-center gap-1.5 font-mono text-[9px] text-on-surface-variant/60">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              <span>Applied in Projects</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
