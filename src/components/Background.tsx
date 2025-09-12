// Background.tsx
import { motion } from "framer-motion";
import { useStore } from "zustand";
import { infoStore } from "../store/infoStore";

export const Background = () => {
  const { theme } = useStore(infoStore);

  const getColors = () => {
    if (theme === "night") {
      return { 
        primary: "#3b82f6",         // blue-500
        secondary: "#8b5cf6",       // violet-500
        accent: "#ec4899",          // pink-500
        grid: "rgba(59, 130, 246, 0.1)",
        glow: "rgba(59, 130, 246, 0.3)"
      };
    } else { // winter theme
      return { 
        primary: "#2563eb",         // blue-600
        secondary: "#7c3aed",       // violet-600
        accent: "#db2777",          // pink-600
        grid: "rgba(37, 99, 235, 0.1)",
        glow: "rgba(37, 99, 235, 0.3)"
      };
    }
  };
  
  const colors = getColors();
  
  // Circuito tecnologico
  const TechCircuit = () => (
    <svg width="100%" height="100%" className="absolute inset-0" preserveAspectRatio="none">
      <motion.path
        d="M0,100 C150,200 350,0 500,100 C700,250 800,50 1000,150 L1000,0 L0,0 Z"
        fill="none"
        stroke={colors.primary}
        strokeWidth="2"
        strokeDasharray="10 10"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.path
        d="M0,200 C300,50 400,250 600,150 C700,100 800,300 1000,200 L1000,0 L0,0 Z"
        fill="none"
        stroke={colors.secondary}
        strokeWidth="2"
        strokeDasharray="8 12"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 1 }}
      />
      <motion.path
        d="M0,300 C200,400 400,200 500,300 C650,450 750,150 1000,250 L1000,0 L0,0 Z"
        fill="none"
        stroke={colors.accent}
        strokeWidth="1.5"
        strokeDasharray="5 15"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
      />
    </svg>
  );

  // Nodo di rete
  const NetworkNode = ({ cx, cy, r, delay }: { cx: string, cy: string, r: number, delay: number }) => (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      fill={colors.primary}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay }}
    >
      <animate
        attributeName="r"
        values={`${r};${r+2};${r}`}
        dur="3s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.7;1;0.7"
        dur="2s"
        repeatCount="indefinite"
      />
    </motion.circle>
  );

  // Connessione dati
  const DataConnection = ({ fromX, fromY, toX, toY, delay }: { 
    fromX: string, fromY: string, toX: string, toY: string, delay: number 
  }) => (
    <motion.line
      x1={fromX}
      y1={fromY}
      x2={toX}
      y2={toY}
      stroke={colors.secondary}
      strokeWidth="1"
      strokeDasharray="4 4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="20"
        dur="2s"
        repeatCount="indefinite"
      />
    </motion.line>
  );

  // Particella di dati binari
  const BinaryParticle = ({ top, left, delay, content }: {
    top: string;
    left: string;
    delay: number;
    content: string;
  }) => (
    <motion.div
      className="font-mono text-xs opacity-80"
      style={{
        position: "absolute",
        top,
        left,
        color: theme === "night" ? "#3b82f6" : "#2563eb"
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: -20 }}
      transition={{ duration: 8, repeat: Infinity, delay }}
    >
      {content}
    </motion.div>
  );

  // Elemento esagonale (stile rete)
  const Hexagon = ({ size, top, left, delay }: {
    size: number;
    top: string;
    left: string;
    delay: number;
  }) => {
    const points = `
      ${size/2},0 
      ${size},${size*0.25} 
      ${size},${size*0.75} 
      ${size/2},${size} 
      0,${size*0.75} 
      0,${size*0.25}
    `;
    
    return (
      <motion.svg
        width={size}
        height={size}
        style={{
          position: "absolute",
          top,
          left,
        }}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 0.3, rotate: 0 }}
        transition={{ duration: 2, delay }}
      >
        <polygon
          points={points}
          fill="none"
          stroke={colors.primary}
          strokeWidth="1"
        />
      </motion.svg>
    );
  };

  // Effetto di scansione (radar)
  const RadarScan = () => (
    <motion.div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        width: "80vmax",
        height: "80vmax",
        borderRadius: "50%",
        border: `2px solid ${colors.secondary}`,
        opacity: 0.1,
      }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <TechCircuit />
      
      {/* Griglia tecnologica */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${colors.grid} 1px, transparent 1px),
            linear-gradient(to bottom, ${colors.grid} 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />
      
      {/* Nodi di rete e connessioni */}
      <svg width="100%" height="100%" className="absolute inset-0 opacity-60">
        <NetworkNode cx="20%" cy="30%" r={4} delay={0} />
        <NetworkNode cx="40%" cy="60%" r={5} delay={0.2} />
        <NetworkNode cx="70%" cy="40%" r={3} delay={0.4} />
        <NetworkNode cx="80%" cy="70%" r={4} delay={0.6} />
        <NetworkNode cx="50%" cy="20%" r={6} delay={0.8} />
        
        <DataConnection fromX="20%" fromY="30%" toX="40%" toY="60%" delay={0.5} />
        <DataConnection fromX="40%" fromY="60%" toX="70%" toY="40%" delay={0.7} />
        <DataConnection fromX="70%" fromY="40%" toX="80%" toY="70%" delay={0.9} />
        <DataConnection fromX="50%" fromY="20%" toX="20%" toY="30%" delay={1.1} />
        <DataConnection fromX="50%" fromY="20%" toX="70%" toY="40%" delay={1.3} />
      </svg>
      
      {/* Particelle di codice binario */}
      <BinaryParticle top="10%" left="15%" delay={0} content="01010101" />
      <BinaryParticle top="20%" left="75%" delay={2} content="11001100" />
      <BinaryParticle top="40%" left="25%" delay={4} content="10101010" />
      <BinaryParticle top="60%" left="65%" delay={1} content="00110011" />
      <BinaryParticle top="80%" left="45%" delay={3} content="11110000" />
      <BinaryParticle top="30%" left="55%" delay={5} content="01011010" />
      
      {/* Elementi esagonali (rete) */}
      <Hexagon size={80} top="10%" left="5%" delay={0} />
      <Hexagon size={60} top="70%" left="10%" delay={0.5} />
      <Hexagon size={100} top="30%" left="80%" delay={1} />
      <Hexagon size={70} top="80%" left="75%" delay={1.5} />
      <Hexagon size={90} top="50%" left="40%" delay={2} />
      
      {/* Effetto di scansione radar */}
      <RadarScan />
      
      {/* Punti di connessione luminosi */}
      <motion.div 
        className="absolute rounded-full"
        style={{
          width: "8px",
          height: "8px",
          top: "30%",
          left: "20%",
          background: colors.primary,
          boxShadow: `0 0 10px ${colors.glow}, 0 0 20px ${colors.glow}`,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute rounded-full"
        style={{
          width: "6px",
          height: "6px",
          top: "60%",
          left: "40%",
          background: colors.secondary,
          boxShadow: `0 0 8px ${colors.glow}, 0 0 16px ${colors.glow}`,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </div>
  );
};