"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] bg-black text-white overflow-hidden flex items-center">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Right Side Geometric Effect (Desktop Only) */}
        <div className="absolute right-0 top-0 w-[55%] h-full hidden md:block">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-[radial-gradient(circle_at_70%_40%,#ffffff22,transparent_60%)]" />
          </div>
          {/* Fake Polygon Lines */}
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-full bg-[linear-gradient(120deg,transparent_40%,rgba(255,255,255,0.08)_50%,transparent_60%)]" />
          </div>
        </div>

        {/* Mobile Glow (Extra touch for mobile background) */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-orange-500/10 blur-[120px] rounded-full md:hidden" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          
          {/* LOGO / BRAND MARK */}
          <div className="overflow-hidden mb-8">
            <p className="text-2xl tracking-widest font-bold animate-in fade-in slide-in-from-bottom-4 duration-700">
              A<span className="text-orange-500">.</span>
            </p>
          </div>

          {/* HEADING */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
            Designing a{" "}
            <span className="font-extralight text-gray-400 italic">Better</span>
            <br />
            World{" "}
            <span className="font-extralight text-gray-400 italic">Today</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-gray-400 max-w-lg leading-relaxed text-base md:text-lg">
            Welcome to our world of endless imagination and boundless creativity.
            Together, let's embark on a remarkable journey where dreams become
            tangible realities.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            
            {/* PRIMARY BUTTON */}
            <button className="group relative flex items-center gap-4 bg-orange-500 hover:bg-orange-400 text-black px-7 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95">
              <span className="tracking-wider text-sm">WHAT WE DO</span>
              <div className="bg-black text-white rounded-full p-2 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={18} />
              </div>
            </button>

            {/* SECONDARY BUTTON */}
            <button className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors tracking-widest text-sm font-medium">
              VIEW WORKS
              <span className="border border-gray-700 p-2 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300">
                <ArrowRight size={14} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* --- DECORATIVE SIDE ELEMENTS (Desktop Only) --- */}
      
      {/* Scroll Indicator */}
      <div className="hidden lg:flex absolute right-12 bottom-12 flex-col items-center gap-6">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 border border-orange-500/30 rounded-full animate-ping" />
          <div className="absolute inset-0 border border-orange-500 rounded-full" />
          <div className="text-orange-500 animate-bounce">
            <ArrowRight size={20} className="rotate-90" />
          </div>
        </div>
        <p className="text-[10px] tracking-[0.4em] text-gray-500 uppercase vertical-text rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Scroll Down
        </p>
      </div>

      {/* Left Sidebar Text */}
      <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2">
        <div className="rotate-[-90deg] origin-left text-gray-600 tracking-[0.5em] text-[10px] font-medium uppercase whitespace-nowrap">
          Creative Agency / 2024
        </div>
      </div>

      {/* Bottom Progress Line (Minimalist touch) */}
      <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-orange-500 to-transparent w-full opacity-30" />

    </section>
  );
}