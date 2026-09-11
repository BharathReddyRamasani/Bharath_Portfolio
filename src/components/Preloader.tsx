import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState("// SYSTEM BOOT SEQUENCE");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const statuses = [
      "// SYSTEM BOOT SEQUENCE",
      "// INITIALIZING VECTOR INDEX & CHROMADB",
      "// HYDRATING MULTI-AGENT STATE MACHINE",
      "// MOUNTING EDITORIAL RUNTIME"
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 250);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 15) + 8;
        const bounded = Math.min(next, 100);
        
        const statusIdx = Math.min(Math.floor((bounded / 100) * statuses.length), statuses.length - 1);
        if (statusIdx !== currentStep) {
          currentStep = statusIdx;
          setStatusMessage(statuses[statusIdx]);
        }
        return bounded;
      });
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0.98 }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-[#F4F5F7] flex flex-col justify-between p-6 sm:p-12 text-[#0F172A] select-none pointer-events-auto"
        >
          {/* Subtle Ambient Light Bubbles */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Ticker */}
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
              <span className="font-mono text-xs font-bold tracking-wider text-rose-600">
                {statusMessage}
              </span>
            </div>
            <span className="font-mono text-xs text-slate-500 font-semibold">
              RBR.PORTFOLIO.V3
            </span>
          </div>

          {/* Central Monogram & Role Title */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center my-auto relative z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/60 flex items-center justify-center"
            >
              <span className="font-display text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                R<span className="text-rose-600">B</span>R
              </span>
            </motion.div>

            <div className="space-y-1">
              <h1 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                Bharath Reddy Ramasani
              </h1>
              <p className="font-mono text-xs sm:text-sm text-slate-500 tracking-wide font-medium">
                AI/ML Engineer &amp; Software Engineer
              </p>
            </div>
          </div>

          {/* Bottom Progress Bar & Percentage */}
          <div className="space-y-3 relative z-10 max-w-md mx-auto w-full">
            <div className="flex items-center justify-between font-mono text-xs font-bold text-slate-700">
              <span className="text-slate-400">LOADING RUNTIMES</span>
              <span className="text-rose-600 font-extrabold">{progress}%</span>
            </div>

            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-rose-600 via-rose-500 to-blue-600 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
