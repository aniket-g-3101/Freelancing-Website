import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .gradient-border {
          position: relative;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(120deg, #667eea 0%, #764ba2 50%, #f687b3 100%) border-box;
          border: 1px solid transparent;
        }
        .social-icon {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .social-icon:hover {
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
        }
      `}</style>

      {/* Premium Minimal Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-white border-t border-gray-100"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="absolute inset-0"
               style={{
                 backgroundImage: `radial-gradient(circle at 2px 2px, #667eea 1px, transparent 0)`,
                 backgroundSize: '50px 50px'
               }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="px-6 py-12">
            {/* Brand Identity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-10"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 rounded-2xl gradient-border flex items-center justify-center"
                >
                  <span className="text-2xl">🎬</span>
                </motion.div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-16 h-16 rounded-2xl gradient-border flex items-center justify-center"
                >
                  <span className="text-2xl">🍛</span>
                </motion.div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AmitKumar
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-md mx-auto">
                Crafting moments that connect through content & cuisine
              </p>
            </motion.div>

            {/* Premium Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md mx-auto">
                {[
                  { 
                    platform: "Instagram", 
                    icon: "📸", 
                    handle: "@amitkumar",
                    gradient: "from-pink-500 via-rose-500 to-orange-500",
                    followers: "250K+"
                  },
                  { 
                    platform: "YouTube", 
                    icon: "▶️", 
                    handle: "AmitKumar",
                    gradient: "from-red-500 via-orange-500 to-red-600",
                    followers: "500K+"
                  },
                  { 
                    platform: "LinkedIn", 
                    icon: "💼", 
                    handle: "amitkumar",
                    gradient: "from-blue-600 via-blue-500 to-cyan-500",
                    followers: "50K+"
                  },
                  { 
                    platform: "Twitter", 
                    icon: "🐦", 
                    handle: "@amitkumar",
                    gradient: "from-sky-500 via-blue-400 to-cyan-400",
                    followers: "100K+"
                  }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="social-icon p-5 rounded-xl gradient-border bg-white hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center mb-3`}>
                        <span className="text-xl">{social.icon}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{social.platform}</h4>
                      <p className="text-sm text-gray-600 mb-2">{social.handle}</p>
                      <div className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                        {social.followers}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Minimal Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"
            >
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <span className="text-xl">🌟</span>
              </div>
            </motion.div>

            {/* Minimal Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center md:text-left"
              >
                <p className="text-gray-700 font-medium">
                  © {new Date().getFullYear()} AmitKumar
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Premium content & authentic flavors
                </p>
              </motion.div>

              {/* Minimal Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex gap-6"
              >
                {[
                  { value: "500K+", label: "Community", color: "text-indigo-600" },
                  { value: "10M+", label: "Impressions", color: "text-purple-600" },
                  { value: "5★", label: "Excellence", color: "text-orange-600" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 font-medium hover:shadow-md transition-all duration-200 flex items-center gap-2"
              >
                <span>Back to Top</span>
                <motion.span
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ↑
                </motion.span>
              </motion.button>
            </div>
          </div>

          {/* Absolute Bottom Bar - Minimal */}
          <div className="border-t border-gray-100 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 px-6 text-sm">
              <p className="text-gray-500">
                Crafted with ❤️ for the community
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Privacy</a>
                <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Terms</a>
                <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Accents */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-24 left-10 w-4 h-4 bg-indigo-300/20 rounded-full blur-sm hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-24 right-10 w-6 h-6 bg-purple-300/20 rounded-full blur-sm hidden lg:block"
        />
      </motion.footer>
    </>
  );
}