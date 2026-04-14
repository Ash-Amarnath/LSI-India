import { MapPin, Layers, Megaphone, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const pillars = [
  {
    icon: Users,
    title: "Volunteer-Powered",
    desc: "Hundreds of student volunteers across India — trained, equipped, and motivated to document their own regions.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: MapPin,
    title: "Ground Data Collection",
    desc: "Real data on electricity, water, healthcare, education, roads, and connectivity — collected at the village level.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Layers,
    title: "Open Data Platform",
    desc: "All findings are published freely. Interactive maps, downloadable datasets, and policy briefs — for everyone.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Megaphone,
    title: "Advocacy & Accountability",
    desc: "We don't just collect data — we push it to the people who can act on it. Governments, NGOs, media, and citizens.",
    color: "bg-accent/10 text-accent",
  },
];

const WhatWeDo = () => {
  const [ref, inView] = useInView();

  return (
    <section id="pillars" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How We Make the Invisible <span className="text-primary">Visible</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A simple but powerful model: students document, data gets published, change follows.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="relative bg-card rounded-2xl p-7 border border-border hover:border-primary/30 transition-all group overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <div className={`w-12 h-12 rounded-xl ${p.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <p.icon size={24} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
