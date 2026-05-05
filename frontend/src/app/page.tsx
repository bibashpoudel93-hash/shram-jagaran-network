"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, Shield, Users, Megaphone, Handshake, 
  TrendingUp, Globe, Heart, CheckCircle2, MessageSquare,
  Share2, ExternalLink, Globe2, Mail, Phone, MapPin
} from "lucide-react";
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-red/10 overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-brand-blue/5 blur-[150px]" />
        <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-red/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <header className="fixed top-0 w-full z-50 px-6 py-4 md:px-12 lg:px-24 flex items-center justify-between backdrop-blur-md bg-white/80 border-b border-slate-200">
          <motion.div 
            initial="hidden" animate="visible" custom={0} variants={fadeIn}
            className="flex items-center space-x-2"
          >
            <Shield className="w-8 h-8 text-brand-red" />
            <span className="text-xl font-extrabold tracking-tight text-brand-blue">Shram Jagaran</span>
          </motion.div>
          
          <motion.nav 
            initial="hidden" animate="visible" custom={1} variants={fadeIn}
            className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600"
          >
            <Link href="/about" className="hover:text-brand-red transition-colors">About</Link>
            <Link href="/initiatives" className="hover:text-brand-red transition-colors">Initiatives</Link>
            <a href="#statistics" className="hover:text-brand-red transition-colors">Impact</a>
            <Link href="/contact" className="hover:text-brand-red transition-colors">Contact</Link>
          </motion.nav>

          <motion.div initial="hidden" animate="visible" custom={2} variants={fadeIn}>
            <Link 
              href="/hub" 
              className="px-6 py-2.5 bg-brand-blue text-white text-sm font-bold rounded-lg hover:bg-brand-blue/90 transition-all shadow-md active:scale-95"
            >
              Member Hub
            </Link>
          </motion.div>
        </header>

        {/* Hero Section */}
        <main className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-5xl">
            <motion.div
              initial="hidden" animate="visible" custom={3} variants={fadeIn}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold tracking-wide uppercase mb-8"
            >
              <span>Strength in Unity, Power in Progress</span>
            </motion.div>

            <motion.h1 
              initial="hidden" animate="visible" custom={4} variants={fadeIn}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8 text-brand-blue"
            >
              Upholding <br />
              <span className="text-brand-red">
                Labor Rights.
              </span>
            </motion.h1>

            <motion.p 
              initial="hidden" animate="visible" custom={5} variants={fadeIn}
              className="max-w-2xl text-xl md:text-2xl text-slate-600 leading-relaxed mb-12 font-medium"
            >
              The leading trade union federation dedicated to ensuring safety, fairness, and prosperity for every worker across the nation.
            </motion.p>

            <motion.div 
              initial="hidden" animate="visible" custom={6} variants={fadeIn}
              className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Link 
                href="/hub" 
                className="w-full sm:w-auto px-10 py-5 bg-brand-red text-white font-bold rounded-xl transition-all hover:bg-brand-red/90 hover:scale-105 shadow-xl shadow-brand-red/20 flex items-center justify-center space-x-3"
              >
                <span>Join the Union</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/about" 
                className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-brand-blue text-brand-blue font-bold rounded-xl transition-all hover:bg-brand-blue/5 flex items-center justify-center"
              >
                Learn Our Story
              </Link>
            </motion.div>
          </div>
        </main>

        {/* Stats Section */}
        <section id="statistics" className="py-24 px-6 md:px-12 lg:px-24 bg-brand-blue text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Members", value: "50,000+", icon: <Users className="w-6 h-6" /> },
              { label: "Resolved Cases", value: "1,200+", icon: <CheckCircle2 className="w-6 h-6" /> },
              { label: "Regional Branches", value: "24", icon: <Globe className="w-6 h-6" /> },
              { label: "Solidarity Fund", value: "$2.4M", icon: <Heart className="w-6 h-6" /> },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx} variants={fadeIn}
                className="text-center"
              >
                <div className="flex justify-center mb-4 opacity-80">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black mb-2">{stat.value}</div>
                <div className="text-white/70 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-brand-blue underline decoration-brand-red decoration-8 underline-offset-8">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                Shram Jagaran Network stands as a pillar of support for the labor force. We are not just an organization; we are a movement built on the sweat and dedication of our members.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {["Legal Aid & Counseling", "Wage Negotiation", "Safety Audits", "Skill Training", "Emergency Support", "Advocacy"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-700 font-semibold bg-slate-50 p-4 rounded-xl border-l-4 border-brand-red">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="px-8 py-4 bg-brand-blue text-white rounded-xl transition-colors font-bold inline-block hover:bg-brand-blue/90 shadow-lg">Detailed History</Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative p-1 bg-gradient-to-br from-brand-blue to-brand-red rounded-[2.5rem]"
            >
               <div className="bg-white p-12 rounded-[2.3rem] shadow-2xl">
                  <p className="text-2xl font-bold italic text-slate-800 leading-tight mb-8">
                    "The collective strength of this union turned our workplace from a site of exploitation into one of mutual respect."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center font-bold text-brand-blue">RK</div>
                    <div>
                      <p className="font-black text-brand-blue uppercase tracking-tighter">Rajesh Kumar</p>
                      <p className="text-sm font-bold text-brand-red">Central Committee Member</p>
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* Services/Initiatives Grid */}
        <section id="initiatives" className="py-32 px-6 md:px-12 lg:px-24 bg-slate-50">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-brand-blue">Union Initiatives</h2>
            <p className="text-slate-600 text-lg font-medium">Strategic programs designed to empower, protect, and educate our members.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bargaining Units",
                desc: "Expert teams specializing in sector-specific negotiations to ensure maximum benefits.",
                icon: <Users className="w-8 h-8 text-brand-red" />,
                tag: "CORE"
              },
              {
                title: "Digital Grievance",
                desc: "Our Hub platform allows for instant, tracked reporting of workplace violations.",
                icon: <MessageSquare className="w-8 h-8 text-brand-blue" />,
                tag: "TECH"
              },
              {
                title: "National Fund",
                desc: "A $2.4M solidarity fund providing zero-interest loans and emergency aid.",
                icon: <Heart className="w-8 h-8 text-brand-red" />,
                tag: "SUPPORT"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx} variants={fadeIn}
                className="group p-10 bg-white border-2 border-slate-100 hover:border-brand-red/30 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="mb-6">{item.icon}</div>
                <span className="text-[10px] font-black tracking-[0.2em] text-brand-red mb-4 block">{item.tag}</span>
                <h3 className="text-2xl font-black mb-4 text-brand-blue">{item.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8">{item.desc}</p>
                <Link href="/initiatives" className="flex items-center space-x-2 text-brand-blue font-bold group-hover:text-brand-red transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-brand-blue">Member FAQ</h2>
            <div className="space-y-4">
              {[
                { q: "How do I join?", a: "Register via the Member Hub portal. You will need your worker ID and basic employment details." },
                { q: "What about dues?", a: "Dues are 1% of basic salary, used exclusively for solidarity and legal funds." }
              ].map((faq, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white border-2 border-slate-50 shadow-sm">
                  <h4 className="text-xl font-black text-brand-blue mb-4 flex items-center">
                    <span className="w-8 h-8 bg-brand-red text-white rounded-lg flex items-center justify-center mr-4 text-sm">Q</span>
                    {faq.q}
                  </h4>
                  <p className="text-slate-600 pl-12 font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer Section */}
        <footer className="pt-24 pb-12 px-6 md:px-12 lg:px-24 bg-white border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-8">
                <Shield className="w-8 h-8 text-brand-red" />
                <span className="text-2xl font-black tracking-tight text-brand-blue uppercase">Shram Jagaran</span>
              </div>
              <p className="text-slate-500 font-medium text-lg max-w-md mb-8">
                The vanguard of worker rights and institutional integrity. Founded 2010.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all cursor-pointer"><Share2 className="w-5 h-5" /></div>
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all cursor-pointer"><ExternalLink className="w-5 h-5" /></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-black mb-8 uppercase tracking-widest text-[10px] text-slate-400">Quick Links</h4>
              <ul className="space-y-4 font-bold text-slate-600">
                <li><Link href="/about" className="hover:text-brand-red">About Us</Link></li>
                <li><Link href="/initiatives" className="hover:text-brand-red">Initiatives</Link></li>
                <li><Link href="/contact" className="hover:text-brand-red">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black mb-8 uppercase tracking-widest text-[10px] text-slate-400">Administration</h4>
              <ul className="space-y-4 font-bold text-slate-600">
                <li className="hover:text-brand-red cursor-pointer">Bylaws</li>
                <li className="hover:text-brand-red cursor-pointer">Annual Audit</li>
                <li className="hover:text-brand-red cursor-pointer">Regional Hubs</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs font-bold uppercase tracking-tighter">
            <p>© 2026 Shram Jagaran Network. Solidarity Forever.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link href="/contact" className="hover:text-brand-blue">Support</Link>
              <span className="text-brand-red">Certified Trade Union</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

