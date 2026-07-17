import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import aboutData from "../data/about.json";
// ─── Types ────────────────────────────────────────────────────────────────────

interface Node {
  x: number; y: number;
  vx: number; vy: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface ShootingStar {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number; length: number;
}

// ─── Space canvas (desktop only, auto-disabled on touch devices) ──────────────

function SpaceCanvas({ scrollY }: { scrollY: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // Skip animation on touch-only devices to save battery
    if (window.matchMedia("(hover: none)").matches) return;

    let animId: number;
    let paused = false;
    let lastTime = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const nodes: Node[] = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      opacity: 0.15 + Math.random() * 0.45,
      twinkleSpeed: 0.5 + Math.random() * 2,
      twinklePhase: Math.random() * Math.PI * 2,
    }));

    const shootingStars: ShootingStar[] = [];
    let nextStar = performance.now() + 1000 + Math.random() * 2000;

    const spawnStar = () => {
      const fromTop = Math.random() < 0.5;
      shootingStars.push({
        x: fromTop ? Math.random() * canvas.width : canvas.width + 10,
        y: fromTop ? -10 : Math.random() * canvas.height * 0.5,
        vx: -(3 + Math.random() * 4),
        vy: 2 + Math.random() * 3,
        life: 0,
        maxLife: 40 + Math.random() * 30,
        length: 40 + Math.random() * 60,
      });
    };

    const draw = (timestamp: number) => {
      if (paused) { animId = requestAnimationFrame(draw); return; }
      if (timestamp - lastTime < 33) { animId = requestAnimationFrame(draw); return; }
      lastTime = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (timestamp > nextStar) {
        spawnStar();
        nextStar = timestamp + 2000 + Math.random() * 3000;
      }

      // Draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += s.vx; s.y += s.vy; s.life++;
        const p = s.life / s.maxLife;
        const alpha = p < 0.1 ? p * 10 : p > 0.7 ? (1 - p) / 0.3 : 1;
        const grad = ctx.createLinearGradient(
          s.x, s.y,
          s.x - s.vx * s.length * 0.3, s.y - s.vy * s.length * 0.3
        );
        grad.addColorStop(0, `rgba(200,220,255,${alpha * 0.9})`);
        grad.addColorStop(0.4, `rgba(255,100,100,${alpha * 0.4})`);
        grad.addColorStop(1, `rgba(255,100,100,0)`);
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * s.length * 0.3, s.y - s.vy * s.length * 0.3);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,220,255,${alpha * 0.8})`;
        ctx.fill();
        if (s.life >= s.maxLife) shootingStars.splice(i, 1);
      }

      // Draw node connections
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > canvas.width) a.vx *= -1;
        if (a.y < 0 || a.y > canvas.height) a.vy *= -1;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            // Red tinted connections instead of blue
            ctx.strokeStyle = `rgba(220,80,80,${0.12 * (1 - dist / 180)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes with twinkling
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const twinkle = 0.5 + 0.5 * Math.sin(timestamp / 1000 * n.twinkleSpeed + n.twinklePhase);
        const isAccent = i <= 1;
        ctx.beginPath();
        ctx.arc(n.x, n.y, isAccent ? 5 : 2.5, 0, Math.PI * 2);
        if (isAccent) {
          ctx.fillStyle = `rgba(220,80,80,${0.5 + 0.5 * Math.sin(timestamp / (800 + i * 400))})`;
          ctx.shadowColor = "rgba(220,80,80,0.4)";
          ctx.shadowBlur = 12;
        } else {
          ctx.fillStyle = `rgba(220,80,80,${n.opacity * twinkle})`;
          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    const onVis = () => { paused = document.hidden; };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full hidden md:block"
      style={{ transform: `translateY(${scrollY * 0.3}px)` }}
    />
  );
}

// ─── Name line animation variants ────────────────────────────────────────────

const nameLineVariants = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  visible: (i: number) => ({
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { delay: 0.3 + i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const NAME_LINES = ["ANDREI", "STEFAN"];
const { identification } = aboutData;
// ─── HeroSection ─────────────────────────────────────────────────────────────

export function HeroSection() {
  const [lineVisible, setLineVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLineVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  const handleScroll = useCallback(() => setScrollY(window.scrollY), []);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { handleScroll(); ticking = false; });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-bg-void overflow-hidden">
      <SpaceCanvas scrollY={scrollY} />

      {/* Mobile fallback — shooting star CSS animation */}
      <div
        className="absolute inset-0 md:hidden shooting-stars-mobile"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(220,80,80,0.08), transparent 60%)",
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-20">
        {/* Availability badge */}
        <div className="flex justify-end mb-8">
          <span className="font-dm-mono text-xs text-text-secondary flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green inline-block animate-pulse" />
            open to opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-syne font-bold text-text-hi leading-[0.9] tracking-tight"
          style={{ fontSize: "clamp(3.5rem, 9vw, 5.5rem)" }}
        >
          {NAME_LINES.map((line, i) => (
            <motion.span
              key={line}
              className="block"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={nameLineVariants}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        {/* Animated underline */}
        <div
          className="h-[2px] bg-primary mt-6 mb-6 transition-all duration-[800ms] ease-out"
          style={{ width: lineVisible ? "40%" : "0%" }}
        />

        {/* Taglines */}
        <p className="font-dm-mono text-text-secondary" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
          Junior Software Engineer
        </p>
        <p className="font-dm-mono mt-2 text-sm md:text-base">
          <span className="text-text-muted">&gt; </span>
          <span className="text-text-primary">{identification.bio}</span>
          <span className="cursor-blink" />
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mt-8">
          <motion.a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
            whileHover={{ scale: 1.04, boxShadow: "0 0 24px hsl(0 88% 62% / 0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="font-dm-mono text-sm bg-primary text-primary-foreground px-6 py-3 rounded-md hover:opacity-90 transition-all"
          >
            ↓ View My Work
          </motion.a>
          <motion.a
            href="https://github.com/Picred"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: "0 0 20px hsl(0 88% 62% / 0.15)" }}
            whileTap={{ scale: 0.97 }}
            className="font-dm-mono text-sm border border-primary text-primary px-6 py-3 rounded-md hover:bg-accent-dim transition-all"
          >
            GitHub →
          </motion.a>
        </div>
      </div>
    </section>
  );
}
