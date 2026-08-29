import { Award, BookOpen, GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="relative py-20 px-6 md:px-20 max-w-5xl mx-auto z-10 scroll-mt-12">
      <div className="space-y-8">
        
        {/* SECTION HEADER */}
        <div className="text-center">
          <span className="font-mono text-xs uppercase text-primary tracking-[0.25em] mb-2 block font-semibold">
            ACADEMIC QUALIFICATIONS
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-on-surface">
            Education
          </h2>
          <p className="font-sans text-base text-on-surface-variant max-w-xl mx-auto mt-3 leading-relaxed">
            Formal computer science degree and specialized data science curriculum.
          </p>
        </div>

        {/* DEGREE CARD */}
        <div className="bg-surface-container-low/40 backdrop-blur-md border border-white/5 p-8 md:p-10 rounded-2xl hover:border-secondary/40 transition-all duration-300 shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <span className="font-mono text-xs text-secondary mb-1 block font-semibold tracking-wider uppercase">
                2023 – 2027 • Full-Time Degree
              </span>
              <h3 className="font-display text-2xl font-bold text-on-surface">
                Bachelor of Technology in Computer Science and Engineering (Data Science)
              </h3>
              <p className="font-sans text-base text-on-surface-variant font-medium mt-1">
                CVR College of Engineering, Hyderabad
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/25 shrink-0 glow-blue">
              <GraduationCap className="w-6 h-6 text-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5">
            <div className="flex items-center gap-4 bg-white/3 p-4 rounded-xl border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-xs font-mono text-on-surface-variant/80 block uppercase tracking-wider">Academic Standing</span>
                <span className="text-base font-bold text-on-surface">CGPA 8.81 / 10.0</span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/3 p-4 rounded-xl border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20">
                <BookOpen className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <span className="text-xs font-mono text-on-surface-variant/80 block uppercase tracking-wider">Focus Areas</span>
                <span className="text-base font-bold text-on-surface">AI, ML & Data Science</span>
              </div>
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="mt-6 pt-6 border-t border-white/5">
            <h4 className="font-mono text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-3">
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
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
                  className="font-mono text-[11px] bg-white/5 border border-white/10 text-on-surface-variant px-3 py-1 rounded-full"
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
