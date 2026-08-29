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
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Achievements", href: "#achievements", id: "achievements" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-40 bg-bg-dark/50 backdrop-blur-md border-b border-white/10 shadow-xl">
      <div className="flex justify-between items-center px-6 md:px-20 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="font-display text-xl font-extrabold text-primary tracking-tight flex items-center gap-1">
            <span className="text-glow">RBR</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`font-sans text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={onOpenResume}
            className="ml-4 bg-primary-container text-on-primary font-bold px-5 py-2 rounded-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer text-sm shadow-md"
          >
            <FileText className="w-4 h-4" />
            Resume
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-lg transition-all flex items-center justify-center cursor-pointer border border-primary/25"
            title="View Resume"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface focus:outline-none cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface-container/95 backdrop-blur-lg border-b border-white/10 py-6 px-6 flex flex-col gap-4 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`font-sans text-lg font-medium transition-colors py-1 ${
                activeSection === item.id
                  ? "text-primary border-l-2 border-primary pl-3"
                  : "text-on-surface-variant hover:text-on-surface pl-3"
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
            className="w-full bg-primary text-on-primary font-bold py-3.5 rounded-xl mt-2 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <FileText className="w-5 h-5" />
            View Resume
          </button>
        </div>
      )}
    </nav>
  );
}
