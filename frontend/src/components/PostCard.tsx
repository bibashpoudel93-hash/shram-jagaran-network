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
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm mb-6 transition-all hover:shadow-md"
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className="h-10 w-10 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {post.title.charAt(0).toUpperCase()}
        </div>
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{post.title}</h3>
          <p className="text-xs text-zinc-500">{formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}</p>
        </div>
      </div>

      <p className="text-zinc-700 dark:text-zinc-300 mb-6 whitespace-pre-wrap">{post.content}</p>

      <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 pt-4">
        <div className="flex space-x-4">
          <button 
            onClick={handleLike}
            className={cn(
              "flex items-center space-x-1.5 text-sm font-medium transition-colors hover:text-indigo-500",
              isLiking ? "text-indigo-500 scale-110" : "text-zinc-500"
            )}
          >
            <Heart className={cn("w-5 h-5 transition-transform", isLiking && "fill-indigo-500 text-indigo-500")} />
            <span>{likeCount}</span>
          </button>

          <button 
            onClick={() => setShowComments(!showComments)}
            className="flex items-center space-x-1.5 text-sm font-medium text-zinc-500 hover:text-indigo-500 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{post.comments?.length || 0}</span>
          </button>
        </div>

        <button className="flex items-center space-x-1.5 text-sm font-medium text-zinc-500 hover:text-indigo-500 transition-colors">
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
            <div className="mt-6 space-y-4">
              {post.comments?.map((comment: any, idx: number) => (
                <div key={idx} className="bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-3 text-sm">
                  <p className="text-zinc-800 dark:text-zinc-200">{comment.content}</p>
                  <p className="text-[10px] text-zinc-400 mt-1">{formatDistanceToNow(new Date(comment.created_at), { addSuffix: true })}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleCommentSubmit} className="mt-4 flex items-center space-x-2">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment..."
                className="flex-1 bg-zinc-100 dark:bg-zinc-800 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-zinc-900 dark:text-zinc-100"
              />
              <button 
                type="submit"
                disabled={!commentText.trim()}
                className="p-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
