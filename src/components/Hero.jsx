// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function Hero() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const scrollTo = (id) => {
//     document.getElementById(id)?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       <style jsx>{`
//         @keyframes float-smooth {
//           0%, 100% { transform: translate3d(0, 0, 0); }
//           50% { transform: translate3d(0, -12px, 0); }
//         }

//         @keyframes float-rotate {
//           0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
//           25% { transform: translate3d(8px, -8px, 0) rotate(2deg); }
//           50% { transform: translate3d(0, 0, 0) rotate(0deg); }
//           75% { transform: translate3d(-8px, 8px, 0) rotate(-2deg); }
//         }
        
//         @keyframes gradient-slow {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         @keyframes pulse-gentle {
//           0%, 100% { opacity: 0.6; transform: scale(1); }
//           50% { opacity: 1; transform: scale(1.05); }
//         }

//         @keyframes slide-up {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         .gradient-text {
//           background: linear-gradient(120deg, #667eea 0%, #764ba2 50%, #667eea 100%);
//           background-size: 200% auto;
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: gradient-slow 3s ease-in-out infinite;
//         }

//         .gpu-layer {
//           transform: translate3d(0, 0, 0);
//         }

//         /* Smooth animations on mobile */
//         @media (max-width: 768px) {
//           @keyframes float-smooth {
//             0%, 100% { transform: translate3d(0, 0, 0); }
//             50% { transform: translate3d(0, -8px, 0); }
//           }

//           .float-card {
//             animation: float-smooth 6s ease-in-out infinite;
//           }
//         }

//         /* Mobile-specific styles for premium feel */
//         @media (max-width: 640px) {
//           .mobile-stagger {
//             animation: slide-up 0.6s ease-out forwards;
//           }

//           .mobile-stagger:nth-child(1) { animation-delay: 0.1s; }
//           .mobile-stagger:nth-child(2) { animation-delay: 0.2s; }
//           .mobile-stagger:nth-child(3) { animation-delay: 0.3s; }
//           .mobile-stagger:nth-child(4) { animation-delay: 0.4s; }
//           .mobile-stagger:nth-child(5) { animation-delay: 0.5s; }
//         }
//       `}</style>
      
//       <section
//         id="hero"
//         className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-indigo-50 py-8 md:py-0"
//       >
//         {/* Subtle Background Elements - Optimized */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div 
//             className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl gpu-layer"
//             style={{
//               animation: "float-smooth 20s ease-in-out infinite",
//             }}
//           />
//           <div 
//             className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-tr from-pink-200/30 to-orange-200/30 rounded-full blur-3xl gpu-layer"
//             style={{
//               animation: "float-smooth 25s ease-in-out infinite",
//               animationDelay: "5s"
//             }}
//           />
//         </div>

//         {/* Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 w-full">
//           <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center md:items-center">
            
//             {/* Right Content - Image First on Mobile */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="relative order-first md:order-last"
//             >
//               <div className="relative max-w-[220px] sm:max-w-xs md:max-w-sm mx-auto">
//                 {/* Main Image Container - Compact */}
//                 <div className="relative aspect-square">
//                   {/* Main Card - Compact Premium */}
//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     transition={{ duration: 0.3 }}
//                     className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl border-3 md:border-4 border-white/60 gpu-layer"
//                   >
//                     <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white">
//                       <div className="text-5xl sm:text-6xl md:text-6xl mb-3 md:mb-4">🎬</div>
//                       <h3 className="text-xl sm:text-2xl md:text-2xl font-bold mb-1 md:mb-2">Content Creator</h3>
//                       <p className="text-xs sm:text-sm md:text-sm opacity-90 text-center">Making viral reels & entertainment</p>
//                     </div>
//                   </motion.div>

//                   {/* Floating Card - Top Right - Compact */}
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ 
//                       opacity: isVisible ? 1 : 0, 
//                       scale: isVisible ? 1 : 0.8,
//                     }}
//                     transition={{ duration: 0.5, delay: 0.3 }}
//                     className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-4 md:-right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
//                   >
//                     <motion.div
//                       whileHover={{ scale: 1.1 }}
//                       transition={{ duration: 0.2 }}
//                       className="w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl border-2 md:border-3 border-white/70 gpu-layer float-card"
//                     >
//                       <div className="w-full h-full flex flex-col items-center justify-center p-2 bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
//                         <div className="text-2xl sm:text-3xl md:text-3xl">📱</div>
//                         <div className="text-[9px] sm:text-xs font-bold text-center leading-tight">10M+<br/>Views</div>
//                       </div>
//                     </motion.div>
//                   </motion.div>

