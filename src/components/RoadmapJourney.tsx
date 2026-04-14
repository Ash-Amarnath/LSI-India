import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { X } from "lucide-react";

const stages = [
  {
    stage: "Stage 1",
    title: "Laying the Foundation",
    status: "active" as const,
    period: "2026",
    emoji: "🏗️",
    details: [
      "Recruiting initial volunteer network (target: 500 across 10 states)",
      "Building the data collection framework",
      "Piloting in 3 states: Haryana, UP, Rajasthan",
      "Setting up the data submission pipeline",
      "Launching this website",
    ],
  },
  {
    stage: "Stage 2",
    title: "First Mapping Wave",
    status: "upcoming" as const,
    period: "Q3 2026",
    emoji: "🗺️",
    details: [
      "1,000+ villages documented",
      "First public data release",
      "Partnership outreach to NGOs and state governments",
      "Refine survey tool based on Stage 1 learnings",
    ],
  },
  {
    stage: "Stage 3",
    title: "National Coverage",
    status: "future" as const,
    period: "2027",
    emoji: "🇮🇳",
    details: [
      "Expand to 20+ states",
      "Interactive public dashboard live",
      "Policy brief submissions to state governments",
      "Academic partnerships for data validation",
    ],
  },
  {
    stage: "Stage 4",
    title: "Institutional Impact",
    status: "future" as const,
    period: "2028+",
    emoji: "🏛️",
    details: [
      "Government data cites LSI findings",
      "10,000+ villages mapped",
      "Annual India Village Living Standards Report",
      "LSI data integrated into NGO planning tools",
    ],
  },
];

