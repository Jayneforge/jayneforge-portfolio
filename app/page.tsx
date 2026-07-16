'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-[#F9F6F0] text-[#2B231F] min-h-screen selection:bg-[#D4C5B9] selection:text-[#2B231F]">
      
      {/* MAIN CONTAINER */}
      <div className="max-w-[980px] mx-auto px-7 py-12 md:py-20 space-y-20">
        
        {/* 1. HERO HEADER SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8 flex flex-col items-start"
        >
          {/* Sub-logo Header Tagline */}
          <div className="mono-text text-[0.8rem] md:text-[0.9rem] text-[#C29F72] tracking-wider uppercase font-semibold">
            Problem Solver — Automation Architect, AI systems, and everything in between.
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#D4C5B9]/20 px-4 py-1.5 rounded-full border border-[#D4C5B9]/30">
            <span className="w-2 h-2 rounded-full bg-[#C29F72] animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#2B231F]/80">
              Available for Automations & Consulting
            </span>
          </div>

          {/* Core Descriptive Copy Block */}
          <div className="space-y-8 pt-4">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-[#2B231F] leading-none">
              Hi, I&apos;m <span className="text-[#2B231F]">Jayne<span className="text-[#C29F72]">.</span></span>
            </h1>
            
            <p className="text-2xl md:text-4xl font-light tracking-wide text-[#2B231F]/95 max-w-3xl leading-relaxed">
              I design and build automated solutions that <span className="relative inline-block text-[#2B231F] font-bold">are unique to you<span className="absolute left-0 bottom-1 w-full h-[3px] bg-[#C29F72]/40"></span></span>.
            </p>

            <div className="space-y-4 max-w-2xl">
              <p className="text-lg md:text-xl font-semibold text-[#2B231F] leading-relaxed">
                I build things that actually work.
              </p>
              <p className="text-lg md:text-xl font-light text-[#2B231F]/70 leading-relaxed">
                Not just what looks finished — what holds up when someone actually uses it. I design, build, and debug real systems: AI-powered automation, working products, the parts that break in production and the fixes that make them not break again.
              </p>
            </div>
          </div>

          {/* 2. TECHNICAL SPIKY WAVE VECTOR */}
          <div className="w-full h-[60px] relative mt-10">
            <svg viewBox="0 0 940 60" className="w-full h-full overflow-visible">
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8 }}
                stroke="#2B231F" 
                strokeWidth="1.5" 
                fill="none" 
                d="M0,30 L180,30 L195,10 L210,50 L225,10 L240,50 L255,30 L440,30 L455,10 L470,50 L485,10 L500,50 L515,30 L700,30 L715,10 L730,50 L745,10 L760,50 L775,30 L940,30" 
              />
              <motion.circle initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} cx="195" cy="10" r="4.5" fill="#C29F72" />
              <motion.circle initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} cx="455" cy="10" r="4.5" fill="#C29F72" />
              <motion.circle initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} cx="715" cy="10" r="4.5" fill="#C29F72" />
            </svg>
          </div>

          {/* 3. PRIMARY NAVIGATION BUTTONS */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link 
              href="#work" 
              className="px-8 py-4 bg-[#2B231F] text-[#F9F6F0] font-medium tracking-wide rounded-md hover:bg-[#2B231F]/90 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-base"
            >
              Explore My Works
            </Link>
            <Link 
              href="#contact" 
              className="group flex items-center space-x-2 text-[#2B231F] font-semibold tracking-wide py-4 text-base"
            >
              <span>Let&apos;s collaborate</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300 text-[#C29F72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        </motion.section>

        {/* 4. "WHAT I ACTUALLY DO" SECTION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="space-y-10 border-t border-[#D4C5B9]/40 pt-16"
        >
          <div className="mono-text text-[0.8rem] tracking-widest text-[#C29F72] uppercase font-bold">
            What I actually do
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Column 1: Scoping & Project Management */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#2B231F]">Manage & Design</h3>
              <p className="text-[#2B231F]/70 font-light leading-relaxed text-[1.05rem]">
                Translate messy business bottlenecks into logical blueprints. I map exact data flows, scope technical timelines, evaluate AI model feasibility, and project-manage systems from draft to deployment.
              </p>
            </motion.div>

            {/* Column 2: Hands-on Execution with expanded platforms */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#2B231F]">Build it for real</h3>
              <p className="text-[#2B231F]/70 font-light leading-relaxed text-[1.05rem]">
                Production-grade automations across n8n, Make.com, and Zapier combined with intelligent AI agents and functional web front-ends. Built to handle heavy work—never just visual placeholders.
              </p>
            </motion.div>

            {/* Column 3: Quality, Stress-Testing, and Debugging */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#2B231F]">Find what&apos;s broken</h3>
              <p className="text-[#2B231F]/70 font-light leading-relaxed text-[1.05rem]">
                Run systematic stress tests on live executions. I audit data logs, simulate API latency, isolate runtime errors, and engineer automated fallback loops before they can affect actual customers.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* 5. FEATURED PROJECT SECTION */}
        <section className="border-t border-[#D4C5B9]/40 pt-16 space-y-8" id="work">
          <div className="mono-text text-[0.8rem] tracking-widest text-[#C29F72] uppercase font-bold">
            Featured Work
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="border border-[#D4C5B9]/40 p-8 md:p-12 bg-white rounded-sm space-y-8 shadow-sm"
          >
            <div className="space-y-4">
              <span className="mono-text text-[0.75rem] text-[#C29F72] uppercase tracking-wider font-semibold">
                Production Engine
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B231F] tracking-tight">
                Ama Events Co.
              </h2>
              <p className="text-[#2B231F]/70 font-light text-lg md:text-xl leading-relaxed max-w-3xl">
                A full-stack booking site and AI lead-triage automation — built end-to-end to solve a leaking leads situation. Front end, n8n backend, AI classification, multi-channel replies, and a real debugging trail.
              </p>
            </div>
            
            <Link 
              href="/work/booking-engine" 
              className="mono-text text-[0.85rem] font-medium border border-[#2B231F] text-[#2B231F] px-6 py-4 inline-block hover:bg-[#2B231F] hover:text-[#F9F6F0] transition-all rounded-sm uppercase tracking-wider"
            >
              Read Case Study &rarr;
            </Link>
          </motion.div>
        </section>

      </div>
    </div>
  );
}