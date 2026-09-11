import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-12 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto z-10 scroll-mt-16">
      <div className="space-y-6">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-white/10 pb-4">
          <div>
            <span className="font-mono text-[10px] uppercase text-primary tracking-[0.25em] block font-semibold mb-1">
              CONNECT &amp; ENGAGE
            </span>
            <h2 className="font-display text-2xl font-extrabold text-on-surface">
              Get in Touch
            </h2>
            <p className="font-sans text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
              Available for full-time engineering roles, technical interviews, and AI systems collaboration.
            </p>
          </div>
        </div>

        <div className="bg-[#0e1614] border border-white/10 p-6 rounded-xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="mailto:ramasanibharathreddy2004@gmail.com"
              className="group flex flex-col items-center gap-3 bg-black/30 border border-white/10 p-5 rounded-lg hover:border-primary/50 transition-all hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-center">
                <h3 className="font-display font-bold text-sm text-on-surface mb-0.5">Direct Email</h3>
                <p className="font-mono text-xs text-on-surface-variant break-all">
                  ramasanibharathreddy2004@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/bharathreddyramasani/"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 bg-black/30 border border-white/10 p-5 rounded-lg hover:border-[#0077b5]/50 transition-all hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] group-hover:scale-105 transition-transform">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="text-center">
                <h3 className="font-display font-bold text-sm text-on-surface mb-0.5">LinkedIn</h3>
                <p className="font-mono text-xs text-on-surface-variant">
                  /in/bharathreddyramasani
                </p>
              </div>
            </a>

            <a
              href="https://github.com/BharathReddyRamasani"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 bg-black/30 border border-white/10 p-5 rounded-lg hover:border-white/40 transition-all hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                <Github className="w-5 h-5" />
              </div>
              <div className="text-center">
                <h3 className="font-display font-bold text-sm text-on-surface mb-0.5">GitHub</h3>
                <p className="font-mono text-xs text-on-surface-variant">
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
