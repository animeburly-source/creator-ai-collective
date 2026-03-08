import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Instagram, Youtube, Twitter, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const creators = [
  { name: "Priya Sharma", id: "priya-sharma", category: "Fashion", followers: "2.1M", engagement: "4.8%", platforms: ["instagram", "youtube"], avatar: "PS" },
  { name: "Alex Chen", id: "alex-chen", category: "Tech", followers: "890K", engagement: "6.2%", platforms: ["youtube", "twitter"], avatar: "AC" },
  { name: "Maya Rodriguez", id: "maya-rodriguez", category: "Fitness", followers: "1.5M", engagement: "5.1%", platforms: ["instagram"], avatar: "MR" },
  { name: "Raj Patel", id: "raj-patel", category: "Food", followers: "3.2M", engagement: "7.3%", platforms: ["instagram", "youtube"], avatar: "RP" },
  { name: "Sarah Kim", id: "sarah-kim", category: "Beauty", followers: "1.8M", engagement: "5.9%", platforms: ["instagram", "youtube", "twitter"], avatar: "SK" },
  { name: "James Okafor", id: "james-okafor", category: "Gaming", followers: "4.1M", engagement: "8.1%", platforms: ["youtube", "twitter"], avatar: "JO" },
];

const platformIcon = (p: string) => {
  switch (p) {
    case "instagram": return <Instagram className="w-3.5 h-3.5" />;
    case "youtube": return <Youtube className="w-3.5 h-3.5" />;
    case "twitter": return <Twitter className="w-3.5 h-3.5" />;
    default: return null;
  }
};

const CreatorShowcase = () => {
  return (
    <section className="py-28 bg-secondary/30 overflow-hidden">
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
            Top Creators
          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5">
            Featured <span className="text-gradient">Creators</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Top-performing creators ready to amplify your brand
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {creators.map((c, i) => (
            <Link to={`/creator/${c.id}`} key={c.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl glass-card p-6 hover:shadow-premium transition-all duration-500 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center font-bold text-primary text-lg"
                      >
                        {c.avatar}
                      </motion.div>
                      <div>
                        <p className="font-bold text-card-foreground">{c.name}</p>
                        <Badge variant="secondary" className="text-xs mt-1 rounded-full">{c.category}</Badge>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                  <div className="flex items-center justify-between mb-4 py-3 border-t border-b border-border/50">
                    <div>
                      <p className="text-xl font-bold text-card-foreground">{c.followers}</p>
                      <p className="text-xs text-muted-foreground">Followers</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-primary">{c.engagement}</p>
                      <p className="text-xs text-muted-foreground">Engagement</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {c.platforms.map((p) => (
                      <div key={p} className="w-8 h-8 rounded-lg bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                        {platformIcon(p)}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorShowcase;