//                   {/* Floating Card - Bottom Left - Compact */}
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ 
//                       opacity: isVisible ? 1 : 0, 
//                       scale: isVisible ? 1 : 0.8,
//                     }}
//                     transition={{ duration: 0.5, delay: 0.4 }}
//                     className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-4 md:-left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
//                   >
//                     <motion.div
//                       whileHover={{ scale: 1.1 }}
//                       transition={{ duration: 0.2 }}
//                       className="w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl border-2 md:border-3 border-white/70 gpu-layer float-card"
//                       style={{
//                         animationDelay: "0.5s"
//                       }}
//                     >
//                       <div className="w-full h-full flex flex-col items-center justify-center p-2 bg-gradient-to-br from-orange-500 to-red-500 text-white">
//                         <div className="text-2xl sm:text-3xl md:text-3xl">🍛</div>
//                         <div className="text-[9px] sm:text-xs font-bold text-center leading-tight">Paradise<br/>Biryani</div>
//                       </div>
//                     </motion.div>
//                   </motion.div>

//                   {/* Compact Glow Effects */}
//                   <div className="absolute top-1/4 -right-4 sm:-right-6 md:-right-8 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-purple-400/40 rounded-full blur-xl md:blur-2xl pointer-events-none" />
//                   <div className="absolute bottom-1/4 -left-4 sm:-left-6 md:-left-8 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-indigo-400/40 rounded-full blur-xl md:blur-2xl pointer-events-none" />
//                 </div>
//               </div>
//             </motion.div>
            
//             {/* Left Content - Text Below on Mobile */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-left md:text-left order-last md:order-first"
//             >
//               {/* Compact Premium Badge */}
//               <motion.div 
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
//                 transition={{ duration: 0.5, delay: 0.25 }}
//                 className="inline-flex items-center gap-1 px-2.5 py-1.5 mb-3 md:mb-6 bg-white/90 rounded-full border border-indigo-200/60 shadow-md mobile-stagger"
//               >
//                 <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
//                 <span className="text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//                   Creator & Restaurateur
//                 </span>
//               </motion.div>

//               {/* Compact Main Heading */}
//               <motion.h1
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className="mb-2 md:mb-6 leading-tight mobile-stagger"
//               >
//                 <span className="block text-gray-900 mb-0.5 md:mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Hi, I'm</span>
//                 <span className="block gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">AmitKumar</span>
//               </motion.h1>

//               {/* Compact Subtitle */}
//               <motion.p
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
//                 transition={{ duration: 0.5, delay: 0.35 }}
//                 className="text-sm sm:text-base md:text-lg text-gray-700 mb-5 md:mb-8 leading-relaxed max-w-xl md:mx-0 mobile-stagger"
//               >
//                 Creating engaging content that brings smiles, while serving authentic flavors at{" "}
//                 <span className="font-bold text-orange-600">Paradise Biryani</span>
//               </motion.p>

//               {/* Compact Stats */}
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
//                 transition={{ duration: 0.5, delay: 0.4 }}
//                 className="grid grid-cols-3 gap-2 mb-5 md:mb-8 max-w-sm mobile-stagger"
//               >
//                 {[
//                   { number: "500K+", label: "Followers", gradient: "from-indigo-500 to-purple-500" },
//                   { number: "10M+", label: "Views", gradient: "from-purple-500 to-pink-500" },
//                   { number: "5★", label: "Rating", gradient: "from-orange-500 to-red-500" },
//                 ].map((stat, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ y: -3 }}
//                     whileTap={{ scale: 0.98 }}
//                     transition={{ duration: 0.2 }}
//                     className="text-center p-2.5 sm:p-3 md:p-4 bg-white/90 rounded-lg md:rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
//                   >
//                     <div className={`text-base sm:text-lg md:text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-0.5`}>
//                       {stat.number}
//                     </div>
//                     <div className="text-[10px] sm:text-xs text-gray-600 font-medium">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </motion.div>

//               {/* Compact CTA Buttons */}
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
//                 transition={{ duration: 0.5, delay: 0.45 }}
//                 className="flex gap-2 sm:gap-2.5 justify-start mobile-stagger"
//               >
//                 <motion.button
//                   onClick={() => scrollTo("creator")}
//                   className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs sm:text-sm md:text-base font-semibold rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer whitespace-nowrap"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <span className="flex items-center justify-center gap-1">
//                     Watch
//                     <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                   </span>
//                 </motion.button>

