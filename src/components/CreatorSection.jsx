import { motion } from "framer-motion";
import { useState } from "react";

const reels = [
  {
    id: 1,
    url: "https://www.instagram.com/reel/DK9cfq0orP-/",
    thumbnail: "/src/assets/reels/reel1.png",
    title: "Viral Comedy Moment",
    views: "1.2M",
    likes: "84K",
    duration: "0:21",
    category: "Comedy",
    engagement: "98.2%"
  },
  {
    id: 2,
    url: "https://www.instagram.com/reel/DT-Wc86DzZR/",
    thumbnail: "/src/assets/reels/reel2.png",
    title: "Food Challenge",
    views: "890K",
    likes: "65K",
    duration: "0:15",
    category: "Food",
    engagement: "96.5%"
  },
  {
    id: 3,
    url: "https://www.instagram.com/reel/DT5LuRhD5gM/",
    thumbnail: "/src/assets/reels/reel3.png",
    title: "Behind The Scenes",
    views: "2.4M",
    likes: "142K",
    duration: "0:31",
    category: "Lifestyle",
    engagement: "99.1%"
  },
];

export default function CreatorReels() {
  const [activeReel, setActiveReel] = useState(null);

  return (
    <section id="creator" className="py-10 md:py-16 relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-indigo-500/3 via-purple-500/2 to-transparent rounded-full blur-3xl" />
        <div className="absolute -top-10 -right-10 md:-top-24 md:-right-24 w-40 h-40 md:w-96 md:h-96 bg-gradient-to-br from-indigo-500/4 to-purple-500/3 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -left-10 md:-bottom-32 md:-left-32 w-40 h-40 md:w-96 md:h-96 bg-gradient-to-tr from-pink-500/4 to-rose-500/3 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="text-center md:text-left">
              {/* Premium Micro Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-indigo-500/8 to-purple-500/8 rounded-lg border border-indigo-200/20 mb-2 md:mb-3"
              >
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse" />
                <span className="text-[10px] md:text-xs font-semibold text-indigo-700 tracking-wider uppercase">Viral Content</span>
              </motion.div>
              
              {/* Compact Title */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Reels</span>
              </h2>
              
              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Handpicked viral moments with exceptional engagement
              </p>
            </div>
            
            {/* Premium Compact CTA */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex justify-center md:justify-end"
            >
              <motion.a
                href="https://www.instagram.com/the_amitkumar_official?igsh=Z2w4aG81dmVnbXJj"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 md:px-4 md:py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200/80 hover:border-indigo-300/50 shadow-xs hover:shadow-sm transition-all duration-300"
              >
                <span className="text-xs md:text-sm font-medium text-gray-900">View All</span>
                <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-indigo-600 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* Premium Stats Grid - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-3 gap-2 md:gap-3 max-w-sm mx-auto md:mx-0"
          >
            {[
              { value: "10M+", label: "Views", icon: "👁️", color: "from-indigo-500/10 to-purple-500/10" },
              { value: "500+", label: "Reels", icon: "🎬", color: "from-purple-500/10 to-pink-500/10" },
              { value: "98%", label: "Engagement", icon: "🔥", color: "from-pink-500/10 to-rose-500/10" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex flex-col items-center p-2 md:p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/50 shadow-xs hover:shadow-sm transition-shadow duration-300"
              >
                <div className="text-base md:text-lg mb-0.5">{stat.icon}</div>
                <div className="text-sm md:text-base font-bold text-gray-900">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Premium Compact Reels Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 max-w-3xl mx-auto"
        >
          {reels.map((reel) => (
            <motion.a
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 12, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ 
                y: -4, 
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.99 }}
              onMouseEnter={() => setActiveReel(reel.id)}
              onMouseLeave={() => setActiveReel(null)}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-white to-gray-50/50 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100/80 hover:border-gray-200 backdrop-blur-[0.5px]"
            >
              {/* Compact Card Container */}
              <div className="relative">
                {/* Thumbnail Container - Compact */}
                <div className="relative aspect-[9/16] overflow-hidden">
                  {/* Main Image with Optimized Loading */}
                  <motion.img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    draggable="false"
                    animate={activeReel === reel.id ? { scale: 1.04 } : { scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Premium Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-75 group-hover:opacity-80 transition-opacity duration-400" />
                  
                  {/* Animated Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Top Badges - Compact */}
                  <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex justify-between items-start">
                    {/* Instagram Badge */}
                    <motion.div 
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-black/50 backdrop-blur-sm rounded-full"
                      animate={activeReel === reel.id ? { y: 0 } : { y: -3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-[9px] sm:text-xs font-semibold text-white flex items-center gap-1">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-2.619 0-4.74 2.121-4.74 4.74 0 2.619 2.121 4.74 4.74 4.74 2.619 0 4.74-2.121 4.74-4.74 0-2.619-2.121-4.74-4.74-4.74zm0 7.825c-1.702 0-3.085-1.382-3.085-3.085 0-1.702 1.382-3.085 3.085-3.085 1.702 0 3.085 1.382 3.085 3.085 0 1.702-1.382 3.085-3.085 3.085zm5.023-7.326c-.612 0-1.108.496-1.108 1.108 0 .612.496 1.108 1.108 1.108.612 0 1.108-.496 1.108-1.108 0-.612-.496-1.108-1.108-1.108z" />
                        </svg>
                        <span className="hidden sm:inline">Reel</span>
                      </span>
                    </motion.div>
                    
                    {/* Duration Badge */}
                    <motion.div 
                      className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-black/50 backdrop-blur-sm rounded-lg"
                      animate={activeReel === reel.id ? { y: 0 } : { y: -3 }}
                      transition={{ duration: 0.2, delay: 0.05 }}
                    >
                      <span className="text-[9px] sm:text-xs font-semibold text-white">{reel.duration}</span>
                    </motion.div>
                  </div>

                  {/* Premium Play Button - Compact */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    animate={activeReel === reel.id ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                      
                      {/* Compact Play Button */}
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:bg-white transition-all duration-200">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>

                  {/* Bottom Info Panel - Compact */}
                  <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3 md:p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                    <motion.div
                      animate={activeReel === reel.id ? { y: 0 } : { y: 8 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Category Badge */}
                      <div className="inline-flex items-center gap-1 px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg mb-1.5 sm:mb-2">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-indigo-400 rounded-full" />
                        <span className="text-[9px] sm:text-xs font-medium text-white">{reel.category}</span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xs sm:text-sm font-semibold text-white mb-1 sm:mb-1.5 line-clamp-1">{reel.title}</h3>
                      
                      {/* Compact Stats Row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="flex items-center gap-0.5 sm:gap-1">
                            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                            <span className="text-[10px] sm:text-xs font-medium text-white/90">{reel.views}</span>
                          </div>
                          <div className="flex items-center gap-0.5 sm:gap-1">
                            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span className="text-[10px] sm:text-xs font-medium text-white/90">{reel.likes}</span>
                          </div>
                        </div>
                        
                        {/* Engagement Indicator */}
                        <div className="flex items-center gap-1">
                          <div className="w-4 sm:w-5 h-0.5 bg-gray-300/30 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                              initial={{ width: "0%" }}
                              whileInView={{ width: `${parseFloat(reel.engagement)}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                            />
                          </div>
                          <span className="text-[8px] sm:text-[10px] font-medium text-emerald-300">{reel.engagement}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Premium Border Effect */}
                <div className="absolute inset-0 border border-gray-200/20 group-hover:border-gray-300/30 rounded-xl md:rounded-2xl transition-all duration-300 pointer-events-none" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Premium Compact CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 md:mt-12 text-center"
        >
          <div className="inline-flex flex-col items-center gap-3 p-4 md:p-5 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-xl border border-white/60 shadow-sm max-w-md mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-2.619 0-4.74 2.121-4.74 4.74 0 2.619 2.121 4.74 4.74 4.74 2.619 0 4.74-2.121 4.74-4.74 0-2.619-2.121-4.74-4.74-4.74zm0 7.825c-1.702 0-3.085-1.382-3.085-3.085 0-1.702 1.382-3.085 3.085-3.085 1.702 0 3.085 1.382 3.085 3.085 0 1.702-1.382 3.085-3.085 3.085zm5.023-7.326c-.612 0-1.108.496-1.108 1.108 0 .612.496 1.108 1.108 1.108.612 0 1.108-.496 1.108-1.108 0-.612-.496-1.108-1.108-1.108z" />
                </svg>
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-900">
                Follow for daily content
              </h3>
            </div>
            <p className="text-xs text-gray-600 max-w-sm">
              Join 500K+ followers for exclusive behind-the-scenes
            </p>
            <motion.a
              href="https://www.instagram.com/the_amitkumar_official?igsh=Z2w4aG81dmVnbXJj"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-lg shadow-sm hover:shadow transition-all duration-300"
            >
              <span>Follow @AmitKumar</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}