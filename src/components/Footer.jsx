import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import BackgroundGrid from "../background/BackgroundGrid";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG Icons
  const InstagramIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  const YouTubeIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
    </svg>
  );

  const GmailIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
    </svg>
  );

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        .social-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .social-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.6s;
        }
        .social-btn:hover::before {
          left: 100%;
        }
      `}</style>
      
      {/* Top Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isVisible ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
      />

      {/* Main Footer */}
      
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white"
      >
        <BackgroundGrid />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="py-6 sm:py-8">
            {/* Brand & Social Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6"
            >
              {/* Brand */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-sm"
                >
                  <span className="text-base">🎬</span>
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      AmitKumar
                    </span>
                  </h3>
                  <p className="text-xs text-gray-500">Creator & Restaurateur</p>
                </div>
              </motion.div>

              {/* Premium Social Buttons with SVG Icons */}
              <div className="flex gap-2.5">
                {[
                  { 
                    icon: <InstagramIcon />,
                    label: "Instagram",
                    bg: "bg-gradient-to-br from-[#E1306C] via-[#833AB4] to-[#F77737]",
                    hoverBg: "from-[#E1306C] via-[#833AB4] to-[#F77737]",
                    link: "https://instagram.com/the_amitkumar_official",
                    iconColor: "text-[#E1306C]",
                    hoverIconColor: "text-white"
                  },
                  { 
                    icon: <YouTubeIcon />,
                    label: "YouTube",
                    bg: "bg-gradient-to-br from-[#FF0000] via-[#FF6B6B] to-[#FFA500]",
                    hoverBg: "from-[#FF0000] via-[#FF6B6B] to-[#FFA500]",
                    link: "https://www.youtube.com/@amolvlogmore",
                    iconColor: "text-[#FF0000]",
                    hoverIconColor: "text-white"
                  },
                  { 
                    icon: <GmailIcon />,
                    label: "Email",
                    bg: "bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f687b3]",
                    hoverBg: "from-[#667eea] via-[#764ba2] to-[#f687b3]",
                    link: "mailto:aatc4410.business@gmail.com",
                    iconColor: "text-[#667eea]",
                    hoverIconColor: "text-white"
                  }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    animate={{
                      scale: hoveredSocial === index ? [1, 1.05, 1] : 1,
                      y: hoveredSocial === index ? -3 : 0
                    }}
                    transition={{
                      scale: { duration: 0.3 },
                      y: { duration: 0.2 }
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -3 
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="social-btn group"
                  >
                    <div className={`
                      flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg
                      transition-all duration-300
                      ${hoveredSocial === index 
                        ? `${social.bg} shadow-lg` 
                        : 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
                      }
                    `}>
                      {/* Icon Container */}
                      <div className={`
                        w-8 h-8 rounded-lg flex items-center justify-center
                        transition-all duration-300
                        ${hoveredSocial === index 
                          ? 'bg-white/20' 
                          : 'bg-gray-50'
                        }
                      `}>
                        <div className={`
                          transition-all duration-300
                          ${hoveredSocial === index 
                            ? social.hoverIconColor 
                            : social.iconColor
                          }
                        `}>
                          {social.icon}
                        </div>
                      </div>
                      
                      {/* Label - Hidden on mobile, visible on desktop */}
                      <span className={`
                        font-medium text-xs sm:text-sm
                        transition-all duration-300
                        hidden sm:inline-block
                        ${hoveredSocial === index 
                          ? 'text-white' 
                          : 'text-gray-700'
                        }
                      `}>
                        {social.label}
                      </span>
                    </div>

                    {/* Mobile Tooltip */}
                    {hoveredSocial === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="sm:hidden absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10"
                      >
                        {social.label}
                      </motion.div>
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Middle Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-[1px] bg-gradient-to-r from-gray-200 via-indigo-300 to-gray-200 mb-5"
            />

            {/* Stats & Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 15 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              {/* Stats */}
              <div className="flex gap-3 sm:gap-4">
                {[
                  { value: "500K+", label: "Followers", color: "text-indigo-600", bg: "bg-indigo-50" },
                  { value: "10M+", label: "Views", color: "text-purple-600", bg: "bg-purple-50" },
                  { value: "5★", label: "Rating", color: "text-orange-600", bg: "bg-orange-50" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`${stat.bg} px-3 py-1.5 rounded-lg cursor-pointer`}
                  >
                    <div className={`text-xs font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-[10px] text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {["Privacy", "Terms", "Contact"].map((link, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.05, color: "#667eea" }}
                    className="text-xs font-medium text-gray-500 hover:text-indigo-600 transition-colors"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Bottom Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-5 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3"
            >
              <p className="text-xs text-gray-500 text-center sm:text-left">
                © {new Date().getFullYear()} AmitKumar • All rights reserved
              </p>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 text-xs font-medium hover:shadow-sm transition-all duration-200 flex items-center gap-1.5"
              >
                <span>Back to Top</span>
                <motion.span
                  animate={{ y: [0, -1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xs"
                >
                  ↑
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isVisible ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"
        />
      </motion.footer>
    </>
  );
}