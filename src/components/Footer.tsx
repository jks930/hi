import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-20">

      {/* 🔥 SOCIAL ICONS ROW */}
      <div className="flex justify-center gap-6 py-8 border-b border-gray-800">
        
        {[Facebook, Twitter, Instagram, Linkedin, Youtube, Send].map(
          (Icon, i) => (
            <div
              key={i}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-white hover:text-black transition cursor-pointer"
            >
              <Icon size={18} />
            </div>
          )
        )}

      </div>

      {/* EXISTING CODE SAME */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* LEFT - BRAND */}
        <div>
          <h2 className="text-white text-3xl font-bold">BRAND</h2>
          <p className="mt-4 leading-7 text-gray-500">
            Light enables users to discovers <br />
            connections that was not possiable <br />
            before
          </p>
        </div>

        {/* LINKS 1 */}
        <div className="space-y-3">
          <p className="hover:text-white cursor-pointer">Contact</p>
          <p className="hover:text-white cursor-pointer">About</p>
          <p className="hover:text-white cursor-pointer">FAQ</p>
          <p className="hover:text-white cursor-pointer">Features</p>
        </div>

        {/* LINKS 2 */}
        <div className="space-y-3">
          <p className="hover:text-white cursor-pointer">Press</p>
          <p className="hover:text-white cursor-pointer">Brand Assets</p>
          <p className="hover:text-white cursor-pointer">Terms of Service</p>
          <p className="hover:text-white cursor-pointer">Privacy Policy</p>
        </div>

        {/* RIGHT - CONTACT */}
        <div className="space-y-3">
          <p>Info@loopagency.com</p>
          <p>+91 80 6565 987 326</p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-800 mx-6"></div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        
        <p>© 20xx Codedesign.ai. All rights reserved</p>

        <p>Made with love by Codedesign.ai</p>

        <div className="flex gap-3 flex-wrap justify-center">
          <span className="hover:text-white cursor-pointer">
            Cookies Policies
          </span>
          <span>|</span>
          <span className="hover:text-white cursor-pointer">
            Terms & conditions
          </span>
          <span>|</span>
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
        </div>

      </div>
    </footer>
  );
}