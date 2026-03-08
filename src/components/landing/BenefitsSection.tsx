import { Search, Rocket, BarChart3, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Search,
    title: "Discover Creators",
    description: "AI-powered search across Instagram, YouTube, TikTok, and more. Filter by niche, audience, engagement, and location.",
  },
  {
    icon: Rocket,
    title: "Run Campaigns",
    description: "Launch campaigns in minutes. AI handles outreach, negotiations, and deliverable tracking automatically.",
  },
  {
    icon: BarChart3,
    title: "Track Analytics",
    description: "Real-time dashboards with views, engagement, reach, clicks, conversions, and ROI metrics.",
  },
  {
    icon: ShieldCheck,
    title: "Pay Securely",
    description: "Escrow-based payments protect both brands and creators. Funds release only on deliverable approval.",
  },
];

const BenefitsSection = () => {
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
            Everything You Need to <span className="text-gradient">Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            One platform to manage your entire influencer marketing workflow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-glow transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
