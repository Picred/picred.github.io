import { motion } from "framer-motion";
import { MotionSection } from "./MotionSection";

// Experience data lives here because it represents lived work history,
const EXPERIENCES = [
  {
    hash: "f4a2b91",
    title: "Internship #2 — Complex Application Development",
    quote: '"Innovative Methods to Design, Develop and Manage Complex Applications"',
    additions: [
      "JavaScript / TypeScript",
      "React (Front-end & Back-end)",
      "Agile/Scrum methodologies",
    ],
    delivered: "[Granimal] - Production full-stack web applications",
  },
  {
    hash: "a3c7d12",
    title: "Internship #1 — Quality Development",
    quote: '"How to Properly Write Your Project"',
    additions: [
      "UNIX Shell · Git & GitHub · Python",
      "Software Testing: pytest, unittest (unit, integration, e2e)",
      "SOLID Principles · CI/CD pipelines",
    ],
    delivered: "[Brain Test Bot] - Production-quality, test-covered Python applications",
  },
] as const;

export function ExperienceSection() {
  return (
    <MotionSection id="experience" className="py-20 max-w-6xl mx-auto px-6">
      <span className="font-dm-mono text-xs text-primary uppercase tracking-[0.15em]">Experience</span>
      <h2 className="font-syne font-bold text-text-hi mt-2 mb-10" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
        Git Log
      </h2>

      <div className="relative pl-8 border-l border-border-soft space-y-12">
        {/* progress line */}
        <motion.div
          className="absolute left-[-1px] top-0 w-[2px] bg-primary/40"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {EXPERIENCES.map((exp, idx) => (
          <ExperienceEntry key={exp.hash} exp={exp} idx={idx} />
        ))}
      </div>
    </MotionSection>
  );
}


type Experience = (typeof EXPERIENCES)[number];

function ExperienceEntry({ exp, idx }: { exp: Experience; idx: number }) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: idx * 0.15, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Diamond node */}
      <motion.div
        className="absolute -left-[calc(2rem+5px)] w-[10px] h-[10px] bg-primary rotate-45"
        initial={{ scale: 0, rotate: 45 }}
        whileInView={{ scale: 1, rotate: 45 }}
        whileHover={{ rotate: 135, scale: 1.3 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.15 + 0.2, type: "spring", stiffness: 400, damping: 20 }}
      />

      <p className="font-dm-mono text-xs text-text-muted mb-3">
        ◆ commit &nbsp;{exp.hash} &nbsp;{'─'.repeat(30)}
      </p>
      <h3 className="font-dm-mono text-text-primary font-medium mb-1">{exp.title}</h3>
      <p className="font-outfit italic text-text-secondary text-sm mb-4">{exp.quote}</p>

      <div className="space-y-1 mb-3">
        {exp.additions.map((line, i) => (
          <motion.p
            key={i}
            className="font-dm-mono text-sm text-green"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 + 0.3 + i * 0.06, duration: 0.3 }}
          >
            + {line}
          </motion.p>
        ))}
      </div>

      <p className="font-dm-mono text-sm text-text-primary font-medium">
        + Delivered: {exp.delivered}
      </p>
    </motion.div>
  );
}
