import { motion } from "framer-motion";
import { MotionSection, StaggerContainer, StaggerItem } from "./MotionSection";
import TypeWriter from "./TypeWriter";
import aboutData from "../data/about.json";

const { skills } = aboutData;

// Skill categories with their display paths
// These map to the keys in about.json → skills
const SKILL_CATEGORIES: { path: string; key: keyof typeof skills }[] = [
  { path: "languages", key: "languages" },
  { path: "frontend", key: "frontend" },
  { path: "backend", key: "backend" },
  { path: "tools", key: "tools" },
];

export function SkillsSection() {
  return (
    <MotionSection id="skills" className="py-20 max-w-6xl mx-auto px-6">
      <p className="font-dm-mono text-sm text-text-muted mb-2">
        <TypeWriter text="> ls ~/skills" speed={40} />
      </p>
      <h2 className="font-syne font-bold text-primary mb-10" style={{ fontSize: "clamp(1.5rem, 1.5vw, 1.5rem)" }}>
        My technical stack and the tools I use to bring ideas to life.
      </h2>

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {SKILL_CATEGORIES.map((cat) => (
          <StaggerItem key={cat.path}>
            <SkillCard path={cat.path} skillList={skills[cat.key]} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </MotionSection>
  );
}

function SkillCard({ path, skillList }: { path: string; skillList: string[] }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative border border-border-soft rounded-xl bg-bg-surface p-6 transition-colors duration-200 overflow-hidden hover:border-border-main"
    >

      <p className="font-dm-mono text-xs text-text-muted mb-1">~/{path}</p>

      <div className="flex flex-wrap gap-2">
        {skillList.map((skill) => (
          <span
            key={skill}
            className="font-jetbrains text-sm px-2 py-1 rounded-xl cursor-default bg-bg-elevated text-primary"
          > {skill} </span>
        ))}
      </div>
    </motion.div>
  );
}
