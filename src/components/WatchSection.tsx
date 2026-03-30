import { motion } from "framer-motion";

const videos = [
  { id: "F3fuh8N5Tak", title: "Max Mac Performance" },
  { id: "KPCkL7lmwYE", title: "Max Mac Live" },
  { id: "Ota8OsuRf0Y", title: "Max Mac Short 1", short: true },
  { id: "WzJ6bXEctlM", title: "Max Mac Short 2", short: true },
];

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
      </div>
    </section>
  );
};

export default WatchSection;
