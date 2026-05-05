"use client";

import { useEffect, useState } from "react";
import { getPosts } from "@/lib/api";
import CreatePost from "@/components/CreatePost";
import PostCard from "@/components/PostCard";
import { LayoutDashboard, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Hub() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-brand-red/10 relative overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-blue/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-brand-red/5 blur-[100px] rounded-full" />
      </div>

      <header className="sticky top-0 z-50 glass border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="p-3 -ml-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all group">
              <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:-translate-x-1 transition-transform" />
            </Link>
            <div className="bg-gradient-to-br from-brand-blue to-brand-red p-2.5 rounded-xl text-white shadow-xl shadow-brand-blue/20">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-black text-brand-blue dark:text-slate-100 uppercase tracking-tighter">
              Member Hub
            </h1>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <CreatePost onUpdate={fetchPosts} />
        
        <div className="space-y-8">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 space-y-4">
              <div className="w-12 h-12 border-4 border-brand-red border-t-transparent rounded-2xl animate-spin shadow-xl shadow-brand-red/10"></div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Loading Updates</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-24 glass border-slate-100 dark:border-slate-800/50 rounded-[2.5rem]">
              <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-xs">
                No official updates yet.
              </p>
            </div>
          ) : (
            posts.map((post: any) => (
              <PostCard key={post.id} post={post} onUpdate={fetchPosts} />
            ))
          )}
        </div>
      </main>
    </div>
  );
}
