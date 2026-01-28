import { motion } from "framer-motion";

const BackgroundGrid = () => {
  const icons = ["🎬", "🍛", "📈", "⭐", "💬", "🔥"];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Grid */}
      <motion.svg
        className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40 0H0V40"
              fill="none"
              stroke="rgba(99,102,241,0.12)"
              strokeWidth="1"
            />
          </pattern>

          <linearGradient id="fade-mask" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="20%" stopColor="white" stopOpacity="1" />
            <stop offset="80%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <mask id="grid-mask">
            <rect width="100%" height="100%" fill="url(#fade-mask)" />
          </mask>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#grid-pattern)"
          mask="url(#grid-mask)"
        />
      </motion.svg>

      {/* Floating Icons */}
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-xl opacity-20"
          style={{
            left: `${10 + index * 15}%`,
            top: `${20 + (index % 3) * 20}%`,
          }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {icon}
        </motion.div>
      ))}

      {/* Soft color overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-orange-500/5" />
    </div>
  );
};

export default BackgroundGrid;