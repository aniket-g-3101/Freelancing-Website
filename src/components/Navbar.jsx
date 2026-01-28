import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform
} from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  /* Scroll-driven values - optimized ranges */
  const blurValue = useTransform(scrollY, [0, 100], [12, 24]);
  const bgOpacityValue = useTransform(scrollY, [0, 100], [0.65, 0.85]);

  /* CSS-safe motion values */
  const backdropBlur = useTransform(
    blurValue,
    (v) => `blur(${v}px) saturate(180%)`
  );

  const backgroundColor = useTransform(
    bgOpacityValue,
    (o) => `rgba(255, 255, 255, ${o})`
  );

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    };
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth"
      });
    }, 150);
  };

  const handleFollowClick = () => {
    window.open(
      "https://www.instagram.com/the_amitkumar_official",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const navLinks = [
    { name: "Home", id: "hero", icon: "🏠" },
    { name: "About", id: "about", icon: "👤" },
    { name: "Creator", id: "creator", icon: "🎬" },
    { name: "Hotel", id: "hotel", icon: "🍛" },
    { name: "Contact", id: "contact", icon: "📧" }
  ];

  return (
    <>
      <style jsx>{`
        /* Hardware acceleration for all animated elements */
        .hw-accelerate {
          transform: translateZ(0);
          will-change: transform;
          -webkit-transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          perspective: 1000px;
        }

        .glass-navbar {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 4px 16px rgba(31, 38, 135, 0.06),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.6);
          transform: translateZ(0);
          will-change: transform, opacity;
        }

        .glass-menu-mobile {
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 8px 24px rgba(31, 38, 135, 0.12),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.8);
          transform: translateZ(0);
          will-change: transform, opacity;
        }

        .glass-button {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateZ(0);
          will-change: transform;
        }

        .glass-button:active {
          transform: scale(0.97) translateZ(0);
        }

        .menu-item {
          position: relative;
          overflow: hidden;
          transform: translateZ(0);
        }

        /* Optimized mobile styles - removed heavy effects */
        @media (max-width: 768px) {
          .glass-navbar {
            backdrop-filter: blur(12px) saturate(160%);
            -webkit-backdrop-filter: blur(12px) saturate(160%);
          }

          .glass-menu-mobile {
            background: rgba(255, 255, 255, 0.92);
            backdrop-filter: blur(16px) saturate(160%);
            -webkit-backdrop-filter: blur(16px) saturate(160%);
            box-shadow: 
              0 8px 20px rgba(31, 38, 135, 0.1),
              inset 0 1px 0 0 rgba(255, 255, 255, 0.8);
          }

          .mobile-menu-compact {
            padding: 0.5rem;
          }

          .mobile-menu-item {
            padding: 0.625rem 0.875rem;
            font-size: 0.875rem;
            min-height: 2.5rem;
            border-radius: 10px;
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
          }

          .mobile-menu-icon {
            font-size: 1rem;
          }
          
          /* Disable hover effects on mobile */
          .glass-button:hover {
            background: rgba(255, 255, 255, 0.4);
            border-color: rgba(255, 255, 255, 0.25);
          }
        }

        @media (max-width: 480px) {
          .glass-navbar {
            backdrop-filter: blur(10px) saturate(150%);
            -webkit-backdrop-filter: blur(10px) saturate(150%);
          }

          .glass-menu-mobile {
            backdrop-filter: blur(14px) saturate(150%);
            -webkit-backdrop-filter: blur(14px) saturate(150%);
          }

          .mobile-menu-item {
            padding: 0.5rem 0.75rem;
            font-size: 0.8125rem;
            min-height: 2.25rem;
            border-radius: 8px;
          }

          .mobile-menu-icon {
            font-size: 0.875rem;
          }
        }

        /* Desktop hover effects only */
        @media (min-width: 769px) {
          .glass-button:hover {
            background: rgba(255, 255, 255, 0.6);
            border-color: rgba(255, 255, 255, 0.4);
            transform: translateY(-1px) translateZ(0);
          }
        }

        /* Disable all animations for reduced motion */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* NAVBAR - Performance Optimized */}
      <motion.header
        style={{
          backdropFilter: backdropBlur,
          backgroundColor: backgroundColor
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.4, 
          ease: [0.25, 0.1, 0.25, 1]
        }}
        className="fixed top-0 left-0 right-0 z-50 glass-navbar hw-accelerate"
      >
        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">

          {/* Logo */}
          <motion.div
            onClick={() => scrollTo("hero")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="cursor-pointer text-base sm:text-lg font-bold relative hw-accelerate"
          >
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Amit Kumar
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollTo(item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.05,
                  duration: 0.3,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="menu-item px-3.5 py-2 text-sm font-medium text-gray-800 rounded-xl glass-button"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className="text-base">{item.icon}</span>
                  {item.name}
                </span>
              </motion.button>
            ))}

            <motion.button
              onClick={handleFollowClick}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="ml-2 px-5 py-2 text-sm font-semibold text-white rounded-xl
                bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                shadow-lg shadow-indigo-500/20
                hover:shadow-xl hover:shadow-indigo-500/30 
                transition-all duration-200 hw-accelerate"
            >
              Follow
            </motion.button>
          </div>

          {/* Mobile Toggle - Ultra Optimized */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            className="md:hidden p-2 rounded-xl glass-button hw-accelerate"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <motion.span
                className="h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hw-accelerate"
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ 
                  duration: 0.2, 
                  ease: [0.4, 0, 0.2, 1]
                }}
              />
              <motion.span
                className="h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hw-accelerate"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="h-0.5 bg-gradient-to-r from-pink-600 to-indigo-600 rounded-full hw-accelerate"
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ 
                  duration: 0.2, 
                  ease: [0.4, 0, 0.2, 1]
                }}
              />
            </div>
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Overlay - Lightweight */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-black/15 md:hidden hw-accelerate"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu - Performance First */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ 
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="fixed top-16 sm:top-20 left-3 right-3 sm:left-4 sm:right-4 z-50 
              rounded-2xl glass-menu-mobile md:hidden overflow-hidden hw-accelerate"
          >
            <div className="mobile-menu-compact">
              {navLinks.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollTo(item.id)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.03,
                    duration: 0.2,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="menu-item w-full text-left mobile-menu-item
                    font-medium text-gray-800 glass-button
                    flex items-center gap-2.5 mb-1.5 hw-accelerate"
                >
                  <span className="mobile-menu-icon">{item.icon}</span>
                  <span>{item.name}</span>
                </motion.button>
              ))}

              <motion.button
                onClick={handleFollowClick}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: navLinks.length * 0.03,
                  duration: 0.2,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileTap={{ scale: 0.97 }}
                className="w-full mt-2 px-4 py-2.5 text-sm font-semibold text-white
                  rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                  shadow-lg shadow-indigo-500/20 hw-accelerate
                  flex items-center justify-center gap-2"
              >
                <span className="text-base">📸</span>
                Follow on Instagram
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}