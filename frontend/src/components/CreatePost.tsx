"use client";

import { useState } from 'react';
import { createPost } from '@/lib/api';
import { PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CreatePost({ onUpdate }: { onUpdate: () => void }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    
    setIsSubmitting(true);
    try {
      await createPost(title, content);
      setTitle('');
      setContent('');
      onUpdate();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass dark:bg-slate-900/40 border-slate-200/50 dark:border-slate-800/50 rounded-[2.5rem] p-8 mb-12 shadow-2xl relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-3xl rounded-full" />
      
      <div className="flex items-center space-x-3 mb-6 text-brand-blue dark:text-slate-100">
        <div className="p-2 bg-brand-blue/10 dark:bg-white/5 rounded-xl">
          <PenTool className="w-5 h-5 text-brand-red" />
        </div>
        <h2 className="text-xs font-black uppercase tracking-[0.3em]">New Official Update</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title (e.g. Weekly Meeting Notes)"
          className="w-full bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent rounded-2xl px-6 py-4 text-sm font-medium focus:border-brand-blue dark:focus:border-brand-red outline-none transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's the update?"
          rows={4}
          className="w-full bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent rounded-2xl px-6 py-4 text-sm font-medium focus:border-brand-blue dark:focus:border-brand-red outline-none transition-all resize-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
        />
        <div className="flex justify-end pt-2">
          <button 
            type="submit"
            disabled={!title.trim() || !content.trim() || isSubmitting}
            className="px-10 py-4 bg-brand-blue text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-brand-blue/90 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-brand-blue/20 flex items-center space-x-3"
          >
            <span>{isSubmitting ? 'Publishing...' : 'Publish Update'}</span>
          </button>
        </div>
      </form>
    </motion.div>
  );
}
