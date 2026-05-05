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
            Get in <span className="text-brand-red">Touch</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl font-medium">
            Have a workplace issue? Want to register a new branch? Or just want to learn more about our movement? We are here to listen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div initial="hidden" animate="visible" custom={1} variants={fadeIn} className="space-y-10">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-2xl flex items-center justify-center shadow-lg shadow-brand-blue/20">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-black text-brand-blue uppercase mb-2">Email Us</h3>
                <p className="text-slate-500 font-bold">general@shramjagaran.org</p>
                <p className="text-slate-400 text-sm">Response within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-brand-red text-white rounded-2xl flex items-center justify-center shadow-lg shadow-brand-red/20">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-black text-brand-blue uppercase mb-2">Call Us</h3>
                <p className="text-slate-500 font-bold">+1 (555) 000-WORK</p>
                <p className="text-slate-400 text-sm">Mon-Fri, 9am - 6pm</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-slate-800 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-slate-800/20">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-black text-brand-blue uppercase mb-2">Our Office</h3>
                <p className="text-slate-500 font-bold">123 Solidarity Way, Workers District</p>
                <p className="text-slate-400 text-sm">Central Hub Office, Floor 4</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial="hidden" animate="visible" custom={2} variants={fadeIn} className="bg-slate-50 p-12 rounded-[3rem] border-2 border-slate-100 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                  <input type="text" className="w-full bg-white border-2 border-slate-200 p-4 rounded-xl focus:border-brand-blue outline-none transition-all font-bold" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Worker ID (Optional)</label>
                  <input type="text" className="w-full bg-white border-2 border-slate-200 p-4 rounded-xl focus:border-brand-blue outline-none transition-all font-bold" placeholder="SJ-0000" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Subject</label>
                <select className="w-full bg-white border-2 border-slate-200 p-4 rounded-xl focus:border-brand-blue outline-none transition-all font-bold">
                  <option>Membership Inquiry</option>
                  <option>Workplace Grievance</option>
                  <option>Legal Support</option>
                  <option>General Feedback</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Message</label>
                <textarea className="w-full bg-white border-2 border-slate-200 p-4 rounded-xl focus:border-brand-blue outline-none transition-all font-bold h-32" placeholder="Tell us how we can help..."></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-brand-blue text-white font-black uppercase tracking-widest rounded-xl hover:bg-brand-blue/90 hover:scale-[1.02] transition-all shadow-xl shadow-brand-blue/20 flex items-center justify-center space-x-3">
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </main>

      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-xs font-bold uppercase tracking-widest bg-white">
        <p>© 2026 Shram Jagaran Network. Solidarity Forever.</p>
      </footer>
    </div>
  );
}