//                 <motion.button
//                   onClick={() => scrollTo("hotel")}
//                   className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 cursor-pointer md:py-4 bg-white/90 text-gray-900 text-xs sm:text-sm md:text-base font-semibold rounded-lg md:rounded-xl shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-indigo-300 transition-all duration-300 whitespace-nowrap"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <span className="flex items-center justify-center gap-1">
//                     Explore
//                     <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                   </span>
//                 </motion.button>
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Compact Scroll Indicator */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: isVisible ? 1 : 0 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//             className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
//           >
//             <motion.button
//               onClick={() => scrollTo("creator")}
//               className="flex flex-col items-center gap-1.5 text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer"
//               animate={{ y: [0, 6, 0] }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <span className="text-[10px] md:text-xs font-medium">Scroll to explore</span>
//               <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//               </svg>
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }

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

        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }

        @keyframes pan-move {
          0%, 100% { transform: translateX(0%) translateY(0%); }
          25% { transform: translateX(3%) translateY(2%); }
          50% { transform: translateX(0%) translateY(0%); }
          75% { transform: translateX(-3%) translateY(-2%); }
        }

        @keyframes grid-move {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(40px) translateY(40px); }
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

        .pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }

        .pan-move {
          animation: pan-move 10s ease-in-out infinite;
        }

        .grid-move {
          animation: grid-move 40s linear infinite;
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

        .gradient-border-orange {
          position: relative;
          background: linear-gradient(white, white) padding-box,
                    linear-gradient(45deg, #f97316, #ef4444, #f59e0b) border-box;
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

        /* Background Grid Lines */
        .bg-grid-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(to right, rgba(102, 126, 234, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(102, 126, 234, 0.1) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.6;
          mask-image: radial-gradient(circle at center, black, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at center, black, transparent 80%);
          pointer-events: none;
        }

        .bg-diagonal-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 15px,
              rgba(247, 107, 108, 0.08) 15px,
              rgba(247, 107, 108, 0.08) 30px
            );
          opacity: 0.4;
          pointer-events: none;
        }

        .bg-circular-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at center, transparent 20%, rgba(118, 75, 162, 0.05) 20%, transparent 25%),
            radial-gradient(circle at center, transparent 40%, rgba(102, 126, 234, 0.05) 40%, transparent 45%),
            radial-gradient(circle at center, transparent 60%, rgba(247, 107, 108, 0.05) 60%, transparent 65%);
          background-size: 100% 100%, 100% 100%, 100% 100%;
          opacity: 0.3;
          pointer-events: none;
        }

        /* Mobile responsive styles */
        @media (max-width: 768px) {
          .mobile-stack {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }
          
          .mobile-center {
            text-align: center;
            align-items: center;
          }
          
          .mobile-heading {
            font-size: 1.75rem;
            line-height: 1.2;
          }
          
          .mobile-heading-large {
            font-size: 2rem;
            line-height: 1.1;
          }
          
          .mobile-subheading {
            font-size: 1.25rem;
            line-height: 1.3;
          }
          
          .mobile-btn {
            padding: 0.875rem 1.25rem;
            font-size: 0.875rem;
            flex: 1;
            min-width: 140px;
          }
          
          .mobile-btn-group {
            display: flex;
            flex-direction: row;
            gap: 0.75rem;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;
          }
          
          .mobile-stats {
            gap: 0.75rem;
          }
          
          .mobile-stats > div {
            padding: 0.875rem;
          }
          
          .mobile-simplify {
            margin-top: 1rem;
            transform: scale(0.95);
          }
          
          .bg-icon {
            opacity: 0.12;
            font-size: 20px;
          }
          
          .bg-glow {
            filter: blur(60px);
          }
          
          .bg-grid-lines {
            background-size: 40px 40px;
            opacity: 0.5;
            mask-image: radial-gradient(circle at center, black, transparent 70%);
            -webkit-mask-image: radial-gradient(circle at center, black, transparent 70%);
          }
          
          .bg-diagonal-lines {
            opacity: 0.3;
          }
          
          .bg-circular-lines {
            opacity: 0.2;
          }
        }

        @media (max-width: 640px) {
          .mobile-heading {
            font-size: 1.5rem;
          }
          
          .mobile-heading-large {
            font-size: 1.75rem;
          }
          
          .mobile-subheading {
            font-size: 1.125rem;
          }
          
          .mobile-btn {
            padding: 0.75rem 1rem;
            font-size: 0.8125rem;
            min-width: 130px;
          }
          
          .mobile-btn-group {
            gap: 0.625rem;
          }
          
          .mobile-stats > div {
            padding: 0.75rem;
          }
          
          .mobile-simplify {
            transform: scale(0.9);
          }
          
          .bg-grid-lines {
            background-size: 30px 30px;
          }
        }

        @media (max-width: 480px) {
          .mobile-heading {
            font-size: 1.375rem;
          }
          
          .mobile-heading-large {
            font-size: 1.5rem;
          }
          
          .mobile-subheading {
            font-size: 1rem;
          }
          
          .mobile-btn {
            padding: 0.625rem 0.875rem;
            font-size: 0.75rem;
            min-width: 120px;
          }
          
          .mobile-btn-group {
            gap: 0.5rem;
          }
          
          .mobile-stats {
            gap: 0.5rem;
          }
          
          .mobile-stats > div {
            padding: 0.625rem;
          }
          
          .mobile-simplify {
            transform: scale(0.85);
          }
          
          .bg-grid-lines {
            background-size: 25px 25px;
          }
          
          /* Reduce background elements on very small screens */
          .bg-diagonal-lines,
          .bg-circular-lines {
            opacity: 0.2;
          }
        }

        /* Desktop enhancements */
        @media (min-width: 769px) {
          .desktop-btn {
            padding: 1rem 2rem;
            font-size: 1rem;
            margin-right: 1rem;
          }
          
          .desktop-stats > div {
            padding: 1.5rem;
          }
          
          .desktop-heading {
            font-size: 3.5rem;
            line-height: 1.1;
          }
          
          .desktop-subheading {
            font-size: 2.5rem;
            line-height: 1.2;
          }
          
          .bg-grid-lines {
            background-size: 70px 70px;
          }
        }

        @media (min-width: 1024px) {
          .desktop-heading {
            font-size: 4rem;
          }
          
          .desktop-subheading {
            font-size: 3rem;
          }
          
          .bg-grid-lines {
            background-size: 80px 80px;
          }
        }

        @media (min-width: 1280px) {
          .bg-grid-lines {
            background-size: 100px 100px;
          }
        }

        /* Reduce motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          .bg-grid-lines,
          .bg-diagonal-lines,
          .bg-circular-lines {
            opacity: 0.1;
          }
        }
      `}</style>
      
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50/80 to-indigo-50/40 py-8 md:py-0"
      >
        {/* Enhanced Background with Visible Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Background Lines */}
          <div className="bg-grid-lines grid-move"></div>
          <div className="bg-diagonal-lines"></div>
          <div className="bg-circular-lines"></div>
          
          {/* Gradient Glow Effects */}
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
                fontSize: isMobile ? '20px' : '32px',
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
                className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 glass-card rounded-full shadow-lg"
              >
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Creator × Restaurateur
                </span>
              </motion.div>

              {/* Main Heading */}
              <div className="mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-2"
                >
                  Hi, I'm{" "}
                  <span className="gradient-text font-bold">Amit Kumar</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                  transition={{ delay: 0.5 }}
                  className="font-bold mb-3"
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
                className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed max-w-xl"
              >
                Blending creativity with culinary excellence. Creating viral content 
                that entertains millions, while serving authentic flavors at{" "}
                <span className="font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Paradise Biryani
                </span>
                .
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-3 gap-3 md:gap-4 mb-6 max-w-md mobile-stats desktop-stats"
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
                    icon: "👁️",
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
                    className="glass-card rounded-xl p-3 md:p-4 text-center cursor-pointer shadow-lg"
                  >
                    <div className="text-lg md:text-xl mb-1 bounce-gentle">
                      {stat.icon}
                    </div>
                    <div className={`text-lg md:text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500 font-medium">{stat.label}</div>
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
                  className="mobile-btn desktop-btn bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-base bounce-gentle">🎬</span>
                  <span>Watch Content</span>
                </motion.button>

                <motion.button
                  onClick={() => scrollTo("hotel")}
                  className="mobile-btn desktop-btn glass-card border border-gray-200 text-gray-800 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-base bounce-gentle">👨‍🍳</span>
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
              <div className="relative w-full max-w-xs md:max-w-sm">
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
                  {/* Main Glass Card */}
                  <div className="glass-card rounded-2xl overflow-hidden shadow-xl p-6">
                    {/* Profile & Title */}
                    <div className="flex flex-col items-center mb-6">
                      <div className="relative w-24 h-24 md:w-28 md:h-28 mb-5">
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
                                className="text-4xl"
                              >
                                🎭
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      
                      <div className="text-center mb-4">
                        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                          Dual Passion
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base">
                          Content Creator × Restaurant Owner
                        </p>
                      </div>
                    </div>

                    {/* Mini Stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="text-lg">🎥</div>
                          <div className="text-xs font-medium text-indigo-600">Creator</div>
                        </div>
                        <div className="text-lg font-bold text-indigo-700">10M+</div>
                        <div className="text-xs text-indigo-500">Views</div>
                      </div>
                      
                      <div className="p-3 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="text-lg">🍛</div>
                          <div className="text-xs font-medium text-orange-600">Restaurant</div>
                        </div>
                        <div className="text-lg font-bold text-orange-700">5★</div>
                        <div className="text-xs text-orange-500">Rating</div>
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
                        className="absolute -top-3 -right-3 w-12 h-12"
                      >
                        <div className="w-full h-full gradient-border rounded-lg glass-card flex items-center justify-center shadow-md">
                          <div className="text-lg">✨</div>
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
                        className="absolute -bottom-3 -left-3 w-12 h-12"
                      >
                        <div className="w-full h-full gradient-border-orange rounded-lg glass-card flex items-center justify-center shadow-md">
                          <div className="text-lg">🌶️</div>
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