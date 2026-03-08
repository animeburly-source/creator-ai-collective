import { Gamepad2, Dumbbell, UtensilsCrossed, Plane, Shirt, Music, Monitor, Drama, Laugh, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { icon: Gamepad2, label: "Gamers", count: "45K" },
  { icon: Dumbbell, label: "Fitness", count: "38K" },
  { icon: UtensilsCrossed, label: "Food", count: "52K" },
  { icon: Plane, label: "Travel", count: "29K" },
  { icon: Shirt, label: "Fashion", count: "61K" },
  { icon: Music, label: "Music", count: "33K" },
  { icon: Monitor, label: "Tech", count: "27K" },
  { icon: Drama, label: "Dance", count: "22K" },
  { icon: Laugh, label: "Comedy", count: "41K" },
  { icon: Sparkles, label: "Beauty", count: "55K" },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-28 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Browse Categories
          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5 text-balance">
            Explore Creator <span className="text-gradient">Categories</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse thousands of verified creators across every niche and platform
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group cursor-pointer rounded-2xl glass-card p-6 text-center hover:shadow-premium transition-all duration-500"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
              >
                <cat.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <p className="font-semibold text-card-foreground">{cat.label}</p>
              <p className="text-sm text-muted-foreground mt-1">{cat.count} creators</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
