import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Cpu, 
  Globe, 
  Zap, 
  ArrowRight, 
  Layers, 
  Database, 
  Terminal, 
  Github, 
  Linkedin, 
  Mail,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  Menu,
  X,
  Server,
  Activity,
  Play,
  RefreshCw,
  Code2
} from "lucide-react";

// ==========================================
// 1. Brand Logo & Navigation
// ==========================================
const Logo = () => (
  <div className="flex items-center gap-3.5 group cursor-pointer">
    <div className="relative flex items-center justify-center">
      {/* Outer spinning hexagon border */}
      <div className="absolute inset-0 bg-white rounded-xl blur-md opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500" />
      <div className="relative w-11 h-11 bg-black/40 border border-white/10 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:rounded-2xl group-hover:border-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-xl">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="w-6 h-6 text-white transform transition-all duration-700 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 3l9 4.5v9L12 21l-9-4.5v-9L12 3z" />
          <path d="M12 12l9-4.5" className="opacity-70 group-hover:opacity-100 transition-opacity" />
          <path d="M12 12v9" className="opacity-70 group-hover:opacity-100 transition-opacity" />
          <path d="M12 12L3 7.5" className="opacity-70 group-hover:opacity-100 transition-opacity" />
        </svg>
        {/* Glow overlay inside logo */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
    <div className="flex flex-col">
      <span className="font-display font-extrabold text-xl tracking-tight text-white leading-none">
        HBN<span className="text-zinc-400 font-medium ml-1.5">SYSTEMS</span>
      </span>
      <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-500 mt-1">
        ENGINEERING EXCELLENCE
      </span>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? "bg-[#050505]/70 backdrop-blur-2xl border-white/5 py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
          : "bg-transparent border-transparent py-5"
      }`}>
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-400">
            <a href="#expertise" className="hover:text-white transition-colors duration-300 relative py-1 group">
              Expertise
            </a>
            <a href="#philosophy" className="hover:text-white transition-colors duration-300 relative py-1 group">
              Methodology
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors duration-300 relative py-1 group">
              Selected Works
            </a>
            <a href="#contact" className="btn-secondary-sm">
              Get Started <ArrowRight className="w-3.5 h-3.5 ml-1 text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[70px] z-40 md:hidden bg-[#050505]/95 backdrop-blur-2xl border-b border-white/5 px-6 py-8 flex flex-col gap-6"
          >
            <a 
              href="#expertise" 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-white hover:text-zinc-300 transition-colors py-2 border-b border-white/5"
            >
              Expertise
            </a>
            <a 
              href="#philosophy" 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-white hover:text-zinc-300 transition-colors py-2 border-b border-white/5"
            >
              Methodology
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-white hover:text-zinc-300 transition-colors py-2 border-b border-white/5"
            >
              Selected Works
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="btn-primary py-4 text-center mt-4 w-full"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


// ==========================================
// 2. Hero Section & System Metrics Dashboard
// ==========================================
const Hero = () => {
  return (
    <section className="relative pt-52 pb-40 overflow-hidden">
      {/* Abstract 3D Ambient Orbs */}
      <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-white/[0.03] border border-white/5 shadow-[0_0_100px_rgba(255,255,255,0.05)] rounded-full blur-[80px] pointer-events-none animate-orb-1" />
      <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-white/[0.02] border border-white/5 shadow-[0_0_120px_rgba(255,255,255,0.03)] rounded-full blur-[100px] pointer-events-none animate-orb-2" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA0IiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20 pointer-events-none" style={{ maskImage: "linear-gradient(to bottom, black, transparent)" }} />

      <div className="section-container text-center max-w-5xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Styled Badge */}
          <div className="tag-etched mb-8 flex items-center gap-2 px-4 py-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-zinc-300"></span>
            </span>
            Premium Autonomous Systems
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-tighter leading-[1.05] mb-8 font-display drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
            Architecting the <br />
            <span className="text-gradient-premium">
              Autonomous
            </span> Future.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-md">
            We design and engineer high-performance AI engines, scalable workflow automations, 
            and state-of-the-art IoT infrastructure to accelerate modern enterprise systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <a href="#expertise" className="btn-primary w-full sm:w-auto group px-10 py-5 text-lg">
              Explore Systems <ArrowRight className="w-5 h-5 ml-1 text-white/70 group-hover:translate-x-1.5 transition-transform" />
            </a>
            <a href="#philosophy" className="btn-secondary w-full sm:w-auto px-10 py-5 text-lg">
              The Methodology
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


// ==========================================
// 3. Core Expertise Section
// ==========================================
const Expertise = () => {
  const cards = [
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "AI Web Applications",
      description: "Intellectually integrated web platforms. Engineered with React 19, Vite, Tailwind v4, and powered by LLM integration (Gemini, Claude) for real-time computational responses.",
      tech: ["Next.js", "React 19", "Gemini API", "Vector Embeddings"]
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Workflow Automation",
      description: "Autonomous data-pipeline engineering. Designing custom n8n configurations and secure webhook architectures to automate complex back-office systems with zero lag.",
      tech: ["n8n", "Node-RED", "REST/Webhooks", "JSON Schema"]
    },
    {
      icon: <Cpu className="w-6 h-6 text-white" />,
      title: "Smart Infrastructure",
      description: "Industrial IoT hardware-software integration. Designing robust environment monitors, custom relays, and system triggers running on edge-computing containers.",
      tech: ["IoT Edge", "MQTT", "Docker", "Node.js Server"]
    }
  ];

  return (
    <section id="expertise" className="relative bg-[#050505] py-32 border-y border-white/5 dot-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <span className="tag-etched">
            SYSTEM ENGINE CAPABILITIES
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-5 tracking-tight font-display drop-shadow-md">
            What We Build
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glass-3d-panel p-8 glass-3d-panel-hover flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Visual Accent Corner Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-white/20 transition-all duration-700" />
                
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <div className="transform transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                    {card.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-zinc-200 transition-colors duration-300">
                  {card.title}
                </h3>
                
                <p className="text-zinc-400 leading-relaxed font-medium mb-6">
                  {card.description}
                </p>
              </div>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-2 mt-4 pt-6 border-t border-white/5">
                {card.tech.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono font-semibold px-2.5 py-1 bg-black/40 border border-white/10 text-zinc-400 rounded-lg group-hover:border-white/20 group-hover:text-white transition-colors duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


// ==========================================
// 4. Philosophy Section & Interactive SVG Blueprint
// ==========================================
const Philosophy = () => {
  const [activeNode, setActiveNode] = useState<string>("user");
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [simStep, setSimStep] = useState(-1);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "Blueprint Ready. Trigger simulation to run flow diagnostics."
  ]);

  const nodes = {
    user: {
      name: "1. Client Request",
      desc: "User initiates an optimized workflow request with a JSON request payload.",
      details: "Payload contains request details, JWT auth parameters, and environmental constraints. Route selected automatically.",
      logs: [
        "[sys] User session established via HTTPS",
        "[sys] Header payload verified. Type: Application/JSON",
        "[client] Sent 1.4KB request to router node"
      ]
    },
    router: {
      name: "2. Load Balancer",
      desc: "Distributes queries dynamically to active AI worker threads based on current region.",
      details: "Edge load balancing directs the workflow request to regional containers. Active latency monitoring.",
      logs: [
        "[router] Received request from client",
        "[router] Target worker group: REGION-EAST-LLM",
        "[router] Dispatched context payload to AI Processor"
      ]
    },
    ai: {
      name: "3. AI Processing Node",
      desc: "Core intelligence node. Utilizes advanced Gemini reasoning engine to solve query goals.",
      details: "Translates unstructured inputs into actionable API calls and updates system state dynamically.",
      logs: [
        "[ai] Loaded token constraints (8000 limit)",
        "[ai] Executing inference model (Gemini 1.5)",
        "[ai] Model finished reasoning in 195ms"
      ]
    },
    db: {
      name: "4. Telemetry Storage",
      desc: "Stores and logs processing latency, session hashes, and analytics parameters.",
      details: "Writes to real-time telemetry stores. PostgreSQL cluster writes transactional history.",
      logs: [
        "[db] Triggering write-ahead transactional logs",
        "[db] Record locked successfully",
        "[db] Telemetry record committed (ID: 0x93FA)"
      ]
    },
    callback: {
      name: "5. API Webhook Response",
      desc: "Sends structured payload back to the client, triggering user action handlers.",
      details: "Completes pipeline execution lifecycle. Triggers web application UI adjustments.",
      logs: [
        "[webhook] Formulating encrypted client envelope",
        "[webhook] Client callback executed: 200 OK",
        "[sys] Process lifecycle complete (Total: 254ms)"
      ]
    }
  };

  const handleNodeClick = (nodeKey: string) => {
    if (simulationRunning) return;
    setActiveNode(nodeKey);
    setTerminalLogs(nodes[nodeKey as keyof typeof nodes].logs);
  };

  const runSimulation = async () => {
    if (simulationRunning) return;
    setSimulationRunning(true);
    setTerminalLogs(["[sys] Booting pipeline simulation..."]);
    
    const steps = ["user", "router", "ai", "db", "callback"];
    for (let i = 0; i < steps.length; i++) {
      setSimStep(i);
      const stepKey = steps[i];
      setActiveNode(stepKey);
      setTerminalLogs(prev => [...prev, ...nodes[stepKey as keyof typeof nodes].logs]);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    setSimStep(-1);
    setSimulationRunning(false);
  };

  return (
    <section id="philosophy" className="py-32 relative bg-[#050505] overflow-hidden">
      <div className="section-container grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Left: Text copy */}
        <div className="lg:col-span-5 text-left">
          <span className="tag-etched">
            ENGINEERING PRINCIPLES
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-5 mb-8 tracking-tight font-display drop-shadow-md">
            Systems Thinking. <br />Deterministic Code.
          </h2>
          <div className="space-y-6 text-zinc-400 leading-relaxed font-medium text-base sm:text-lg">
            <p>
              We believe that enterprise complexity should be completely invisible to users. 
              Our architecture methodology relies on isolated modular nodes, stateless operations, 
              and self-healing pipelines.
            </p>
            <p>
              Through autonomous ecosystem engineering, we bridge the gap between AI automation 
              and hard backend logic, creating apps that scale deterministically.
            </p>
          </div>
          
          <div className="mt-10 flex flex-wrap gap-2.5">
            {['Modular Node Design', 'State Isolation', 'High Concurrency', 'Self-Healing Routing'].map((tag) => (
              <span key={tag} className="tag-etched">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: SVG Diagram & Terminal Interaction Panel */}
        <div className="lg:col-span-7 w-full flex flex-col gap-6">
          <div className="glass-3d-panel p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-mono font-bold uppercase text-slate-400">System Blueprint Diagnostics</span>
              <button 
                onClick={runSimulation}
                disabled={simulationRunning}
                className="btn-secondary-sm bg-brand-primary/15 border-brand-primary/20 text-brand-accent hover:bg-brand-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {simulationRunning ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Simulating...
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" /> Run Simulation
                  </>
                )}
              </button>
            </div>

            {/* Interactive SVG Diagram */}
            <div className="bg-slate-950/80 border border-slate-800/60 rounded-xl p-4 flex items-center justify-center relative overflow-hidden mb-6 min-h-[220px]">
              <svg className="w-full max-w-[500px] h-[160px]" viewBox="0 0 500 160">
                {/* Connection lines */}
                {/* Node 1 to 2 */}
                <line 
                  x1="50" y1="80" x2="150" y2="80" 
                  stroke={simStep >= 1 ? "#3b82f6" : "#1e293b"} 
                  strokeWidth="2.5" 
                  strokeDasharray={simStep === 0 ? "5,5" : "none"}
                  className={simStep === 0 ? "animate-grid-scroll" : ""}
                />
                {/* Node 2 to 3 */}
                <line 
                  x1="150" y1="80" x2="250" y2="80" 
                  stroke={simStep >= 2 ? "#06b6d4" : "#1e293b"} 
                  strokeWidth="2.5"
                  strokeDasharray={simStep === 1 ? "5,5" : "none"}
                />
                {/* Node 3 to 4 */}
                <line 
                  x1="250" y1="80" x2="350" y2="80" 
                  stroke={simStep >= 3 ? "#10b981" : "#1e293b"} 
                  strokeWidth="2.5"
                  strokeDasharray={simStep === 2 ? "5,5" : "none"}
                />
                {/* Node 4 to 5 */}
                <line 
                  x1="350" y1="80" x2="450" y2="80" 
                  stroke={simStep >= 4 ? "#8b5cf6" : "#1e293b"} 
                  strokeWidth="2.5"
                  strokeDasharray={simStep === 3 ? "5,5" : "none"}
                />

                {/* Nodes circles */}
                {/* Node 1: User */}
                <g className="cursor-pointer" onClick={() => handleNodeClick("user")}>
                  <circle 
                    cx="50" cy="80" r="18" 
                    fill="#0f172a" 
                    stroke={activeNode === "user" ? "#3b82f6" : "#334155"} 
                    strokeWidth="3"
                    className="transition-all duration-300"
                  />
                  <Globe className={`w-5 h-5 absolute -translate-x-[10px] -translate-y-[10px] ${activeNode === "user" ? "text-brand-primary" : "text-slate-500"}`} style={{ left: "50px", top: "80px" }} />
                </g>

                {/* Node 2: Router */}
                <g className="cursor-pointer" onClick={() => handleNodeClick("router")}>
                  <circle 
                    cx="150" cy="80" r="18" 
                    fill="#0f172a" 
                    stroke={activeNode === "router" ? "#06b6d4" : "#334155"} 
                    strokeWidth="3"
                    className="transition-all duration-300"
                  />
                  <Layers className={`w-5 h-5 absolute -translate-x-[10px] -translate-y-[10px] ${activeNode === "router" ? "text-brand-accent" : "text-slate-500"}`} style={{ left: "150px", top: "80px" }} />
                </g>

                {/* Node 3: AI Engine */}
                <g className="cursor-pointer" onClick={() => handleNodeClick("ai")}>
                  <circle 
                    cx="250" cy="80" r="22" 
                    fill="#0f172a" 
                    stroke={activeNode === "ai" ? "#10b981" : "#334155"} 
                    strokeWidth="3"
                    className="transition-all duration-300"
                  />
                  <Cpu className={`w-6 h-6 absolute -translate-x-[12px] -translate-y-[12px] ${activeNode === "ai" ? "text-brand-emerald animate-pulse" : "text-slate-500"}`} style={{ left: "250px", top: "80px" }} />
                </g>

                {/* Node 4: DB */}
                <g className="cursor-pointer" onClick={() => handleNodeClick("db")}>
                  <circle 
                    cx="350" cy="80" r="18" 
                    fill="#0f172a" 
                    stroke={activeNode === "db" ? "#8b5cf6" : "#334155"} 
                    strokeWidth="3"
                    className="transition-all duration-300"
                  />
                  <Database className={`w-5 h-5 absolute -translate-x-[10px] -translate-y-[10px] ${activeNode === "db" ? "text-brand-purple" : "text-slate-500"}`} style={{ left: "350px", top: "80px" }} />
                </g>

                {/* Node 5: Callback */}
                <g className="cursor-pointer" onClick={() => handleNodeClick("callback")}>
                  <circle 
                    cx="450" cy="80" r="18" 
                    fill="#0f172a" 
                    stroke={activeNode === "callback" ? "#3b82f6" : "#334155"} 
                    strokeWidth="3"
                    className="transition-all duration-300"
                  />
                  <Terminal className={`w-5 h-5 absolute -translate-x-[10px] -translate-y-[10px] ${activeNode === "callback" ? "text-brand-primary" : "text-slate-500"}`} style={{ left: "450px", top: "80px" }} />
                </g>

                {/* Text Labels below circles */}
                <text x="50" y="125" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">Client</text>
                <text x="150" y="125" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">Router</text>
                <text x="250" y="125" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">AI Agent</text>
                <text x="350" y="125" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">Telemetry</text>
                <text x="450" y="125" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">Callback</text>
              </svg>
            </div>

            {/* Selected Node Details */}
            <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-slate-800/40 text-left">
              <div>
                <h4 className="text-base font-bold text-white mb-2 font-display flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-primary" />
                  {nodes[activeNode as keyof typeof nodes].name}
                </h4>
                <p className="text-xs text-text-muted leading-relaxed font-semibold">
                  {nodes[activeNode as keyof typeof nodes].desc}
                </p>
                <p className="text-[11px] text-slate-500 italic mt-2.5">
                  {nodes[activeNode as keyof typeof nodes].details}
                </p>
              </div>

              {/* Console Logs */}
              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800/80 font-mono text-[11px] text-slate-400 flex flex-col gap-1.5 h-[120px] overflow-y-auto">
                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500 block mb-1">NODE LOG STREAM</span>
                {terminalLogs.map((log, idx) => (
                  <div key={idx} className="leading-relaxed">
                    {log}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};


// ==========================================
// 5. Selected Works Portfolio Section
// ==========================================
const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Raza Meeran Enterprises",
      category: "infrastructure",
      categoryLabel: "B2B Industrial Platform",
      image: "/projects/meeranenterprises.jpeg",
      description: "Designed and deployed a premium B2B platform for industrial safety gear, currently in active use by the client. Features dynamic product discovery and automated distributor inquiry workflows.",
      link: "https://meeranenterprises.com",
      tech: ["B2B Platform", "Distributor Workflows", "Product Discovery", "Cloud Hosting"]
    },
    {
      title: "Raza Meeran Billing System",
      category: "fintech",
      categoryLabel: "Billing / Automation",
      image: "/projects/raza-meeran.png",
      description: "Built a custom React billing system currently in daily use by the client. Automated Google Sheets integration and dynamic document generation for enterprise invoicing workflows.",
      link: "https://raza-meeran-billing-system.vercel.app",
      tech: ["React.js", "Google Sheets API", "Document Generation", "Invoicing Workflows"]
    },
    {
      title: "Cosmicmind",
      category: "ai-web",
      categoryLabel: "AI Multi-Agent System",
      image: "/projects/Cosmicmind_1.jpeg",
      description: "Engineered a simulated astrophysics research engine powered by a multi-agent system of 7 specialized AI agents to automate spectral analysis, anomaly detection, and telescope coordinate generation.",
      link: "https://cosmicmind.vercel.app",
      tech: ["Next.js", "Multi-Agent System", "AI Reasoning", "Data Visualization"]
    },
    {
      title: "SmartLib Pro",
      category: "ai-web",
      categoryLabel: "Library Management / AI Chatbot",
      image: "/projects/smartlib.jpeg",
      description: "Engineered a professional library management system featuring a custom Gemini AI chatbot for intelligent catalogue assistance and an automated reservation queue for optimized inventory circulation.",
      link: "https://smart-library-ten.vercel.app",
      tech: ["React", "Gemini API", "Intelligent Chatbot", "Queue Management"]
    },
    {
      title: "BidMagnet AI",
      category: "ai-web",
      categoryLabel: "AI Proposal Architect",
      image: "/projects/bidmagnet_1.jpeg",
      description: "Engineered an AI SaaS tool using Next.js + Gemini to generate professional business bids instantly. Integrated structured LLM output handling and a polished proposal UI.",
      link: "https://bidmagnet-nine.vercel.app",
      tech: ["Next.js", "Gemini API", "Structured Outputs", "SaaS Proposal UI"]
    },
    {
      title: "FrontDesk Dental",
      category: "automation",
      categoryLabel: "Workflow Automation / AI",
      image: "/projects/frontdesk-dental_1.0.jpeg",
      description: "Created a 24/7 automated patient acquisition suite for a dental practice, combining lead capture forms, AI triage logic, and Calendly-based booking automation via n8n.",
      link: "https://frontdesk-dental-automated-patient.vercel.app",
      tech: ["n8n Integration", "AI Triage Logic", "Calendly API", "Lead Generation"]
    },
    {
      title: "LuxeEstate",
      category: "ai-web",
      categoryLabel: "AI Real Estate Platform",
      image: "/projects/luxeestate.jpeg",
      description: "Deployed a high-performance Next.js platform optimised for niche real-estate lead generation, with integrated AI qualification workflows.",
      link: "https://luxeestate-green.vercel.app",
      tech: ["Next.js", "AI Qualification", "Lead Generation", "Niche Real Estate"]
    },
    {
      title: "FlowState Plumbing",
      category: "ai-web",
      categoryLabel: "Gemini Vision Diagnostics",
      image: "/projects/flowstate.jpeg",
      description: "Developed an AI-powered diagnostic tool using Gemini Vision to provide instant plumbing repair assessments and cost estimations from user photos or descriptions.",
      link: "https://flowstate-plumbing-pro.vercel.app",
      tech: ["Gemini Vision", "AI Diagnostic Tool", "Cost Estimations", "Image Processing"]
    },
    {
      title: "Automation Systems",
      category: "automation",
      categoryLabel: "Ecosystem Automation",
      image: "/projects/automation-systems.png",
      description: "Built autonomous lead qualification agents using n8n + OpenAI + Calendly. Engineered zero-touch content pipelines to aggregate, summarize, and deliver weather/news email briefings.",
      link: "https://github.com/hammadbinnasir",
      tech: ["n8n", "OpenAI API", "Calendly API", "Zero-Touch Content Pipeline"]
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-32 relative bg-[#0a0a0a] border-t border-white/5 dot-grid">
      <div className="section-container">
        
        {/* Header Grid */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl text-left">
            <span className="tag-etched">
              ENGINEERING ARCHIVES
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-5 tracking-tight font-display drop-shadow-md">
              Selected Works
            </h2>
          </div>
          <p className="max-w-sm text-zinc-400 text-lg font-medium leading-relaxed text-left">
            A curated collection of highly robust applications, automated workflow engines, and cloud setups.
          </p>
        </div>

        {/* Interactive Filtering Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-12 border-b border-white/5 pb-6 text-left">
          {[
            { id: "all", label: "All Projects" },
            { id: "ai-web", label: "AI & Web Apps" },
            { id: "automation", label: "Automation" },
            { id: "infrastructure", label: "Infrastructure" },
            { id: "fintech", label: "FinTech" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider cursor-pointer border transition-all duration-300 ${
                filter === tab.id
                  ? "bg-white text-black border-white shadow-[0_4px_12px_rgba(255,255,255,0.2)]"
                  : "bg-black/40 border-white/10 text-zinc-400 hover:text-white hover:border-white/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div 
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-3d-panel group flex flex-col overflow-hidden transition-all duration-500 cursor-pointer p-2"
                onClick={() => project.link && window.open(project.link, '_blank')}
              >
                {/* Visual Image container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black rounded-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-[800ms] ease-out opacity-85 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {project.link && (
                    <div className="absolute top-6 right-6 w-11 h-11 bg-black/90 border border-white/10 rounded-xl flex items-center justify-center shadow-2xl translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  )}

                  <div className="absolute bottom-6 left-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-md text-white text-[9px] font-mono font-bold uppercase tracking-wider rounded-md border border-white/20">
                      View Case Study <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Description details */}
                <div className="p-6 text-left flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
                        {project.categoryLabel}
                      </span>
                      <div className="h-px w-5 bg-white/10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-zinc-200 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm font-semibold leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[9px] font-mono font-semibold px-2 py-1 bg-black/40 border border-white/10 text-zinc-500 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};


// ==========================================
// 6. Contact Form - Terminal Console Theme
// ==========================================
const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorDetails, setErrorDetails] = useState<string>('');
  
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorDetails('');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const errText = await response.text().catch(() => 'No details');
        setErrorDetails(`${response.status}: ${errText.substring(0, 50)}`);
        setStatus('error');
      }
    } catch (error: any) {
      setErrorDetails(error.message || 'Network error');
      setStatus('error');
    }
  };

  return (
    <div className="glass-3d-panel p-6 sm:p-10 mb-20 relative overflow-hidden">
      
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Left Col: Info details */}
        <div className="lg:col-span-5 text-left">
          <span className="tag-etched">
            CONNECT GATEWAY
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-5 mb-4 tracking-tight font-display leading-tight">
            Let's build something <br />extraordinary.
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base font-semibold leading-relaxed mb-10 max-w-sm">
            Ready to design or automate your systems? Connect with our engineering core to discuss custom solutions.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs sm:text-sm font-mono text-zinc-300">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                <Mail className="w-4.5 h-4.5" />
              </div>
              systemshbn@gmail.com
            </div>
            <div className="flex items-center gap-4 text-xs sm:text-sm font-mono text-zinc-300">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400">
                <Globe className="w-4.5 h-4.5" />
              </div>
              Lahore, Pakistan
            </div>
          </div>
        </div>

        {/* Right Col: Console Form */}
        <div className="lg:col-span-7 w-full">
          <div className="bg-black/60 border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            
            {/* Terminal Tab Bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-900 font-mono text-[10px] text-slate-500 select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
              </div>
              <span className="text-slate-400 font-bold flex items-center gap-1">
                <Code2 className="w-3.5 h-3.5 text-brand-primary" /> console.contact(hbn_systems)
              </span>
            </div>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-8 min-h-[300px]"
                >
                  <div className="w-14 h-14 bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 rounded-2xl flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 font-display">Connection Transmitted!</h4>
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 max-w-sm mb-8 font-mono text-xs text-left text-slate-400 space-y-1">
                    <p className="text-brand-emerald">[SUCCESS] Transmit OK.</p>
                    <p>[LOG] Telemetry payload saved.</p>
                    <p>[LOG] Response SLA: 4 business hours.</p>
                  </div>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="btn-secondary px-6 py-2.5 text-xs font-mono font-bold"
                  >
                    Reset Console Connection
                  </button>
                </motion.div>
              ) : (
                <form 
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5 text-left font-mono text-xs"
                >
                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider flex items-center gap-1">
                        <span>var</span> name =
                      </label>
                      <div className={`flex items-center border rounded-xl bg-slate-900/60 transition-all duration-300 ${focusedField === 'name' ? 'border-brand-primary shadow-[0_0_15px_rgba(59,130,246,0.1)]' : 'border-slate-800/80'}`}>
                        <span className="pl-4 pr-1 text-slate-500 select-none">"</span>
                        <input 
                          required
                          name="name"
                          type="text" 
                          placeholder="John Doe"
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-transparent px-1 py-3 text-slate-200 placeholder-slate-600 focus:outline-none font-mono"
                        />
                        <span className="pr-4 pl-1 text-slate-500 select-none">";</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider flex items-center gap-1">
                        <span>var</span> email =
                      </label>
                      <div className={`flex items-center border rounded-xl bg-slate-900/60 transition-all duration-300 ${focusedField === 'email' ? 'border-brand-primary shadow-[0_0_15px_rgba(59,130,246,0.1)]' : 'border-slate-800/80'}`}>
                        <span className="pl-4 pr-1 text-slate-500 select-none">"</span>
                        <input 
                          required
                          name="email"
                          type="email" 
                          placeholder="john@example.com"
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-transparent px-1 py-3 text-slate-200 placeholder-slate-600 focus:outline-none font-mono"
                        />
                        <span className="pr-4 pl-1 text-slate-500 select-none">";</span>
                      </div>
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider flex items-center gap-1">
                      <span>var</span> queryDetails =
                    </label>
                    <div className={`flex items-start border rounded-xl bg-slate-900/60 transition-all duration-300 ${focusedField === 'message' ? 'border-brand-primary shadow-[0_0_15px_rgba(59,130,246,0.1)]' : 'border-slate-800/80'}`}>
                      <span className="pl-4 pt-3.5 pr-1 text-slate-500 select-none">`</span>
                      <textarea 
                        required
                        name="message"
                        rows={4}
                        placeholder="Define your optimization project requirements..."
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent px-1 py-3 text-slate-200 placeholder-slate-600 focus:outline-none font-mono resize-none"
                      />
                      <span className="pr-4 pt-3.5 pl-1 self-end text-slate-500 select-none">`;</span>
                    </div>
                  </div>

                  {/* Submit button */}
                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-gradient-to-r from-brand-primary to-brand-accent text-white py-4 rounded-xl font-bold tracking-tight shadow-md shadow-brand-primary/15 hover:shadow-lg hover:shadow-brand-primary/25 cursor-pointer hover:-translate-y-[1px] active:translate-y-0 disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Execute Connection <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {status === 'error' && (
                    <p className="text-red-500 text-[10px] font-bold text-center mt-2.5">
                      [ERROR] connection_refused ({errorDetails}). Re-execute query.
                    </p>
                  )}
                </form>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </div>
  );
};


// ==========================================
// 7. Footer
// ==========================================
const Footer = () => (
  <footer id="contact" className="bg-[#050505] border-t border-white/5 pt-28 pb-16 relative overflow-hidden">
    <div className="absolute top-[80%] left-[50%] -translate-x-1/2 w-[350px] h-[150px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />
    
    <div className="max-w-[1200px] mx-auto px-6">
      
      {/* Contact Form component nested inside Footer to keep original semantic hierarchy */}
      <ContactForm />

      {/* Grid container */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-24 text-left">
        <div className="col-span-2 lg:col-span-2">
          <div className="mb-8">
            <Logo />
          </div>
          <p className="text-zinc-400 max-w-sm leading-relaxed mb-8 font-semibold text-sm">
            Engineering high-performance enterprise engines. We design, build, and optimize 
            digital frameworks for ambitious scaling organizations.
          </p>
          
          <div className="flex gap-4">
            {[
              { Icon: Github, href: "https://github.com/hammadbinnasir", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/hammad-bin-nasir-8b8a011b3/", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:systemshbn@gmail.com", label: "Email" }
            ].map(({ Icon, href, label }) => (
              <a 
                key={label}
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                title={label}
              >
                <Icon className="w-4.5 h-4.5" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-6 font-mono">Solutions</h5>
          <ul className="space-y-4 text-xs font-semibold text-zinc-400">
            <li><a href="#expertise" className="hover:text-white transition-colors duration-300">AI Integration</a></li>
            <li><a href="#expertise" className="hover:text-white transition-colors duration-300">Workflow Engines</a></li>
            <li><a href="#expertise" className="hover:text-white transition-colors duration-300">Smart Edge IoT</a></li>
            <li><a href="#expertise" className="hover:text-white transition-colors duration-300">Optimized ERP</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-6 font-mono">Studio</h5>
          <ul className="space-y-4 text-xs font-semibold text-zinc-400">
            <li><a href="#philosophy" className="hover:text-white transition-colors duration-300">Methodology</a></li>
            <li><a href="#portfolio" className="hover:text-white transition-colors duration-300">Selected Works</a></li>
            <li><a href="#portfolio" className="hover:text-white transition-colors duration-300">The Sandbox</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact Gateway</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-6 font-mono">Security</h5>
          <ul className="space-y-4 text-xs font-semibold text-zinc-400">
            <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Protocols</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">System Logs</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Security SLA</a></li>
          </ul>
        </div>
      </div>
      
      {/* Sub Footer details */}
      <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 font-mono text-[10px] text-zinc-500 tracking-wider">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 font-bold uppercase">
          <span>© 2026 Hammad Bin Nasir Group</span>
          <span className="hidden md:block w-1.5 h-1.5 bg-zinc-800 rounded-full" />
          <span>All Rights Reserved.</span>
        </div>
        
        <div className="mt-6 md:mt-0 flex items-center gap-6 font-bold uppercase">
          <span className="flex items-center gap-2 text-zinc-400">
            <span className="w-2.5 h-2.5 bg-white/10 border border-white/20 rounded-full flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            </span>
            SYSTEMS OPERATIONAL [14ms]
          </span>
          <a href="#" className="hover:text-white transition-colors duration-300">Back to Top</a>
        </div>
      </div>

    </div>
  </footer>
);

// ==========================================
// 8. Main Application Root
// ==========================================
export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col justify-between selection:bg-white/20 select-none">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Expertise />
        <Philosophy />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
