import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    text: "Max was amazing! He performed live during the ceremony, then created such a fun and lively dance floor as the DJ! Our guests have raved about the fun vibes!",
    name: "Amy R.",
    date: "March 2026",
  },
  {
    text: "We were absolutely blown away by Max at our wedding. His voice was nothing short of incredible — effortlessly captivating and powerful. Completely unforgettable!",
    name: "Georgia L.",
    date: "December 2025",
  },
  {
    text: "Max was a delight to work with, laid back easy going, however punctual and attentive to requests. His acoustic set was amazing! Would highly recommend!",
    name: "Calum C.",
    date: "March 2026",
  },
  {
    text: "Max absolutely nailed our ceremony songs and kept the vibes going from cocktail hour all the way through to the last song. The dance floor was pumping all night!",
    name: "Megan S.",
    date: "November 2025",
  },
];

const ReviewsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-accent font-body tracking-[0.2em] uppercase text-sm mb-3">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">What Couples Say</h2>
          <div className="gold-divider mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-xl p-8 relative"
            >
              <Quote className="w-8 h-8 text-gold-light/40 mb-4" />
              <p className="text-foreground font-body leading-relaxed mb-6 italic">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-display text-lg text-foreground">{review.name}</span>
                <span className="text-muted-foreground text-sm font-body">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
