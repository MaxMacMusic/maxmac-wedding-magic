import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-charcoal text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="font-display text-4xl md:text-5xl text-cream mb-6">
          Let's Make Your Day Unforgettable
        </h2>
        <p className="text-cream/70 font-body text-lg mb-10 leading-relaxed">
          2026 weekends are booking fast. Get in touch for a free consultation and personalised quote.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold font-body tracking-wider uppercase text-sm px-12 py-6">
          <Link to="/booking">Enquire Now</Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default CTASection;
