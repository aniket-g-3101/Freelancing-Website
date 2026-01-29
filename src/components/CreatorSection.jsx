import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BackgroundGrid from "../background/BackgroundGrid";
import reel1 from "../assets/reels/reel1.png"
import reel2 from "../assets/reels/reel2.png"
import reel3 from "../assets/reels/reel3.png"
import reel4 from "../assets/reels/reel4.png"
import reel5 from "../assets/reels/reel5.png"

const reels = [
  {
    id: 1,
    url: "https://www.instagram.com/reel/DK9cfq0orP-/",
    thumbnail: {reel1},
    title: "Reaction 😅The heaviest tea is from Jaishankar Kundacha ☕️",
    duration: "",
    category: "Comedy",
    engagement: "98.2"
  },
  {
    id: 2,
    url: "https://www.instagram.com/reel/DT-Wc86DzZR/",
    thumbnail: {reel2},
    title: "call miss jhalel chalat nhay 😅💀",
    views: "",
    likes: "",
    duration: "",
    category: "Comedy",
    engagement: "96.5"
  },
  {
    id: 3,
    url: "https://www.instagram.com/reel/DT5LuRhD5gM/",
    thumbnail: {reel3},
    title: "barobar ahe ka ?? 🤔😅",
    views: "",
    likes: "",
    duration: "",
    category: "Comedy",
    engagement: "90.1"
  },
  {
    id: 4,
    url: "https://www.instagram.com/reel/DT7wATUD5v5/",
    thumbnail: {reel4},
    title: "khar ahe ka solapurkarnno?? 🫢🤔",
    views: "",
    likes: "",
    duration: "",
    category: "Comedy",
    engagement: "95.1"
  },
  {
    id: 5,
    url: "https://www.instagram.com/reel/DT2l1CxD7ZL/",
    thumbnail: {reel5},
    title: "vegl samju naka ohh 🤣😅",
    views: "",
    likes: "",
    duration: "",
    category: "Comedy",
    engagement: "94.1"
  },
];

