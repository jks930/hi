"use client";

export default function ServiceSlider() {
  return (
    <div className="w-full bg-lime-400 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee flex gap-10 py-3 text-black font-semibold text-lg">
        
        <span>✳ Website Design</span>
        <span>✳ App Development</span>
        <span>✳ Software Development</span>
        <span>✳ UI/UX Design</span>
        <span>✳ Logo Design</span>

        {/* duplicate for smooth loop */}
        <span>✳ Website Design</span>
        <span>✳ App Development</span>
        <span>✳ Software Development</span>
        <span>✳ UI/UX Design</span>
        <span>✳ Logo Design</span>

      </div>
    </div>
  );
}