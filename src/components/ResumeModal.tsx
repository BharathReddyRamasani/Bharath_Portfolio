import { X, Printer, Download, GraduationCap, Briefcase, Award, CodeXml, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-bg-dark/80 backdrop-blur-md"
      ></div>

      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-surface-container-low/95 border border-white/10 rounded-2xl w-full max-w-4xl h-[90vh] flex flex-col shadow-2xl relative z-10 overflow-hidden"
      >
        {/* Controls Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/5 bg-surface-container/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            <span className="font-mono text-xs text-on-surface-variant font-bold tracking-wider">DIGITAL_RESUME_V1.1</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="bg-white/5 hover:bg-white/10 text-on-surface p-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-mono border border-white/10"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-white/10 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Area */}
        <div id="resume-print-area" className="flex-1 overflow-y-auto p-6 sm:p-10 md:p-12 space-y-8 scrollbar-thin select-text text-on-surface">
          
          {/* Resume Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-white/5 pb-8">
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-2">
                Bharath Reddy <span className="text-primary">Ramasani</span>
              </h1>
              <p className="font-mono text-sm text-primary tracking-[0.15em] font-semibold uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                AI / ML • Software Engineer
              </p>
            </div>
            <div className="text-left sm:text-right font-mono text-xs text-on-surface-variant/80 space-y-1">
              <p>Email: <a href="mailto:ramasanibharathreddy2004@gmail.com" className="hover:text-primary transition-colors">ramasanibharathreddy2004@gmail.com</a></p>
              <p>GitHub: <a href="https://github.com/BharathReddyRamasani" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">github.com/BharathReddyRamasani</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/bharathreddyramasani/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">linkedin.com/in/bharathreddyramasani</a></p>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Left Column (Skills, Info) */}
            <div className="md:col-span-1 space-y-8">
              {/* Profile Summary */}
              <div className="space-y-3">
                <h3 className="font-display text-sm font-bold text-on-surface tracking-wider uppercase border-b border-white/5 pb-2">
                  Summary
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Computer Science (Data Science) undergraduate with hands-on experience building production-ready AI and software systems using Machine Learning, Generative AI, LLMs, and RAG. Skilled in developing end-to-end intelligent systems spanning multi-agent AI, recommendation systems, NLP, and scalable full-stack applications.
                </p>
              </div>

              {/* Skills Index */}
              <div className="space-y-4">
                <h3 className="font-display text-sm font-bold text-on-surface tracking-wider uppercase border-b border-white/5 pb-2">
                  Technical Matrix
                </h3>
                
                <div className="space-y-3.5">
                  <div>
                    <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider block mb-1">Generative AI & NLP</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["LLMs", "Transformers", "RAG", "LangChain", "LangGraph", "NLP", "Agentic AI"].map((s, i) => (
                        <span key={i} className="bg-primary/10 border border-primary/20 text-primary font-mono text-[9px] px-2 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider block mb-1">Data Science & ML</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["Pandas", "NumPy", "Scikit-learn", "PyTorch", "Deep Learning", "Feature Engineering", "ML Pipelines", "Time-Series Forecasting"].map((s, i) => (
                        <span key={i} className="bg-secondary/10 border border-secondary/20 text-secondary font-mono text-[9px] px-2 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-tertiary font-bold uppercase tracking-wider block mb-1">Languages</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["Python", "Java", "JavaScript", "SQL"].map((s, i) => (
                        <span key={i} className="bg-tertiary/10 border border-tertiary/20 text-tertiary font-mono text-[9px] px-2 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider block mb-1">Full-Stack & APIs</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["FastAPI", "React.js", "Node.js", "Express.js", "REST APIs", "JWT Authentication"].map((s, i) => (
                        <span key={i} className="bg-primary/10 border border-primary/20 text-primary font-mono text-[9px] px-2 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider block mb-1">Databases & Tools</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["MongoDB", "PostgreSQL", "ChromaDB", "Git", "Docker", "Postman", "Streamlit"].map((s, i) => (
                        <span key={i} className="bg-secondary/10 border border-secondary/20 text-secondary font-mono text-[9px] px-2 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Coding Profiles & Certs */}
              <div className="space-y-3">
                <h3 className="font-display text-sm font-bold text-on-surface tracking-wider uppercase border-b border-white/5 pb-2">
                  Profiles & Certs
                </h3>
                <div className="space-y-2 text-xs text-on-surface-variant leading-relaxed">
                  <p>• <strong>LeetCode:</strong> 1600+ Rating (Top 16%)</p>
                  <p>• <strong>CodeChef:</strong> 1400+ Rating</p>
                  <p>• Oracle Cloud Infrastructure 2025: AI Foundations Associate</p>
                  <p>• Oracle Cloud Infrastructure 2025: Foundations Associate</p>
                  <p>• Oracle Data Platform 2025 Certified Foundations Associate</p>
                  <p>• Deep Learning & NLP Certificates - Infosys Springboard</p>
                </div>
              </div>
            </div>

            {/* Right Column (Experience, Projects, Education) */}
            <div className="md:col-span-2 space-y-8">
              
              {/* Work Experience */}
              <div className="space-y-4">
                <h3 className="font-display text-sm font-bold text-on-surface tracking-wider uppercase border-b border-white/5 pb-2 flex items-center gap-2">
                  <Briefcase className="w-4.5 h-4.5 text-primary" />
                  Work Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-1 gap-2">
                      <h4 className="font-display text-sm font-bold text-on-surface">
                        Data Science Intern
                      </h4>
                      <span className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0">
                        May 2026 – Jul 2026
                      </span>
                    </div>
                    <p className="text-xs text-secondary font-medium mb-2">Celebal Technologies</p>
                    <ul className="list-disc pl-4 text-xs text-on-surface-variant/80 space-y-1">
                      <li>Developed an AI-powered Retail Demand Forecasting & Analytics Platform using Python, LightGBM, FastAPI, Streamlit, PostgreSQL, and Docker for multi-SKU demand prediction and business analytics.</li>
                      <li>Engineered a production-oriented ML pipeline covering data preprocessing, feature engineering, hyperparameter tuning, time-series model training, evaluation, recursive forecasting, and REST API-based real-time inference.</li>
                      <li>Integrated a RAG-powered analytics layer using LangChain, NVIDIA NIM APIs, Llama 3.1, NVIDIA embedding models, and ChromaDB to enable natural-language business querying and AI-powered forecast explanations.</li>
                      <li>Delivered the end-to-end application by integrating ML inference, backend APIs, RAG services, and interactive analytics through iterative mentor-led technical reviews.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <h3 className="font-display text-sm font-bold text-on-surface tracking-wider uppercase border-b border-white/5 pb-2 flex items-center gap-2">
                  <GraduationCap className="w-4.5 h-4.5 text-primary" />
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-1 gap-2">
                      <h4 className="font-display text-sm font-bold text-on-surface">
                        Bachelor of Technology in Computer Science and Engineering (Data Science)
                      </h4>
                      <span className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0">
                        2023 – 2027
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant font-medium mb-2">CVR College of Engineering, Hyderabad</p>
                    <ul className="list-disc pl-4 text-xs text-on-surface-variant/80 space-y-1">
                      <li>Academic performance: Cumulative CGPA of <strong>8.81 / 10.0</strong></li>
                      <li>Focus Areas: AI, ML & Data Science</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-4">
                <h3 className="font-display text-sm font-bold text-on-surface tracking-wider uppercase border-b border-white/5 pb-2 flex items-center gap-2">
                  <Award className="w-4.5 h-4.5 text-primary" />
                  Technical Projects
                </h3>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h4 className="font-display text-sm font-bold text-on-surface">
                        CorpusAI – Multi-Agent AI Research Assistant for Literature Synthesis
                      </h4>
                      <span className="font-mono text-[9px] text-on-surface-variant bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                        Jun 2026 – Jul 2026
                      </span>
                    </div>
                    <ul className="list-disc pl-4 text-[11px] text-on-surface-variant/80 space-y-1">
                      <li>Architected and developed a modular full-stack AI research platform using FastAPI and React.js for research paper analysis, semantic search, and conversational question answering.</li>
                      <li>Designed and implemented an Agentic RAG pipeline using LangGraph, LangChain, ChromaDB, Groq Llama 3.1, and all-MiniLM-L6-v2 embeddings for document chunking, semantic retrieval, and context-aware response generation.</li>
                      <li>Engineered a supervisor-based multi-agent architecture coordinating 7 specialized AI agents for multi-paper chat, paper comparison, research gap detection, literature synthesis, and automated report generation.</li>
                      <li>Designed and Dockerized a modular architecture with JWT authentication, OCR, SQLite, ChromaDB, REST APIs, and persistent storage on Hugging Face Spaces.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h4 className="font-display text-sm font-bold text-on-surface">
                        AI-Powered Conversational Commerce Platform
                      </h4>
                      <span className="font-mono text-[9px] text-on-surface-variant bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                        Nov 2025 – Feb 2026
                      </span>
                    </div>
                    <ul className="list-disc pl-4 text-[11px] text-on-surface-variant/80 space-y-1">
                      <li>Architected and developed a scalable full-stack commerce platform using FastAPI, React.js, MongoDB, and REST APIs, implementing secure authentication, product catalog, cart, and order management with a modular backend architecture.</li>
                      <li>Designed and implemented a hybrid recommendation engine combining collaborative, content-based, and popularity-based filtering to deliver personalized product recommendations through weighted interaction scoring and product similarity.</li>
                      <li>Built a Retrieval-Augmented Generation (RAG) pipeline using LangChain, ChromaDB, and Gemini LLM to enable semantic product search, context-aware conversational shopping, and AI-powered product discovery.</li>
                      <li>Containerized and deployed the platform using Docker and Hugging Face Spaces, implementing secure APIs, scalable backend services, and production-ready AI-powered commerce workflows.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h4 className="font-display text-sm font-bold text-on-surface">
                        Emotion-Aware Hate Speech Detection System
                      </h4>
                      <span className="font-mono text-[9px] text-on-surface-variant bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                        Feb 2026 – Apr 2026
                      </span>
                    </div>
                    <ul className="list-disc pl-4 text-[11px] text-on-surface-variant/80 space-y-1">
                      <li>Developed a multimodal AI platform for hate speech detection across text, images, PDFs, and documents using OCR-based text extraction and multilingual processing pipelines.</li>
                      <li>Fine-tuned multilingual Transformer models (RoBERTa and IndicBERT) using PyTorch on 80K+ samples for robust multilingual hate speech classification across diverse linguistic inputs.</li>
                      <li>Integrated LIME-based explainability to generate interpretable predictions and provide clear insights into model classification decisions.</li>
                      <li>Developed REST APIs using FastAPI and Dockerized the application, deploying it on Hugging Face Spaces for scalable real-time inference across multilingual and multimodal inputs.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h4 className="font-display text-sm font-bold text-on-surface">
                        Nexus Commerce Suite
                      </h4>
                      <span className="font-mono text-[9px] text-on-surface-variant bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                        Sep 2025 – Oct 2025
                      </span>
                    </div>
                    <ul className="list-disc pl-4 text-[11px] text-on-surface-variant/80 space-y-1">
                      <li>Developed full-stack business operations platform for inventory management, transaction processing, and sales tracking.</li>
                      <li>Implemented transactional workflows for order management, stock validation, and role-based access control with PostgreSQL.</li>
                      <li>Built analytics modules including ABC Analysis, RFM Segmentation, and sales forecasting using Pandas and NumPy.</li>
                      <li>Engineered an interactive analytics interface using Streamlit for live business intelligence and operational reporting.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
