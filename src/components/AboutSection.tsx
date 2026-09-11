import { GraduationCap, Award, Brain, CodeXml, Sparkles, Terminal } from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  const personalFacts = [
    {
      icon: GraduationCap,
      label: "Academic Foundation",
      value: "B.Tech CSE (Data Science)",
      sub: "CVR College of Engineering • CGPA 8.81 / 10.0",
      color: "text-rose-600 bg-rose-50 border-rose-200"
    },
    {
      icon: Award,
      label: "Industry Recognition",
      value: "Celebal Excellence Distinction",
      sub: "Enterprise Demand Forecasting Platform (900K+ rows)",
      color: "text-emerald-600 bg-emerald-50 border-emerald-200"
    },
    {
      icon: CodeXml,
      label: "Algorithmic Rigor",
      value: "LeetCode 1600+ (Top 16%)",
      sub: "300+ problems solved across DP, graphs & trees",
      color: "text-blue-600 bg-blue-50 border-blue-200"
    },
    {
      icon: Brain,
      label: "Research Specialization",
      value: "Agentic AI & Multimodal NLP",
      sub: "LangGraph supervisor topologies & Transformer tuning",
      color: "text-amber-600 bg-amber-50 border-amber-200"
    }
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto z-10 scroll-mt-20">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-slate-200 pb-4 mb-10">
        <div>
          <span className="font-mono text-[10px] uppercase text-rose-600 tracking-[0.25em] block font-semibold mb-1">
            01. ABOUT • BACKGROUND &amp; PHILOSOPHY
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
            About Me
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-2xl mt-1 leading-relaxed">
            A software and machine learning engineer bridging academic literature synthesis with enterprise-scale production architectures.
          </p>
        </div>
      </div>

      {/* TWO COLUMN EDITORIAL STORY LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* CHARACTER ILLUSTRATION WITH AMBIENT GLOW & GENTLE FLOAT (5 Cols) */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center order-2 lg:order-1">
          {/* Ambient Lighting Rings */}
          <div className="absolute -inset-6 bg-gradient-to-br from-rose-500/15 via-blue-500/10 to-amber-500/15 rounded-full blur-2xl opacity-80 pointer-events-none" />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-square rounded-3xl p-3 bg-white border border-slate-200/90 shadow-xl shadow-slate-200/80 group hover:border-rose-300 transition-colors"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
              <img
                src="/assets/about-story.jpg"
                alt="Bharath Reddy Ramasani - In Thoughtful Discussion"
                className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-700"
              />

              {/* Status Badge */}
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md border border-slate-200 px-3 py-1.5 rounded-full shadow-xs flex items-center gap-1.5 font-mono text-[10.5px] font-bold text-slate-800">
                <Terminal className="w-3.5 h-3.5 text-rose-600" />
                <span>Full-Stack &amp; AI Engineer</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* EDITORIAL STORY & FACTS (7 Cols) */}
        <div className="lg:col-span-7 space-y-5 text-left order-1 lg:order-2">
          
          <div className="space-y-2">
            <span className="font-mono text-xs text-rose-600 font-bold uppercase tracking-wider block">
              Architecting Resilient Intelligence
            </span>
            <h3 className="font-display text-xl sm:text-2xl lg:text-[26px] font-bold text-slate-900 leading-snug">
              Bridging Research-Grade AI Models with Resilient, Real-Time Enterprise Systems
            </h3>
          </div>

          <div className="space-y-3.5 font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              I am a final-year Computer Science and Engineering (Data Science) scholar at <strong>CVR College of Engineering, Hyderabad</strong>, maintaining a cumulative CGPA of <strong>8.81 / 10.0</strong>. My engineering practice is focused on solving mission-critical system challenges at the convergence of deterministic software architectures and probabilistic machine learning models.
            </p>
            <p>
              During my tenure at <strong>Celebal Technologies</strong> as a Data Science Intern, I engineered and deployed an enterprise-grade Retail Demand Forecasting &amp; Generative AI platform predicting SKU-level demand across 500 store-SKUs (900K+ historical records) with a verified <strong>7.37% MAPE</strong> and <strong>0.974 R²</strong>, earning the <strong>Celebal Excellence Distinction</strong> for top technical execution.
            </p>
            <p>
              My core technical competencies center on <strong>autonomous multi-agent orchestration</strong> using LangGraph supervisor patterns, <strong>production RAG pipelines</strong> with ChromaDB and hybrid reranking, high-throughput asynchronous APIs in <strong>FastAPI</strong>, and modern, human-centric user interfaces crafted in <strong>React 18</strong>.
            </p>
          </div>

          {/* EDITABLE PERSONAL FACTS BENTO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {personalFacts.map((fact, fIdx) => {
              const IconComp = fact.icon;
              return (
                <div
                  key={fIdx}
                  className="bg-white border border-slate-200/90 rounded-xl p-3 sm:p-3.5 space-y-1.5 shadow-2xs hover:border-rose-300 hover:shadow-xs transition-all"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center border shrink-0 ${fact.color}`}>
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-mono text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      {fact.label}
                    </span>
                  </div>
                  <h4 className="font-display text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
                    {fact.value}
                  </h4>
                  <p className="font-sans text-[11px] text-slate-500 leading-snug">
                    {fact.sub}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
