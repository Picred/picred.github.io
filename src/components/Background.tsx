import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const SystemLog = ({ delay }: { delay: number }) => {
  const logs = [
    "RECV_0x4F2",
    "NODE_SYNC_COMPLETE",
    "MEM_ALLOC_0x8F",
    "UPLINK_STABLE_99%",
    "AUTH_TOKEN_VALID",
    "DECRYPT_CHNL_01",
    "SYS_CORE_MAX",
    "ACK_RECEIVED"
  ];
  const log = logs[Math.floor(Math.random() * logs.length)];

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ 
        opacity: [0, 0.4, 0],
        x: [-10, 0, 10]
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        delay 
      }}
      className="text-[9px] font-mono text-primary/30 whitespace-nowrap"
    >
      {`// ${log}`}
    </motion.div>
  );
};

export const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let w: number, h: number;
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Data elements
    const particles: Particle[] = [];
    const maxParticles = 50;
    const codes = [
      "0x4F", "0b11", "malloc", "uint32", "ptr*", "@main", 
      "stack", "0x00", "float", "void", "mov", "push", "pop"
    ];

    class Particle {
      x!: number; y!: number; z!: number; speed!: number; char!: string; color!: string;
      constructor() {
        this.reset();
        this.z = Math.random() * 2000; // Random start depth
      }
      reset() {
        this.x = (Math.random() - 0.5) * w * 3;
        this.y = (Math.random() - 0.5) * h * 3;
        this.z = 2000;
        this.speed = 3 + Math.random() * 8;
        this.char = codes[Math.floor(Math.random() * codes.length)];
        this.color = Math.random() > 0.92 ? "#ef4444" : "#06b6d4";
      }
      update() {
        this.z -= this.speed;
        if (this.z < 1) this.reset();
      }
      draw() {
        const scale = 600 / this.z;
        const px = w / 2 + this.x * scale;
        const py = h / 2 + this.y * scale;

        if (px < -100 || px > w + 100 || py < -100 || py > h + 100) return;

        const opacity = Math.min(1, (2000 - this.z) / 1000) * 0.4;
        ctx!.globalAlpha = opacity;
        ctx!.fillStyle = this.color;
        ctx!.font = `${Math.max(8, scale * 14)}px monospace`;
        ctx!.fillText(this.char, px, py);
      }
    }

    for (let i = 0; i < maxParticles; i++) particles.push(new Particle());

    const drawGrid = (offset: number) => {
      ctx.strokeStyle = "rgba(34, 211, 238, 0.04)";
      ctx.lineWidth = 1;
      
      const gridSize = 100;
      const centerX = w / 2;

      // 3D Perspective Lines (Vanishing point)
      for (let i = -15; i <= 15; i++) {
        const x = centerX + i * gridSize;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(centerX + i * gridSize * 15, h);
        ctx.stroke();
      }

      // Horizontal Pulses
      ctx.strokeStyle = "rgba(34, 211, 238, 0.08)";
      for (let i = 0; i < h; i += gridSize) {
        const y = (i + offset) % h;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
    };

    let offset = 0;
    const animate = () => {
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, w, h);

      offset = (offset + 1.2) % 100;
      drawGrid(offset);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-[#020617] overflow-hidden">
      {/* Neural Grid Layer */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
      />
      
      {/* Digital Fog / Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] pointer-events-none" />
      
      {/* Scanning Line */}
      <motion.div 
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[10vh] bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none opacity-40"
      />

      {/* Floating System Logs (Minimalist) */}
      <div className="absolute bottom-12 left-12 space-y-2 pointer-events-none hidden lg:block opacity-40">
        {[...Array(5)].map((_, i) => (
          <SystemLog key={i} delay={i * 2} />
        ))}
      </div>

      {/* Strategic Red Glows */}
      <div className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] bg-red-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-[20vw] h-[20vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Aesthetic Overlays */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise" />
    </div>
  );
};