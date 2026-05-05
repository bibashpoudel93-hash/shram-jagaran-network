"use client";

import { motion } from "framer-motion";
import { Shield, Target, History, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
    },
  }),
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-brand-red/10 relative overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-brand-blue/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-brand-red/5 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <Shield className="w-8 h-8 text-brand-red group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-black tracking-tighter text-brand-blue dark:text-slate-100 uppercase">Shram Jagaran</span>
          </Link>
          <Link href="/" className="text-xs font-black text-slate-500 uppercase tracking-widest hover:text-brand-red transition-all flex items-center space-x-2 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Home</span>
          </Link>
        </div>
      </header>

      <main className="relative z-10 pt-40 pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" custom={0} variants={fadeIn} className="mb-24">
          <h1 className="text-6xl md:text-8xl font-black text-brand-blue dark:text-slate-100 mb-8 tracking-tighter uppercase leading-[0.9]">
            Our Legacy of <br />
            <span className="text-brand-red text-gradient">Solidarity.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl font-medium leading-relaxed">
            Shram Jagaran Network was founded in 2010 with a singular vision: to create a unified voice for the marginalized labor force and ensure institutional accountability at every level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <motion.div initial="hidden" animate="visible" custom={1} variants={fadeIn} className="p-12 glass rounded-[3.5rem] border-slate-200/50 dark:border-slate-800/50 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 blur-3xl rounded-full transition-all group-hover:scale-150" />
            <Target className="w-16 h-16 text-brand-red mb-8" />
            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Core Objective</h2>
            <h3 className="text-4xl font-black text-brand-blue dark:text-slate-100 mb-6 uppercase tracking-tighter">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-lg">
              To empower workers through education, collective bargaining, and legal protection. We strive for a society where labor is a respected pillar of national progress.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" custom={2} variants={fadeIn} className="p-12 bg-brand-blue text-white rounded-[3.5rem] shadow-2xl shadow-brand-blue/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full transition-all group-hover:scale-150" />
            <History className="w-16 h-16 text-brand-red mb-8" />
            <h2 className="text-[10px] font-black text-blue-300 uppercase tracking-[0.3em] mb-4">Journey So Far</h2>
            <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter text-white">Our History</h3>
            <p className="text-white/70 font-medium leading-relaxed text-lg">
              From a small gathering to a national federation of 50,000+ members, our journey has been defined by resilience and over 1,200 collective agreements.
            </p>
          </motion.div>
        </div>

        <motion.div initial="hidden" animate="visible" custom={3} variants={fadeIn} className="mb-32">
          <h2 className="text-sm font-black text-brand-red mb-4 uppercase tracking-[0.4em] text-center">Unwavering Foundations</h2>
          <h3 className="text-4xl md:text-6xl font-black text-brand-blue dark:text-slate-100 mb-16 uppercase text-center tracking-tighter">Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Transparency", desc: "Digital tracking of every union decision and fund allocation." },
              { title: "Inclusivity", desc: "Representation for all genders, ages, and skill levels." },
              { title: "Integrity", desc: "A strict ethical code backed by independent annual audits." }
            ].map((value, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="text-center p-10 glass border-slate-100 dark:border-slate-800/50 rounded-[2.5rem] shadow-xl"
              >
                <div className="w-12 h-1 bg-brand-red mx-auto mb-8 rounded-full" />
                <h3 className="text-xl font-black text-brand-blue dark:text-slate-100 mb-4 uppercase tracking-tighter">{value.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      <footer className="py-16 border-t border-slate-100 dark:border-slate-900 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] bg-white dark:bg-slate-950">
        <p>© 2026 Shram Jagaran Network. Solidarity Forever.</p>
      </footer>
    </div>
  );
}
