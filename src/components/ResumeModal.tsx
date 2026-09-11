import { X, Download, GraduationCap, Briefcase, Award, CodeXml, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
      ></div>

      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white border border-slate-200 rounded-3xl w-full max-w-4xl h-[90vh] flex flex-col shadow-2xl relative z-10 overflow-hidden"
      >
        {/* Controls Header */}
        <div className="flex flex-wrap justify-between items-center px-6 py-3.5 border-b border-slate-200 bg-slate-50/90 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="font-mono text-xs text-slate-800 font-bold tracking-wider">Verified Digital Resume</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://drive.google.com/file/d/1gTVsIZOMOwnpFQX5tOvQRn7jKDi4EtLc/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-mono font-semibold transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>AI/ML PDF</span>
            </a>
            <a
              href="https://drive.google.com/file/d/13SRI9L4a9YpSkCKU9U3A2USuOFb1975g/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-mono font-semibold transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>SDE PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer ml-1"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Area */}
        <div id="resume-print-area" className="flex-1 overflow-y-auto p-6 sm:p-10 md:p-12 space-y-8 scrollbar-thin select-text text-slate-800 bg-white">
          
          {/* Resume Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-slate-200 pb-8">
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                Bharath Reddy <span className="text-rose-600">Ramasani</span>
              </h1>
              <p className="font-mono text-sm text-rose-600 tracking-[0.15em] font-semibold uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-600 animate-pulse" />
                AI / ML • Software Engineer
              </p>
            </div>
            <div className="text-left sm:text-right font-mono text-xs text-slate-500 space-y-1">
              <p>Email: <a href="mailto:ramasanibharathreddy2004@gmail.com" className="hover:text-rose-600 transition-colors">ramasanibharathreddy2004@gmail.com</a></p>
              <p>GitHub: <a href="https://github.com/BharathReddyRamasani" target="_blank" rel="noreferrer" className="hover:text-rose-600 transition-colors">github.com/BharathReddyRamasani</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/bharathreddyramasani/" target="_blank" rel="noreferrer" className="hover:text-rose-600 transition-colors">linkedin.com/in/bharathreddyramasani</a></p>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Left Column (Skills, Info) */}
            <div className="md:col-span-1 space-y-8">
              {/* Profile Summary */}
              <div className="space-y-3">
                <h3 className="font-display text-sm font-bold text-slate-900 tracking-wider uppercase border-b border-slate-200 pb-2">
                  Summary
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Computer Science (Data Science) undergraduate with hands-on experience building production-ready AI and software systems using Machine Learning, Generative AI, LLMs, and RAG. Skilled in developing end-to-end intelligent systems spanning multi-agent AI, recommendation systems, NLP, and scalable full-stack applications.
                </p>
              </div>

              {/* Skills Index */}
              <div className="space-y-4">
                <h3 className="font-display text-sm font-bold text-slate-900 tracking-wider uppercase border-b border-slate-200 pb-2">
                  Technical Matrix
                </h3>
                
                <div className="space-y-3.5">
                  <div>
                    <span className="text-[10px] font-mono text-rose-600 font-bold uppercase tracking-wider block mb-1">Generative AI & NLP</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["LLMs", "Transformers", "RAG", "LangChain", "LangGraph", "NLP", "Agentic AI"].map((s, i) => (
                        <span key={i} className="bg-rose-50 border border-rose-200 text-rose-700 font-mono text-[9px] px-2 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-blue-600 font-bold uppercase tracking-wider block mb-1">Data Science & ML</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["Pandas", "NumPy", "Scikit-learn", "PyTorch", "Deep Learning", "Feature Engineering", "ML Pipelines", "Time-Series Forecasting"].map((s, i) => (
                        <span key={i} className="bg-blue-50 border border-blue-200 text-blue-700 font-mono text-[9px] px-2 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-amber-700 font-bold uppercase tracking-wider block mb-1">Languages</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["Python", "Java", "JavaScript", "SQL"].map((s, i) => (
                        <span key={i} className="bg-amber-50 border border-amber-200 text-amber-800 font-mono text-[9px] px-2 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-purple-700 font-bold uppercase tracking-wider block mb-1">Full-Stack & APIs</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["FastAPI", "React.js", "Node.js", "Express.js", "REST APIs", "JWT Authentication"].map((s, i) => (
                        <span key={i} className="bg-purple-50 border border-purple-200 text-purple-700 font-mono text-[9px] px-2 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase tracking-wider block mb-1">Databases & Tools</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["MongoDB", "PostgreSQL", "ChromaDB", "Git", "Docker", "Postman", "Streamlit"].map((s, i) => (
                        <span key={i} className="bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[9px] px-2 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Coding Profiles & Certs */}
              <div className="space-y-3">
                <h3 className="font-display text-sm font-bold text-slate-900 tracking-wider uppercase border-b border-slate-200 pb-2">
                  Profiles & Certs
                </h3>
                <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                  <p>• <strong>LeetCode:</strong> <a href="https://leetcode.com/u/Bharathreddy_Ramasani/" target="_blank" rel="noreferrer" className="hover:text-rose-600 transition-colors">1600+ Rating (Top 16%)</a></p>
                  <p>• <strong>CodeChef:</strong> 1400+ Rating</p>
                  <p>• Oracle Academy: Database Programming with SQL</p>
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
                <h3 className="font-display text-sm font-bold text-slate-900 tracking-wider uppercase border-b border-slate-200 pb-2 flex items-center gap-2">
                  <Briefcase className="w-4.5 h-4.5 text-rose-600" />
                  Work Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-1 gap-2">
                      <h4 className="font-display text-sm font-bold text-slate-900">
                        Data Science Intern
                      </h4>
                      <span className="font-mono text-[10px] text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full shrink-0 font-semibold">
                        May 2026 – Jul 2026
                      </span>
                    </div>
                    <p className="text-xs text-rose-700 font-semibold mb-2">Celebal Technologies</p>
                    <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1">
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
                <h3 className="font-display text-sm font-bold text-slate-900 tracking-wider uppercase border-b border-slate-200 pb-2 flex items-center gap-2">
                  <GraduationCap className="w-4.5 h-4.5 text-rose-600" />
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-1 gap-2">
                      <h4 className="font-display text-sm font-bold text-slate-900">
                        Bachelor of Technology in Computer Science and Engineering (Data Science)
                      </h4>
                      <span className="font-mono text-[10px] text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full shrink-0 font-semibold">
                        2023 – 2027
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium mb-2">CVR College of Engineering, Hyderabad</p>
                    <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1">
                      <li>Academic performance: Cumulative CGPA of <strong className="text-slate-900">8.81 / 10.0</strong></li>
                      <li>Focus Areas: AI, ML & Data Science</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-4">
                <h3 className="font-display text-sm font-bold text-slate-900 tracking-wider uppercase border-b border-slate-200 pb-2 flex items-center gap-2">
                  <Award className="w-4.5 h-4.5 text-rose-600" />
                  Technical Projects
                </h3>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h4 className="font-display text-sm font-bold text-slate-900">
                        CorpusAI – Multi-Agent AI Research Assistant for Literature Synthesis
                      </h4>
                      <span className="font-mono text-[9px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 font-medium">
                        Jun 2026 – Jul 2026
                      </span>
                    </div>
                    <ul className="list-disc pl-4 text-[11px] text-slate-600 space-y-1">
                      <li>Architected and developed a modular full-stack AI research platform using FastAPI and React.js for research paper analysis, semantic search, and conversational question answering.</li>
                      <li>Designed and implemented an Agentic RAG pipeline using LangGraph, LangChain, ChromaDB, Groq Llama 3.1, and all-MiniLM-L6-v2 embeddings for document chunking, semantic retrieval, and context-aware response generation.</li>
                      <li>Engineered a supervisor-based multi-agent architecture coordinating 7 specialized AI agents for multi-paper chat, paper comparison, research gap detection, literature synthesis, and automated report generation.</li>
                      <li>Designed and Dockerized a modular architecture with JWT authentication, OCR, SQLite, ChromaDB, REST APIs, and persistent storage on Hugging Face Spaces.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h4 className="font-display text-sm font-bold text-slate-900">
                        AI-Powered Conversational Commerce Platform
                      </h4>
                      <span className="font-mono text-[9px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 font-medium">
                        Nov 2025 – Feb 2026
                      </span>
                    </div>
                    <ul className="list-disc pl-4 text-[11px] text-slate-600 space-y-1">
                      <li>Architected and developed a scalable full-stack commerce platform using FastAPI, React.js, MongoDB, and REST APIs, implementing secure authentication, product catalog, cart, and order management with a modular backend architecture.</li>
                      <li>Designed and implemented a hybrid recommendation engine combining collaborative, content-based, and popularity-based filtering to deliver personalized product recommendations through weighted interaction scoring and product similarity.</li>
                      <li>Built a Retrieval-Augmented Generation (RAG) pipeline using LangChain, ChromaDB, and Gemini LLM to enable semantic product search, context-aware conversational shopping, and AI-powered product discovery.</li>
                      <li>Containerized and deployed the platform using Docker and Hugging Face Spaces, implementing secure APIs, scalable backend services, and production-ready AI-powered commerce workflows.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h4 className="font-display text-sm font-bold text-slate-900">
                        Emotion-Aware Hate Speech Detection System
                      </h4>
                      <span className="font-mono text-[9px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 font-medium">
                        Feb 2026 – Apr 2026
                      </span>
                    </div>
                    <ul className="list-disc pl-4 text-[11px] text-slate-600 space-y-1">
                      <li>Developed a multimodal AI platform for hate speech detection across text, images, PDFs, and documents using OCR-based text extraction and multilingual processing pipelines.</li>
                      <li>Fine-tuned multilingual Transformer models (RoBERTa and IndicBERT) using PyTorch on 80K+ samples for robust multilingual hate speech classification across diverse linguistic inputs.</li>
                      <li>Integrated LIME-based explainability to generate interpretable predictions and provide clear insights into model classification decisions.</li>
                      <li>Developed REST APIs using FastAPI and Dockerized the application, deploying it on Hugging Face Spaces for scalable real-time inference across multilingual and multimodal inputs.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h4 className="font-display text-sm font-bold text-slate-900">
                        Nexus Commerce Suite
                      </h4>
                      <span className="font-mono text-[9px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 font-medium">
                        Sep 2025 – Oct 2025
                      </span>
                    </div>
                    <ul className="list-disc pl-4 text-[11px] text-slate-600 space-y-1">
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
