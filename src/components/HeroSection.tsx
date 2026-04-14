import { motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import lsiLogo from "@/assets/lsi-logo.png";

const GOOGLE_FORM_URL = "https://forms.gle/YOUR_FORM_ID_HERE";

const HeroSection = () => {
  const scrollToAbout = () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/8" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 container mx-auto px-6 text-center py-32">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex flex-col items-center gap-3"
        >
          <img src={lsiLogo} alt="LSI - Living Standards Initiative" className="h-28 sm:h-36" />
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            <span style={{ color: '#22c55e' }}>Living</span>{' '}
            <span style={{ color: '#f97316' }}>Standards</span>{' '}
            <span className="text-foreground">Initiative</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg font-medium tracking-wide">India Pilot</p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]"
        >
          Mapping What <br />
          <span className="relative inline-block">
            <span className="text-accent">Official Data</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -bottom-1 left-0 right-0 h-1 bg-accent/30 origin-left rounded-full"
            />
          </span>{" "}
          Forgets
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg mb-10 leading-relaxed"
        >
          India has 640,000+ villages — but most don't exist in any meaningful dataset. 
          We are a student-led initiative documenting real living conditions — electricity, 
          water, healthcare, education — village by village, because{" "}
          <span className="text-foreground font-semibold">if a place isn't visible, it can't be prioritized.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold text-base hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Join the Movement <ExternalLink size={16} />
          </a>
          <button
            onClick={scrollToAbout}
            className="px-8 py-3.5 rounded-xl border-2 border-primary text-primary font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Learn More
          </button>
        </motion.div>

        {/* Animated stats ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          {[
            { val: "640K+", label: "Villages in India" },
            { val: "14 yrs", label: "Since last Census" },
            { val: "3", label: "Pilot States" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-foreground">{s.val}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-label="Scroll down"
      >
        <ChevronDown className="animate-bounce-slow text-muted-foreground" size={28} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
