import { Gamepad2, Dumbbell, UtensilsCrossed, Plane, Shirt, Music, Monitor, Drama, Laugh, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { icon: Gamepad2, label: "Gamers", count: "45K", color: "from-violet-500 to-purple-600" },
  { icon: Dumbbell, label: "Fitness", count: "38K", color: "from-emerald-500 to-teal-600" },
  { icon: UtensilsCrossed, label: "Food", count: "52K", color: "from-orange-500 to-red-500" },
  { icon: Plane, label: "Travel", count: "29K", color: "from-sky-500 to-blue-600" },
  { icon: Shirt, label: "Fashion", count: "61K", color: "from-pink-500 to-rose-600" },
  { icon: Music, label: "Music", count: "33K", color: "from-amber-500 to-orange-500" },
  { icon: Monitor, label: "Tech", count: "27K", color: "from-cyan-500 to-blue-500" },
  { icon: Drama, label: "Dance", count: "22K", color: "from-fuchsia-500 to-pink-500" },
  { icon: Laugh, label: "Comedy", count: "41K", color: "from-yellow-500 to-amber-500" },
  { icon: Sparkles, label: "Beauty", count: "55K", color: "from-rose-400 to-pink-500" },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer rounded-xl border border-border bg-card p-6 text-center shadow-card hover:shadow-glow transition-all duration-300"
            >
              <div className={`w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-lg`}>
                <cat.icon className="w-7 h-7 text-white" />
              </div>
              <p className="font-display font-semibold text-card-foreground">{cat.label}</p>
              <p className="text-sm text-muted-foreground mt-1">{cat.count} creators</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
