import { PenLine, UserSearch, MessageSquare, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: PenLine, step: "01", title: "Create Campaign", desc: "Define goals, budget, timeline, and target audience for your campaign." },
  { icon: UserSearch, step: "02", title: "Find Creators", desc: "AI matches you with the perfect creators based on audience and niche." },
  { icon: MessageSquare, step: "03", title: "Collaborate", desc: "Negotiate, approve content, and manage deliverables in one place." },
  { icon: TrendingUp, step: "04", title: "Track Results", desc: "Monitor performance with real-time analytics and ROI tracking." },
];

const HowItWorksSection = () => {
  return (
    <section className="py-28 relative">
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
            Simple Process
          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Launch your first influencer campaign in four simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-primary via-accent to-primary origin-left"
            />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="relative text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary flex items-center justify-center shadow-glow group-hover:shadow-premium transition-shadow duration-500"
              >
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-2 block">{s.step}</span>
              <h3 className="text-lg font-bold mb-2 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
