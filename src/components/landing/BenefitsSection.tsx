import { Search, Rocket, BarChart3, ShieldCheck, ArrowUpRight } from "lucide-react";
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
            Platform Features
          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5 text-balance">
            Everything You Need to <span className="text-gradient">Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            One platform to manage your entire influencer marketing workflow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-2xl glass-card hover:shadow-premium transition-all duration-500 overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-500">
                  <b.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-card-foreground">{b.title}</h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
