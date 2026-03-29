import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How does the day work in terms of music?",
    a: "I play acoustic guitar and vocals for the first half of the wedding (including ceremony, canapés and dinner sets) and then kick into full DJ mode for the dance floor!",
  },
  {
    q: "Can we choose our own songs for the Ceremony?",
    a: "Yes! I'm more than happy to learn 3 songs of your choice for the processional, signing of the register, and exit.",
  },
  {
    q: "What songs do you need from us?",
    a: "Ceremony: Processional, Signing the Register, and Recessional. Reception: Entering Song, Cake Song, First Dance, Father/Daughter Dance (optional), Bouquet & Garter Songs (optional), and Leaving Song(s).",
  },
  {
    q: "Do you travel for weddings?",
    a: "Absolutely — I've performed at weddings across Australia and internationally including NZ, Europe, USA, and the UK.",
  },
  {
    q: "What do you need for a quote?",
    a: "Just your ceremony & reception addresses, services required (Ceremony, Reception, Acoustic, DJ, MC), date of the wedding, and any additional details.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-accent font-body tracking-[0.2em] uppercase text-sm mb-3">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Common Questions</h2>
          <div className="gold-divider mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-secondary rounded-lg px-6 border-none">
                <AccordionTrigger className="font-display text-lg text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5">
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
