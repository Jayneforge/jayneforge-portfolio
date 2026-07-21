'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EmailTriageAgentCaseStudy() {
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
            href="/work" 
            className="mono-text text-[0.8rem] text-[#C29F72] hover:text-[#2B231F] transition-colors uppercase tracking-widest font-semibold flex items-center space-x-2"
          >
            <span>&larr; Back to Work Hub</span>
          </Link>
        </div>

        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="mono-text text-[0.8rem] text-[#C29F72] uppercase tracking-wider font-bold">
            02 / CASE STUDY — DISTRIBUTED AUTOMATION
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#2B231F] leading-[1.1]">
            Autonomous Email Triage & Subscription Intelligence Agent
          </h1>
          <p className="text-xl md:text-2xl text-[#2B231F]/80 leading-relaxed max-w-3xl font-light">
            A four-part, event-driven n8n pipeline designed to conquer unmanaged inbox chaos, secure calendar tracking independently of company reminders, and manage human-in-the-loop weekly unsubscribe prompts via Telegram.
          </p>

          {/* Project Links: Live Site, GitHub, & Loom */}
          <div className="pt-4 flex flex-wrap gap-4">
            {/* GitHub Repo */}
            <a 
              href="https://github.com/Jayneforge/email-triage-agent" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 bg-[#2B231F] text-[#F9F6F0] px-6 py-3.5 rounded-sm font-medium text-sm hover:bg-[#2B231F]/90 transition-all tracking-wide"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
              </svg>
              <span>View Repository</span>
            </a>

            {/* Loom Walkthrough */}
            <a 
              href="https://www.loom.com/share/f69c811f02e04e81ae8a845e6abc40ce" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 bg-white border border-[#D4C5B9] text-[#2B231F] px-6 py-3.5 rounded-sm font-semibold text-sm hover:bg-[#F9F6F0] transition-all tracking-wide"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#C29F72] animate-pulse"></span>
              <span>Watch System Walkthrough</span>
            </a>
          </div>
        </motion.div>

        {/* Executive Summary */}
        <section className="bg-white border border-[#D4C5B9]/40 p-8 rounded-sm space-y-6">
          <div className="mono-text text-[0.8rem] text-[#C29F72] uppercase tracking-wider font-bold">
            Executive Summary 
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="font-bold text-[#2B231F] text-lg">The Problem</h4>
              <p className="text-[#2B231F]/70 text-[0.95rem] font-light leading-relaxed">
                An unmanaged inbox with over 25,000 unread messages creates profound operational drag and constant cognitive fatigue. Manually sorting through noise, catching expiring subscription deadlines before companies send reminder notices, and safely purging promotional clutter without triggering spam flags is nearly impossible to sustain manually.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-[#2B231F] text-lg">The Solution</h4>
              <p className="text-[#2B231F]/70 text-[0.95rem] font-light leading-relaxed">
                I engineered a robust, four-part event-driven n8n automation network powered by Groq and Qwen 3. The system autonomously reads, classifies, labels, and archives incoming mail, independently tracks subscriptions and appointments directly to Google Calendar with deduplication logic, and batches weekly promotional senders for clean, one-tap decisions via interactive Telegram callback buttons.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Metadata Panel */}
        <div className="border-t border-b border-[#D4C5B9]/40 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <span className="block mono-text text-[#C29F72] text-[0.72rem] uppercase tracking-widest font-bold mb-1.5">Role</span>
            <span className="font-semibold text-[#2B231F] text-lg">Systems Architect & Developer</span>
          </div>
          <div>
            <span className="block mono-text text-[#C29F72] text-[0.72rem] uppercase tracking-widest font-bold mb-1.5">Stack & Integrations</span>
            <span className="font-semibold text-[#2B231F] text-lg">n8n, Groq (Qwen 3), Gmail, Telegram</span>
          </div>
          <div>
            <span className="block mono-text text-[#C29F72] text-[0.72rem] uppercase tracking-widest font-bold mb-1.5">Architecture</span>
            <span className="font-semibold text-[#2B231F] text-lg">4 Loosely-Coupled Workflows</span>
          </div>
          <div>
            <span className="block mono-text text-[#C29F72] text-[0.72rem] uppercase tracking-widest font-bold mb-1.5">Key Outcome</span>
            <span className="font-bold text-[#C29F72] text-lg">Complete Inbox Control</span>
          </div>
        </div>

        {/* The Challenge (Technical Scope) */}
        <section className="space-y-4">
          <div className="mono-text text-[0.8rem] text-[#C29F72] uppercase tracking-wider font-bold">The Technical Scope</div>
          <p className="text-[#2B231F]/80 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
            Building an enterprise-grade mail triage system requires solving complex state-management problems: handling malformed LLM responses safely, avoiding risky auto-unsubscribe scripts that flag accounts to spammers, and bridging independent workflows across a normalized shared database without tight monolithic coupling.
          </p>
        </section>

        {/* System Flow Diagram */}
        <section className="space-y-6">
          <div className="mono-text text-[0.8rem] text-[#C29F72] uppercase tracking-wider font-bold">System Flow & Data Path</div>
          <div className="overflow-x-auto border border-[#D4C5B9]/40 rounded-sm">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-[#F9F6F0] text-[#2B231F] uppercase text-[0.72rem] tracking-wider border-b border-[#D4C5B9]/40">
                  <th className="p-5 font-bold mono-text">Phase</th>
                  <th className="p-5 font-bold mono-text">Workflow Component</th>
                  <th className="p-5 font-bold mono-text">System Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D4C5B9]/30 text-[#2B231F]/80 text-[1rem] font-light">
                <tr className="hover:bg-[#F9F6F0]/20">
                  <td className="p-5 font-semibold text-[#2B231F]">01 / Ingest & Triage</td>
                  <td className="p-5">Main Triage Agent (v2)</td>
                  <td className="p-5">Polls unread mail, normalizes records, marks as read instantly to prevent loops, and classifies via Groq/Qwen 3.</td>
                </tr>
                <tr className="hover:bg-[#F9F6F0]/20">
                  <td className="p-5 font-semibold text-[#2B231F]">02 / Calendar Sync</td>
                  <td className="p-5">Subscription Engine</td>
                  <td className="p-5">Extracts future renewal or appointment dates, checks entity IDs for deduplication, and creates calendar events.</td>
                </tr>
                <tr className="hover:bg-[#F9F6F0]/20">
                  <td className="p-5 font-semibold text-[#2B231F]">03 / Weekly Batching</td>
                  <td className="p-5">Friday Digest Sender</td>
                  <td className="p-5">Aggregates weekly promotional mentions, filters out permanent user preferences, and pushes Telegram prompt buttons.</td>
                </tr>
                <tr className="hover:bg-[#F9F6F0]/20">
                  <td className="p-5 font-semibold text-[#2B231F]">04 / Interactive Action</td>
                  <td className="p-5">Telegram Button Handler</td>
                  <td className="p-5">Processes callback data instantly, executes unsubscribe/keep protocols, and logs decisions permanently.</td>
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
              <h3 className="font-bold text-[#2B231F] text-xl">Loosely-Coupled Services</h3>
              <p className="text-[#2B231F]/70 font-light text-[0.95rem] leading-relaxed">
                Split across four independent workflows sharing a structured Google Sheets state backend, ensuring isolated debugging, clean error logs, and modular maintenance.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-[#2B231F] text-xl">Human-in-the-Loop Safety</h3>
              <p className="text-[#2B231F]/70 font-light text-[0.95rem] leading-relaxed">
                Resisted risky full-auto unsubscriptions that confirm active addresses to spammers. Instead, queue candidates for a weekly one-tap review via interactive Telegram webhooks.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-[#2B231F] text-xl">Calendar Independence</h3>
              <p className="text-[#2B231F]/70 font-light text-[0.95rem] leading-relaxed">
                Tracks subscription expirations independently of company reminder emails, backed by strict entity deduplication to prevent duplicate calendar alerts.
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
          <div className="mono-text text-[0.8rem] text-[#C29F72] uppercase tracking-wider font-bold">System Capabilities</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="p-8 border border-[#D4C5B9]/40 bg-white rounded-sm shadow-sm space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#2B231F]">4</div>
              <div className="mono-text text-[0.7rem] text-[#C29F72] uppercase font-bold">Integrated Workflows</div>
              <p className="text-[#2B231F]/70 text-sm font-light leading-relaxed">
                Modular event-driven pipelines handling triage, digests, button responses, and daily reminders.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-8 border border-[#D4C5B9]/40 bg-white rounded-sm shadow-sm space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#2B231F]">100%</div>
              <div className="mono-text text-[0.7rem] text-[#C29F72] uppercase font-bold">User Control</div>
              <p className="text-[#2B231F]/70 text-sm font-light leading-relaxed">
                Permanent preference memory ensuring senders are never asked about twice after a decision is made.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-8 border border-[#D4C5B9]/40 bg-white rounded-sm shadow-sm space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#2B231F]">&lt; 5s</div>
              <div className="mono-text text-[0.7rem] text-[#C29F72] uppercase font-bold">Processing Latency</div>
              <p className="text-[#2B231F]/70 text-sm font-light leading-relaxed">
                Real-time polling, LLM classification, marking read, and smart labeling executed instantly.
              </p>
            </motion.div>
          </div>
        </motion.section>

      </article>
    </div>
  );
}