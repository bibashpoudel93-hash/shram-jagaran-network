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
      title: "Collective Bargaining Units",
      desc: "Specialized committees that negotiate with industry leaders to secure better wages, healthcare, and working conditions.",
      icon: <Users className="w-10 h-10 text-brand-red" />,
      color: "bg-brand-blue"
    },
    {
      title: "Digital Grievance System",
      desc: "Our state-of-the-art Member Hub allows for instant reporting of workplace violations, with tracked response times.",
      icon: <MessageSquare className="w-10 h-10 text-brand-blue" />,
      color: "bg-brand-red"
    },
    {
      title: "Legal Aid & Advocacy",
      desc: "Pro-bono legal representation for members in labor disputes, ensuring no worker is silenced by corporate legal power.",
      icon: <Shield className="w-10 h-10 text-brand-blue" />,
      color: "bg-slate-800"
    },
    {
      title: "Solidarity Fund",
      desc: "An emergency financial pool providing interest-free loans and strike-pay to members during times of crisis.",
      icon: <Heart className="w-10 h-10 text-brand-red" />,
      color: "bg-brand-blue"
    },
    {
      title: "Skill Upgradation",
      desc: "Regular workshops and certifications to help workers adapt to modern industrial technologies and automation.",
      icon: <TrendingUp className="w-10 h-10 text-brand-blue" />,
      color: "bg-brand-red"
    },
    {
      title: "Youth & Women Wings",
      desc: "Dedicated programs to address the specific needs of young workers and ensure gender equality in the workplace.",
      icon: <Handshake className="w-10 h-10 text-brand-red" />,
      color: "bg-slate-800"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
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
        <motion.div initial="hidden" animate="visible" custom={0} variants={fadeIn} className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-brand-blue mb-6 tracking-tighter uppercase">
            Core <span className="text-brand-red">Programs</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Strategic initiatives designed to protect the past, represent the present, and secure the future of labor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden" animate="visible" custom={idx + 1} variants={fadeIn}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl border-2 border-transparent hover:border-brand-red/20 transition-all duration-500 group"
            >
              <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-brand-blue mb-4 uppercase tracking-tighter leading-none">{item.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                {item.desc}
              </p>
              <div className="h-1 w-12 bg-brand-red rounded-full transition-all group-hover:w-full duration-500"></div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-xs font-bold uppercase tracking-widest bg-white">
        <p>© 2026 Shram Jagaran Network. Solidarity Forever.</p>
      </footer>
    </div>
  );
}
