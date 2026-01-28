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

        /* Mobile responsive styles */
        @media (max-width: 768px) {
          .mobile-stack {
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
          }
          
          .mobile-center {
            text-align: left !important;
            align-items: flex-start !important;
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .mobile-heading {
            font-size: 2rem;
            line-height: 1.3;
            margin-bottom: 0.75rem;
          }
          
          .mobile-heading-large {
            font-size: 2.25rem;
            line-height: 1.2;
            margin-bottom: 0.5rem;
          }
          
          .mobile-subheading {
            font-size: 1.5rem;
            line-height: 1.4;
          }
          
          .mobile-badge {
            margin-left: 0 !important;
            margin-right: auto !important;
            padding: 0.625rem 1.25rem !important;
            margin-bottom: 1.5rem !important;
            font-size: 0.875rem !important;
          }
          
          /* LARGER BUTTONS */
          .mobile-btn {
            padding: 0.875rem 1.5rem !important;
            font-size: 0.875rem !important;
            min-width: 140px !important;
            height: 3rem !important;
            border-radius: 10px !important;
          }
          
          .mobile-btn-group {
            display: flex;
            flex-direction: row;
            gap: 1rem !important;
            justify-content: flex-start;
            width: 100%;
            flex-wrap: wrap;
            padding-bottom: 0.5rem;
          }
          
          .mobile-stats {
            gap: 0.75rem !important;
            margin-bottom: 2rem !important;
          }
          
          .mobile-stats > div {
            padding: 0.75rem 0.5rem !important; /* Reduced padding */
            min-height: auto !important;
            height: auto !important; /* Changed to auto */
            min-height: 4.5rem !important; /* Added min-height */
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: 12px !important;
          }
          
          .mobile-stats-icon {
            font-size: 1.25rem !important; /* Slightly smaller */
            margin-bottom: 0.375rem !important;
          }
          
          .mobile-stats-number {
            font-size: 1.125rem !important; /* Smaller */
            margin-bottom: 0.125rem !important;
            line-height: 1.1;
          }
          
          .mobile-stats-label {
            font-size: 0.6875rem !important; /* Smaller */
            line-height: 1.2;
          }
          
          .mobile-simplify {
            margin-top: 1rem !important;
            transform: scale(1) !important;
          }
          
          /* FIXED: Better sizing for dual passion box */
          .dual-passion-box {
            width: 100% !important;
            max-width: 400px !important;
            margin: 0 auto;
            padding: 1.5rem !important; /* Reduced padding */
            height: auto !important;
            min-height: auto !important;
            border-radius: 20px !important;
          }
          
          /* FIXED: Adjusted stats boxes inside dual passion */
          .dual-passion-stats {
            gap: 0.75rem !important; /* Reduced gap */
            margin-top: 1rem !important;
          }
          
          .dual-passion-stat-item {
            padding: 0.875rem 0.5rem !important; /* Reduced padding */
            height: auto !important; /* Changed to auto */
            min-height: 4rem !important; /* Reduced min-height */
            border-radius: 12px !important;
          }
          
          .dual-passion-stat-icon {
            font-size: 1.25rem !important; /* Smaller */
            margin-bottom: 0.375rem !important;
          }
          
          .dual-passion-stat-number {
            font-size: 1.125rem !important; /* Smaller */
            margin-bottom: 0.125rem !important;
            line-height: 1.1 !important;
            font-weight: 700 !important;
          }
          
          .dual-passion-stat-label {
            font-size: 0.75rem !important; /* Smaller */
            line-height: 1.2 !important;
            font-weight: 600 !important;
          }
          
          .profile-image-container {
            width: 5rem !important; /* Smaller */
            height: 5rem !important; /* Smaller */
            margin-bottom: 1rem !important;
          }
          
          .profile-icon {
            font-size: 2rem !important; /* Smaller */
          }
          
          .dual-passion-title {
            font-size: 1.5rem !important; /* Smaller */
            margin-bottom: 0.25rem !important;
            font-weight: 700 !important;
          }
          
          .dual-passion-subtitle {
            font-size: 0.875rem !important; /* Smaller */
            margin-bottom: 1rem !important;
            font-weight: 500 !important;
            color: #4b5563 !important;
          }
          
          .mobile-subtitle {
            font-size: 1.125rem !important;
            line-height: 1.6 !important;
            margin-bottom: 1.5rem !important;
            color: #374151 !important;
          }
          
          .bg-icon {
            opacity: 0.1;
            font-size: 18px !important;
          }
          
          .bg-glow {
            filter: blur(40px);
          }
        }

        @media (max-width: 640px) {
          .mobile-heading {
            font-size: 1.875rem;
          }
          
          .mobile-heading-large {
            font-size: 2rem;
          }
          
          .mobile-subheading {
            font-size: 1.375rem;
          }
          
          .mobile-btn {
            padding: 0.75rem 1.25rem !important;
            font-size: 0.8125rem !important;
            min-width: 130px !important;
            height: 2.75rem !important;
          }
          
          .mobile-btn-group {
            gap: 0.75rem !important;
          }
          
          .mobile-stats {
            gap: 0.625rem !important;
          }
          
          .mobile-stats > div {
            padding: 0.625rem 0.375rem !important; /* Smaller */
            min-height: 4rem !important;
          }
          
          .mobile-stats-icon {
            font-size: 1.125rem !important;
            margin-bottom: 0.25rem !important;
          }
          
          .mobile-stats-number {
            font-size: 1rem !important;
          }
          
          /* Better sizing on 640px */
          .dual-passion-box {
            max-width: 380px !important;
            padding: 1.25rem !important; /* Smaller */
          }
          
          .dual-passion-stat-item {
            padding: 0.75rem 0.375rem !important; /* Smaller */
            min-height: 3.75rem !important;
          }
          
          .dual-passion-stat-number {
            font-size: 1rem !important;
          }
          
          .profile-image-container {
            width: 4.5rem !important;
            height: 4.5rem !important;
            margin-bottom: 0.875rem !important;
          }
          
          .dual-passion-title {
            font-size: 1.375rem !important;
          }
          
          .dual-passion-subtitle {
            font-size: 0.8125rem !important;
          }
          
          .mobile-subtitle {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .mobile-heading {
            font-size: 1.75rem;
          }
          
          .mobile-heading-large {
            font-size: 1.875rem;
          }
          
          .mobile-subheading {
            font-size: 1.25rem;
          }
          
          .mobile-btn {
            padding: 0.625rem 1rem !important;
            font-size: 0.75rem !important;
            min-width: 120px !important;
            height: 2.5rem !important;
          }
          
          .mobile-btn-group {
            gap: 0.625rem !important;
          }
          
          .mobile-stats {
            gap: 0.5rem !important;
          }
          
          .mobile-stats > div {
            padding: 0.5rem 0.25rem !important; /* Much smaller */
            min-height: 3.5rem !important;
          }
          
          .mobile-stats-icon {
            font-size: 1rem !important;
            margin-bottom: 0.125rem !important;
          }
          
          .mobile-stats-number {
            font-size: 0.875rem !important;
          }
          
          .mobile-stats-label {
            font-size: 0.625rem !important;
          }
          
          .mobile-simplify {
            transform: scale(0.95) !important;
          }
          
          .dual-passion-box {
            max-width: 350px !important;
            padding: 1rem !important; /* Much smaller */
          }
          
          .dual-passion-title {
            font-size: 1.25rem !important;
          }
          
          .dual-passion-subtitle {
            font-size: 0.75rem !important;
          }
          
          .dual-passion-stat-item {
            padding: 0.5rem 0.25rem !important; /* Much smaller */
            min-height: 3.25rem !important;
          }
          
          .dual-passion-stat-number {
            font-size: 0.875rem !important;
          }
          
          .dual-passion-stat-label {
            font-size: 0.625rem !important;
          }
          
          .profile-image-container {
            width: 4rem !important;
            height: 4rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          .profile-icon {
            font-size: 1.5rem !important;
          }
          
          .mobile-subtitle {
            font-size: 0.875rem !important;
          }
        }

        @media (max-width: 360px) {
          .mobile-heading-large {
            font-size: 1.75rem;
          }
          
          .mobile-subheading {
            font-size: 1.125rem;
          }
          
          .mobile-btn {
            padding: 0.5rem 0.875rem !important;
            font-size: 0.6875rem !important;
            min-width: 110px !important;
            height: 2.25rem !important;
          }
          
          .mobile-stats > div {
            padding: 0.375rem 0.125rem !important; /* Minimal padding */
            min-height: 3rem !important;
          }
          
          .mobile-stats-number {
            font-size: 0.75rem !important;
          }
          
          .dual-passion-box {
            max-width: 320px !important;
            padding: 0.875rem !important; /* Minimal padding */
          }
          
          .dual-passion-title {
            font-size: 1.125rem !important;
          }
          
          .dual-passion-stat-item {
            padding: 0.375rem 0.125rem !important; /* Minimal padding */
            min-height: 3rem !important;
          }
        }

        /* Desktop styles - OPTIMIZED AND SMALLER */
        @media (min-width: 769px) {
          .desktop-btn {
            padding: 0.875rem 2rem;
            font-size: 1rem;
            height: 3rem;
            border-radius: 12px;
          }
          
          .desktop-stats > div {
            padding: 1rem; /* Reduced padding */
            min-height: 4rem !important; /* Reduced height */
          }
          
          .desktop-heading {
            font-size: 3.75rem;
            line-height: 1.1;
          }
          
          .desktop-subtitle {
            font-size: 1.25rem;
            line-height: 1.6;
          }
          
          /* SMALLER Desktop dual passion stats */
          .dual-passion-stat-item-desktop {
            padding: 0.875rem 0.5rem !important; /* Reduced padding */
            min-height: 4rem !important; /* Reduced height */
            height: auto !important;
          }
          
          .dual-passion-stat-icon-desktop {
            font-size: 1.25rem !important; /* Slightly smaller */
            margin-bottom: 0.375rem !important;
          }
          
          .dual-passion-stat-number-desktop {
            font-size: 1.125rem !important; /* Slightly smaller */
            margin-bottom: 0.125rem !important;
            line-height: 1.1 !important;
            font-weight: 700 !important;
          }
          
          .dual-passion-stat-label-desktop {
            font-size: 0.75rem !important; /* Smaller */
            line-height: 1 !important;
            font-weight: 600 !important;
          }
          
          /* SMALLER Desktop dual passion box */
          .dual-passion-box-desktop {
            max-width: 420px !important; /* Slightly smaller */
            padding: 1.5rem !important; /* Reduced padding significantly */
            height: auto !important;
            min-height: auto !important;
          }
          
          .profile-image-container-desktop {
            width: 5rem !important; /* Smaller */
            height: 5rem !important; /* Smaller */
            margin-bottom: 1rem !important;
          }
          
          .profile-icon-desktop {
            font-size: 2rem !important; /* Smaller */
          }
          
          .dual-passion-title-desktop {
            font-size: 1.5rem !important; /* Smaller */
            margin-bottom: 0.25rem !important;
            font-weight: 700 !important;
          }
          
          .dual-passion-subtitle-desktop {
            font-size: 0.875rem !important; /* Smaller */
            margin-bottom: 1rem !important;
            font-weight: 500 !important;
          }
          
          .dual-passion-stats-desktop {
            gap: 0.75rem !important; /* Smaller gap */
          }
        }

        @media (min-width: 1024px) {
          .desktop-heading {
            font-size: 4rem;
          }
          
          .desktop-subtitle {
            font-size: 1.375rem;
          }
          
          .dual-passion-box-desktop {
            max-width: 450px !important;
            padding: 1.75rem !important; /* Still smaller than before */
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
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50/80 to-indigo-50/40 py-8 md:py-0"
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 w-full">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mobile-stack">
            
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
              {/* Premium Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 mb-5 md:mb-6 glass-card rounded-full shadow-lg mobile-badge"
              >
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Creator × Restaurateur
                </span>
              </motion.div>

              {/* Main Heading */}
              <div className="mb-5 md:mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-2"
                >
                  Hi, I'm{" "}
                  <span className="gradient-text font-bold text-lg md:text-2xl">Amit Kumar</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                  transition={{ delay: 0.5 }}
                  className="font-bold mb-3"
                >
                  <div className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl mobile-heading-large desktop-heading mb-2 md:mb-2">
                    Crafting{" "}
                    <span className="gradient-text">Digital Experiences</span>
                  </div>
                  <div className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mobile-subheading desktop-subheading">
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
                className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed max-w-xl desktop-subtitle mobile-subtitle"
              >
                Blending creativity with culinary excellence. Creating viral content 
                that entertains millions, while serving authentic flavors at{" "}
                <span className="font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Paradise Biryani
                </span>
                .
              </motion.p>

              {/* Stats Grid - Fixed for mobile */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-3 gap-3 md:gap-4 mb-5 max-w-md mobile-stats desktop-stats"
              >
                {[
                  { 
                    number: "500K+", 
                    label: "Followers", 
                    icon: "👥",
                    gradient: "from-indigo-400 to-purple-400"
                  },
                  { 
                    number: "10M+", 
                    label: "Views", 
                    icon: "👀",
                    gradient: "from-purple-400 to-pink-400"
                  },
                  { 
                    number: "5★", 
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
                    className="glass-card rounded-xl md:rounded-xl p-3 text-center cursor-pointer shadow-md md:shadow-lg flex flex-col items-center justify-center desktop-stats-item"
                    style={{ minHeight: 'auto' }}
                  >
                    <div className="text-xl md:text-xl mb-1.5 bounce-gentle mobile-stats-icon desktop-stats-icon">
                      {stat.icon}
                    </div>
                    <div className={`text-lg md:text-xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 mobile-stats-number desktop-stats-number`}>
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-sm text-gray-600 font-medium mobile-stats-label desktop-stats-label">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                transition={{ delay: 0.9 }}
                className="flex mobile-btn-group"
              >
                <motion.button
                  onClick={() => scrollTo("creator")}
                  className="mobile-btn desktop-btn bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl md:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-base md:text-lg bounce-gentle">🎬</span>
                  <span className="text-sm md:text-base">Watch Content</span>
                </motion.button>

                <motion.button
                  onClick={() => scrollTo("hotel")}
                  className="mobile-btn desktop-btn glass-card border border-gray-200 text-gray-800 font-semibold rounded-xl md:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-base md:text-lg bounce-gentle">👨‍🍳</span>
                  <span className="text-sm md:text-base">Visit Restaurant</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content - Dual Passion Box (Now properly sized) */}
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
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  {/* Main Glass Card - Now properly sized */}
                  <div className="glass-card rounded-2xl md:rounded-2xl overflow-hidden shadow-xl dual-passion-box dual-passion-box-desktop">
                    {/* Profile & Title */}
                    <div className="flex flex-col items-center mb-4 md:mb-5">
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
                                className="text-3xl md:text-4xl profile-icon profile-icon-desktop"
                              >
                                🎭
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      
                      <div className="text-center mb-3">
                        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1.5 dual-passion-title dual-passion-title-desktop">
                          Dual Passion
                        </h3>
                        <p className="text-gray-600 text-base md:text-lg dual-passion-subtitle dual-passion-subtitle-desktop">
                          Content Creator × Restaurant Owner
                        </p>
                      </div>
                    </div>

                    {/* Mini Stats - Now properly sized */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4 dual-passion-stats dual-passion-stats-desktop">
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 flex flex-col items-center justify-center dual-passion-stat-item dual-passion-stat-item-desktop">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <div className="text-xl md:text-xl dual-passion-stat-icon dual-passion-stat-icon-desktop">🎥</div>
                          <div className="text-sm md:text-base font-semibold text-indigo-600">Creator</div>
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-indigo-700 dual-passion-stat-number dual-passion-stat-number-desktop">
                          10M+
                        </div>
                        <div className="text-sm md:text-sm text-indigo-600 dual-passion-stat-label dual-passion-stat-label-desktop">
                          Views
                        </div>
                      </div>
                      
                      <div className="rounded-xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 flex flex-col items-center justify-center dual-passion-stat-item dual-passion-stat-item-desktop">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <div className="text-xl md:text-xl dual-passion-stat-icon dual-passion-stat-icon-desktop">🍛</div>
                          <div className="text-sm md:text-base font-semibold text-orange-600">Restaurant</div>
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-orange-700 dual-passion-stat-number dual-passion-stat-number-desktop">
                          5★
                        </div>
                        <div className="text-sm md:text-sm text-orange-600 dual-passion-stat-label dual-passion-stat-label-desktop">
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
                        className="absolute -top-3 -right-3 w-10 h-10"
                      >
                        <div className="w-full h-full gradient-border rounded-lg glass-card flex items-center justify-center shadow-sm">
                          <div className="text-sm">✨</div>
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
                        className="absolute -bottom-3 -left-3 w-10 h-10"
                      >
                        <div className="w-full h-full gradient-border rounded-lg glass-card flex items-center justify-center shadow-sm">
                          <div className="text-sm">🌶️</div>
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
            className="absolute bottom-6 md:bottom-8 left-1/2 hidden md:flex transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollTo("creator")}
              className="flex flex-col items-center gap-1 cursor-pointer group"
            >
              <span className="text-sm font-medium text-gray-500 group-hover:text-indigo-600 transition-colors">
                Scroll to explore
              </span>
              <div className="w-6 h-10 rounded-full border border-gray-300 group-hover:border-indigo-400 transition-colors flex justify-center pt-2">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                  className="w-1 h-3 rounded-full bg-gradient-to-b from-indigo-400 to-purple-400"
                />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}