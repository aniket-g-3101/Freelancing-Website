import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

// Import the image (make sure to adjust the path based on your project structure)
import amitImage from '/src/assets/images/amit.png';

const aboutTabs = [
  {
    id: "about",
    label: "About",
    icon: "👨‍💼",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: "creator",
    label: "Creator",
    icon: "🎬",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "hotel",
    label: "Restaurant",
    icon: "🏨",
    color: "from-orange-500 to-red-500"
  }
];

const aboutContent = {
  about: {
    title: "Amit Kumar",
    subtitle: "Digital Creator & Restaurateur",
    description: "Hi, I'm Amit Kumar, a digital content creator and restaurateur from Solapur. I create entertaining and relatable content on social media, and I also run Paradise Hyderabad Biryani in Vijapur . Over the years, I've learned how creativity and hospitality go hand in hand, whether it's connecting with people through content or serving authentic food with consistency and care.",
    stats: [
      { value: "2+", label: "Years", icon: "📅" },
      { value: "1000+", label: "Followers", icon: "👥" },
      { value: "100K+", label: "Views", icon: "📈" },
    ],
    highlights: [
      "Content creator since 2024",
      "Restaurant owner since 2021",
      "Social media expert",
    ]
  },
  creator: {
    title: "Content Creator",
    subtitle: "Creating Viral Moments",
    description: "I'm a digital content creator who focuses on creating entertaining and relatable videos that connect with people through humor, everyday moments, and real-life experiences.",
    stats: [
      { value: "150+", label: "Reels", icon: "🎥" },
      { value: "100K+", label: "Views", icon: "👁️" },
      { value: "98%", label: "Engagement", icon: "🔥" },
    ],
    features: [
      {
        title: "Viral Content",
        description: "Trending content across platforms",
        icon: "📈"
      },
      {
        title: "Community",
        description: "Authentic audience engagement",
        icon: "💬"
      },
      {
        title: "Brand Work",
        description: "Premium brand collaborations",
        icon: "🌟"
      }
    ]
  },
  hotel: {
    title: "Paradise Biryani",
    subtitle: "Hyderabadi Biryani & Traditional Flavors",
    description: "I run Paradise Hyderabad Biryani in Vijapur, where we focus on serving authentic Hyderabadi biryani made with rich flavors, quality ingredients, and consistent taste.",
    stats: [
      { value: "4.8/5", label: "Rating", icon: "⭐" },
      { value: "100+", label: "Orders/Day", icon: "🍛" },
      { value: "20+", label: "Menu Items", icon: "📋" },
      { value: "24/7", label: "Service", icon: "⏰" }
    ],
    features: [
      {
        title: "Authentic Recipes",
        description: "Traditional family recipes",
        icon: "👨‍🍳"
      },
      {
        title: "Premium Quality",
        description: "Finest ingredients & spices",
        icon: "🏆"
      },
      {
        title: "Modern Experience",
        description: "Contemporary dining ambiance",
        icon: "🎨"
      }
    ]
  }
};

