import { motion } from "framer-motion";
import acousticImg from "@/assets/acoustic-ceremony.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={acousticImg}
            alt="Max Mac performing acoustic guitar at a ceremony"
            className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
            loading="lazy"
            width={800}
            height={600}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-body tracking-[0.2em] uppercase text-sm mb-3">About</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Your Day, Your Soundtrack
          </h2>
          <div className="gold-divider !mx-0 mb-8" />
          <div className="space-y-5 text-muted-foreground font-body leading-relaxed">
            <p>
              Max Mac is a versatile and soulful performer who brings warmth, energy, and professionalism to every wedding. Offering live vocals, DJ sets, and the option to MC, he creates a music experience that feels personal to your style and story.
            </p>
            <p>
              From a gentle acoustic song as you walk down the aisle to a high-energy mix that keeps the dance floor buzzing, Max knows how to set the right mood for every moment of your celebration.
            </p>
            <p>
              With the flexibility to move seamlessly between live music, DJ sets, and MC duties, Max helps your wedding flow with ease. His vibrant personality and years of experience mean the planning process is stress-free.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-muted-foreground font-body text-sm">5.0 from 18 reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
