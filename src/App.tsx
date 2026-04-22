import React, { useState } from "react";
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
  ShieldCheck
} from "lucide-react";

const Logo = () => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <div className="relative flex items-center justify-center">
      <div className="w-10 h-10 bg-text-main rounded-xl flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:rounded-[1.25rem] group-hover:bg-brand-primary shadow-2xl shadow-text-main/10">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="w-6 h-6 text-white transform transition-transform duration-500 group-hover:scale-110"
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 3l9 4.5v9L12 21l-9-4.5v-9L12 3z" />
          <path d="M12 12l9-4.5" />
          <path d="M12 12v9" />
          <path d="M12 12L3 7.5" />
        </svg>
      </div>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-primary rounded-full border-2 border-white scale-0 group-hover:scale-100 transition-transform duration-300 delay-100 shadow-lg" />
    </div>
    <div className="flex flex-col">
      <span className="font-black text-xl tracking-[-0.03em] text-text-main leading-none">
        HBN <span className="text-brand-primary">SYSTEMS</span>
      </span>
      <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-text-muted mt-1 opacity-80">
        Engineering Excellence
      </span>
    </div>
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border-light">
    <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
      <Logo />
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-text-muted">
        <a href="#expertise" className="hover:text-brand-primary transition-colors">Expertise</a>
        <a href="#philosophy" className="hover:text-brand-primary transition-colors">Philosophy</a>
        <a href="#portfolio" className="hover:text-brand-primary transition-colors">Portfolio</a>
        <a href="#contact" className="btn-primary py-1.5 px-4 text-sm">Get Started</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-48 pb-32 bg-white overflow-hidden">
    {/* Elite Background Accents */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-400/5 rounded-full blur-[100px]" />
    </div>

    <div className="section-container relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold uppercase tracking-[0.2em] text-brand-primary bg-brand-primary/5 border border-brand-primary/10 rounded-full">
          <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse" />
          Next-Gen Enterprise Solutions
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-text-main tracking-[-0.04em] mb-10 leading-[0.95]">
          Engineering <br className="hidden md:block" />
          <span className="text-brand-primary">Autonomous</span> Future.
        </h1>
        
        <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          We architect high-performance AI ecosystems and workflow engines 
          that redefine operational speed for the modern enterprise.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#expertise" className="btn-primary w-full sm:w-auto px-12 py-5 text-lg shadow-2xl shadow-brand-primary/20">
            Explore Systems <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#philosophy" className="btn-secondary w-full sm:w-auto px-12 py-5 text-lg">
            The Methodology
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Expertise = () => {
  const cards = [
    {
      icon: <Globe className="w-6 h-6 text-brand-primary" />,
      title: "AI Web Applications",
      description: "Scalable, intelligent interfaces built with Next.js and integrated with advanced LLMs like Gemini for superior user engagement."
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-primary" />,
      title: "Workflow Automation",
      description: "Autonomous pipeline engineering using n8n and custom-built engines to eliminate operational bottlenecks."
    },
    {
      icon: <Cpu className="w-6 h-6 text-brand-primary" />,
      title: "Smart Infrastructure",
      description: "IoT and hardware-software integration for industrial and enterprise-grade environment control systems."
    }
  ];

  return (
    <section id="expertise" className="bg-surface-bg">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4">Core Expertise</h2>
          <h3 className="text-4xl font-bold text-text-main">What We Build</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -12,
                scale: 1.01,
              }}
              viewport={{ once: true }}
              transition={{ 
                delay: idx * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              className="tech-card p-10 group cursor-default relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-500">
                <div className="text-brand-primary group-hover:text-white transition-colors duration-500">
                  {card.icon}
                </div>
              </div>
              
              <h4 className="text-2xl font-black text-text-main mb-4 tracking-tight group-hover:text-brand-primary transition-colors duration-300">
                {card.title}
              </h4>
              
              <p className="text-text-muted leading-relaxed text-lg font-medium">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => (
  <section id="philosophy" className="bg-white relative overflow-hidden">
    <div className="section-container grid lg:grid-cols-2 gap-24 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-brand-primary font-bold uppercase tracking-[0.3em] text-xs mb-6">The Methodology</h2>
        <h3 className="text-5xl md:text-6xl font-black text-text-main mb-10 leading-[1.1] tracking-tight">
          Systems Thinking. <br />
          Engineering Excellence.
        </h3>
        <div className="space-y-8 text-text-muted text-xl leading-relaxed font-medium">
          <p>
            We believe that true complexity should be invisible. Our engineering process 
            is rooted in the principles of modularity, deterministic logic, and infinite scalability.
          </p>
          <p>
            By architecting autonomous ecosystems, we enable enterprises to transcend 
            manual limitations and operate at the speed of thought.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          {['Modular Architecture', 'Deterministic Logic', 'Infinite Scalability', 'Autonomous Edge'].map((tag) => (
            <span key={tag} className="px-5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-600">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
      
      <div className="relative group">
        <div className="absolute inset-0 bg-brand-primary/5 rounded-[3rem] blur-3xl group-hover:bg-brand-primary/10 transition-colors duration-700" />
        <div className="relative aspect-square rounded-[2.5rem] bg-white border border-slate-100 shadow-2xl p-10 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-8 w-full h-full">
            {[
              { icon: <Layers />, label: 'Architecture', desc: 'Structural Integrity' },
              { icon: <Database />, label: 'Systems', desc: 'Data Ecosystems' },
              { icon: <Terminal />, label: 'Logic', desc: 'Deterministic Code' },
              { icon: <Zap />, label: 'Speed', desc: 'Operational Velocity' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-slate-50 rounded-3xl flex flex-col items-center justify-center p-6 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="text-brand-primary mb-4 transform scale-125">
                  {item.icon}
                </div>
                <span className="font-black text-sm text-text-main uppercase tracking-widest">{item.label}</span>
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-tighter mt-1">{item.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  const projects = [
    {
      title: "Meeran Enterprises",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      description: "Digital transformation and infrastructure engineering for global enterprise operations.",
      link: "https://www.meeranenterprises.com/"
    },
    {
      title: "Raza Meeran Billing",
      category: "FinTech",
      image: "/projects/raza-meeran.png",
      description: "Autonomous financial management and automated billing engine for complex logistics.",
      link: "https://raza-meeran-billing-system.vercel.app/"
    },
    {
      title: "BidMagnet AI",
      category: "SaaS",
      image: "/projects/bidmagnet.png",
      description: "High-frequency automated bidding engine powered by predictive AI models."
    },
    {
      title: "FlowState ERP",
      category: "Automation",
      image: "/projects/flowstate.png",
      description: "Custom ERP and dispatch automation for large-scale field service operations."
    }
  ];

  return (
    <section id="portfolio" className="bg-slate-50 relative overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-brand-primary font-bold uppercase tracking-[0.3em] text-xs mb-6">Selected Works</h2>
            <h3 className="text-5xl md:text-6xl font-black text-text-main tracking-tight">The Portfolio.</h3>
          </div>
          <p className="max-w-sm text-text-muted text-lg font-medium leading-relaxed">
            A curated showcase of high-performance systems and elite enterprise solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group cursor-pointer"
              onClick={() => project.link && window.open(project.link, '_blank')}
            >
              <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-slate-200 shadow-2xl transition-all duration-700 group-hover:shadow-brand-primary/10">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text-main/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {project.link && (
                  <div className="absolute top-8 right-8 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <ExternalLink className="w-6 h-6 text-brand-primary" />
                  </div>
                )}
                
                <div className="absolute bottom-10 left-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                   <span className="px-4 py-1.5 bg-brand-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    View Case Study
                  </span>
                </div>
              </div>
              
              <div className="mt-8 px-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em]">
                    {project.category}
                  </span>
                  <div className="h-px w-8 bg-brand-primary/30" />
                </div>
                <h4 className="text-3xl font-black text-text-main mb-3 tracking-tight group-hover:text-brand-primary transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-text-muted text-lg font-medium leading-relaxed max-w-md">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
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
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-surface-bg border border-border-light rounded-2xl p-8 mb-24">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-3xl font-bold text-text-main mb-4">Let's build something <br /> extraordinary.</h3>
          <p className="text-text-muted mb-8">
            Ready to automate your enterprise? Reach out to our engineering team for a technical consultation.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm font-semibold text-text-main">
              <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <Mail className="w-5 h-5" />
              </div>
              systemshbn@gmail.com
            </div>
            <div className="flex items-center gap-4 text-sm font-semibold text-text-main">
              <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <Globe className="w-5 h-5" />
              </div>
              Lahore, Pakistan
            </div>
          </div>
        </div>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white rounded-xl border border-green-100 p-8 z-10"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-text-main mb-2">Message Sent!</h4>
                <p className="text-text-muted mb-6">Thank you for reaching out. We'll get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="btn-secondary px-6 py-2 text-sm"
                >
                  Send another message
                </button>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <form className={`space-y-4 transition-opacity duration-300 ${status === 'success' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Name</label>
                <input 
                  required
                  name="name"
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-border-light bg-white focus:outline-none focus:border-brand-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Email</label>
                <input 
                  required
                  name="email"
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-border-light bg-white focus:outline-none focus:border-brand-primary transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Message</label>
              <textarea 
                required
                name="message"
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 rounded-xl border border-border-light bg-white focus:outline-none focus:border-brand-primary transition-colors resize-none"
              />
            </div>
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary w-full py-4 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                "Send Message"
              )}
            </button>
            {status === 'error' && (
              <p className="text-red-500 text-xs font-bold text-center mt-2">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-white border-t border-slate-100 pt-32 pb-16">
    <div className="max-w-[1200px] mx-auto px-6">
      <ContactForm />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-32">
        <div className="col-span-2 lg:col-span-2">
          <div className="mb-10">
            <Logo />
          </div>
          <p className="text-text-muted max-w-sm leading-relaxed mb-10 text-lg font-medium">
            Engineering the future of enterprise autonomy. We architect high-performance 
            ecosystems for the world's most ambitious companies.
          </p>
          <div className="flex gap-5">
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
                className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 shadow-sm"
                title={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h5 className="text-text-main font-bold text-sm uppercase tracking-widest mb-6">Solutions</h5>
          <ul className="space-y-4 text-sm font-medium text-text-muted">
            <li><a href="#expertise" className="hover:text-brand-primary transition-colors">AI Integration</a></li>
            <li><a href="#expertise" className="hover:text-brand-primary transition-colors">Workflow Automation</a></li>
            <li><a href="#expertise" className="hover:text-brand-primary transition-colors">Smart Infrastructure</a></li>
            <li><a href="#expertise" className="hover:text-brand-primary transition-colors">Custom ERP</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-text-main font-bold text-sm uppercase tracking-widest mb-6">Company</h5>
          <ul className="space-y-4 text-sm font-medium text-text-muted">
            <li><a href="#philosophy" className="hover:text-brand-primary transition-colors">Our Philosophy</a></li>
            <li><a href="#portfolio" className="hover:text-brand-primary transition-colors">Selected Works</a></li>
            <li><a href="#portfolio" className="hover:text-brand-primary transition-colors">The Lab</a></li>
            <li><a href="#contact" className="hover:text-brand-primary transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-text-main font-bold text-sm uppercase tracking-widest mb-6">Legal</h5>
          <ul className="space-y-4 text-sm font-medium text-text-muted">
            <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors">Cookie Settings</a></li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-border-light">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs font-bold text-text-muted uppercase tracking-widest">
          <span>© 2026 Hammad Bin Nasir Group</span>
          <span className="hidden md:block w-1 h-1 bg-border-light rounded-full" />
          <span>All rights reserved.</span>
        </div>
        <div className="mt-6 md:mt-0 flex items-center gap-6 text-xs font-bold text-text-muted uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Systems Operational
          </span>
          <a href="#" className="hover:text-brand-primary transition-colors">Back to Top</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Philosophy />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
