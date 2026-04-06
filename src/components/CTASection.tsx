"use client";

export default function CTASection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold">
          My Special Service For Your Business Development
        </h2>

        {/* SUBTEXT */}
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          We provide high-quality digital solutions including websites, apps,
          and custom software tailored for your business growth.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">

          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full text-black font-semibold transition">
            More Work →
          </button>

          <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
            Need a Project?
          </button>

          <button className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition">
            Let's Work Together
          </button>

        </div>

      </div>
    </section>
  );
}