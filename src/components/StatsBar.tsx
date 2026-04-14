import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { motion } from "framer-motion";

const stats = [
  { value: 640000, suffix: "+", label: "Villages in India" },
  { value: 25, suffix: "%", label: "Lack reliable electricity" },
  { value: 162, suffix: "M", label: "Without clean water" },
  { value: 33, suffix: "%", label: "Rural health centers understaffed", prefix: "1 in " },
  { value: 60, suffix: "%+", label: "Census data is 10+ years old" },
];

const StatItem = ({ stat, inView, index }: { stat: typeof stats[0]; inView: boolean; index: number }) => {
  const count = useCountUp(stat.value, 1500, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center px-4 py-6"
    >
      <div className="text-2xl sm:text-3xl font-bold text-accent font-mono tabular-nums">
        {stat.prefix || ""}{count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
    </motion.div>
  );
};

const StatsBar = () => {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="bg-surface border-y border-border">
      <div className="container mx-auto px-6 py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((stat, i) => (
          <StatItem key={i} stat={stat} inView={inView} index={i} />
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
