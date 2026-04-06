"use client";

export default function StatsSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* GRID */}
        <div className="grid md:grid-cols-3 border border-gray-800">

          {/* ITEM */}
          <div className="p-10 border-b md:border-b-0 md:border-r border-gray-800">
            <h2 className="text-5xl font-bold">235+</h2>
            <p className="text-gray-400 mt-2">Finished Projects</p>
          </div>

          <div className="p-10 border-b md:border-b-0 md:border-r border-gray-800">
            <h2 className="text-5xl font-bold">25+</h2>
            <p className="text-gray-400 mt-2">Team Members</p>
          </div>

          <div className="p-10 border-b md:border-b-0">
            <h2 className="text-5xl font-bold">138+</h2>
            <p className="text-gray-400 mt-2">Happy Customers</p>
          </div>

          <div className="p-10 border-b md:border-b-0 md:border-r border-gray-800">
            <h2 className="text-5xl font-bold">42+</h2>
            <p className="text-gray-400 mt-2">Loyal Partners</p>
          </div>

          <div className="p-10 border-b md:border-b-0 md:border-r border-gray-800">
            <h2 className="text-5xl font-bold">15,628+</h2>
            <p className="text-gray-400 mt-2">Coffee Drinked</p>
          </div>

          {/* CONTACT BOX */}
          <div className="p-6 bg-gradient-to-br from-pink-600 to-pink-800 flex items-center justify-center">
            <div className="bg-black p-8 w-full h-full flex flex-col justify-center items-center text-center">
              
              <p className="text-lg font-semibold tracking-wide">CONTACT</p>
              <p className="text-gray-400 mt-2">
                Get A Quote For Your Project
              </p>

              <button className="mt-6 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition">
                Contact →
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}