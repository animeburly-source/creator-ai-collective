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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Launch your first influencer campaign in four simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary flex items-center justify-center shadow-glow">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">{s.step}</span>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
