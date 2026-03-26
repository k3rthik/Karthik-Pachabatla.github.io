/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Terminal, 
  User, 
  Briefcase, 
  Code, 
  Layers
} from 'lucide-react';
import { motion } from 'motion/react';

function PixelFace() {
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      const updateEye = (eye: HTMLDivElement | null, pupil: HTMLDivElement | null) => {
        if (!eye || !pupil) return;
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
        const distance = 3; // Max 3px offset
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        frameId = requestAnimationFrame(() => {
          pupil.style.transform = `translate(${x}px, ${y}px)`;
        });
      };

      updateEye(leftEyeRef.current, leftPupilRef.current);
      updateEye(rightEyeRef.current, rightPupilRef.current);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center gap-1.5">
      <div ref={leftEyeRef} className="w-2.5 h-2.5 rounded-full bg-white flex items-center justify-center overflow-hidden">
        <div ref={leftPupilRef} className="w-1 h-1 rounded-full bg-black" />
      </div>
      <div ref={rightEyeRef} className="w-2.5 h-2.5 rounded-full bg-white flex items-center justify-center overflow-hidden">
        <div ref={rightPupilRef} className="w-1 h-1 rounded-full bg-black" />
      </div>
    </div>
  );
}

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen selection-primary">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant shadow-[0_40px_40px_rgba(0,0,0,0.04)]">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-16">
          <span className="text-xl font-bold tracking-tighter text-on-surface font-headline">K. Pachabatla</span>
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex gap-8 items-center">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a 
                  key={item}
                  className="font-headline tracking-tighter uppercase text-sm text-on-surface-variant hover:text-on-surface transition-colors" 
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              ))}
            </div>
            <PixelFace />
          </div>
        </div>
      </nav>

      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-8 max-w-7xl mx-auto py-24 relative" id="hero">
          <div className="absolute inset-0 -z-10 opacity-20" style={{ background: 'radial-gradient(circle at 20% 30%, var(--surface-container-highest) 0%, var(--background) 70%)' }}></div>
          <motion.div 
            className="max-w-4xl space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-headline text-7xl md:text-9xl font-bold tracking-tighter text-on-surface leading-none">
              Karthik<br/>Pachabatla
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
              MS Data Science · AI/ML · Software Engineering. Building intelligent systems through data-driven precision and rigorous architecture.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <a className="bg-primary text-on-primary px-10 py-4 font-headline uppercase text-sm tracking-widest font-bold hover:opacity-90 transition-all" href="#projects">View My Work</a>
              <a className="border border-outline-variant px-10 py-4 font-headline uppercase text-sm tracking-widest font-bold hover:bg-surface-variant transition-all" href="mailto:karthikpachabatla75@gmail.com">Let's Talk</a>
            </div>
            <div className="flex gap-8 pt-12 items-center">
              <a className="text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2 group" href="https://github.com/k3rthik" target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                <span className="text-xs uppercase tracking-widest font-headline">GitHub</span>
              </a>
              <a className="text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2 group" href="https://linkedin.com/in/karthik-pachabatla-b01b40212" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
                <span className="text-xs uppercase tracking-widest font-headline">LinkedIn</span>
              </a>
              <a className="text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2 group" href="mailto:karthikpachabatla75@gmail.com">
                <Mail size={18} />
                <span className="text-xs uppercase tracking-widest font-headline">Email</span>
              </a>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-32 px-8 max-w-7xl mx-auto" id="about">
          <motion.div className="grid md:grid-cols-2 gap-20 items-start" {...fadeIn}>
            <div className="space-y-12">
              <h2 className="font-headline text-4xl font-bold tracking-tighter uppercase text-on-surface">The Cartographer</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>
            <div className="space-y-8">
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Currently pursuing an MS in Data Science at <span className="text-on-surface font-medium">Rochester Institute of Technology</span> (GPA 3.88). My journey is defined by the intersection of clinical precision and computational rigor.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                With professional experience in software engineering, I specialize in architecting backend systems that scale and AI models that provide actionable clarity. My focus lies in NLP, Large Language Models (LLMs), and developing robust RAG pipelines.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant">
                <div>
                  <p className="font-headline text-3xl text-on-surface font-bold">2+</p>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant">Years Exp</p>
                </div>
                <div>
                  <p className="font-headline text-3xl text-on-surface font-bold">3.88</p>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant">MS GPA</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section className="py-32 bg-surface-container-low" id="experience">
          <div className="max-w-7xl mx-auto px-8">
            <motion.h2 className="font-headline text-4xl font-bold tracking-tighter uppercase text-on-surface mb-20" {...fadeIn}>Work Experience</motion.h2>
            <div className="space-y-1">
              {[
                {
                  company: "CogBias AI",
                  role: "AI Research and Development Intern",
                  type: "Internship",
                  location: "Remote",
                  period: "FEBRUARY 2026 — PRESENT",
                  points: [
                    "Supported NLP/LLM features for bias detection systems.",
                    "Built RAG components to enhance contextual understanding in experimental AI frameworks.",
                    "Implemented inference workflows and automated evaluation metrics for model consistency.",
                    "Partnered with full-stack teams to integrate AI models into production-ready dashboard interfaces."
                  ]
                },
                {
                  company: "Rochester Institute of Technology",
                  role: "GCIS Tutor – Python & Java",
                  type: "Part-time",
                  location: "Rochester, NY",
                  period: "JANUARY 2026 — PRESENT",
                  points: [
                    "Tutored first-year students in foundational computer science principles and algorithmic problem solving.",
                    "Explained abstract programming concepts including OOP, data structures, and recursion.",
                    "Developed 10+ reusable mini-lessons to address common syntax and logic errors in Python and Java."
                  ]
                },
                {
                  company: "Rochester Institute of Technology",
                  role: "Graduate Teaching Assistant – Introduction to Database and Data Modeling",
                  type: "Part-time",
                  location: "Rochester, NY",
                  period: "AUGUST 2025 — PRESENT",
                  points: [
                    "Assisted students in mastering SQL, relational algebra, and schema design principles.",
                    "Graded SQL/MySQL assignments and provided constructive feedback on database normalization.",
                    "Reinforced concepts in query optimization and indexing through weekly lab sessions."
                  ]
                },
                {
                  company: "Kenfill Tech",
                  role: "Software Engineer",
                  type: "Full-time",
                  location: "Hyderabad, Telangana",
                  period: "JULY 2022 — JUNE 2024",
                  points: [
                    "Developed and integrated RESTful APIs using Java Spring Boot for high-traffic enterprise services.",
                    "Built responsive React.js front-end components and managed state with Redux Toolkit.",
                    "Wrote unit tests using JUnit and Mockito to ensure 85%+ code coverage across microservices."
                  ]
                }
              ].map((exp, idx) => (
                <motion.div 
                  key={idx}
                  className="group bg-surface-container p-12 hover:bg-surface-container-high transition-all duration-300 border-l border-outline-variant hover:border-primary"
                  {...fadeIn}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div>
                      <h3 className="font-headline text-2xl font-bold text-on-surface uppercase tracking-tight">{exp.company}</h3>
                      <div className="flex flex-wrap gap-x-4 text-secondary font-headline uppercase text-[10px] tracking-widest mt-1">
                        <span>{exp.role}</span>
                        <span>•</span>
                        <span>{exp.type}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <span className="text-on-surface-variant font-headline text-sm tabular-nums">{exp.period}</span>
                  </div>
                  <ul className="space-y-4 max-w-3xl text-on-surface-variant list-none">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-4">
                        <span className="text-bullet font-bold">/</span>
                        <p>{point}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-32 px-8 max-w-7xl mx-auto" id="projects">
          <div className="flex justify-between items-end mb-20">
            <h2 className="font-headline text-4xl font-bold tracking-tighter uppercase text-on-surface">Selected Works</h2>
            <p className="text-on-surface-variant font-headline text-xs tracking-widest hidden md:block">6 PROJECTS TOTAL</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant border border-outline-variant">
            {[
              {
                tags: ["D3.js", "Python"],
                title: "Global Governance Visual Analytics",
                desc: "Interactive dashboard analyzing world governance indicators through multidimensional scaling and heatmap clustering.",
                link: "https://github.com/k3rthik/global-governance-visual-analytics"
              },
              {
                tags: ["PyTorch", "NLP"],
                title: "Healthcare Data Normalization",
                desc: "End-to-end pipeline for mapping medical records to SNOMED-CT using BERT-based entity recognition.",
                link: "https://github.com/k3rthik/healthcare-data-normalization"
              },
              {
                tags: ["Kafka", "Go"],
                title: "Real-Time Credit Score Processing",
                desc: "Distributed system processing 10k+ financial transactions per second with low-latency scoring algorithms.",
                link: "https://github.com/k3rthik/real-time-credit-score-system"
              },
              {
                tags: ["Next.js", "OpenAI"],
                title: "Next.js AI Chatbot",
                desc: "Streaming AI interface with conversational memory and custom PDF knowledge retrieval (RAG).",
                link: "https://github.com/k3rthik/nextjs-ai-chatbot"
              },
              {
                tags: ["Scikit-Learn", "ETL"],
                title: "Predictive Anomaly Detection",
                desc: "Unsupervised learning system for detecting fraud patterns in high-volume network traffic logs.",
                link: "https://github.com/tharakneo/colombia-grid-forecasting"
              },
              {
                tags: ["React Native", "Firebase"],
                title: "CryptoTracker",
                desc: "Real-time cryptocurrency portfolio manager with WebSocket integration and price trend alerts.",
                link: "https://github.com/k3rthik/crypto_tracker"
              }
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                className="bg-surface p-10 flex flex-col justify-between hover:bg-surface-container-high transition-all duration-300 group"
                {...fadeIn}
              >
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-surface-container-highest text-on-surface">{tag}</span>
                    ))}
                  </div>
                  <h4 className="font-headline text-xl font-bold text-on-surface mb-4 leading-tight">{project.title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-8">{project.desc}</p>
                </div>
                <a 
                  className="flex items-center gap-2 text-on-surface font-headline text-xs uppercase tracking-widest group-hover:gap-4 transition-all" 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-32 bg-surface-container-low px-8" id="skills">
          <div className="max-w-7xl mx-auto">
            <motion.h2 className="font-headline text-4xl font-bold tracking-tighter uppercase text-on-surface mb-20" {...fadeIn}>Technical Stack</motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
              {[
                { title: "Languages", skills: ["Python", "Java", "SQL", "TypeScript", "R"] },
                { title: "AI / ML", skills: ["NLP & LLMs", "PyTorch / TensorFlow", "Hugging Face", "Scikit-Learn", "LangChain"] },
                { title: "Data Eng", skills: ["Spark / Hadoop", "Apache Kafka", "Airflow", "ETL Pipelines"] },
                { title: "Cloud & Tools", skills: ["AWS / GCP", "Docker / Kubernetes", "Git / CI-CD", "Tableau"] },
                { title: "Databases", skills: ["PostgreSQL", "MongoDB", "Redis", "Pinecone (Vector)"] }
              ].map((group, idx) => (
                <motion.div key={idx} className="space-y-6" {...fadeIn}>
                  <h5 className="text-primary font-headline uppercase text-xs tracking-[0.2em] border-b border-outline-variant pb-2">{group.title}</h5>
                  <ul className="space-y-3 text-on-surface-variant text-sm font-light">
                    {group.skills.map(skill => <li key={skill}>{skill}</li>)}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-32 px-8 max-w-7xl mx-auto border-t border-outline-variant">
          <div className="grid md:grid-cols-2 gap-20">
            <motion.div className="space-y-12" {...fadeIn}>
              <h2 className="font-headline text-4xl font-bold tracking-tighter uppercase text-on-surface">Academic Focus</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </motion.div>
            <div className="space-y-6">
              {[
                {
                  school: "Rochester Institute of Technology",
                  degree: "MS Data Science",
                  period: "2024 — PRESENT",
                  stats: [
                    { label: "GPA", value: "3.88" },
                    { label: "Location", value: "Rochester, NY" }
                  ]
                },
                {
                  school: "Vellore Institute of Technology",
                  degree: "BS Computer Science",
                  period: "2019 — 2023",
                  stats: [
                    { label: "Location", value: "Chennai, India" }
                  ]
                }
              ].map((edu, idx) => (
                <motion.div key={idx} className="bg-surface-container p-10 border border-outline-variant" {...fadeIn}>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-on-surface uppercase tracking-tight font-headline">{edu.school}</h3>
                      <p className="text-secondary font-headline uppercase text-xs tracking-widest mt-1">{edu.degree}</p>
                    </div>
                    <span className="text-on-surface-variant font-headline text-sm tabular-nums">{edu.period}</span>
                  </div>
                  <div className="flex gap-12 pt-6 border-t border-outline-variant">
                    {edu.stats.map(stat => (
                      <div key={stat.label}>
                        <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-2">{stat.label}</p>
                        <p className="font-headline text-2xl text-on-surface">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-48 px-8 max-w-7xl mx-auto text-center" id="contact">
          <motion.div className="max-w-3xl mx-auto space-y-12" {...fadeIn}>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface uppercase">Let's Interface</h2>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Open to Summer 2026 internships and collaborative research in AI/ML & Data Systems. 
              Let's discuss how data-driven rigor can transform your product.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <a className="bg-primary text-on-primary px-12 py-5 font-headline uppercase text-sm tracking-widest font-bold" href="mailto:karthikpachabatla75@gmail.com">Email Directly</a>
              <a className="border border-outline-variant px-12 py-5 font-headline uppercase text-sm tracking-widest font-bold hover:bg-surface-variant transition-all" href="https://linkedin.com/in/karthik-pachabatla-b01b40212" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-4 items-center justify-center bg-surface-container/60 backdrop-blur-md rounded-none border border-outline-variant px-6 py-3 shadow-2xl">
        {[
          { icon: <User size={18} />, label: "About", href: "#about" },
          { icon: <Briefcase size={18} />, label: "Exp", href: "#experience" },
          { icon: <Code size={18} />, label: "Projects", href: "#projects" },
          { icon: <Layers size={18} />, label: "Skills", href: "#skills" },
          { icon: <Mail size={18} />, label: "Contact", href: "#contact" }
        ].map((item, idx) => (
          <a key={idx} className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-on-surface transition-transform duration-300" href={item.href}>
            {item.icon}
            <span className="font-body text-[10px] font-medium uppercase tracking-widest">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Footer */}
      <footer className="bg-background w-full py-20 border-t border-outline-variant">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-on-surface font-bold font-headline uppercase tracking-tighter text-lg">K. Pachabatla</p>
            <p className="font-headline text-xs tracking-widest text-on-surface-variant">© 2024 Karthik Pachabatla. Engineered for Precision.</p>
          </div>
          <div className="flex gap-8">
            <a className="font-headline text-xs tracking-widest text-on-surface-variant hover:text-on-surface underline-offset-4 hover:underline" href="https://github.com/k3rthik" target="_blank" rel="noopener noreferrer">Github</a>
            <a className="font-headline text-xs tracking-widest text-on-surface-variant hover:text-on-surface underline-offset-4 hover:underline" href="https://linkedin.com/in/karthik-pachabatla-b01b40212" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="font-headline text-xs tracking-widest text-on-surface-variant hover:text-on-surface underline-offset-4 hover:underline" href="https://github.com/k3rthik/portfolio" target="_blank" rel="noopener noreferrer">Source</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
