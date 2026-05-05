"use client";

import { motion, AnimatePresence } from "framer-motion";

import { 
  ArrowRight, Shield, Users, Megaphone, Handshake, 
  TrendingUp, Globe, Heart, CheckCircle2, MessageSquare,
  Share2, ExternalLink, Globe2, Mail, Phone, MapPin,
  Sun, Moon, Settings, Layout, Move,
  ChevronUp, ChevronDown, ChevronLeft, ChevronRight
} from "lucide-react";


import Link from "next/link";
import { useState, useEffect } from "react";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


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
  const [navPosition, setNavPosition] = useState<'top' | 'bottom' | 'left' | 'right'>('top');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showAlignmentControls, setShowAlignmentControls] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={clsx(
      "min-h-screen font-sans selection:bg-brand-red/10 overflow-x-hidden transition-colors duration-500",
      isDarkMode ? "dark bg-slate-950 text-slate-100" : "bg-white text-slate-900"
    )}>


      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-brand-blue/5 blur-[150px]" />
        <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-red/5 blur-[120px]" />
      </div>

      <div className={clsx(
        "relative z-10 transition-all duration-700",
        (hasScrolled && navPosition === 'left') && "pl-24",
        (hasScrolled && navPosition === 'right') && "pr-24",
        (hasScrolled && navPosition === 'top') && "pt-0",
        (hasScrolled && navPosition === 'bottom') && "pb-0"
      )}>
        {/* Dynamic Navbar */}
        <header 
          className={clsx(
            "fixed z-50 transition-all duration-700 ease-in-out backdrop-blur-md",
            !hasScrolled ? "top-0 left-0 w-full h-24 px-12 bg-transparent border-transparent" : [
              "border-slate-200 dark:border-slate-800 shadow-2xl",
              isDarkMode ? "bg-slate-900/90" : "bg-white/90",
              navPosition === 'top' && "top-0 left-0 w-full border-b h-20 px-12",
              navPosition === 'bottom' && "bottom-0 left-0 w-full border-t h-20 px-12",
              navPosition === 'left' && "top-0 left-0 h-full w-24 border-r py-12",
              navPosition === 'right' && "top-0 right-0 h-full w-24 border-l py-12"
            ]
          )}
        >
          <div className={clsx(
            "flex items-center justify-between w-full h-full",
            (hasScrolled && (navPosition === 'left' || navPosition === 'right')) ? "flex-col" : "flex-row"
          )}>
            <motion.div 
              initial="hidden" animate="visible" custom={0} variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <Shield className="w-8 h-8 text-brand-red group-hover:rotate-12 transition-transform" />
              {(!hasScrolled || navPosition === 'top' || navPosition === 'bottom') && (
                <span className="text-xl font-extrabold tracking-tight text-brand-blue dark:text-slate-100 transition-all">Shram Jagaran</span>
              )}
            </motion.div>
            
            <motion.nav 
              initial="hidden" animate="visible" custom={1} variants={fadeIn}
              className={clsx(
                "flex text-sm font-semibold gap-8 transition-all duration-500",
                isDarkMode ? "text-slate-400" : "text-slate-600",
                (hasScrolled && (navPosition === 'left' || navPosition === 'right')) ? "flex-col items-center" : "flex-row items-center"
              )}
            >
              {[
                { name: "About", icon: <Users className="w-5 h-5" />, href: "/about" },
                { name: "Initiatives", icon: <Megaphone className="w-5 h-5" />, href: "/initiatives" },
                { name: "Impact", icon: <TrendingUp className="w-5 h-5" />, href: "#statistics" },
                { name: "Contact", icon: <Mail className="w-5 h-5" />, href: "/contact" }
              ].map((item, i) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="relative group hover:text-brand-red transition-colors flex flex-col items-center gap-1"
                >
                  <span className={clsx("transition-transform group-hover:scale-110", (!hasScrolled || navPosition === 'top' || navPosition === 'bottom') && "block")}>
                    {item.name}
                  </span>
                  <span className={clsx("transition-transform group-hover:scale-110", (hasScrolled && (navPosition === 'left' || navPosition === 'right')) && "block")}>
                    {(hasScrolled && (navPosition === 'left' || navPosition === 'right')) && item.icon}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full" />
                </Link>
              ))}
            </motion.nav>

            <motion.div 
              initial="hidden" animate="visible" custom={2} variants={fadeIn}
              className={clsx("flex gap-4", (hasScrolled && (navPosition === 'left' || navPosition === 'right')) ? "flex-col items-center" : "items-center")}
            >
              {/* Controls Container */}
              <div className={clsx(
                "flex items-center gap-2 p-1 rounded-xl transition-all duration-500",
                isDarkMode ? "bg-slate-800/50" : "bg-slate-100/50",
                (hasScrolled && (navPosition === 'left' || navPosition === 'right')) ? "flex-col" : "flex-row"
              )}>
                {/* Theme Toggle */}
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={clsx(
                    "p-2 rounded-lg transition-all",
                    isDarkMode ? "text-yellow-400 hover:bg-slate-700" : "text-slate-500 hover:text-brand-blue hover:bg-white"
                  )}
                  title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                  {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>

                {/* Alignment Toggle - Only visible when scrolled */}
                {hasScrolled && (
                  <div className={clsx(
                    "flex items-center gap-2",
                    (navPosition === 'left' || navPosition === 'right') ? "flex-col" : "flex-row"
                  )}>
                    <div className={clsx(
                      "opacity-20",
                      (navPosition === 'left' || navPosition === 'right') ? "w-8 h-px bg-slate-400" : "h-8 w-px bg-slate-400"
                    )} />
                    
                    <button
                      onClick={() => setShowAlignmentControls(!showAlignmentControls)}
                      className={clsx(
                        "p-2 rounded-lg transition-all",
                        showAlignmentControls ? "bg-brand-red text-white scale-110" : "text-slate-500 hover:text-brand-blue hover:bg-white"
                      )}
                      title="Alignment Settings"
                    >
                      <Layout className="w-4 h-4" />
                    </button>

                    {/* Popout Alignment Controls */}
                    <AnimatePresence>
                      {showAlignmentControls && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className={clsx(
                            "flex p-1 bg-white dark:bg-slate-700 rounded-lg shadow-xl border border-slate-200 dark:border-slate-600",
                            (navPosition === 'left' || navPosition === 'right') ? "flex-col" : "flex-row"
                          )}
                        >
                          {[
                            { pos: 'top', icon: <ChevronUp className="w-4 h-4" /> },
                            { pos: 'left', icon: <ChevronLeft className="w-4 h-4" /> },
                            { pos: 'bottom', icon: <ChevronDown className="w-4 h-4" /> },
                            { pos: 'right', icon: <ChevronRight className="w-4 h-4" /> },
                          ].map((btn) => (

                            <button
                              key={btn.pos}
                              onClick={() => {
                                setNavPosition(btn.pos as any);
                                setShowAlignmentControls(false);
                              }}
                              className={clsx(
                                "p-2 rounded transition-all",
                                navPosition === btn.pos ? "bg-brand-blue text-white" : "text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-600"
                              )}
                            >
                              {btn.icon}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/hub" 
                  className={clsx(
                    "bg-brand-blue text-white text-sm font-bold rounded-lg hover:bg-brand-blue/90 transition-all shadow-md flex items-center justify-center",
                    (hasScrolled && (navPosition === 'left' || navPosition === 'right')) ? "w-12 h-12" : "px-6 py-2.5"
                  )}
                >
                  {(hasScrolled && (navPosition === 'left' || navPosition === 'right')) ? <Handshake className="w-6 h-6" /> : "Member Hub"}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </header>


        {/* Hero Section */}
        <main className={clsx(
          "min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20",
          isDarkMode ? "bg-gradient-to-b from-slate-950 to-slate-900" : "bg-gradient-to-b from-slate-50 to-white"
        )}>

          <div className="max-w-5xl">
            <motion.div
              initial="hidden" animate="visible" custom={3} variants={fadeIn}
              whileHover={{ x: 5 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold tracking-wide uppercase mb-8 cursor-default"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                Strength in Unity, Power in Progress
              </span>
            </motion.div>

            <motion.h1 
              initial="hidden" animate="visible" custom={4} variants={fadeIn}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8 text-brand-blue"
            >
              Upholding <br />
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-brand-red inline-block"
              >
                Labor Rights.
              </motion.span>
            </motion.h1>

            <motion.p 
              initial="hidden" animate="visible" custom={5} variants={fadeIn}
              className={clsx(
                "max-w-2xl text-xl md:text-2xl leading-relaxed mb-12 font-medium",
                isDarkMode ? "text-slate-400" : "text-slate-600"
              )}
            >

              The leading trade union federation dedicated to ensuring safety, fairness, and prosperity for every worker across the nation.
            </motion.p>

            <motion.div 
              initial="hidden" animate="visible" custom={6} variants={fadeIn}
              className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link 
                  href="/hub" 
                  className="w-full px-10 py-5 bg-brand-red text-white font-bold rounded-xl transition-all hover:bg-brand-red/90 shadow-xl shadow-brand-red/20 flex items-center justify-center space-x-3 group"
                >
                  <span>Join the Union</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link 
                  href="/about" 
                  className={clsx(
                    "w-full px-10 py-5 font-bold rounded-xl transition-all flex items-center justify-center shadow-lg",
                    isDarkMode ? "bg-slate-900 border-2 border-slate-700 text-slate-200 hover:bg-slate-800" : "bg-white border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/5 shadow-slate-200/50"
                  )}
                >
                  Learn Our Story
                </Link>
              </motion.div>

            </motion.div>
          </div>
        </main>

        {/* Stats Section */}
        <section id="statistics" className="py-24 px-6 md:px-12 lg:px-24 bg-brand-blue text-white overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Members", value: "50,000+", icon: <Users className="w-6 h-6" /> },
              { label: "Resolved Cases", value: "1,200+", icon: <CheckCircle2 className="w-6 h-6" /> },
              { label: "Regional Branches", value: "24", icon: <Globe className="w-6 h-6" /> },
              { label: "Solidarity Fund", value: "$2.4M", icon: <Heart className="w-6 h-6" /> },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} custom={idx} variants={fadeIn}
                whileHover={{ y: -10 }}
                className="text-center p-6 rounded-2xl hover:bg-white/5 transition-colors cursor-default"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: idx * 0.1 + 0.3, type: "spring" }}
                  className="flex justify-center mb-4 opacity-80"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-4xl md:text-5xl font-black mb-2">{stat.value}</div>
                <div className="text-white/70 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-brand-blue underline decoration-brand-red decoration-8 underline-offset-8">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                Shram Jagaran Network stands as a pillar of support for the labor force. We are not just an organization; we are a movement built on the sweat and dedication of our members.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {["Legal Aid & Counseling", "Wage Negotiation", "Safety Audits", "Skill Training", "Emergency Support", "Advocacy"].map((item, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-3 text-slate-700 font-semibold bg-slate-50 p-4 rounded-xl border-l-4 border-brand-red cursor-default shadow-sm hover:shadow-md transition-all"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/about" className="px-8 py-4 bg-brand-blue text-white rounded-xl transition-colors font-bold inline-block hover:bg-brand-blue/90 shadow-lg">Detailed History</Link>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative p-1 bg-gradient-to-br from-brand-blue to-brand-red rounded-[2.5rem] group"
            >
               <div className="bg-white p-12 rounded-[2.3rem] shadow-2xl transition-all group-hover:scale-[0.99]">
                  <motion.div 
                    initial={{ scale: 0.95 }}
                    whileHover={{ scale: 1 }}
                    className="space-y-8"
                  >
                    <p className="text-2xl font-bold italic text-slate-800 leading-tight">
                      "The collective strength of this union turned our workplace from a site of exploitation into one of mutual respect."
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center font-bold text-brand-blue overflow-hidden ring-4 ring-slate-50 transition-all group-hover:ring-brand-red/20">
                        <motion.div whileHover={{ scale: 1.2 }} className="w-full h-full flex items-center justify-center">RK</motion.div>
                      </div>
                      <div>
                        <p className="font-black text-brand-blue uppercase tracking-tighter">Rajesh Kumar</p>
                        <p className="text-sm font-bold text-brand-red">Central Committee Member</p>
                      </div>
                    </div>
                  </motion.div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* Services/Initiatives Grid */}
        <section id="initiatives" className={clsx(
          "py-32 px-6 md:px-12 lg:px-24 transition-colors",
          isDarkMode ? "bg-slate-900/50" : "bg-slate-50"
        )}>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6 text-brand-blue dark:text-slate-100"
            >
              Union Initiatives
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={clsx(
                "text-lg font-medium",
                isDarkMode ? "text-slate-400" : "text-slate-600"
              )}
            >
              Strategic programs designed to empower, protect, and educate our members.
            </motion.p>
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
                icon: <MessageSquare className="w-8 h-8 text-brand-blue dark:text-brand-red" />,
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
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} custom={idx} variants={fadeIn}
                whileHover={{ y: -15 }}
                className={clsx(
                  "group p-10 border-2 rounded-3xl transition-all duration-500 hover:shadow-2xl cursor-default",
                  isDarkMode ? "bg-slate-900 border-slate-800 hover:border-brand-red/30" : "bg-white border-slate-100 hover:border-brand-red/30"
                )}
              >
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="mb-6 inline-block"
                >
                  {item.icon}
                </motion.div>
                <span className="text-[10px] font-black tracking-[0.2em] text-brand-red mb-4 block">{item.tag}</span>
                <h3 className={clsx(
                  "text-2xl font-black mb-4 transition-colors",
                  isDarkMode ? "text-slate-100 group-hover:text-brand-red" : "text-brand-blue group-hover:text-brand-red"
                )}>{item.title}</h3>
                <p className={clsx(
                  "font-medium leading-relaxed mb-8",
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                )}>{item.desc}</p>
                <Link href="/initiatives" className="flex items-center space-x-2 text-brand-blue dark:text-brand-red font-bold group-hover:translate-x-1 transition-all">
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
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-16 text-center text-brand-blue dark:text-slate-100"
            >
              Member FAQ
            </motion.h2>
            <div className="space-y-6">
              {[
                { q: "How do I join?", a: "Register via the Member Hub portal. You will need your worker ID and basic employment details." },
                { q: "What about dues?", a: "Dues are 1% of basic salary, used exclusively for solidarity and legal funds." }
              ].map((faq, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className={clsx(
                    "p-8 rounded-2xl border-2 transition-all cursor-default shadow-sm hover:shadow-md",
                    isDarkMode ? "bg-slate-900 border-slate-800 hover:border-brand-blue/10" : "bg-white border-slate-50 hover:border-brand-blue/10"
                  )}
                >
                  <h4 className="text-xl font-black text-brand-blue dark:text-slate-100 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-brand-red text-white rounded-lg flex items-center justify-center mr-4 text-sm shadow-lg shadow-brand-red/20">Q</span>
                    {faq.q}
                  </h4>
                  <p className={clsx(
                    "pl-12 font-medium border-l-2 ml-4",
                    isDarkMode ? "text-slate-400 border-slate-800" : "text-slate-600 border-slate-100"
                  )}>{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer Section */}
        <footer className={clsx(
          "pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t transition-colors",
          isDarkMode ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200"
        )}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-2 mb-8">
                <Shield className="w-8 h-8 text-brand-red" />
                <span className="text-2xl font-black tracking-tight text-brand-blue dark:text-slate-100 uppercase">Shram Jagaran</span>
              </div>
              <p className={clsx(
                "font-medium text-lg max-w-md mb-8",
                isDarkMode ? "text-slate-500" : "text-slate-500"
              )}>
                The vanguard of worker rights and institutional integrity. Founded 2010.
              </p>
              <div className="flex space-x-4">
                {[Share2, ExternalLink, Mail, Phone].map((Icon, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 10, backgroundColor: isDarkMode ? "#E31E24" : "#003366", color: "#fff" }}
                    whileTap={{ scale: 0.9 }}
                    className={clsx(
                      "w-10 h-10 rounded-lg flex items-center justify-center transition-all cursor-pointer",
                      isDarkMode ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-brand-blue"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {[
              { title: "Quick Links", links: ["About", "Initiatives", "Contact"] },
              { title: "Administration", links: ["Bylaws", "Annual Audit", "Regional Hubs"] }
            ].map((col, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <h4 className="font-black mb-8 uppercase tracking-widest text-[10px] text-slate-400">{col.title}</h4>
                <ul className={clsx(
                  "space-y-4 font-bold",
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                )}>
                  {col.links.map(link => (
                    <li key={link}>
                      <Link href={`/${link.toLowerCase().replace(" ", "-")}`} className="hover:text-brand-red transition-all hover:pl-2">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={clsx(
              "pt-12 border-t flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-tighter",
              isDarkMode ? "border-slate-800 text-slate-500" : "border-slate-100 text-slate-400"
            )}
          >
            <p>© 2026 Shram Jagaran Network. Solidarity Forever.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link href="/contact" className="hover:text-brand-blue dark:hover:text-brand-red transition-colors">Support</Link>
              <motion.span 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-brand-red"
              >
                Certified Trade Union
              </motion.span>
            </div>
          </motion.div>
        </footer>

      </div>
    </div>
  );
}

