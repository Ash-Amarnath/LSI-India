import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ExternalLink } from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.gle/YOUR_FORM_ID_HERE";

const VisionSection = () => {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-surface to-primary/5 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-sm uppercase tracking-widest text-primary font-semibold mb-6"
        >
          Our Vision
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
        >
          An India where no community is{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-accent">invisible</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-1 left-0 right-0 h-1 bg-accent/30 rounded-full origin-left"
            />
          </span>{" "}
          — where basic living standards are not a privilege, but a guarantee.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-lg text-muted-foreground mb-10"
        >
          Every village accounted for. Every family seen. Not just on paper — but in reality.
        </motion.p>

        <motion.a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
        >
          Be Part of the Change <ExternalLink size={18} />
        </motion.a>
      </div>
    </section>
  );
};

export default VisionSection;
