'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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
            About Me
          </span>
        </div>

        {/* 1. Intro Header Section */}
        <header className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#2B231F] leading-[1.1]">
            Hi, I&apos;m Jayne<span className="text-[#C29F72]">.</span>
            <span className="block text-2xl md:text-3xl font-light text-[#2B231F]/60 mt-2">
              Welcome to my forge.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#2B231F]/90 leading-relaxed max-w-3xl font-light">
            This is where I build automation and AI systems at the intersection of logic, execution, and strategy. I design the kind of configurations that get tested against real execution logs and real edge cases, not just demoed once and called finished. 
          </p>
          <p className="text-lg text-[#2B231F]/70 leading-relaxed max-w-2xl font-light">
            I bridge the gap between user experience and complex, self-hosted system pipelines. I don&apos;t just assemble workflows—I map out entire business operations to isolate, diagnose, and solve core procedural issues from the ground up.
          </p>
        </header>

        <hr className="border-[#D4C5B9]/40" />

        {/* 2. Methodology & Principles */}
        <section className="space-y-10">
          <div className="mono-text text-[0.8rem] tracking-widest text-[#C29F72] uppercase font-bold">
            Methodology: How I Work
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 p-6 bg-white border border-[#D4C5B9]/30 rounded-sm">
              <span className="text-[#C29F72] font-semibold text-xs mono-text uppercase tracking-wider">01 / Deep Discovery</span>
              <h3 className="text-xl font-bold text-[#2B231F]">Diagnosis Before Building</h3>
              <p className="text-sm md:text-base text-[#2B231F]/75 font-light leading-relaxed">
                Before proposing any technical stack, I study your company&apos;s existing processes to identify the true operational bottleneck. The solution gets built around your specific problem—the fix that works for one business rarely works identically for another. No one-size-fits-all placeholders here.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-white border border-[#D4C5B9]/30 rounded-sm">
              <span className="text-[#C29F72] font-semibold text-xs mono-text uppercase tracking-wider">02 / Robust Engineering</span>
              <h3 className="text-xl font-bold text-[#2B231F]">Tested Against Reality</h3>
              <p className="text-sm md:text-base text-[#2B231F]/75 font-light leading-relaxed">
                I build error-tracking nodes and resilient fallback loops directly into your pipelines. A system isn&apos;t finished until I&apos;ve actively tried to break it using real execution logs, failure modes, and API latency testing. If it can break, I want to find it first.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-white border border-[#D4C5B9]/30 rounded-sm">
              <span className="text-[#C29F72] font-semibold text-xs mono-text uppercase tracking-wider">03 / Radical Honesty</span>
              <h3 className="text-xl font-bold text-[#2B231F]">Transparent Disclosures</h3>
              <p className="text-sm md:text-base text-[#2B231F]/75 font-light leading-relaxed">
                Every project I deploy comes with an honest log of its constraints—including hosting footprint, access gaps, and architectural trade-offs. Overselling fragile or unfinished work is never the goal; establishing systemic reliability and genuine partnership is.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-white border border-[#D4C5B9]/30 rounded-sm">
              <span className="text-[#C29F72] font-semibold text-xs mono-text uppercase tracking-wider">04 / Structural Depth</span>
              <h3 className="text-xl font-bold text-[#2B231F]">No Trend Chasing</h3>
              <p className="text-sm md:text-base text-[#2B231F]/75 font-light leading-relaxed">
                I look for near-zero subscription cost footprints (such as self-hosted infrastructure servers) and focus on creating deep, lasting engineering value rather than slapping together temporary prompt wrappers or running blindly after oversaturated tech trends.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-[#D4C5B9]/40" />

        {/* 3. Credentials & Tech Stack Grid */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Credentials */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="mono-text text-[0.8rem] tracking-widest text-[#C29F72] uppercase font-bold">
              Verified Capabilities & Background
            </h3>
            <ul className="space-y-4">
              <li className="border-b border-[#D4C5B9]/30 pb-3 flex flex-col">
                <span className="font-semibold text-[#2B231F]">Building with the Claude API</span>
                <span className="text-xs text-[#2B231F]/60 uppercase tracking-wider">Anthropic Academy</span>
              </li>
              <li className="border-b border-[#D4C5B9]/30 pb-3 flex flex-col">
                <span className="font-semibold text-[#2B231F]">Introduction to Model Context Protocol (MCP)</span>
                <span className="text-xs text-[#2B231F]/60 uppercase tracking-wider">Anthropic Academy</span>
              </li>
              <li className="border-b border-[#D4C5B9]/30 pb-3 flex flex-col">
                <span className="font-semibold text-[#2B231F]">n8n Certification & Hands-on Workflows</span>
                <span className="text-xs text-[#2B231F]/60 uppercase tracking-wider">Simplilearn SkillUp & Self-Hosted Workflows</span>
              </li>
              <li className="border-b border-[#D4C5B9]/30 pb-3 flex flex-col">
                <span className="font-semibold text-[#2B231F]">AI Agent Development (Microsoft Foundry Framework)</span>
                <span className="text-xs text-[#2B231F]/60 uppercase tracking-wider">Foundry Framework & AI Fluency</span>
              </li>
              <li className="border-b border-[#D4C5B9]/30 pb-3 flex flex-col">
                <span className="font-semibold text-[#2B231F]">Career Essentials in Generative AI</span>
                <span className="text-xs text-[#2B231F]/60 uppercase tracking-wider">Microsoft & LinkedIn</span>
              </li>
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="mono-text text-[0.8rem] tracking-widest text-[#C29F72] uppercase font-bold">
              Technical Stack & Tools
            </h3>
            <p className="text-sm text-[#2B231F]/70 leading-relaxed font-light">
              A collection of core infrastructure frameworks, languages, APIs, and execution environments deployed to deliver low-overhead, bulletproof business automations.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "n8n", "Make.com", "Zapier", "Claude Code", "Next.js", "Node.js", 
                "Tailwind CSS", "HTML5 / CSS3", "Airtable", "JavaScript", "Python", 
                "GitHub", "ngrok", "Meta Graph API", "Vercel", "Telegram API", "OpenAI APIs", 
                "Anthropic APIs", "Figma"
              ].map((tech) => (
                <span 
                  key={tech} 
                  className="bg-white border border-[#D4C5B9]/40 text-[#2B231F] text-[0.8rem] px-3.5 py-1.5 rounded-sm tracking-wide font-medium shadow-sm hover:border-[#C29F72]/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* 4. Sharp, High-Intent Closer & Cheeky CTA */}
        <section className="pt-12 border-t border-[#D4C5B9]/40 text-center space-y-6 max-w-xl mx-auto">
          <p className="text-xl text-[#2B231F] font-light leading-relaxed">
            I don&apos;t just configure nodes; I patch operational leaks and engineer automated scale. If you feel I'm a good fit for your project...
          </p>
          <div className="pt-2">
            <a 
              href="mailto:thejayneforge@outlook.com"
              className="inline-flex items-center space-x-2.5 bg-[#2B231F] text-[#F9F6F0] px-8 py-4 rounded-sm font-semibold text-sm hover:bg-[#2B231F]/90 transition-all uppercase tracking-widest shadow-sm border border-transparent hover:border-[#C29F72]/40"
            >
              <span>Let&apos;s Forge</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}  
