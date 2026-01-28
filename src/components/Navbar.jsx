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

  /* Scroll-driven values */
  const blurValue = useTransform(scrollY, [0, 120], [10, 26]);
  const bgOpacityValue = useTransform(scrollY, [0, 120], [0.18, 0.55]);
  const borderOpacityValue = useTransform(scrollY, [0, 120], [0.2, 0.45]);

  /* CSS-safe motion values */
  const backdropBlur = useTransform(
    blurValue,
    (v) => `blur(${v}px)`
  );

  const backgroundColor = useTransform(
    bgOpacityValue,
    (o) => `rgba(255,255,255,${o})`
  );

  const borderColor = useTransform(
    borderOpacityValue,
    (o) => `rgba(255,255,255,${o})`
  );

  /* Reflection */
  const reflectionOpacity = useTransform(scrollY, [0, 200], [0, 0.5]);
  const reflectionX = useTransform(scrollY, [0, 200], ["-35%", "35%"]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth"
      });
    }, 250);
  };

  const handleFollowClick = () => {
    window.open(
      "https://www.instagram.com/the_amitkumar_official",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const navLinks = [
    { name: "Creator", id: "creator" },
    { name: "Hotel", id: "hotel" },
    { name: "Collaborate", id: "contact" }
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        style={{
          backdropFilter: backdropBlur,
          backgroundColor: backgroundColor,
          borderBottomColor: borderColor
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50
          border-b border-white/30"
      >
        {/* Soft glass reflection */}
        <motion.div
          style={{
            opacity: reflectionOpacity,
            x: reflectionX
          }}
          className="pointer-events-none absolute inset-0
            bg-gradient-to-r
            from-transparent via-white/30 to-transparent"
        />

        {/* Extra softness layer */}
        <div className="pointer-events-none absolute inset-0 bg-white/10" />

        <nav className="relative max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <motion.div
            onClick={() => scrollTo("hero")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer text-lg font-semibold"
          >
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Amit Kumar
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.id)}
                className="px-4 py-2 text-sm font-medium text-gray-800 rounded-xl
                  hover:bg-white/30 transition"
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={handleFollowClick}
              className="ml-2 px-5 py-2 text-sm font-medium text-white rounded-xl
                bg-gradient-to-r from-indigo-600 to-purple-600
                shadow-lg shadow-indigo-500/20
                hover:shadow-indigo-500/30 transition"
            >
              Follow
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-white/30 transition"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <motion.span
                className="h-0.5 bg-gray-900 rounded-full"
                animate={menuOpen ? { rotate: 45, y: 7 } : {}}
              />
              <motion.span
                className="h-0.5 bg-gray-900 rounded-full"
                animate={menuOpen ? { opacity: 0 } : {}}
              />
              <motion.span
                className="h-0.5 bg-gray-900 rounded-full"
                animate={menuOpen ? { rotate: -45, y: -7 } : {}}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/25 backdrop-blur-sm md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-4 right-4 z-50 rounded-3xl
              bg-white/75 backdrop-blur-2xl
              border border-white/40
              shadow-[0_30px_70px_rgba(0,0,0,0.2)]
              md:hidden"
          >
            <div className="p-3">
              {navLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.id)}
                  className="w-full text-left px-4 py-3 text-sm font-medium
                    text-gray-800 rounded-xl hover:bg-white/40 transition"
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={handleFollowClick}
                className="w-full mt-2 px-4 py-3 text-sm font-medium text-white
                  rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600"
              >
                Follow on Instagram
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
