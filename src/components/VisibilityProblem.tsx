import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { AlertTriangle, Clock, BarChart3, Eye } from "lucide-react";

const crisisPoints = [
  {
    icon: Clock,
    stat: "14 Years",
    title: "Since Last Census",
    desc: "India's last full Census was in 2011. An entire generation has grown up uncounted.",
  },
  {
    icon: BarChart3,
    stat: "40%",
    title: "Habitations Missed",
    desc: "Rural data collection misses 40% of habitations smaller than 500 people. They simply don't exist in planning documents.",
  },
  {
    icon: AlertTriangle,
    stat: "₹ Crores",
    title: "Misallocated Funds",
    desc: "Development funds are allocated based on census projections — not current ground reality. Money goes where data points, not where people live.",
  },
  {
    icon: Eye,
    stat: "Zero",
    title: "Real-Time Visibility",
    desc: "There is no freely accessible, village-level, student-verified dataset on basic living standards in India. We're changing that.",
  },
];

const VisibilityProblem = () => {
  const [ref, inView] = useInView();

  return (
    <section id="about" ref={ref} className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Problem We Can't Ignore
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Governments, NGOs, and institutions rely on data to make decisions. 
            But the data they rely on is{" "}
            <span className="text-accent font-semibold">incomplete, outdated, or inaccurate</span>. 
            If a place is not visible in any dataset, it simply cannot be prioritized for development. 
            Millions of people live in this data shadow.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {crisisPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <point.icon className="text-accent" size={20} />
                </div>
                <span className="font-mono text-2xl font-bold text-accent">{point.stat}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisibilityProblem;
