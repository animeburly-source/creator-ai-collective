import { Search, MessageSquare, BarChart3, CheckCircle2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const agents = [
  {
    icon: Search,
    title: "Discovery Agent",
    description: "Scans millions of profiles to find the perfect brand fit using neural sentiment analysis.",
    features: ["Fake follower detection", "Audience overlap check"],
    accent: "primary",
  },
  {
    icon: MessageSquare,
    title: "Outreach Agent",
    description: "Sends personalized, context-aware proposals that get 4x higher response rates than templates.",
    features: ["Automated follow-ups", "Contract negotiation"],
    accent: "accent",
  },
  {
    icon: BarChart3,
    title: "Analytics Agent",
    description: "Tracks every click and conversion in real-time. Predicts campaign ROI before you spend a dime.",
    features: ["Multi-touch attribution", "Content performance score"],
    accent: "primary",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-28 bg-secondary/30 relative">
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
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4"
          >
            Your Personal AI Marketing Team
          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5 text-balance">
            Delegate to <span className="text-gradient">AI Agents</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized AI agents that work 24/7 to scale your brand presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-2xl glass-card hover:shadow-premium transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${agent.accent === "accent" ? "from-accent/5 to-transparent" : "from-primary/5 to-transparent"} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${agent.accent === "accent" ? "bg-accent/10" : "bg-primary/10"} flex items-center justify-center group-hover:shadow-glow transition-all duration-500`}>
                    <agent.icon className={`w-7 h-7 ${agent.accent === "accent" ? "text-accent" : "text-primary"}`} />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">{agent.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{agent.description}</p>
                <div className="space-y-2.5">
                  {agent.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm text-card-foreground">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${agent.accent === "accent" ? "text-accent" : "text-primary"}`} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
