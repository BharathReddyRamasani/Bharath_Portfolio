import { Award, CodeXml, Trophy, Sparkles, CheckCircle, ExternalLink } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Celebal Excellence Internship 2026 Certificate",
      category: "Professional Distinction",
      date: "Jul 2026",
      description: "Awarded Celebal Excellence Internship Certificate at Celebal Technologies for outstanding performance in constructing the AI Retail Demand Forecasting & Analytics Platform.",
      badge: "Celebal Excellence",
      badgeColor: "bg-primary/10 text-primary border-primary/25"
    },
    {
      icon: <CodeXml className="w-6 h-6 text-secondary" />,
      title: "Top 16% Globally on LeetCode",
      category: "Competitive Programming",
      date: "Ongoing",
      description: "Achieved a 1600+ contest rating on LeetCode, solving 300+ algorithms and data structures problems focused on dynamic programming, graphs, and optimization.",
      badge: "Rating 1600+",
      badgeColor: "bg-secondary/10 text-secondary border-secondary/25",
      link: "https://leetcode.com/u/Bharathreddy_Ramasani/"
    },
    {
      icon: <Trophy className="w-6 h-6 text-tertiary" />,
      title: "CodeChef Competitive Coding Rating",
      category: "Algorithmic Contests",
      date: "Active",
      description: "Secured a 1400+ rating on CodeChef through consistent participation in long and short programming contests.",
      badge: "Rating 1400+",
      badgeColor: "bg-tertiary/10 text-tertiary border-tertiary/25"
    }
  ];

  return (
    <section id="achievements" className="relative py-8 sm:py-12 bg-surface-container-lowest/20 z-10 scroll-mt-12">
      <div className="px-4 sm:px-6 md:px-10 max-w-6xl mx-auto space-y-4">
        
        {/* SECTION HEADER */}
        <div className="text-center">
          <span className="font-mono text-[10px] uppercase text-primary tracking-[0.25em] mb-1 block font-semibold">
            HONORS &amp; CREDENTIALS
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-extrabold text-on-surface">
            Achievements &amp; Certifications
          </h2>
          <p className="font-sans text-[11px] sm:text-xs text-on-surface-variant max-w-xl mx-auto mt-1 leading-relaxed">
            Competitive coding milestones, industry certifications, and performance awards.
          </p>
        </div>

        {/* ACHIEVEMENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-container-low/40 backdrop-blur-md border border-white/10 p-4 sm:p-5 rounded-xl flex flex-col justify-between hover:border-primary/30 transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white/3 flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className={`font-mono text-[9px] font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <span className="font-mono text-[9.5px] text-on-surface-variant uppercase tracking-wider block mb-0.5">
                  {item.category} • {item.date}
                </span>

                <h3 className="font-display text-sm sm:text-base font-bold text-on-surface mb-1.5 leading-snug">
                  {item.title}
                </h3>

                <p className="font-sans text-[11px] sm:text-xs text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.link && (
                <div className="mt-4 pt-3 border-t border-white/5">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[11px] text-primary hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    View Competitive Profile
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
