import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-8 sm:py-12 px-4 sm:px-6 md:px-10 max-w-4xl mx-auto z-10 scroll-mt-12">
      <div className="text-center mb-5">
        <span className="font-mono text-[10px] uppercase text-primary tracking-[0.25em] mb-1 block font-semibold">
          SECURE COMM-CHANNEL
        </span>
        <h2 className="font-display text-xl sm:text-2xl font-extrabold text-on-surface">
          Get in Touch
        </h2>
        <p className="font-sans text-[11px] sm:text-xs text-on-surface-variant max-w-xl mx-auto mt-1 leading-relaxed">
          Interested in collaboration, engineering roles, or have a technical query? Drop a message through any channel below.
        </p>
      </div>

      <div className="bg-surface-container-low/40 backdrop-blur-md border border-white/10 p-5 sm:p-6 rounded-xl shadow-2xl relative overflow-hidden flex flex-col items-center gap-5">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 w-full max-w-3xl relative z-10">
          <a
            href="mailto:ramasanibharathreddy2004@gmail.com"
            className="group flex flex-col items-center gap-2.5 bg-surface-container-lowest/50 border border-white/10 p-4 rounded-lg hover:border-primary/50 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Mail className="w-4 h-4 text-primary" />
            </div>
            <div className="text-center">
              <h3 className="font-display font-bold text-sm text-on-surface mb-0.5">Email</h3>
              <p className="font-mono text-[9.5px] text-on-surface-variant break-all">
                ramasanibharathreddy2004@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/bharathreddyramasani/"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-2.5 bg-surface-container-lowest/50 border border-white/10 p-4 rounded-lg hover:border-[#0077b5]/50 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0077b5]/10"
          >
            <div className="w-9 h-9 rounded-lg bg-[#0077b5]/10 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Linkedin className="w-4 h-4 text-[#0077b5]" />
            </div>
            <div className="text-center">
              <h3 className="font-display font-bold text-sm text-on-surface mb-0.5">LinkedIn</h3>
              <p className="font-mono text-[9.5px] text-on-surface-variant">
                /in/bharathreddyramasani
              </p>
            </div>
          </a>

          <a
            href="https://github.com/BharathReddyRamasani"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-2.5 bg-surface-container-lowest/50 border border-white/10 p-4 rounded-lg hover:border-white/50 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10"
          >
            <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Github className="w-4 h-4 text-white" />
            </div>
            <div className="text-center">
              <h3 className="font-display font-bold text-sm text-on-surface mb-0.5">GitHub</h3>
              <p className="font-mono text-[9.5px] text-on-surface-variant">
                @BharathReddyRamasani
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
