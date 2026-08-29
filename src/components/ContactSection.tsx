import React, { useState } from "react";
import { Send, Mail, Linkedin, Github, Check, AlertCircle, Sparkles } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill out all the fields before initiating transmission.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Clear success state after 5 seconds
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        throw new Error(data.error || "Failed to deliver message.");
      }
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Connection interrupted. Please verify server connectivity.");
    }
  };

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
          Interested in collaboration, research partnerships, or have a technical query? Drop a message below to establish connection.
        </p>
      </div>

      <div className="bg-surface-container-low/40 backdrop-blur-md border border-white/5 p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-mono text-xs text-on-surface-variant/80 ml-1 uppercase">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="bg-surface-container-lowest/50 border border-white/10 rounded-xl p-3.5 text-sm text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-primary transition-all focus:ring-0 w-full"
                disabled={status === "loading"}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-xs text-on-surface-variant/80 ml-1 uppercase">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="bg-surface-container-lowest/50 border border-white/10 rounded-xl p-3.5 text-sm text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-primary transition-all focus:ring-0 w-full"
                disabled={status === "loading"}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-mono text-xs text-on-surface-variant/80 ml-1 uppercase">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="State the nature of your inquiry..."
              className="bg-surface-container-lowest/50 border border-white/10 rounded-xl p-3.5 text-sm text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-primary transition-all focus:ring-0 resize-none w-full"
              disabled={status === "loading"}
            ></textarea>
          </div>

          {/* Feedback Messages */}
          {status === "error" && (
            <div className="flex items-center gap-2 text-xs bg-red-950/40 border border-red-500/20 text-red-400 p-3.5 rounded-xl">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {status === "success" && (
            <div className="flex items-center gap-2 text-xs bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 p-3.5 rounded-xl">
              <Check className="w-4 h-4 shrink-0" />
              <span>Transmission sent successfully. Bharath will get back to you shortly!</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
              status === "loading"
                ? "bg-surface-container-high text-on-surface-variant/50 cursor-wait"
                : status === "success"
                ? "bg-emerald-500 text-bg-dark border border-emerald-400 glow-teal"
                : "bg-primary hover:bg-primary-container text-on-primary border border-primary/20 hover:scale-[1.01] active:scale-95 glow-teal"
            }`}
          >
            {status === "loading" ? (
              <>
                <svg className="animate-spin h-4 w-4 text-primary" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Establishing Uplink...</span>
              </>
            ) : status === "success" ? (
              <>
                <Check className="w-4.5 h-4.5" />
                <span>Transmission Logged</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4.5 h-4.5" />
                <span>Initialize Transmission</span>
              </>
            )}
          </button>
        </form>

        {/* Footer info inside Card */}
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/bharathreddyramasani/"
              target="_blank"
              rel="noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-mono"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/BharathReddyRamasani"
              target="_blank"
              rel="noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-mono"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors text-xs font-mono">
            <Mail className="w-4 h-4 text-primary" />
            <a href="mailto:ramasanibharathreddy2004@gmail.com">ramasanibharathreddy2004@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
