import { motion } from "framer-motion";
import { Music, Mic, Disc3 } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Music,
    title: "Live Acoustic",
    href: "/wedding-acoustic-musician-sydney/",
    description: "Soulful guitar and vocals for your ceremony, canapé hour, and dinner — creating intimate, romantic moments guests will never forget.",
  },
  {
    icon: Disc3,
    title: "DJ Sets",
    href: "/wedding-dj-sydney/",
    description: "High-energy dance floor sets with a curated mix of classics and hits that keep every guest on their feet all night long.",
  },
  {
    icon: Mic,
    title: "MC Services",
    href: "/wedding-mc-sydney/",
    description: "Seamless hosting that keeps your reception flowing — from speeches to first dances — with natural charisma and professionalism.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-body tracking-[0.2em] uppercase text-sm mb-3">Services</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">One Artist, Every Moment</h2>
          <div className="gold-divider mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">{service.description}</p>
              <Link to={service.href} className="text-accent font-body text-sm uppercase tracking-wider hover:underline underline-offset-4">Learn more about {service.title}</Link>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 font-body text-muted-foreground">
          Planning your ceremony? See <Link to="/wedding-ceremony-music-sydney/" className="text-accent underline underline-offset-4">live wedding ceremony music</Link> or the <Link to="/sydney-wedding-singer-dj/" className="text-accent underline underline-offset-4">acoustic + DJ packages</Link>.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
