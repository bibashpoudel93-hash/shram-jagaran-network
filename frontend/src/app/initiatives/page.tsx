"use client";

import { motion } from "framer-motion";
import { Users, Shield, Heart, TrendingUp, MessageSquare, Handshake, ArrowLeft } from "lucide-react";
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

export default function InitiativesPage() {
  const initiatives = [
    {
      title: "Bargaining Units",
      desc: "Specialized committees that negotiate with industry leaders to secure better wages, healthcare, and working conditions.",
      icon: <Users className="w-10 h-10" />,
      tag: "STRATEGY"
    },
    {
      title: "Digital Grievance",
      desc: "Our state-of-the-art Member Hub allows for instant reporting of workplace violations, with tracked response times.",
      icon: <MessageSquare className="w-10 h-10" />,
      tag: "TECHNOLOGY"
    },
    {
      title: "Legal Advocacy",
      desc: "Pro-bono legal representation for members in labor disputes, ensuring no worker is silenced by corporate legal power.",
      icon: <Shield className="w-10 h-10" />,
      tag: "PROTECTION"
    },
    {
      title: "Solidarity Fund",
      desc: "An emergency financial pool providing interest-free loans and strike-pay to members during times of crisis.",
      icon: <Heart className="w-10 h-10" />,
      tag: "SUPPORT"
    },
    {
      title: "Skill Upgradation",
      desc: "Regular workshops and certifications to help workers adapt to modern industrial technologies and automation.",
      icon: <TrendingUp className="w-10 h-10" />,
      tag: "PROGRESSION"
    },
    {
      title: "Inclusivity Wings",
      desc: "Dedicated programs to address the specific needs of young workers and ensure gender equality in the workplace.",
      icon: <Handshake className="w-10 h-10" />,
      tag: "EQUITY"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-brand-red/10 relative overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-brand-blue/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-brand-red/5 blur-[120px] rounded-full" />
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
            Union <br />
            <span className="text-brand-red text-gradient">Initiatives.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl font-medium leading-relaxed">
            Strategic programs designed to empower, protect, and educate our members. We turn collective strength into individual prosperity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden" animate="visible" custom={idx + 1} variants={fadeIn}
              whileHover={{ y: -10 }}
              className="glass p-12 rounded-[3rem] border-slate-200/50 dark:border-slate-800/50 shadow-2xl transition-all duration-500 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-red rounded-2xl flex items-center justify-center mb-8 text-white shadow-xl shadow-brand-blue/20 group-hover:rotate-6 transition-all duration-500">
                {item.icon}
              </div>
              <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.3em] mb-4 block">{item.tag}</span>
              <h3 className="text-3xl font-black text-brand-blue dark:text-slate-100 mb-6 uppercase tracking-tighter leading-none">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8">
                {item.desc}
              </p>
              <div className="w-12 h-1 bg-brand-red rounded-full transition-all group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="py-16 border-t border-slate-100 dark:border-slate-900 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] bg-white dark:bg-slate-950">
        <p>© 2026 Shram Jagaran Network. Solidarity Forever.</p>
      </footer>
    </div>
  );
}
