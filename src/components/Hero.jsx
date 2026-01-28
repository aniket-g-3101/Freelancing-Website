import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <style jsx>{`
        @keyframes gradient-sweep {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float-smooth {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        @keyframes pan-move {
          0%, 100% { transform: translateX(0%) translateY(0%); }
          25% { transform: translateX(3%) translateY(2%); }
          50% { transform: translateX(0%) translateY(0%); }
          75% { transform: translateX(-3%) translateY(-2%); }
        }

        .gradient-text {
          background: linear-gradient(
            90deg,
            #667eea 0%,
            #764ba2 25%,
            #f093fb 50%,
            #f5576c 75%,
            #764ba2 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-sweep 4s ease-in-out infinite;
        }

        .float-smooth {
          animation: float-smooth 3s ease-in-out infinite;
        }

        .bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.35);
          box-shadow: 
            0 15px 50px rgba(31, 38, 135, 0.12),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.9),
            0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        .gradient-border {
          position: relative;
          background: linear-gradient(white, white) padding-box,
                    linear-gradient(45deg, #667eea, #764ba2, #f093fb) border-box;
          border: 2px solid transparent;
        }

        .bg-icon {
          position: absolute;
          opacity: 0.15;
          z-index: 0;
          pointer-events: none;
        }

        .bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.2;
          z-index: 0;
          pointer-events: none;
        }

        /* Base mobile styles */
        .mobile-text-left {
          text-align: left !important;
          align-items: flex-start !important;
        }
        
        .mobile-full-width {
          width: 100% !important;
          max-width: 100% !important;
        }

        /* Mobile responsive styles */
        @media (max-width: 768px) {
          .mobile-stack {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          
          /* Left align all text on mobile */
          .mobile-center {
            text-align: left !important;
            align-items: flex-start !important;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          
          .mobile-heading {
            font-size: 1.75rem;
            line-height: 1.2;
            margin-bottom: 0.5rem;
          }
          
          .mobile-heading-large {
            font-size: 2rem;
            line-height: 1.1;
            margin-bottom: 0.25rem;
          }
          
          .mobile-subheading {
            font-size: 1.35rem;
            line-height: 1.3;
          }
          
          /* Premium Badge - Left aligned and compact */
          .mobile-badge {
            margin-left: 0 !important;
            margin-right: auto !important;
            padding: 0.5rem 1rem !important;
            margin-bottom: 1rem !important;
          }
          
          .mobile-btn {
            padding: 0.625rem 1.25rem;
            font-size: 0.75rem;
            min-width: 120px;
            height: 2.75rem;
          }
          
          .mobile-btn-group {
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
            justify-content: flex-start;
            width: 100%;
            flex-wrap: nowrap;
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }
          
          /* Stats Grid - More compact */
          .mobile-stats {
            gap: 0.5rem;
            margin-bottom: 1.5rem !important;
          }
          
          .mobile-stats > div {
            padding: 0.625rem 0.5rem !important;
            min-height: auto !important;
            height: 4.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          
          .mobile-stats-icon {
            font-size: 1.125rem !important;
            margin-bottom: 0.375rem;
          }
          
          .mobile-stats-number {
            font-size: 1rem !important;
            margin-bottom: 0.125rem !important;
            line-height: 1;
          }
          
          .mobile-stats-label {
            font-size: 0.65rem !important;
            line-height: 1;
          }
          
          .mobile-simplify {
            margin-top: 0.5rem;
            transform: scale(0.9);
          }
          
          /* Dual Passion box - More compact */
          .dual-passion-box {
            width: 100% !important;
            max-width: 320px !important;
            margin: 0 auto;
            padding: 1rem !important;
            height: auto !important;
            min-height: auto !important;
          }
          
          /* Mini stats boxes adjustments for mobile - Ultra compact */
          .dual-passion-stats {
            gap: 0.375rem !important;
            margin-top: 0.75rem !important;
          }
          
          .dual-passion-stat-item {
            padding: 0.5rem 0.375rem !important;
            height: 3.5rem !important;
            min-height: 3.5rem !important;
          }
          
          .dual-passion-stat-icon {
            font-size: 0.875rem !important;
            margin-bottom: 0.125rem !important;
          }
          
          .dual-passion-stat-number {
            font-size: 0.875rem !important;
            margin-bottom: 0.0625rem !important;
            line-height: 1 !important;
          }
          
          .dual-passion-stat-label {
            font-size: 0.6rem !important;
            line-height: 1 !important;
          }
          
          .profile-image-container {
            width: 4rem !important;
            height: 4rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          .profile-icon {
            font-size: 1.5rem !important;
          }
          
          .dual-passion-title {
            font-size: 1.125rem !important;
            margin-bottom: 0.125rem !important;
          }
          
          .dual-passion-subtitle {
            font-size: 0.75rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          /* Subtitle text - smaller and tighter */
          .mobile-subtitle {
            font-size: 1rem !important;
            line-height: 1.5 !important;
            margin-bottom: 1rem !important;
          }
          
          .bg-icon {
            opacity: 0.1;
            font-size: 16px;
          }
          
          .bg-glow {
            filter: blur(40px);
          }
        }

        @media (max-width: 640px) {
          .mobile-heading {
            font-size: 1.625rem;
          }
          
          .mobile-heading-large {
            font-size: 1.875rem;
          }
          
          .mobile-subheading {
            font-size: 1.2rem;
          }
          
          .mobile-btn {
            padding: 0.5rem 1rem;
            font-size: 0.7rem;
            min-width: 110px;
            height: 2.5rem;
          }
          
          .mobile-btn-group {
            gap: 0.375rem;
          }
          
          .mobile-stats {
            gap: 0.375rem;
          }
          
          .mobile-stats > div {
            padding: 0.5rem !important;
            height: 4rem;
          }
          
          .mobile-stats-icon {
            font-size: 1rem !important;
            margin-bottom: 0.25rem;
          }
          
          .mobile-stats-number {
            font-size: 0.875rem !important;
          }
          
          /* Dual Passion box - Even more compact */
          .dual-passion-box {
            max-width: 300px !important;
            padding: 0.875rem !important;
          }
          
          .dual-passion-stat-item {
            padding: 0.375rem !important;
            height: 3rem !important;
            min-height: 3rem !important;
          }
          
          .dual-passion-stat-number {
            font-size: 0.75rem !important;
          }
          
          .profile-image-container {
            width: 3.5rem !important;
            height: 3.5rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          .dual-passion-title {
            font-size: 1rem !important;
          }
          
          .dual-passion-subtitle {
            font-size: 0.6875rem !important;
          }
          
          .mobile-subtitle {
            font-size: 0.8125rem !important;
          }
        }

        @media (max-width: 480px) {
          .mobile-heading {
            font-size: 1.25rem;
          }
          
          .mobile-heading-large {
            font-size: 1.375rem;
          }
          
          .mobile-subheading {
            font-size: 0.9375rem;
          }
          
          .mobile-btn {
            padding: 0.4375rem 0.875rem;
            font-size: 0.65rem;
            min-width: 100px;
            height: 2.25rem;
          }
          
          .mobile-btn-group {
            gap: 0.25rem;
          }
          
          .mobile-stats {
            gap: 0.25rem;
          }
          
          .mobile-stats > div {
            padding: 0.375rem !important;
            height: 3.5rem;
          }
          
          .mobile-stats-icon {
            font-size: 0.875rem !important;
            margin-bottom: 0.125rem;
          }
          
          .mobile-stats-number {
            font-size: 0.75rem !important;
          }
          
          .mobile-stats-label {
            font-size: 0.6rem !important;
          }
          
          .mobile-simplify {
            transform: scale(0.85);
          }
          
          /* Dual Passion box - Ultra compact */
          .dual-passion-box {
            max-width: 280px !important;
            padding: 0.75rem !important;
          }
          
          .dual-passion-title {
            font-size: 0.9375rem !important;
          }
          
          .dual-passion-subtitle {
            font-size: 0.625rem !important;
          }
          
          .dual-passion-stat-item {
            padding: 0.25rem !important;
            height: 2.75rem !important;
            min-height: 2.75rem !important;
          }
          
          .dual-passion-stat-number {
            font-size: 0.6875rem !important;
          }
          
          .dual-passion-stat-label {
            font-size: 0.5625rem !important;
          }
          
          .profile-image-container {
            width: 3rem !important;
            height: 3rem !important;
            margin-bottom: 0.375rem !important;
          }
          
          .profile-icon {
            font-size: 1.25rem !important;
          }
          
          .mobile-subtitle {
            font-size: 0.75rem !important;
          }
        }

        @media (max-width: 360px) {
          .mobile-heading-large {
            font-size: 1.25rem;
          }
          
          .mobile-subheading {
            font-size: 0.875rem;
          }
          
          .mobile-btn {
            padding: 0.375rem 0.75rem;
            font-size: 0.6rem;
            min-width: 90px;
            height: 2rem;
          }
          
          .mobile-stats > div {
            padding: 0.25rem !important;
            height: 3rem;
          }
          
          .mobile-stats-number {
            font-size: 0.6875rem !important;
          }
          
          .dual-passion-box {
            max-width: 260px !important;
            padding: 0.625rem !important;
          }
        }

        /* Desktop enhancements */
        @media (min-width: 769px) {
          .desktop-btn {
            padding: 0.75rem 2rem;
            font-size: 1rem;
            margin-right: 1rem;
          }
          
          .desktop-stats > div {
            padding: 1.25rem;
          }
          
          .desktop-heading {
            font-size: 3.5rem;
            line-height: 1.1;
          }
          
          .desktop-subtitle {
            font-size: 1.125rem;
            line-height: 1.6;
          }
          
          /* Desktop mini stats boxes - More compact */
          .dual-passion-stat-item-desktop {
            padding: 0.5rem 0.75rem !important;
            min-height: 4rem !important;
            height: auto !important;
          }
          
          .dual-passion-stat-icon-desktop {
            font-size: 1rem !important;
            margin-bottom: 0.125rem !important;
          }
          
          .dual-passion-stat-number-desktop {
            font-size: 1rem !important;
            margin-bottom: 0.0625rem !important;
            line-height: 1.1 !important;
          }
          
          .dual-passion-stat-label-desktop {
            font-size: 0.6875rem !important;
            line-height: 1 !important;
          }
          
          /* Desktop dual passion box - Proper sizing */
          .dual-passion-box-desktop {
            max-width: 420px !important;
            padding: 1.5rem !important;
          }
          
          .profile-image-container-desktop {
            width: 5.5rem !important;
            height: 5.5rem !important;
            margin-bottom: 1rem !important;
          }
          
          .profile-icon-desktop {
            font-size: 1.75rem !important;
          }
          
          .dual-passion-title-desktop {
            font-size: 1.25rem !important;
            margin-bottom: 0.125rem !important;
          }
          
          .dual-passion-subtitle-desktop {
            font-size: 0.75rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          .dual-passion-stats-desktop {
            gap: 0.5rem !important;
          }
        }

        @media (min-width: 1024px) {
          .desktop-heading {
            font-size: 4rem;
          }
          
          .desktop-subtitle {
            font-size: 1.25rem;
          }
          
          /* Slightly larger on larger desktop */
          .dual-passion-box-desktop {
            max-width: 440px !important;
            padding: 1.75rem !important;
          }
          
          /* Even more compact on larger screens */
          .dual-passion-stat-item-desktop {
            min-height: 4rem !important;
          }
        }

        /* Reduce motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50/80 to-indigo-50/40 py-4 md:py-0"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="bg-glow top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-indigo-200/50 to-purple-200/50 pan-move"></div>
          <div className="bg-glow bottom-1/3 right-10 w-[500px] h-[500px] bg-gradient-to-br from-orange-200/40 to-red-200/40 pan-move" style={{animationDelay: '3s'}}></div>
          
          {["🎬", "📹", "🎥", "🍳", "🍛", "🌟", "🔥", "🥘"].map((icon, index) => (
            <div 
              key={index}
              className="bg-icon float-smooth"
              style={{
                top: `${10 + Math.sin(index) * 40}%`,
                left: `${5 + index * 7}%`,
                animationDelay: `${index * 0.3}s`,
                fontSize: isMobile ? '16px' : '32px',
              }}
            >
              {icon}
            </div>
          ))}
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 py-6 md:py-16 w-full">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mobile-stack">
            
            {/* Left Content - Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2,
                ease: "easeOut"
              }}
              className="md:text-left mobile-center"
            >
              {/* Premium Badge - Left aligned on mobile */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-4 md:mb-6 glass-card rounded-full shadow-lg mobile-badge"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse" />
                <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Creator × Restaurateur
                </span>
              </motion.div>

              {/* Main Heading */}
              <div className="mb-4 md:mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                  transition={{ delay: 0.4 }}
                  className="text-base sm:text-lg md:text-2xl text-gray-800 mb-2"
                >
                  Hi, I'm{" "}
                  <span className="gradient-text font-bold">Amit Kumar</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                  transition={{ delay: 0.5 }}
                  className="font-bold mb-2"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mobile-heading-large desktop-heading mb-1 md:mb-2">
                    Crafting{" "}
                    <span className="gradient-text">Digital Experiences</span>
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mobile-subheading desktop-subheading">
                    <span className="text-gray-400">&</span>{" "}
                    <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 bg-clip-text text-transparent">
                      Culinary Delights
                    </span>
                  </div>
                </motion.h1>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                transition={{ delay: 0.6 }}
                className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed max-w-xl desktop-subtitle mobile-subtitle"
              >
                Blending creativity with culinary excellence. Creating viral content 
                that entertains millions, while serving authentic flavors at{" "}
                <span className="font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Paradise Biryani
                </span>
                .
              </motion.p>

              {/* Stats Grid - More compact */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-3 gap-2 md:gap-4 mb-4 max-w-md mobile-stats desktop-stats"
              >
                {[
                  { 
                    number: "1000+", 
                    label: "Followers", 
                    icon: "👥",
                    gradient: "from-indigo-400 to-purple-400"
                  },
                  { 
                    number: "100K+", 
                    label: "Views", 
                    icon: "👀",
                    gradient: "from-purple-400 to-pink-400"
                  },
                  { 
                    number: "4.4★", 
                    label: "Rating", 
                    icon: "⭐",
                    gradient: "from-orange-400 to-red-400"
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="glass-card rounded-lg md:rounded-xl p-3 text-center cursor-pointer shadow-md md:shadow-lg flex flex-col items-center justify-center"
                    style={{ minHeight: 'auto' }}
                  >
                    <div className="text-base md:text-lg mb-1 bounce-gentle mobile-stats-icon">
                      {stat.icon}
                    </div>
                    <div className={`text-base md:text-xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-0.5 mobile-stats-number`}>
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500 font-medium mobile-stats-label">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons - Compact */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                transition={{ delay: 0.9 }}
                className="flex mobile-btn-group"
              >
                <motion.button
                  onClick={() => scrollTo("creator")}
                  className="mobile-btn desktop-btn bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer flex items-center justify-center gap-1.5"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-sm md:text-base bounce-gentle">🎬</span>
                  <span>Watch Content</span>
                </motion.button>

                <motion.button
                  onClick={() => scrollTo("hotel")}
                  className="mobile-btn desktop-btn glass-card border border-gray-200 text-gray-800 font-semibold rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer flex items-center justify-center gap-1.5"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-sm md:text-base bounce-gentle">👨‍🍳</span>
                  <span>Visit Restaurant</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content - Simplified Visual Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4,
                ease: "easeOut"
              }}
              className="relative flex justify-center items-center mobile-simplify"
            >
              <div className="relative w-full flex justify-center">
                {/* Main Visual Container */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  {/* Main Glass Card - Compact */}
                  <div className="glass-card rounded-xl md:rounded-2xl overflow-hidden shadow-lg dual-passion-box dual-passion-box-desktop">
                    {/* Profile & Title - Compact */}
                    <div className="flex flex-col items-center mb-3 md:mb-4">
                      <div className="relative profile-image-container profile-image-container-desktop">
                        <motion.div
                          animate={{ rotateY: 360 }}
                          transition={{ 
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="absolute inset-0"
                        >
                          <div className="w-full h-full gradient-border rounded-full overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
                              <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ 
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                                className="text-2xl md:text-3xl profile-icon profile-icon-desktop"
                              >
                                🎭
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      
                      <div className="text-center mb-2">
                        <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1 dual-passion-title dual-passion-title-desktop">
                          Dual Passion
                        </h3>
                        <p className="text-gray-600 text-xs md:text-sm dual-passion-subtitle dual-passion-subtitle-desktop">
                          Content Creator × Restaurant Owner
                        </p>
                      </div>
                    </div>

                    {/* Mini Stats - Ultra compact */}
                    <div className="grid grid-cols-2 gap-2 md:gap-3 dual-passion-stats dual-passion-stats-desktop">
                      <div className="rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 flex flex-col items-center justify-center dual-passion-stat-item dual-passion-stat-item-desktop">
                        <div className="flex items-center gap-0.5 mb-0.5">
                          <div className="text-xs md:text-sm dual-passion-stat-icon dual-passion-stat-icon-desktop">🎥</div>
                          <div className="text-xs font-medium text-indigo-600">Creator</div>
                        </div>
                        <div className="text-sm md:text-base font-bold text-indigo-700 dual-passion-stat-number dual-passion-stat-number-desktop">
                          100K+
                        </div>
                        <div className="text-xs text-indigo-500 dual-passion-stat-label dual-passion-stat-label-desktop">
                          Views
                        </div>
                      </div>
                      
                      <div className="rounded-lg bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 flex flex-col items-center justify-center dual-passion-stat-item dual-passion-stat-item-desktop">
                        <div className="flex items-center gap-0.5 mb-0.5">
                          <div className="text-xs md:text-sm dual-passion-stat-icon dual-passion-stat-icon-desktop">🍛</div>
                          <div className="text-xs font-medium text-orange-600">Restaurant</div>
                        </div>
                        <div className="text-sm md:text-base font-bold text-orange-700 dual-passion-stat-number dual-passion-stat-number-desktop">
                          4.4★
                        </div>
                        <div className="text-xs text-orange-500 dual-passion-stat-label dual-passion-stat-label-desktop">
                          Rating
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements (Desktop only) */}
                  {!isMobile && (
                    <>
                      <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute -top-2 -right-2 w-8 h-8"
                      >
                        <div className="w-full h-full gradient-border rounded-lg glass-card flex items-center justify-center shadow-sm">
                          <div className="text-xs">✨</div>
                        </div>
                      </motion.div>

                      <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          delay: 1,
                          ease: "easeInOut"
                        }}
                        className="absolute -bottom-2 -left-2 w-8 h-8"
                      >
                        <div className="w-full h-full gradient-border rounded-lg glass-card flex items-center justify-center shadow-sm">
                          <div className="text-xs">🌶️</div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute bottom-4 md:bottom-8 left-1/2 hidden md:flex transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollTo("creator")}
              className="flex flex-col items-center gap-1 cursor-pointer group"
            >
              <span className="text-xs font-medium text-gray-500 group-hover:text-indigo-600 transition-colors">
                Scroll to explore
              </span>
              <div className="w-5 h-8 rounded-full border border-gray-300 group-hover:border-indigo-400 transition-colors flex justify-center pt-1">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                  className="w-0.5 h-2 rounded-full bg-gradient-to-b from-indigo-400 to-purple-400"
                />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}