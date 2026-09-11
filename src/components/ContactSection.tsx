import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-12 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto z-10 scroll-mt-16">
      <div className="space-y-6">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-slate-200 pb-4">
          <div>
            <span className="font-mono text-[10px] uppercase text-rose-600 tracking-[0.25em] block font-semibold mb-1">
              07. CONTACT • CONNECT &amp; COLLABORATE
            </span>
            <h2 className="font-display text-2xl font-extrabold text-slate-900">
              Get in Touch
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-2xl mt-1 leading-relaxed">
              Available for full-time engineering roles, technical interviews, and AI systems collaboration.
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200/90 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="mailto:ramasanibharathreddy2004@gmail.com"
              className="group flex flex-col items-center gap-3 bg-slate-50 border border-slate-200 p-5 rounded-xl hover:border-rose-300 transition-all hover:-translate-y-0.5 shadow-2xs"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-center">
                <h3 className="font-display font-bold text-sm text-slate-900 mb-0.5">Direct Email</h3>
                <p className="font-mono text-xs text-slate-600 break-all">
                  ramasanibharathreddy2004@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/bharathreddyramasani/"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 bg-slate-50 border border-slate-200 p-5 rounded-xl hover:border-blue-300 transition-all hover:-translate-y-0.5 shadow-2xs"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="text-center">
                <h3 className="font-display font-bold text-sm text-slate-900 mb-0.5">LinkedIn</h3>
                <p className="font-mono text-xs text-slate-600">
                  /in/bharathreddyramasani
                </p>
              </div>
            </a>

            <a
              href="https://github.com/BharathReddyRamasani"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 bg-slate-50 border border-slate-200 p-5 rounded-xl hover:border-slate-400 transition-all hover:-translate-y-0.5 shadow-2xs"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 group-hover:scale-105 transition-transform">
                <Github className="w-5 h-5" />
              </div>
              <div className="text-center">
                <h3 className="font-display font-bold text-sm text-slate-900 mb-0.5">GitHub</h3>
                <p className="font-mono text-xs text-slate-600">
                  @BharathReddyRamasani
                </p>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