export default function CreatorReels() {
  const [activeReel, setActiveReel] = useState(null);
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  // Check scroll position to show/hide arrows
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section id="creator" className="py-6 md:py-10 relative overflow-hidden bg-white">

      <BackgroundGrid />

      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-blue-500/1 via-purple-500/0.5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header - Larger text in desktop mode */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6 md:mb-8"
        >
          <div className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-full border border-blue-200 mb-2 md:mb-3">
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-500 rounded-full" />
            <span className="text-xs md:text-sm font-medium text-blue-700 uppercase tracking-wider">
              Viral Content
            </span>
          </div>
          
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
            Trending <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Reels</span>
          </h2>
          
          <p className="text-xs md:text-base text-gray-600 max-w-lg mx-auto">
            Handpicked viral moments with exceptional engagement
          </p>
        </motion.div>

        {/* Stats Row - More Compact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex justify-center gap-4 md:gap-6 mb-6"
        >
          {[
            { value: "100K+", label: "Views", icon: "👁️" },
            { value: "150+", label: "Reels", icon: "🎬" },
            { value: "98%", label: "Engagement", icon: "🔥" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center"
            >
              <div className="text-base md:text-lg mb-0.5">{stat.icon}</div>
              <div className="text-sm md:text-base font-bold text-gray-900">{stat.value}</div>
              <div className="text-[10px] md:text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Reels Container with Scroll Indicators */}
        <div className="relative">
          {/* Left Scroll Arrow - Desktop Only */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: showLeftArrow ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-110"
            style={{ pointerEvents: showLeftArrow ? 'auto' : 'none' }}
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </motion.button>

          {/* Reels Grid - Horizontal Scroll on Desktop */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto md:overflow-x-auto md:flex md:flex-row gap-4 md:gap-6 pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
          >
            {reels.map((reel) => (
              <motion.a
                key={reel.id}
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setActiveReel(reel.id)}
                onMouseLeave={() => setActiveReel(null)}
                className="flex-shrink-0 w-48 md:w-56 md:flex-shrink-0 group relative overflow-hidden rounded-lg md:rounded-xl bg-white shadow-sm md:shadow hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200"
              >
                {/* Card Container */}
                <div className="relative">
                  {/* Thumbnail Container */}
                  <div className="relative aspect-[9/16] overflow-hidden">
                    {/* Main Image */}
                    <motion.img
                      src={reel.thumbnail}
                      alt={reel.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      draggable="false"
                      animate={activeReel === reel.id ? { scale: 1.05 } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    
                    {/* Top Badges - Slightly Larger for desktop */}
                    <div className="absolute top-2 md:top-3 left-2 md:left-3 right-2 md:right-3 flex justify-between items-start">
                      {/* Instagram Badge */}
                      <div className="px-1.5 md:px-2 py-0.5 md:py-1 bg-black/70 backdrop-blur-sm rounded-full">
                        <span className="text-[10px] md:text-xs font-medium text-white flex items-center gap-0.5 md:gap-1">
                          <svg className="w-2.5 h-2.5 md:w-3 md:h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-2.619 0-4.74 2.121-4.74 4.74 0 2.619 2.121 4.74 4.74 4.74 2.619 0 4.74-2.121 4.74-4.74 0-2.619-2.121-4.74-4.74-4.74zm0 7.825c-1.702 0-3.085-1.382-3.085-3.085 0-1.702 1.382-3.085 3.085-3.085 1.702 0 3.085 1.382 3.085 3.085 0 1.702-1.382 3.085-3.085 3.085zm5.023-7.326c-.612 0-1.108.496-1.108 1.108 0 .612.496 1.108 1.108 1.108.612 0 1.108-.496 1.108-1.108 0-.612-.496-1.108-1.108-1.108z" />
                          </svg>
                        </span>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="px-1.5 md:px-2 py-0.5 md:py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg">
                        <span className="text-[10px] md:text-xs font-medium text-white">{reel.category}</span>
                      </div>
                    </div>

                    {/* Play Button - Slightly Larger for desktop */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md md:shadow-lg group-hover:bg-white transition-colors duration-300">
                        <svg className="w-3 h-3 md:w-5 md:h-5 text-gray-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom Info Panel - Slightly Larger for desktop */}
                    <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
                      {/* Title - Slightly larger for desktop */}
                      <h3 className="text-xs md:text-sm font-semibold text-white mb-1.5 md:mb-2 line-clamp-2 min-h-[2em] md:min-h-[2.5em]">{reel.title}</h3>
                      
                      {/* Stats Row - Slightly larger for desktop */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="flex items-center gap-0.5 md:gap-1">
                            <svg className="w-3 h-3 md:w-4 md:h-4 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                            <span className="text-[10px] md:text-xs font-medium text-white/90">{reel.views}</span>
                          </div>
                          <div className="flex items-center gap-0.5 md:gap-1">
                            <svg className="w-3 h-3 md:w-4 md:h-4 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span className="text-[10px] md:text-xs font-medium text-white/90">{reel.likes}</span>
                          </div>
                        </div>
                        
                        {/* Engagement Indicator - Slightly larger for desktop */}
                        <div className="flex items-center gap-1 md:gap-1.5">
                          <div className="flex flex-col items-end">
                            <span className="text-[9px] md:text-xs font-medium text-emerald-300">{reel.engagement}%</span>
                            <div className="w-12 md:w-16 h-0.5 md:h-1.5 bg-gray-300/30 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500"
                                initial={{ width: "0%" }}
                                whileInView={{ width: `${reel.engagement}%` }}
                                transition={{ duration: 1, delay: 0.2 }}
                                viewport={{ once: true }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right Scroll Arrow - Desktop Only */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: showRightArrow ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-110"
            style={{ pointerEvents: showRightArrow ? 'auto' : 'none' }}
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </motion.button>

          {/* Scroll Indicator Dots - Desktop Only */}
          <div className="hidden md:flex justify-center gap-2 mt-6">
            {reels.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300"
              />
            ))}
          </div>
        </div>

        {/* View All Button - More Compact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 md:mt-10 text-center"
        >
          <motion.a
            href="https://www.instagram.com/the_amitkumar_official?igsh=Z2w4aG81dmVnbXJj"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 md:gap-3 px-5 md:px-8 py-2.5 md:py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs md:text-sm font-medium rounded-lg md:rounded-xl hover:shadow-xl transition-all shadow-md"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-2.619 0-4.74 2.121-4.74 4.74 0 2.619 2.121 4.74 4.74 4.74 2.619 0 4.74-2.121 4.74-4.74 0-2.619-2.121-4.74-4.74-4.74zm0 7.825c-1.702 0-3.085-1.382-3.085-3.085 0-1.702 1.382-3.085 3.085-3.085 1.702 0 3.085 1.382 3.085 3.085 0 1.702-1.382 3.085-3.085 3.085zm5.023-7.326c-.612 0-1.108.496-1.108 1.108 0 .612.496 1.108 1.108 1.108.612 0 1.108-.496 1.108-1.108 0-.612-.496-1.108-1.108-1.108z" />
            </svg>
            <span className="text-xs md:text-sm">View All Reels on Instagram</span>
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}