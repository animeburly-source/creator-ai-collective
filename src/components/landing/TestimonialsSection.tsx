import { Star } from "lucide-react";
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
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Loved by <span className="text-gradient">Thousands</span>
          </h2>
          <p className="text-muted-foreground text-lg">What our community says about CreatorOS</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8 shadow-card"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-card-foreground text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-card-foreground">{t.name}</p>
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
