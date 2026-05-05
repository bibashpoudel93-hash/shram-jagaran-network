"use client";

import { useState } from 'react';
import { addComment, addReaction } from '@/lib/api';
import { formatDistanceToNow } from 'date-fns';
import { Heart, MessageCircle, Share2, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function PostCard({ post, onUpdate }: { post: any, onUpdate: () => void }) {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [isLiking, setIsLiking] = useState(false);

  const handleLike = async () => {
    setIsLiking(true);
    await addReaction(post.id, 'like');
    onUpdate();
    setTimeout(() => setIsLiking(false), 500);
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    await addComment(post.id, commentText);
    setCommentText('');
    onUpdate();
  };

  const likeCount = post.reactions?.filter((r: any) => r.type === 'like').length || 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass dark:bg-slate-900/40 border-slate-200/50 dark:border-slate-800/50 rounded-[2rem] p-8 mb-8 transition-all duration-500"
    >
      <div className="flex items-center space-x-4 mb-6">
        <div className="h-12 w-12 bg-gradient-to-br from-brand-red to-brand-blue rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-brand-red/20">
          {post.title.charAt(0).toUpperCase()}
        </div>
        <div>
          <h3 className="font-black text-brand-blue dark:text-slate-100 uppercase tracking-tighter text-lg">{post.title}</h3>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}</p>
        </div>
      </div>

      <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed font-medium whitespace-pre-wrap">{post.content}</p>

      <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/50 pt-6">
        <div className="flex space-x-6">
          <button 
            onClick={handleLike}
            className={cn(
              "flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest transition-all hover:text-brand-red",
              isLiking ? "text-brand-red scale-110" : "text-slate-400"
            )}
          >
            <Heart className={cn("w-5 h-5 transition-all duration-300", isLiking && "fill-brand-red text-brand-red")} />
            <span>{likeCount}</span>
          </button>

          <button 
            onClick={() => setShowComments(!showComments)}
            className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-blue transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{post.comments?.length || 0}</span>
          </button>
        </div>

        <button className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-blue transition-all">
          <Share2 className="w-5 h-5" />
        </button>
      </div>

      <AnimatePresence>
        {showComments && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-8 space-y-4">
              {post.comments?.map((comment: any, idx: number) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={idx} 
                  className="bg-slate-50 dark:bg-slate-800/30 rounded-2xl p-4 border border-slate-100 dark:border-slate-800/50"
                >
                  <p className="text-slate-700 dark:text-slate-300 font-medium">{comment.content}</p>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-2">{formatDistanceToNow(new Date(comment.created_at), { addSuffix: true })}</p>
                </motion.div>
              ))}
            </div>

            <form onSubmit={handleCommentSubmit} className="mt-6 flex items-center space-x-3">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Share your thoughts..."
                className="flex-1 bg-slate-100 dark:bg-slate-800/50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-brand-blue outline-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
              />
              <button 
                type="submit"
                disabled={!commentText.trim()}
                className="p-4 bg-brand-blue text-white rounded-2xl hover:bg-brand-blue/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-brand-blue/20"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
