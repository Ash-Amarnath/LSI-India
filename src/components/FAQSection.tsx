import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is LSI?", a: "LSI (Living Standard of India) is a student-led initiative that documents real living conditions across Indian villages — electricity, water, education, healthcare — to fill the gaps official data misses." },
  { q: "Do I need prior experience to join?", a: "No. We provide full training. You need curiosity and access to a local area." },
  { q: "How much time does volunteering require?", a: "As little as 2-3 hours per week. Field visits are optional; you can contribute remotely." },
  { q: "Is LSI a registered organization?", a: "We are a student-led initiative. Registration as a formal organization is in progress." },
  { q: "How is the collected data used?", a: "Data is cleaned, verified, and published on our public map. It's never sold or shared with private entities." },
  { q: "What areas are you currently active in?", a: "We are in Stage 1, actively recruiting across India. Haryana, UP, and Rajasthan are our pilot zones." },
  { q: "Can institutions partner with LSI?", a: "Absolutely! Universities, NGOs, and government bodies can collaborate on data validation, expand our reach, or use our findings. Reach out via the Contact page." },
  { q: "What data do you collect exactly?", a: "Electricity availability, water sources, road access, distance to healthcare, school conditions, mobile network coverage, and more." },
];

const FAQSection = () => {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-foreground hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
