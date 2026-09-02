import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 px-6 md:px-20 max-w-4xl mx-auto z-10 scroll-mt-12">
      <div className="text-center mb-10">
        <span className="font-mono text-xs uppercase text-primary tracking-[0.25em] mb-2 block">
          SECURE COMM-CHANNEL
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-on-surface">
          Get in Touch
        </h2>
        <p className="font-sans text-base text-on-surface-variant max-w-xl mx-auto mt-3">
          Interested in collaboration, research partnerships, or have a technical query? Drop a message through any of the channels below to establish connection.
        </p>
      </div>

      <div className="bg-surface-container-low/40 backdrop-blur-md border border-white/5 p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col items-center gap-8">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl relative z-10">
          <a
            href="mailto:ramasanibharathreddy2004@gmail.com"
            className="group flex flex-col items-center gap-4 bg-surface-container-lowest/50 border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div className="text-center">
              <h3 className="font-display font-bold text-on-surface mb-1">Email</h3>
              <p className="font-mono text-[10px] text-on-surface-variant break-all">
                ramasanibharathreddy2004@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/bharathreddyramasani/"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-4 bg-surface-container-lowest/50 border border-white/10 p-6 rounded-xl hover:border-[#0077b5]/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0077b5]/10"
          >
            <div className="w-12 h-12 rounded-full bg-[#0077b5]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6 text-[#0077b5]" />
            </div>
            <div className="text-center">
              <h3 className="font-display font-bold text-on-surface mb-1">LinkedIn</h3>
              <p className="font-mono text-[10px] text-on-surface-variant">
                /in/bharathreddyramasani
              </p>
            </div>
          </a>

          <a
            href="https://github.com/BharathReddyRamasani"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-4 bg-surface-container-lowest/50 border border-white/10 p-6 rounded-xl hover:border-white/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-white/10"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Github className="w-6 h-6 text-white" />
            </div>
            <div className="text-center">
              <h3 className="font-display font-bold text-on-surface mb-1">GitHub</h3>
              <p className="font-mono text-[10px] text-on-surface-variant">
                @BharathReddyRamasani
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
