import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery/gallery-1.jpg.asset.json";
import gallery2 from "@/assets/gallery/gallery-2.jpg.asset.json";
import gallery3 from "@/assets/gallery/gallery-3.jpg.asset.json";
import gallery4 from "@/assets/gallery/gallery-4.jpg.asset.json";
import gallery5 from "@/assets/gallery/gallery-5.jpg.asset.json";
import gallery6 from "@/assets/gallery/gallery-6.jpg.asset.json";

const videos = [
  { id: "wtR1rCcejOU", title: "Max Mac Wedding Entertainment" },
  { id: "F3fuh8N5Tak", title: "Max Mac Performance" },
  { id: "KPCkL7lmwYE", title: "Max Mac Live" },
  { id: "Ota8OsuRf0Y", title: "Max Mac Short 1", short: true },
  { id: "WzJ6bXEctlM", title: "Max Mac Short 2", short: true },
];

const photos = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const WatchSection = () => {
  return (
    <section id="watch" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body tracking-[0.2em] uppercase text-sm mb-3">Watch</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">See Max in Action</h2>
          <div className="gold-divider mb-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className={`relative w-full overflow-hidden rounded-lg shadow-lg ${video.short ? "aspect-[9/16] max-w-[300px] mx-auto" : "aspect-video"}`}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={photo.url}
                alt={`Max Mac performing at a wedding — photo ${index + 1}`}
                className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatchSection;
