import { Award, BookOpen, GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="relative py-12 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto z-10 scroll-mt-16">
      <div className="space-y-6">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-white/10 pb-4">
          <div>
            <span className="font-mono text-[10px] uppercase text-primary tracking-[0.25em] block font-semibold mb-1">
              ACADEMIC FOUNDATION
            </span>
            <h2 className="font-display text-2xl font-extrabold text-on-surface">
              Education
            </h2>
            <p className="font-sans text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
              Formal computer science education and data science curriculum.
            </p>
          </div>
        </div>

        {/* DEGREE CARD */}
        <div className="bg-[#0e1614] border border-white/10 p-5 sm:p-6 rounded-xl hover:border-secondary/40 transition-all duration-300 shadow-lg">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
            <div>
              <span className="font-mono text-xs text-secondary font-semibold tracking-wider uppercase block mb-1">
                2023 – 2027 &bull; Full-Time Degree
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-on-surface">
                Bachelor of Technology in Computer Science and Engineering (Data Science)
              </h3>
              <p className="font-sans text-sm text-on-surface-variant font-medium mt-0.5">
                CVR College of Engineering, Hyderabad
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/25 shrink-0 text-secondary">
              <GraduationCap className="w-5 h-5" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/5">
            <div className="flex items-center gap-3 bg-white/3 p-3 rounded-lg border border-white/5">
              <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 text-primary">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-on-surface-variant/80 block uppercase tracking-wider">Academic Standing</span>
                <span className="text-sm font-bold text-on-surface">CGPA 8.81 / 10.0</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/3 p-3 rounded-lg border border-white/5">
              <div className="w-8 h-8 rounded-md bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20 text-secondary">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-on-surface-variant/80 block uppercase tracking-wider">Focus Areas</span>
                <span className="text-sm font-bold text-on-surface">AI, Machine Learning &amp; Data Science</span>
              </div>
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="mt-4 pt-4 border-t border-white/5">
            <h4 className="font-mono text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Data Structures & Algorithms",
                "Object-Oriented Programming",
                "Database Management Systems",
                "Operating Systems",
                "Machine Learning",
                "Deep Learning & NLP",
                "Computer Networks",
                "Big Data Analytics"
              ].map((course, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[11px] bg-white/5 border border-white/10 text-on-surface-variant px-2.5 py-0.5 rounded-md"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
