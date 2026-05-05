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
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 px-6 py-4 md:px-12 lg:px-24 flex items-center justify-between backdrop-blur-md bg-white/80 border-b border-slate-200">
        <Link href="/" className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-brand-red" />
          <span className="text-xl font-extrabold tracking-tight text-brand-blue uppercase">Shram Jagaran</span>
        </Link>
        <Link href="/" className="text-sm font-bold text-slate-600 hover:text-brand-red transition-colors flex items-center space-x-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </header>

      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" custom={0} variants={fadeIn} className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-brand-blue mb-6 tracking-tighter uppercase">
            Our Legacy of <span className="text-brand-red">Solidarity</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl font-medium leading-relaxed">
            Shram Jagaran Network was founded in 2010 with a singular vision: to create a unified voice for the marginalized labor force and ensure institutional accountability at every level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div initial="hidden" animate="visible" custom={1} variants={fadeIn} className="p-12 bg-slate-50 rounded-[3rem] border-2 border-slate-100">
            <Target className="w-12 h-12 text-brand-red mb-6" />
            <h2 className="text-3xl font-black text-brand-blue mb-4 uppercase tracking-tight">Our Mission</h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              To empower workers through education, collective bargaining, and legal protection. We strive for a society where labor is not just a commodity but a respected pillar of national progress.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" custom={2} variants={fadeIn} className="p-12 bg-brand-blue text-white rounded-[3rem]">
            <History className="w-12 h-12 text-brand-red mb-6" />
            <h2 className="text-3xl font-black mb-4 uppercase tracking-tight text-white">Our History</h2>
            <p className="text-white/80 font-medium leading-relaxed">
              From a small gathering of activists to a national federation of 50,000+ members, our journey has been defined by resilience. We have successfully negotiated over 1,200 collective agreements.
            </p>
          </motion.div>
        </div>

        <motion.div initial="hidden" animate="visible" custom={3} variants={fadeIn} className="mb-24">
          <h2 className="text-4xl font-black text-brand-blue mb-12 uppercase text-center underline decoration-brand-red decoration-8 underline-offset-8">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Transparency", desc: "Digital tracking of every union decision and fund allocation." },
              { title: "Inclusivity", desc: "Representation for all genders, ages, and skill levels." },
              { title: "Incorruptibility", desc: "A strict ethical code backed by independent annual audits." }
            ].map((value, i) => (
              <div key={i} className="text-center p-8 bg-white border-2 border-slate-50 shadow-xl rounded-3xl">
                <h3 className="text-xl font-black text-brand-red mb-3 uppercase">{value.title}</h3>
                <p className="text-slate-500 font-medium">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-xs font-bold uppercase tracking-widest bg-slate-50">
        <p>© 2026 Shram Jagaran Network. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
