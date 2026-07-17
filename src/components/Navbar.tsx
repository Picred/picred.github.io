import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home",       href: "#hero" },
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact", dot: true },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navigate = (href: string) => {
    scrollTo(href);
    setOpen(false);
  };

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border-dim"
      style={{ background: "hsl(var(--bg-void) / 0.85)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <motion.button
          onClick={() => navigate("#hero")}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="font-dm-mono text-sm text-text-primary hover:text-primary transition-colors"
        >
          Andrei Stefan <span className="text-primary animate-pulse">·</span>
        </motion.button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {NAV_LINKS.map((link) => (
            <motion.button
              key={link.href}
              onClick={() => navigate(link.href)}
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative font-dm-mono text-sm text-text-secondary hover:text-primary transition-colors duration-150 py-1"
            >
              {link.dot && <span className="text-green mr-1">●</span>}
              {link.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile toggle */}
        <motion.button
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-text-secondary"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden border-t border-border-dim bg-bg-surface/95 backdrop-blur-md px-6 overflow-hidden"
          >
            <div className="py-4 space-y-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 300, damping: 18 }}
                  onClick={() => navigate(link.href)}
                  className="flex items-center gap-3 w-full text-left font-dm-mono text-sm py-2.5 px-3 rounded-md text-text-secondary hover:text-primary transition-colors"
                >
                  {link.dot && <span className="text-green">●</span>}
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}