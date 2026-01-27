import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { MapPin, Star, Users, Instagram, ChevronRight, Heart, Phone, Navigation, X, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";

// Import actual hotel images
import hotel1 from "../assets/hotel/hotel1.jpg";
import hotel2 from "../assets/hotel/hotel2.jpg";
import hotel3 from "../assets/hotel/hotel3.jpg";
import hotel4 from "../assets/hotel/hotel4.jpg";
import hotel5 from "../assets/hotel/hotel5.jpg";
import hotel6 from "../assets/hotel/hotel6.jpg";
import hotel7 from "../assets/hotel/hotel7.jpg";
import hotel8 from "../assets/hotel/hotel8.jpg";

export default function HotelSection() {
  const [activeImage, setActiveImage] = useState(0);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const thumbnailRef = useRef(null);

  // Actual hotel images
  const hotelImages = [
    { id: 1, src: hotel1, alt: "Luxury Hotel Room", title: "Deluxe Suite" },
    { id: 2, src: hotel2, alt: "Hotel Swimming Pool", title: "Infinity Pool" },
    { id: 3, src: hotel3, alt: "Hotel Restaurant", title: "Fine Dining" },
    { id: 4, src: hotel4, alt: "Hotel Spa", title: "Luxury Spa" },
    { id: 5, src: hotel5, alt: "Conference Room", title: "Conference Hall" },
    { id: 6, src: hotel6, alt: "Hotel Lobby", title: "Grand Lobby" },
    { id: 7, src: hotel7, alt: "Executive Lounge", title: "Executive Lounge" },
    { id: 8, src: hotel8, alt: "Garden View", title: "Landscaped Garden" },
  ];

  const highlights = [
    { icon: "🏨", title: "5-Star", description: "Luxury" },
    { icon: "🏊", title: "Pool", description: "Infinity" },
    { icon: "🌟", title: "4.8★", description: "Rating" },
    { icon: "🍽️", title: "Dining", description: "Fine" },
  ];

  const reviews = [
    { text: "Absolutely stunning property with exceptional service.", rating: 5 },
    { text: "The infinity pool at sunset is breathtaking.", rating: 5 },
    { text: "Perfect blend of luxury and comfort.", rating: 5 },
  ];

  // Auto-scroll images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % hotelImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [hotelImages.length]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll thumbnails horizontally
  const scrollThumbnails = (direction) => {
    if (thumbnailRef.current) {
      const scrollAmount = 150;
      if (direction === 'left') {
        thumbnailRef.current.scrollLeft -= scrollAmount;
      } else {
        thumbnailRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <section id="hotel" className="py-6 md:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6 md:mb-8"
        >
          <div className="inline-flex items-center gap-1 px-2 md:px-3 py-1 md:py-1.5 bg-blue-50 rounded-full border border-blue-200 mb-2 md:mb-3">
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-500 rounded-full" />
            <span className="text-xs font-medium text-blue-700 uppercase tracking-wider">
              Luxury Hotel & Biriyani
            </span>
          </div>
          
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Paradise Hyderabadi Biryani
            </span>
          </h2>
          
          <p className="text-xs md:text-sm text-gray-600 max-w-lg mx-auto">
            Fine Dining Experience
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
          {/* Left Column - Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative rounded-lg md:rounded-xl overflow-hidden bg-gray-100 aspect-[4/3]">
              {hotelImages.map((img, index) => (
                <motion.div
                  key={img.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === activeImage ? 1 : 0 }}
                  transition={{ duration: 1 }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </motion.div>
              ))}
              
              {/* Navigation Dots */}
              <div className="absolute bottom-3 right-3 flex gap-1.5">
                {hotelImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${idx === activeImage ? 'w-5 bg-white' : 'bg-white/60 hover:bg-white/80'}`}
                  />
                ))}
              </div>
              
              {/* View Gallery Button - Smaller text on mobile */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAllPhotos(true)}
                className="absolute top-3 right-3 px-3 py-1.5 md:px-4 md:py-2 bg-white/90 backdrop-blur-sm rounded-md md:rounded-lg text-xs md:text-sm font-medium text-gray-900 shadow-sm md:shadow-md flex items-center gap-1 md:gap-2 hover:shadow transition-shadow"
              >
                <span className="text-xs md:text-sm">View Gallery</span>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              </motion.button>
            </div>

            {/* Thumbnail Grid - First 4 images (Desktop only) */}
            <div className="hidden md:grid md:grid-cols-4 gap-3">
              {hotelImages.slice(0, 4).map((img, idx) => (
                <motion.button
                  key={img.id}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-square rounded-lg overflow-hidden ${activeImage === idx ? 'ring-2 ring-blue-500 ring-offset-1' : 'opacity-90 hover:opacity-100'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>

            {/* ALL Images Horizontal Scroll on Mobile */}
            <div className="md:hidden">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-medium text-gray-700">Gallery</p>
                <div className="flex gap-1">
                  <button
                    onClick={() => scrollThumbnails('left')}
                    className="p-1 bg-white border border-gray-300 rounded hover:bg-gray-50"
                  >
                    <ChevronLeft className="w-3 h-3 text-gray-600" />
                  </button>
                  <button
                    onClick={() => scrollThumbnails('right')}
                    className="p-1 bg-white border border-gray-300 rounded hover:bg-gray-50"
                  >
                    <ChevronRightIcon className="w-3 h-3 text-gray-600" />
                  </button>
                </div>
              </div>
              <div 
                className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide scroll-smooth"
                ref={thumbnailRef}
              >
                {hotelImages.map((img, idx) => (
                  <motion.button
                    key={img.id}
                    onClick={() => setActiveImage(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden ${activeImage === idx ? 'ring-2 ring-blue-500' : 'opacity-90 hover:opacity-100'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Additional Images Grid on Desktop (Below first 4) */}
            {hotelImages.length > 4 && (
              <div className="hidden md:block">
                <div className="grid grid-cols-4 gap-3 mt-3">
                  {hotelImages.slice(4).map((img, idx) => (
                    <motion.div
                      key={img.id}
                      className="aspect-square rounded-lg overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Compact Stats */}
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-md md:rounded-lg bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center">
                    <Star className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg md:text-xl font-bold text-gray-900">4.8</div>
                    <div className="text-xs md:text-sm text-gray-500">Guest Rating</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-md md:rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Users className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg md:text-xl font-bold text-gray-900">500+</div>
                    <div className="text-xs md:text-sm text-gray-500">Happy Guests</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Information */}
          <div className="space-y-4 md:space-y-6">
            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg md:rounded-xl p-4 md:p-5 border border-gray-200 shadow-sm md:shadow-md"
            >
              <div className="flex items-start justify-between mb-4 md:mb-5">
                <div>
                  <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                    Paradise Hyderabadi Biryani
                  </h3>
                  <div className="flex items-center gap-1 md:gap-2 text-sm text-gray-600">
                    <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                    <span className="text-xs md:text-sm">Fine Dining Experience</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-1 md:p-2 hover:bg-gray-100 rounded transition-colors"
                >
                  <Heart className="w-4 h-4 md:w-5 md:h-5 text-gray-400 hover:text-red-500" />
                </motion.button>
              </div>

              {/* Compact Highlights */}
              <div className="mb-4 md:mb-5">
                <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-2 md:mb-3">Highlights</h4>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-blue-50 rounded-md md:rounded-lg border border-blue-100"
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded md:rounded-lg bg-blue-100 flex items-center justify-center">
                        <span className="text-sm md:text-lg">{item.icon}</span>
                      </div>
                      <div>
                        <div className="text-xs md:text-sm font-medium text-gray-900">{item.title}</div>
                        <div className="text-[10px] md:text-xs text-gray-500">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons - Smaller text on mobile */}
              <div className="space-y-2 md:space-y-3">
                <motion.a
                  href="https://www.instagram.com/paradise_hyderabadi_biryani?igsh=cHp5N3lpMHpxMTY2"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 md:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs md:text-xs font-medium md:font-semibold rounded-md md:rounded-lg hover:shadow transition-all flex items-center justify-center gap-1.5 md:gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="text-xs md:text-xs">Follow on Instagram</span>
                </motion.a>
                
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  <motion.a
                    href="https://maps.app.goo.gl/ioQ4K6ydqBCBxWJp8"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="py-2.5 md:py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs md:text-xs font-medium md:font-semibold rounded-md md:rounded-lg hover:shadow transition-all flex items-center justify-center gap-1.5 md:gap-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span className="text-xs md:text-xs">Directions</span>
                  </motion.a>
                  
                  <motion.a
                    href="tel:+11234567890"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="py-2.5 md:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs md:text-xs font-medium md:font-semibold rounded-md md:rounded-lg hover:shadow transition-all flex items-center justify-center gap-1.5 md:gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span className="text-xs md:text-xs">Call Now</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-lg md:rounded-xl p-4 md:p-5 border border-gray-200 shadow-sm md:shadow-md"
            >
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <h4 className="text-sm md:text-base font-semibold text-gray-900">Reviews</h4>
                <div className="flex items-center gap-0.5 md:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 md:w-4 md:h-4 ${i < 4 ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                  ))}
                  <span className="text-xs md:text-sm font-medium text-gray-900 ml-1 md:ml-2">4.8</span>
                </div>
              </div>
              
              <div className="space-y-2 md:space-y-3">
                {reviews.map((review, idx) => (
                  <div
                    key={idx}
                    className="p-2 md:p-3 bg-gray-50 rounded-md md:rounded-lg"
                  >
                    <div className="flex items-center gap-1 md:gap-1 mb-1 md:mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-2 h-2 md:w-3 md:h-3 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <p className="text-xs md:text-sm text-gray-700 line-clamp-2">{review.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Live Popularity */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-lg md:rounded-xl p-4 md:p-5 border border-gray-200 shadow-sm md:shadow-md"
            >
              <div className="flex items-center justify-between mb-2 md:mb-3">
                <h4 className="text-sm md:text-base font-semibold text-gray-900">Live Popularity</h4>
                <span className="text-xs md:text-sm font-medium text-green-600 bg-green-50 px-2 md:px-3 py-0.5 md:py-1 rounded-full">
                  Normal
                </span>
              </div>
              <div className="h-1.5 md:h-2 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-gray-900/10 to-gray-900/5"
                  animate={{ x: ["0%", "100%", "0%"] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
              </div>
              <div className="text-[10px] md:text-xs text-gray-500 text-center mt-1 md:mt-2">
                Based on live visits
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA - Smaller text on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-6 md:mt-10 text-center"
        >
          <div className="inline-flex flex-col items-center gap-2 md:gap-3 p-4 md:p-5 bg-white rounded-lg md:rounded-xl border border-gray-200 shadow-sm md:shadow-md max-w-md">
            <h3 className="text-sm md:text-base font-bold text-gray-900">
              Visit Us Today
            </h3>
            <p className="text-xs md:text-sm text-gray-600">
              Experience authentic Hyderabadi biryani
            </p>
            <motion.a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 md:px-6 md:py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs md:text-sm font-medium md:font-semibold rounded-md md:rounded-lg hover:shadow transition-all flex items-center justify-center gap-1.5 md:gap-2"
            >
              <Navigation className="w-3.5 h-3.5 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm">Get Directions</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Photo Gallery Modal - Improved */}
      <AnimatePresence>
        {showAllPhotos && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowAllPhotos(false);
            }}
          >
            {/* Close Button - Smaller on mobile */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowAllPhotos(false)}
              className="absolute top-3 md:top-4 right-3 md:right-4 z-50 text-white hover:text-gray-300 flex items-center gap-1 md:gap-2 text-xs md:text-sm font-medium bg-black/50 rounded-full px-3 md:px-4 py-1.5 md:py-2.5 border border-white/20"
            >
              <X className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Close</span>
            </motion.button>

            <div className="w-full max-w-6xl max-h-[85vh] overflow-y-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 p-2">
                {hotelImages.map((img) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative rounded-lg md:rounded-xl overflow-hidden aspect-square group cursor-pointer"
                    onClick={() => setShowAllPhotos(false)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="px-2 py-1 md:px-3 md:py-2 bg-white/95 backdrop-blur-sm rounded">
                        <div className="text-xs md:text-sm font-medium text-gray-900">{img.title}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Close Button at bottom - Smaller text on mobile */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllPhotos(false)}
              className="mt-4 md:mt-6 px-6 md:px-8 py-2 md:py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg text-xs md:text-sm font-medium border border-white/30 hover:bg-white/30 transition-colors"
            >
              Close Gallery
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scroll-smooth {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
}