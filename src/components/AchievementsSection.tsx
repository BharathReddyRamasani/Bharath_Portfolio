import { Award, CodeXml, Trophy, ExternalLink } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      icon: <Award className="w-5 h-5 text-primary" />,
      title: "Celebal Excellence Internship Distinction",
      category: "Industry Recognition",
      date: "Jul 2026",
      description: "Awarded the Celebal Excellence distinction for top performance in designing and deploying the enterprise AI Retail Demand Forecasting and Analytics Platform.",
      badge: "Top Distinction",
      badgeColor: "bg-primary/10 text-cyan-300 border-primary/30",
      link: "https://github.com/BharathReddyRamasani/Multi-Series-Forecasting-celebal-project.git"
    },
    {
      icon: <CodeXml className="w-5 h-5 text-secondary" />,
      title: "Top 16% Globally on LeetCode (1600+ Rating)",
      category: "Algorithmic Problem Solving",
      date: "Ongoing",
      description: "Solved 300+ algorithms and data structures problems focused on dynamic programming, graph traversal, and optimization with consistent contest ranking.",
      badge: "Rating 1600+",
      badgeColor: "bg-secondary/10 text-secondary border-secondary/30",
      link: "https://leetcode.com/u/Bharathreddy_Ramasani/"
    },
    {
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
      title: "CodeChef Competitive Coding Rating (1400+)",
      category: "Competitive Programming",
      date: "Active",
      description: "Secured a 1400+ rating on CodeChef through regular participation in timed algorithmic contests.",
      badge: "Rating 1400+",
      badgeColor: "bg-amber-400/10 text-amber-300 border-amber-400/30"
    }
  ];

  return (
    <section id="achievements" className="relative py-12 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto z-10 scroll-mt-16">
      <div className="space-y-6">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-white/10 pb-4">
          <div>
            <span className="font-mono text-[10px] uppercase text-primary tracking-[0.25em] block font-semibold mb-1">
              HONORS &amp; CREDENTIALS
            </span>
            <h2 className="font-display text-2xl font-extrabold text-on-surface">
              Achievements
            </h2>
            <p className="font-sans text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
              Competitive coding ratings, performance distinctions, and algorithmic milestones.
            </p>
          </div>
        </div>

        {/* ACHIEVEMENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0e1614] border border-white/10 p-5 rounded-xl flex flex-col justify-between hover:border-primary/40 transition-all duration-300 shadow-md group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className={`font-mono text-[10px] font-bold px-2.5 py-0.5 rounded border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-on-surface-variant/70 uppercase tracking-wider block mb-1">
                    {item.category} &bull; {item.date}
                  </span>

                  <h3 className="font-display text-sm sm:text-base font-bold text-on-surface leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.link && (
                <div className="mt-4 pt-3 border-t border-white/5">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-primary hover:text-cyan-300 inline-flex items-center gap-1.5 font-semibold transition-colors"
                  >
                    <span>Verify Profile / Project</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
