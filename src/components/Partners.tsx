import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Link } from "react-router-dom";

const Partners = () => {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="py-20 bg-surface">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Institutional Partners Welcome
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            We're open to collaborations with universities, NGOs, research institutions, and government bodies 
            who believe in the power of open, ground-level data.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          {["Your University", "Your NGO", "Your Institution", "Your Research Lab"].map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="w-44 h-20 rounded-xl border-2 border-dashed border-border flex items-center justify-center text-text-faint text-sm font-medium hover:border-primary/30 transition-colors"
            >
              {name}
            </motion.div>
          ))}
        </div>

        <Link
          to="/contact"
          className="inline-flex px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          Partner with Us
        </Link>
      </div>
    </section>
  );
};

export default Partners;
