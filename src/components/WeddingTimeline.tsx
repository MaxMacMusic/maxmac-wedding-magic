import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Music, Wine, UtensilsCrossed, Mic, Disc3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Music, time: "Ceremony", title: "Live ceremony music & aisle songs", text: "Acoustic guitar and vocals as guests arrive, your walk down the aisle, the signing and your exit — including up to three songs of your choice learnt for the occasion." },
  { icon: Wine, time: "Canapés", title: "Acoustic cocktail hour", text: "Relaxed live acoustic sets while guests mingle, enjoy canapés and you're away having photos." },
  { icon: UtensilsCrossed, time: "Dinner", title: "Relaxed live dinner music", text: "Optional live acoustic music through dinner, kept at a level that lets conversation flow." },
  { icon: Mic, time: "Formalities", title: "Optional MC duties", text: "Add MC services and Max introduces the bridal party, runs speeches and keeps formalities on schedule." },
  { icon: Disc3, time: "Reception", title: "DJ & dancing", text: "Max switches to DJ mode for your first dance and a dance floor built around your music taste and requests." },
];

const WeddingTimeline = ({ heading = "One Artist, Your Whole Wedding Day" }: { heading?: string }) => (
  <section className="section-padding bg-charcoal">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-gold-light font-body tracking-[0.2em] uppercase text-sm mb-3">Signature Acoustic + DJ Package</p>
        <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">{heading}</h2>
        <div className="gold-divider mb-6" />
        <p className="text-cream/70 font-body max-w-2xl mx-auto leading-relaxed">
          Book one professional entertainer for live ceremony music, canapés, dinner, DJ entertainment and optional MC — one contact, one setup and a soundtrack that flows from "I do" to the last dance.
        </p>
      </div>
      <ol className="relative border-l border-gold/40 ml-4 md:ml-0 md:border-l-0 md:grid md:grid-cols-5 md:gap-6">
        {steps.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative mb-10 ml-8 md:ml-0 md:text-center"
          >
            <span className="absolute -left-[3.25rem] top-0 md:static md:mx-auto md:mb-4 flex w-10 h-10 rounded-full bg-accent text-accent-foreground items-center justify-center">
              <s.icon className="w-5 h-5" aria-hidden="true" />
            </span>
            <p className="text-gold-light font-body uppercase tracking-widest text-xs mb-1">{i + 1}. {s.time}</p>
            <h3 className="font-display text-lg text-cream mb-2">{s.title}</h3>
            <p className="text-cream/60 font-body text-sm leading-relaxed">{s.text}</p>
          </motion.li>
        ))}
      </ol>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold font-body tracking-wider uppercase text-sm px-10 py-6">
          <Link to="/sydney-wedding-singer-dj/">Explore Acoustic + DJ Packages</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-cream/40 bg-cream/10 text-cream hover:bg-cream/10 hover:text-cream font-body tracking-wider uppercase text-sm px-10 py-6">
          <Link to="/booking">Check Your Wedding Date</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default WeddingTimeline;