const Tree = ({ x, y, scale = 1, variant = 0 }: { x: number; y: number; scale?: number; variant?: number }) => {
  const colors = [
    { trunk: "hsl(25, 50%, 35%)", canopy: "hsl(140, 45%, 40%)", canopy2: "hsl(145, 50%, 35%)" },
    { trunk: "hsl(20, 45%, 30%)", canopy: "hsl(130, 50%, 45%)", canopy2: "hsl(135, 45%, 38%)" },
    { trunk: "hsl(30, 55%, 32%)", canopy: "hsl(150, 40%, 42%)", canopy2: "hsl(155, 45%, 36%)" },
  ];
  const c = colors[variant % 3];
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`}>
      <rect x="-3" y="-5" width="6" height="18" rx="2" fill={c.trunk} />
      <ellipse cx="0" cy="-12" rx="14" ry="16" fill={c.canopy} />
      <ellipse cx="-5" cy="-8" rx="10" ry="12" fill={c.canopy2} />
      <ellipse cx="6" cy="-10" rx="9" ry="11" fill={c.canopy} opacity="0.8" />
    </g>
  );
};

const Bush = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) => (
  <g transform={`translate(${x},${y}) scale(${scale})`}>
    <ellipse cx="0" cy="0" rx="12" ry="8" fill="hsl(135, 40%, 38%)" />
    <ellipse cx="-6" cy="-2" rx="8" ry="6" fill="hsl(140, 45%, 42%)" />
    <ellipse cx="7" cy="-1" rx="7" ry="5" fill="hsl(130, 42%, 40%)" />
  </g>
);

const Flower = ({ x, y }: { x: number; y: number }) => (
  <g transform={`translate(${x},${y})`}>
    <circle cx="0" cy="0" r="2.5" fill="hsl(var(--accent))" />
    <circle cx="-3" cy="-1" r="2" fill="hsl(340, 60%, 65%)" />
    <circle cx="3" cy="-1" r="2" fill="hsl(340, 60%, 65%)" />
    <circle cx="0" cy="-3" r="2" fill="hsl(350, 55%, 70%)" />
  </g>
);

const RoadmapJourney = () => {
  const [ref, inView] = useInView();
  const [selected, setSelected] = useState<number | null>(null);

  // Card positions - alternating above/below road, well away
  // above = card above road, below = card below road
  const cardData = [
    { roadX: 80, roadY: 515, cardX: 10, cardY: 320, side: "above" as const },
    { roadX: 290, roadY: 390, cardX: 220, cardY: 440, side: "below" as const },
    { roadX: 530, roadY: 270, cardX: 460, cardY: 100, side: "above" as const },
    { roadX: 780, roadY: 150, cardX: 700, cardY: 200, side: "below" as const },
  ];

  const cardColors = [
    "bg-[hsl(140,40%,95%)] border-[hsl(140,45%,60%)]",  // soft green
    "bg-[hsl(35,70%,94%)] border-[hsl(35,65%,55%)]",    // warm amber
    "bg-[hsl(210,50%,94%)] border-[hsl(210,55%,60%)]",  // sky blue
    "bg-[hsl(280,40%,94%)] border-[hsl(280,45%,60%)]",  // soft purple
  ];

  return (
    <section id="roadmap" ref={ref} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-8"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Road Ahead
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every great journey starts with a single step. Here's where we are — and where we're headed.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            We are here → Stage 1
          </div>
        </motion.div>

        {/* Desktop curvy river road */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <svg viewBox="0 0 900 600" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="riverGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="hsl(200, 60%, 55%)" />
                  <stop offset="50%" stopColor="hsl(190, 55%, 50%)" />
                  <stop offset="100%" stopColor="hsl(180, 50%, 45%)" />
                </linearGradient>
                <linearGradient id="roadGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="hsl(25, 30%, 45%)" />
                  <stop offset="100%" stopColor="hsl(30, 25%, 40%)" />
                </linearGradient>
                <marker id="arrowHead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                  <path d="M0,0 L8,3 L0,6 Z" fill="hsl(var(--border))" />
                </marker>
              </defs>

              {/* Background hills */}
              <ellipse cx="150" cy="580" rx="250" ry="120" fill="hsl(120, 25%, 82%)" opacity="0.4" />
              <ellipse cx="500" cy="590" rx="300" ry="130" fill="hsl(125, 22%, 78%)" opacity="0.35" />
              <ellipse cx="780" cy="585" rx="220" ry="110" fill="hsl(118, 28%, 80%)" opacity="0.4" />

              {/* River alongside road */}
              <path
                d="M -20,530 C 80,530 100,440 200,420 S 350,350 420,340 S 530,280 600,260 S 720,180 820,160 S 920,120 960,100"
                fill="none" stroke="url(#riverGrad)" strokeWidth="22" strokeLinecap="round" opacity="0.35"
              />
              <path
                d="M -20,530 C 80,530 100,440 200,420 S 350,350 420,340 S 530,280 600,260 S 720,180 820,160 S 920,120 960,100"
                fill="none" stroke="hsl(195, 60%, 70%)" strokeWidth="8" strokeLinecap="round" opacity="0.2" strokeDasharray="3,12"
              >
                <animate attributeName="stroke-dashoffset" values="0;-30" dur="3s" repeatCount="indefinite" />
              </path>

              {/* Road shadow */}
              <path
                d="M 30,520 C 100,520 130,430 230,400 S 380,320 450,310 S 560,240 640,230 S 760,150 850,130"
                fill="none" stroke="hsl(var(--border))" strokeWidth="52" strokeLinecap="round" opacity="0.25"
              />
              {/* Road edge */}
              <path
                d="M 30,520 C 100,520 130,430 230,400 S 380,320 450,310 S 560,240 640,230 S 760,150 850,130"
                fill="none" stroke="hsl(40, 30%, 60%)" strokeWidth="44" strokeLinecap="round" opacity="0.3"
              />
              {/* Road fill */}
              <path
                d="M 30,520 C 100,520 130,430 230,400 S 380,320 450,310 S 560,240 640,230 S 760,150 850,130"
                fill="none" stroke="url(#roadGrad)" strokeWidth="38" strokeLinecap="round"
              />
              {/* Road dashes */}
              <path
                d="M 30,520 C 100,520 130,430 230,400 S 380,320 450,310 S 560,240 640,230 S 760,150 850,130"
                fill="none" stroke="hsl(45, 70%, 75%)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="14,20" opacity="0.7"
              />
              {/* Progress glow */}
              <motion.path
                d="M 30,520 C 100,520 130,430 230,400"
                fill="none" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round"
                initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ duration: 2, delay: 0.5 }} opacity="0.8"
              />

              {/* Trees - left of road */}
              <Tree x={55} y={480} scale={0.9} variant={0} />
              <Tree x={20} y={500} scale={0.7} variant={1} />
              <Tree x={140} y={430} scale={0.85} variant={0} />
              <Tree x={260} y={370} scale={0.9} variant={2} />
              <Tree x={370} y={310} scale={0.8} variant={1} />
              <Tree x={490} y={260} scale={0.85} variant={0} />
              <Tree x={610} y={215} scale={0.6} variant={2} />
              <Tree x={740} y={155} scale={0.65} variant={1} />

              {/* Trees - right of road */}
              <Tree x={180} y={445} scale={0.75} variant={0} />
              <Tree x={300} y={420} scale={0.9} variant={1} />
              <Tree x={510} y={330} scale={0.8} variant={0} />
              <Tree x={700} y={250} scale={0.85} variant={2} />
              <Tree x={860} y={160} scale={0.9} variant={1} />

              {/* Bushes */}
              <Bush x={50} y={540} scale={0.8} />
              <Bush x={220} y={415} scale={0.9} />
              <Bush x={470} y={305} scale={0.8} />
              <Bush x={650} y={240} scale={0.9} />
              <Bush x={830} y={145} scale={0.7} />

              {/* Flowers */}
              <Flower x={75} y={548} />
              <Flower x={350} y={355} />
              <Flower x={630} y={245} />

              {/* Milestone dots on road + arrows to cards */}
              {cardData.map((m, i) => {
                const stage = stages[i];
                const isActive = stage.status === "active";

                return (
                  <g key={i}>
                    {/* Arrow from card to road dot */}
                    <line
                      x1={m.cardX + 100}
                      y1={m.side === "above" ? m.cardY + 90 : m.cardY}
                      x2={m.roadX}
                      y2={m.side === "above" ? m.roadY - 15 : m.roadY + 15}
                      stroke="hsl(var(--border))"
                      strokeWidth="1.5"
                      strokeDasharray="6,4"
                      markerEnd="url(#arrowHead)"
                      opacity="0.6"
                    />

                    {/* Pulse for active */}
                    {isActive && (
                      <circle cx={m.roadX} cy={m.roadY} r="16" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.3">
                        <animate attributeName="r" values="12;24;12" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
                      </circle>
                    )}

                    {/* Road dot */}
                    <circle
                      cx={m.roadX} cy={m.roadY} r="10"
                      fill={isActive ? "hsl(var(--primary))" : stage.status === "upcoming" ? "hsl(var(--accent))" : "hsl(var(--muted))"}
                      stroke="hsl(var(--background))" strokeWidth="3"
                    />

                    {/* Card - opaque, colored, alternating above/below */}
                    <foreignObject x={m.cardX} y={m.cardY} width="200" height="90">
                      <div
                        onClick={() => setSelected(i)}
                        className={`cursor-pointer rounded-xl p-4 border-2 text-center transition-all hover:scale-105 hover:shadow-xl shadow-md ${cardColors[i]}`}
                      >
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <span className="text-xl">{stage.emoji}</span>
                          <p className="font-display font-bold text-foreground text-sm leading-tight">{stage.title}</p>
                        </div>
                        <p className={`text-xs font-semibold ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                          {stage.period} · Click for details
                        </p>
                      </div>
                    </foreignObject>
                  </g>
                );
              })}

              {/* Location pin */}
              <motion.g initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 2 }}>
                <text x={72} y={505} fontSize="22">📍</text>
              </motion.g>

              {/* Birds */}
              <motion.g initial={{ x: -50 }} animate={{ x: 950 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                <path d="M0,60 Q5,55 10,60 Q15,55 20,60" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" opacity="0.3" />
              </motion.g>
              <motion.g initial={{ x: -100 }} animate={{ x: 950 }} transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}>
                <path d="M0,90 Q4,86 8,90 Q12,86 16,90" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.2" opacity="0.25" />
              </motion.g>
            </svg>
          </motion.div>
        </div>

        {/* Mobile: vertical forest road */}
        <div className="md:hidden space-y-0 relative mt-8">
          <div className="absolute left-6 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary via-accent to-muted rounded-full" />

          {stages.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="relative pl-14 pb-10"
            >
              <div className={`absolute left-[18px] top-1 w-5 h-5 rounded-full border-2 border-background ${
                s.status === "active" ? "bg-primary" : s.status === "upcoming" ? "bg-accent" : "bg-muted"
              }`} />
              {i < stages.length - 1 && (
                <span className="absolute left-[22px] top-7 text-[10px] text-muted-foreground/40">🌿</span>
              )}

              <div
                onClick={() => setSelected(i)}
                className={`cursor-pointer rounded-xl p-5 border transition-all hover:shadow-md ${
                  s.status === "active" ? "bg-primary/10 border-primary/30" : "bg-card border-border"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{s.emoji}</span>
                  <span className="font-display font-bold text-foreground">{s.title}</span>
                </div>
                <span className={`text-xs font-semibold ${s.status === "active" ? "text-primary" : "text-muted-foreground"}`}>
                  {s.period}
                </span>
                <p className="text-muted-foreground text-sm mt-2">Tap to learn more →</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail modal */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/30 backdrop-blur-sm p-6"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card border border-border rounded-2xl p-8 max-w-lg w-full shadow-2xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-3xl mr-2">{stages[selected].emoji}</span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      stages[selected].status === "active"
                        ? "bg-primary/10 text-primary"
                        : stages[selected].status === "upcoming"
                        ? "bg-accent/10 text-accent"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {stages[selected].period}
                    </span>
                  </div>
                  <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground transition-colors">
                    <X size={20} />
                  </button>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                  {stages[selected].stage}: {stages[selected].title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {stages[selected].details.map((d, j) => (
                    <li key={j} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RoadmapJourney;
