import { motion } from "framer-motion";
import { MotionSection } from "./MotionSection";
import aboutData from "../data/about.json";

const { timeline } = aboutData;

export function EducationSection() {
  return (
    <MotionSection id="education" className="py-20 max-w-6xl mx-auto px-6">
      <span className="font-dm-mono text-xs text-primary uppercase tracking-[0.15em]">Education</span>
      <h2 className="font-syne font-bold text-text-hi mt-2 mb-10" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
        Academic Path
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {timeline.map((entry, i) => (
          <EducationCard key={i} entry={entry} />
        ))}
      </div>
    </MotionSection>
  );
}


type TimelineEntry = (typeof timeline)[number];

function EducationCard({ entry }: { entry: TimelineEntry }) {
  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(220,80,80,0.08)" }}
      transition={{ duration: 0.25 }}
      className="border border-border-soft rounded-xl bg-bg-surface p-8 hover:border-border-main transition-colors"
    >
      <h3 className="font-syne font-bold text-text-hi text-xl mb-2 uppercase">{entry.institution}</h3>
      <p className="font-dm-mono text-sm text-text-secondary mb-4">{entry.title}</p>

      {entry.current ? (
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
          <span className="font-dm-mono text-xs text-green">Currently enrolled</span>
        </div>
      ) : (

        <motion.p
          className="font-syne font-bold mb-1 gold-shimmer"
          style={{ fontSize: "2rem" }}
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
        >
          ✦ 110 / 110
        </motion.p>
      )}

      {!entry.current && (
        <p className="font-dm-mono text-xs text-gold uppercase tracking-[0.15em] mb-4">cum laude</p>
      )}

      <p className="font-outfit text-text-secondary text-sm mb-2">{entry.period}</p>
      <p className="font-outfit italic text-text-muted text-sm leading-relaxed">{entry.description}</p>
    </motion.div>
  );
}
