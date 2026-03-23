/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Shield, 
  Terminal, 
  Cpu, 
  Brain, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code, 
  Server,
  User,
  Briefcase,
  GraduationCap,
  ChevronRight
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-slate-200 font-sans selection:bg-emerald-500/30">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0A0A0B]/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono font-bold text-emerald-500">
            <Terminal size={20} />
            <span>MARC_BROUWER</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#pathway" className="hover:text-emerald-400 transition-colors">Pathway</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
          </div>
          <a 
            href="mailto:mfa.brouwer@gmail.com"
            className="px-4 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-sm font-medium hover:bg-emerald-500/20 transition-all"
          >
            Contact
          </a>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
        
        {/* Hero Section */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              CURRENTLY_LEARNING: CYBERSECURITY
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
              Building the future of <br />
              <span className="text-emerald-500">Digital Defense.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
              I'm Marc Brouwer, an aspiring Cybersecurity professional currently transitioning from operational management 
              and technical support into the world of ethical hacking and network security.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition-all flex items-center gap-2">
                View My Projects <ChevronRight size={18} />
              </button>
              <div className="flex items-center gap-3 px-2">
                <a href="#" className="p-3 text-slate-400 hover:text-white transition-colors"><Github size={22} /></a>
                <a href="#" className="p-3 text-slate-400 hover:text-white transition-colors"><Linkedin size={22} /></a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats/Highlights Grid */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all"
          >
            <Brain className="text-emerald-500 mb-4" size={32} />
            <h3 className="text-xl font-semibold text-white mb-2">Logical Mindset</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Scored 136 on abstract reasoning (IQ test), reflecting a natural aptitude for pattern recognition and complex problem-solving.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all"
          >
            <Cpu className="text-emerald-500 mb-4" size={32} />
            <h3 className="text-xl font-semibold text-white mb-2">Hardware Enthusiast</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Experienced in building custom PCs and overclocking. Deep understanding of hardware-software interaction.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all"
          >
            <Terminal className="text-emerald-500 mb-4" size={32} />
            <h3 className="text-xl font-semibold text-white mb-2">Technical Foundation</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Proficient with hex editors and low-level software tools. Quick to master new technical environments.
            </p>
          </motion.div>
        </section>

        {/* Current Pathway */}
        <section id="pathway" className="mb-32">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <GraduationCap className="text-emerald-500" />
                The Journey
              </h2>
              <div className="space-y-8">
                <div className="relative pl-8 border-l border-emerald-500/30">
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                  <h4 className="text-lg font-semibold text-white">Pathways via Techgrounds</h4>
                  <span className="text-emerald-400 text-sm font-mono">2026 — Present</span>
                  <p className="text-slate-400 mt-2">
                    Intensive broad orientation in IT, focusing on building a solid foundation for a specialized career in Cybersecurity.
                  </p>
                </div>
                <div className="relative pl-8 border-l border-white/10">
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-slate-700"></div>
                  <h4 className="text-lg font-semibold text-white">Operational Management</h4>
                  <span className="text-slate-500 text-sm font-mono">2024</span>
                  <p className="text-slate-400 mt-2">
                    Successfully completed a stage trajectory at NLConnekt, developing strong organizational and leadership skills.
                  </p>
                </div>
                <div className="relative pl-8 border-l border-white/10">
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-slate-700"></div>
                  <h4 className="text-lg font-semibold text-white">Technical Support (Ziggo)</h4>
                  <span className="text-slate-500 text-sm font-mono">2021</span>
                  <p className="text-slate-400 mt-2">
                    Provided technical helpdesk support for complex customer queries, honing troubleshooting and communication skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Shield size={120} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity Goal</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  My objective is to leverage my analytical strength and technical curiosity to protect digital infrastructures. 
                  I am currently focusing on:
                </p>
                <ul className="space-y-3 text-sm font-mono text-emerald-400">
                  <li className="flex items-center gap-2">
                    <ChevronRight size={14} /> Network Security Fundamentals
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={14} /> Ethical Hacking Principles
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={14} /> Threat Analysis & Mitigation
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={14} /> System Hardening
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Arsenal</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Hardware Systems", icon: <Cpu size={20} /> },
              { name: "Hex Editors", icon: <Code size={20} /> },
              { name: "Network Basics", icon: <Server size={20} /> },
              { name: "Problem Solving", icon: <Brain size={20} /> },
              { name: "Dutch (Native)", icon: <User size={20} /> },
              { name: "English (Fluent)", icon: <User size={20} /> },
              { name: "Quick Learning", icon: <ChevronRight size={20} /> },
              { name: "Team Player", icon: <Briefcase size={20} /> },
            ].map((skill, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-sm font-medium hover:border-emerald-500/20 transition-colors">
                <span className="text-emerald-500">{skill.icon}</span>
                {skill.name}
              </div>
            ))}
          </div>
        </section>

        {/* Footer / Contact */}
        <footer className="pt-24 border-t border-white/5 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's connect</h2>
          <p className="text-slate-400 mb-8">Interested in my journey or want to discuss cybersecurity?</p>
          <div className="flex justify-center gap-4 mb-12">
            <a href="mailto:mfa.brouwer@gmail.com" className="p-4 rounded-full bg-white/[0.02] border border-white/5 hover:border-emerald-500/50 text-slate-400 hover:text-emerald-400 transition-all">
              <Mail size={24} />
            </a>
            <a href="#" className="p-4 rounded-full bg-white/[0.02] border border-white/5 hover:border-emerald-500/50 text-slate-400 hover:text-emerald-400 transition-all">
              <Github size={24} />
            </a>
            <a href="#" className="p-4 rounded-full bg-white/[0.02] border border-white/5 hover:border-emerald-500/50 text-slate-400 hover:text-emerald-400 transition-all">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-xs font-mono text-slate-600">
            &copy; {new Date().getFullYear()} MARC_BROUWER // BUILT_FOR_CYBERSECURITY
          </p>
        </footer>

      </main>
    </div>
  );
}
