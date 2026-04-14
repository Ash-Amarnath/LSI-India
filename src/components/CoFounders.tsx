import ashPhoto from "@/assets/ash.jpg";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Linkedin, Twitter, Mail, Instagram } from "lucide-react";

const founders = [
  {
    name: "Co-Founder Name",
    role: "Co-Founder & Strategy Lead",
    bio: "Passionate about bridging India's data gap. With a background in public policy and grassroots organizing, they lead LSI's vision to make every village count — literally. Driven by the belief that visibility is the first step to change.",
    quote: "If we can see it, we can change it.",
    image: ashPhoto,
    links: { linkedin: "#", instagram: "#", email: "mailto:founder1@lsi.org" },
  },
  {
    name: "Amarnath (Ash)",
    role: "Co-Founder",
    bio: "An interdisciplinary researcher, a Young India Fellow, and an Erasmus Mundus scholar. Growing up in rural Tamil Nadu without access to basic living standards — clean water, reliable electricity, quality healthcare — I witnessed how invisibility perpetuates inequality. Now leading LSI Initiative to change that narrative through data, ensuring every citizen has the dignity of basic living standards.",
    quote: "Rural India isn't invisible—it's just been measured wrong. LSI makes every village count.",
    image: ashPhoto,
    links: { linkedin: "www.linkedin.com/in/amarnath-amarnath", instagram: "https://www.instagram.com/_ash_garo_/", email: "mailto:ash_amar@outlook.com" },
  },
];

const CoFounders = () => {
  const [ref, inView] = useInView();

  return (
    <section id="team" ref={ref} className="py-24 bg-surface">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The People Behind LSI India
          </h2>
          <p className="text-muted-foreground text-lg">Student-led. Ground-driven. Purpose-built.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {/* Photo placeholder */}
              <div className="h-56 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 flex items-center justify-center relative overflow-hidden">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary/20 bg-background/80 z-10">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-full h-full object-cover"
                />
              </div>
                {/* Decorative blobs */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-accent/10 blur-xl" />
                <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-primary/10 blur-xl" />
              </div>

              <div className="p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">{f.name}</h3>
                <p className="text-accent font-semibold text-sm mb-4">{f.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{f.bio}</p>
                <blockquote className="text-sm italic text-primary border-l-2 border-primary/30 pl-3 mb-6">
                  "{f.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <a href={f.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href={f.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-accent transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href={f.links.email} aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoFounders;
