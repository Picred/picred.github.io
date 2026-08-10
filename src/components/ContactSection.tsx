import { motion } from "framer-motion";
import { MotionSection } from "./MotionSection";
import TypeWriter from "./TypeWriter";
import contactData from "../data/contact.json";

const CONTACTS = [
  { label: "mail", value: contactData.email, href: `mailto:${contactData.email}` },
  ...contactData.socials.map((social) => ({
    label: social.platform.toLowerCase(),
    value: social.url.replace("https://", ""),
    href: social.url,
  })),
];

const contactDescription = contactData.description;

export function ContactSection() {
  return (
    <MotionSection id="contact" className="py-20 max-w-2xl mx-auto px-6">
      <span className="font-dm-mono text-xs text-primary uppercase tracking-[0.15em]">Contact</span>
      <h2 className="font-syne font-bold text-text-hi mt-2 mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
        Get In Touch
      </h2>

      <p className="font-dm-mono mb-3 text-sm md:text-base">
        <span className="text-text-muted">&gt; </span>
        <span className="text-text-primary">{ contactDescription }</span>
        <span className="cursor-blink" />
      </p>

      <p className="font-dm-mono text-sm text-text-muted mb-4">
        <TypeWriter text="andrei@portfolio:~$ contact --list" speed={30} />
      </p>

      <div className="border border-border-soft rounded-xl bg-bg-surface overflow-hidden">
        {CONTACTS.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ x: 4 }}
            className="group flex items-center justify-between px-6 py-4 border-b border-border-dim last:border-b-0 hover:bg-white/[0.03] transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="font-dm-mono text-xs text-primary w-24">{c.label}</span>
              <span className="font-outfit text-text-primary text-sm group-hover:underline underline-offset-4 decoration-primary/40 transition-all">
                {c.value}
              </span>
            </div>
            <motion.span
              className="text-text-muted group-hover:text-primary transition-colors"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              →
            </motion.span>
          </motion.a>
        ))}
      </div>
    </MotionSection>
  );
}
