'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NexterTVCastingPipelineCaseStudy() {
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
            03 / CASE STUDY — REALITY SHOW CASTING PIPELINE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#2B231F] leading-[1.1]">
            NexterTV Casting Pipeline
          </h1>
          <p className="text-xl md:text-2xl text-[#2B231F]/80 leading-relaxed max-w-3xl font-light">
            An n8n pipeline that screens, scores, and routes applicants across three reality-show casting calls — replacing manual triage with real eligibility gating, show-specific AI scoring, and duplicate-identity detection, so producers review a ranked shortlist instead of every raw submission.
          </p>

          {/* Project Links: Live Site, GitHub, & Loom */}
          <div className="pt-4 flex flex-wrap gap-4">
            {/* GitHub Repo */}
            <a 
              href="https://github.com/Jayneforge/nextertv-casting" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 bg-[#2B231F] text-[#F9F6F0] px-6 py-3.5 rounded-sm font-medium text-sm hover:bg-[#2B231F]/90 transition-all tracking-wide"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
              </svg>
              <span>View Repository</span>
            </a>

            {/* Live Application */}
            <a 
              href="https://nextertv-casting.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 bg-[#C29F72] text-[#2B231F] px-6 py-3.5 rounded-sm font-semibold text-sm hover:bg-[#C29F72]/90 transition-all tracking-wide"
            >
              <span>View Live Application</span>
              <span>&rarr;</span>
            </a>

            {/* Loom Walkthrough */}
            <a 
              href="https://www.loom.com/share/79ef3918987a45ed9b2cd5e0c885fc36" 
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
                A YouTuber running three distinct casting formats — a fast-elimination dating show, a compatibility show, and a social deception game — was screening every applicant against the same generic criteria, with no way to separate serious candidates from noise before hundreds of raw submissions ever reached a producer.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-[#2B231F] text-lg">The Solution</h4>
              <p className="text-[#2B231F]/70 text-[0.95rem] font-light leading-relaxed">
                I built an n8n pipeline that gates every applicant through real eligibility checks (age computed from date of birth, not a checkbox), screens for duplicate identities across phone and social handles, scores each applicant against a rubric built specifically for their chosen show, sends a review mail automatically to eople who send a broken link of their video submission, keeps an error log of systemic failures, it also logs entries that were auto-rejected; for a human review to confirm and finally logs and routes the result into a ranked, producer-ready shortlist — with instant alerts reserved only for the strongest and edge-case candidates.
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
            <span className="font-semibold text-[#2B231F] text-lg">n8n, GPT-4o, Google Sheets, Slack, Telegram</span>
          </div>
          <div>
            <span className="block mono-text text-[#C29F72] text-[0.72rem] uppercase tracking-widest font-bold mb-1.5">Architecture</span>
            <span className="font-semibold text-[#2B231F] text-lg">Eligibility-Gated AI Pipeline</span>
          </div>
          <div>
            <span className="block mono-text text-[#C29F72] text-[0.72rem] uppercase tracking-widest font-bold mb-1.5">Key Outcome</span>
            <span className="font-bold text-[#C29F72] text-lg">Producer-Ready Shortlists</span>
          </div>
        </div>

        {/* The Challenge (Technical Scope) */}
        <section className="space-y-4">
          <div className="mono-text text-[0.8rem] text-[#C29F72] uppercase tracking-wider font-bold">The Technical Scope</div>
          <p className="text-[#2B231F]/80 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
            Building a casting intake system a real production team could trust required solving problems well past "does the form submit": catching a webhook misconfiguration that would have silently hung every submission, correcting a scoring architecture where the AI's output fields didn't match what the filtering logic expected downstream, and replacing self-reported eligibility checkboxes with server-side validation that can't just be checked regardless of truth.
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
                  <td className="p-5 font-semibold text-[#2B231F]">01 / Intake & Sanitization</td>
                  <td className="p-5">Webhook + Sanitize Node</td>
                  <td className="p-5">Normalizes the raw webform payload, computes age from date of birth, and builds a duplicate-detection fingerprint from phone and social handles.</td>
                </tr>
                <tr className="hover:bg-[#F9F6F0]/20">
                  <td className="p-5 font-semibold text-[#2B231F]">02 / Duplicate Check</td>
                  <td className="p-5">Master Log Lookup</td>
                  <td className="p-5">Reads every prior applicant and flags likely repeat identities for producer review — never auto-rejects on a fingerprint match alone.</td>
                </tr>
                <tr className="hover:bg-[#F9F6F0]/20">
                  <td className="p-5 font-semibold text-[#2B231F]">03 / Eligibility Gate</td>
                  <td className="p-5">Hard Eligibility Filter</td>
                  <td className="p-5">Screens for valid email, a working audition link, confirmed age, availability, and filming location before any AI cost is spent.</td>
                </tr>
                <tr className="hover:bg-[#F9F6F0]/20">
                  <td className="p-5 font-semibold text-[#2B231F]">04 / Show-Specific Scoring</td>
                  <td className="p-5">AI Casting Score (GPT-4o)</td>
                  <td className="p-5">Scores each applicant against a rubric built for their specific show — charisma and wit, emotional intelligence, or composure under pressure.</td>
                </tr>
                <tr className="hover:bg-[#F9F6F0]/20">
                  <td className="p-5 font-semibold text-[#2B231F]">05 / Routing & Bucketing</td>
                  <td className="p-5">Parse Score & Route by Episode Type</td>
                  <td className="p-5">Computes a weighted composite score, caps any red-flagged applicant at "Maybe" regardless of score, and files them into their own show's sheet.</td>
                </tr>
                <tr className="hover:bg-[#F9F6F0]/20">
                  <td className="p-5 font-semibold text-[#2B231F]">06 / Producer Alerting</td>
                  <td className="p-5">Slack & Telegram Alert</td>
                  <td className="p-5">Pings instantly only for the top "Strong Shortlist" and "Edge Case" tiers — everything else waits quietly in the sheet for manual review.</td>
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
              <h3 className="font-bold text-[#2B231F] text-xl">Show-Specific AI Scoring</h3>
              <p className="text-[#2B231F]/70 font-light text-[0.95rem] leading-relaxed">
                Each show's rubric is built into the prompt before scoring happens. A generic "rate this applicant" prompt applied to every show tells a producer nothing useful.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-[#2B231F] text-xl">Red Flags Override the Score</h3>
              <p className="text-[#2B231F]/70 font-light text-[0.95rem] leading-relaxed">
                A high numeric score can never auto-promote a flagged applicant to the instant-alert tier. Any red flag the model notices forces a human look first, no exceptions.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-[#2B231F] text-xl">Duplicate Detection And Valid Link Check</h3>             
              <p className="text-[#2B231F]/70 font-light text-[0.95rem] leading-relaxed">
                Every new applicant is checked against the full history already logged, ensuring thorough deduplication. Video links are also validated before any AI scoring is done, so producers never waste time on broken submissions.
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
              <div className="text-4xl md:text-5xl font-bold text-[#2B231F]">3</div>
              <div className="mono-text text-[0.7rem] text-[#C29F72] uppercase font-bold">Show-Specific Scoring Rubrics</div>
              <p className="text-[#2B231F]/70 text-sm font-light leading-relaxed">
                Each format scored on what actually matters for it — charisma, emotional intelligence, or composure — not one prompt for everyone.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-8 border border-[#D4C5B9]/40 bg-white rounded-sm shadow-sm space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#2B231F]">0</div>
              <div className="mono-text text-[0.7rem] text-[#C29F72] uppercase font-bold">Auto-Approved or Auto-Rejected Candidates</div>
              <p className="text-[#2B231F]/70 text-sm font-light leading-relaxed">
                The pipeline ranks and flags; a producer makes every casting call. Automation handles volume, not judgment.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-8 border border-[#D4C5B9]/40 bg-white rounded-sm shadow-sm space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#2B231F]">8</div>
              <div className="mono-text text-[0.7rem] text-[#C29F72] uppercase font-bold">Production Bugs Caught & Fixed</div>
              <p className="text-[#2B231F]/70 text-sm font-light leading-relaxed">
                From a hung webhook to a scoring pipeline that would have silently zeroed out every applicant — documented and fixed before launch.
              </p>
            </motion.div>
          </div>
        </motion.section>

      </article>
    </div>
  );
}
