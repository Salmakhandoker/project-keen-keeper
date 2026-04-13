
// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left - Logo + Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center">
                <span className="text-emerald-800 font-bold text-3xl">K</span>
              </div>
              <h2 className="text-2xl font-semibold">KeenKeeper</h2>
            </div>
            <p className="text-emerald-200 text-center md:text-left max-w-xs">
              Helping you keep meaningful friendships alive.
            </p>
          </div>

          {/* Right - Links */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 text-sm">
            <div>
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
            </div>
            <div>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
            <div>
              <a href="#" className="hover:text-white transition">Contact</a>
            </div>
          </div>

          {/* Social Icons (optional) */}
          <div className="flex gap-5 text-2xl">
            {/* You can add real icons later if you want */}
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-emerald-700 mt-12 pt-8 text-center text-emerald-300 text-sm">
          © 2026 KeenKeeper. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;