import { motion } from "framer-motion";

export default function SmoothScroll({ children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 26,
      }}
    >
      {children}
    </motion.section>
  );
}
