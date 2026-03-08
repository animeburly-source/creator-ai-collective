import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "CreatorOS cut our campaign launch time by 80%. The AI matching is incredibly accurate — we found perfect creators in minutes.",
    name: "Ananya Desai",
    role: "Marketing Head, FreshBrew",
    type: "Brand",
  },
  {
    quote: "Finally a platform that pays on time and helps me price my work fairly. My income doubled in 3 months.",
    name: "Carlos Martinez",
    role: "Fitness Creator, 1.2M followers",
    type: "Creator",
  },
  {
    quote: "Managing 50+ campaigns used to be chaos. Now our entire team runs everything from one dashboard.",
    name: "Lisa Wong",
    role: "CEO, InfluenceAgency",
    type: "Agency",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-28 bg-secondary/30">
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
            Testimonials
          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5">
            Loved by <span className="text-gradient">Thousands</span>
          </h2>
          <p className="text-muted-foreground text-lg">What our community says about CreatorOS</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl glass-card p-8 hover:shadow-premium transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-10 h-10 text-primary" />
              </div>
              
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-card-foreground text-sm leading-relaxed mb-6 relative z-10">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-card-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
