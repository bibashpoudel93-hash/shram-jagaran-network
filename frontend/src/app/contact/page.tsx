"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Shield, ArrowLeft } from "lucide-react";
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

export default function ContactPage() {
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
            Get in <span className="text-brand-red text-gradient">Touch.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl font-medium leading-relaxed">
            Have a workplace issue? Want to register a new branch? Or just want to learn more about our movement? We are here to listen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <motion.div initial="hidden" animate="visible" custom={1} variants={fadeIn} className="space-y-12">
            {[
              { icon: <Mail />, title: "Email Us", detail: "general@shramjagaran.org", sub: "Response within 24 hours", color: "bg-brand-blue" },
              { icon: <Phone />, title: "Call Us", detail: "+1 (555) 000-WORK", sub: "Mon-Fri, 9am - 6pm", color: "bg-brand-red" },
              { icon: <MapPin />, title: "Our Office", detail: "123 Solidarity Way, Workers District", sub: "Central Hub Office, Floor 4", color: "bg-slate-800" },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ x: 10 }} className="flex items-start space-x-8">
                <div className={cn("w-20 h-20 text-white rounded-3xl flex items-center justify-center shadow-2xl", item.color)}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{item.title}</h3>
                  <p className="text-2xl font-black text-brand-blue dark:text-slate-100 tracking-tighter">{item.detail}</p>
                  <p className="text-slate-500 font-bold text-sm mt-1">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial="hidden" animate="visible" custom={2} variants={fadeIn} 
            className="glass p-12 rounded-[3.5rem] border-slate-200/50 dark:border-slate-800/50 shadow-3xl"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-900/50 border-2 border-transparent p-5 rounded-2xl focus:border-brand-blue dark:focus:border-brand-red outline-none transition-all font-bold text-slate-900 dark:text-slate-100" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Worker ID</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-900/50 border-2 border-transparent p-5 rounded-2xl focus:border-brand-blue dark:focus:border-brand-red outline-none transition-all font-bold text-slate-900 dark:text-slate-100" placeholder="SJ-0000" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Subject</label>
                <select className="w-full bg-slate-50 dark:bg-slate-900/50 border-2 border-transparent p-5 rounded-2xl focus:border-brand-blue dark:focus:border-brand-red outline-none transition-all font-bold text-slate-900 dark:text-slate-100 appearance-none">
                  <option>Membership Inquiry</option>
                  <option>Workplace Grievance</option>
                  <option>Legal Support</option>
                  <option>General Feedback</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Message</label>
                <textarea className="w-full bg-slate-50 dark:bg-slate-900/50 border-2 border-transparent p-5 rounded-2xl focus:border-brand-blue dark:focus:border-brand-red outline-none transition-all font-bold text-slate-900 dark:text-slate-100 h-40 resize-none" placeholder="Tell us how we can help..."></textarea>
              </div>
              <button type="submit" className="w-full py-6 bg-brand-blue text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-brand-blue/90 hover:scale-[1.02] transition-all shadow-2xl shadow-brand-blue/20 flex items-center justify-center space-x-4 group">
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </main>

      <footer className="py-16 border-t border-slate-100 dark:border-slate-900 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] bg-white dark:bg-slate-950">
        <p>© 2026 Shram Jagaran Network. Solidarity Forever.</p>
      </footer>
    </div>
  );
}
