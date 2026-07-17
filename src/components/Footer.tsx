import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.footer
      className="border-t border-border-dim py-10 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="font-dm-mono text-xs text-text-muted">
        Made with ❤️ by Andrei Stefan · Last Update: {new Date().toDateString()}
      </p>
      
      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="font-dm-mono text-xs text-primary mt-3 hover:opacity-80 transition-opacity"
      >
        [↑ back to top]
      </motion.button>
    </motion.footer>
  );
}