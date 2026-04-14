import { motion } from "framer-motion";
import { Mail, Phone, Instagram, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/919999999999",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@lsi.initiative",
    href: "https://instagram.com/lsi.initiative",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Mail,
    label: "Email",
    value: "lsi.initiative@gmail.com",
    href: "mailto:lsi.initiative@gmail.com",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Let's <span className="text-accent">Connect</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Whether you want to volunteer, partner, or simply learn more — we'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border p-8 text-center hover:border-primary/40 hover:shadow-lg transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl ${c.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <c.icon className={c.color} size={26} />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1">{c.label}</h3>
                <p className="text-muted-foreground text-sm">{c.value}</p>
                <ArrowRight className="mx-auto mt-3 text-muted-foreground group-hover:text-primary transition-colors" size={16} />
              </motion.a>
            ))}
          </div>

          {/* FAQ-style section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card border border-border rounded-2xl p-8 sm:p-12 text-center"
          >
            <MapPin className="mx-auto text-accent mb-4" size={32} />
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Based Across India</h3>
            <p className="text-muted-foreground max-w-lg mx-auto mb-6">
              LSI is a distributed initiative. Our co-founders and volunteers operate from multiple states.
              We work remotely and on the ground — wherever the data takes us.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
