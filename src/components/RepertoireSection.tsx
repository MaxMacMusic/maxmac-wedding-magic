import { motion } from "framer-motion";
import djImg from "@/assets/performance-dj.jpg";

const acousticSongs = [
  "All You Need Is Love – The Beatles",
  "L-O-V-E – Nat King Cole",
  "To Make You Feel My Love – Adele",
  "At Last – Etta James",
  "Until I Found You – Stephen Sanchez",
  "Can't Help Falling in Love – Elvis Presley",
  "The Way You Look Tonight – Frank Sinatra",
  "What A Wonderful World – Louis Armstrong",
  "Banana Pancakes – Jack Johnson",
  "As It Was – Harry Styles",
];

const djSongs = [
  "Dancing Queen – ABBA",
  "Levitating – Dua Lipa",
  "I Wanna Dance With Somebody – Whitney Houston",
  "Uptown Funk – Bruno Mars",
  "Mr Brightside – The Killers",
  "Let's Groove – Earth Wind & Fire",
  "Crazy In Love – Beyoncé",
  "HOTTOGO – Chappell Roan",
  "Wannabe – Spice Girls",
  "We Found Love – Rihanna",
];

const RepertoireSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body tracking-[0.2em] uppercase text-sm mb-3">Repertoire</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">A Song for Every Moment</h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted-foreground font-body max-w-xl mx-auto">Plus, Max is always happy to learn your special requests for the ceremony and key moments.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl text-foreground mb-6">Acoustic & Dinner</h3>
            <ul className="space-y-3">
              {acousticSongs.map(song => (
                <li key={song} className="text-muted-foreground font-body text-sm flex items-start gap-2">
                  <span className="text-gold mt-1">♪</span>
                  {song}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <img
              src={djImg}
              alt="Max Mac performing at a wedding reception"
              className="rounded-xl shadow-lg w-full object-cover aspect-[3/4]"
              loading="lazy"
              width={800}
              height={1000}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl text-foreground mb-6">Dance Floor Hits</h3>
            <ul className="space-y-3">
              {djSongs.map(song => (
                <li key={song} className="text-muted-foreground font-body text-sm flex items-start gap-2">
                  <span className="text-gold mt-1">♪</span>
                  {song}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RepertoireSection;
