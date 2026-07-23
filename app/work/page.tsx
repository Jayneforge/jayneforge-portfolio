'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  {
    id: "01",
    title: "Ama Events Co. — Automated Booking & Lead Intelligence Engine",
    role: "Systems Architect & PM",
    category: "PRODUCTION ENGINE",
    description: "An end-to-end automated booking architecture and intelligent lead qualification pipeline designed to turn structural chaos into hands-free business efficiency.",
    stack: ["n8n", "Vercel", "Airtable", "Telegram", "Self-Hosted VPS"],
    caseStudyUrl: "/work/booking-engine",
    liveUrl: "https://ama-events-co-site.vercel.app",
    gitHubUrl: "https://github.com/Jayneforge/ama-events-co-site"
  },
  {
    id: "02",
    title: "Autonomous Email Triage & Subscription Intelligence Agent",
    role: "Systems Architect & Developer",
    category: "DISTRIBUTED AUTOMATION",
    description: "A four-part, event-driven n8n pipeline designed to conquer unmanaged inbox chaos, secure calendar tracking independently of company reminders, and manage human-in-the-loop weekly unsubscribe prompts via Telegram.",
    stack: ["n8n", "Groq (Qwen 3)", "Gmail", "Google Calendar", "Telegram"],
    caseStudyUrl: "/work/email-triage-agent",
    liveUrl: "",
    gitHubUrl: "https://github.com/Jayneforge/email-triage-agent"
  },
  {
    id: "03",
    title: "NexterTV Casting Pipeline",
    role: "Systems Architect & Developer",
    category: "REALITY SHOW CASTING PIPELINE",
    description: "A multi-show casting intake system that screens, scores, and ranks applicants against show-specific criteria — replacing manual triage with real eligibility gating, per-show AI scoring, and duplicate-identity detection, so a producer reviews a ranked shortlist instead of every raw submission.",
    stack: ["n8n", "GPT-4o", "Google Sheets", "Slack", "Telegram"],
    caseStudyUrl: "/work/nextertv-casting",
    liveUrl: "https://nextertv-casting.vercel.app",
    gitHubUrl: "https://github.com/Jayneforge/nextertv-casting"
  }
];

export default function WorkDirectory() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    }
  };

  return (
    <div className="bg-[#F9F6F0] text-[#2B231F] min-h-screen selection:bg-[#D4C5B9] selection:text-[#2B231F]">
      <div className="max-w-[980px] mx-auto px-7 py-16 space-y-16">
        
        {/* Navigation */}
        <div className="pt-4 flex justify-between items-center">
          <Link 
            href="/" 
            className="mono-text text-[0.8rem] text-[#C29F72] hover:text-[#2B231F] transition-colors uppercase tracking-widest font-semibold flex items-center space-x-2"
          >
            <span>&larr; Back to Home</span>
          </Link>
          <span className="mono-text text-[0.8rem] text-[#C29F72] uppercase tracking-wider font-bold">
            Selected Works
          </span>
        </div>

        {/* Header Block */}
        <header className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#2B231F] leading-[1.1]">
            Engineering Business Efficiency.
          </h1>
          <p className="text-xl md:text-2xl text-[#2B231F]/80 leading-relaxed max-w-3xl font-light">
            A curated directory of production-grade applications, custom automation pipelines, and technical systems engineered to eliminate operational bottlenecks.
          </p>
        </header>

        {/* Project Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className="group bg-white border border-[#D4C5B9]/40 p-8 md:p-12 rounded-sm space-y-8 hover:border-[#C29F72]/60 transition-all duration-300"
            >
              {/* Project Top Bar */}
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div className="space-y-1">
                  <span className="mono-text text-[0.75rem] text-[#C29F72] uppercase tracking-wider font-bold">
                    {project.id} / {project.category}
                  </span>
                  <h2 className="text-3xl font-bold text-[#2B231F] tracking-tight group-hover:text-[#C29F72] transition-colors">
                    {project.title}
                  </h2>
                </div>
                <div className="bg-[#F9F6F0] px-4 py-2 rounded-sm border border-[#D4C5B9]/20">
                  <span className="text-[0.75rem] mono-text uppercase text-[#2B231F]/80 font-semibold block">Role</span>
                  <span className="text-sm font-semibold text-[#2B231F]">{project.role}</span>
                </div>
              </div>

              {/* Project Body */}
              <p className="text-[#2B231F]/80 text-lg font-light leading-relaxed max-w-3xl">
                {project.description}
              </p>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span 
                    key={tech}
                    className="bg-[#F9F6F0] text-[#2B231F]/70 text-[0.75rem] font-medium px-3.5 py-1.5 rounded-sm border border-[#D4C5B9]/30 tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project CTA Links */}
              <div className="pt-4 border-t border-[#D4C5B9]/20 flex flex-wrap gap-4 items-center justify-between">
                <Link 
                  href={project.caseStudyUrl}
                  className="inline-flex items-center space-x-2 text-[#2B231F] font-bold text-sm group/link hover:text-[#C29F72] transition-colors"
                >
                  <span>Read Detailed Case Study</span>
                  <span className="group-hover/link:translate-x-1 transition-transform duration-200">&rarr;</span>
                </Link>

                <div className="flex items-center space-x-4">
                  <a 
                    href={project.gitHubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs font-semibold uppercase tracking-wider text-[#2B231F]/60 hover:text-[#2B231F] transition-colors"
                  >
                    Repository
                  </a>
                  {project.liveUrl && (
                    <>
                      <span className="text-[#D4C5B9]/60">|</span>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs font-semibold uppercase tracking-wider text-[#2B231F]/60 hover:text-[#2B231F] transition-colors"
                      >
                        Live Preview
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Secondary Contact / CTA Section */}
        <section className="pt-8 border-t border-[#D4C5B9]/40 text-center space-y-6">
          <p className="text-lg text-[#2B231F]/80 font-light">
            Need a high-performance system or automation architected for your operations?
          </p>
          <a 
            href="mailto:thejayneforge@outlook.com"
            className="inline-flex items-center space-x-2.5 bg-[#2B231F] text-[#F9F6F0] px-6 py-3.5 rounded-sm font-medium text-sm hover:bg-[#2B231F]/90 transition-all tracking-wide"
          >
            <span>Let&apos;s Build Together</span>
          </a>
        </section>

      </div>
    </div>
  );
}
