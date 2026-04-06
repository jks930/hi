"use client";

import React from "react";
import { Play, Calendar, User, ArrowUpRight } from "lucide-react";

const vlogs = [
  {
    id: 1,
    title: "How I Built My First Industrial Web App",
    date: "April 05, 2026",
    category: "Development",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "A Day in the Life of a Full-Stack Developer",
    date: "March 28, 2026",
    category: "Lifestyle",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Modern UI/UX Trends in 2026",
    date: "March 15, 2026",
    category: "Design",
    thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
  },
];

export default function VlogPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-12">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2">Our Stories</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Latest Vlogs
          </h1>
        </div>

        {/* FEATURED VLOG (Large Card) */}
        <section className="relative group mb-20 overflow-hidden rounded-3xl border border-white/10 bg-gray-900/40">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="relative h-64 lg:h-[450px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop" 
                alt="Featured" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="bg-blue-600 p-6 rounded-full shadow-2xl shadow-blue-600/50 hover:scale-110 transition">
                  <Play fill="white" size={32} />
                </button>
              </div>
            </div>
            
            <div className="p-8 lg:p-12 space-y-6">
              <span className="px-4 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-bold uppercase">Featured</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Mastering Glassmorphism: The Premium Web Design Guide
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Is vlog mein hum dekhenge kaise aap ek simple website ko "Premium" look de sakte hain 
                sirf Tailwind CSS aur modern design principles ka use karke.
              </p>
              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <span className="flex items-center gap-2"><User size={16} /> Admin</span>
                <span className="flex items-center gap-2"><Calendar size={16} /> April 06, 2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* VLOG GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vlogs.map((vlog) => (
            <div key={vlog.id} className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition duration-500">
              {/* Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={vlog.thumbnail} 
                  alt={vlog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-semibold">
                    {vlog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-blue-400 transition cursor-pointer leading-snug">
                  {vlog.title}
                </h3>
                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  <span className="text-sm text-gray-500">{vlog.date}</span>
                  <button className="text-blue-400 flex items-center gap-1 font-semibold group-hover:underline">
                    Watch <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}