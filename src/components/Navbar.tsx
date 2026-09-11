import { useState } from "react";
import { Menu, X, FileText } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

export default function Navbar({ onOpenResume, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Capabilities", href: "#what-i-build", id: "what-i-build" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Achievements", href: "#achievements", id: "achievements" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-md shadow-slate-200/40 rounded-2xl px-4 sm:px-6 py-2.5 transition-all">
      <div className="flex justify-between items-center w-full">
        {/* Logo Monogram */}
        <a href="#home" className="flex items-center gap-1 group">
          <div className="font-display text-lg font-extrabold text-slate-900 tracking-tight flex items-center">
            <span>R</span>
            <span className="text-rose-600 group-hover:scale-110 transition-transform">B</span>
            <span>R</span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mb-2 group-hover:animate-ping" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`font-sans text-xs font-semibold tracking-wide transition-all ${
                activeSection === item.id
                  ? "text-rose-600 font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={onOpenResume}
            className="ml-2 bg-rose-600 hover:bg-rose-700 text-white font-display font-bold px-4 py-1.5 rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer text-xs shadow-sm shadow-rose-500/20"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenResume}
            className="bg-rose-50 hover:bg-rose-100 text-rose-600 p-1.5 rounded-full transition-all flex items-center justify-center cursor-pointer border border-rose-200"
            title="View Resume"
          >
            <FileText className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 rounded-lg text-slate-600 hover:text-slate-900 focus:outline-none cursor-pointer"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`font-sans text-sm font-medium transition-colors py-1.5 px-3 rounded-lg ${
                activeSection === item.id
                  ? "text-rose-600 bg-rose-50 font-bold"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenResume();
            }}
            className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-2.5 rounded-xl mt-1 flex items-center justify-center gap-2 cursor-pointer shadow-md text-xs"
          >
            <FileText className="w-4 h-4" />
            View Resume
          </button>
        </div>
      )}
    </nav>
  );
}
