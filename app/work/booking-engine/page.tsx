'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BookingEngineCaseStudy() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-[#F9F6F0] text-[#2B231F] min-h-screen selection:bg-[#D4C5B9] selection:text-[#2B231F]">
      <article className="max-w-[980px] mx-auto px-7 py-16 space-y-16">
        
        {/* Back Navigation */}
        <div className="pt-4">
          <Link 
            href="/" 
            className="mono-text text-[0.8rem] text-[#C29F72] hover:text-[#2B231F] transition-colors uppercase tracking-widest font-semibold flex items-center space-x-2"
          >
            <span>&larr; Back to HomePage</span>
          </Link>
        </div>

        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="mono-text text-[0.8rem] text-[#C29F72] uppercase tracking-wider font-bold">
            01 / CASE STUDY — PRODUCTION ENGINE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#2B231F] leading-[1.1]">
            Ama Events Co.
          </h1>
          <p className="text-xl md:text-2xl text-[#2B231F]/80 leading-relaxed max-w-3xl font-light">
            An end-to-end automated booking architecture and intelligent lead qualification pipeline designed to turn structural chaos into hands-free business efficiency.
          </p>

          {/* Project Links: Live Site, GitHub, & Loom */}
          <div className="pt-4 flex flex-wrap gap-4">
            {/* Live Production Site */}
            <a 
              href="https://ama-events-co-site.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 bg-[#2B231F] text-[#F9F6F0] px-6 py-3.5 rounded-sm font-medium text-sm hover:bg-[#2B231F]/90 transition-all tracking-wide"
            >
              <svg className="w-4 h-4 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              <span>Launch Live Site</span>
            </a>

            {/* GitHub Repo */}
            <a 
              href="https://github.com/Jayneforge/ama-events-co-site" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 bg-white border border-[#D4C5B9] text-[#2B231F] px-6 py-3.5 rounded-sm font-semibold text-sm hover:bg-[#F9F6F0] transition-all tracking-wide"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
              </svg>
              <span>View Repository</span>
            </a>

            {/* Loom Walkthrough */}
            <a 
              href="https://www.loom.com/share/e8d61b73e62b42fd969f259f792750d0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 bg-white border border-[#D4C5B9] text-[#2B231F] px-6 py-3.5 rounded-sm font-semibold text-sm hover:bg-[#F9F6F0] transition-all tracking-wide"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#C29F72] animate-pulse"></span>
              <span>Watch Loom Walkthrough</span>
            </a>
          </div>
        </motion.div>

        {/* Executive Summary (Non-Technical Front Summary) */}
        <section className="bg-white border border-[#D4C5B9]/40 p-8 rounded-sm space-y-6">
          <div className="mono-text text-[0.8rem] text-[#C29F72] uppercase tracking-wider font-bold">
            Executive Summary 
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="font-bold text-[#2B231F] text-lg">The Problem</h4>
              <p className="text-[#2B231F]/70 text-[0.95rem] font-light leading-relaxed">
                As a growing small business, the client wanted to expand their digital footprint but could not afford to hire a full-time staff member to manage the manual coordination. Without dedicated hands to monitor platforms 24/7, they faced a double bottleneck: they were losing potential customers due to delayed responses, and high-value booking leads were constantly getting buried or lost under casual social media engagement (like generic &quot;this decor is beautiful!&quot; comments).
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-[#2B231F] text-lg">The Solution</h4>
              <p className="text-[#2B231F]/70 text-[0.95rem] font-light leading-relaxed">
                Instead of hiring headcount, I built an automated, intelligent system that acts as a 24/7 digital assistant. The setup automatically captures incoming messages, instantly filters out casual social media praise from high-intent inquiries, organizes the booking details into a structured database, and alerts the business owner&apos;s phone in under 3 seconds when a genuine client is ready to book. This gave them the response speed and operational capacity of a full-time assistant without the overhead.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Metadata Panel */}
        <div className="border-t border-b border-[#D4C5B9]/40 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <span className="block mono-text text-[#C29F72] text-[0.72rem] uppercase tracking-widest font-bold mb-1.5">Role</span>
            <span className="font-semibold text-[#2B231F] text-lg">Systems Architect & PM</span>
          </div>
          <div>
            <span className="block mono-text text-[#C29F72] text-[0.72rem] uppercase tracking-widest font-bold mb-1.5">Stack & Integrations</span>
            <span className="font-semibold text-[#2B231F] text-lg">n8n, Vercel, Airtable, Telegram</span>
          </div>
          <div>
            <span className="block mono-text text-[#C29F72] text-[0.72rem] uppercase tracking-widest font-bold mb-1.5">Infrastructure</span>
            <span className="font-semibold text-[#2B231F] text-lg">Self-Hosted VPS</span>
          </div>
          <div>
            <span className="block mono-text text-[#C29F72] text-[0.72rem] uppercase tracking-widest font-bold mb-1.5">Key Outcome</span>
            <span className="font-bold text-[#C29F72] text-lg">90%+ Cost Reduction</span>
          </div>
        </div>

        {/* The Challenge (Technical Scope) */}
        <section className="space-y-4">
          <div className="mono-text text-[0.8rem] text-[#C29F72] uppercase tracking-wider font-bold">The Challenge</div>
          <p className="text-[#2B231F]/80 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
            Inquiry tracking and client response delays represent massive lost opportunities for growing businesses. Manually weeding out general chat from high-intent buyers introduces friction and drags down closing rates. Meanwhile, building these systems inside proprietary, pay-per-execution cloud automation networks carries skyrocketing, unpredictable monthly bills. The objective was to design a bulletproof logic loop that processes leads instantly—at near-zero scale costs.
          </p>
        </section>

        {/* System Flow Diagram (Oscilloscope Table) */}
        <section className="space-y-6">
          <div className="mono-text text-[0.8rem] text-[#C29F72] uppercase tracking-wider font-bold">System Flow & Data Path</div>
          <div className="overflow-x-auto border border-[#D4C5B9]/40 rounded-sm">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-[#F9F6F0] text-[#2B231F] uppercase text-[0.72rem] tracking-wider border-b border-[#D4C5B9]/40">
                  <th className="p-5 font-bold mono-text">Phase</th>
                  <th className="p-5 font-bold mono-text">Integration Component</th>
                  <th className="p-5 font-bold mono-text">System Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D4C5B9]/30 text-[#2B231F]/80 text-[1rem] font-light">
                <tr className="hover:bg-[#F9F6F0]/20">
                  <td className="p-5 font-semibold text-[#2B231F]">01 / Capture</td>
                  <td className="p-5">Vercel Front-End Webhook</td>
                  <td className="p-5">Captures complex input schemas directly from the custom user booking interface.</td>
                </tr>
                <tr className="hover:bg-[#F9F6F0]/20">
                  <td className="p-5 font-semibold text-[#2B231F]">02 / Qualify</td>
                  <td className="p-5">n8n Classification Core</td>
                  <td className="p-5">Classifies intent data using system structures to isolate real targets from casual chatter.</td>
                </tr>
                <tr className="hover:bg-[#F9F6F0]/20">
                  <td className="p-5 font-semibold text-[#2B231F]">03 / Sync</td>
                  <td className="p-5">Airtable Relational DB</td>
                  <td className="p-5">Updates the relational sales CRM dynamically and logs systemic debugging steps.</td>
                </tr>
                <tr className="hover:bg-[#F9F6F0]/20">
                  <td className="p-5 font-semibold text-[#2B231F]">04 / Dispatch</td>
                  <td className="p-5">Telegram Gateway API</td>
                  <td className="p-5">Sends beautifully mapped, direct action-alerts to the system owner&apos;s hardware devices.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="space-y-8 border-t border-[#D4C5B9]/40 pt-12">
          <div className="mono-text text-[0.8rem] text-[#C29F72] uppercase tracking-wider font-bold">The Technical Architecture</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-3">
              <h3 className="font-bold text-[#2B231F] text-xl">Self-Hosted Infrastructure</h3>
              <p className="text-[#2B231F]/70 font-light text-[0.95rem] leading-relaxed">
                By hosting our execution engine on a dedicated Virtual Private Server (VPS), we bypassed proprietary payload and execution taxations. Scaling up tasks results in zero extra operational pricing.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-[#2B231F] text-xl">Error Boundaries & Fallbacks</h3>
              <p className="text-[#2B231F]/70 font-light text-[0.95rem] leading-relaxed">
                I designed secondary error traps inside the logic canvas. If an external API encounters downtime or rate limits, execution parameters are cached automatically and the owner is instantly updated with trace logs.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-[#2B231F] text-xl">Systematic Normalization</h3>
              <p className="text-[#2B231F]/70 font-light text-[0.95rem] leading-relaxed">
                Client submissions are scrubbed, compiled, and mapped to consistent data schemas before reaching database columns. This eliminates database crashes caused by unexpected user input fields.
              </p>
            </div>
          </div>
        </section>

        {/* Measured Results Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-8 border-t border-[#D4C5B9]/40 pt-12"
        >
          <div className="mono-text text-[0.8rem] text-[#C29F72] uppercase tracking-wider font-bold">Measured Results</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="p-8 border border-[#D4C5B9]/40 bg-white rounded-sm shadow-sm space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#2B231F]">90%+</div>
              <div className="mono-text text-[0.7rem] text-[#C29F72] uppercase font-bold">Cost reduction</div>
              <p className="text-[#2B231F]/70 text-sm font-light leading-relaxed">
                Built-to-scale architecture that completely routes around licensing premiums and task charges.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-8 border border-[#D4C5B9]/40 bg-white rounded-sm shadow-sm space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#2B231F]">95%</div>
              <div className="mono-text text-[0.7rem] text-[#C29F72] uppercase font-bold">Fatigue reduction</div>
              <p className="text-[#2B231F]/70 text-sm font-light leading-relaxed">
                System automation sifts out noise automatically, passing only high-intent business leads.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-8 border border-[#D4C5B9]/40 bg-white rounded-sm shadow-sm space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#2B231F]">&lt; 3s</div>
              <div className="mono-text text-[0.7rem] text-[#C29F72] uppercase font-bold">System latency</div>
              <p className="text-[#2B231F]/70 text-sm font-light leading-relaxed">
                Submission data qualifies, records, maps, and dispatches directly to real devices in real-time.
              </p>
            </motion.div>
          </div>
        </motion.section>

      </article>
    </div>
  );
}