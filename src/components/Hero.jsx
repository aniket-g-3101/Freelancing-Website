import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <style jsx>{`
        @keyframes float-smooth {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -12px, 0); }
        }

        @keyframes float-rotate {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          25% { transform: translate3d(8px, -8px, 0) rotate(2deg); }
          50% { transform: translate3d(0, 0, 0) rotate(0deg); }
          75% { transform: translate3d(-8px, 8px, 0) rotate(-2deg); }
        }
        
        @keyframes gradient-slow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .gradient-text {
          background: linear-gradient(120deg, #667eea 0%, #764ba2 50%, #667eea 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-slow 3s ease-in-out infinite;
        }

        .gpu-layer {
          transform: translate3d(0, 0, 0);
        }

        /* Smooth animations on mobile */
        @media (max-width: 768px) {
          @keyframes float-smooth {
            0%, 100% { transform: translate3d(0, 0, 0); }
            50% { transform: translate3d(0, -8px, 0); }
          }

          .float-card {
            animation: float-smooth 6s ease-in-out infinite;
          }
        }

        /* Mobile-specific styles for premium feel */
        @media (max-width: 640px) {
          .mobile-stagger {
            animation: slide-up 0.6s ease-out forwards;
          }

          .mobile-stagger:nth-child(1) { animation-delay: 0.1s; }
          .mobile-stagger:nth-child(2) { animation-delay: 0.2s; }
          .mobile-stagger:nth-child(3) { animation-delay: 0.3s; }
          .mobile-stagger:nth-child(4) { animation-delay: 0.4s; }
          .mobile-stagger:nth-child(5) { animation-delay: 0.5s; }
        }
      `}</style>
      
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-indigo-50 py-8 md:py-0"
      >
        {/* Subtle Background Elements - Optimized */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl gpu-layer"
            style={{
              animation: "float-smooth 20s ease-in-out infinite",
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-tr from-pink-200/30 to-orange-200/30 rounded-full blur-3xl gpu-layer"
            style={{
              animation: "float-smooth 25s ease-in-out infinite",
              animationDelay: "5s"
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 w-full">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center md:items-center">
            
            {/* Right Content - Image First on Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative order-first md:order-last"
            >
              <div className="relative max-w-[220px] sm:max-w-xs md:max-w-sm mx-auto">
                {/* Main Image Container - Compact */}
                <div className="relative aspect-square">
                  {/* Main Card - Compact Premium */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl border-3 md:border-4 border-white/60 gpu-layer"
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white">
                      <div className="text-5xl sm:text-6xl md:text-6xl mb-3 md:mb-4">🎬</div>
                      <h3 className="text-xl sm:text-2xl md:text-2xl font-bold mb-1 md:mb-2">Content Creator</h3>
                      <p className="text-xs sm:text-sm md:text-sm opacity-90 text-center">Making viral reels & entertainment</p>
                    </div>
                  </motion.div>

                  {/* Floating Card - Top Right - Compact */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: isVisible ? 1 : 0, 
                      scale: isVisible ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-4 md:-right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl border-2 md:border-3 border-white/70 gpu-layer float-card"
                    >
                      <div className="w-full h-full flex flex-col items-center justify-center p-2 bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                        <div className="text-2xl sm:text-3xl md:text-3xl">📱</div>
                        <div className="text-[9px] sm:text-xs font-bold text-center leading-tight">10M+<br/>Views</div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Floating Card - Bottom Left - Compact */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: isVisible ? 1 : 0, 
                      scale: isVisible ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-4 md:-left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl border-2 md:border-3 border-white/70 gpu-layer float-card"
                      style={{
                        animationDelay: "0.5s"
                      }}
                    >
                      <div className="w-full h-full flex flex-col items-center justify-center p-2 bg-gradient-to-br from-orange-500 to-red-500 text-white">
                        <div className="text-2xl sm:text-3xl md:text-3xl">🍛</div>
                        <div className="text-[9px] sm:text-xs font-bold text-center leading-tight">Paradise<br/>Biryani</div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Compact Glow Effects */}
                  <div className="absolute top-1/4 -right-4 sm:-right-6 md:-right-8 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-purple-400/40 rounded-full blur-xl md:blur-2xl pointer-events-none" />
                  <div className="absolute bottom-1/4 -left-4 sm:-left-6 md:-left-8 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-indigo-400/40 rounded-full blur-xl md:blur-2xl pointer-events-none" />
                </div>
              </div>
            </motion.div>
            
            {/* Left Content - Text Below on Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-left md:text-left order-last md:order-first"
            >
              {/* Compact Premium Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 mb-3 md:mb-6 bg-white/90 rounded-full border border-indigo-200/60 shadow-md mobile-stagger"
              >
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
                <span className="text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Creator & Restaurateur
                </span>
              </motion.div>

              {/* Compact Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-2 md:mb-6 leading-tight mobile-stagger"
              >
                <span className="block text-gray-900 mb-0.5 md:mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Hi, I'm</span>
                <span className="block gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">AmitKumar</span>
              </motion.h1>

              {/* Compact Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-sm sm:text-base md:text-lg text-gray-700 mb-5 md:mb-8 leading-relaxed max-w-xl md:mx-0 mobile-stagger"
              >
                Creating engaging content that brings smiles, while serving authentic flavors at{" "}
                <span className="font-bold text-orange-600">Paradise Biryani</span>
              </motion.p>

              {/* Compact Stats */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-3 gap-2 mb-5 md:mb-8 max-w-sm mobile-stagger"
              >
                {[
                  { number: "500K+", label: "Followers", gradient: "from-indigo-500 to-purple-500" },
                  { number: "10M+", label: "Views", gradient: "from-purple-500 to-pink-500" },
                  { number: "5★", label: "Rating", gradient: "from-orange-500 to-red-500" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="text-center p-2.5 sm:p-3 md:p-4 bg-white/90 rounded-lg md:rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  >
                    <div className={`text-base sm:text-lg md:text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-0.5`}>
                      {stat.number}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Compact CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex gap-2 sm:gap-2.5 justify-start mobile-stagger"
              >
                <motion.button
                  onClick={() => scrollTo("creator")}
                  className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs sm:text-sm md:text-base font-semibold rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-1">
                    Watch
                    <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </motion.button>

                <motion.button
                  onClick={() => scrollTo("hotel")}
                  className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 cursor-pointer md:py-4 bg-white/90 text-gray-900 text-xs sm:text-sm md:text-base font-semibold rounded-lg md:rounded-xl shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-indigo-300 transition-all duration-300 whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-1">
                    Explore
                    <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Compact Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          >
            <motion.button
              onClick={() => scrollTo("creator")}
              className="flex flex-col items-center gap-1.5 text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-[10px] md:text-xs font-medium">Scroll to explore</span>
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}