import { Monitor, Shirt, Dumbbell, UtensilsCrossed, Bitcoin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const categories = [
  { icon: Monitor, label: "Tech & Gadgets", count: "12.4k+", color: "from-primary/20 to-primary/5" },
  { icon: Shirt, label: "Fashion & Style", count: "45.2k+", color: "from-accent/20 to-accent/5" },
  { icon: Dumbbell, label: "Health & Fitness", count: "28.9k+", color: "from-primary/20 to-primary/5" },
  { icon: UtensilsCrossed, label: "Food & Travel", count: "18.1k+", color: "from-accent/20 to-accent/5" },
  { icon: Bitcoin, label: "Crypto & Web3", count: "5.6k+", color: "from-primary/20 to-primary/5" },
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
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Discover Top Creators
            </motion.span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance">
              Explore Creator <span className="text-gradient">Categories</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-xl">
              Segmented by niche, engagement rate, and audience demographics.
            </p>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary/80 gap-2 group/btn self-start md:self-auto">
            View all categories
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group cursor-pointer rounded-2xl glass-card p-6 hover:shadow-premium transition-all duration-500 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                >
                  <cat.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <p className="font-semibold text-card-foreground">{cat.label}</p>
                <p className="text-sm text-muted-foreground mt-1">{cat.count} Creators</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
