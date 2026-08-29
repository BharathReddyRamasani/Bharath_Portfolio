import { Brain, Terminal, Code, Database, BarChart3 } from "lucide-react";
import { SkillCategory } from "../types";

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Generative AI & NLP",
      icon: "brain",
      skills: ["LLMs", "Transformers", "RAG", "LangChain", "LangGraph", "NLP", "Agentic AI"],
    },
    {
      title: "Data Science & Machine Learning",
      icon: "chart",
      skills: ["Pandas", "NumPy", "Scikit-learn", "PyTorch", "Deep Learning", "Feature Engineering", "ML Pipelines", "Time-Series Forecasting"],
    },
    {
      title: "Languages",
      icon: "terminal",
      skills: ["Python", "Java", "JavaScript", "SQL"],
    },
    {
      title: "Full-Stack & APIs",
      icon: "code",
      skills: ["FastAPI", "React.js", "Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    },
    {
      title: "Databases & Tools",
      icon: "database",
      skills: ["MongoDB", "PostgreSQL", "ChromaDB", "Git", "Docker", "Postman", "Streamlit"],
    },
  ];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "brain":
        return <Brain className="w-6 h-6 text-primary" />;
      case "chart":
        return <BarChart3 className="w-6 h-6 text-secondary" />;
      case "terminal":
        return <Terminal className="w-6 h-6 text-tertiary" />;
      case "code":
        return <Code className="w-6 h-6 text-primary" />;
      case "database":
        return <Database className="w-6 h-6 text-secondary" />;
      default:
        return null;
    }
  };

  const getBadgeColors = (iconName: string) => {
    switch (iconName) {
      case "brain":
        return "bg-primary/10 text-primary border-primary/20";
      case "chart":
        return "bg-secondary/10 text-secondary border-secondary/20";
      case "terminal":
        return "bg-tertiary/10 text-tertiary border-tertiary/20";
      case "code":
        return "bg-primary/10 text-primary border-primary/20";
      case "database":
        return "bg-secondary/10 text-secondary border-secondary/20";
      default:
        return "bg-white/5 text-on-surface border-white/10";
    }
  };

  return (
    <section id="skills" className="relative py-20 px-6 md:px-20 max-w-7xl mx-auto z-10 scroll-mt-12">
      <div className="mb-10">
        <span className="font-mono text-xs uppercase text-primary tracking-[0.25em] mb-2 block">
          CURATED TECHNICAL MATRIX
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-on-surface">
          Technical Skills
        </h2>
        <p className="font-sans text-base text-on-surface-variant max-w-2xl mt-3 leading-relaxed">
          Comprehensive technical capabilities across Generative AI, Data Science & Machine Learning, programming languages, full-stack APIs, and database tools.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-surface-container-low/40 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-6 hover:border-primary/30 hover:translate-y-[-4px] transition-all duration-300 shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-white/3 flex items-center justify-center border border-white/10">
              {getCategoryIcon(cat.icon)}
            </div>
            
            <h3 className="font-display text-lg font-bold text-on-surface tracking-tight">
              {cat.title}
            </h3>

            <div className="flex flex-wrap gap-2 mt-2">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className={`font-mono text-[11px] px-3 py-1 rounded-full border ${getBadgeColors(cat.icon)}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
