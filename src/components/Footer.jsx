

// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-[#0F4A3F] text-white py-16">   {/* Dark green color matching screenshot */}
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Main Content Box */}
        <div className="border border-white/30 rounded-3xl p-12 text-center">
          
          {/* Logo */}
          <h2 className="text-5xl font-bold tracking-tight mb-4">
            KeenKeeper
          </h2>

          {/* Description */}
          <p className="text-white/80 text-lg max-w-md mx-auto mb-10">
            Your personal shelf of meaningful connections. 
            Browse, tend, and nurture the relationships that matter most.
          </p>

          {/* Social Links */}
          <div className="mb-12">
            <p className="text-sm uppercase tracking-widest text-white/70 mb-4">Social Links</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition">
                📸
              </a>
              <a href="#" className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition">
                𝕗
              </a>
              <a href="#" className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition">
                𝕏
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-sm text-white/70">
          <div>
            © 2026 KeenKeeper. All rights reserved.
          </div>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;