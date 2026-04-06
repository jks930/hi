"use client";

import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-4">
          Our Journey
        </h2>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-white via-blue-400 to-gray-500 bg-clip-text text-transparent">
          We Design The Future.
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
          Hum ek aisi team hain jo technology aur creativity ko mila kar aapke brand ko 
          ek nayi pehchan dete hain. Humara vision simple hai: Excellence.
        </p>
      </section>

      {/* CONTENT & IMAGE SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          {/* Decorative Gradient Blur behind image */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-gray-900 rounded-2xl h-80 md:h-[450px] flex items-center justify-center border border-white/10 overflow-hidden">
            <span className="text-gray-500 italic">[ Brand Image / Team Photo ]</span>
            {/* Yahan aap apni image laga sakte hain */}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-3xl font-bold">Why Choose Us?</h3>
          <p className="text-gray-400">
            Aapka business unique hai, aur uski digital presence bhi waisi hi honi chahiye. 
            Hum sirf code nahi likhte, hum experiences banate hain.
          </p>
          
          <ul className="space-y-4">
            {[
              "Modern & Clean UI/UX Design",
              "High Performance Applications",
              "24/7 Dedicated Support",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="h-2 w-2 bg-blue-500 rounded-full" />
                <span className="text-gray-200 font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <button className="mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-bold transition-all shadow-lg shadow-blue-900/20">
            Learn More
          </button>
        </div>
      </section>

      {/* STATS SECTION (Cards) */}
      <section className="bg-gradient-to-b from-transparent via-blue-950/20 to-transparent py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Clients", value: "150+" },
            { label: "Projects", value: "200+" },
            { label: "Experience", value: "5 Years" },
            { label: "Team", value: "25+" },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <h4 className="text-3xl md:text-4xl font-bold text-blue-400">{stat.value}</h4>
              <p className="text-gray-400 text-sm mt-2 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}