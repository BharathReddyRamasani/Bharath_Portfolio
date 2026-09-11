import { Award, CodeXml, Trophy, ExternalLink, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

export default function AchievementsSection() {
  const achievementCards = [
    {
      icon: Award,
      title: "Celebal Excellence Internship Distinction",
      category: "Industry Recognition",
      date: "Jul 2026",
      description: "Awarded top performance distinction at Celebal Technologies for architecting the enterprise AI Retail Demand Forecasting Platform (900K+ records, 7.37% MAPE, 0.974 R²).",
      badge: "Top Distinction",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      link: "https://github.com/BharathReddyRamasani/Multi-Series-Forecasting-celebal-project.git",
      linkText: "Verify Deliverable"
    },
    {
      icon: CodeXml,
      title: "Top 16% Globally on LeetCode (1600+ Rating)",
      category: "Algorithmic Problem Solving",
      date: "Active",
      description: "Solved 300+ algorithms and data structures problems focused on dynamic programming, graph traversal, and optimization with consistent contest ranking.",
      badge: "Rating 1600+",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      link: "https://leetcode.com/u/Bharathreddy_Ramasani/",
      linkText: "LeetCode Profile"
    },
    {
      icon: Trophy,
      title: "CodeChef Competitive Coding (1400+ Rating)",
      category: "Competitive Programming",
      date: "Active",
      description: "Secured a 1400+ rating on CodeChef through regular participation in timed algorithmic contests.",
      badge: "Rating 1400+",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      icon: ShieldCheck,
      title: "Oracle Cloud Infrastructure 2025: AI & Data Platform Associate",
      category: "Cloud & AI Credentials",
      date: "2025",
      description: "Certified in Oracle Cloud Infrastructure AI Foundations, Foundations Associate, and Data Platform Associate fundamentals.",
      badge: "Oracle Certified",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      icon: ShieldCheck,
      title: "Oracle Academy: Database Programming with SQL",
      category: "Database & SQL Credentials",
      date: "2024",
      description: "Certified in relational database design, SQL querying, complex joins, subqueries, schema constraints, DDL/DML, and transactional data operations.",
      badge: "Oracle Certified",
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200"
    },
    {
      icon: ShieldCheck,
      title: "Deep Learning & NLP Certifications — Infosys Springboard",
      category: "Professional Training",
      date: "2024",
      description: "Completed comprehensive neural network training, recurrent architectures, and transformer pipeline specializations.",
      badge: "Certified",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200"
    }
  ];

  return (
    <section id="achievements" className="relative py-16 sm:py-20 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto z-10 scroll-mt-20">
      <div className="space-y-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-slate-200 pb-4">
          <div>
            <span className="font-mono text-[10px] uppercase text-rose-600 tracking-[0.25em] block font-semibold mb-1">
              05. ACHIEVEMENTS &amp; CREDENTIALS • HONORS &amp; MILESTONES
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Achievements &amp; Honors
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-2xl mt-1 leading-relaxed">
              Competitive coding ratings, performance distinctions, verified industry deliverables, and cloud credentials.
            </p>
          </div>
        </div>

        {/* TWO-COLUMN EDITORIAL LAYOUT: BOLD ACCENT FEATURE CARD + GRID CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* BOLD ACCENT FEATURE CARD WITH CELEBRATORY CHARACTER (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:border-rose-300 transition-all duration-300 space-y-5 text-left relative overflow-hidden">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                Featured Recognition
              </span>
              <span className="font-mono text-[10px] text-slate-500 font-bold uppercase">
                Jul 2026
              </span>
            </div>

            {/* Celebratory 3D Character Illustration */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 p-2 flex items-center justify-center">
              <img
                src="/assets/achievements-celebrate.jpg"
                alt="Bharath celebrating with award trophy"
                className="w-full h-full object-contain filter drop-shadow-md hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Feature Description */}
            <div className="space-y-1.5">
              <h3 className="font-display text-lg font-bold text-slate-900 leading-snug">
                Celebal Excellence Distinction
              </h3>
              <p className="font-sans text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Awarded the top performance honor during the Celebal Technologies Data Science Internship for outstanding execution in modeling, forecasting, and deploying an enterprise retail intelligence platform.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Verified Mentor-Reviewed Industry Achievement</span>
            </div>
          </div>

          {/* ACHIEVEMENT CARDS (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {achievementCards.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 p-5 rounded-2xl flex flex-col justify-between hover:border-rose-300 transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-200 group-hover:scale-105 transition-transform">
                          <IconComp className="w-4 h-4 text-rose-600" />
                        </div>
                        <div>
                          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">
                            {item.category} &bull; {item.date}
                          </span>
                          <h4 className="font-display text-sm sm:text-base font-bold text-slate-900 leading-tight">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                      <span className={`font-mono text-[10px] font-bold px-2.5 py-0.5 rounded border shrink-0 ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-slate-600 leading-relaxed pl-10">
                      {item.description}
                    </p>
                  </div>

                  {item.link && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100 pl-10">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-xs text-rose-600 hover:text-rose-700 inline-flex items-center gap-1.5 font-semibold transition-colors"
                      >
                        <span>{item.linkText || "Verify Credential"}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* ANIMATED HONORS TICKER */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-2.5 overflow-hidden shadow-2xs">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10.5px] uppercase font-bold text-rose-600 shrink-0 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded">
              HONORS TICKER:
            </span>
            <div className="whitespace-nowrap overflow-hidden text-xs font-mono text-slate-700 flex items-center gap-4">
              <span>🏆 Celebal Excellence Distinction</span>
              <span className="text-slate-300">•</span>
              <span>⭐ Top 16% Globally on LeetCode (1600+ Rating)</span>
              <span className="text-slate-300">•</span>
              <span>⚡ 1400+ Rating on CodeChef</span>
              <span className="text-slate-300">•</span>
              <span>🎓 8.81 / 10.0 CGPA at CVR College of Engineering</span>
              <span className="text-slate-300">•</span>
              <span>🛡️ Oracle Cloud AI &amp; Data Platform Certified</span>
              <span className="text-slate-300">•</span>
              <span>💾 Oracle Academy: Database Programming with SQL</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
