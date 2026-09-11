import { useState } from "react";
import { 
  ShoppingCart, 
  ShieldAlert, 
  Cpu, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Github, 
  Globe, 
  CheckCircle2, 
  Layers, 
  Filter, 
  Terminal, 
  ArrowRight,
  Database,
  Server,
  Workflow,
  BarChart3
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TechGroup {
  category: string;
  items: string[];
}

interface CaseStudy {
  overview: string;
  problem: string;
  solution: string;
  howItWorks: string[];
  architectureDiagram: string[];
  keyEngineeringWork: string[];
  coreFeatures: string[];
  groupedTechStack: TechGroup[];
  deployment: string;
  myContribution: string;
}

interface CaseStudyProject {
  id: string;
  title: string;
  primaryCategory: string;
  primaryLanguage: string;
  categories: string[];
  categoryType: "primary" | "secondary" | "error";
  shortSummary: string;
  imageUrl: string;
  imageAlt: string;
  techBadges: string[];
  technicalDepth: {
    architecture: string;
    backend: string;
    storage: string;
    deployment: string;
  };
  keyBullets: string[];
  githubUrl: string;
  liveUrl: string;
  caseStudy: CaseStudy;
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

  const toggleCaseStudy = (id: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filterOptions = [
    "ALL",
    "AI / ML",
    "GENERATIVE AI",
    "BACKEND & FULL-STACK",
    "DATA SCIENCE"
  ];

  const projects: CaseStudyProject[] = [
    {
      id: "corpus-ai",
      title: "CorpusAI – Multi-Agent AI Research Assistant for Literature Synthesis",
      primaryCategory: "GENERATIVE AI",
      primaryLanguage: "Python",
      categories: ["GENERATIVE AI", "AI / ML", "BACKEND & FULL-STACK"],
      categoryType: "primary",
      shortSummary: "A multi-agent AI research platform for literature synthesis, semantic document retrieval, multi-paper comparative analysis, and automated research report generation.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUzA8uuk8LVgODy31yDHDXdeA7NwmTD3VeI2rfRBSAzXE2HAHgqMfj1CjwF8AWLG5HkmzCzdxy5abn_WI3b8ULCvR3F8XgGDMbkuTnxrH9Qsyg3938GILCUk_S-HhYx8r-sF4PycL3o2LjWeirOM5xMY2C2UMLwtbKBSZIx6l0zXHUup2aYwSy-UcJJxa12YZ8TacGWfj7aTr7TjE3WxZgaZQWacUO4iYjAzCDDMvUXCid1ubAtRpl",
      imageAlt: "Digital neural network interface visualization for multi-agent literature synthesis.",
      techBadges: ["Python", "Agentic RAG", "LangGraph", "LangChain", "FastAPI", "React.js", "ChromaDB", "all-MiniLM-L6-v2", "Docker", "Llama 3.1"],
      technicalDepth: {
        architecture: "Supervisor Multi-Agent + RAG (7 Agents)",
        backend: "FastAPI REST + JWT Auth + SQLite",
        storage: "ChromaDB Vector DB + SQLite Persistence",
        deployment: "Docker Container on Hugging Face Spaces"
      },
      keyBullets: [
        "Architected a supervisor-based LangGraph multi-agent system coordinating 7 specialized AI agents for paper analysis, gap detection, and literature synthesis.",
        "Engineered an Agentic RAG semantic pipeline with ChromaDB and all-MiniLM-L6-v2 sentence embeddings for context-grounded retrieval.",
        "Built modular FastAPI REST services with JWT authentication, OCR document parsing, and persistent storage deployed via Docker."
      ],
      githubUrl: "https://github.com/BharathReddyRamasani/CorpusAI-An-AI-Powered-Literature-Synthesis-for-Researchers.git",
      liveUrl: "https://huggingface.co/spaces/Bharath2769/ai-research-assistant",
      caseStudy: {
        overview: "CorpusAI is a supervisor-orchestrated multi-agent research platform designed to automate literature synthesis, semantic retrieval across research papers, comparative analysis, and research-gap identification.",
        problem: "Academic research requires synthesizing dozens of technical papers, extracting core methodologies, identifying contradictions or gaps, and generating structured literature reviews. Standard single-turn LLMs suffer from strict context window limitations, document hallucinations, and lack specialized division of research labor.",
        solution: "Engineered a supervisor-worker multi-agent architecture using LangGraph where a central supervisor routes user research intents across 7 specialized worker agents, supported by a ChromaDB semantic retrieval pipeline and a containerized FastAPI/React system.",
        howItWorks: [
          "Document Ingestion: PDF research papers are uploaded, extracted via OCR/document parsers, and divided into semantic chunks.",
          "Vector Indexing: Chunks are transformed into 384-dimensional vector embeddings via all-MiniLM-L6-v2 and indexed in ChromaDB collections.",
          "Intent Orchestration: Queries hit the FastAPI backend and enter the LangGraph Supervisor Agent.",
          "Agent Delegation: The supervisor determines execution paths across specialized agents (Paper Analysis, Multi-Paper Chat, Paper Comparison, Gap Detection, Literature Synthesis, Report Generation).",
          "Grounded Synthesis: Vector contexts retrieved from ChromaDB are synthesized by Groq Llama 3.1 to return structured, citation-backed answers."
        ],
        architectureDiagram: [
          "  [ Documents / Research PDFs ]",
          "                │",
          "                ▼",
          "      [ Document Chunking ]",
          "                │",
          "                ▼",
          "   [ all-MiniLM-L6-v2 Embeddings ]",
          "                │",
          "                ▼",
          "      [ ChromaDB Vector DB ]",
          "                │ (Semantic Context)",
          "                ▼",
          "[ User Query ] ──▶ [ FastAPI Backend ] ──▶ [ Supervisor Agent (LangGraph) ]",
          "                                                 │",
          "         ┌───────────────────────────────┬───────┴───────────────────────────────┐",
          "         ▼                               ▼                                       ▼",
          " [ Paper Analysis ]             [ Multi-Paper Chat ]                    [ Paper Comparison ]",
          " [ Gap Detection  ]             [ Literature Synthesis ]                [ Report Generation ]",
          "         │                               │                                       │",
          "         └───────────────────────────────┼───────────────────────────────────────┘",
          "                                         ▼",
          "                       [ Llama 3.1 Inference Engine ]",
          "                                         │",
          "                                         ▼",
          "                         [ Synthesized Research Response ]"
        ],
        keyEngineeringWork: [
          "Multi-Agent Graph State: Formulated LangGraph state schemas and conditional routing edges allowing dynamic handoffs between the supervisor and 7 worker agents.",
          "Semantic RAG Retrieval: Implemented ChromaDB vector collections paired with local all-MiniLM-L6-v2 embeddings for fast, deterministic document chunk lookup.",
          "Backend Architecture: Developed a modular FastAPI application with JWT-based session security, Pydantic data validation, and SQLite session storage.",
          "Document Parsing Pipeline: Integrated OCR and PDF parsing utilities to extract unstructured text, tables, and sections from diverse paper formats.",
          "Reproducible Deployment: Authored multi-stage Docker container specifications configured for memory-constrained deployment on Hugging Face Spaces."
        ],
        coreFeatures: [
          "Multi-Paper Conversational Chat: Context-aware interactive Q&A across multiple documents simultaneously.",
          "Automated Research-Gap Detection: Identifies unexplored methodology questions and limitations across loaded literature.",
          "Comparative Synthesis Matrix: Compares contrasting findings, datasets, and architectures across selected papers.",
          "Structured Report Generation: Compiles literature reviews into downloadable academic reports with citations.",
          "OCR Ingestion: Supports both digital and scanned academic PDF documents."
        ],
        groupedTechStack: [
          { category: "Agentic AI & Orchestration", items: ["LangGraph", "LangChain", "Groq Llama 3.1", "Multi-Agent Supervisor Pattern"] },
          { category: "Retrieval & Vector DB", items: ["ChromaDB", "all-MiniLM-L6-v2 Embeddings", "RAG Pipeline"] },
          { category: "Backend & APIs", items: ["Python", "FastAPI", "REST APIs", "JWT Authentication", "SQLite"] },
          { category: "Frontend Interface", items: ["React.js", "Tailwind CSS", "Lucide Icons"] },
          { category: "DevOps & Deployment", items: ["Docker", "Hugging Face Spaces", "Git"] }
        ],
        deployment: "Fully containerized using Docker and deployed on Hugging Face Spaces with persistent storage volumes.",
        myContribution: "Solo Architect & Developer. Personally designed the supervisor-based multi-agent architecture in LangGraph, developed the RAG semantic retrieval pipeline using ChromaDB, implemented the FastAPI REST backend with JWT auth and SQLite persistence, engineered the React.js frontend interface, and handled Docker containerization for Hugging Face Spaces deployment."
      }
    },
    {
      id: "ai-commerce",
      title: "AI-Powered Conversational Commerce Platform",
      primaryCategory: "BACKEND & FULL-STACK",
      primaryLanguage: "Python • JavaScript",
      categories: ["BACKEND & FULL-STACK", "GENERATIVE AI", "AI / ML"],
      categoryType: "secondary",
      shortSummary: "A full-stack commerce platform combining personalized recommendation algorithms, semantic product discovery, and conversational AI shopping assistance.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ3JC6B5iDIIKakesGKgbZjRfFxnti7ka5sRv9xO1sHL21DIlv5SQ4U_hBosoPADtP8vvy6G4brxMATWc6HxZCvuK9OpVzGzlHVzGYusYcQPd8aUXkR0kM52J7YiKMCv6hRvyaQVWe3p1JoXN8_t8i-TK9ToLDEujbL6lboIlqhcC7PEbZCxrKnJWnFuV5FiIzMFv-5MooMj9m-OZ9XFnKUMj65sE8lP8w52XQZLWmXh_FlfKU7e79",
      imageAlt: "Conversational mobile mockup illustrating an AI assistant suggesting luxury products to users.",
      techBadges: ["Python", "JavaScript", "FastAPI", "React.js", "MongoDB", "ChromaDB", "LangChain", "Gemini LLM", "Docker", "REST APIs"],
      technicalDepth: {
        architecture: "Hybrid Recommender + Conversational RAG",
        backend: "FastAPI REST + JWT Auth + Modular Routers",
        storage: "MongoDB Document DB + ChromaDB Vector DB",
        deployment: "Docker Container on Hugging Face Spaces"
      },
      keyBullets: [
        "Engineered a hybrid recommendation engine combining collaborative, content-based, and popularity filtering through weighted interaction scoring.",
        "Built a conversational RAG shopping assistant using LangChain, ChromaDB, and Gemini LLM for natural-language product discovery.",
        "Architected a scalable full-stack application using FastAPI, React.js, and MongoDB with secure JWT auth and end-to-end cart/order workflows."
      ],
      githubUrl: "https://github.com/BharathReddyRamasani/AI-Powered-Conversational-Commerce-Platform.git",
      liveUrl: "https://huggingface.co/spaces/Bharath2769/AI-Powered-Conversational-Commerce-Platform",
      caseStudy: {
        overview: "A production-oriented full-stack e-commerce application integrating a multi-tiered recommendation system with a conversational AI agent to deliver personalized browsing and natural-language product discovery.",
        problem: "Traditional e-commerce platforms struggle with keyword mismatch in product search and cold-start limitations in recommendation algorithms, while disconnected chatbots fail to ground their answers in real-time product catalogs and cart state.",
        solution: "Designed and implemented a modular architecture featuring a hybrid recommendation engine (collaborative filtering + content metadata similarity + popularity weighting) paired with a RAG-powered shopping assistant grounded in ChromaDB catalog vectors and Gemini LLM inference.",
        howItWorks: [
          "Behavior Logging: Customer browsing sessions, cart modifications, and completed transactions are recorded in MongoDB collections.",
          "Hybrid Recommendation Scoring: Scoring services compute collaborative user-item affinity, product attribute similarity, and overall item popularity to populate personalized feeds.",
          "Semantic Vector Retrieval: Natural-language customer queries are transformed into vector embeddings and matched against product catalog embeddings in ChromaDB.",
          "Conversational Assistance: LangChain formats relevant catalog matches into contextual prompts for Gemini LLM, allowing users to ask queries like 'Show me lightweight running shoes under $100'.",
          "Order & Cart Lifecycle: FastAPI routers execute order validations, inventory deductions, and checkout processing through secure endpoints."
        ],
        architectureDiagram: [
          " [ User Activity / Clicks / Purchases ]",
          "                   │",
          "                   ▼",
          " ┌──────────────────────────────────────────────┐",
          " │          Hybrid Recommendation Engine         │",
          " │  • Collaborative Interaction Matrix          │",
          " │  • Content-Based Metadata Similarity         │",
          " │  • Popularity & Recency Weighting            │",
          " └──────────────────────┬───────────────────────┘",
          "                        ▼",
          "       [ Weighted Personalized Recommendations ]",
          "",
          " [ Natural-Language Query ] ──▶ [ Semantic Retrieval (ChromaDB) ]",
          "                                           │",
          "                                           ▼",
          "                               [ Relevant Product Catalog ]",
          "                                           │",
          "                                           ▼",
          "                     [ Gemini LLM Prompt Formulation (LangChain) ]",
          "                                           │",
          "                                           ▼",
          "                      [ Conversational Product Recommendations ]"
        ],
        keyEngineeringWork: [
          "Hybrid Recommender Algorithms: Formulated mathematical weighted scoring combining collaborative user-item vectors with TF-IDF content similarity to address user cold-start.",
          "Modular FastAPI Backend: Developed distinct API service routers for authentication, catalog management, recommendation ranking, and conversational RAG inference.",
          "Catalog Vectorization: Indexed product titles, categories, and attributes into ChromaDB collections for high-precision semantic lookup.",
          "Document Modeling: Structured MongoDB schemas for customer sessions, product inventory items, and multi-item order histories.",
          "Interactive React Interface: Built a dynamic e-commerce frontend supporting instant product search, recommendation carousels, and persistent chat drawer."
        ],
        coreFeatures: [
          "Hybrid Recommendation Feed: Dynamically updates based on immediate user interactions and historical affinities.",
          "Conversational Shopping Assistant: Answers feature questions, suggests alternatives, and filters products using natural dialogue.",
          "Semantic Product Search: Handles conceptual queries beyond simple exact-keyword matches.",
          "Cart & Order Management: End-to-end transaction handling with stock validation.",
          "JWT-Secured User Profiles: Authenticated session management with order history tracking."
        ],
        groupedTechStack: [
          { category: "Recommendation & AI", items: ["Hybrid Collaborative Filtering", "Content-Based Similarity", "Popularity Scoring", "Gemini LLM", "LangChain"] },
          { category: "Vector Database & Retrieval", items: ["ChromaDB Vector DB", "Semantic Catalog Embeddings"] },
          { category: "Backend & APIs", items: ["FastAPI", "Python", "JWT Authentication", "Pydantic"] },
          { category: "Database & Storage", items: ["MongoDB", "Mongoose / PyMongo"] },
          { category: "Frontend & DevOps", items: ["React.js", "Tailwind CSS", "Docker", "Hugging Face Spaces"] }
        ],
        deployment: "Containerized with Docker and deployed on Hugging Face Spaces connected to cloud MongoDB clusters.",
        myContribution: "Solo Architect & Developer. Solely designed the complete software and AI architecture, implemented the hybrid recommendation algorithms, built the conversational RAG workflow with LangChain and ChromaDB, developed the modular FastAPI REST backend and MongoDB data schemas, created the React.js commerce user interface, and containerized the entire application with Docker."
      }
    },
    {
      id: "hate-speech",
      title: "Emotion-Aware Hate Speech Detection System",
      primaryCategory: "AI / ML",
      primaryLanguage: "Python",
      categories: ["AI / ML", "BACKEND & FULL-STACK"],
      categoryType: "error",
      shortSummary: "A multilingual, multimodal NLP system for detecting hate speech across text, images, PDFs, and documents using fine-tuned Transformer models and explainable AI.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvpCJN7lkYUHqBygajIk8qp-LcMvwo_q_l3tXorls_KtZ7RjFokq9r3XMuFJQcfENi9rekeI0N_7KY9oPUncT5OG920XPScKyRupGPCNKQ5RGkWeug0bQWVR1bYOQQZlYkWTtJ7cJeqOqUZlIlYnSqWPZiX3b-ZKxysQseKVP9JjszIzIgD_l0PW98rBeMyFfWPJ7fkbzI2_LFJk99dazCaoCOfJB3YS-WkQY44M_Uvh5-iv5kBEXY",
      imageAlt: "Digital text processing wave passing through a crystalline glowing filter.",
      techBadges: ["Python", "PyTorch", "Transformers", "RoBERTa", "IndicBERT", "FastAPI", "Tesseract OCR", "LIME (XAI)", "Docker"],
      technicalDepth: {
        architecture: "Fine-Tuned Multilingual Transformers + LIME XAI",
        backend: "FastAPI High-Throughput REST APIs",
        storage: "Trained PyTorch Model Checkpoints",
        deployment: "Docker Container on Hugging Face Spaces"
      },
      keyBullets: [
        "Fine-tuned multilingual Transformer models (RoBERTa and IndicBERT) using PyTorch on 80K+ verified samples for high-accuracy linguistic safety classification.",
        "Engineered a multimodal text extraction pipeline using Tesseract OCR to process text within image memes, PDFs, and scanned documents.",
        "Integrated LIME explainability to generate transparent token-attribution heatmaps for model classification decisions."
      ],
      githubUrl: "https://github.com/BharathReddyRamasani/Emotion-Aware-Hate-Speech-Detection-System.git",
      liveUrl: "https://huggingface.co/spaces/annepagaanvesh/EmiHate-Grid",
      caseStudy: {
        overview: "A deep learning NLP platform engineered to detect hate speech across multimodal inputs (raw text, screenshots, flyers, and PDF documents) across multiple languages, providing explainable feature attributions for every prediction.",
        problem: "Online hate speech increasingly manifests across varied languages and inside image memes and PDF flyers, defeating simple text keyword filters. Furthermore, deep learning classification models operate as black boxes, preventing human moderators from validating why specific content was flagged.",
        solution: "Built an end-to-end multimodal classification pipeline that utilizes Tesseract OCR for text extraction from documents/images, fine-tuned multilingual Transformer models (RoBERTa and IndicBERT) on 80K+ verified samples with PyTorch, and integrated LIME to generate interpretability scores for token importance.",
        howItWorks: [
          "Input Processing: Moderation requests submit raw text strings, images (PNG/JPG), or PDF documents via FastAPI endpoints.",
          "OCR Extraction: If an image or PDF is detected, Tesseract OCR extracts embedded text content with character-level cleanup.",
          "Language Tokenization: Text is tokenized with subword encodings appropriate for the target language domain.",
          "Transformer Inference: Fine-tuned RoBERTa and IndicBERT models compute classification probabilities across hate/non-hate classes.",
          "LIME Explainability: The LIME engine perturbs token sequences to calculate local feature importance weights.",
          "Structured Output: FastAPI returns the classification prediction, confidence distribution, and token attribution highlights."
        ],
        architectureDiagram: [
          " [ Multimodal Input: Text / Image Meme / PDF Document ]",
          "                            │",
          "                            ▼",
          "             [ Text Extraction (Tesseract OCR) ]",
          "                            │",
          "                            ▼",
          "             [ Multilingual Preprocessing ]",
          "                            │",
          "                            ▼",
          "       ┌──────────────────────────────────────────┐",
          "       │   Fine-Tuned Transformer Models (PyTorch)│",
          "       │   • RoBERTa (Multilingual Encodings)     │",
          "       │   • IndicBERT (Regional Linguistic Nuance)│",
          "       │   • 80K+ Verified Training Dataset       │",
          "       └────────────────────┬─────────────────────┘",
          "                            ▼",
          "              [ Classification Probability ]",
          "                            │",
          "                            ▼",
          "             [ LIME Explainability Engine ]",
          "                            │",
          "                            ▼",
          "     [ FastAPI REST API: Score + Token Attribution Heatmap ]"
        ],
        keyEngineeringWork: [
          "Transformer Fine-Tuning: Trained and evaluated RoBERTa and IndicBERT models using PyTorch on an 80K+ sample multilingual dataset with cross-entropy loss and learning rate scheduling.",
          "Multimodal OCR Pipeline: Implemented document ingestion workflows using Tesseract OCR with image thresholding and noise reduction.",
          "Explainable AI Integration: Implemented LIME algorithms to compute token attribution weights, exposing which specific keywords drove the classification.",
          "Inference REST Service: Developed low-latency FastAPI endpoints supporting both synchronous single-item prediction and batch document moderation.",
          "Containerized Deployment: Packaged PyTorch runtime dependencies and model checkpoints into a standardized Docker image deployed on Hugging Face Spaces."
        ],
        coreFeatures: [
          "Multilingual Detection: Classifies text across English and regional Indic languages.",
          "Multimodal Ingestion: Directly handles text, image uploads, and scanned PDF documents.",
          "Explainable Predictions: Highlights exact words and tokens contributing to hate speech classification via LIME.",
          "Batch Moderation API: Enables automated scanning of multiple documents in bulk.",
          "Interactive Web Dashboard: React interface allowing real-time testing with sample text or image uploads."
        ],
        groupedTechStack: [
          { category: "Deep Learning & NLP", items: ["PyTorch", "Hugging Face Transformers", "RoBERTa", "IndicBERT", "80K+ Dataset"] },
          { category: "Explainable AI (XAI)", items: ["LIME (Local Interpretable Model-agnostic Explanations)"] },
          { category: "Vision & OCR", items: ["Tesseract OCR", "Python Imaging Library (PIL)"] },
          { category: "Backend & Inference", items: ["FastAPI", "Python", "Uvicorn", "REST APIs"] },
          { category: "Deployment", items: ["Docker", "Hugging Face Spaces"] }
        ],
        deployment: "Dockerized container deployment with GPU/CPU PyTorch inference on Hugging Face Spaces.",
        myContribution: "Solo Architect & Developer. Fine-tuned the multilingual Transformer models on the 80K+ sample dataset using PyTorch, engineered the Tesseract OCR multimodal text extraction pipeline, implemented LIME explainability scoring, built the FastAPI REST inference backend, created the interactive React web dashboard, and Dockerized the system for deployment."
      }
    },
    {
      id: "nexus-commerce",
      title: "Nexus Commerce Suite",
      primaryCategory: "DATA SCIENCE",
      primaryLanguage: "Python • SQL",
      categories: ["DATA SCIENCE", "BACKEND & FULL-STACK"],
      categoryType: "primary",
      shortSummary: "A business operations and analytics platform combining transactional order processing, inventory management, ABC analysis, RFM customer segmentation, and predictive sales forecasting.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "An enterprise analytical dashboard visualizing sales trends and operational parameters.",
      techBadges: ["Python", "SQL", "PostgreSQL", "Pandas", "NumPy", "Streamlit", "Time-Series Forecasting", "ABC Analysis", "RFM Analytics"],
      technicalDepth: {
        architecture: "Relational Transactions + Statistical Analytics Engine",
        backend: "Python Business Logic & Relational Services",
        storage: "PostgreSQL Relational Database",
        deployment: "Streamlit Cloud + Hosted PostgreSQL"
      },
      keyBullets: [
        "Architected an operational software platform for inventory tracking, order processing, and transactional data validation backed by PostgreSQL.",
        "Implemented quantitative business analytics algorithms including ABC Inventory Analysis (Pareto principle) and RFM Customer Segmentation.",
        "Engineered predictive sales forecasting workflows and an interactive analytics dashboard using Pandas, NumPy, and Streamlit."
      ],
      githubUrl: "https://github.com/BharathReddyRamasani/Nexus-Commerce-Suite.git",
      liveUrl: "https://bharathreddyramasani-nexus-commerce-suite-app-rbr.streamlit.app/",
      caseStudy: {
        overview: "An integrated business operations and data analytics suite that bridges daily operational workflows (inventory, stock tracking, sales entries) with quantitative analytics including ABC analysis, RFM segmentation, and predictive sales forecasting.",
        problem: "Small-to-midsize commercial enterprises often track stock in disconnected spreadsheets without transactional validation, lacking automated mechanisms to identify high-revenue inventory (Pareto distribution), categorize customer loyalty, or forecast upcoming sales demand.",
        solution: "Engineered a PostgreSQL-backed application pairing transactional data integrity with an analytical computing layer built using Pandas and NumPy, surfaced through an interactive Streamlit operations dashboard.",
        howItWorks: [
          "Operational Processing: Orders, incoming shipments, and inventory movements are committed to relational PostgreSQL tables.",
          "Analytical Ingestion: Pandas queries relational tables to generate consolidated operational datasets across product lines and customers.",
          "ABC Inventory Classification: The engine computes cumulative revenue contribution per SKU, assigning Pareto Category A (top 80% revenue), B (next 15%), and C (remaining 5%).",
          "RFM Segmentation: Calculates Recency (days since last purchase), Frequency (order count), and Monetary (total spend) scores for every customer account.",
          "Predictive Sales Forecasting: Historical time-series sales trends are modeled to forecast future product demand requirements.",
          "Interactive Dashboard: Streamlit visualizes inventory health alerts, segment matrices, and demand forecasts in real time."
        ],
        architectureDiagram: [
          " [ Daily Operations: Inventory Adjustments / Sales Transactions ]",
          "                               │",
          "                               ▼",
          "             [ PostgreSQL Relational Database ]",
          "              • Products • Inventory • Orders",
          "                               │",
          "                               ▼",
          "          [ Statistical Analytics Engine (Pandas & NumPy) ]",
          "          ┌────────────────────┬───────────────────┐",
          "          ▼                    ▼                   ▼",
          "    [ ABC Analysis ]    [ RFM Segmentation ]  [ Sales Forecasting ]",
          "   (Pareto 80/15/5%)    (Recency/Freq/Spend)  (Time-Series Trends)",
          "          │                    │                   │",
          "          └────────────────────┼───────────────────┘",
          "                               ▼",
          "           [ Interactive Streamlit Analytics Dashboard ]",
          "           • Stock Health • Customer Tiers • Demand Projections"
        ],
        keyEngineeringWork: [
          "Relational Schema Design: Modeled normalized PostgreSQL tables with foreign key relationships, constraints, and data integrity validations.",
          "Pareto ABC Algorithm: Developed automated revenue contribution sorting logic categorizing inventory into strategic A, B, and C tiers.",
          "RFM Segmentation Engine: Implemented statistical quantile scoring across recency, frequency, and monetary metrics to identify champion and at-risk customers.",
          "Time-Series Forecasting: Engineered trend and seasonality calculation algorithms using NumPy and Pandas to project future inventory demand.",
          "Interactive Dashboard Architecture: Built an intuitive Streamlit user interface featuring interactive parameter filters, operational tables, and dynamic charts."
        ],
        coreFeatures: [
          "Transactional Inventory Management: Real-time stock validation, movement logging, and low-stock alerts.",
          "ABC Inventory Analysis: Instant identification of core revenue-driving SKUs versus slow-moving inventory.",
          "RFM Customer Segmentation: Data-driven classification of customer purchasing habits.",
          "Predictive Sales Forecasting: Quantitative projections of short- and mid-term inventory demand.",
          "Interactive Visualizations: Dynamic charts, drill-down tables, and operational metric summaries."
        ],
        groupedTechStack: [
          { category: "Data Science & Analytics", items: ["Pandas", "NumPy", "Time-Series Modeling", "Pareto Analysis", "RFM Metrics"] },
          { category: "Database & Persistence", items: ["PostgreSQL (Relational Transactional Engine)", "SQL Queries"] },
          { category: "Application & Visualization", items: ["Streamlit", "Python"] },
          { category: "Deployment", items: ["Streamlit Cloud", "Hosted PostgreSQL"] }
        ],
        deployment: "Deployed live on Streamlit Cloud connected to hosted PostgreSQL database instances.",
        myContribution: "Solo Architect & Developer. Designed the relational PostgreSQL schema, developed the data extraction and analytical algorithms using Pandas and NumPy, implemented the ABC inventory analysis, RFM segmentation, and predictive sales forecasting algorithms, and engineered the complete Streamlit operations dashboard."
      }
    }
  ];

  // Filter projects based on selection
  const filteredProjects = activeFilter === "ALL" 
    ? projects 
    : projects.filter(p => p.categories.includes(activeFilter));

  const getCategoryBadgeStyle = (type: string) => {
    switch (type) {
      case "primary":
        return "bg-primary/10 text-primary border-primary/25";
      case "secondary":
        return "bg-secondary/10 text-secondary border-secondary/25";
      case "error":
        return "bg-tertiary/10 text-tertiary border-tertiary/25";
      default:
        return "bg-white/5 text-on-surface border-white/10";
    }
  };

  const getCategoryIcon = (type: string) => {
    switch (type) {
      case "primary":
        return <Cpu className="w-3.5 h-3.5 text-primary" />;
      case "secondary":
        return <ShoppingCart className="w-3.5 h-3.5 text-secondary" />;
      case "error":
        return <ShieldAlert className="w-3.5 h-3.5 text-tertiary" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-primary" />;
    }
  };

  return (
    <section id="projects" className="relative py-8 sm:py-10 px-4 sm:px-6 md:px-10 lg:px-14 max-w-7xl mx-auto z-10 scroll-mt-12">
      
      {/* SECTION HEADER (Compact) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-3 gap-2.5 border-b border-white/10 pb-2.5">
        <div>
          <span className="font-mono text-[10px] uppercase text-primary tracking-[0.25em] mb-1 block font-semibold">
            ENGINEERING EVIDENCE &amp; CASE STUDIES
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-extrabold text-on-surface flex items-center gap-2">
            Featured Projects
          </h2>
          <p className="font-sans text-[11px] sm:text-xs text-on-surface-variant max-w-2xl mt-0.5 leading-relaxed">
            Four production-oriented software and AI systems demonstrating multi-agent orchestration, hybrid recommendations, multimodal NLP, and transactional analytics.
          </p>
        </div>
        <div className="font-mono text-[10px] text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-lg shrink-0 font-semibold flex items-center gap-1.5">
          <Layers className="w-3 h-3" />
          <span>4 Production-Oriented Systems</span>
        </div>
      </div>

      {/* CATEGORY FILTER TABS (Compact) */}
      <div className="flex flex-wrap items-center gap-1.5 mb-3.5 pb-0.5">
        <span className="font-mono text-[10px] text-on-surface-variant/70 flex items-center gap-1 mr-1">
          <Filter className="w-3 h-3 text-primary" /> Filter:
        </span>
        {filterOptions.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`font-mono text-[11px] px-2.5 py-0.5 rounded-md border transition-all cursor-pointer font-semibold ${
              activeFilter === filter
                ? "bg-primary/20 text-primary border-primary glow-teal"
                : "bg-white/5 text-on-surface-variant hover:text-on-surface hover:bg-white/10 border-white/10"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* PROJECTS GRID (Space-Optimized Cards) */}
      <div className="grid grid-cols-1 gap-4 sm:gap-5">
        {filteredProjects.map((project) => {
          const isExpanded = !!expandedProjects[project.id];
          const cs = project.caseStudy;

          return (
            <div
              key={project.id}
              className="bg-surface-container-low/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 shadow-lg flex flex-col group"
            >
              {/* COMPACT CARD: Banner Image (4 cols) & Content (8 cols) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-white/10 items-stretch">
                
                {/* Visual Banner (Balanced width & height) */}
                <div className="lg:col-span-4 relative w-full h-48 sm:h-56 lg:h-full lg:min-h-[290px] overflow-hidden bg-black/40">
                  <img
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1513] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0e1513]/95" />
                </div>

                {/* Scannable Content (8 cols on lg, elaborated with breakout details) */}
                <div className="lg:col-span-8 p-4 sm:p-5 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    
                    {/* Top Badge Row: Category + Highlighted Language */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10.5px] font-mono border backdrop-blur-md ${getCategoryBadgeStyle(project.categoryType)}`}>
                        {getCategoryIcon(project.categoryType)}
                        <span>{project.primaryCategory}</span>
                      </span>
                      
                      {/* Prominently Highlighted Programming Language Badge */}
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10.5px] font-mono font-bold bg-[#081512] text-primary border border-primary/40 shadow-[0_0_8px_rgba(79,219,200,0.15)]">
                        <Terminal className="w-3 h-3 text-primary" />
                        <span>Lang: {project.primaryLanguage}</span>
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Short Summary (Concise) */}
                    <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                      {project.shortSummary}
                    </p>

                    {/* Recruiter Technical Depth Grid: 2x2 Clean Layout without Truncation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      <div className="bg-black/40 border border-white/10 p-2 sm:p-2.5 rounded-lg flex items-start gap-2.5">
                        <Workflow className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <span className="font-mono text-[9px] text-primary uppercase font-bold tracking-wider block leading-none mb-1">
                            Architecture
                          </span>
                          <span className="text-xs text-on-surface font-medium block leading-snug">
                            {project.technicalDepth.architecture}
                          </span>
                        </div>
                      </div>

                      <div className="bg-black/40 border border-white/10 p-2 sm:p-2.5 rounded-lg flex items-start gap-2.5">
                        <Server className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <span className="font-mono text-[9px] text-secondary uppercase font-bold tracking-wider block leading-none mb-1">
                            Backend
                          </span>
                          <span className="text-xs text-on-surface font-medium block leading-snug">
                            {project.technicalDepth.backend}
                          </span>
                        </div>
                      </div>

                      <div className="bg-black/40 border border-white/10 p-2 sm:p-2.5 rounded-lg flex items-start gap-2.5">
                        <Database className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <span className="font-mono text-[9px] text-amber-300 uppercase font-bold tracking-wider block leading-none mb-1">
                            Storage
                          </span>
                          <span className="text-xs text-on-surface font-medium block leading-snug">
                            {project.technicalDepth.storage}
                          </span>
                        </div>
                      </div>

                      <div className="bg-black/40 border border-white/10 p-2 sm:p-2.5 rounded-lg flex items-start gap-2.5">
                        <Layers className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <span className="font-mono text-[9px] text-emerald-400 uppercase font-bold tracking-wider block leading-none mb-1">
                            Deployment
                          </span>
                          <span className="text-xs text-on-surface font-medium block leading-snug">
                            {project.technicalDepth.deployment}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* High-Level Bullets (Full Complete Sentences, No Truncation) */}
                    <ul className="space-y-1.5 pt-1">
                      {project.keyBullets.slice(0, 2).map((bullet, bIdx) => (
                         <li key={bIdx} className="text-xs text-on-surface-variant leading-relaxed flex items-start gap-2">
                           <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                           <span>{bullet}</span>
                         </li>
                      ))}
                    </ul>
                  </div>

                  {/* Major Tech Stack Tags & Action Links */}
                  <div className="space-y-2.5 pt-2 border-t border-white/10">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="font-mono text-[10px] text-primary uppercase font-bold tracking-wider shrink-0 mr-1">
                        Major Stack:
                      </span>
                      {project.techBadges.map((t, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[10.5px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-md text-on-surface font-medium hover:border-primary/40 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* CTA Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-white/5 hover:bg-white/10 text-on-surface border border-white/10 py-1.5 px-3 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all hover:scale-105"
                        >
                          <Github className="w-3.5 h-3.5 text-primary" />
                          <span>GitHub</span>
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 py-1.5 px-3 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all hover:scale-105"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      </div>

                      {/* Expandable Case Study Trigger */}
                      <button
                        onClick={() => toggleCaseStudy(project.id)}
                        className="flex items-center gap-1.5 font-mono text-xs text-primary hover:text-primary-container transition-colors cursor-pointer border border-primary/30 bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-lg font-bold glow-teal"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="w-3.5 h-3.5" />
                            <span>Collapse Case Study</span>
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-3.5 h-3.5" />
                            <span>Explore Technical Case Study (11 Sections)</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* 11-PART DEEP ENGINEERING CASE STUDY DRAWER */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden bg-black/30 border-t border-white/10 p-4 sm:p-6 space-y-5"
                  >
                    {/* Header Ribbon */}
                    <div className="flex items-center justify-between border-b border-primary/20 pb-3">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-primary" />
                        <span className="font-mono text-xs text-primary font-bold tracking-widest uppercase">
                          TECHNICAL CASE STUDY &bull; DEEP INVESTIGATION
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-on-surface-variant/70">
                        100% Verified Engineering Documentation
                      </span>
                    </div>

                    {/* Section 01: Overview */}
                    <div className="space-y-1.5">
                      <h4 className="font-mono text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                        <span className="text-secondary">01</span> Overview
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-on-surface leading-relaxed">
                        {cs.overview}
                      </p>
                    </div>

                    {/* Section 02 & 03: Problem & Solution */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-surface-container-high/30 border border-white/5 p-3.5 sm:p-4 rounded-xl space-y-1.5">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-tertiary font-bold flex items-center gap-2">
                          <span className="text-secondary">02</span> Problem Statement
                        </h4>
                        <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                          {cs.problem}
                        </p>
                      </div>

                      <div className="bg-surface-container-high/30 border border-white/5 p-3.5 sm:p-4 rounded-xl space-y-1.5">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                          <span className="text-secondary">03</span> Engineered Solution
                        </h4>
                        <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                          {cs.solution}
                        </p>
                      </div>
                    </div>

                    {/* Section 04: How It Works */}
                    <div className="space-y-3">
                      <h4 className="font-mono text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                        <span className="text-secondary">04</span> How It Works (Execution Pipeline)
                      </h4>
                      <div className="grid grid-cols-1 gap-2.5">
                        {cs.howItWorks.map((step, sIdx) => (
                          <div key={sIdx} className="bg-black/20 border border-white/5 p-3 rounded-lg flex items-start gap-3">
                            <span className="font-mono text-xs text-primary font-bold bg-primary/10 w-5 h-5 rounded flex items-center justify-center shrink-0">
                              {sIdx + 1}
                            </span>
                            <span className="font-sans text-xs text-on-surface-variant leading-relaxed">
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Section 05: Architecture Diagram (Clean, Readable, Non-distracting) */}
                    <div className="space-y-3">
                      <h4 className="font-mono text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                        <span className="text-secondary">05</span> System Architecture &amp; Data Flow
                      </h4>
                      <div className="bg-[#080e0d] border border-primary/25 p-5 rounded-xl font-mono text-[11px] sm:text-xs text-primary/95 overflow-x-auto shadow-inner leading-relaxed select-text">
                        <pre className="font-mono">{cs.architectureDiagram.join("\n")}</pre>
                      </div>
                    </div>

                    {/* Section 06: Key Engineering Work */}
                    <div className="space-y-3">
                      <h4 className="font-mono text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                        <span className="text-secondary">06</span> Key Engineering Work &amp; Decisions
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {cs.keyEngineeringWork.map((decision, dIdx) => (
                          <div key={dIdx} className="bg-surface-container-high/30 border border-white/5 p-3.5 rounded-xl flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="font-sans text-xs text-on-surface-variant leading-relaxed">
                              {decision}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Section 07: Core Features */}
                    <div className="space-y-3">
                      <h4 className="font-mono text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                        <span className="text-secondary">07</span> Core Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                        {cs.coreFeatures.map((feat, fIdx) => (
                          <div key={fIdx} className="bg-black/20 border border-white/5 p-3 rounded-lg text-xs text-on-surface flex items-center gap-2 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Section 08: Grouped Technology Stack */}
                    <div className="space-y-3">
                      <h4 className="font-mono text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                        <span className="text-secondary">08</span> Technology Stack (Grouped)
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {cs.groupedTechStack.map((group, gIdx) => (
                          <div key={gIdx} className="bg-black/25 border border-white/5 p-3.5 rounded-xl space-y-2">
                            <span className="font-mono text-[10px] text-secondary uppercase font-bold block">
                              {group.category}
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {group.items.map((item, iIdx) => (
                                <span key={iIdx} className="font-mono text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-on-surface-variant">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Section 09: Deployment */}
                    <div className="space-y-2">
                      <h4 className="font-mono text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                        <span className="text-secondary">09</span> Deployment &amp; Infrastructure
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-on-surface-variant bg-surface-container-high/20 border border-white/5 p-3.5 rounded-xl">
                        {cs.deployment}
                      </p>
                    </div>

                    {/* Section 10: My Contribution (Solo Developer Verification) */}
                    <div className="space-y-2 bg-primary/5 border border-primary/20 p-5 rounded-2xl">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                          <span className="text-secondary">10</span> My Contribution (Solo Developer)
                        </h4>
                        <span className="font-mono text-[10px] bg-primary/10 text-primary border border-primary/25 px-2.5 py-0.5 rounded-full font-bold">
                          Sole Architect &amp; Developer
                        </span>
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        {cs.myContribution}
                      </p>
                    </div>

                    {/* Section 11: Direct Verification Links */}
                    <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
                        <span className="text-secondary font-bold">11</span>
                        <span>Verification Links:</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-white/5 hover:bg-white/10 text-on-surface border border-white/10 py-2 px-4 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all hover:scale-105"
                        >
                          <Github className="w-3.5 h-3.5 text-primary" />
                          <span>Inspect GitHub Codebase</span>
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-primary/15 hover:bg-primary/25 text-primary border border-primary/30 py-2 px-4 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all hover:scale-105 glow-teal"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>Open Live System Demo</span>
                        </a>
                      </div>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          );
        })}
      </div>

    </section>
  );
}
