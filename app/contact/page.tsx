'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ContactPage() {
  // Replace this placeholder string with the real Access Key emailed to you by Web3Forms
  const WEB3FORMS_ACCESS_KEY = 'be77bcb5-2b4f-48cc-9265-53b490a28121';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Fix a Broken Pipeline',
    message: ''
  });

  const [status, setStatus] = useState<{
    submitting: boolean;
    success: boolean | null;
    error: string | null;
  }>({
    submitting: false,
    success: null,
    error: null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, error: null });

    // Web3Forms expects your access_key bundled straight inside the payload body
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: formData.name,
      email: formData.email,
      subject: `[Portfolio Intake] - ${formData.subject}`,
      message: formData.message,
      from_name: 'JAYNEFORGE Portfolio'
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ submitting: false, success: true, error: null });
        // Clear form fields on successful transmission
        setFormData({ name: '', email: '', subject: 'Fix a Broken Pipeline', message: '' });
      } else {
        throw new Error(data.message || 'Failed to submit form data.');
      }
    } catch (err: any) {
      setStatus({ 
        submitting: false, 
        success: false, 
        error: err.message || 'System error. Please try again shortly.' 
      });
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
            Contact
          </span>
        </div>

        {/* Header */}
        <header className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#2B231F]">
            Let&apos;s build<span className="text-[#C29F72]">.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#2B231F]/80 font-light leading-relaxed">
            Do you have an operational bottleneck? A leaking lead pipeline? A frustrating repetitive job that bores you out and takes your precious time? An AI concept that needs to hold up under real production stress? Do you want me to vet your automation and stress test it or debug it? 
          </p>
          <p className="text-lg md:text-xl text-[#2B231F]/80 font-semibold leading-relaxed">
            Skip the surface level. Tell me what is broken, and let&apos;s fix it. Even if it&apos;s not broken... we can forge something else out of your already working system.
          </p>
        </header>

        <hr className="border-[#D4C5B9]/40" />

        {/* Interactive Form Block */}
        <div className="max-w-xl">
          <motion.form 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-white border border-[#D4C5B9]/40 p-8 md:p-10 rounded-sm space-y-6 shadow-sm"
          >
            <div className="space-y-1">
              <label className="mono-text text-xs text-[#C29F72] uppercase tracking-wider font-semibold block">Your Name</label>
              <input 
                type="text" 
                required
                disabled={status.submitting}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-[#F9F6F0]/50 border border-[#D4C5B9]/60 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-[#2B231F] transition-colors text-[#2B231F] disabled:opacity-50"
                placeholder="Name or Company"
              />
            </div>

            <div className="space-y-1">
              <label className="mono-text text-xs text-[#C29F72] uppercase tracking-wider font-semibold block">Your Email</label>
              <input 
                type="email" 
                required
                disabled={status.submitting}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-[#F9F6F0]/50 border border-[#D4C5B9]/60 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-[#2B231F] transition-colors text-[#2B231F] disabled:opacity-50"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-1">
              <label className="mono-text text-xs text-[#C29F72] uppercase tracking-wider font-semibold block">Objective</label>
              <select 
                disabled={status.submitting}
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full bg-[#F9F6F0]/50 border border-[#D4C5B9]/60 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-[#2B231F] transition-colors text-[#2B231F] appearance-none disabled:opacity-50"
              >
                <option value="Fix a Broken Pipeline">Fix a Broken Pipeline / Debugging</option>
                <option value="Stress Test Automation">Stress Test & Vet Existing Nodes</option>
                <option value="AI Integration Concept">AI System / Agent Architecture</option>
                <option value="Optimize Existing System">Forge Something Better (Scaling)</option>
                <option value="Repetitive Task">Cut Down on Repetitve Task</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="mono-text text-xs text-[#C29F72] uppercase tracking-wider font-semibold block">What&apos;s the situation?</label>
              <textarea 
                required
                rows={5}
                disabled={status.submitting}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-[#F9F6F0]/50 border border-[#D4C5B9]/60 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-[#2B231F] transition-colors text-[#2B231F] resize-none disabled:opacity-50"
                placeholder="Describe the bottleneck, the tech you're using, or what needs hardening..."
              />
            </div>

            {/* In-page Feedback Notices */}
            {status.success && (
              <p className="text-sm text-green-600 font-medium">
                ✓ Connection established. Your intake details have been transmitted to the forge.
              </p>
            )}
            {status.error && (
              <p className="text-sm text-red-600 font-medium">
                ✕ {status.error}
              </p>
            )}

            <div className="pt-2">
              <button 
                type="submit"
                disabled={status.submitting}
                className="w-full bg-[#2B231F] text-[#F9F6F0] px-6 py-4 rounded-sm font-semibold text-sm uppercase tracking-widest hover:bg-[#2B231F]/90 transition-all border border-transparent hover:border-[#C29F72]/40 shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.submitting ? 'Transmitting...' : 'Submit to Forge'}
              </button>
            </div>
          </motion.form>
        </div>

        {/* Global availability marker footer */}
        <footer className="pt-12 border-t border-[#D4C5B9]/30 flex items-center space-x-3 text-xs uppercase tracking-widest text-[#2B231F]/50 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#C29F72] animate-pulse"></span>
          <span>Available Globally</span>
        </footer>

      </div>
    </div>
  );
}