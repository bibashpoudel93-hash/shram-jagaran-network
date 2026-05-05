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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className={clsx(
      "min-h-screen font-sans selection:bg-brand-red/10 overflow-x-hidden transition-colors duration-500 cursor-none",
      isDarkMode ? "dark bg-slate-950 text-slate-100" : "bg-white text-slate-900"
    )}>
      {/* Custom Cursor */}
      <motion.div 
        className="cursor-dot hidden md:block"
        animate={{ 
          x: mousePosition.x - 4, 
          y: mousePosition.y - 4,
          scale: isHovering ? 1.5 : 1
        }}
      />
      <motion.div 
        className="cursor-outline hidden md:block"
        animate={{ 
          x: mousePosition.x - 20, 
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.4
        }}
        transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
      />

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-red z-[100] origin-left"
        style={{ scaleX: useScrollProgress() }}
      />

      {/* Dynamic Background with Floating Shapes */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-brand-blue/5 blur-[150px]" />
        <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-red/5 blur-[120px]" />
        
        {/* Animated Floating Shapes */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] right-[20%] w-24 h-24 border border-brand-blue/10 rounded-3xl rotate-12"
        />
        <motion.div 
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -15, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] left-[15%] w-32 h-32 border border-brand-red/10 rounded-full"
        />
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
              "border-slate-200/50 dark:border-slate-800/50 shadow-2xl glass",
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
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <Shield className="w-8 h-8 text-brand-red group-hover:rotate-12 transition-transform" />
              {(!hasScrolled || navPosition === 'top' || navPosition === 'bottom') && (
                <span className="text-xl font-black tracking-tighter text-brand-blue dark:text-slate-100 transition-all uppercase">Shram Jagaran</span>
              )}
            </motion.div>
            
            <motion.nav 
              initial="hidden" animate="visible" custom={1} variants={fadeIn}
              className={clsx(
                "flex text-xs font-bold uppercase tracking-widest gap-8 transition-all duration-500",
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
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="relative group hover:text-brand-red transition-colors flex flex-col items-center gap-1"
                >
                  <span className={clsx("transition-transform group-hover:translate-y-[-2px]", (!hasScrolled || navPosition === 'top' || navPosition === 'bottom') && "block")}>
                    {item.name}
                  </span>
                  <span className={clsx("transition-transform group-hover:scale-110", (hasScrolled && (navPosition === 'left' || navPosition === 'right')) && "block")}>
                    {(hasScrolled && (navPosition === 'left' || navPosition === 'right')) && item.icon}
                  </span>
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-brand-red rounded-full transition-all group-hover:w-full" />
                </Link>
              ))}
            </motion.nav>

            <motion.div 
              initial="hidden" animate="visible" custom={2} variants={fadeIn}
              className={clsx("flex gap-4", (hasScrolled && (navPosition === 'left' || navPosition === 'right')) ? "flex-col items-center" : "items-center")}
            >
              <div className={clsx(
                "flex items-center gap-2 p-1 rounded-xl glass",
                (hasScrolled && (navPosition === 'left' || navPosition === 'right')) ? "flex-col" : "flex-row"
              )}>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className={clsx(
                    "p-2 rounded-lg transition-all",
                    isDarkMode ? "text-yellow-400 hover:bg-slate-800" : "text-slate-500 hover:text-brand-blue hover:bg-white/50"
                  )}
                >
                  {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>

                {hasScrolled && (
                  <button
                    onClick={() => setShowAlignmentControls(!showAlignmentControls)}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className={clsx(
                      "p-2 rounded-lg transition-all",
                      showAlignmentControls ? "bg-brand-red text-white" : "text-slate-500 hover:text-brand-blue hover:bg-white/50"
                    )}
                  >
                    <Layout className="w-4 h-4" />
                  </button>
                )}
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/hub" 
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className={clsx(
                    "bg-brand-blue text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-brand-blue/90 transition-all shadow-xl shadow-brand-blue/20 flex items-center justify-center",
                    (hasScrolled && (navPosition === 'left' || navPosition === 'right')) ? "w-12 h-12" : "px-6 py-3"
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
          "min-h-[100vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 pb-20 relative",
          isDarkMode ? "bg-slate-950" : "bg-white"
        )}>
          <div className="max-w-6xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center space-x-3 px-4 py-2 rounded-full glass border-brand-red/10 text-brand-red text-[10px] font-black tracking-[0.2em] uppercase mb-12"
            >
              <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
              <span>Unified Forces • Endless Progress</span>
            </motion.div>

            <motion.h1 
              initial="hidden" animate="visible" custom={4} variants={fadeIn}
              className="text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tighter leading-[0.8] mb-12 text-brand-blue"
            >
              Upholding <br />
              <motion.span 
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ delay: 0.8, duration: 1, type: "spring" }}
                className="text-brand-red inline-block"
              >
                Rights.
              </motion.span>
            </motion.h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <motion.p 
                initial="hidden" animate="visible" custom={5} variants={fadeIn}
                className={clsx(
                  "lg:col-span-7 text-xl md:text-2xl leading-relaxed font-medium",
                  isDarkMode ? "text-slate-400" : "text-slate-500"
                )}
              >
                The leading trade union federation dedicated to ensuring safety, fairness, and prosperity for every worker across the nation.
              </motion.p>

              <motion.div 
                initial="hidden" animate="visible" custom={6} variants={fadeIn}
                className="lg:col-span-5 flex flex-wrap gap-6"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 min-w-[200px]">
                  <Link 
                    href="/hub" 
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="w-full px-8 py-5 bg-brand-red text-white font-black uppercase tracking-widest text-xs rounded-2xl transition-all hover:bg-brand-red/90 shadow-2xl shadow-brand-red/20 flex items-center justify-center space-x-3 group"
                  >
                    <span>Join Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 min-w-[200px]">
                  <Link 
                    href="/about" 
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className={clsx(
                      "w-full px-8 py-5 font-black uppercase tracking-widest text-xs rounded-2xl transition-all flex items-center justify-center border-2",
                      isDarkMode ? "bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800" : "bg-white border-brand-blue/10 text-brand-blue hover:bg-brand-blue/5"
                    )}
                  >
                    Our Vision
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </main>

        {/* Stats Section with Glass Cards */}
        <section id="statistics" className="py-32 px-6 md:px-12 lg:px-24 bg-brand-blue relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-blue-900" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {[
              { label: "Active Members", value: "50K+", icon: <Users /> },
              { label: "Resolved Cases", value: "1.2K+", icon: <CheckCircle2 /> },
              { label: "Branches", value: "24", icon: <Globe /> },
              { label: "Solidarity Fund", value: "$2.4M", icon: <Heart /> },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="text-center p-10 rounded-[2rem] border border-white/10 glass transition-all"
              >
                <div className="text-white/40 mb-6 flex justify-center">{stat.icon}</div>
                <div className="text-5xl font-black mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-white/50 text-[10px] font-black uppercase tracking-[0.3em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Improved About Section */}
        <section id="about" className="py-32 px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tight text-brand-blue">
                Mission <span className="text-brand-red text-gradient">Statement.</span>
              </h2>
              <p className="text-slate-500 text-xl leading-relaxed mb-12 font-medium">
                Shram Jagaran Network stands as a pillar of support for the labor force. We are a movement built on the sweat and dedication of our members.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {["Legal Aid", "Negotiation", "Safety Audits", "Training"].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 p-5 rounded-2xl glass border-slate-100 dark:border-slate-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-red" />
                    <span className="font-bold text-sm uppercase tracking-wider">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="relative p-2 bg-gradient-to-br from-brand-blue/20 to-brand-red/20 rounded-[3rem]"
            >
              <div className={clsx(
                "p-12 rounded-[2.8rem] shadow-3xl",
                isDarkMode ? "bg-slate-900" : "bg-white"
              )}>
                <motion.div className="space-y-10">
                  <p className="text-3xl font-black italic text-brand-blue leading-tight tracking-tighter">
                    "Collective strength turned our workplace into a site of respect."
                  </p>
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-brand-red rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-xl shadow-brand-red/20">RK</div>
                    <div>
                      <p className="font-black text-brand-blue uppercase tracking-widest text-sm">Rajesh Kumar</p>
                      <p className="text-xs font-bold text-brand-red uppercase tracking-[0.2em] mt-1">Central Committee</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Back to Top */}
        <AnimatePresence>
          {hasScrolled && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="fixed bottom-10 right-10 z-[60] w-14 h-14 bg-brand-red text-white rounded-2xl shadow-2xl shadow-brand-red/40 flex items-center justify-center hover:bg-brand-blue transition-all"
            >
              <ChevronUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className={clsx(
          "pt-32 pb-12 px-6 md:px-12 lg:px-24 border-t",
          isDarkMode ? "bg-slate-950 border-slate-900" : "bg-slate-50 border-slate-200"
        )}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-32">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-10">
                <Shield className="w-10 h-10 text-brand-red" />
                <span className="text-3xl font-black tracking-tighter text-brand-blue dark:text-slate-100 uppercase">Shram Jagaran</span>
              </div>
              <p className="font-bold text-slate-500 text-lg max-w-md mb-12">
                The vanguard of worker rights and institutional integrity. Founded 2010.
              </p>
              <div className="flex space-x-6">
                {[Share2, Globe2, Mail, Phone].map((Icon, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center cursor-pointer hover:bg-brand-red hover:text-white transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                ))}
              </div>
            </div>
            
            {[
              { title: "Navigation", links: ["About", "Initiatives", "Contact"] },
              { title: "Legal", links: ["Bylaws", "Audit", "Privacy"] }
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-black mb-10 uppercase tracking-[0.3em] text-[10px] text-slate-400">{col.title}</h4>
                <ul className="space-y-6 font-black uppercase tracking-widest text-xs">
                  {col.links.map(link => (
                    <li key={link}>
                      <Link href="#" className="hover:text-brand-red transition-all flex items-center group">
                        <span className="w-0 h-0.5 bg-brand-red transition-all group-hover:w-4 mr-0 group-hover:mr-2" />
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <p>© 2026 Shram Jagaran Network. Solidarity Forever.</p>
            <div className="flex space-x-12 mt-8 md:mt-0">
              <Link href="#" className="hover:text-brand-blue">Terms</Link>
              <Link href="#" className="hover:text-brand-blue">Support</Link>
              <span className="text-brand-red animate-pulse">Certified Trade Union</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function useScrollProgress() {
  const [completion, setCompletion] = useState(0);
  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)));
      }
    };
    window.addEventListener("scroll", updateScrollCompletion);
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);
  return completion;
}

