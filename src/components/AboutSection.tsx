import { motion } from "framer-motion";
import { MotionSection, StaggerContainer, StaggerItem } from "./MotionSection";
import aboutData from "../data/about.json";

const { identification } = aboutData;
const { softSkills, languages } = identification;
// const { languages } = identification;

// Soft skills list — data that doesn't belong in a domain JSON

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(220,80,80,0.06)" }}
      transition={{ duration: 0.2 }}
      className={`border border-border-soft rounded-xl bg-bg-surface p-6 hover:border-border-main transition-colors duration-200 h-full ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <MotionSection id="about" className="py-20 max-w-6xl mx-auto px-6">
      <span className="font-dm-mono text-xs text-primary uppercase tracking-[0.15em]">About</span>
      <h2 className="font-syne font-bold text-text-hi mt-2 mb-10" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
        Who I Am
      </h2>

      <StaggerContainer className="grid md:grid-cols-3 gap-3">
        {/* Quote */}
        <StaggerItem className="md:col-span-2">
          <Card>
            <p className="font-outfit italic text-text-primary text-lg leading-relaxed">
              "I build software the way I approach mazes — systematically, exploring until I find the optimal path."
            </p>
          </Card>
        </StaggerItem>

        {/* Location */}
        <StaggerItem>
          <Card>
            <div className="space-y-4">
              <div>
                <p className="font-dm-mono text-xs text-text-muted uppercase mb-1">Based in</p>
                <p className="font-outfit text-text-primary">Turin 🇮🇹</p>
              </div>
              <div>
                <p className="font-dm-mono text-xs text-text-muted uppercase mb-1">From</p>
                <p className="font-outfit text-text-primary">Romania 🇷🇴</p>
              </div>
            </div>
          </Card>
        </StaggerItem>

        {/* Education status — sourced from about.json */}
        <StaggerItem>
          <Card>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="font-dm-mono text-xs text-green">Current</span>
            </div>
            <p className="font-outfit text-text-primary font-medium">{identification.title}</p>
            <p className="font-dm-mono text-xs text-text-secondary mt-1">
              <a target="_blank" href={identification.institution.url} className="underline">
                {identification.institution.name}
              </a>
              · Since {identification.institution.since}
            </p>
          </Card>
        </StaggerItem>

        {/* Languages */}
        <StaggerItem className="md:col-span-2">
          <Card>
            <div className="flex flex-wrap gap-6">
              {languages.map((l) => (
                <motion.div key={l.name} className="flex items-center gap-2">
                  <span className="text-xl">{l.flag}</span>
                  <div>
                    <span className="font-outfit text-text-primary text-sm">{l.name}</span>
                    <span className="font-dm-mono text-xs text-text-muted ml-2">({l.level})</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </StaggerItem>

        {/* Soft skills */}
        <StaggerItem className="md:col-span-3">
          <Card>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((softSkill) => (
                <span
                  key={softSkill}
                  className="font-dm-mono text-xs bg-bg-elevated text-text-primary px-3 py-1.5 rounded-sm cursor-default"
                >
                  {softSkill}
                </span>
              ))}
            </div>
          </Card>
        </StaggerItem>
      </StaggerContainer>
    </MotionSection>
  );
}