// Smooth scroll function
const smoothScrollTo = (element, duration = 800) => {
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const easeInOutCubic = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  };

  requestAnimationFrame(animation);
};

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("about");
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [useGPU, setUseGPU] = useState(true);

  // Check if mobile on mount and resize with performance optimizations
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Check if device can handle GPU acceleration
      const canUseGPU = !mobile || 
        (navigator.hardwareConcurrency && navigator.hardwareConcurrency > 2) ||
        !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      setUseGPU(canUseGPU);
    };
    
    // Throttle resize for performance
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkMobile, 100);
    };
    
    checkMobile();
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Request animation frame for smoother animations
    let animationFrameId;
    const optimizeAnimations = () => {
      if (useGPU) {
        document.documentElement.style.setProperty('--gpu-accelerated', 'translateZ(0)');
      } else {
        document.documentElement.style.setProperty('--gpu-accelerated', 'none');
      }
    };
    
    animationFrameId = requestAnimationFrame(optimizeAnimations);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [useGPU]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    // Scroll tab into view on mobile
    if (isMobile) {
      const tabElement = document.getElementById(`tab-content-${tabId}`);
      if (tabElement) {
        tabElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      smoothScrollTo(element);
    }
  };

  return (
    <>
      <style jsx>{`
        :root {
          --gpu-accelerated: none;
        }

        /* Static background effects - NO MOVEMENT */
        .bg-mesh-gradient {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(245, 87, 108, 0.05) 0%, transparent 50%);
          z-index: 0;
          pointer-events: none;
        }

        /* Static gradient overlays */
        .bg-gradient-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        /* Subtle gradient text animation ONLY */
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
          animation: gradient-sweep 8s ease-in-out infinite;
          transform: var(--gpu-accelerated);
          will-change: background-position;
          backface-visibility: hidden;
        }

        @keyframes gradient-sweep {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Subtle button hover animations ONLY */
        .hover-lift {
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-2px) var(--gpu-accelerated);
        }

        /* Subtle icon animation ONLY */
        .subtle-bounce {
          animation: subtle-bounce 3s ease-in-out infinite;
          transform: var(--gpu-accelerated);
          will-change: transform;
          backface-visibility: hidden;
        }

        @keyframes subtle-bounce {
          0%, 100% { transform: translateY(0) var(--gpu-accelerated); }
          50% { transform: translateY(-3px) var(--gpu-accelerated); }
        }

        /* Glass card with performance optimizations */
        .glass-card {
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 8px 32px rgba(31, 38, 135, 0.08),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.8);
          transform: var(--gpu-accelerated);
          will-change: transform, opacity;
          backface-visibility: hidden;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .gradient-text {
            animation-duration: 10s;
          }
          
          .subtle-bounce {
            animation-duration: 4s;
          }

          .glass-card {
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            box-shadow: 
              0 4px 16px rgba(31, 38, 135, 0.06),
              inset 0 1px 0 0 rgba(255, 255, 255, 0.8);
          }
          
          .bg-mesh-gradient {
            background: 
              radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.03) 0%, transparent 40%),
              radial-gradient(circle at 80% 80%, rgba(245, 87, 108, 0.03) 0%, transparent 40%);
          }
        }

        /* Disable animations for reduced motion */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            animation-delay: -1ms !important;
          }
          
          .gradient-text,
          .subtle-bounce {
            animation: none !important;
          }
          
          .hover-lift:hover {
            transform: none !important;
          }
        }

        /* Disable blur effects on low-end devices */
        @media (max-width: 768px) and (orientation: portrait) {
          .glass-card {
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            background: rgba(255, 255, 255, 0.98);
          }
        }
      `}</style>
      
      <section 
        id="about" 
        ref={sectionRef}
        className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-indigo-50/30"
      >
        {/* STATIC Background Effects - NO ANIMATIONS */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Static mesh gradient */}
          <div className="bg-mesh-gradient"></div>
          
          {/* Static gradient overlays */}
          <div className="bg-gradient-overlay bg-gradient-to-tr from-indigo-500/5 via-transparent to-orange-500/5"></div>
          
          {/* Very subtle static orbs with minimal blur */}
          <div 
            className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-200/10 to-purple-200/10 blur-3xl"
            style={{ filter: 'blur(48px)' }}
          ></div>
          <div 
            className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-orange-200/8 to-red-200/8 blur-3xl"
            style={{ filter: 'blur(48px)' }}
          ></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 glass-card rounded-full mb-3">
              <div className="w-1.5 h-1.5 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full" />
              <span className="text-xs font-semibold text-indigo-700">ABOUT</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              About <span className="gradient-text">Amit</span>
            </h2>
            
            <p className="text-sm text-gray-600 max-w-md mx-auto">
              Entrepreneur, creator, and restaurateur
            </p>
          </motion.div>

          {/* Mobile: Profile Card with Image */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="md:hidden mb-6"
          >
            <div className="glass-card rounded-xl p-4 shadow-sm overflow-hidden hover-lift">
              {/* Image Container */}
              <div className="relative mb-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 0.95 }}
                  transition={{ duration: 0.4 }}
className="relative w-full aspect-video rounded-lg overflow-hidden bg-linear-to-br from-gray-100 to-gray-200"                >
                  <img
                    src={amitImage}
                    alt="Amit Kumar"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    onLoad={() => setImageLoaded(true)}
                  /> 
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                  
                  {/* Verified Badge */}
                  <div className="absolute top-3 right-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-white/95 rounded-full"
                    >
                      <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs font-medium text-gray-900">Verified</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              
              {/* Profile Info */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Amit Kumar</h3>
                <p className="text-sm text-gray-600 mb-3">Digital Creator & Restaurateur</p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="text-center p-2 bg-white/80 rounded-lg border border-gray-100">
                    <div className="text-sm font-bold text-gray-900">100K+</div>
                    <div className="text-xs text-gray-500">Followers</div>
                  </div>
                  <div className="text-center p-2 bg-white/80 rounded-lg border border-gray-100">
                    <div className="text-sm font-bold text-gray-900">4.4★</div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Simplified Tabs */}
          <div className="mb-6 md:mb-8">
            <div className={`flex ${isMobile ? 'overflow-x-auto snap-x snap-mandatory scrollbar-hide' : 'justify-center'} gap-1 md:gap-2 glass-card p-1 rounded-xl`}>
              {aboutTabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative flex items-center justify-center gap-2 px-3 py-2.5 md:px-4 md:py-3 rounded-lg transition-all duration-200 min-w-[100px] md:min-w-0 ${
                    isMobile ? 'snap-start' : ''
                  } ${
                    activeTab === tab.id 
                      ? 'text-white' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/50'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 bg-gradient-to-r ${tab.color} rounded-lg`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                    />
                  )}
                  <span className="relative z-10 text-sm subtle-bounce">{tab.icon}</span>
                  <span className="relative z-10 text-xs md:text-sm font-medium whitespace-nowrap">
                    {tab.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: isMobile ? 20 : 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isMobile ? -20 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                id={`tab-content-${activeTab}`}
                className="glass-card rounded-xl p-4 md:p-6 shadow-sm"
              >
                {/* Content Header */}
                <div className="mb-4 md:mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${aboutTabs.find(t => t.id === activeTab)?.color} bg-opacity-10 flex items-center justify-center`}>
                      <span className="text-sm subtle-bounce">{aboutTabs.find(t => t.id === activeTab)?.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        {aboutContent[activeTab].title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        {aboutContent[activeTab].subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {aboutContent[activeTab].description}
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3 mb-4 md:mb-6">
                  {aboutContent[activeTab].stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="text-center p-2 md:p-3 bg-white/80 rounded-lg border border-gray-100 hover-lift"
                    >
                      <div className="text-base mb-1 subtle-bounce">{stat.icon}</div>
                      <div className="text-base md:text-lg font-bold text-gray-900 mb-0.5">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2 md:space-y-0 md:grid md:grid-cols-3 md:gap-3">
                  {aboutContent[activeTab].features?.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.08 }}
                      className="p-2 md:p-3 bg-white/80 rounded-lg border border-gray-100 hover-lift"
                    >
                      <div className="flex items-start gap-2 md:gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm subtle-bounce">{feature.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="mt-6 pt-4 border-t border-gray-100"
                >
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                    <motion.button
                      onClick={() => scrollToSection(activeTab === 'creator' ? 'creator' : 'hotel')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-lg hover-lift transition-all duration-200"
                    >
                      <span>
                        {activeTab === 'creator' ? 'View Content' : 
                         activeTab === 'hotel' ? 'Visit Restaurant' : 'Learn More'}
                      </span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.button>
                    
                    <motion.button
                      onClick={() => scrollToSection('contact')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 glass-card border border-gray-200 text-gray-900 text-sm font-medium rounded-lg hover-lift transition-all duration-200"
                    >
                      <span>Contact</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-6 md:mt-8 md:hidden"
          >
            <div className="grid grid-cols-2 gap-2">
              <motion.a
                href="https://www.instagram.com/the_amitkumar_official"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 p-3 glass-card rounded-lg hover-lift"
              >
                <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-2.619 0-4.74 2.121-4.74 4.74 0 2.619 2.121 4.74 4.74 4.74 2.619 0 4.74-2.121 4.74-4.74 0-2.619-2.121-4.74-4.74-4.74zm0 7.825c-1.702 0-3.085-1.382-3.085-3.085 0-1.702 1.382-3.085 3.085-3.085 1.702 0 3.085 1.382 3.085 3.085 0 1.702-1.382 3.085-3.085 3.085zm5.023-7.326c-.612 0-1.108.496-1.108 1.108 0 .612.496 1.108 1.108 1.108.612 0 1.108-.496 1.108-1.108 0-.612-.496-1.108-1.108-1.108z" />
                </svg>
                <span className="text-xs font-medium text-indigo-700">Instagram</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Desktop: Profile Sidebar with Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="hidden md:block absolute -left-64 top-0 w-56"
          >
            <div className="sticky top-24 glass-card rounded-xl p-5 shadow-sm overflow-hidden hover-lift">
              {/* Image Container */}
              <div className="relative mb-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-48 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 mb-3"
                >
                  <img
                    src={amitImage}
                    alt="Amit Kumar"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    onLoad={() => setImageLoaded(true)}
                  /> 
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  
                  {/* Verified Badge Overlay */}
                  <div className="absolute top-3 right-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-white/95 rounded-full"
                    >
                      <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs font-medium text-gray-900">Verified</span>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Name & Title */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Amit Kumar</h3>
                  <p className="text-sm text-gray-600 mb-3">Digital Creator & Restaurateur</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="text-center p-2 bg-white/80 rounded-lg border border-gray-100 hover-lift">
                  <div className="text-sm font-bold text-gray-900">100K+</div>
                  <div className="text-xs text-gray-500">Followers</div>
                </div>
                <div className="text-center p-2 bg-white/80 rounded-lg border border-gray-100 hover-lift">
                  <div className="text-sm font-bold text-gray-900">4.4★</div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-2">Quick Links</p>
                <div className="space-y-2">
                  <motion.a
                    href="https://www.instagram.com/the_amitkumar_official"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-2 text-xs text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-2.619 0-4.74 2.121-4.74 4.74 0 2.619 2.121 4.74 4.74 4.74 2.619 0 4.74-2.121 4.74-4.74 0-2.619-2.121-4.74-4.74-4.74zm0 7.825c-1.702 0-3.085-1.382-3.085-3.085 0-1.702 1.382-3.085 3.085-3.085 1.702 0 3.085 1.382 3.085 3.085 0 1.702-1.382 3.085-3.085 3.085zm5.023-7.326c-.612 0-1.108.496-1.108 1.108 0 .612.496 1.108 1.108 1.108.612 0 1.108-.496 1.108-1.108 0-.612-.496-1.108-1.108-1.108z" />
                    </svg>
                    Follow on Instagram
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}